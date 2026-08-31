import { saveCv } from '@/lib/saveCv';

// Regression coverage: autosave and export-triggered saves used to fire raw,
// independent fetch() calls to the same PATCH endpoint. If an earlier
// (slower) request resolved after a later (faster) one, the earlier request
// would win and silently overwrite the newer save with stale data. saveCv()
// must serialize writes per CV so responses always land in send order.

describe('saveCv', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    jest.restoreAllMocks();
  });

  it('runs saves to the same CV strictly in the order they were sent, even if an earlier one is slower', async () => {
    const started: string[] = [];
    const finished: string[] = [];

    global.fetch = jest.fn(async (_url, init) => {
      const body = JSON.parse(String(init?.body)) as { data?: { personal?: { name?: string } } };
      const label = body.data?.personal?.name ?? 'unknown';
      started.push(label);

      // The first call is deliberately slower than the second, mimicking a
      // slow network response for an earlier autosave.
      const delay = label === 'first' ? 30 : 0;
      await new Promise((resolve) => setTimeout(resolve, delay));

      finished.push(label);
      return { ok: true, json: async () => ({ ok: true }) } as Response;
    }) as unknown as typeof fetch;

    const firstCall = saveCv('cv-1', { data: { personal: { name: 'first' } } as never });
    const secondCall = saveCv('cv-1', { data: { personal: { name: 'second' } } as never });

    await Promise.all([firstCall, secondCall]);

    // Requests are still issued in call order...
    expect(started).toEqual(['first', 'second']);
    // ...but critically, they also *complete* in that order: the queue
    // waits for "first" to finish before "second" is even sent, so a slow
    // earlier request can never resolve after a faster later one.
    expect(finished).toEqual(['first', 'second']);
  });

  it('keeps saving to a CV after an earlier save in the queue fails', async () => {
    global.fetch = jest
      .fn()
      .mockRejectedValueOnce(new Error('network error'))
      .mockResolvedValueOnce({ ok: true, json: async () => ({ ok: true }) } as Response) as unknown as typeof fetch;

    await expect(saveCv('cv-2', { templateId: 'classic' })).rejects.toThrow('network error');

    const secondResponse = await saveCv('cv-2', { templateId: 'modern' });
    expect(secondResponse.ok).toBe(true);
  });

  it('does not serialize saves to different CVs against each other', async () => {
    const order: string[] = [];
    global.fetch = jest.fn(async (url) => {
      order.push(String(url));
      return { ok: true, json: async () => ({ ok: true }) } as Response;
    }) as unknown as typeof fetch;

    await Promise.all([
      saveCv('cv-a', { templateId: 'classic' }),
      saveCv('cv-b', { templateId: 'classic' }),
    ]);

    expect(order.sort()).toEqual(['/api/cvs/cv-a', '/api/cvs/cv-b']);
  });
});
