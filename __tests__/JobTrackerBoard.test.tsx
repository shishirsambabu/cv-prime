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
});
