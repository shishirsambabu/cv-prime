import { roleSlugs } from '@/lib/roleData';
import { hasDetailedInterview, interviewMap } from '@/lib/interviewData';
import { moreInterviewData } from '@/lib/interviewDataMore';
import sitemap from '@/app/sitemap';

const STUB_OPENER = 'What is your greatest professional achievement in the last 2 years?';

describe('interview question data', () => {
  it('serves role-specific questions (not the generic stub) for every detailed role', () => {
    for (const slug of roleSlugs.filter(hasDetailedInterview)) {
      const guide = interviewMap[slug];
      expect(guide).toBeDefined();
      const questions = (guide?.questions ?? []).map((item) => item.q);
      expect(questions).not.toContain(STUB_OPENER);
      expect(questions.length).toBeGreaterThanOrEqual(6);
    }
  });

  it('only adds guides for slugs that exist in roleData', () => {
    for (const slug of Object.keys(moreInterviewData)) {
      expect(roleSlugs).toContain(slug);
      expect(moreInterviewData[slug]?.slug).toBe(slug);
    }
  });

  it('keeps stub-backed interview pages out of the sitemap', () => {
    const urls = new Set(sitemap().map((entry) => entry.url));
    for (const slug of roleSlugs) {
      const url = `https://cv-prime.in/interview-questions/${slug}`;
      expect(urls.has(url)).toBe(hasDetailedInterview(slug));
    }
  });
});
