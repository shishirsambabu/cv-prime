import Link from 'next/link';
import { BrandLogo } from '@/components/BrandLogo';
import type { ReactNode } from 'react';

interface LegalPageProps {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalPage({ badge, title, subtitle, lastUpdated, children }: LegalPageProps): JSX.Element {
  return (
    <main className="min-h-screen bg-transparent px-5 py-10 text-white">
      <div className="mx-auto max-w-3xl">
        {/* Back to home */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white">
          <BrandLogo className="h-11" />
        </Link>

        {/* Header */}
        <div className="mt-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">{badge}</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">{title}</h1>
          <p className="mt-3 text-base leading-7 text-slate-300">{subtitle}</p>
          <p className="mt-2 text-xs text-slate-400">Last updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="mt-10 space-y-6">{children}</div>

        {/* Footer nav */}
        <nav className="mt-14 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-sm font-medium text-slate-400">
          <Link className="hover:text-white" href="/terms">Terms of service</Link>
          <Link className="hover:text-white" href="/privacy">Privacy policy</Link>
          <Link className="hover:text-white" href="/refund">Refund policy</Link>
          <Link className="hover:text-white" href="/cookies">Cookie policy</Link>
          <Link className="hover:text-white" href="/contact">Contact us</Link>
          <Link className="hover:text-white" href="/">Home</Link>
        </nav>
      </div>
    </main>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }): JSX.Element {
  return (
    <section>
      <h2 className="font-display text-xl font-bold text-white">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-7 text-slate-300">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }): JSX.Element {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}
