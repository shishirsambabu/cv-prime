import { roleSlugs } from '@/lib/roleData';
import { coverLetterMap } from '@/lib/coverLetterData';
import { coverLetterDataMore } from '@/lib/coverLetterDataMore';

describe('cover letter programmatic pages', () => {
  it('has a cover letter guide for every role so /cover-letter-examples/[role] never 404s from internal links', () => {
    const missing = roleSlugs.filter((slug) => !(slug in coverLetterMap));
    expect(missing).toEqual([]);
  });

  it('only defines guides for real roles (no orphan data that would never render)', () => {
    const orphans = Object.keys(coverLetterMap).filter((slug) => !roleSlugs.includes(slug));
    expect(orphans).toEqual([]);
  });

  it.each(Object.entries(coverLetterDataMore))('%s guide is complete and non-thin', (_slug, data) => {
    expect(data.dos.length).toBeGreaterThanOrEqual(5);
    expect(data.donts.length).toBeGreaterThanOrEqual(5);
    expect(data.keyPoints.length).toBeGreaterThanOrEqual(4);
    expect(data.faqs.length).toBeGreaterThanOrEqual(2);
    expect(data.sampleOpening.length).toBeGreaterThan(80);
    expect(data.sampleBody.length).toBeGreaterThan(300);
    expect(data.sampleClosing.length).toBeGreaterThan(60);
  });

  it('sample letters across roles are unique (no duplicated templated content)', () => {
    const bodies = Object.values(coverLetterMap).map((d) => d.sampleBody);
    expect(new Set(bodies).size).toBe(bodies.length);
  });
});
