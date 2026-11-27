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

  function fillJob(url: string): void {
    fireEvent.change(screen.getByLabelText('Company'), { target: { value: 'Acme' } });
    fireEvent.change(screen.getByLabelText('Role'), { target: { value: 'Engineer' } });
    fireEvent.change(screen.getByLabelText('Job URL'), { target: { value: url } });
  }

  it('adds https:// to a job link pasted without a scheme', async () => {
    // "www.linkedin.com/jobs/view/1" used to be refused by the server with a
    // bare "Could not add this job."
    const fetchMock = jest.fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>(
      async () =>
        ({
          ok: true,
          status: 200,
          json: async () => ({
            job: {
              id: 'job-9',
              company: 'Acme',
              role: 'Engineer',
              status: 'saved',
              applied_date: null,
              notes: null,
              job_url: 'https://www.linkedin.com/jobs/view/1',
            },
          }),
        }) as Response
    );
    global.fetch = fetchMock;

    render(<JobTrackerBoard initialJobs={[]} plan="free" />);
    fillJob('www.linkedin.com/jobs/view/1');
    fireEvent.click(screen.getByRole('button', { name: 'Add job' }));

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    const sent = JSON.parse(String(fetchMock.mock.calls[0]?.[1]?.body)) as { jobUrl: string };
    expect(sent.jobUrl).toBe('https://www.linkedin.com/jobs/view/1');
  });

  it('names the link as the problem instead of sending an unusable one', () => {
    const fetchMock = jest.fn();
    global.fetch = fetchMock as unknown as typeof fetch;

    render(<JobTrackerBoard initialJobs={[]} plan="free" />);
    fillJob('javascript:alert(1)');
    fireEvent.click(screen.getByRole('button', { name: 'Add job' }));

    expect(screen.getByText(/Enter a valid job link/)).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('does not render a stored non-web link as a link', () => {
    render(
      <JobTrackerBoard
        initialJobs={[
          {
            id: 'job-x',
            company: 'Acme',
            role: 'Engineer',
            status: 'saved',
            applied_date: null,
            notes: null,
            job_url: 'javascript:alert(1)',
          },
        ]}
        plan="free"
      />
    );

    expect(screen.queryByRole('link', { name: /Job post/ })).not.toBeInTheDocument();
  });

  // Regression: a failed delete restored the board from a snapshot taken when
  // that delete started. Any delete that succeeded in the meantime came back
  // on screen although it no longer existed on the server.
  it('a failed delete puts back only that job, not jobs deleted since', async () => {
    const jobs: JobTrackerItem[] = [
      { id: 'job-1', company: 'Acme', role: 'Product manager', status: 'saved', applied_date: null, notes: null, job_url: null },
      { id: 'job-2', company: 'Nova', role: 'Growth manager', status: 'saved', applied_date: null, notes: null, job_url: null },
    ];
    let failFirst: (value: { ok: boolean; json: () => Promise<unknown> }) => void = () => undefined;
    const fetchMock = jest
      .fn()
      .mockImplementationOnce(() => new Promise((resolve) => { failFirst = resolve; }))
      .mockResolvedValueOnce({ ok: true, json: async () => ({ ok: true }) });
    global.fetch = fetchMock as unknown as typeof fetch;
    jest.spyOn(window, 'confirm').mockReturnValue(true);

    render(<JobTrackerBoard initialJobs={jobs} plan="pro" />);
    fireEvent.click(screen.getByRole('button', { name: 'Delete Product manager at Acme' }));
    fireEvent.click(screen.getByRole('button', { name: 'Delete Growth manager at Nova' }));
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(2));
    await waitFor(() => expect(screen.queryByText('Growth manager')).not.toBeInTheDocument());

    failFirst({ ok: false, json: async () => ({}) });

    await waitFor(() => expect(screen.getByText('Product manager')).toBeInTheDocument());
    expect(screen.queryByText('Growth manager')).not.toBeInTheDocument();
    expect(screen.getByText('Could not delete this job.')).toBeInTheDocument();
  });

  // Regression: two quick stage changes were sent in parallel. When the first
  // failed after the second had succeeded, the card jumped back to the stage
  // it started in, which matched neither the user's choice nor the server.
  it('a failed move does not undo a later move of the same job', async () => {
    const jobs: JobTrackerItem[] = [
      { id: 'job-1', company: 'Acme', role: 'Product manager', status: 'saved', applied_date: null, notes: null, job_url: null },
    ];
    const bodies: string[] = [];
    let failFirst: (value: { ok: boolean; json: () => Promise<unknown> }) => void = () => undefined;
    const fetchMock = jest.fn((_url: string, init: RequestInit) => {
      bodies.push(String(init.body));
      if (bodies.length === 1) {
        return new Promise((resolve) => { failFirst = resolve; });
      }
      return Promise.resolve({ ok: true, json: async () => ({ ok: true }) });
    });
    global.fetch = fetchMock as unknown as typeof fetch;

    render(<JobTrackerBoard initialJobs={jobs} plan="pro" />);
    const stage = (): HTMLSelectElement =>
      screen.getByLabelText('Stage for Product manager at Acme') as HTMLSelectElement;

    fireEvent.change(stage(), { target: { value: 'applied' } });
    fireEvent.change(stage(), { target: { value: 'interview' } });
    expect(stage().value).toBe('interview');
    // Writes for one job go out in order, so the server cannot end on the
    // older stage because an earlier request happened to land last.
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));

    failFirst({ ok: false, json: async () => ({}) });

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(2));
    expect(bodies[1]).toBe(JSON.stringify({ status: 'interview' }));
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(stage().value).toBe('interview');
  });

  it('clears a move error once a later move succeeds', async () => {
    const jobs: JobTrackerItem[] = [
      { id: 'job-1', company: 'Acme', role: 'Product manager', status: 'saved', applied_date: null, notes: null, job_url: null },
    ];
    const fetchMock = jest
      .fn()
      .mockResolvedValueOnce({ ok: false, json: async () => ({}) })
      .mockResolvedValueOnce({ ok: true, json: async () => ({ ok: true }) });
    global.fetch = fetchMock as unknown as typeof fetch;

    render(<JobTrackerBoard initialJobs={jobs} plan="pro" />);
    const stage = (): HTMLSelectElement =>
      screen.getByLabelText('Stage for Product manager at Acme') as HTMLSelectElement;

    fireEvent.change(stage(), { target: { value: 'applied' } });
    await waitFor(() => expect(screen.getByText('Could not move this job. Try again.')).toBeInTheDocument());
    expect(stage().value).toBe('saved');

    fireEvent.change(stage(), { target: { value: 'applied' } });
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(2));
    await waitFor(() =>
      expect(screen.queryByText('Could not move this job. Try again.')).not.toBeInTheDocument(),
    );
    expect(stage().value).toBe('applied');
  });
});
