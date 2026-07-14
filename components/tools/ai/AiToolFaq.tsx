export type AiToolFaqItem = { q: string; a: string };

export function AiToolFaq({ faqs }: { faqs: AiToolFaqItem[] }): JSX.Element {
  return (
    <section className="mt-14 border-t border-white/10 pt-12">
      <h2 className="text-center font-display text-2xl font-bold text-white sm:text-3xl">Frequently asked questions</h2>
      <div className="mt-8 space-y-5">
        {faqs.map((faq) => (
          <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-display text-lg font-bold text-white">{faq.q}</h3>
            <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
