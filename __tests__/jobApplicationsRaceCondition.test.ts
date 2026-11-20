/**
 * @jest-environment node
 */
// Regression coverage for a check-then-insert race in
// `POST /api/job-applications`: the route used to read the user's current
// job count and insert the new row as two separate round trips with nothing
// locking them together. Two concurrent adds for the same free-plan user
// (a double-click, two open tabs, a retried request) could both read the
// same pre-insert count, both see it under the 3-job limit, and both
// insert — leaving a free-plan user with more than 3 tracked jobs.
//
// The fix moves the check and the insert into one Postgres function
// (`create_job_application_atomic`,
// supabase/migrations/20260921000000_atomic_job_application_insert.sql)
// that locks the caller's own `profiles` row first, so concurrent calls for
// the same user serialize instead of racing. This test's mock `rpc()`
// models that row lock with a real async mutex; the pre-fix route never
// calls `rpc()` at all, so it falls straight through to the racy
// count-then-insert path and this test fails against it.

// Relative paths, not the `@/...` alias: jest.mock's own resolver doesn't
// apply this project's tsconfig path mapping. See CVEditor.test.tsx.
let jobs: Array<{ id: string; company: string; role: string }> = [];
let mutexChain: Promise<unknown> = Promise.resolve();

function withMutex<T>(fn: () => Promise<T>): Promise<T> {
  const result = mutexChain.then(fn, fn);
  mutexChain = result.catch(() => undefined);
  return result;
}

const getUser = jest.fn();
jest.mock('../lib/supabase/server', () => ({
  createClient: () => ({
    auth: { getUser: () => getUser() },
    from: (table: string) => {
      if (table === 'profiles') {
        return {
          select: () => ({
            eq: () => ({
              maybeSingle: async () => ({ data: { plan: 'free' }, error: null }),
            }),
          }),
        };
      }
      if (table === 'job_applications') {
        return {
          // Pre-fix fallback path: count() then insert() as two separate
          // requests. The artificial delay below models the real network
          // round trip a Postgres read/write would take, which is exactly
          // the gap that lets two concurrent requests both read the same
          // count before either has inserted.
          select: () => ({
            eq: async () => {
              const countAtReadTime = jobs.length;
              await new Promise((resolve) => setTimeout(resolve, 5));
              return { count: countAtReadTime, error: null };
            },
          }),
          insert: (rows: [{ company: string; role: string }]) => ({
            select: () => ({
              single: async () => {
                const [firstRow] = rows;
                const row = { id: `job-${jobs.length + 1}`, company: firstRow.company, role: firstRow.role };
                jobs.push(row);
                return { data: row, error: null };
              },
            }),
          }),
        };
      }
      throw new Error(`unexpected table: ${table}`);
    },
    rpc: (fn: string, args: { p_company: string; p_role: string }) => {
      if (fn !== 'create_job_application_atomic') {
        throw new Error(`unexpected rpc: ${fn}`);
      }
      // Models the `for update` row lock in the real function: concurrent
      // calls queue up and run one at a time, so the check and the insert
      // inside a single call can never be interleaved by another call.
      return withMutex(async () => {
        if (jobs.length >= 3) {
          return { data: { allowed: false, error: 'PLAN_GATE' }, error: null };
        }
        await new Promise((resolve) => setTimeout(resolve, 5));
        const row = { id: `job-${jobs.length + 1}`, company: args.p_company, role: args.p_role };
        jobs.push(row);
        return { data: { allowed: true, job: row }, error: null };
      });
    },
  }),
}));

const rateLimit = jest.fn().mockResolvedValue(false);
jest.mock('../lib/rateLimit', () => ({
  rateLimit: (...args: unknown[]) => rateLimit(...args),
}));

import { POST } from '@/app/api/job-applications/route';

function addJobRequest(company: string): Request {
  return new Request('http://localhost/api/job-applications', {
    method: 'POST',
    body: JSON.stringify({ company, role: 'Engineer' }),
  });
}

describe('POST /api/job-applications — free-plan limit race condition', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    rateLimit.mockResolvedValue(false);
    getUser.mockResolvedValue({ data: { user: { id: 'user-1' } } });
    mutexChain = Promise.resolve();
  });

  it('never lets two concurrent requests both squeeze past the 3-job free limit', async () => {
    // Start one slot under the limit: two concurrent adds must not both win.
    jobs = [
      { id: 'job-1', company: 'Acme', role: 'Engineer' },
      { id: 'job-2', company: 'Nova', role: 'Engineer' },
    ];

    const [first, second] = await Promise.all([
      POST(addJobRequest('Flux')),
      POST(addJobRequest('Orbit')),
    ]);

    const statuses = [first.status, second.status].sort();
    expect(statuses).toEqual([201, 403]);
    expect(jobs).toHaveLength(3);

    const rejected = first.status === 403 ? first : second;
    const rejectedBody = await rejected.json();
    expect(rejectedBody.error).toBe('PLAN_GATE');
  });
});
