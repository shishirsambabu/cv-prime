/**
 * @jest-environment node
 */
// Regression: the export check spent one of the 3 free PDF downloads before
// anything looked at the template. The print page then refused a Pro template
// on the free plan, so a downgraded user whose CV was still on one lost every
// free download to a "This template is part of Pro" page and never got a PDF.

const getUser = jest.fn();
const cvRow = jest.fn<{ template_id: string | null } | null, []>(() => ({ template_id: 'classic' }));
const cvError = jest.fn<{ message: string } | null, []>(() => null);
jest.mock('../lib/supabase/server', () => ({
  createClient: () => ({
    auth: { getUser: () => getUser() },
    from: () => ({
      select: () => ({
        eq: () => ({
          eq: () => ({
            maybeSingle: async () => ({ data: cvError() ? null : cvRow(), error: cvError() }),
          }),
        }),
      }),
    }),
  }),
}));

jest.mock('../lib/rateLimit', () => ({ rateLimit: jest.fn().mockResolvedValue(false) }));

const getUserPlan = jest.fn<Promise<'free' | 'pro'>, [string]>();
jest.mock('../lib/plan', () => ({ getUserPlan: (id: string) => getUserPlan(id) }));

const createPdfExportToken = jest.fn();
jest.mock('../lib/billingQuota', () => ({
  createPdfExportToken: (args: unknown) => createPdfExportToken(args),
}));

import { POST } from '../app/api/export-pdf/check/route';

const CV_ID = '11111111-1111-4111-8111-111111111111';

function request(): Request {
  return new Request('http://localhost/api/export-pdf/check', {
    method: 'POST',
    body: JSON.stringify({ cvId: CV_ID }),
  });
}

describe('POST /api/export-pdf/check', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    getUser.mockResolvedValue({ data: { user: { id: 'user-1' } } });
    getUserPlan.mockResolvedValue('free');
    cvRow.mockReturnValue({ template_id: 'classic' });
    cvError.mockReturnValue(null);
    createPdfExportToken.mockResolvedValue({ allowed: true, used: 1, limit: 3, token: 'tok' });
  });

  it('does not spend a free export on a Pro template the print page would refuse', async () => {
    cvRow.mockReturnValue({ template_id: 'executive' });

    const response = await POST(request());
    const payload = (await response.json()) as { error: string; reason: string };

    expect(response.status).toBe(403);
    expect(payload).toMatchObject({ error: 'PLAN_GATE', reason: 'premium-template' });
    expect(createPdfExportToken).not.toHaveBeenCalled();
  });

  it('lets a Pro account export a Pro template', async () => {
    cvRow.mockReturnValue({ template_id: 'executive' });
    getUserPlan.mockResolvedValue('pro');

    const response = await POST(request());

    expect(response.status).toBe(200);
    expect(createPdfExportToken).toHaveBeenCalledTimes(1);
  });

  it('lets a free account export a free template', async () => {
    const response = await POST(request());

    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({ token: 'tok' });
  });

  it('answers 404 without spending an export when the CV is not the caller\'s', async () => {
    cvRow.mockReturnValue(null);

    const response = await POST(request());

    expect(response.status).toBe(404);
    expect(createPdfExportToken).not.toHaveBeenCalled();
  });

  it('still exports when the template lookup itself fails', async () => {
    cvError.mockReturnValue({ message: 'boom' });

    const response = await POST(request());

    expect(response.status).toBe(200);
    expect(createPdfExportToken).toHaveBeenCalledTimes(1);
  });
});
