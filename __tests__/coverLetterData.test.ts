import { coverLetterMap } from '@/lib/coverLetterData';
import { roleSlugs } from '@/lib/roleData';

describe('coverLetterMap', () => {
  it('covers every role in roleData so no role lacks a cover letter page', () => {
    const missing = roleSlugs.filter((slug) => !(slug in coverLetterMap));
    expect(missing).toEqual([]);
  });

  it('only contains slugs that exist in roleData', () => {
    const unknown = Object.keys(coverLetterMap).filter((slug) => !roleSlugs.includes(slug));
    expect(unknown).toEqual([]);
  });

  it.each(Object.entries(coverLetterMap))('%s has complete, non-empty content', (_slug, data) => {
    expect(data.dos.length).toBeGreaterThanOrEqual(4);
    expect(data.donts.length).toBeGreaterThanOrEqual(4);
    expect(data.keyPoints.length).toBeGreaterThanOrEqual(3);
    expect(data.faqs.length).toBeGreaterThanOrEqual(2);
    for (const text of [data.sampleOpening, data.sampleBody, data.sampleClosing]) {
      expect(text.trim().length).toBeGreaterThan(80);
    }
    for (const faq of data.faqs) {
      expect(faq.q.trim().endsWith('?')).toBe(true);
      expect(faq.a.trim().length).toBeGreaterThan(80);
    }
  });

  it('has unique sample openings across roles', () => {
    const openings = Object.values(coverLetterMap).map((d) => d.sampleOpening);
    expect(new Set(openings).size).toBe(openings.length);
  });
});
