/**
 * @jest-environment node
 */
import { callOpenRouter } from '@/lib/openrouter';

// Every AI route runs with maxDuration = 60 and passes timeoutMs <= 55 000.
// callOpenRouter used to (a) clear its abort timer as soon as response
// headers arrived, so a model still generating behind early headers was never
// aborted, and (b) give the 5xx retry a fresh full timeout, so one call could
// run for timeout + 1 s + timeout. Either way Vercel killed the function and
// the browser got a 504 page instead of the route's JSON error.
describe('callOpenRouter time budget', () => {
  const realFetch = global.fetch;
  const options = { apiKey: 'sk-or-test', messages: [{ role: 'user' as const, content: 'hi' }] };

  afterEach(() => {
    global.fetch = realFetch;
    jest.useRealTimers();
  });

  function okBody(content: string): Response {
    return new Response(JSON.stringify({ choices: [{ message: { content } }] }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  it('aborts while the body is still being generated after headers arrived', async () => {
    // Headers come back at once; the body only finishes when aborted.
    global.fetch = jest.fn(async (_url: unknown, init?: RequestInit) => {
      const signal = init?.signal as AbortSignal;
      const stream = new ReadableStream<Uint8Array>({
        start(controller) {
          controller.enqueue(new TextEncoder().encode(' '));
          signal.addEventListener('abort', () => controller.error(new DOMException('aborted', 'AbortError')));
        },
      });
      return new Response(stream, { status: 200 });
    }) as unknown as typeof fetch;

    const started = Date.now();
    await expect(callOpenRouter({ ...options, timeoutMs: 150 })).rejects.toThrow();
    expect(Date.now() - started).toBeLessThan(2_000);
  });

  it('does not retry a 5xx when too little of the budget is left', async () => {
    jest.useFakeTimers();
    let calls = 0;
    global.fetch = jest.fn(async () => {
      calls += 1;
      // The first attempt fails late: 50 of the 55 seconds are gone.
      await new Promise((resolve) => setTimeout(resolve, 50_000));
      return new Response(JSON.stringify({ error: { message: 'Upstream overloaded' } }), { status: 502 });
    }) as unknown as typeof fetch;

    const result = callOpenRouter({ ...options, timeoutMs: 55_000 });
    const assertion = expect(result).rejects.toThrow('Upstream overloaded');
    await jest.advanceTimersByTimeAsync(52_000);
    await assertion;
    expect(calls).toBe(1);
  });

  it('retries a quick 5xx inside the remaining budget and returns its answer', async () => {
    let calls = 0;
    global.fetch = jest.fn(async () => {
      calls += 1;
      if (calls === 1) {
        return new Response(JSON.stringify({ error: { message: 'Bad gateway' } }), { status: 502 });
      }
      return okBody('hello');
    }) as unknown as typeof fetch;

    await expect(callOpenRouter({ ...options, timeoutMs: 20_000 })).resolves.toBe('hello');
    expect(calls).toBe(2);
  });

  it('bounds the retry by what is left of the budget, not a fresh timeout', async () => {
    jest.useFakeTimers();
    let calls = 0;
    global.fetch = jest.fn(async (_url: unknown, init?: RequestInit) => {
      calls += 1;
      if (calls === 1) {
        await new Promise((resolve) => setTimeout(resolve, 30_000));
        return new Response(JSON.stringify({ error: { message: 'Bad gateway' } }), { status: 502 });
      }
      // The retry hangs until it is aborted.
      return new Promise<Response>((_resolve, reject) => {
        (init?.signal as AbortSignal).addEventListener('abort', () =>
          reject(new DOMException('aborted', 'AbortError')),
        );
      });
    }) as unknown as typeof fetch;

    let settledAt: number | null = null;
    const result = callOpenRouter({ ...options, timeoutMs: 55_000 }).catch((error: unknown) => {
      settledAt = Date.now();
      throw error;
    });
    const assertion = expect(result).rejects.toThrow();
    const start = Date.now();
    await jest.advanceTimersByTimeAsync(56_000);
    await assertion;
    expect(calls).toBe(2);
    expect(settledAt).not.toBeNull();
    expect((settledAt as unknown as number) - start).toBeLessThanOrEqual(55_000);
  });
});
