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

  // The full sweep must cover BOTH paying cohorts:
  //   1. subscription holders (profiles.billing_subscription_id), and
  //   2. anyone who has ever completed a payment — one-time / lifetime-deal
  //      customers have no subscription id at all, so a subscription-only query
  //      silently skipped the exact people most likely to be stuck on 'free'.
  const ids = new Set<string>();

  const { data: subs } = await admin
    .from('profiles')
    .select('id, billing_subscription_id')
    .not('billing_subscription_id', 'is', null);
  ((subs as Array<{ id: string }> | null) ?? []).forEach((r) => ids.add(r.id));

  const { data: payers } = await admin
    .from('payments')
    .select('user_id, status')
    .in('status', SUCCESS);
  ((payers as Array<{ user_id: string }> | null) ?? []).forEach((r) => ids.add(r.user_id));

  return [...ids];
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
    .select('id, status')
    .eq('idempotency_key', `purchase-thank-you:${orderId}`)
    .maybeSingle();
  // Only a genuinely delivered/accepted send counts as "already sent". A row
  // stuck at queued/failed must NOT block the heal — that was the whole point.
  const status = (data as { status?: string } | null)?.status;
  return status === 'sent' || status === 'delivered';
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
    //    Returns 'pro' | 'free' | null — null means the user has no subscription
    //    with the provider at all (e.g. a one-time / lifetime-deal purchase).
    let providerVerdict: 'free' | 'pro' | null = null;
    try {
      providerVerdict = await syncBillingSubscription({ userId });
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
    //    Only repair when the provider has NOT just told us the subscription is
    //    terminated. Without this gate, a cancelled subscriber is downgraded by
    //    syncBillingSubscription above and then immediately re-granted Pro here
    //    off their original (still successful) payment row — forever.
    const payment = await latestSuccessfulPayment(userId);
    let plan = await currentPlan(userId);
    if (payment && plan === 'free' && providerVerdict !== 'free') {
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
