/**
 * @jest-environment node
 */
import { z } from 'zod';
import { describeValidationError } from '../lib/validationMessage';
import { POST as jdDecoder } from '../app/api/tools/jd-decoder/route';
import { POST as interviewQuestions } from '../app/api/tools/interview-questions/route';
import { POST as salaryNegotiation } from '../app/api/tools/salary-negotiation/route';
import { POST as linkedin } from '../app/api/tools/linkedin/route';

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

function post(body: unknown): Request {
  return new Request('http://localhost/api/tools/x', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

const JD = 'We are hiring a backend engineer to build payment systems in Go. '.repeat(2);

describe('describeValidationError', () => {
  const schema = z.object({
    jobDescription: z.string().min(50, 'Paste a job description.').max(15_000),
    role: z.string().max(120).optional(),
  });

  it('names the box and the limit for an over-long paste', () => {
    const result = schema.safeParse({ jobDescription: 'x'.repeat(15_001) });
    expect(result.success).toBe(false);
    if (result.success) return;
    expect(describeValidationError(result.error)).toBe(
      'The job description is too long. Keep it under 15,000 characters.'
    );
  });

  it('humanizes a field without a label', () => {
    const result = schema.safeParse({ jobDescription: JD, role: 'r'.repeat(121) });
    if (result.success) throw new Error('expected failure');
    expect(describeValidationError(result.error)).toBe('Role is too long. Keep it under 120 characters.');
  });

  it("uses the route's own message for a minimum", () => {
    const result = schema.safeParse({ jobDescription: 'short' });
    if (result.success) throw new Error('expected failure');
    expect(describeValidationError(result.error)).toBe('Paste a job description.');
  });
});

describe('AI tool routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    getUser.mockResolvedValue({ data: { user: { id: 'user-1' } } });
  });

  it('answer a refused input with a message the page can show', async () => {
    const response = await jdDecoder(post({ jobDescription: 'x'.repeat(16_000) }));
    const body = (await response.json()) as { message?: string };
    expect(response.status).toBe(400);
    expect(body.message).toBe('The job description is too long. Keep it under 15,000 characters.');
    expect(callOpenRouter).not.toHaveBeenCalled();
  });

  // Before: one item over each list's cap turned a paid-for answer into AI_FAILED.
  it('keep a JD decode with one list longer than asked', async () => {
    const list = (n: number): string[] => Array.from({ length: n }, (_, i) => `item ${i}`);
    callOpenRouter.mockResolvedValue(
      JSON.stringify({
        seniority: 'Senior',
        mustHaves: list(18),
        niceToHaves: list(3),
        hiddenRequirements: list(11),
        redFlags: list(9),
        keywordsToMirror: list(25),
      })
    );
    const response = await jdDecoder(post({ jobDescription: JD }));
    const body = (await response.json()) as { mustHaves: string[]; keywordsToMirror: string[] };
    expect(response.status).toBe(200);
    expect(body.mustHaves).toHaveLength(15);
    expect(body.keywordsToMirror).toHaveLength(20);
  });

  it('keep 17 interview questions, 6 negotiation scripts and 7 headlines', async () => {
    const q = { question: 'Why?', category: 'Behavioural', tip: 'STAR' };
    callOpenRouter.mockResolvedValueOnce(JSON.stringify({ questions: Array(17).fill(q) }));
    const questions = await interviewQuestions(post({ role: 'Backend engineer' }));
    expect(questions.status).toBe(200);
    expect(((await questions.json()) as { questions: unknown[] }).questions).toHaveLength(16);

    callOpenRouter.mockResolvedValueOnce(
      JSON.stringify({
        talkingPoints: Array(9).fill('p'),
        scripts: Array(6).fill({ situation: 's', script: 't' }),
        tips: Array(7).fill('t'),
      })
    );
    const negotiation = await salaryNegotiation(post({ role: 'Engineer', context: 'Offer of 30 LPA, I want 36.' }));
    expect(negotiation.status).toBe(200);

    callOpenRouter.mockResolvedValueOnce(JSON.stringify({ headlines: Array(7).fill('h'), about: 'a' }));
    const headline = await linkedin(post({ resumeText: 'Backend engineer, six years, payments, Go and Postgres.' }));
    expect(headline.status).toBe(200);
    expect(((await headline.json()) as { headlines: string[] }).headlines).toHaveLength(6);
  });
});
