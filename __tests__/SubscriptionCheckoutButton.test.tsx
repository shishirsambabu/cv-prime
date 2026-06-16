import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SubscriptionCheckoutButton } from '@/components/payments/SubscriptionCheckoutButton';

const mockRefresh = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    refresh: mockRefresh,
  }),
}));

describe('SubscriptionCheckoutButton', () => {
  const originalFetch = global.fetch;
  const originalCashfree = window.Cashfree;
  const originalEnv = process.env;

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
    process.env = originalEnv;
    jest.clearAllMocks();
  });

  it('starts a monthly subscription and opens secure checkout', async () => {
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_CASHFREE_SUBSCRIPTIONS_ENABLED: 'true',
    };
    const fetchMock = jest.fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>(
      async () =>
        jsonResponse({
          ok: true,
          subscriptionId: 'sub_test',
          subscriptionSessionId: 'session_test',
          environment: 'production',
        })
    );
    global.fetch = fetchMock;
    const checkoutMock = jest.fn().mockResolvedValue({});
    window.Cashfree = jest.fn().mockImplementation(() => ({
      checkout: checkoutMock,
    })) as NonNullable<typeof window.Cashfree>;

    render(<SubscriptionCheckoutButton />);

    fireEvent.click(screen.getByRole('button', { name: 'Subscribe monthly' }));

    await waitFor(() => {
      expect(checkoutMock).toHaveBeenCalledWith({
        paymentSessionId: 'session_test',
        redirectTarget: '_modal',
      });
    });
    await waitFor(() => {
      expect(screen.getByText(/Mandate submitted/i)).toBeInTheDocument();
    });
    expect(fetchMock).toHaveBeenCalledWith(
      '/api/billing/create-subscription',
      expect.objectContaining({
        method: 'POST',
      })
    );
    expect(mockRefresh).toHaveBeenCalled();
  });
});
