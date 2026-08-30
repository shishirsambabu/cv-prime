import { syncBillingSubscription } from '@/lib/billingSync';
import { isCashfreeRequestError } from '@/lib/cashfree';
import { sendPurchaseSuccessEmail } from '@/lib/email/lifecycle';
import { upgradeToPro } from '@/lib/plan';
import { createAdminClient } from '@/lib/supabase/admin';

const SUCCESS = ['SUCCESS', 'PAID', 'CAPTURED', 'COMPLETED'];
const PURCHASE_EMAIL_HEAL_WINDOW_MS = 72 * 60 * 60 * 1000; // only heal recent, relevant purchases

export interface ReconcileSummary {
  checked: number;
  correct: number;
  repaired: number;
  healedEmails: number;
  unresolved: number;
  incorrectPremium: number;
  repairs: Array<{ userId: string; kind: string; detail: string }>;
}

async function logRepair(kind: string, userId: string, detail: Record<string, unknown>, resolved = true): Promise<void> {
  const admin = createAdminClient();
  if (!admin) return;
  await admin
    .from('entitlement_repairs')
    .insert([{ user_id: userId, kind, detail: detail as never, resolved }] as never);
}

async function latestSuccessfulPayment(
  userId: string
): Promise<{ orderId: string; amount: number; currency: string; createdAt: string } | null> {
  const admin = createAdminClient();
  if (!admin) return null;
  const { data } = await admin
    .from('payments')
    .select('gateway_order_id, amount, currency, status, created_at')
    .eq('user_id', userId)
    .in('status', SUCCESS)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();
  const row = data as
    | { gateway_order_id: string | null; amount: number; currency: string; created_at: string | null }
    | null;
  if (!row?.gateway_order_id) return null;
  return {
    orderId: row.gateway_order_id,
    amount: (row.amount ?? 0) / 100, // stored in paise
    currency: row.currency ?? 'INR',
    createdAt: row.created_at ?? new Date().toISOString(),
  };
}

async function candidateUserIds(recentOnly: boolean): Promise<string[]> {
  const admin = createAdminClient();
  if (!admin) return [];

  if (recentOnly) {
    const since = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString();
    const { data } = await admin
      .from('payments')
      .select('user_id, created_at')
      .gte('created_at', since);
    const ids = new Set(((data as Array<{ user_id: string }> | null) ?? []).map((r) => r.user_id));
    return [...ids];
  }

  const { data } = await admin
    .from('profiles')
    .select('id, billing_subscription_id')
    .not('billing_subscription_id', 'is', null);
  return ((data as Array<{ id: string }> | null) ?? []).map((r) => r.id);
}

async function currentPlan(userId: string): Promise<'free' | 'pro'> {
  const admin = createAdminClient();
  if (!admin) return 'free';
  const { data } = await admin.from('profiles').select('plan').eq('id', userId).maybeSingle();
  return (data as { plan?: string } | null)?.plan === 'pro' ? 'pro' : 'free';
}

async function purchaseEmailExists(orderId: string): Promise<boolean> {
  const admin = createAdminClient();
  if (!admin) return true; // fail safe: assume sent, never double-send blindly
  const { data } = await admin
    .from('email_messages')
    .select('id')
    .eq('idempotency_key', `purchase-thank-you:${orderId}`)
    .maybeSingle();
  return Boolean(data);
}

/**
 * Compare Cashfree truth against CV Prime entitlement truth and repair safe
 * discrepancies. Never removes access on ambiguous/provider-unreachable states.
 * Returns a summary suitable for logging and P0 alerting.
 */
export async function reconcileEntitlements({ recentOnly = false }: { recentOnly?: boolean } = {}): Promise<ReconcileSummary> {
  const summary: ReconcileSummary = {
    checked: 0,
    correct: 0,
    repaired: 0,
    healedEmails: 0,
    unresolved: 0,
    incorrectPremium: 0,
    repairs: [],
  };

  const admin = createAdminClient();
  if (!admin) return summary;

  const userIds = await candidateUserIds(recentOnly);

  for (const userId of userIds) {
    summary.checked += 1;
    let repairedThisUser = false;

    // 1) Pull provider truth and apply it (handles active + terminal states).
    try {
      await syncBillingSubscription({ userId });
    } catch (error) {
      if (isCashfreeRequestError(error)) {
        summary.unresolved += 1;
        await logRepair('provider_unreachable', userId, { status: error.status }, false);
        continue;
      }
      // Non-provider error — record but keep going.
      summary.unresolved += 1;
      await logRepair('sync_error', userId, { message: error instanceof Error ? error.message : 'unknown' }, false);
      continue;
    }

    // 2) Case A: a successful payment exists but the plan is still free.
    const payment = await latestSuccessfulPayment(userId);
    let plan = await currentPlan(userId);
    if (payment && plan === 'free') {
      await upgradeToPro(userId);
      plan = 'pro';
      repairedThisUser = true;
      await logRepair('missing_pro', userId, { orderId: payment.orderId });
      summary.repairs.push({ userId, kind: 'missing_pro', detail: payment.orderId });
    }

    // 3) Self-heal a missing purchase email for a recent, still-relevant order.
    if (payment && plan === 'pro') {
      const recent = Date.now() - new Date(payment.createdAt).getTime() < PURCHASE_EMAIL_HEAL_WINDOW_MS;
      if (recent && !(await purchaseEmailExists(payment.orderId))) {
        const outcome = await sendPurchaseSuccessEmail({
          userId,
          orderId: payment.orderId,
          amount: payment.amount,
          currency: payment.currency,
          purchaseDate: payment.createdAt,
        });
        if (outcome.status === 'sent') {
          summary.healedEmails += 1;
          await logRepair('missing_purchase_email', userId, { orderId: payment.orderId });
        }
      }
    }

    if (repairedThisUser) summary.repaired += 1;
    else summary.correct += 1;
  }

  return summary;
}
