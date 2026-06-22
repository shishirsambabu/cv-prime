import { getCashfreeSubscription } from '@/lib/cashfree';
import { createAdminClient } from '@/lib/supabase/admin';
import { downgradeToFree, upgradeToPro } from '@/lib/plan';

const ACTIVE_SUBSCRIPTION_STATUSES = new Set(['ACTIVE']);
const TERMINAL_SUBSCRIPTION_STATUSES = new Set([
  'CANCELLED',
  'CUSTOMER_CANCELLED',
  'EXPIRED',
  'LINK_EXPIRED',
  'CARD_EXPIRED',
  'TERMINATED',
]);
const ACTIVE_AUTH_STATUSES = new Set(['ACTIVE', 'SUCCESS', 'AUTHORIZED', 'APPROVED']);
const FAILED_AUTH_STATUSES = new Set(['FAILED', 'CANCELLED', 'REJECTED', 'EXPIRED']);

function upper(value: string | null): string | null {
  return value ? value.toUpperCase() : null;
}

export async function syncBillingSubscription({
  userId,
  subscriptionId,
}: {
  userId: string;
  subscriptionId?: string | null;
}): Promise<'free' | 'pro' | null> {
  const admin = createAdminClient();
  if (!admin) {
    throw new Error('SUPABASE_SERVICE_ROLE_NOT_CONFIGURED');
  }

  let targetSubscriptionId = subscriptionId;
  if (!targetSubscriptionId) {
    const { data, error } = await admin
      .from('profiles')
      .select('billing_subscription_id')
      .eq('id', userId)
      .maybeSingle();

    if (error) {
      throw new Error(error.message);
    }

    targetSubscriptionId =
      (data as { billing_subscription_id?: string | null } | null)?.billing_subscription_id ?? null;
  }

  if (!targetSubscriptionId) {
    return null;
  }

  const subscription = await getCashfreeSubscription(targetSubscriptionId);
  const subscriptionStatus = upper(subscription.status);
  const authorizationStatus = upper(subscription.authStatus);

  const { error } = await admin
    .from('profiles')
    .update({
      billing_subscription_id: subscription.subscriptionId,
      billing_provider_subscription_id: subscription.providerSubscriptionId,
      billing_subscription_status: subscriptionStatus,
      billing_authorization_status: authorizationStatus,
      billing_current_period_start: subscription.currentPeriodStart,
      billing_current_period_end: subscription.currentPeriodEnd,
    } as never)
    .eq('id', userId);

  if (error) {
    throw new Error(error.message);
  }

  if (
    (subscriptionStatus ? ACTIVE_SUBSCRIPTION_STATUSES.has(subscriptionStatus) : false) ||
    (authorizationStatus ? ACTIVE_AUTH_STATUSES.has(authorizationStatus) : false)
  ) {
    await upgradeToPro(userId);
    return 'pro';
  }

  if (
    (subscriptionStatus ? TERMINAL_SUBSCRIPTION_STATUSES.has(subscriptionStatus) : false) ||
    (authorizationStatus ? FAILED_AUTH_STATUSES.has(authorizationStatus) : false)
  ) {
    await downgradeToFree(userId);
    return 'free';
  }

  return null;
}
