/**
 * @jest-environment node
 */
// Regression coverage for a webhook reliability bug: extractDetails() used to
// fold Cashfree's own `customer.customer_id` field into the same
// `userIdFromTags` value returned by our own order_tags/subscription_tags,
// and resolveUserId() trusted whichever one came back outright. Those tags
// are set by us to the real authenticated user.id, so they are safe to trust
// — but customer_id is Cashfree's own field, echoed back as-is, and
// create-order once sent a differently-formatted value there. Any webhook
// payload missing order_tags/subscription_tags (a delivery-shape variance,
// or simply an old order predating a customer_id format change) fell back to
// an unverified customer_id, which reached upgradeToPro()/downgradeToFree()
// as if it were a real profile id. Those throw when no profile row matches,
// and nothing in the route caught that — so Cashfree retried the same
// webhook forever against the same unresolvable id, and a real paying
// customer never got entitled.
//
// The fix verifies customer_id against `profiles` before trusting it, the
// same way the subscriptionId fallback already verifies via
// `billing_subscription_id`. A customer_id that matches a real profile still
// resolves and entitles; one that matches nothing now resolves to "no
// userId", which the route already handles safely (logs and returns
// `{ ok: true, ignored: true }` — no throw, no retry storm).

const profiles = new Map<string, { id: string }>();
const profilesUpdate = jest.fn().mockResolvedValue({ error: null });
const paymentsUpsert = jest.fn().mockResolvedValue({ error: null });

jest.mock('../lib/supabase/admin', () => ({
  createAdminClient: () => ({
    from: (table: string) => {
      if (table === 'profiles') {
        return {
          select: () => ({
            eq: (column: string, value: string) => ({
              maybeSingle: async () => {
                if (column === 'id') {
                  return { data: profiles.get(value) ?? null, error: null };
                }
                if (column === 'billing_subscription_id') {
                  return { data: null, error: null };
                }
                throw new Error(`unexpected profiles.eq column: ${column}`);
              },
            }),
          }),
          update: (payload: unknown) => ({
            eq: async (_column: string, id: string) => profilesUpdate(id, payload),
          }),
        };
      }

      if (table === 'payments') {
        return {
          select: () => ({
            eq: () => ({
              in: async () => ({ count: 0, error: null }),
            }),
          }),
          upsert: async (rows: unknown, options: unknown) => paymentsUpsert(rows, options),
        };
      }

      throw new Error(`unexpected table: ${table}`);
    },
  }),
}));

jest.mock('../lib/supabase/server', () => ({
  createClient: () => {
    throw new Error('createClient() should not be reached — createAdminClient() is mocked non-null');
  },
}));

jest.mock('../lib/cashfree', () => ({
  verifyCashfreeWebhookSignature: () => true,
}));

const upgradeToPro = jest.fn().mockResolvedValue(undefined);
const downgradeToFree = jest.fn().mockResolvedValue(undefined);
jest.mock('../lib/plan', () => ({
  upgradeToPro: (userId: string) => upgradeToPro(userId),
  downgradeToFree: (userId: string) => downgradeToFree(userId),
}));

jest.mock('../lib/email/lifecycle', () => ({
  sendPurchaseSuccessEmail: jest.fn().mockResolvedValue(undefined),
  sendRenewalEmail: jest.fn().mockResolvedValue(undefined),
  sendPaymentFailedEmail: jest.fn().mockResolvedValue(undefined),
  sendCancellationEmail: jest.fn().mockResolvedValue(undefined),
}));

import { POST } from '@/app/api/webhooks/billing/route';

function webhookRequest(data: Record<string, unknown>): Request {
  const body = JSON.stringify({ type: 'PAYMENT_SUCCESS_WEBHOOK', data });
  return new Request('http://localhost/api/webhooks/billing', {
    method: 'POST',
    headers: { 'x-webhook-signature': 'sig', 'x-webhook-timestamp': '1' },
    body,
  });
}

const REAL_USER_ID = '11111111-1111-4111-8111-111111111111';

function ltdPaymentPayload(customerId: string): Record<string, unknown> {
  return {
    order: { order_id: 'ltd_test_order_1' },
    payment: { payment_status: 'SUCCESS', payment_amount: 999, payment_currency: 'INR' },
    customer_details: { customer_id: customerId },
  };
}

describe('webhook billing: customer_id fallback is verified, not trusted outright', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    profiles.clear();
    profiles.set(REAL_USER_ID, { id: REAL_USER_ID });
  });

  it('entitles the user when customer_id matches a real profile', async () => {
    const response = await POST(webhookRequest(ltdPaymentPayload(REAL_USER_ID)));
    const payload = (await response.json()) as { ok: boolean; ignored?: boolean };

    expect(response.status).toBe(200);
    expect(payload.ok).toBe(true);
    expect(payload.ignored).toBeUndefined();
    expect(upgradeToPro).toHaveBeenCalledWith(REAL_USER_ID);
  });

  it('does not call upgradeToPro, and never throws, when customer_id matches no profile', async () => {
    const response = await POST(webhookRequest(ltdPaymentPayload('some-unrelated-cashfree-customer-id')));
    const payload = (await response.json()) as { ok: boolean; ignored?: boolean };

    // Before the fix, this reached upgradeToPro() with an id that matched no
    // row, which throws — uncaught here, producing a 500 that Cashfree would
    // retry forever against the exact same unresolvable payload.
    expect(response.status).toBe(200);
    expect(payload.ok).toBe(true);
    expect(payload.ignored).toBe(true);
    expect(upgradeToPro).not.toHaveBeenCalled();
  });
});
