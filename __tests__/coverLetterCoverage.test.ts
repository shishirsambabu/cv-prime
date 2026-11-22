import { roleSlugs } from '@/lib/roleData';
import { coverLetterMap } from '@/lib/coverLetterData';
import { coverLetterDataMore } from '@/lib/coverLetterDataMore';

describe('cover letter data coverage', () => {
  it('has cover letter guidance for every role in roleData', () => {
    const missing = roleSlugs.filter((slug) => !(slug in coverLetterMap));
    expect(missing).toEqual([]);
  });

  it('only defines entries for roles that exist (no orphan pages)', () => {
    const known = new Set(roleSlugs);
    expect(Object.keys(coverLetterDataMore).filter((slug) => !known.has(slug))).toEqual([]);
  });

  it.each(Object.entries(coverLetterMap))('%s entry is complete', (_slug, data) => {
    expect(data.dos.length).toBeGreaterThanOrEqual(3);
    expect(data.donts.length).toBeGreaterThanOrEqual(3);
    expect(data.keyPoints.length).toBeGreaterThanOrEqual(3);
    expect(data.sampleOpening.length).toBeGreaterThan(50);
    expect(data.sampleBody.length).toBeGreaterThan(100);
    expect(data.sampleClosing.length).toBeGreaterThan(50);
    expect(data.faqs.length).toBeGreaterThanOrEqual(2);
  });

  it('sample openings are unique across roles', () => {
    const openings = Object.values(coverLetterMap).map((d) => d.sampleOpening);
    expect(new Set(openings).size).toBe(openings.length);
  });
});
