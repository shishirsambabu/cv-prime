import { roleSlugs } from '@/lib/roleData';
import { coverLetterMap } from '@/lib/coverLetterData';
import sitemap from '@/app/sitemap';

describe('cover letter programmatic SEO cluster', () => {
  it('has cover letter data for every role so no role page is missing from the cluster', () => {
    const missing = roleSlugs.filter((slug) => !(slug in coverLetterMap));
    expect(missing).toEqual([]);
  });

  it('has no cover letter entries for unknown roles (would 404 via notFound)', () => {
    const unknown = Object.keys(coverLetterMap).filter((slug) => !roleSlugs.includes(slug));
    expect(unknown).toEqual([]);
  });

  it('gives every entry substantive, page-unique content', () => {
    const openings = new Set<string>();
    for (const [slug, data] of Object.entries(coverLetterMap)) {
      expect({ slug, dos: data.dos.length >= 4 }).toEqual({ slug, dos: true });
      expect({ slug, donts: data.donts.length >= 4 }).toEqual({ slug, donts: true });
      expect({ slug, faqs: data.faqs.length >= 2 }).toEqual({ slug, faqs: true });
      expect(data.sampleBody.length).toBeGreaterThan(200);
      openings.add(data.sampleOpening);
    }
    expect(openings.size).toBe(Object.keys(coverLetterMap).length);
  });

  it('lists every cover letter role page in the sitemap', () => {
    const urls = new Set(sitemap().map((entry) => entry.url));
    for (const slug of Object.keys(coverLetterMap)) {
      expect(urls.has(`https://cv-prime.in/cover-letter-examples/${slug}`)).toBe(true);
    }
  });
});
