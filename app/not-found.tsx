import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { MarketingHeader } from '@/components/marketing/MarketingHeader';
import { MarketingFooter } from '@/components/marketing/MarketingFooter';
import { notFoundLinks } from '@/lib/notFoundLinks';

export const metadata: Metadata = {
  title: 'Page not found',
  description:
    'This page does not exist. Jump to the CV Prime resume builder, ATS checker, resume examples, or templates instead.',
  robots: { index: false, follow: true },
};

/**
 * Site-wide 404. Without this file Next.js serves its bare default
 * "404 | This page could not be found" screen with no navigation, so every
 * mistyped, outdated, or externally mis-linked URL was a dead end. This keeps
 * the visitor (and the crawler following the link) inside the site: the
 * shared header/footer plus direct links to the highest-intent hubs.
 * The response status stays 404, so nothing here is indexed.
 */
export default function NotFound(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#04060c] text-slate-100">
      <MarketingHeader />
      <main className="mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-28">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">404</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            We couldn&apos;t find that page
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-400">
            The link may be outdated or mistyped. Your CVs and account are unaffected — pick up
            from one of the pages below.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/signup?next=/dashboard"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong"
            >
              Build my resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-slate-200 hover:bg-white/5"
            >
              Go to homepage
            </Link>
          </div>
        </div>

        <nav aria-label="Popular pages" className="mt-16">
          <h2 className="text-center font-display text-xl font-semibold text-white">Popular pages</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {notFoundLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-brand/50 hover:bg-white/[0.06]"
                >
                  <span className="block text-sm font-semibold text-white">{link.title}</span>
                  <span className="mt-1.5 block text-sm text-slate-400">{link.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
      <MarketingFooter />
    </div>
  );
}
