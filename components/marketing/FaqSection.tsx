export interface FaqEntry {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqEntry[];
  heading?: string;
  eyebrow?: string;
}

/**
 * Server-rendered FAQ block with matching FAQPage JSON-LD.
 *
 * Uses native <details> rather than the client-side FAQItem accordion so every
 * answer is present in the initial HTML: crawlers and AI retrieval bots that do
 * not run JavaScript (or do not click) can read and cite the answers, and the
 * visible text always matches the structured data.
 */
export function FaqSection({
  faqs,
  heading = 'Frequently asked questions',
  eyebrow = 'FAQ',
}: FaqSectionProps): JSX.Element {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <section className="border-t border-white/10 px-5 py-16" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">{eyebrow}</p>
        <h2 id="faq-heading" className="mt-3 font-display text-3xl font-bold tracking-[-0.03em] text-white">
          {heading}
        </h2>
        <div className="mt-8 divide-y divide-white/10 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04]">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group px-6 py-5" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-base font-bold text-white">{faq.question}</h3>
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-xl leading-none text-cyan-300 transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
