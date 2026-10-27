// Regression: two entries in blogPosts ('project-manager-resume-india-2026'
// and what is now 'project-manager-resume-guide-india-2026') shared the same
// slug. blogMap is built as `new Map(blogPosts.map(p => [p.slug, p]))`, so a
// duplicate key silently keeps only the later entry — the earlier post's
// card on /blog linked to a URL that actually rendered the *other* post's
// content, and generateStaticParams (app/(marketing)/blog/[slug]/page.tsx)
// emitted the same static path twice. It also produced a real React
// "two children with the same key" warning on /blog, since blogPosts.map
// there keys each card by `post.slug`.
import { blogPosts } from '@/lib/blogData';

describe('blogPosts', () => {
  it('has no duplicate slugs', () => {
    const seen = new Map<string, number>();
    for (const post of blogPosts) {
      seen.set(post.slug, (seen.get(post.slug) ?? 0) + 1);
    }
    const duplicates = [...seen.entries()].filter(([, count]) => count > 1);
    expect(duplicates).toEqual([]);
  });
});
