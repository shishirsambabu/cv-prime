import { interviewMap } from '@/lib/interviewData';
import { moreInterviewData } from '@/lib/interviewDataMore';
import { roleSlugs } from '@/lib/roleData';

describe('interview question data', () => {
  it('covers every role slug', () => {
    for (const slug of roleSlugs) {
      expect(interviewMap[slug]).toBeDefined();
    }
  });

  it('only defines role-specific sets for real role slugs', () => {
    for (const [slug, set] of Object.entries(moreInterviewData)) {
      expect(roleSlugs).toContain(slug);
      expect(set.slug).toBe(slug);
    }
  });

  it('serves role-specific (non-stub) questions for the expanded roles', () => {
    for (const slug of Object.keys(moreInterviewData)) {
      const set = interviewMap[slug];
      if (!set) throw new Error(`missing interview set for ${slug}`);
      expect(set.questions.length).toBeGreaterThanOrEqual(6);
      expect(set.tips.length).toBeGreaterThanOrEqual(5);
      expect(set.questions.some((q) => q.type === 'technical')).toBe(true);
      expect(set.questions.some((q) => q.q.startsWith('Tell me about yourself'))).toBe(false);
    }
  });

  it('has no duplicate questions across role-specific sets', () => {
    const seen = new Set<string>();
    for (const set of Object.values(moreInterviewData)) {
      for (const { q } of set.questions) {
        expect(seen.has(q)).toBe(false);
        seen.add(q);
      }
    }
  });
});
