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

  // Regression: nothing past the Cashfree mandate succeeding was wrapped in
  // try/catch. If the mandate succeeded but the confirmation sync call
  // afterward rejected (a dropped connection right after a real payment),
  // the whole handler threw as an unhandled rejection with the button
  // already re-enabled and no message shown at all — the user had paid but
  // saw nothing, and could plausibly retry and create a second subscription.
  it('still confirms the mandate to the user when the post-payment sync call fails', async () => {
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_CASHFREE_SUBSCRIPTIONS_ENABLED: 'true',
    };
    const fetchMock = jest.fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>((url) => {
      if (typeof url === 'string' && url === '/api/billing/sync') {
        return Promise.reject(new TypeError('Failed to fetch'));
      }
      return Promise.resolve(
        jsonResponse({
          ok: true,
          subscriptionId: 'sub_test',
          subscriptionSessionId: 'session_test',
          environment: 'production',
        })
      );
    });
    global.fetch = fetchMock;
    const checkoutMock = jest.fn().mockResolvedValue({});
    window.Cashfree = jest.fn().mockImplementation(() => ({
      checkout: checkoutMock,
    })) as NonNullable<typeof window.Cashfree>;

    const onUnhandledRejection = jest.fn();
    process.on('unhandledRejection', onUnhandledRejection);

    render(<SubscriptionCheckoutButton />);
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe monthly' }));

    await waitFor(() => {
      expect(screen.getByText(/Mandate submitted/i)).toBeInTheDocument();
    });

    await new Promise((resolve) => setTimeout(resolve, 0));
    process.off('unhandledRejection', onUnhandledRejection);

    expect(onUnhandledRejection).not.toHaveBeenCalled();
    expect(screen.getByRole('button', { name: 'Subscribe monthly' })).not.toBeDisabled();
  });

  // Regression: if checkout.checkout() itself threw (rather than resolving
  // with a `.error`), the setLoading(false) right after it never ran, so the
  // button stayed stuck on "Opening secure monthly billing..." forever.
  it('resets the loading state and shows an error if the checkout SDK call throws', async () => {
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
    const checkoutMock = jest.fn().mockRejectedValue(new Error('SDK crashed'));
    window.Cashfree = jest.fn().mockImplementation(() => ({
      checkout: checkoutMock,
    })) as NonNullable<typeof window.Cashfree>;

    render(<SubscriptionCheckoutButton />);
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe monthly' }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Subscribe monthly' })).not.toBeDisabled();
    });
    expect(screen.getByText(/Could not confirm monthly billing setup/i)).toBeInTheDocument();
  });
});
