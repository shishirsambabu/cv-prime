import { NextResponse } from 'next/server';
import { getAdminUserId } from '@/lib/adminAuth';
import { createAdminClient } from '@/lib/supabase/admin';

export const runtime = 'nodejs';

const SUCCESS = ['SUCCESS', 'PAID', 'CAPTURED', 'COMPLETED'];

interface ProfileRow {
  id: string;
  plan: 'free' | 'pro';
  billing_subscription_id: string | null;
  billing_subscription_status: string | null;
  billing_current_period_end: string | null;
  billing_last_payment_status: string | null;
}

/**
 * Admin entitlement audit (spec §11/§56). Answers, per customer, in one call:
 * did they pay, what does CV Prime think their plan is, and was the purchase
 * email delivered — surfacing anyone who paid but lacks access (a P0).
 */
export async function GET(): Promise<NextResponse> {
  const adminUserId = await getAdminUserId();
  if (!adminUserId) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const admin = createAdminClient();
  if (!admin) {
    return NextResponse.json({ error: 'NO_ADMIN' }, { status: 500 });
  }

  // Everyone who has ever paid OR carries a subscription id.
  const { data: paidUserIds } = await admin
    .from('payments')
    .select('user_id, status')
    .in('status', SUCCESS);
  const paidSet = new Set(((paidUserIds as Array<{ user_id: string }> | null) ?? []).map((r) => r.user_id));

  const { data: subProfiles } = await admin
    .from('profiles')
    .select('id')
    .not('billing_subscription_id', 'is', null);
  ((subProfiles as Array<{ id: string }> | null) ?? []).forEach((r) => paidSet.add(r.id));

  const userIds = [...paidSet];
  const rows: Array<Record<string, unknown>> = [];
  let mismatches = 0;

  for (const userId of userIds) {
    const { data: p } = await admin
      .from('profiles')
      .select(
        'id, plan, billing_subscription_id, billing_subscription_status, billing_current_period_end, billing_last_payment_status'
      )
      .eq('id', userId)
      .maybeSingle();
    const profile = p as ProfileRow | null;
    if (!profile) continue;

    const { data: lastPayment } = await admin
      .from('payments')
      .select('gateway_order_id, amount, currency, status, created_at')
      .eq('user_id', userId)
      .in('status', SUCCESS)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();
    const payment = lastPayment as
      | { gateway_order_id: string | null; amount: number; created_at: string | null }
      | null;

    let purchaseEmail = 'n/a';
    if (payment?.gateway_order_id) {
      const { data: msg } = await admin
        .from('email_messages')
        .select('status')
        .eq('idempotency_key', `purchase-thank-you:${payment.gateway_order_id}`)
        .maybeSingle();
      purchaseEmail = (msg as { status?: string } | null)?.status ?? 'missing';
    }

    const paidButNoAccess = Boolean(payment) && profile.plan !== 'pro';
    const accessNoPayment = profile.plan === 'pro' && !payment && !profile.billing_subscription_id;
    const mismatch = paidButNoAccess || accessNoPayment;
    if (mismatch) mismatches += 1;

    rows.push({
      userId,
      plan: profile.plan,
      subscriptionStatus: profile.billing_subscription_status,
      periodEnd: profile.billing_current_period_end,
      lastPaymentStatus: profile.billing_last_payment_status,
      lastPaidOrder: payment?.gateway_order_id ?? null,
      lastPaidAt: payment?.created_at ?? null,
      purchaseEmail,
      mismatch,
      severity: paidButNoAccess ? 'P0_PAID_NO_ACCESS' : accessNoPayment ? 'REVIEW_ACCESS_NO_PAYMENT' : 'ok',
    });
  }

  rows.sort((a, b) => Number(b.mismatch) - Number(a.mismatch));

  return NextResponse.json({
    checked: rows.length,
    mismatches,
    customers: rows,
  });
}
