/**
 * @jest-environment node
 */
// Regression: AI bullet rewrites are a Pro feature, but only the editor panel
// enforced it. And a model answer with two or four alternatives instead of
// exactly three was discarded as a failure.

const getUser = jest.fn();
jest.mock('../lib/supabase/server', () => ({
  createClient: () => ({ auth: { getUser: () => getUser() } }),
}));
jest.mock('../lib/rateLimit', () => ({ rateLimit: jest.fn().mockResolvedValue(false) }));
jest.mock('../lib/getUserOpenRouterKey', () => ({
  getUserOpenRouterKey: jest.fn().mockResolvedValue('sk-or-test'),
}));
const getUserPlan = jest.fn<Promise<'free' | 'pro'>, [string]>();
jest.mock('../lib/plan', () => ({ getUserPlan: (id: string) => getUserPlan(id) }));
const callOpenRouter = jest.fn();
jest.mock('../lib/openrouter', () => ({
  callOpenRouter: (args: unknown) => callOpenRouter(args),
  parseJsonFromModel: (content: string) => JSON.parse(content) as unknown,
}));

import { POST } from '../app/api/ai-suggest/route';

function request(): Request {
  return new Request('http://localhost/api/ai-suggest', {
    method: 'POST',
    body: JSON.stringify({ bullet: 'Built a ledger service.', role: 'Engineer', company: 'Paytm' }),
  });
}

describe('POST /api/ai-suggest', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    getUser.mockResolvedValue({ data: { user: { id: 'user-1' } } });
    getUserPlan.mockResolvedValue('pro');
  });

  it('refuses a free account before calling the model', async () => {
    getUserPlan.mockResolvedValue('free');

    const response = await POST(request());

    expect(response.status).toBe(403);
    expect(await response.json()).toMatchObject({ error: 'PLAN_GATE' });
    expect(callOpenRouter).not.toHaveBeenCalled();
  });

  it.each([
    ['two', ['a one', 'b two'], 2],
    ['five', ['a', 'b', 'c', 'd', 'e'], 3],
  ])('accepts %s alternatives from the model', async (_label, alternatives, expected) => {
    callOpenRouter.mockResolvedValue(JSON.stringify({ alternatives }));

    const response = await POST(request());
    const payload = (await response.json()) as { alternatives: string[] };

    expect(response.status).toBe(200);
    expect(payload.alternatives).toHaveLength(expected);
  });

  it('still fails cleanly when the model sends no alternatives', async () => {
    callOpenRouter.mockResolvedValue(JSON.stringify({ alternatives: [] }));

    const response = await POST(request());

    expect(response.status).toBe(500);
    expect(await response.json()).toMatchObject({ error: 'AI_FAILED' });
  });
});
