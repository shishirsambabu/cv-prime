import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { CreateCVButton } from '@/components/dashboard/CreateCVButton';

// Regression: the button re-enabled itself as soon as the create request
// returned, while the editor route was still loading. A second click in that
// gap created a second "Untitled CV".

const push = jest.fn();
jest.mock('next/navigation', () => ({ useRouter: () => ({ push, refresh: jest.fn() }) }));
jest.mock('@/lib/clientAnalytics', () => ({ captureClientEvent: jest.fn() }), { virtual: true });

describe('CreateCVButton', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    jest.clearAllMocks();
  });

  it('stays disabled after a successful create, so a second click cannot duplicate the CV', async () => {
    const fetchMock = jest.fn(
      async () => ({ ok: true, json: async () => ({ cv: { id: 'cv-new' } }) }) as Response,
    ) as unknown as jest.MockedFunction<typeof fetch>;
    global.fetch = fetchMock;

    render(<CreateCVButton />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    await waitFor(() => expect(push).toHaveBeenCalledWith('/editor/cv-new'));

    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('can be retried after a failed create', async () => {
    global.fetch = jest.fn(
      async () => ({ ok: false, json: async () => ({ message: 'Nope' }) }) as Response,
    ) as unknown as jest.MockedFunction<typeof fetch>;

    render(<CreateCVButton />);
    fireEvent.click(screen.getByRole('button'));

    expect(await screen.findByText('Nope')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeEnabled();
  });
});
