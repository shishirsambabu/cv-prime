import sitemap from '@/app/sitemap';
import { roleSlugs } from '@/lib/roleData';
import { interviewMap, hasDetailedInterviewData } from '@/lib/interviewData';
import { hasDetailedLinkedinData } from '@/lib/linkedinData';
import { interviewDataMore } from '@/lib/interviewDataMore';

describe('programmatic thin-content indexation', () => {
  const urls = sitemap().map((entry) => entry.url);

  it('lists only role-specific interview guides in the sitemap', () => {
    for (const slug of roleSlugs) {
      const listed = urls.includes(`https://cv-prime.in/interview-questions/${slug}`);
      expect(listed).toBe(hasDetailedInterviewData(slug));
    }
  });

  it('lists only role-specific LinkedIn headline pages in the sitemap', () => {
    for (const slug of roleSlugs) {
      const listed = urls.includes(`https://cv-prime.in/linkedin-headline/${slug}`);
      expect(listed).toBe(hasDetailedLinkedinData(slug));
    }
  });

  it('serves the new role-specific interview content instead of the stub', () => {
    for (const [slug, data] of Object.entries(interviewDataMore)) {
      expect(roleSlugs).toContain(slug);
      expect(hasDetailedInterviewData(slug)).toBe(true);
      expect(interviewMap[slug]).toBe(data);
      expect(data.questions.length).toBeGreaterThanOrEqual(6);
      expect(data.tips.length).toBeGreaterThanOrEqual(5);
    }
  });
});
