import { NextResponse } from 'next/server';
import type { ZodTypeAny, z } from 'zod';

/**
 * Route handlers validate `context.params` with `someSchema.parse(...)`
 * (unlike every request *body*, which is checked with `safeParse` and turned
 * into a clean 400). `.parse()` throws a ZodError on a malformed param — e.g.
 * a non-UUID id in the URL — and nothing in these handlers catches it, so it
 * propagates out of the route and Next.js turns it into a bare 500 with an
 * empty body. Any client doing `await res.json()` on that (this app's own
 * `saveCv()` included) throws a *second*, unrelated "Unexpected end of JSON
 * input" error instead of surfacing anything actionable, and no 400 status a
 * caller could branch on ever comes back.
 *
 * This mirrors the existing body-validation pattern for params so a
 * malformed id/route param fails the same clean, catchable way a malformed
 * body already does.
 */
export function parseRouteParams<Schema extends ZodTypeAny>(
  schema: Schema,
  params: unknown
): { ok: true; data: z.infer<Schema> } | { ok: false; response: NextResponse } {
  const result = schema.safeParse(params);
  if (!result.success) {
    return {
      ok: false,
      response: NextResponse.json({ error: result.error.flatten() }, { status: 400 }),
    };
  }

  return { ok: true, data: result.data };
}
