import { roleSlugs } from '@/lib/roleData';
import { interviewMap, hasDetailedInterviewData, detailedInterviewSlugs } from '@/lib/interviewData';
import { interviewDataMore } from '@/lib/interviewDataMore';
import sitemap from '@/app/sitemap';

describe('interview question content integrity', () => {
  it('every role resolves to interview content', () => {
    for (const slug of roleSlugs) {
      expect(interviewMap[slug]?.questions.length).toBeGreaterThanOrEqual(6);
    }
  });

  it('every interviewDataMore entry is a real role with matching slug', () => {
    for (const [key, entry] of Object.entries(interviewDataMore)) {
      expect(roleSlugs).toContain(key);
      expect(entry.slug).toBe(key);
      expect(entry.tips.length).toBeGreaterThanOrEqual(5);
    }
  });

  it('detailed guides do not share questions with each other (no duplicate content)', () => {
    const seen = new Map<string, string>();
    for (const slug of detailedInterviewSlugs) {
      for (const { q } of interviewMap[slug].questions) {
        expect(seen.get(q)).toBeUndefined();
        seen.set(q, slug);
      }
    }
  });

  it('sitemap lists only detailed interview guides', () => {
    const urls = sitemap().map((e) => e.url);
    for (const slug of roleSlugs) {
      const listed = urls.includes(`https://cv-prime.in/interview-questions/${slug}`);
      expect(listed).toBe(hasDetailedInterviewData(slug));
    }
    expect(detailedInterviewSlugs.size).toBeGreaterThanOrEqual(21);
  });
});
