import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';
import { AiToolFooterCta } from '@/components/tools/ai/AiToolFooterCta';
import { relatedAiTools } from '@/lib/aiToolsRegistry';

const baseUrl = 'https://cv-prime.in';

export type AiToolFaq = { q: string; a: string };

/**
 * Shared dark hero + container for the gated BYOK AI tools. Page files
 * supply metadata and the interactive client component as children.
 *
 * `path` + `appName` + `faqs` drive WebApplication/FAQPage/BreadcrumbList
 * JSON-LD so these tool pages are eligible for rich results and are
 * structured for AI answer engines to extract and cite directly. Per-page
 * `faqs` are deliberate: boilerplate FAQs repeated across every tool page
 * would be duplicate content rather than a ranking asset.
 *
 * `slug` is optional and only drives the related-tools link block, which
 * spreads internal link equity across the tool cluster instead of leaving
 * each tool page a dead end.
 */
export function AiToolLayout({
  eyebrow,
  title,
  highlight,
  subtitle,
  path,
  appName,
  faqs,
  slug,
  children,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
  path: string;
  appName: string;
  faqs?: AiToolFaq[];
  slug?: string;
  children: ReactNode;
}): JSX.Element {
  const url = `${baseUrl}${path}`;
  const related = slug ? relatedAiTools(slug) : [];

  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `CV Prime ${appName}`,
    url,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: subtitle,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Free Tools', item: `${baseUrl}/tools` },
      { '@type': 'ListItem', position: 3, name: appName, item: url },
    ],
  };
  const faqSchema = faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  return (
    <main className="text-slate-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <section className="render-deferred grain relative overflow-hidden bg-[#05070e]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-8%,rgba(139,92,246,0.22),transparent_60%),radial-gradient(46%_40%_at_85%_8%,rgba(34,211,238,0.18),transparent_60%)]" />
        <div className="orb pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 py-16 text-center sm:px-6 lg:py-20">
          <span className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            {eyebrow}
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-glow sm:text-5xl">
            {title} <span className="text-gradient-warm">{highlight}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">{subtitle}</p>
          <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-400">
            Runs on your own AI key · free account · a few paise per run
          </p>
        </div>
      </section>

      <section className="relative pb-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">{children}</div>
      </section>

      {faqs?.length ? (
        <section className="border-t border-white/10 bg-white/[0.02] px-5 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-2xl font-bold text-white sm:text-3xl">
              {appName} — FAQ
            </h2>
            <div className="mt-8 space-y-5">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="font-display text-lg font-bold text-white">{faq.q}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="border-t border-white/10 bg-white/[0.03] px-5 py-14 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display text-lg font-bold text-white">Related free AI tools</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300"
                >
                  <p className="font-display font-bold text-white group-hover:text-cyan-300">
                    {item.shortLabel} →
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-white/10 bg-[#05070e]">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 px-5 py-12 text-center sm:px-6">
          <p className="text-sm font-semibold text-white">Want this built into a full CV you can export?</p>
          <AiToolFooterCta />
        </div>
      </section>
    </main>
  );
}
