/**
 * @jest-environment node
 */
import { callOpenRouter } from '@/lib/openrouter';

// OpenRouter answers 402 when a key is valid but its account has no credits.
// That used to fall through as a generic error, so every AI feature told the
// user to "try again" forever instead of showing the key prompt (AGENTS.md
// defines KEY_INVALID as "revoked/quota").
describe('callOpenRouter error mapping', () => {
  const realFetch = global.fetch;
  afterEach(() => {
    global.fetch = realFetch;
  });

  function respondWith(status: number, body: unknown): void {
    global.fetch = jest.fn(async () =>
      new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } }),
    ) as unknown as typeof fetch;
  }

  const options = { apiKey: 'sk-or-test', messages: [{ role: 'user' as const, content: 'hi' }] };

  it.each([401, 402, 403])('maps HTTP %i to KEY_INVALID', async (status) => {
    respondWith(status, { error: { message: 'Insufficient credits' } });

    await expect(callOpenRouter(options)).rejects.toThrow('KEY_INVALID');
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it('keeps the upstream message for other client errors', async () => {
    respondWith(400, { error: { message: 'Bad model' } });

    await expect(callOpenRouter(options)).rejects.toThrow('Bad model');
  });
});
