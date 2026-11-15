import { roleSlugs } from '@/lib/roleData';
import { interviewMap } from '@/lib/interviewData';
import type { InterviewData } from '@/lib/interviewData';

function dataFor(slug: string): InterviewData {
  const data = interviewMap[slug];
  if (!data) throw new Error(`No interview data for ${slug}`);
  return data;
}

// The generic fallback in lib/interviewData.ts opens with this question for every
// role. A role that still serves it is a near-duplicate page in the index.
const STUB_MARKER = 'What is your greatest professional achievement in the last 2 years?';

describe('interview question data', () => {
  it('has hand-written content for every role (no generic stub fallback)', () => {
    const stubbed = roleSlugs.filter((slug) =>
      dataFor(slug).questions.some((item) => item.q === STUB_MARKER),
    );
    expect(stubbed).toEqual([]);
  });

  it('gives each role at least 6 questions, a technical one, and 5 tips', () => {
    for (const slug of roleSlugs) {
      const data = dataFor(slug);
      expect(data.slug).toBe(slug);
      expect(data.questions.length).toBeGreaterThanOrEqual(6);
      expect(data.questions.some((item) => item.type === 'technical')).toBe(true);
      expect(data.tips.length).toBeGreaterThanOrEqual(5);
      for (const item of data.questions) {
        expect(item.answer.length).toBeGreaterThan(200);
      }
    }
  });

  it('does not repeat a question across roles', () => {
    const seen = new Map<string, string>();
    const duplicates: string[] = [];
    for (const slug of roleSlugs) {
      for (const item of dataFor(slug).questions) {
        const previous = seen.get(item.q);
        if (previous) duplicates.push(`${previous} / ${slug}: ${item.q}`);
        seen.set(item.q, slug);
      }
    }
    expect(duplicates).toEqual([]);
  });
});
