/**
 * @jest-environment node
 */
// Regression coverage: when createCashfreeSubscription() succeeds but the
// follow-up `profiles` update fails (a transient Supabase error), the route
// used to throw and return BILLING_START_FAILED to the client — discarding
// the authorizationUrl and never letting the user complete the mandate. But
// Cashfree already has this subscription registered and tagged with the
// real user.id (subscription_tags.userId in lib/cashfree.ts), so it is not
// actually gone: the webhook can still resolve and backfill this profile row
// once the mandate is authorized. Blocking the user here just orphans a
// live Cashfree registration with no way for the user to ever authorize it,
// since no charge happens without that authorization anyway. The fix logs
// the DB failure and still returns the authorizationUrl so the user can
// proceed.

const subscriptionUpdateEq = jest.fn().mockResolvedValue({ error: { message: 'db unavailable' } });

jest.mock('../lib/supabase/server', () => ({
  createClient: () => ({
    auth: {
      getUser: async () => ({ data: { user: { id: 'user-123', email: 'user@example.com' } } }),
    },
    from: (table: string) => {
      if (table !== 'profiles') {
        throw new Error(`unexpected table: ${table}`);
      }
      return {
        update: (payload: unknown) => ({
          eq: async (_column: string, id: string) => subscriptionUpdateEq(id, payload),
        }),
      };
    },
  }),
}));

jest.mock('../lib/rateLimit', () => ({
  rateLimit: async () => false,
}));

jest.mock('../lib/cashfree', () => ({
  createCashfreeSubscription: async () => ({
    subscriptionId: 'cvp_sub_user123_1000',
    providerSubscriptionId: 'cf_sub_1',
    status: 'INITIALIZED',
    authStatus: 'PENDING',
    currentPeriodStart: null,
    currentPeriodEnd: null,
    authorizationUrl: 'https://payments.cashfree.com/session/abc123',
    subscriptionSessionId: 'session_abc123',
  }),
  getCashfreeEnvironment: () => 'production',
  isCashfreeRequestError: () => false,
}));

import { POST } from '@/app/api/billing/create-subscription/route';

describe('POST /api/billing/create-subscription', () => {
  const originalEnv = process.env.CASHFREE_SUBSCRIPTIONS_ENABLED;

  beforeAll(() => {
    process.env.CASHFREE_SUBSCRIPTIONS_ENABLED = 'true';
  });

  afterAll(() => {
    process.env.CASHFREE_SUBSCRIPTIONS_ENABLED = originalEnv;
  });

  beforeEach(() => {
    jest.clearAllMocks();
    subscriptionUpdateEq.mockResolvedValue({ error: { message: 'db unavailable' } });
  });

  it('still returns the authorizationUrl when the profile write fails after Cashfree registration succeeds', async () => {
    const response = await POST();
    const payload = (await response.json()) as { ok?: boolean; authorizationUrl?: string; error?: string };

    expect(response.status).toBe(200);
    expect(payload.ok).toBe(true);
    expect(payload.authorizationUrl).toBe('https://payments.cashfree.com/session/abc123');
    expect(payload.error).toBeUndefined();
  });

  it('still returns the authorizationUrl on a successful profile write (unaffected)', async () => {
    subscriptionUpdateEq.mockResolvedValue({ error: null });

    const response = await POST();
    const payload = (await response.json()) as { ok?: boolean; authorizationUrl?: string };

    expect(response.status).toBe(200);
    expect(payload.ok).toBe(true);
    expect(payload.authorizationUrl).toBe('https://payments.cashfree.com/session/abc123');
  });
});
