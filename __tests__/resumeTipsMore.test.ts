import { resumeTipsMore, resumeTipMoreMap } from '@/lib/resumeTipsMore';

describe('resumeTipsMore data', () => {
  it('has unique slugs and a map entry for each', () => {
    const slugs = resumeTipsMore.map((t) => t.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    slugs.forEach((s) => expect(resumeTipMoreMap[s]).toBeDefined());
  });

  it.each(resumeTipsMore.map((t) => [t.slug, t] as const))('%s has complete SEO content', (_slug, t) => {
    expect(t.metaTitle.length).toBeLessThanOrEqual(70);
    expect(t.metaDescription.length).toBeGreaterThan(80);
    expect(t.metaDescription.length).toBeLessThanOrEqual(175);
    expect(t.faqs.length).toBeGreaterThanOrEqual(4);
    expect(t.sections.length).toBeGreaterThanOrEqual(3);
    expect(t.related.length).toBeGreaterThanOrEqual(3);
  });
});
