import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { PlanSettings } from '@/components/payments/PlanSettings';

const mockRefresh = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    refresh: mockRefresh,
  }),
}));

describe('PlanSettings', () => {
  const originalFetch = global.fetch;
  const originalConfirm = window.confirm;

  function jsonResponse(payload: unknown, ok = true): Response {
    return {
      ok,
      json: async () => payload,
    } as Response;
  }

  afterEach(() => {
    global.fetch = originalFetch;
    window.confirm = originalConfirm;
    jest.clearAllMocks();
  });

  it('cancels Pro renewal from settings', async () => {
    window.confirm = jest.fn(() => true);
    const fetchMock = jest.fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>(
      async () =>
        jsonResponse({
          ok: true,
          plan: 'free',
          message: 'Pro renewal cancelled.',
        })
    );
    global.fetch = fetchMock;

    render(<PlanSettings plan="pro" cvCreationsUsed={3} pdfExportsUsed={3} />);

    fireEvent.click(screen.getByRole('button', { name: 'Cancel renewal' }));

    await waitFor(() => {
      expect(screen.getByText('Pro renewal cancelled.')).toBeInTheDocument();
    });
    expect(fetchMock).toHaveBeenCalledWith(
      '/api/billing/cancel',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ confirm: true }),
      })
    );
    expect(mockRefresh).toHaveBeenCalled();
  });
});
