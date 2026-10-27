/**
 * @jest-environment node
 */
// Route handlers use the web Request/Response globals that Next's server
// runtime expects (and Node provides natively) — jsdom, this project's
// default test environment, does not define them.
//
// Regression coverage for a plan-gate bypass: the template picker only hides
// Pro-only templates client-side (CVEditor.tsx's TemplateSwitcher), so a
// free-plan user could bypass it entirely by sending
// `PATCH /api/cvs/{cvId}` with `{ templateId: 'premium' }` (or any other
// Pro-only template) directly — the editor and live preview would then
// render it, even though PDF export (app/print/[cvId]) still blocked the
// download. The route must reject this server-side, the same way
// /api/ai-generate-cv already does.

// Relative paths, not the `@/...` alias: jest.mock's own resolver doesn't
// apply this project's tsconfig path mapping (only the SWC/Next transform
// used for real imports does), so `jest.mock('@/...')` here would silently
// register an orphaned mock that nothing consumes. See CVEditor.test.tsx.
const getUser = jest.fn();
jest.mock('../lib/supabase/server', () => ({
  createClient: () => ({
    auth: { getUser: () => getUser() },
    from: (table: string) => {
      if (table !== 'cvs') {
        throw new Error(`unexpected table: ${table}`);
      }
      return {
        update: () => ({
          eq: () => ({
            eq: async () => ({ error: null }),
          }),
        }),
      };
    },
  }),
}));

const rateLimit = jest.fn().mockResolvedValue(false);
jest.mock('../lib/rateLimit', () => ({
  rateLimit: (...args: unknown[]) => rateLimit(...args),
}));

const getUserPlan = jest.fn();
jest.mock('../lib/plan', () => ({
  getUserPlan: (...args: unknown[]) => getUserPlan(...args),
}));

import { PATCH } from '@/app/api/cvs/[cvId]/route';

function patchRequest(body: unknown): Request {
  return new Request('http://localhost/api/cvs/11111111-1111-1111-1111-111111111111', {
    method: 'PATCH',
    body: JSON.stringify(body),
  });
}

const params = { cvId: '11111111-1111-1111-1111-111111111111' };

describe('PATCH /api/cvs/[cvId] — Pro template plan gate', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    rateLimit.mockResolvedValue(false);
    getUser.mockResolvedValue({ data: { user: { id: 'user-1' } } });
  });

  it('rejects a free-plan user setting a Pro-only template', async () => {
    getUserPlan.mockResolvedValue('free');

    const response = await PATCH(patchRequest({ templateId: 'premium' }), { params });

    expect(response.status).toBe(403);
    const json = await response.json();
    expect(json.error).toBe('PLAN_GATE');
  });

  it('allows a Pro-plan user to set a Pro-only template', async () => {
    getUserPlan.mockResolvedValue('pro');

    const response = await PATCH(patchRequest({ templateId: 'premium' }), { params });

    expect(response.status).toBe(200);
  });

  it('never plan-checks a free template, so it never calls getUserPlan', async () => {
    const response = await PATCH(patchRequest({ templateId: 'classic' }), { params });

    expect(response.status).toBe(200);
    expect(getUserPlan).not.toHaveBeenCalled();
  });
});
