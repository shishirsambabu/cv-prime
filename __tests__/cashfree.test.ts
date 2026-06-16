import { createHmac } from 'crypto';
import {
  createCashfreeOrder,
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

  it('creates a Cashfree order with INR plan pricing and order tags', async () => {
    jest.spyOn(Date, 'now').mockReturnValue(1781200000000);
    const fetchMock = jest.fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>(
      async (_input, init) => {
        const body = JSON.parse(String(init?.body)) as {
          order_id: string;
          order_amount: number;
          order_currency: string;
          order_tags: Record<string, string>;
        };

        expect(init?.method).toBe('POST');
        expect(body.order_amount).toBe(249);
        expect(body.order_currency).toBe('INR');
        expect(body.order_tags.userId).toBe('user-12345678');
        expect(body.order_tags.billingCycle).toBe('monthly');

        return jsonResponse({
          order_id: body.order_id,
          order_amount: body.order_amount,
          order_currency: body.order_currency,
          order_status: 'ACTIVE',
          payment_session_id: 'session_test',
          order_tags: body.order_tags,
        });
      }
    );
    global.fetch = fetchMock;

    const order = await createCashfreeOrder({
      userId: 'user-12345678',
      billingCycle: 'monthly',
      email: 'user@example.com',
    });

    expect(order.id).toBe('cvp_user-123_1781200000000');
    expect(order.amount).toBe(249);
    expect(order.paymentSessionId).toBe('session_test');
    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.cashfree.com/pg/orders',
      expect.objectContaining({
        headers: expect.objectContaining({
          'x-client-id': 'cf_app_id',
          'x-client-secret': 'cf_secret',
        }),
      })
    );
  });

  it('verifies webhook signatures against timestamp and raw body', () => {
    const body = JSON.stringify({ type: 'PAYMENT_SUCCESS_WEBHOOK' });
    const timestamp = '1781200000';
    const signature = createHmac('sha256', 'webhook_secret')
      .update(`${timestamp}${body}`)
      .digest('base64');

    expect(verifyCashfreeWebhookSignature({ body, signature, timestamp })).toBe(true);
    expect(verifyCashfreeWebhookSignature({ body, signature: 'bad-signature', timestamp })).toBe(false);
  });
});
