import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { AiToolFooterCta } from '@/components/tools/ai/AiToolFooterCta';
import { aiToolsRegistryMap, relatedAiTools } from '@/lib/aiToolsRegistry';

const baseUrl = 'https://cv-prime.in';

/**
 * Shared dark hero + container for the gated BYOK AI tools. Page files
 * supply metadata and the interactive client component as children. The
 * `slug` prop looks the tool up in the shared registry to render matching
 * JSON-LD, an FAQ block, and related-tool links without per-page content.
 */
export function AiToolLayout({
  slug,
  eyebrow,
  title,
  highlight,
  subtitle,
  children,
}: {
  slug: string;
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
  children: ReactNode;
}): JSX.Element {
  const tool = aiToolsRegistryMap[slug];
  const toolName = tool?.name ?? `${title} ${highlight}`;
  const url = tool?.href ? `${baseUrl}${tool.href}` : baseUrl;
  const faqs = [
    {
      q: `Is the ${toolName} free to use?`,
      a: `Yes. ${toolName} is free — it runs on your own AI key (via OpenRouter), so you only pay the AI provider a few paise per run. CV Prime does not charge for this tool.`,
    },
    {
      q: 'Do I need an account to use this tool?',
      a: 'Yes, a free CV Prime account is required so we can securely store your encrypted AI key and apply fair-use rate limits. No credit card is needed.',
    },
    {
      q: 'Which AI model powers this tool, and is my data safe?',
      a: 'By default it uses openai/gpt-4o-mini via OpenRouter for a good balance of quality and cost, though any OpenRouter-compatible key works. Your resume and job description are sent only to the AI provider to generate this result — CV Prime does not sell or share your data.',
    },
  ];
  const related = relatedAiTools(slug);

  return (
    <main className="text-slate-100">
      <section className="render-deferred grain relative overflow-hidden bg-[#05070e]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-8%,rgba(139,92,246,0.22),transparent_60%),radial-gradient(46%_40%_at_85%_8%,rgba(34,211,238,0.18),transparent_60%)]" />
        <div className="orb pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 py-16 text-center sm:px-6 lg:py-20">
          <nav className="mb-6 flex items-center justify-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-cyan-300">Home</Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-cyan-300">Free tools</Link>
            {tool ? (
              <>
                <span>/</span>
                <span className="text-slate-200">{tool.shortLabel}</span>
              </>
            ) : null}
          </nav>
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

      <section className="border-t border-white/10 bg-[#05070e] px-5 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-white">Frequently asked questions</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="font-semibold text-white">{faq.q}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
          <Link href="/tools" className="mt-1 inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300">
            See all free resume tools
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: toolName,
              description: subtitle,
              url,
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
              publisher: { '@type': 'Organization', name: 'CV Prime', url: baseUrl },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
                { '@type': 'ListItem', position: 2, name: 'Free tools', item: `${baseUrl}/tools` },
                { '@type': 'ListItem', position: 3, name: toolName, item: url },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: { '@type': 'Answer', text: faq.a },
              })),
            },
          ]),
        }}
      />
    </main>
  );
}
