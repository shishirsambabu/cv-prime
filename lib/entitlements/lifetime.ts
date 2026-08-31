import { createAdminClient } from '@/lib/supabase/admin';

const SUCCESS_STATUSES = ['SUCCESS', 'PAID', 'CAPTURED', 'COMPLETED'];

/** Orders created by the lifetime-deal checkout are id-prefixed `ltd_`
 *  (app/api/billing/create-order) and tagged `plan: 'ltd'`. */
export const LTD_ORDER_PREFIX = 'ltd_';

/**
 * Does this user hold a lifetime (one-time) Pro entitlement?
 *
 * CV Prime Pro is sold as a ₹999 one-time lifetime deal; the recurring
 * subscription flow is feature-flagged off (CASHFREE_SUBSCRIPTIONS_ENABLED).
 * A lifetime purchase must therefore NEVER be revoked by a subscription
 * event, and must always be repairable back to 'pro'.
 *
 * Scoping on the `ltd_` order prefix keeps the two entitlement rules apart:
 * a lifetime payment grants permanent access, while a subscription charge
 * only grants access for as long as the provider says the subscription is
 * live. Without this distinction the layers fight — a cancelled subscriber
 * would be downgraded and then silently re-promoted off an old payment row.
 */
export async function hasLifetimeEntitlement(userId: string): Promise<boolean> {
  const admin = createAdminClient();
  if (!admin) {
    return false;
  }

  const { data, error } = await admin
    .from('payments')
    .select('gateway_order_id, status')
    .eq('user_id', userId)
    .in('status', SUCCESS_STATUSES)
    .like('gateway_order_id', `${LTD_ORDER_PREFIX}%`)
    .limit(1);

  if (error) {
    // Throw rather than guess: a false here would let a revoke path strip a
    // paying customer's access on a transient read failure. Callers decide —
    // revoke paths treat an error as "do not revoke", grant paths as "do not grant".
    throw new Error(`LIFETIME_CHECK_FAILED: ${error.message}`);
  }

  return ((data as Array<unknown> | null) ?? []).length > 0;
}
