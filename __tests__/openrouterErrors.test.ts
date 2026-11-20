/**
 * @jest-environment node
 */
import { callOpenRouter, validateOpenRouterKey } from '@/lib/openrouter';

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

// Saving a key used to treat any non-2xx from OpenRouter's /key endpoint as
// "invalid key", so an OpenRouter outage or a 429 told users their working
// key had been rejected. Only 401/403 are a verdict on the key.
describe('validateOpenRouterKey', () => {
  const realFetch = global.fetch;
  afterEach(() => {
    global.fetch = realFetch;
  });

  function respondWith(status: number): void {
    global.fetch = jest.fn(async () => new Response('{}', { status })) as unknown as typeof fetch;
  }

  it('accepts a key OpenRouter accepts', async () => {
    respondWith(200);
    await expect(validateOpenRouterKey('sk-or-test')).resolves.toBe(true);
  });

  it.each([401, 403])('rejects a key OpenRouter answers %i for', async (status) => {
    respondWith(status);
    await expect(validateOpenRouterKey('sk-or-test')).resolves.toBe(false);
  });

  it.each([429, 500, 502, 503])('reports HTTP %i as unavailable, not as an invalid key', async (status) => {
    respondWith(status);
    await expect(validateOpenRouterKey('sk-or-test')).rejects.toThrow('unavailable');
  });

  it('passes a timeout signal so a hung check cannot hang the save', async () => {
    respondWith(200);
    await validateOpenRouterKey('sk-or-test');
    const init = (global.fetch as jest.Mock).mock.calls[0][1] as RequestInit;
    expect(init.signal).toBeInstanceOf(AbortSignal);
  });
});
