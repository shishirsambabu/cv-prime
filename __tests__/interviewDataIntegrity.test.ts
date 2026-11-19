import { roleSlugs, roleMap } from '@/lib/roleData';
import { interviewMap, indexableInterviewSlugs, hasDetailedInterviewData } from '@/lib/interviewData';

describe('interview question data integrity', () => {
  it('has an entry for every role', () => {
    for (const slug of roleSlugs) {
      expect(interviewMap[slug]).toBeDefined();
    }
  });

  it('only marks role-specific entries as indexable', () => {
    for (const slug of indexableInterviewSlugs) {
      expect(interviewMap[slug]?.isStub).not.toBe(true);
      expect(hasDetailedInterviewData(slug)).toBe(true);
    }
    for (const slug of roleSlugs.filter((s) => !indexableInterviewSlugs.includes(s))) {
      expect(interviewMap[slug]?.isStub).toBe(true);
    }
  });

  it('gives every role a role-specific guide (no generic stubs left)', () => {
    const stubs = roleSlugs.filter((slug) => !hasDetailedInterviewData(slug));
    expect(stubs).toEqual([]);
  });

  it('keeps detailed entries substantive and correctly keyed', () => {
    for (const slug of indexableInterviewSlugs) {
      const entry = interviewMap[slug];
      if (!entry) throw new Error(`missing interview entry for ${slug}`);
      expect(entry.slug).toBe(slug);
      expect(roleMap.has(slug)).toBe(true);
      expect(entry.questions.length).toBeGreaterThanOrEqual(5);
      expect(entry.tips.length).toBeGreaterThanOrEqual(4);
      const types = new Set(entry.questions.map((q) => q.type));
      expect(types.has('technical')).toBe(true);
      expect(types.has('behavioural') || types.has('situational')).toBe(true);
      for (const q of entry.questions) {
        expect(q.answer.split(/\s+/).length).toBeGreaterThanOrEqual(40);
      }
    }
  });

  it('never repeats the same question across detailed role guides', () => {
    const seen = new Map<string, string>();
    for (const slug of indexableInterviewSlugs) {
      for (const { q } of interviewMap[slug]?.questions ?? []) {
        const key = q.trim().toLowerCase();
        expect({ q, duplicateOf: seen.get(key) }).toEqual({ q, duplicateOf: undefined });
        seen.set(key, slug);
      }
    }
  });
});
