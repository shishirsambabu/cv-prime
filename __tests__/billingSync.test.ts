// Regression coverage for a plan-escalation bug: syncBillingSubscription used
// to accept a `subscriptionId` from the caller (a POST body field, or a
// `?subscription_id=` query param on /settings) and trust it outright — fetch
// whatever subscription that id named from Cashfree and, if it looked active,
// apply it to the CALLING user's own profile and upgrade them to Pro. Since
// subscription ids are not secret (they're echoed in checkout redirect URLs),
// any authenticated user could apply someone else's active subscription to
// their own account. The fix resolves the subscription id only from the
// caller's own `profiles` row, never from caller input.

const profilesSelectEq = jest.fn();
const profilesUpdateEq = jest.fn();

jest.mock('../lib/supabase/admin', () => ({
  createAdminClient: () => ({
    from: (table: string) => {
      if (table !== 'profiles') {
        throw new Error(`unexpected table: ${table}`);
      }
      return {
        select: () => ({
          eq: (_column: string, id: string) => ({
            maybeSingle: async () => profilesSelectEq(id),
          }),
        }),
        update: (payload: unknown) => ({
          eq: async (_column: string, id: string) => profilesUpdateEq(id, payload),
        }),
      };
    },
  }),
}));

const getCashfreeSubscription = jest.fn();
jest.mock('../lib/cashfree', () => ({
  getCashfreeSubscription: (subscriptionId: string) => getCashfreeSubscription(subscriptionId),
}));

const upgradeToPro = jest.fn();
const downgradeToFree = jest.fn();
jest.mock('../lib/plan', () => ({
  upgradeToPro: (userId: string) => upgradeToPro(userId),
  downgradeToFree: (userId: string) => downgradeToFree(userId),
}));

import { syncBillingSubscription } from '@/lib/billingSync';

describe('syncBillingSubscription', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    profilesSelectEq.mockResolvedValue({
      data: { billing_subscription_id: 'cvp_sub_owner123_1000' },
      error: null,
    });
    profilesUpdateEq.mockResolvedValue({ error: null });
    getCashfreeSubscription.mockResolvedValue({
      subscriptionId: 'cvp_sub_owner123_1000',
      providerSubscriptionId: 'cf_1',
      status: 'ACTIVE',
      authStatus: 'ACTIVE',
      currentPeriodStart: null,
      currentPeriodEnd: null,
    });
  });

  it('only ever looks up the subscription id on the caller\'s own profile row', async () => {
    await syncBillingSubscription({ userId: 'owner-123' });

    expect(profilesSelectEq).toHaveBeenCalledWith('owner-123');
    expect(getCashfreeSubscription).toHaveBeenCalledWith('cvp_sub_owner123_1000');
    expect(profilesUpdateEq).toHaveBeenCalledWith('owner-123', expect.any(Object));
    expect(upgradeToPro).toHaveBeenCalledWith('owner-123');
  });

  it('has no way to accept a caller-supplied subscription id (only userId is a valid input)', async () => {
    // If this ever grows a `subscriptionId` (or similar) parameter again, it
    // must not be trusted as the lookup target — see lib/billingSync.ts.
    const maliciousInput = {
      userId: 'attacker-456',
      subscriptionId: 'cvp_sub_someone-elses-sub_999',
    } as unknown as Parameters<typeof syncBillingSubscription>[0];

    profilesSelectEq.mockResolvedValueOnce({
      data: { billing_subscription_id: null },
      error: null,
    });

    const result = await syncBillingSubscription(maliciousInput);

    // Falls back to "no subscription on file for this user" instead of
    // fetching/applying the attacker-supplied subscription id.
    expect(getCashfreeSubscription).not.toHaveBeenCalled();
    expect(upgradeToPro).not.toHaveBeenCalled();
    expect(result).toBeNull();
  });

  it('never upgrades a user whose own profile has no subscription on file', async () => {
    profilesSelectEq.mockResolvedValueOnce({
      data: { billing_subscription_id: null },
      error: null,
    });

    const result = await syncBillingSubscription({ userId: 'no-sub-user' });

    expect(getCashfreeSubscription).not.toHaveBeenCalled();
    expect(upgradeToPro).not.toHaveBeenCalled();
    expect(result).toBeNull();
  });
});
