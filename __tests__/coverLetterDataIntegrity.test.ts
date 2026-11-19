import { roleSlugs } from '@/lib/roleData';
import { coverLetterMap } from '@/lib/coverLetterData';
import { coverLetterDataMore } from '@/lib/coverLetterDataMore';

describe('cover letter programmatic data', () => {
  it('has a cover letter guide for every role so /cover-letter-examples/[role] never 404s from cross-links', () => {
    const missing = roleSlugs.filter((slug) => !(slug in coverLetterMap));
    expect(missing).toEqual([]);
  });

  it('only defines entries for real roles (no orphan data that would never render)', () => {
    const orphans = Object.keys(coverLetterMap).filter((slug) => !roleSlugs.includes(slug));
    expect(orphans).toEqual([]);
  });

  it.each(Object.entries(coverLetterDataMore))('%s entry is complete and non-thin', (_slug, data) => {
    expect(data.dos.length).toBeGreaterThanOrEqual(5);
    expect(data.donts.length).toBeGreaterThanOrEqual(5);
    expect(data.keyPoints.length).toBeGreaterThanOrEqual(4);
    expect(data.faqs.length).toBeGreaterThanOrEqual(2);
    expect(data.sampleOpening.length).toBeGreaterThan(120);
    expect(data.sampleBody.length).toBeGreaterThan(400);
    expect(data.sampleClosing.length).toBeGreaterThan(80);
  });

  it('sample openings are unique across roles (no duplicate content)', () => {
    const openings = Object.values(coverLetterMap).map((d) => d.sampleOpening);
    expect(new Set(openings).size).toBe(openings.length);
  });
});
