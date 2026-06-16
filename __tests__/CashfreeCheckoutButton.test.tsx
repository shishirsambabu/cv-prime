import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { CashfreeCheckoutButton } from '@/components/payments/CashfreeCheckoutButton';

const mockRefresh = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    refresh: mockRefresh,
  }),
}));

describe('CashfreeCheckoutButton', () => {
  const originalFetch = global.fetch;
  const originalCashfree = window.Cashfree;

  function jsonResponse(payload: unknown, ok = true, status = 200): Response {
    return {
      ok,
      status,
      json: async () => payload,
    } as Response;
  }

  afterEach(() => {
    global.fetch = originalFetch;
    window.Cashfree = originalCashfree;
    jest.clearAllMocks();
  });

  it('creates an order, opens Cashfree, and verifies the payment', async () => {
    const fetchMock = jest.fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>(
      async (input) => {
        if (String(input) === '/api/cashfree/create-order') {
          return jsonResponse({
            orderId: 'order_test',
            paymentSessionId: 'session_test',
            billingCycle: 'monthly',
            description: 'CV Prime Pro monthly',
            displayPrice: 'Rs 249',
            environment: 'production',
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
    const checkoutMock = jest.fn().mockResolvedValue({ paymentDetails: {} });
    window.Cashfree = jest.fn().mockImplementation(() => ({
      checkout: checkoutMock,
    })) as NonNullable<typeof window.Cashfree>;

    render(<CashfreeCheckoutButton billingCycle="monthly" />);

    fireEvent.click(screen.getByRole('button', { name: 'Pay with Cashfree' }));

    await waitFor(() => {
      expect(checkoutMock).toHaveBeenCalledWith({
        paymentSessionId: 'session_test',
        redirectTarget: '_modal',
      });
    });
    await waitFor(() => {
      expect(screen.getByText(/Pro unlocked/i)).toBeInTheDocument();
    });
    expect(fetchMock).toHaveBeenCalledWith(
      '/api/cashfree/create-order',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ billingCycle: 'monthly' }),
      })
    );
    expect(fetchMock).toHaveBeenCalledWith(
      '/api/cashfree/verify',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ orderId: 'order_test' }),
      })
    );
    expect(mockRefresh).toHaveBeenCalled();
  });
});
