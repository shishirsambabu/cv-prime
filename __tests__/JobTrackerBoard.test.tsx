import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import {
  JobTrackerBoard,
  type JobTrackerItem,
} from '@/components/job-tracker/JobTrackerBoard';

const mockRefresh = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    refresh: mockRefresh,
  }),
}));

describe('JobTrackerBoard', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    jest.clearAllMocks();
  });

  it('shows the free tracker limit after three jobs', () => {
    const jobs: JobTrackerItem[] = [
      {
        id: 'job-1',
        company: 'Acme',
        role: 'Product manager',
        status: 'saved',
        applied_date: null,
        notes: null,
        job_url: null,
      },
      {
        id: 'job-2',
        company: 'Nova',
        role: 'Growth manager',
        status: 'applied',
        applied_date: null,
        notes: null,
        job_url: null,
      },
      {
        id: 'job-3',
        company: 'Orbit',
        role: 'Marketing lead',
        status: 'interview',
        applied_date: null,
        notes: null,
        job_url: null,
      },
    ];

    render(<JobTrackerBoard initialJobs={jobs} plan="free" />);

    expect(screen.getByText('3/3 jobs used')).toBeInTheDocument();
    expect(screen.getByText(/free tracker limit/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add job' })).toBeDisabled();
  });

  it('adds a job to the board', async () => {
    const fetchMock = jest.fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>(
      async () =>
        ({
          ok: true,
          json: async () => ({
            job: {
              id: 'job-4',
              company: 'Flux',
              role: 'Lifecycle marketer',
              status: 'saved',
              applied_date: null,
              notes: null,
              job_url: null,
            },
          }),
        }) as Response
    );
    global.fetch = fetchMock;

    render(<JobTrackerBoard initialJobs={[]} plan="free" />);

    fireEvent.change(screen.getByLabelText('Company'), { target: { value: 'Flux' } });
    fireEvent.change(screen.getByLabelText('Role'), {
      target: { value: 'Lifecycle marketer' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Add job' }));

    await waitFor(() => {
      expect(screen.getByText('Lifecycle marketer')).toBeInTheDocument();
    });
    expect(fetchMock).toHaveBeenCalledWith(
      '/api/job-applications',
      expect.objectContaining({
        method: 'POST',
      })
    );
    expect(mockRefresh).toHaveBeenCalled();
  });

  // Regression: handleDelete optimistically removed the job from the board
  // before the DELETE request resolved, but had no try/catch around it. A
  // dropped connection rejects fetch() itself (not a non-ok response), so
  // the rollback that restores the job on failure never ran — the job
  // vanished from the board while it still existed server-side, with no
  // error shown and (separately) an unhandled promise rejection.
  it('restores a job to the board if deleting it fails outright', async () => {
    const job: JobTrackerItem = {
      id: 'job-1',
      company: 'Acme',
      role: 'Product manager',
      status: 'saved',
      applied_date: null,
      notes: null,
      job_url: null,
    };

    const fetchMock = jest.fn(async () => {
      throw new TypeError('Failed to fetch');
    }) as unknown as jest.MockedFunction<typeof fetch>;
    global.fetch = fetchMock;
    jest.spyOn(window, 'confirm').mockReturnValue(true);

    const onUnhandledRejection = jest.fn();
    process.on('unhandledRejection', onUnhandledRejection);

    render(<JobTrackerBoard initialJobs={[job]} plan="free" />);
    expect(screen.getByText('Product manager')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Delete Product manager at Acme' }));

    // Optimistic removal happens immediately...
    await waitFor(() => {
      expect(screen.queryByText('Product manager')).not.toBeInTheDocument();
    });

    // ...but must be rolled back once the request fails outright.
    await waitFor(() => {
      expect(screen.getByText('Product manager')).toBeInTheDocument();
    });
    expect(screen.getByText('Could not delete this job.')).toBeInTheDocument();

    await new Promise((resolve) => setTimeout(resolve, 0));
    process.off('unhandledRejection', onUnhandledRejection);
    expect(onUnhandledRejection).not.toHaveBeenCalled();
  });

  // Dragging is pointer-only, so on a phone (where the browser takes the
  // gesture for scrolling) and from the keyboard there was no way at all to
  // change a job's stage.
  it('moves a job to another stage without dragging, and rolls back if the save fails', async () => {
    const jobs: JobTrackerItem[] = [
      { id: 'job-1', company: 'Acme', role: 'Product manager', status: 'saved', applied_date: null, notes: null, job_url: null },
    ];
    const fetchMock = jest.fn(async (): Promise<{ ok: boolean; json: () => Promise<unknown> }> => ({
      ok: true,
      json: async () => ({ ok: true }),
    }));
    global.fetch = fetchMock as unknown as typeof fetch;
    render(<JobTrackerBoard initialJobs={jobs} plan="pro" />);

    const stage = screen.getByLabelText('Stage for Product manager at Acme') as HTMLSelectElement;
    expect(stage.value).toBe('saved');
    fireEvent.change(stage, { target: { value: 'interview' } });

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    expect(fetchMock).toHaveBeenCalledWith(
      '/api/job-applications/job-1',
      expect.objectContaining({ method: 'PATCH', body: JSON.stringify({ status: 'interview' }) }),
    );
    expect((screen.getByLabelText('Stage for Product manager at Acme') as HTMLSelectElement).value).toBe('interview');

    fetchMock.mockResolvedValueOnce({ ok: false, json: async () => ({}) });
    fireEvent.change(screen.getByLabelText('Stage for Product manager at Acme'), { target: { value: 'offer' } });

    await waitFor(() =>
      expect((screen.getByLabelText('Stage for Product manager at Acme') as HTMLSelectElement).value).toBe('interview'),
    );
    expect(screen.getByText('Could not move this job. Try again.')).toBeInTheDocument();
  });
});
