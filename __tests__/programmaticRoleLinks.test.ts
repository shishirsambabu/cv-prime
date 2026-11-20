import { readFileSync } from 'fs';
import path from 'path';
import { roleSlugs } from '@/lib/roleData';
import { coverLetterMap } from '@/lib/coverLetterData';

const read = (rel: string): string => readFileSync(path.join(process.cwd(), rel), 'utf8');

describe('cover letter examples cluster', () => {
  it('has a cover letter entry for every role, so the hub can link all role pages', () => {
    const missing = roleSlugs.filter((slug) => !(slug in coverLetterMap));
    expect(missing).toEqual([]);
  });

  it('has no cover letter entries for slugs that are not real roles (would 404)', () => {
    const orphans = Object.keys(coverLetterMap).filter((slug) => !roleSlugs.includes(slug));
    expect(orphans).toEqual([]);
  });

  it.each(Object.entries(coverLetterMap))('%s entry is complete', (_slug, data) => {
    expect(data.dos.length).toBeGreaterThanOrEqual(4);
    expect(data.donts.length).toBeGreaterThanOrEqual(4);
    expect(data.keyPoints.length).toBeGreaterThanOrEqual(3);
    expect(data.sampleOpening.length).toBeGreaterThan(80);
    expect(data.sampleBody.length).toBeGreaterThan(200);
    expect(data.sampleClosing.length).toBeGreaterThan(80);
    expect(data.faqs.length).toBeGreaterThanOrEqual(2);
  });

  it('hub role cards link to the role detail pages, not to signup', () => {
    const hub = read('app/(marketing)/cover-letter-examples/page.tsx');
    expect(hub).toContain('href={`/cover-letter-examples/${role.slug}`}');
    expect(hub).not.toContain('20+');
  });
});

describe('role cross-links only point at pages that exist', () => {
  it('ATS guide pages guard the salary and cover letter links', () => {
    const src = read('app/(marketing)/ats-guide/[role]/page.tsx');
    expect(src).toContain('params.role in salaryDataMap');
    expect(src).toContain('params.role in coverLetterMap');
  });
});
