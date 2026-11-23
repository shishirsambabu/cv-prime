import { coverLetterMap } from '@/lib/coverLetterData';
import { coverLetterDataMore } from '@/lib/coverLetterDataMore';
import { roleSlugs } from '@/lib/roleData';

describe('cover letter data', () => {
  it('has a cover letter guide for every role in roleData', () => {
    const missing = roleSlugs.filter((slug) => !(slug in coverLetterMap));
    expect(missing).toEqual([]);
  });

  it('only contains slugs that exist in roleData (no orphan pages)', () => {
    const orphans = Object.keys(coverLetterMap).filter((slug) => !roleSlugs.includes(slug));
    expect(orphans).toEqual([]);
  });

  it('merges every supplemental entry into the exported map', () => {
    for (const slug of Object.keys(coverLetterDataMore)) {
      expect(coverLetterMap[slug]).toBe(coverLetterDataMore[slug]);
    }
  });

  it.each(Object.entries(coverLetterMap))('%s has complete, non-empty content', (_slug, data) => {
    expect(data.dos.length).toBeGreaterThanOrEqual(3);
    expect(data.donts.length).toBeGreaterThanOrEqual(3);
    expect(data.keyPoints.length).toBeGreaterThanOrEqual(3);
    expect(data.sampleOpening.trim().length).toBeGreaterThan(50);
    expect(data.sampleBody.trim().length).toBeGreaterThan(150);
    expect(data.sampleClosing.trim().length).toBeGreaterThan(50);
    expect(data.faqs.length).toBeGreaterThanOrEqual(2);
    for (const faq of data.faqs) {
      expect(faq.q.trim()).not.toBe('');
      expect(faq.a.trim().length).toBeGreaterThan(40);
    }
  });

  it('does not reuse sample openings across roles', () => {
    const openings = Object.values(coverLetterMap).map((d) => d.sampleOpening);
    expect(new Set(openings).size).toBe(openings.length);
  });
});
