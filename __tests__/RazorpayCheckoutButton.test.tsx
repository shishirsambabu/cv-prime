import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { RazorpayCheckoutButton } from '@/components/payments/RazorpayCheckoutButton';

const mockRefresh = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    refresh: mockRefresh,
  }),
}));

describe('RazorpayCheckoutButton', () => {
  const originalFetch = global.fetch;
  const originalRazorpay = window.Razorpay;

  function jsonResponse(payload: unknown, ok = true, status = 200): Response {
    return {
      ok,
      status,
      json: async () => payload,
    } as Response;
  }

  afterEach(() => {
    global.fetch = originalFetch;
    window.Razorpay = originalRazorpay;
    jest.clearAllMocks();
  });

  it('creates an order, opens Razorpay, and verifies the payment', async () => {
    const fetchMock = jest.fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>(
      async (input) => {
        if (String(input) === '/api/razorpay/create-order') {
          return jsonResponse({
            orderId: 'order_test',
            amount: 24900,
            currency: 'INR',
            key: 'rzp_test_key',
            billingCycle: 'monthly',
            description: 'CV Prime Pro monthly',
            displayPrice: 'Rs 249',
            email: 'user@example.com',
          });
        }

        return jsonResponse({
          ok: true,
          plan: 'pro',
        });
      }
    );
    global.fetch = fetchMock;
    const openMock = jest.fn();
    window.Razorpay = jest.fn().mockImplementation(
      (options: {
        handler(response: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }): void;
      }) => ({
        open: () => {
          openMock();
          options.handler({
            razorpay_payment_id: 'pay_test',
            razorpay_order_id: 'order_test',
            razorpay_signature: 'signature_test',
          });
        },
      })
    ) as unknown as NonNullable<typeof window.Razorpay>;

    render(<RazorpayCheckoutButton billingCycle="monthly" />);

    fireEvent.click(screen.getByRole('button', { name: 'Pay with Razorpay' }));

    await waitFor(() => {
      expect(openMock).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(screen.getByText(/Pro unlocked/i)).toBeInTheDocument();
    });
    expect(fetchMock).toHaveBeenCalledWith(
      '/api/razorpay/create-order',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ billingCycle: 'monthly' }),
      })
    );
    expect(fetchMock).toHaveBeenCalledWith(
      '/api/razorpay/verify',
      expect.objectContaining({
        method: 'POST',
      })
    );
    expect(mockRefresh).toHaveBeenCalled();
  });
});
