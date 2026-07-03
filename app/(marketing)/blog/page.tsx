import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Clock, Calendar, BookOpen } from 'lucide-react';
import { blogPosts } from '@/lib/blogData';

export const metadata: Metadata = {
  title: 'Career & Resume Blog India 2026 — ATS Tips, Resume Guides, Career Advice | CV Prime',
  description:
    'Free career and resume guides for Indian job seekers. ATS tips, resume writing guides, cover letter advice, LinkedIn optimisation, and career strategy for India 2026.',
  keywords: [
    'resume blog india',
    'career advice india 2026',
    'ats tips india',
    'resume writing guide india',
    'career blog india',
  ],
  alternates: {
    canonical: 'https://cv-prime.in/blog',
  },
  openGraph: {
    title: 'Career & Resume Blog India 2026 — ATS Tips, Resume Guides, Career Advice | CV Prime',
    description:
      'Free career and resume guides for Indian job seekers. ATS tips, resume writing guides, cover letter advice, LinkedIn optimisation, and career strategy for India 2026.',
    url: 'https://cv-prime.in/blog',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime Career Blog India 2026' }],
  },
};

const categoryColors: Record<string, string> = {
  ATS: 'bg-blue-500/10 text-blue-700 border-blue-400/20',
  'Resume Writing': 'bg-green-50 text-green-700 border-green-200',
  Career: 'bg-purple-50 text-purple-700 border-purple-200',
  Interview: 'bg-amber-500/10 text-amber-300 border-amber-400/20',
};

const filterPillColors: Record<string, string> = {
  All: 'bg-slate-950 text-white',
  ATS: 'bg-blue-600 text-white',
  'Resume Writing': 'bg-green-600 text-white',
  Career: 'bg-purple-600 text-white',
  Interview: 'bg-amber-600 text-white',
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-IN', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function BlogPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      {/* Hero */}
      <section className="bg-slate-950 px-5 pb-16 pt-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <BookOpen className="h-4 w-4" />
            Career &amp; Resume Blog — India 2026
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Career &amp; Resume Blog — India 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Free, practical guides to help Indian job seekers pass ATS screening, write stronger resumes, craft better cover letters, and land more interviews — updated for 2026.
          </p>
        </div>
      </section>

      {/* Category filter pills — static display */}
      <section className="border-b border-white/10 bg-white/[0.03] px-5 py-5">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-2">
            {Object.keys(filterPillColors).map((category) => (
              <span
                key={category}
                className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold ${
                  category === 'All'
                    ? filterPillColors['All']
                    : 'border border-white/10 bg-white/[0.04] text-slate-300'
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog post grid */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex flex-1 flex-col p-6">
                  {/* Category badge + reading time */}
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${
                        categoryColors[post.category] ?? 'bg-white/[0.03] text-slate-300 border-white/10'
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readingTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-display text-xl font-bold leading-snug text-white">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-cyan-300"
                    >
                      {post.heroHeading}
                    </Link>
                  </h2>

                  {/* Description */}
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-400 line-clamp-3">
                    {post.metaDescription}
                  </p>

                  {/* Footer */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(post.publishDate)}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-600 hover:text-cyan-200"
                    >
                      Read article
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Ready to build your resume?
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Put everything in these guides into practice. Build an ATS-optimised resume for free with CV Prime — no credit card required.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Build my CV free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-sm text-slate-400">
            Or{' '}
            <Link href="/ats-checker" className="underline hover:text-white">
              check your current CV&apos;s ATS score
            </Link>{' '}
            — free, no signup needed
          </p>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'Career & Resume Blog India 2026 — CV Prime',
              description:
                'Free career and resume guides for Indian job seekers. ATS tips, resume writing guides, cover letter advice, LinkedIn optimisation, and career strategy for India 2026.',
              url: 'https://cv-prime.in/blog',
              publisher: {
                '@type': 'Organization',
                name: 'CV Prime',
                url: 'https://cv-prime.in',
                logo: { '@type': 'ImageObject', url: 'https://cv-prime.in/logo.png' },
              },
              hasPart: blogPosts.map((post) => ({
                '@type': 'Article',
                headline: post.heroHeading,
                url: `https://cv-prime.in/blog/${post.slug}`,
                datePublished: post.publishDate,
                dateModified: post.lastUpdated,
                description: post.metaDescription,
                author: { '@type': 'Organization', name: 'CV Prime' },
              })),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://cv-prime.in/blog' },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
