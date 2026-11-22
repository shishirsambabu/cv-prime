import { readFileSync } from 'fs';
import { join } from 'path';
import { atsSystems, atsSystemsMap, atsSystemSlugs } from '@/lib/atsSystemData';
import { atsSystemsMore } from '@/lib/atsSystemDataMore';

describe('ATS system guides', () => {
  it('merges the additional systems into the exported list', () => {
    for (const system of atsSystemsMore) {
      expect(atsSystemsMap[system.slug]).toBe(system);
      expect(atsSystemSlugs).toContain(system.slug);
    }
    expect(atsSystems.length).toBe(atsSystemSlugs.length);
  });

  it('has unique, URL-safe slugs', () => {
    expect(new Set(atsSystemSlugs).size).toBe(atsSystemSlugs.length);
    for (const slug of atsSystemSlugs) {
      expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  it('gives every system a non-thin guide with unique copy', () => {
    const overviews = new Set<string>();
    const faqQuestions = new Set<string>();
    for (const system of atsSystems) {
      expect(system.overview.length).toBeGreaterThan(200);
      expect(system.parsingNotes.length).toBeGreaterThanOrEqual(4);
      expect(system.formattingRules.length).toBeGreaterThanOrEqual(4);
      expect(system.commonMistakes.length).toBeGreaterThanOrEqual(4);
      expect(system.faqs.length).toBeGreaterThanOrEqual(3);
      expect(overviews.has(system.overview)).toBe(false);
      overviews.add(system.overview);
      for (const faq of system.faqs) {
        expect(faqQuestions.has(faq.q)).toBe(false);
        faqQuestions.add(faq.q);
      }
    }
  });

  it('submits every system page via the sitemap', () => {
    // sitemap.ts maps atsSystemSlugs, so new systems are included automatically;
    // guard against that loop being replaced by a hard-coded list.
    const sitemap = readFileSync(join(process.cwd(), 'app/sitemap.ts'), 'utf8');
    expect(sitemap).toMatch(/atsSystemSlugs\.map/);
  });
});
