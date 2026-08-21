type FaqItem = { q: string; a: string };

/**
 * Visible FAQ section rendered inside AiToolLayout, backing the FAQPage
 * schema in AiToolSchema. Keep the two in sync — the schema is generated
 * from the same faqs array passed here.
 */
export function AiToolFaq({ heading, faqs }: { heading: string; faqs: FaqItem[] }): JSX.Element {
  return (
    <section className="mt-14 border-t border-white/10 pt-12">
      <h2 className="text-center font-display text-xl font-bold text-white sm:text-2xl">{heading}</h2>
      <div className="mt-6 space-y-4">
        {faqs.map((faq) => (
          <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-display text-base font-bold text-white">{faq.q}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
