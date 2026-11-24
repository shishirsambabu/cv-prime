/**
 * @jest-environment node
 */
// Regression coverage: migration 20261124000000_lock_entitlement_columns.sql
// stops a signed-in user from writing plan, usage and billing columns on their
// own profile (they could otherwise point billing_subscription_id at another
// user's live subscription and be upgraded by /api/billing/sync). The two
// routes that stored billing state with the user's own session must therefore
// write through the service role, or every write would be refused.

const userWrites: Array<{ table: string; payload: unknown }> = [];
const adminWrites: Array<{ table: string; payload: unknown }> = [];

function recordingClient(sink: Array<{ table: string; payload: unknown }>) {
  return {
    from: (table: string) => ({
      select: () => ({
        eq: () => ({
          maybeSingle: async () => ({
            data: { billing_subscription_id: 'cvp_sub_user123_1000', billing_current_period_end: null },
            error: null,
          }),
        }),
      }),
      update: (payload: unknown) => ({
        eq: async () => {
          sink.push({ table, payload });
          return { error: null };
        },
      }),
    }),
  };
}

jest.mock('../lib/supabase/server', () => ({
  createClient: () => ({
    auth: {
      getUser: async () => ({ data: { user: { id: 'user-123', email: 'user@example.com' } } }),
    },
    ...recordingClient(userWrites),
  }),
}));

jest.mock('../lib/supabase/admin', () => ({
  createAdminClient: () => recordingClient(adminWrites),
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
  cancelCashfreeSubscription: async () => undefined,
  getCashfreeEnvironment: () => 'production',
  isCashfreeRequestError: () => false,
}));

import { POST as createSubscription } from '@/app/api/billing/create-subscription/route';
import { POST as cancelSubscription } from '@/app/api/billing/cancel/route';

describe('billing routes write billing columns through the service role', () => {
  const originalEnv = process.env.CASHFREE_SUBSCRIPTIONS_ENABLED;

  beforeEach(() => {
    userWrites.length = 0;
    adminWrites.length = 0;
    process.env.CASHFREE_SUBSCRIPTIONS_ENABLED = 'true';
  });

  afterAll(() => {
    process.env.CASHFREE_SUBSCRIPTIONS_ENABLED = originalEnv;
  });

  it('create-subscription stores the subscription id with the admin client', async () => {
    const res = await createSubscription();
    expect(res.status).toBe(200);
    expect(userWrites).toEqual([]);
    expect(adminWrites).toHaveLength(1);
    expect(adminWrites[0]?.payload).toMatchObject({ billing_subscription_id: 'cvp_sub_user123_1000' });
  });

  it('cancel stores the cancel request with the admin client', async () => {
    const res = await cancelSubscription(
      new Request('http://localhost/api/billing/cancel', {
        method: 'POST',
        body: JSON.stringify({ confirm: true }),
      })
    );
    expect(res.status).toBe(200);
    expect(userWrites).toEqual([]);
    expect(adminWrites).toHaveLength(1);
    expect(adminWrites[0]?.payload).toMatchObject({ billing_subscription_status: 'CANCEL_REQUESTED' });
  });
});
