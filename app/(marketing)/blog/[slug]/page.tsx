import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Clock, Calendar, BookOpen } from 'lucide-react';
import { blogPosts, blogMap, type BlogPost } from '@/lib/blogData';
import { notFound } from 'next/navigation';

export function generateStaticParams(): Array<{ slug: string }> {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogMap.get(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `https://cv-prime.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://cv-prime.in/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishDate,
      modifiedTime: post.lastUpdated,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: post.heroHeading }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: ['/og-image.png'],
    },
  };
}

const categoryColors: Record<string, string> = {
  ATS: 'bg-blue-50 text-blue-700 border-blue-200',
  'Resume Writing': 'bg-green-50 text-green-700 border-green-200',
  Career: 'bg-purple-50 text-purple-700 border-purple-200',
  Interview: 'bg-amber-50 text-amber-700 border-amber-200',
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-IN', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function buildJsonLd(post: BlogPost) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.heroHeading,
      description: post.metaDescription,
      url: `https://cv-prime.in/blog/${post.slug}`,
      datePublished: post.publishDate,
      dateModified: post.lastUpdated,
      author: {
        '@type': 'Organization',
        name: 'CV Prime',
        url: 'https://cv-prime.in',
      },
      publisher: {
        '@type': 'Organization',
        name: 'CV Prime',
        url: 'https://cv-prime.in',
        logo: { '@type': 'ImageObject', url: 'https://cv-prime.in/logo.png' },
      },
      keywords: post.keywords.join(', '),
      inLanguage: 'en-IN',
      isAccessibleForFree: true,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://cv-prime.in/blog' },
        {
          '@type': 'ListItem',
          position: 3,
          name: post.heroHeading,
          item: `https://cv-prime.in/blog/${post.slug}`,
        },
      ],
    },
  ];
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<JSX.Element> {
  const { slug } = await params;
  const found = blogMap.get(slug);
  if (!found) notFound();

  // After notFound(), TypeScript still thinks found may be undefined.
  // We assert the type here since notFound() throws and execution never continues.
  const post = found as BlogPost;

  const relatedPosts = post.relatedSlugs
    .map((s) => blogMap.get(s))
    .filter((p): p is BlogPost => p !== undefined);

  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="bg-slate-950 px-5 pb-16 pt-16 text-white">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav
            className="mb-8 flex items-center gap-2 text-sm text-slate-400"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            <span>/</span>
            <span className="line-clamp-1 text-slate-300">{post.heroHeading}</span>
          </nav>

          {/* Category badge */}
          <div className="mb-4">
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${
                categoryColors[post.category] ?? 'bg-slate-800 text-slate-300 border-slate-700'
              }`}
            >
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {post.heroHeading}
          </h1>

          {/* Subheading */}
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{post.heroSubheading}</p>

          {/* Meta row */}
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readingTime}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              Published {formatDate(post.publishDate)}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" />
              Updated {formatDate(post.lastUpdated)}
            </span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-12">
            {post.sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="font-display text-2xl font-bold text-slate-950 sm:text-3xl">
                  {section.heading}
                </h2>
                <p className="mt-4 leading-8 text-slate-600">{section.body}</p>

                {section.items && section.items.length > 0 && (
                  <ul className="mt-5 space-y-3">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                        <span className="leading-7 text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.tip && (
                  <div className="mt-6 rounded-2xl border border-cyan-200 bg-cyan-50 px-6 py-4">
                    <p className="text-sm leading-7 text-cyan-800">
                      <span className="font-bold">💡 Pro tip:</span> {section.tip}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-slate-950 sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-8 space-y-5">
            {post.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold text-slate-950">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA card */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[2rem] border-2 border-cyan-200 bg-cyan-50 px-8 py-10">
            <h2 className="font-display text-2xl font-bold text-slate-950 sm:text-3xl">
              {post.ctaHeading}
            </h2>
            <p className="mt-4 leading-7 text-slate-600">{post.ctaBody}</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-bold text-brand-foreground hover:bg-brand-strong"
              >
                Build my CV free
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/ats-checker"
                className="inline-flex items-center gap-2 rounded-full border-2 border-slate-950 bg-white px-8 py-3.5 text-sm font-bold text-slate-950 hover:bg-slate-50"
              >
                Try free ATS check
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-slate-100 bg-slate-50 px-5 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-2xl font-bold text-slate-950">Related articles</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <article
                  key={related.slug}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                        categoryColors[related.category] ??
                        'bg-slate-50 text-slate-600 border-slate-200'
                      }`}
                    >
                      {related.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="h-3 w-3" />
                      {related.readingTime}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold leading-snug text-slate-950">
                    <Link href={`/blog/${related.slug}`} className="hover:text-cyan-700">
                      {related.heroHeading}
                    </Link>
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-5 text-slate-500 line-clamp-2">
                    {related.metaDescription}
                  </p>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cyan-600 hover:text-cyan-800"
                  >
                    Read article
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to blog */}
      <div className="border-t border-slate-100 px-5 py-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-950"
          >
            ← Back to all articles
          </Link>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(post)) }}
      />
    </main>
  );
}
