import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { APIKeySettings } from '@/components/settings/APIKeySettings';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('APIKeySettings', () => {
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
    jest.restoreAllMocks();
  });

  it('saves a validated OpenRouter key and shows the returned hint', async () => {
    const fetchMock = jest.fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>(
      async () => jsonResponse({ success: true, hint: '...abcd' })
    );
    global.fetch = fetchMock;

    render(<APIKeySettings initialHint={null} />);

    fireEvent.change(screen.getByLabelText('New OpenRouter key'), {
      target: { value: `sk-or-v1-${'a'.repeat(45)}abcd` },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Save key' }));

    await waitFor(() => {
      expect(screen.getByText('Connected ...abcd')).toBeInTheDocument();
    });
    expect(fetchMock).toHaveBeenCalledWith('/api/keys/save', expect.objectContaining({
      method: 'POST',
    }));
  });

  it('deletes an existing key after confirmation', async () => {
    const fetchMock = jest.fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>(
      async () => jsonResponse({ success: true })
    );
    global.fetch = fetchMock;
    window.confirm = jest.fn(() => true);

    render(<APIKeySettings initialHint="...abcd" />);

    fireEvent.click(screen.getByLabelText('Delete OpenRouter key'));

    await waitFor(() => {
      expect(screen.getByText('No key connected')).toBeInTheDocument();
    });
    expect(fetchMock).toHaveBeenCalledWith('/api/keys/delete', { method: 'DELETE' });
  });

  it('recovers the delete button after a network failure instead of disabling it forever', async () => {
    const fetchMock = jest.fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>(
      async () => {
        throw new TypeError('Failed to fetch');
      }
    );
    global.fetch = fetchMock;
    window.confirm = jest.fn(() => true);

    render(<APIKeySettings initialHint="...abcd" />);

    const deleteButton = screen.getByLabelText('Delete OpenRouter key');
    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(screen.getByText('Could not reach the server. Check your connection and try again.')).toBeInTheDocument();
    });
    expect(deleteButton).not.toBeDisabled();
    expect(screen.getByText('Connected ...abcd')).toBeInTheDocument();
  });

  it('shows an error instead of silently failing when saving a key hits a network failure', async () => {
    const fetchMock = jest.fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>(
      async () => {
        throw new TypeError('Failed to fetch');
      }
    );
    global.fetch = fetchMock;

    render(<APIKeySettings initialHint={null} />);

    fireEvent.change(screen.getByLabelText('New OpenRouter key'), {
      target: { value: `sk-or-v1-${'a'.repeat(45)}abcd` },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Save key' }));

    await waitFor(() => {
      expect(screen.getByText('Could not reach the server. Check your connection and try again.')).toBeInTheDocument();
    });
    expect(screen.getByRole('button', { name: 'Save key' })).not.toBeDisabled();
  });
});
