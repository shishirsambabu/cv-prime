import fs from 'node:fs';
import path from 'node:path';
import { roleSlugs } from '@/lib/roleData';
import { coverLetterMap } from '@/lib/coverLetterData';

const pageSource = (relative: string): string =>
  fs.readFileSync(path.join(process.cwd(), 'app', '(marketing)', relative), 'utf8');

describe('programmatic role pages', () => {
  it('has a cover letter guide for every role', () => {
    const missing = roleSlugs.filter((slug) => !(slug in coverLetterMap));
    expect(missing).toEqual([]);
  });

  it('gives every cover letter guide substantive, unique content', () => {
    const openings = new Set<string>();
    for (const slug of roleSlugs) {
      const data = coverLetterMap[slug];
      expect(data.dos.length).toBeGreaterThanOrEqual(4);
      expect(data.donts.length).toBeGreaterThanOrEqual(4);
      expect(data.faqs.length).toBeGreaterThanOrEqual(2);
      expect(data.sampleBody.length).toBeGreaterThan(200);
      expect(openings.has(data.sampleOpening)).toBe(false);
      openings.add(data.sampleOpening);
    }
  });

  it('only links ATS guides to salary pages that exist', () => {
    // /salary/[role] covers a subset of roles; an unguarded link 404s for the rest.
    const source = pageSource('ats-guide/[role]/page.tsx');
    expect(source).toMatch(/params\.role in salaryDataMap\s*\n?\s*\?\s*\[\{ href: `\/salary\//);
  });

  it('links the cover letter hub to the role guides rather than only to signup', () => {
    const source = pageSource('cover-letter-examples/page.tsx');
    expect(source).toContain('href={`/cover-letter-examples/${role.slug}`}');
  });
});
