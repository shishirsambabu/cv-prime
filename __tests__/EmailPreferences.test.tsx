import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { EmailPreferences } from '@/components/settings/EmailPreferences';

const originalFetch = global.fetch;

function respond(ok: boolean, body: unknown): Response {
  return { ok, status: ok ? 200 : 500, json: async () => body } as Response;
}

afterEach(() => {
  global.fetch = originalFetch;
});

describe('EmailPreferences', () => {
  // Regression: when the load failed, the toggles showed all-off placeholders
  // and Save stayed enabled. Saving posted those placeholders, overwriting the
  // real preferences and unsubscribing the user from everything.
  it('cannot save placeholders after a failed load, and can retry', async () => {
    const fetchMock = jest
      .fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>()
      .mockResolvedValueOnce(respond(false, {}))
      .mockResolvedValueOnce(respond(true, { prefs: { newsletter: true, offers: true } }));
    global.fetch = fetchMock as unknown as typeof fetch;

    render(<EmailPreferences />);

    expect(await screen.findByRole('alert')).toHaveTextContent('Could not load your preferences.');
    expect(screen.getByRole('button', { name: 'Save preferences' })).toBeDisabled();
    for (const toggle of screen.getAllByRole('switch')) expect(toggle).toBeDisabled();

    fireEvent.click(screen.getByRole('button', { name: 'Save preferences' }));
    expect(fetchMock.mock.calls.filter(([, init]) => init?.method === 'POST')).toHaveLength(0);

    fireEvent.click(screen.getByRole('button', { name: 'Retry' }));

    await waitFor(() =>
      expect(screen.getByRole('switch', { name: 'Weekly newsletter' })).toHaveAttribute('aria-checked', 'true')
    );
    expect(screen.getByRole('button', { name: 'Save preferences' })).toBeEnabled();
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Retry' })).not.toBeInTheDocument();
  });

  it('saves the loaded preferences with the change applied', async () => {
    const fetchMock = jest
      .fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>()
      .mockResolvedValueOnce(respond(true, { prefs: { newsletter: true, career_tips: true } }))
      .mockResolvedValueOnce(respond(true, { ok: true }));
    global.fetch = fetchMock as unknown as typeof fetch;

    render(<EmailPreferences />);
    const offers = await screen.findByRole('switch', { name: 'Offers & promotions' });
    await waitFor(() => expect(offers).toBeEnabled());
    fireEvent.click(offers);
    fireEvent.click(screen.getByRole('button', { name: 'Save preferences' }));

    await screen.findByText('Saved');
    const post = fetchMock.mock.calls.find(([, init]) => init?.method === 'POST');
    expect(JSON.parse(String(post?.[1]?.body))).toEqual({
      career_tips: true,
      product_updates: false,
      offers: true,
      newsletter: true,
    });
  });
});
