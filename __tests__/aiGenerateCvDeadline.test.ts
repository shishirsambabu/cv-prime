/**
 * @jest-environment node
 */
// Regression: /api/ai-generate-cv runs a relevance check and then the
// generation call. The check inherited callOpenRouter's 28 s default and
// generation always got 55 s, so a slow check (or a slow file parse) pushed
// the route past Vercel's 60 s maxDuration. The platform then killed the
// function and the wizard received an HTML 504 instead of a JSON error,
// leaving the user with a generic failure and their OpenRouter credits spent.

const getUser = jest.fn();
jest.mock('../lib/supabase/server', () => ({
  createClient: () => ({ auth: { getUser: () => getUser() } }),
}));
jest.mock('../lib/rateLimit', () => ({ rateLimit: jest.fn().mockResolvedValue(false) }));
jest.mock('../lib/getUserOpenRouterKey', () => ({
  getUserOpenRouterKey: jest.fn().mockResolvedValue('sk-or-test'),
}));
jest.mock('../lib/plan', () => ({ getUserPlan: jest.fn().mockResolvedValue('free') }));

let now = 0;
const extractCVTextFromFile = jest.fn<Promise<string>, [File]>();
jest.mock('../lib/cvFileParser', () => ({
  extractCVTextFromFile: (file: File) => extractCVTextFromFile(file),
}));
const callOpenRouter = jest.fn();
jest.mock('../lib/openrouter', () => ({
  ...jest.requireActual('../lib/openrouter'),
  callOpenRouter: (...args: unknown[]) => callOpenRouter(...args),
}));

import { POST } from '../app/api/ai-generate-cv/route';

const LIMIT_MS = 60_000;
const JOB = 'Senior backend engineer building payment systems in Go and Postgres. '.repeat(3);
const CV = 'Asha Rao. Backend engineer with six years building ledger and payout services at scale. '.repeat(2);
const RELEVANT = JSON.stringify({ relevant: true, domainMatchScore: 90, cvDomain: 'a', jdDomain: 'a', reason: 'ok' });

function request(withFile = false): Request {
  const form = new FormData();
  form.set('jobDescription', JOB);
  form.set('templateId', 'modern');
  form.set('cvText', CV);
  if (withFile) form.set('cvFile', new File(['%PDF-1.4'], 'cv.pdf', { type: 'application/pdf' }));
  return new Request('http://localhost/api/ai-generate-cv', { method: 'POST', body: form });
}

/** Each OpenRouter call: the budget it was given and when it started. */
function calls(): Array<{ timeoutMs: number; startedAt: number; maxTokens: number }> {
  return callOpenRouter.mock.calls.map((args, i) => ({
    timeoutMs: (args[0] as { timeoutMs: number }).timeoutMs,
    maxTokens: (args[0] as { maxTokens: number }).maxTokens,
    startedAt: starts[i] ?? 0,
  }));
}
let starts: number[] = [];

describe('POST /api/ai-generate-cv stays inside the function time limit', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    now = 0;
    starts = [];
    jest.spyOn(Date, 'now').mockImplementation(() => now);
    jest.spyOn(console, 'error').mockImplementation(() => undefined);
    getUser.mockResolvedValue({ data: { user: { id: 'user-1' } } });
  });
  afterEach(() => jest.restoreAllMocks());

  it('gives the guard and generation one shared budget, even when both run to their timeout', async () => {
    callOpenRouter.mockImplementation(async (options: { timeoutMs: number }) => {
      starts.push(now);
      now += options.timeoutMs; // every call runs right up to its own timeout
      if (starts.length === 1) return RELEVANT;
      throw new Error('aborted');
    });

    const response = await POST(request());

    expect(response.headers.get('content-type')).toContain('application/json');
    const [guard, generation] = calls();
    expect(guard?.maxTokens).toBe(220);
    expect(guard?.timeoutMs).toBeLessThanOrEqual(10_000);
    expect(generation?.timeoutMs).toBeGreaterThanOrEqual(40_000);
    // The route answered before the platform would have killed it.
    expect(now).toBeLessThan(LIMIT_MS);
  });

  it('skips the guard when a slow file parse has used the time it needs', async () => {
    extractCVTextFromFile.mockImplementation(async () => {
      now += 20_000;
      return CV;
    });
    callOpenRouter.mockImplementation(async (options: { timeoutMs: number }) => {
      starts.push(now);
      now += options.timeoutMs;
      throw new Error('aborted');
    });

    await POST(request(true));

    const all = calls();
    expect(all).toHaveLength(1);
    expect(all[0]?.maxTokens).toBe(4096);
    expect(now).toBeLessThan(LIMIT_MS);
  });

  it('answers with JSON instead of starting a generation that cannot finish', async () => {
    extractCVTextFromFile.mockImplementation(async () => {
      now += 45_000;
      return CV;
    });

    const response = await POST(request(true));

    expect(callOpenRouter).not.toHaveBeenCalled();
    expect(response.status).toBe(503);
    expect(await response.json()).toMatchObject({ error: 'AI_FAILED' });
  });
});
