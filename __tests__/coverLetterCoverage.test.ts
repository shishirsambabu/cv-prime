import { roleSlugs, roles, getRelatedRoles } from '@/lib/roleData';
import { coverLetterMap } from '@/lib/coverLetterData';

describe('cover letter example coverage', () => {
  it('has cover letter data for every role in roleData', () => {
    const missing = roleSlugs.filter((slug) => !(slug in coverLetterMap));
    expect(missing).toEqual([]);
  });

  it('has no cover letter data for slugs that are not real roles', () => {
    const unknown = Object.keys(coverLetterMap).filter((slug) => !roleSlugs.includes(slug));
    expect(unknown).toEqual([]);
  });

  it.each(Object.entries(coverLetterMap))('%s has complete, non-empty content', (_slug, data) => {
    expect(data.dos.length).toBeGreaterThanOrEqual(4);
    expect(data.donts.length).toBeGreaterThanOrEqual(4);
    expect(data.keyPoints.length).toBeGreaterThanOrEqual(4);
    expect(data.faqs.length).toBeGreaterThanOrEqual(2);
    for (const text of [data.sampleOpening, data.sampleBody, data.sampleClosing]) {
      expect(text.trim().length).toBeGreaterThan(80);
    }
    for (const faq of data.faqs) {
      expect(faq.q.trim().endsWith('?')).toBe(true);
      expect(faq.a.trim().length).toBeGreaterThan(120);
    }
    // React keys on the page are the item text, so duplicates would collide.
    expect(new Set(data.dos).size).toBe(data.dos.length);
    expect(new Set(data.donts).size).toBe(data.donts.length);
  });

  it('does not reuse the same sample paragraphs across roles', () => {
    const openings = Object.values(coverLetterMap).map((data) => data.sampleOpening);
    expect(new Set(openings).size).toBe(openings.length);
  });
});

describe('getRelatedRoles', () => {
  it('never returns the current role and respects the limit', () => {
    for (const slug of roleSlugs) {
      const related = getRelatedRoles(slug, 4);
      expect(related).toHaveLength(4);
      expect(related.map((r) => r.slug)).not.toContain(slug);
    }
  });

  it('puts same-industry roles first', () => {
    const related = getRelatedRoles('react-developer', 4);
    expect(related.every((r) => r.industry === 'Technology')).toBe(true);
  });

  it('spreads internal links so every role is linked from at least one other role', () => {
    const linked = new Set(roleSlugs.flatMap((slug) => getRelatedRoles(slug, 4).map((r) => r.slug)));
    expect(roles.filter((r) => !linked.has(r.slug)).map((r) => r.slug)).toEqual([]);
  });

  it('applies the eligibility filter', () => {
    const related = getRelatedRoles('software-engineer', 4, (r) => r.slug === 'pharmacist');
    expect(related.map((r) => r.slug)).toEqual(['pharmacist']);
  });
});
