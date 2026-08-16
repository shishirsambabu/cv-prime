import Link from 'next/link';

interface AiToolFaqItem {
  q: string;
  a: string;
}

interface AiToolRelatedLink {
  href: string;
  label: string;
}

/**
 * Structured FAQ + FAQPage/SoftwareApplication JSON-LD for the thin,
 * unlinked /tools/ai-* pages. Grounds AI retrieval engines (and users)
 * in what the tool actually does before they open it.
 */
export function AiToolFaq({
  toolName,
  toolUrl,
  description,
  faqs,
  related,
}: {
  toolName: string;
  toolUrl: string;
  description: string;
  faqs: AiToolFaqItem[];
  related?: AiToolRelatedLink[];
}): JSX.Element {
  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: toolName,
    url: toolUrl,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section className="mt-4 border-t border-white/10 pt-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h2 className="font-display text-2xl font-bold text-white">{toolName} — FAQ</h2>
      <div className="mt-6 space-y-4">
        {faqs.map((faq) => (
          <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-display text-base font-bold text-white">{faq.q}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{faq.a}</p>
          </div>
        ))}
      </div>
      {related && related.length > 0 && (
        <div className="mt-8">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Related tools</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {related.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
              >
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
