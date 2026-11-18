/**
 * @jest-environment node
 */
// Regression: when a CV file was attached, its extracted text replaced the
// pasted CV text unconditionally. A scanned PDF (no text layer) therefore
// failed with "Upload a readable CV or paste more CV text" no matter how much
// text the user then pasted, for as long as the file stayed selected. And
// text taken from a file was sent to the model with no length cap.

const getUser = jest.fn();
jest.mock('../lib/supabase/server', () => ({
  createClient: () => ({ auth: { getUser: () => getUser() } }),
}));
jest.mock('../lib/rateLimit', () => ({ rateLimit: jest.fn().mockResolvedValue(false) }));
jest.mock('../lib/getUserOpenRouterKey', () => ({
  getUserOpenRouterKey: jest.fn().mockResolvedValue('sk-or-test'),
}));
jest.mock('../lib/plan', () => ({ getUserPlan: jest.fn().mockResolvedValue('free') }));
const extractCVTextFromFile = jest.fn<Promise<string>, [File]>();
jest.mock('../lib/cvFileParser', () => ({
  extractCVTextFromFile: (file: File) => extractCVTextFromFile(file),
}));
// The relevance guard is the first consumer of the source text; answering
// "not relevant" ends the request there, so the test can read what it was given
// without standing up the generation call.
const checkCVJobRelevance = jest.fn();
jest.mock('../lib/cvJobRelevanceGuard', () => ({
  RELEVANCE_TIMEOUT_MS: 10_000,
  checkCVJobRelevance: (...args: unknown[]) => checkCVJobRelevance(...args),
}));

import { POST } from '../app/api/ai-generate-cv/route';

const JOB = 'Senior backend engineer building payment systems in Go and Postgres. '.repeat(3);
const PASTED = 'Asha Rao. Backend engineer with six years building ledger and payout services at scale. '.repeat(2);

function request(fields: { cvText?: string; file?: boolean }): Request {
  const form = new FormData();
  form.set('jobDescription', JOB);
  form.set('templateId', 'modern');
  if (fields.cvText !== undefined) form.set('cvText', fields.cvText);
  if (fields.file) form.set('cvFile', new File(['%PDF-1.4'], 'cv.pdf', { type: 'application/pdf' }));
  return new Request('http://localhost/api/ai-generate-cv', { method: 'POST', body: form });
}

function sourceTextSeenByGuard(): string {
  return String(checkCVJobRelevance.mock.calls[0]?.[2]);
}

describe('POST /api/ai-generate-cv source text', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    getUser.mockResolvedValue({ data: { user: { id: 'user-1' } } });
    checkCVJobRelevance.mockResolvedValue({
      relevant: false,
      reason: 'stop here',
      cvDomain: 'x',
      jdDomain: 'y',
      domainMatchScore: 0,
    });
  });

  it('uses the pasted text when the attached file has no readable text', async () => {
    extractCVTextFromFile.mockResolvedValue('   ');

    const response = await POST(request({ cvText: PASTED, file: true }));

    expect(response.status).toBe(422);
    expect(sourceTextSeenByGuard()).toBe(PASTED.trim());
  });

  it('uses the pasted text when the attached file cannot be parsed at all', async () => {
    extractCVTextFromFile.mockRejectedValue(new Error('corrupt'));

    const response = await POST(request({ cvText: PASTED, file: true }));

    expect(response.status).toBe(422);
    expect(sourceTextSeenByGuard()).toBe(PASTED.trim());
  });

  it('still prefers a readable file over pasted text', async () => {
    const fromFile = 'Text extracted from the uploaded CV file, long enough to be used as the source. '.repeat(2);
    extractCVTextFromFile.mockResolvedValue(fromFile);

    await POST(request({ cvText: PASTED, file: true }));

    expect(sourceTextSeenByGuard()).toBe(fromFile.trim());
  });

  it('still reports an unreadable file when nothing usable was pasted', async () => {
    extractCVTextFromFile.mockRejectedValue(new Error('corrupt'));
    const failed = await POST(request({ file: true }));
    expect(failed.status).toBe(400);
    expect(await failed.json()).toMatchObject({ error: 'CV_PARSE_FAILED' });

    extractCVTextFromFile.mockResolvedValue('');
    const empty = await POST(request({ cvText: 'too short', file: true }));
    expect(empty.status).toBe(400);
    expect(await empty.json()).toMatchObject({ error: 'CV_TEXT_TOO_SHORT' });
    expect(checkCVJobRelevance).not.toHaveBeenCalled();
  });

  it('caps text taken from a file at the same length as pasted text', async () => {
    extractCVTextFromFile.mockResolvedValue('word '.repeat(40_000));

    await POST(request({ file: true }));

    expect(sourceTextSeenByGuard().length).toBe(25_000);
  });
});
