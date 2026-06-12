import { createHmac } from 'crypto';
import {
  createRazorpayOrder,
  verifyRazorpayPaymentSignature,
  verifyRazorpayWebhookSignature,
} from '@/lib/razorpay';

describe('razorpay helpers', () => {
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
      RAZORPAY_KEY_ID: 'rzp_test_key',
      RAZORPAY_KEY_SECRET: 'rzp_secret',
      RAZORPAY_WEBHOOK_SECRET: 'webhook_secret',
    };
  });

  afterEach(() => {
    global.fetch = originalFetch;
    process.env = originalEnv;
    jest.restoreAllMocks();
  });

  it('creates a Razorpay order with INR plan pricing and user notes', async () => {
    jest.spyOn(Date, 'now').mockReturnValue(1781200000000);
    const fetchMock = jest.fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>(
      async (_input, init) => {
        const body = JSON.parse(String(init?.body)) as {
          amount: number;
          currency: string;
          receipt: string;
          notes: Record<string, string>;
        };

        expect(init?.method).toBe('POST');
        expect(body.amount).toBe(24900);
        expect(body.currency).toBe('INR');
        expect(body.notes.userId).toBe('user-12345678');
        expect(body.notes.billingCycle).toBe('monthly');

        return jsonResponse({
          id: 'order_test',
          amount: body.amount,
          currency: body.currency,
          receipt: body.receipt,
          status: 'created',
          notes: body.notes,
        });
      }
    );
    global.fetch = fetchMock;

    const order = await createRazorpayOrder({
      userId: 'user-12345678',
      billingCycle: 'monthly',
      email: 'user@example.com',
    });

    expect(order.id).toBe('order_test');
    expect(order.amount).toBe(24900);
    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.razorpay.com/v1/orders',
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: expect.stringContaining('Basic '),
        }),
      })
    );
  });

  it('verifies the checkout payment signature', () => {
    const signature = createHmac('sha256', 'rzp_secret')
      .update('order_123|pay_123')
      .digest('hex');

    expect(
      verifyRazorpayPaymentSignature({
        orderId: 'order_123',
        paymentId: 'pay_123',
        signature,
      })
    ).toBe(true);
    expect(
      verifyRazorpayPaymentSignature({
        orderId: 'order_123',
        paymentId: 'pay_123',
        signature: 'bad-signature',
      })
    ).toBe(false);
  });

  it('verifies webhook signatures against the raw body', () => {
    const body = JSON.stringify({ event: 'payment.captured' });
    const signature = createHmac('sha256', 'webhook_secret').update(body).digest('hex');

    expect(verifyRazorpayWebhookSignature({ body, signature })).toBe(true);
    expect(verifyRazorpayWebhookSignature({ body, signature: 'bad-signature' })).toBe(false);
  });
});
