import { getKnownVersion, saveCv, setKnownVersion } from '@/lib/saveCv';

// Regression coverage: autosave and export-triggered saves used to fire raw,
// independent fetch() calls to the same PATCH endpoint. If an earlier
// (slower) request resolved after a later (faster) one, the earlier request
// would win and silently overwrite the newer save with stale data. saveCv()
// must serialize writes per CV so responses always land in send order.

// jsdom has no Response; enough of one for saveCv (it reads a clone).
function jsonResponse(payload: unknown, status: number): Response {
  const make = (): Response =>
    ({ ok: status >= 200 && status < 300, status, json: async () => payload, clone: make }) as unknown as Response;
  return make();
}

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

  // Regression: a stale tab's autosave overwrote another tab's newer edits.
  // Every content save carries the version its copy is based on, read when
  // the request is sent, so a save queued behind another uses its result.
  it('sends the known version with content saves and advances it from each response', async () => {
    const sent: Array<Record<string, unknown>> = [];
    let next = 1;
    global.fetch = jest.fn(async (_url, init) => {
      sent.push(JSON.parse(String(init?.body)) as Record<string, unknown>);
      return jsonResponse({ ok: true, version: `v${++next}` }, 200);
    }) as unknown as typeof fetch;

    setKnownVersion('cv-v', 'v1');
    await Promise.all([
      saveCv('cv-v', { templateId: 'classic' }),
      saveCv('cv-v', { templateId: 'modern' }),
    ]);

    expect(sent.map((body) => body.baseVersion)).toEqual(['v1', 'v2']);
    expect(getKnownVersion('cv-v')).toBe('v3');
  });

  it('leaves the version alone on a refused save, and omits it for an explicit keep-mine save', async () => {
    const sent: Array<Record<string, unknown>> = [];
    global.fetch = jest
      .fn()
      .mockImplementationOnce(async (_url, init) => {
        sent.push(JSON.parse(String(init?.body)) as Record<string, unknown>);
        return jsonResponse({ error: 'CONFLICT', version: 'theirs' }, 409);
      })
      .mockImplementationOnce(async (_url, init) => {
        sent.push(JSON.parse(String(init?.body)) as Record<string, unknown>);
        return jsonResponse({ ok: true, version: 'mine' }, 200);
      }) as unknown as typeof fetch;

    setKnownVersion('cv-c', 'base');
    const refused = await saveCv('cv-c', { templateId: 'classic' });
    expect(refused.status).toBe(409);
    expect(getKnownVersion('cv-c')).toBe('base');

    await saveCv('cv-c', { templateId: 'classic' }, { force: true });
    expect(sent[0]?.baseVersion).toBe('base');
    expect(sent[1]).not.toHaveProperty('baseVersion');
    expect(getKnownVersion('cv-c')).toBe('mine');
  });
});
