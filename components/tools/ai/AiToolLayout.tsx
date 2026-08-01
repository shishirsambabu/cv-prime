import { Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';
import { AiToolFooterCta } from '@/components/tools/ai/AiToolFooterCta';

interface AiToolSchema {
  name: string;
  description: string;
  url: string;
  breadcrumbName: string;
}

/**
 * Shared dark hero + container for the gated BYOK AI tools. Page files
 * supply metadata and the interactive client component as children.
 */
export function AiToolLayout({
  eyebrow,
  title,
  highlight,
  subtitle,
  schema,
  children,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
  schema?: AiToolSchema;
  children: ReactNode;
}): JSX.Element {
  const appSchema = schema && {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: schema.name,
    url: schema.url,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: schema.description,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  };

  const breadcrumbSchema = schema && {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
      { '@type': 'ListItem', position: 2, name: 'AI Tools', item: 'https://cv-prime.in/tools' },
      { '@type': 'ListItem', position: 3, name: schema.breadcrumbName, item: schema.url },
    ],
  };

  return (
    <main className="text-slate-100">
      {appSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />}
      {breadcrumbSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />}
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

      <section className="border-t border-white/10 bg-[#05070e]">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 px-5 py-12 text-center sm:px-6">
          <p className="text-sm font-semibold text-white">Want this built into a full CV you can export?</p>
          <AiToolFooterCta />
        </div>
      </section>
    </main>
  );
}
