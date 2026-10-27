import { createHmac } from 'crypto';
import {
  createCashfreeSubscription,
  verifyCashfreeWebhookSignature,
} from '@/lib/cashfree';

describe('cashfree helpers', () => {
  const originalFetch = global.fetch;
  const originalEnv = process.env;

  function jsonResponse(payload: unknown, ok = true, status = 200): Response {
    return {
      ok,
      status,
      json: async () => payload,
    } as Response;
  }

  beforeEach(() => {
    process.env = {
      ...originalEnv,
      CASHFREE_APP_ID: 'cf_app_id',
      CASHFREE_SECRET_KEY: 'cf_secret',
      CASHFREE_WEBHOOK_SECRET: 'webhook_secret',
      CASHFREE_ENV: 'production',
      NEXT_PUBLIC_APP_URL: 'https://cv-prime.in',
    };
  });

  afterEach(() => {
    global.fetch = originalFetch;
    process.env = originalEnv;
    jest.restoreAllMocks();
  });

  it('creates a monthly subscription with INR plan pricing and user tags', async () => {
    jest.spyOn(Date, 'now').mockReturnValue(1781200000000);
    const fetchMock = jest.fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>(
      async (_input, init) => {
        const body = JSON.parse(String(init?.body)) as {
          subscription_id: string;
          plan_details: { plan_recurring_amount: number; plan_currency: string };
          subscription_tags: Record<string, string>;
        };

        expect(init?.method).toBe('POST');
        expect(body.plan_details.plan_recurring_amount).toBe(249);
        expect(body.plan_details.plan_currency).toBe('INR');
        expect(body.subscription_tags.userId).toBe('user-12345678');
        expect(body.subscription_tags.cadence).toBe('monthly');

        return jsonResponse({
          subscription_id: body.subscription_id,
          cf_subscription_id: 'cf_sub_test',
          subscription_status: 'INITIALIZED',
          authorization_status: 'PENDING',
          subscription_session_id: 'session_test',
        });
      }
    );
    global.fetch = fetchMock;

    const subscription = await createCashfreeSubscription({
      userId: 'user-12345678',
      email: 'user@example.com',
    });

    expect(subscription.subscriptionId).toBe('cvp_sub_user-123_1781200000000');
    expect(subscription.status).toBe('INITIALIZED');
    expect(subscription.subscriptionSessionId).toBe('session_test');
    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.cashfree.com/pg/subscriptions',
      expect.objectContaining({
        headers: expect.objectContaining({
          'x-client-id': 'cf_app_id',
          'x-client-secret': 'cf_secret',
          'x-api-version': '2025-01-01',
        }),
      })
    );
  });

  it('verifies webhook signatures against timestamp and raw body', () => {
    const body = JSON.stringify({ type: 'PAYMENT_SUCCESS_WEBHOOK' });
    const timestamp = Math.floor(Date.now() / 1000).toString();
    const signature = createHmac('sha256', 'webhook_secret')
      .update(`${timestamp}${body}`)
      .digest('base64');

    expect(verifyCashfreeWebhookSignature({ body, signature, timestamp })).toBe(true);
    expect(verifyCashfreeWebhookSignature({ body, signature: 'bad-signature', timestamp })).toBe(false);
  });

  // Regression: verifyCashfreeWebhookSignature validated the HMAC over
  // timestamp+body but never checked the timestamp was recent, unlike the
  // Resend webhook — a correctly-signed but old payload (captured from logs,
  // or a provider redelivery of a stale event) would verify forever. A
  // replayed "ACTIVE" subscription event after a real cancellation would
  // incorrectly restore Pro access.
  it('rejects a validly-signed but stale (replayed) webhook timestamp', () => {
    const body = JSON.stringify({ type: 'SUBSCRIPTION_ACTIVATED_WEBHOOK' });
    const staleTimestamp = (Math.floor(Date.now() / 1000) - 301).toString();
    const signature = createHmac('sha256', 'webhook_secret')
      .update(`${staleTimestamp}${body}`)
      .digest('base64');

    expect(
      verifyCashfreeWebhookSignature({ body, signature, timestamp: staleTimestamp })
    ).toBe(false);
  });

  it('rejects a non-numeric or missing timestamp outright', () => {
    const body = JSON.stringify({ type: 'PAYMENT_SUCCESS_WEBHOOK' });
    const signature = createHmac('sha256', 'webhook_secret').update(`garbage${body}`).digest('base64');

    expect(verifyCashfreeWebhookSignature({ body, signature, timestamp: 'garbage' })).toBe(false);
  });
});
