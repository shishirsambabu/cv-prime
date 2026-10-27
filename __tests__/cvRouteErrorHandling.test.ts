/**
 * @jest-environment node
 */

/**
 * Companion to apiRouteParamValidation.test.ts, which pins the *param* half of
 * this problem. The request *body* on PATCH /api/cvs/[cvId] — the endpoint
 * every autosave goes through — was still read with a bare `await req.json()`.
 * That rejects on a truncated or non-JSON body (a connection dropped mid-PUT
 * on a flaky mobile network is the realistic case), nothing caught it, and the
 * route answered a bare 500 with an empty body. The client's own
 * `await res.json()` on that empty body then threw an unrelated "Unexpected
 * end of JSON input", so the real problem never surfaced anywhere.
 *
 * Also pins that a malformed id is rejected *after* the auth check, and that
 * every query stays scoped to the signed-in user rather than to the id alone.
 */

// Relative paths, not the `@/...` alias: jest.mock's resolver does not apply
// next/jest's moduleNameMapper, so `jest.mock('@/...')` registers an orphaned
// mock and the real module loads anyway.
const getUser = jest.fn();
const eq = jest.fn();

jest.mock('../lib/rateLimit', () => ({
  rateLimit: jest.fn(async () => false),
}));

jest.mock('../lib/supabase/server', () => ({
  createClient: () => ({
    auth: { getUser },
    from: () => {
      const chain = {
        select: () => chain,
        update: () => chain,
        delete: () => chain,
        insert: () => chain,
        eq: (...args: unknown[]) => {
          eq(...args);
          return chain;
        },
        single: async () => ({ data: null, error: { message: 'not found' } }),
        maybeSingle: async () => ({ data: null, error: null }),
        then: (resolve: (value: { data: null; error: null }) => unknown) =>
          resolve({ data: null, error: null }),
      };
      return chain;
    },
  }),
}));

const SIGNED_IN = {
  data: { user: { id: '11111111-1111-4111-8111-111111111111' } },
};
const VALID_CV_ID = '22222222-2222-4222-8222-222222222222';

function patchRequest(body: string): Request {
  return new Request(`http://localhost/api/cvs/${VALID_CV_ID}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body,
  });
}

beforeEach(() => {
  jest.clearAllMocks();
  getUser.mockResolvedValue(SIGNED_IN);
});

describe('PATCH /api/cvs/[cvId] with an unreadable body', () => {
  it.each([
    ['malformed JSON', '{not json'],
    ['an empty body', ''],
    ['a JSON scalar', '"just-a-string"'],
    ['JSON null', 'null'],
  ])('answers 400 with a JSON body (never a bare 500) for %s', async (_label, body) => {
    const { PATCH } = await import('../app/api/cvs/[cvId]/route');
    const response = await PATCH(patchRequest(body), { params: { cvId: VALID_CV_ID } });

    expect(response.status).toBe(400);
    // The empty-body 500 is what made the client's own res.json() throw, so a
    // parseable body is the part that actually matters here.
    await expect(response.json()).resolves.toHaveProperty('error');
  });

  it('leaves a well-formed body alone', async () => {
    const { PATCH } = await import('../app/api/cvs/[cvId]/route');
    const response = await PATCH(patchRequest(JSON.stringify({ title: 'Renamed CV' })), {
      params: { cvId: VALID_CV_ID },
    });

    expect(response.status).not.toBe(400);
  });
});

describe('/api/cvs/[cvId] request ordering and scoping', () => {
  it('rejects an unauthenticated request before it looks at the id or the body', async () => {
    getUser.mockResolvedValue({ data: { user: null } });
    const { PATCH } = await import('../app/api/cvs/[cvId]/route');
    const response = await PATCH(patchRequest('{not json'), {
      params: { cvId: 'not-a-uuid' },
    });

    expect(response.status).toBe(401);
  });

  it.each(['not-a-uuid', 'undefined', '../../etc/passwd', ''])(
    'answers a clean 4xx (never a 500) for the malformed id %p',
    async (cvId) => {
      const { GET } = await import('../app/api/cvs/[cvId]/route');
      const response = await GET(new Request('http://localhost/api/cvs/x'), {
        params: { cvId },
      });

      expect(response.status).toBeGreaterThanOrEqual(400);
      expect(response.status).toBeLessThan(500);
      await expect(response.json()).resolves.toHaveProperty('error');
    },
  );

  it('scopes every query to the signed-in user, never to the id alone', async () => {
    const { GET } = await import('../app/api/cvs/[cvId]/route');
    await GET(new Request('http://localhost/api/cvs/x'), { params: { cvId: VALID_CV_ID } });

    expect(eq).toHaveBeenCalledWith('id', VALID_CV_ID);
    expect(eq).toHaveBeenCalledWith('user_id', SIGNED_IN.data.user.id);
  });
});

describe('other id-bearing routes', () => {
  it.each([
    ['clone', '../app/api/cvs/[cvId]/clone/route', 'POST', { cvId: 'not-a-uuid' }],
    ['job application PATCH', '../app/api/job-applications/[id]/route', 'PATCH', { id: 'not-a-uuid' }],
    ['job application DELETE', '../app/api/job-applications/[id]/route', 'DELETE', { id: 'not-a-uuid' }],
  ])('answers a clean 4xx (never a 500) on %s', async (_label, modulePath, method, params) => {
    const handlers = (await import(modulePath)) as Record<
      string,
      (req: Request, context: { params: Record<string, string> }) => Promise<Response>
    >;
    const handler = handlers[method];
    if (!handler) throw new Error(`${modulePath} has no ${method} handler`);

    const response = await handler(
      new Request('http://localhost/api/x', {
        method,
        body: method === 'DELETE' ? undefined : JSON.stringify({}),
      }),
      { params },
    );

    expect(response.status).toBeGreaterThanOrEqual(400);
    expect(response.status).toBeLessThan(500);
  });
});
