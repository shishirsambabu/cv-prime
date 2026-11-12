/**
 * @jest-environment node
 */

// Two defects in the job tracker API, both invisible in the UI's happy path:
//
// 1. `appliedDate` was an unchecked string. Anything that was not a date
//    reached Postgres, which rejected it, and the route answered 500 with the
//    raw database message instead of a 400 the form can show.
// 2. PATCH answered { ok: true } when the update matched no row (the job was
//    deleted in another tab), so a drag between columns looked saved when
//    nothing had been written — the same defect already fixed for CVs.
//
// Relative paths, not the `@/...` alias: see cvRouteErrorHandling.test.ts.
export {};

const getUser = jest.fn();
const rpc = jest.fn();
let updatedRows: Array<{ id: string }> = [];

jest.mock('../lib/rateLimit', () => ({
  rateLimit: jest.fn(async () => false),
}));

jest.mock('../lib/supabase/server', () => ({
  createClient: () => ({
    auth: { getUser },
    rpc: (...args: unknown[]) => rpc(...args),
    from: () => {
      const chain = {
        update: () => chain,
        eq: () => chain,
        select: async () => ({ data: updatedRows, error: null }),
      };
      return chain;
    },
  }),
}));

const USER_ID = '11111111-1111-4111-8111-111111111111';
const JOB_ID = '33333333-3333-4333-8333-333333333333';

function jsonRequest(method: string, body: unknown): Request {
  return new Request('http://localhost/api/job-applications', {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

beforeEach(() => {
  jest.clearAllMocks();
  updatedRows = [];
  getUser.mockResolvedValue({ data: { user: { id: USER_ID } } });
  rpc.mockResolvedValue({
    data: { allowed: true, job: { id: JOB_ID, company: 'Acme', role: 'Engineer' } },
    error: null,
  });
});

describe('POST /api/job-applications appliedDate', () => {
  it.each(['abc', '12/11/2026', '2026-13-45', '2026-11-12T00:00:00Z'])(
    'rejects %p with 400 before touching the database',
    async (appliedDate) => {
      const { POST } = await import('../app/api/job-applications/route');
      const response = await POST(jsonRequest('POST', { company: 'Acme', role: 'Engineer', appliedDate }));

      expect(response.status).toBe(400);
      expect(rpc).not.toHaveBeenCalled();
    },
  );

  it.each(['2026-11-12', '', undefined])('accepts %p', async (appliedDate) => {
    const { POST } = await import('../app/api/job-applications/route');
    const response = await POST(jsonRequest('POST', { company: 'Acme', role: 'Engineer', appliedDate }));

    expect(response.status).toBe(201);
  });
});

describe('PATCH /api/job-applications/[id]', () => {
  it('answers 404 when the update matched no row', async () => {
    const { PATCH } = await import('../app/api/job-applications/[id]/route');
    const response = await PATCH(jsonRequest('PATCH', { status: 'applied' }), { params: { id: JOB_ID } });

    expect(response.status).toBe(404);
  });

  it('answers ok when a row was updated', async () => {
    updatedRows = [{ id: JOB_ID }];
    const { PATCH } = await import('../app/api/job-applications/[id]/route');
    const response = await PATCH(jsonRequest('PATCH', { status: 'applied' }), { params: { id: JOB_ID } });

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ ok: true });
  });

  it('rejects a non-date appliedDate with 400', async () => {
    updatedRows = [{ id: JOB_ID }];
    const { PATCH } = await import('../app/api/job-applications/[id]/route');
    const response = await PATCH(jsonRequest('PATCH', { appliedDate: 'tomorrow' }), { params: { id: JOB_ID } });

    expect(response.status).toBe(400);
  });
});
