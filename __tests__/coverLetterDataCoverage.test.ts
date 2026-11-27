import { roleSlugs } from '@/lib/roleData';
import { coverLetterMap } from '@/lib/coverLetterData';
import { coverLetterDataMore } from '@/lib/coverLetterDataMore';

describe('cover letter programmatic pages', () => {
  it('has a cover letter entry for every role in roleData', () => {
    const missing = roleSlugs.filter((slug) => !(slug in coverLetterMap));
    expect(missing).toEqual([]);
  });

  it('only contains slugs that resolve to a role (no 404-producing entries)', () => {
    const known = new Set(roleSlugs);
    expect(Object.keys(coverLetterMap).filter((slug) => !known.has(slug))).toEqual([]);
  });

  it('merges the supplementary entries into the exported map', () => {
    for (const slug of Object.keys(coverLetterDataMore)) {
      expect(coverLetterMap[slug]).toBe(coverLetterDataMore[slug]);
    }
  });

  it.each(Object.entries(coverLetterMap))('%s has complete, unique content', (_slug, data) => {
    expect(data.dos.length).toBeGreaterThanOrEqual(4);
    expect(data.donts.length).toBeGreaterThanOrEqual(4);
    expect(data.keyPoints.length).toBeGreaterThanOrEqual(3);
    expect(data.sampleOpening.length).toBeGreaterThan(80);
    expect(data.sampleBody.length).toBeGreaterThan(200);
    expect(data.sampleClosing.length).toBeGreaterThan(60);
    expect(data.faqs.length).toBeGreaterThanOrEqual(2);
    for (const faq of data.faqs) {
      expect(faq.q.trim().endsWith('?')).toBe(true);
      expect(faq.a.length).toBeGreaterThan(60);
    }
  });

  it('does not reuse sample openings across roles', () => {
    const openings = Object.values(coverLetterMap).map((d) => d.sampleOpening);
    expect(new Set(openings).size).toBe(openings.length);
  });
});
