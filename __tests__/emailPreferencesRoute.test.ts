/**
 * @jest-environment node
 */

// GET answered a failed read with 200 and all-off defaults. The settings page
// treated that as the saved state, and the next Save wrote those placeholders
// over the user's real preferences. POST answered { ok: true } when the update
// matched no row.
//
// Relative paths, not the `@/...` alias: see cvRouteErrorHandling.test.ts.
export {};

let readResult: { data: unknown; error: { message: string } | null };
let updateResult: { data: unknown; error: { message: string } | null };

jest.mock('../lib/supabase/server', () => ({
  createClient: () => ({
    auth: { getUser: async () => ({ data: { user: { id: 'user-1' } } }) },
  }),
}));

jest.mock('../lib/supabase/admin', () => ({
  createAdminClient: () => ({
    from: () => ({
      select: () => ({ eq: () => ({ maybeSingle: async () => readResult }) }),
      update: () => ({ eq: () => ({ select: async () => updateResult }) }),
    }),
  }),
}));

import { GET, POST } from '../app/api/account/email-preferences/route';

const PREFS = { career_tips: true, product_updates: false, offers: false, newsletter: true };

function post(body: unknown): Request {
  return new Request('http://localhost/api/account/email-preferences', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

describe('GET /api/account/email-preferences', () => {
  it('returns the stored preferences', async () => {
    readResult = { data: { email_prefs: PREFS, newsletter_status: 'subscribed' }, error: null };
    const res = await GET();
    expect(res.status).toBe(200);
    expect((await res.json()).prefs).toEqual(PREFS);
  });

  it('answers 500, not all-off defaults, when the read fails', async () => {
    readResult = { data: null, error: { message: 'timeout' } };
    const res = await GET();
    expect(res.status).toBe(500);
    expect((await res.json()).prefs).toBeUndefined();
  });
});

describe('POST /api/account/email-preferences', () => {
  it('saves', async () => {
    updateResult = { data: [{ id: 'user-1' }], error: null };
    const res = await POST(post(PREFS));
    expect(res.status).toBe(200);
  });

  it('answers 404 when no profile row was updated', async () => {
    updateResult = { data: [], error: null };
    const res = await POST(post(PREFS));
    expect(res.status).toBe(404);
  });

  it('does not leak the database message on failure', async () => {
    updateResult = { data: null, error: { message: 'relation "profiles" …' } };
    const res = await POST(post(PREFS));
    expect(res.status).toBe(500);
    expect(JSON.stringify(await res.json())).not.toContain('relation');
  });
});
