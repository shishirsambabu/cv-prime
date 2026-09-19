import { blogMap, blogPosts } from '@/lib/blogData';

/**
 * Two articles once shared the slug `project-manager-resume-india-2026`: a
 * later commit re-added the topic without noticing the original. Because
 * `blogMap` is built with `new Map(blogPosts.map(...))`, the duplicate silently
 * won, so /blog rendered two cards with the same React key and the original
 * article's card opened the other post's content. A duplicate slug also means
 * two identical entries in the sitemap and a `generateStaticParams` that builds
 * the same route twice.
 */
describe('blog content integrity', () => {
  it('has no duplicate slugs', () => {
    const seen = new Map<string, number>();
    for (const post of blogPosts) {
      seen.set(post.slug, (seen.get(post.slug) ?? 0) + 1);
    }

    const duplicates = [...seen.entries()].filter(([, count]) => count > 1).map(([slug]) => slug);
    expect(duplicates).toEqual([]);
  });

  it('exposes every post through blogMap', () => {
    expect(blogMap.size).toBe(blogPosts.length);
    for (const post of blogPosts) {
      expect(blogMap.get(post.slug)).toBe(post);
    }
  });

  it('only points relatedSlugs at posts that exist', () => {
    const dangling = blogPosts.flatMap((post) =>
      post.relatedSlugs
        .filter((slug) => !blogMap.has(slug))
        .map((slug) => `${post.slug} -> ${slug}`),
    );

    expect(dangling).toEqual([]);
  });

  it('never lists a post as its own related reading', () => {
    const selfReferences = blogPosts
      .filter((post) => post.relatedSlugs.includes(post.slug))
      .map((post) => post.slug);

    expect(selfReferences).toEqual([]);
  });
});
