/**
 * @jest-environment node
 */
// Regression: /api/ai-generate-cv and /api/ats-fix validated the CV a model
// wrote with the strict stored-CV schema. Models routinely answer
// `"endDate": null` for a current job, `"gpa": null`, a year as a number, or
// leave out `sectionOrder` or an `id` — each of which threw away a complete
// generation (up to a minute, paid for by the user's own key) as AI_FAILED.

const getUser = jest.fn();
const insert = jest.fn();
jest.mock('../lib/supabase/server', () => ({
  createClient: () => ({
    auth: { getUser: () => getUser() },
    from: () => ({
      insert: (rows: unknown) => {
        insert(rows);
        return { select: () => ({ single: async () => ({ data: { id: 'cv-new' }, error: null }) }) };
      },
    }),
  }),
}));
jest.mock('../lib/rateLimit', () => ({ rateLimit: jest.fn().mockResolvedValue(false) }));
jest.mock('../lib/getUserOpenRouterKey', () => ({
  getUserOpenRouterKey: jest.fn().mockResolvedValue('sk-or-test'),
}));
jest.mock('../lib/plan', () => ({ getUserPlan: jest.fn().mockResolvedValue('free') }));
jest.mock('../lib/cvJobRelevanceGuard', () => ({
  ...jest.requireActual('../lib/cvJobRelevanceGuard'),
  checkCVJobRelevance: jest.fn().mockResolvedValue(null),
}));
const callOpenRouter = jest.fn();
jest.mock('../lib/openrouter', () => ({
  ...jest.requireActual('../lib/openrouter'),
  callOpenRouter: (...args: unknown[]) => callOpenRouter(...args),
}));

import { POST as generate } from '../app/api/ai-generate-cv/route';
import { POST as atsFix } from '../app/api/ats-fix/route';
import { createDefaultCVData } from '../lib/cv';
import type { CVData } from '../types/cv.types';

const JOB = 'Senior backend engineer building payment systems in Go and Postgres. '.repeat(3);
const CV = 'Asha Rao. Backend engineer with six years building ledger and payout services at scale. '.repeat(2);

/** What a model typically sends back: right shape, loose types. */
const LOOSE_MODEL_CV = {
  personal: {
    name: 'Asha Rao',
    title: 'Senior Backend Engineer',
    email: 'asha@example.com',
    phone: 9876543210,
    location: 'Bengaluru',
    linkedin: null,
    summary: 'Backend engineer focused on payments.',
  },
  experience: [
    {
      company: 'PayCo',
      role: 'Backend Engineer',
      startDate: '2019',
      endDate: null,
      current: true,
      bullets: ['Built the payout ledger in Go', null],
    },
  ],
  education: [{ id: 'e1', institution: 'IIT', degree: 'BTech', field: 'CS', startDate: 2012, endDate: 2016, gpa: null }],
  skills: { technical: ['Go', 'Postgres'], soft: [], languages: ['English'] },
  projects: [],
  certifications: [],
  awards: [],
};

function generateRequest(): Request {
  const form = new FormData();
  form.set('jobDescription', JOB);
  form.set('templateId', 'modern');
  form.set('cvText', CV);
  return new Request('http://localhost/api/ai-generate-cv', { method: 'POST', body: form });
}

describe('AI-written CVs are repaired, not rejected', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockImplementation(() => undefined);
    getUser.mockResolvedValue({ data: { user: { id: 'user-1' } } });
  });
  afterEach(() => jest.restoreAllMocks());

  it('saves a generated CV whose model answer has nulls, numbers and no sectionOrder', async () => {
    callOpenRouter.mockResolvedValue(
      JSON.stringify({
        title: 'x'.repeat(260),
        cvData: LOOSE_MODEL_CV,
        score: '78',
        missingKeywords: ['Kafka', 3],
        presentKeywords: null,
        suggestions: ['Quantify the ledger work'],
      })
    );

    const response = await generate(generateRequest());
    const body = (await response.json()) as { cvId?: string; score?: number; missingKeywords?: string[] };

    expect(response.status).toBe(201);
    expect(body.cvId).toBe('cv-new');
    expect(body.score).toBe(78);
    expect(body.missingKeywords).toEqual(['Kafka']);

    const [[row]] = insert.mock.calls as [[Array<{ title: string; data: CVData }>]];
    const saved = row[0]!;
    expect(saved.title.length).toBeLessThanOrEqual(200);
    expect(saved.data.personal.name).toBe('Asha Rao');
    expect(saved.data.personal.phone).toBe('9876543210');
    expect(saved.data.personal.linkedin).toBe('');
    expect(saved.data.experience[0]?.endDate).toBe('');
    expect(saved.data.experience[0]?.current).toBe(true);
    expect(saved.data.experience[0]?.id).toBeTruthy();
    expect(saved.data.experience[0]?.bullets).toEqual(['Built the payout ledger in Go']);
    expect(saved.data.education[0]?.startDate).toBe('2012');
    expect(saved.data.sectionOrder).toHaveLength(7);
  });

  it('still refuses an answer with no CV object at all', async () => {
    callOpenRouter.mockResolvedValue(JSON.stringify({ title: 'CV', cvData: 'n/a', score: 50 }));

    const response = await generate(generateRequest());

    expect(response.status).toBe(500);
    expect(insert).not.toHaveBeenCalled();
  });

  it('applies an ATS fix whose model answer has a null date and null changes', async () => {
    const original = createDefaultCVData();
    original.personal.summary = 'Old summary';
    original.experience = [
      { id: 'x1', company: 'PayCo', role: 'Engineer', startDate: '2019', endDate: '', current: true, bullets: ['Did things'] },
    ];
    callOpenRouter.mockResolvedValue(
      JSON.stringify({
        cvData: {
          ...LOOSE_MODEL_CV,
          personal: { ...LOOSE_MODEL_CV.personal, summary: 'New summary' },
          experience: [{ id: 'x1', company: 'Other', endDate: null, bullets: ['Shipped the payout ledger'] }],
        },
        changes: null,
      })
    );

    const response = await atsFix(
      new Request('http://localhost/api/ats-fix', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cvData: original, jobDescription: JOB }),
      })
    );
    const body = (await response.json()) as { cvData: CVData; changes: string[] };

    expect(response.status).toBe(200);
    expect(body.changes).toEqual([]);
    expect(body.cvData.personal.summary).toBe('New summary');
    // Only the bullets come from the model; the employer stays the user's.
    expect(body.cvData.experience[0]).toMatchObject({ company: 'PayCo', bullets: ['Shipped the payout ledger'] });
    // Personal details other than the summary are never taken from the model.
    expect(body.cvData.personal.name).toBe('');
  });
});
