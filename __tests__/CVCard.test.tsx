import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { CVCard } from '@/components/dashboard/CVCard';

const mockRefresh = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    refresh: mockRefresh,
  }),
}));

describe('CVCard', () => {
  const originalFetch = global.fetch;
  const originalConfirm = window.confirm;

  afterEach(() => {
    global.fetch = originalFetch;
    window.confirm = originalConfirm;
    jest.clearAllMocks();
  });

  it('renames a CV inline', async () => {
    const fetchMock = jest.fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>(
      async () => ({ ok: true }) as Response
    );
    global.fetch = fetchMock;

    render(
      <CVCard
        id="11111111-1111-4111-8111-111111111111"
        title="Original CV"
        templateId="modern"
        lastEdited={null}
        atsScore={82}
        isPublic={false}
        plan="free"
      />
    );

    fireEvent.click(screen.getByRole('button', { name: 'Rename' }));
    fireEvent.change(screen.getByLabelText('CV title'), {
      target: { value: 'Product marketing CV' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Save CV title' }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        '/api/cvs/11111111-1111-4111-8111-111111111111',
        expect.objectContaining({
          method: 'PATCH',
          body: JSON.stringify({ title: 'Product marketing CV' }),
        })
      );
    });
    await waitFor(() => {
      expect(screen.getByText('CV renamed.')).toBeInTheDocument();
    });
    expect(mockRefresh).toHaveBeenCalled();
  });

  it('enables sharing and exposes the public link action', async () => {
    const fetchMock = jest.fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>(
      async () => ({ ok: true }) as Response
    );
    global.fetch = fetchMock;

    render(
      <CVCard
        id="22222222-2222-4222-8222-222222222222"
        title="Shared CV"
        templateId="minimal"
        lastEdited={null}
        atsScore={null}
        isPublic={false}
        plan="free"
      />
    );

    fireEvent.click(screen.getByRole('button', { name: 'Share' }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        '/api/cvs/22222222-2222-4222-8222-222222222222',
        expect.objectContaining({
          method: 'PATCH',
          body: JSON.stringify({ isPublic: true }),
        })
      );
    });
    expect(screen.getByRole('button', { name: 'Copy public share link' })).toBeInTheDocument();
  });
});
