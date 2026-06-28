import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

/**
 * Inline CTA card that funnels an SEO content page into its matching
 * interactive AI tool. Dark-themed to sit inside the (now dark) pages.
 */
export function AiToolCallout({
  href,
  label,
  blurb,
}: {
  href: string;
  label: string;
  blurb: string;
}): JSX.Element {
  return (
    <div className="mx-auto my-10 max-w-4xl px-5 sm:px-6">
      <Link
        href={href}
        className="group flex flex-col items-start gap-4 rounded-[1.5rem] border border-cyan-400/20 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 p-6 transition hover:border-cyan-300/40 hover:shadow-[0_30px_70px_-40px_rgba(34,211,238,0.5)] sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/40 to-cyan-500/20 text-cyan-200 ring-1 ring-white/10">
            <Sparkles className="h-5 w-5" />
          </span>
          <div>
            <p className="font-display text-base font-bold text-white">{label}</p>
            <p className="mt-1 text-sm leading-6 text-slate-300">{blurb}</p>
          </div>
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 rounded-pill bg-gradient-to-r from-brand to-cyan-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand/30 transition group-hover:-translate-y-0.5">
          Open the AI tool
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </span>
      </Link>
    </div>
  );
}
