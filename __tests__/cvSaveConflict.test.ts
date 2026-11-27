/**
 * @jest-environment node
 */
// Regression coverage: autosave PATCHes the whole CV. A tab (or a second
// device) that had the CV open from before another tab's edits overwrote them
// on its next keystroke, silently. Reproduced in Chromium against the mock
// backend: tab B saved " FROM-TAB-B" into the summary, then stale tab A typed
// one character in the name and its save put the old summary back.
//
// The editor now sends the version (lib/cvVersion.ts) its copy is based on as
// `baseVersion`; the route answers 409 CONFLICT when the stored row differs.
// See also e2e/editor-save-conflict.mjs for the browser-level check.

// Relative paths, not the `@/...` alias: see cvsRoutePlanGate.test.ts.
const getUser = jest.fn();
const storedRow = jest.fn<{ data: unknown; template_id: string | null }, []>();
const updateCalled = jest.fn();
jest.mock('../lib/supabase/server', () => ({
  createClient: () => ({
    auth: { getUser: () => getUser() },
    from: () => ({
      select: () => ({
        eq: () => ({
          eq: () => ({
            maybeSingle: async () => ({ data: storedRow(), error: null }),
          }),
        }),
      }),
      update: (updates: { data?: unknown; template_id?: string }) => {
        updateCalled(updates);
        return {
          eq: () => ({
            eq: () => ({
              select: async () => ({
                data: [
                  {
                    id: '11111111-1111-1111-1111-111111111111',
                    data: updates.data ?? storedRow().data,
                    template_id: updates.template_id ?? storedRow().template_id,
                  },
                ],
                error: null,
              }),
            }),
          }),
        };
      },
    }),
  }),
}));

const rateLimit = jest.fn().mockResolvedValue(false);
jest.mock('../lib/rateLimit', () => ({
  rateLimit: (...args: unknown[]) => rateLimit(...args),
}));

jest.mock('../lib/plan', () => ({
  getUserPlan: async () => 'pro',
}));

import { PATCH } from '@/app/api/cvs/[cvId]/route';
import { computeCvVersion } from '@/lib/cvVersion';
import { createDefaultCVData } from '@/lib/cv';

const params = { cvId: '11111111-1111-1111-1111-111111111111' };

function patchRequest(body: unknown): Request {
  return new Request(`http://localhost/api/cvs/${params.cvId}`, {
    method: 'PATCH',
    body: JSON.stringify(body),
  });
}

function cvWithSummary(summary: string) {
  const data = createDefaultCVData();
  data.personal.name = 'Asha Rao';
  data.personal.summary = summary;
  return data;
}

describe('computeCvVersion', () => {
  it('ignores key order, which jsonb does not preserve', () => {
    expect(computeCvVersion({ a: 1, b: { c: 2, d: [1, { e: 3, f: 4 }] } }, 'classic')).toBe(
      computeCvVersion({ b: { d: [1, { f: 4, e: 3 }], c: 2 }, a: 1 }, 'classic')
    );
  });

  it('changes when the content or the template changes', () => {
    const base = computeCvVersion(cvWithSummary('one'), 'classic');
    expect(computeCvVersion(cvWithSummary('two'), 'classic')).not.toBe(base);
    expect(computeCvVersion(cvWithSummary('one'), 'modern')).not.toBe(base);
  });
});

describe('PATCH /api/cvs/[cvId] — stale copy check', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    getUser.mockResolvedValue({ data: { user: { id: 'user-1' } } });
    storedRow.mockReturnValue({ data: cvWithSummary('Newer summary from tab B'), template_id: 'classic' });
  });

  it('refuses a save based on an older copy instead of overwriting the newer row', async () => {
    const staleVersion = computeCvVersion(cvWithSummary('Old summary'), 'classic');

    const response = await PATCH(
      patchRequest({ data: cvWithSummary('Old summary'), templateId: 'classic', baseVersion: staleVersion }),
      { params }
    );

    expect(response.status).toBe(409);
    const json = (await response.json()) as { error: string; version: string };
    expect(json.error).toBe('CONFLICT');
    expect(json.version).toBe(computeCvVersion(storedRow().data, 'classic'));
    expect(updateCalled).not.toHaveBeenCalled();
  });

  it('saves when the copy is current, and returns the version of what it wrote', async () => {
    const current = computeCvVersion(storedRow().data, 'classic');
    const edited = cvWithSummary('Newer summary from tab B, edited again');

    const response = await PATCH(
      patchRequest({ data: edited, templateId: 'classic', baseVersion: current }),
      { params }
    );

    expect(response.status).toBe(200);
    expect(updateCalled).toHaveBeenCalled();
    const json = (await response.json()) as { ok: boolean; version: string };
    expect(json.version).toBe(computeCvVersion(edited, 'classic'));
  });

  it('still accepts saves without a base version (rename, share toggle, explicit keep-mine)', async () => {
    const response = await PATCH(patchRequest({ data: cvWithSummary('Mine') }), { params });
    expect(response.status).toBe(200);

    const rename = await PATCH(patchRequest({ title: 'Renamed', baseVersion: 'anything' }), { params });
    expect(rename.status).toBe(200);
  });

  it('answers 404, not 409, when the CV no longer exists', async () => {
    storedRow.mockReturnValue(null as never);
    const response = await PATCH(
      patchRequest({ data: cvWithSummary('x'), baseVersion: 'abc' }),
      { params }
    );
    expect(response.status).toBe(404);
  });
});
