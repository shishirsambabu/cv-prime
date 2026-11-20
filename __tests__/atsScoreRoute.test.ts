/**
 * @jest-environment node
 */
// Regression: the editor's ATS check rejected a usable model answer as
// AI_FAILED when it listed one keyword or suggestion more than the cap, or
// quoted its score — after the user's own OpenRouter key had paid for it.

const getUser = jest.fn();
jest.mock('../lib/supabase/server', () => ({
  createClient: () => ({ auth: { getUser: () => getUser() } }),
}));
jest.mock('../lib/rateLimit', () => ({ rateLimit: jest.fn().mockResolvedValue(false) }));
jest.mock('../lib/getUserOpenRouterKey', () => ({
  getUserOpenRouterKey: jest.fn().mockResolvedValue('sk-or-test'),
}));
const callOpenRouter = jest.fn();
jest.mock('../lib/openrouter', () => ({
  ...jest.requireActual('../lib/openrouter'),
  callOpenRouter: (...args: unknown[]) => callOpenRouter(...args),
}));

import { POST } from '../app/api/ats-score/route';

const CV_TEXT = 'Backend engineer with six years of Go, Kafka and Postgres experience in payments.';

function request(cvText = CV_TEXT): Request {
  return new Request('http://localhost/api/ats-score', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      cvText,
      jobDescription: 'We need a senior backend engineer with Go, Kafka, Postgres and AWS experience.',
    }),
  });
}

const words = (n: number, prefix: string): string[] => Array.from({ length: n }, (_, i) => `${prefix}${i}`);

describe('POST /api/ats-score', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    getUser.mockResolvedValue({ data: { user: { id: 'user-1' } } });
  });

  it('keeps an answer that is slightly over the item caps, trimmed to the caps', async () => {
    callOpenRouter.mockResolvedValue(
      JSON.stringify({
        score: '74.5',
        missingKeywords: words(34, 'missing'),
        presentKeywords: words(31, 'present'),
        suggestions: words(13, 'suggestion'),
      })
    );

    const response = await POST(request());
    const body = (await response.json()) as Record<string, unknown>;

    expect(response.status).toBe(200);
    expect(body.score).toBe(75);
    expect(body.missingKeywords).toHaveLength(30);
    expect(body.presentKeywords).toHaveLength(30);
    expect(body.suggestions).toHaveLength(12);
  });

  it('still fails cleanly on an answer with no usable score', async () => {
    callOpenRouter.mockResolvedValue(
      JSON.stringify({ score: 'strong', missingKeywords: [], presentKeywords: [], suggestions: [] })
    );

    const response = await POST(request());

    expect(response.status).toBe(500);
    expect(await response.json()).toMatchObject({ error: 'AI_FAILED' });
  });

  // The editor sends the whole CV as text, and a CV has no length limit.
  it('scores a very long CV on its first 25,000 characters instead of refusing it', async () => {
    callOpenRouter.mockResolvedValue(
      JSON.stringify({ score: 70, missingKeywords: [], presentKeywords: [], suggestions: [] })
    );

    const response = await POST(request(CV_TEXT.repeat(400)));

    expect(response.status).toBe(200);
    const prompt = (callOpenRouter.mock.calls[0]?.[0] as { messages: Array<{ content: string }> })
      .messages[1]?.content ?? '';
    expect(prompt.length).toBeLessThan(25_000 + 1_000);
  });
});
