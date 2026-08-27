import Link from 'next/link';

export interface RelatedTipLink {
  href: string;
  label: string;
  desc: string;
}

/**
 * Shared "Related resume tips" cross-link block used across the resume-tips
 * pillar sub-pages to interlink lateral topics (e.g. headline <-> summary <-> objective)
 * instead of only linking back up to the /resume-tips hub.
 */
export function RelatedResumeTips({ items }: { items: RelatedTipLink[] }): JSX.Element {
  return (
    <section className="border-t border-white/10 bg-white/[0.03] px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-xl font-bold text-white">Related resume tips</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {items.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-all hover:border-brand/30 hover:shadow-sm"
            >
              <div className="text-sm font-semibold text-slate-200">{l.label}</div>
              <div className="mt-1 text-xs text-slate-400">{l.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
