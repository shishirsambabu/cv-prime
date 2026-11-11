import { roleSlugs } from '@/lib/roleData';
import { coverLetterMap } from '@/lib/coverLetterData';

describe('coverLetterMap coverage', () => {
  it('has a cover letter guide for every role in roleData (no orphaned /cover-letter-examples links)', () => {
    const missing = roleSlugs.filter((slug) => !(slug in coverLetterMap));
    expect(missing).toEqual([]);
  });

  it('contains no entries for roles that do not exist (would 404 via roleMap lookup)', () => {
    const unknown = Object.keys(coverLetterMap).filter((slug) => !roleSlugs.includes(slug));
    expect(unknown).toEqual([]);
  });

  it.each(Object.entries(coverLetterMap))('%s has complete, non-empty content', (_slug, data) => {
    expect(data.dos.length).toBeGreaterThanOrEqual(4);
    expect(data.donts.length).toBeGreaterThanOrEqual(4);
    expect(data.keyPoints.length).toBeGreaterThanOrEqual(3);
    expect(data.sampleOpening.length).toBeGreaterThan(80);
    expect(data.sampleBody.length).toBeGreaterThan(200);
    expect(data.sampleClosing.length).toBeGreaterThan(60);
    expect(data.faqs.length).toBeGreaterThanOrEqual(2);
    data.faqs.forEach((faq) => {
      expect(faq.q.trim()).not.toBe('');
      expect(faq.a.length).toBeGreaterThan(80);
    });
  });
});
