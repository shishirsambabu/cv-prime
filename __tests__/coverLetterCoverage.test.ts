import { roleSlugs } from '@/lib/roleData';
import { coverLetterMap } from '@/lib/coverLetterData';

describe('cover letter programmatic pages', () => {
  it('has cover letter guidance for every role in roleData', () => {
    const missing = roleSlugs.filter((slug) => !(slug in coverLetterMap));
    expect(missing).toEqual([]);
  });

  it('gives every entry enough unique content to render a full page', () => {
    const openings = new Set<string>();
    for (const [slug, data] of Object.entries(coverLetterMap)) {
      expect({ slug, ok: data.dos.length >= 4 && data.donts.length >= 4 && data.faqs.length >= 2 }).toEqual({ slug, ok: true });
      expect(data.sampleOpening.length).toBeGreaterThan(80);
      openings.add(data.sampleOpening);
    }
    expect(openings.size).toBe(Object.keys(coverLetterMap).length);
  });
});
