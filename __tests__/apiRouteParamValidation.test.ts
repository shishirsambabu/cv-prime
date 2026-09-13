/**
 * @jest-environment node
 *
 * Regression coverage: route handlers under app/api/cvs/[cvId]/** and
 * app/api/job-applications/[id]/** validated the URL param with
 * `paramsSchema.parse(context.params)` — unlike every request *body* in the
 * same files, which uses `safeParse` and returns a clean 400. `.parse()`
 * throws a ZodError on a malformed id (e.g. GET /api/cvs/not-a-uuid), and
 * nothing caught it, so Next.js turned the request into a bare 500 with an
 * empty body instead of the app's normal `{ error: ... }` JSON. A client
 * calling `await res.json()` on that empty body throws a second, unrelated
 * parse error, masking the real 400-worthy problem entirely.
 *
 * This pins `parseRouteParams` (the shared fix) returning a clean 400 for a
 * malformed param instead of throwing, and exercises it through the actual
 * GET /api/cvs/[cvId] handler.
 */
import { z } from 'zod';
import { parseRouteParams } from '../lib/apiParams';

describe('parseRouteParams', () => {
  const schema = z.object({ cvId: z.string().uuid() });

  it('returns a 400 JSON response instead of throwing on a malformed param', async () => {
    const result = parseRouteParams(schema, { cvId: 'not-a-uuid' });

    expect(result.ok).toBe(false);
    if (result.ok) {
      throw new Error('expected validation to fail');
    }
    expect(result.response.status).toBe(400);
    const payload = await result.response.json();
    expect(payload.error).toBeTruthy();
  });

  it('returns the parsed data for a valid param', () => {
    const validId = '123e4567-e89b-12d3-a456-426614174000';
    const result = parseRouteParams(schema, { cvId: validId });

    expect(result.ok).toBe(true);
    if (!result.ok) {
      throw new Error('expected validation to succeed');
    }
    expect(result.data.cvId).toBe(validId);
  });
});

// Relative paths, not the `@/...` alias: jest.mock's own resolver doesn't
// apply this project's tsconfig path mapping (only the SWC/Next transform
// used for real imports does), so `jest.mock('@/...')` here would silently
// register an orphaned mock that nothing consumes. See CVEditor.test.tsx.
jest.mock('../lib/supabase/server', () => ({
  createClient: () => ({
    auth: { getUser: async () => ({ data: { user: { id: 'user-1' } } }) },
    from: () => ({
      select: () => ({
        eq: () => ({
          eq: () => ({
            single: async () => ({ data: null, error: { message: 'not found' } }),
          }),
        }),
      }),
    }),
  }),
}));

describe('GET /api/cvs/[cvId] with a malformed cvId', () => {
  it('responds 400 with a JSON body instead of throwing a 500', async () => {
    const { GET } = await import('../app/api/cvs/[cvId]/route');
    const response = await GET(new Request('https://cv-prime.in/api/cvs/not-a-uuid'), {
      params: { cvId: 'not-a-uuid' },
    });

    expect(response.status).toBe(400);
    const payload = await response.json();
    expect(payload.error).toBeTruthy();
  });
});
