import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { TailorForRoleModal } from '@/components/dashboard/TailorForRoleModal';

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('TailorForRoleModal', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    jest.clearAllMocks();
  });

  function fillRole(role: string): void {
    fireEvent.change(screen.getByLabelText(/Target role/), { target: { value: role } });
  }

  it('creates a role version and navigates to its editor on success', async () => {
    const fetchMock = jest.fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>(
      async () =>
        ({
          ok: true,
          json: async () => ({ cv: { id: '11111111-1111-4111-8111-111111111111' } }),
        }) as Response
    );
    global.fetch = fetchMock;

    render(<TailorForRoleModal cvId="cv-1" cvTitle="Master CV" onClose={jest.fn()} />);

    fillRole('Backend Engineer');
    fireEvent.click(screen.getByRole('button', { name: 'Create role version' }));

    await waitFor(() =>
      expect(mockPush).toHaveBeenCalledWith('/editor/11111111-1111-4111-8111-111111111111')
    );
  });

  it('shows an error and re-enables the button instead of hanging forever when the request fails outright', async () => {
    // A network failure (offline, DNS, dropped connection) makes fetch()
    // reject instead of resolving. Before this fix, handleSubmit had no
    // try/catch: the rejection threw straight out of the async handler and
    // skipped setLoading(false), leaving the "Creating..." button disabled
    // forever with no error shown and no way to retry — the same bug class
    // already fixed for SubscriptionCheckoutButton/AIJobCVWizard/JobTrackerBoard.
    const fetchMock = jest.fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>(async () => {
      throw new Error('network down');
    });
    global.fetch = fetchMock;

    render(<TailorForRoleModal cvId="cv-1" cvTitle="Master CV" onClose={jest.fn()} />);

    fillRole('Backend Engineer');
    const button = screen.getByRole('button', { name: 'Create role version' });
    fireEvent.click(button);

    await waitFor(() =>
      expect(screen.getByText('Could not reach the server. Check your connection and try again.')).toBeInTheDocument()
    );
    expect(button).not.toBeDisabled();
    expect(screen.getByText('Create role version')).toBeInTheDocument();
    expect(mockPush).not.toHaveBeenCalled();
  });

  it('shows an error and re-enables the button when the server responds with a non-ok status', async () => {
    const fetchMock = jest.fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>(
      async () => ({ ok: false }) as Response
    );
    global.fetch = fetchMock;

    render(<TailorForRoleModal cvId="cv-1" cvTitle="Master CV" onClose={jest.fn()} />);

    fillRole('Backend Engineer');
    const button = screen.getByRole('button', { name: 'Create role version' });
    fireEvent.click(button);

    await waitFor(() =>
      expect(screen.getByText('Could not create role version. Try again.')).toBeInTheDocument()
    );
    expect(button).not.toBeDisabled();
    expect(mockPush).not.toHaveBeenCalled();
  });
});
