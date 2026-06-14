import Link from 'next/link';
import { BrandLogo } from '@/components/BrandLogo';
import type { Metadata } from 'next';
import { ArrowRight, Check, ShieldCheck, X } from 'lucide-react';
import { MobileNav } from '@/components/marketing/MobileNav';
import { SUPPORT_EMAIL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Ethics & Code of Conduct',
  description:
    'How to use CV Prime responsibly: optimise your real experience honestly, stay qualified for the roles you apply to, and never fabricate.',
};

const navLinks = [
  { href: '/templates', label: 'Templates' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/login', label: 'Sign in' },
];

const principles: Array<{ title: string; body: string }> = [
  {
    title: 'We optimise how it reads — not what is true',
    body: 'When you paste a job description, CV Prime tailors your CV to highlight the relevant, real experience you already have and phrase it the way hiring software expects. It surfaces your strengths. It does not, and should not, invent them.',
  },
  {
    title: 'The CV is still yours — and so is the responsibility',
    body: 'An optimised CV does not change who you are. You are accountable for every line on it. Only apply to roles you are genuinely qualified for, and be ready to back up every claim in an interview.',
  },
  {
    title: 'Bring the facts. Do not let AI do the heavy lifting',
    body: 'AI can sharpen your wording, but it cannot know your real numbers, projects, and outcomes. Provide the actual facts. A bullet that sounds impressive but is not true will fail you the moment a recruiter asks about it.',
  },
];

const dos = [
  'Tailor your real experience to the role you want',
  'Add genuine metrics, projects, and outcomes you actually delivered',
  'Use AI suggestions as a starting point, then edit them to the truth',
  'Apply to roles you are honestly qualified for',
  'Review every generated line before you send it',
];

const donts = [
  'Invent job titles, employers, dates, or degrees',
  'Claim skills or certifications you do not have',
  'Fabricate metrics or results to look more senior',
  'Misrepresent someone else’s work as your own',
  'Send an AI draft without checking it for accuracy',
];

export default function EthicsPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-[#f6f9fc] text-slate-950">
      <section className="premium-grid relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(99,102,241,0.16),transparent_30%),radial-gradient(circle_at_84%_6%,rgba(16,185,129,0.1),transparent_26%)]" />
        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <BrandLogo className="h-10" />
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <Link className="transition hover:text-slate-950" href="/">
              Home
            </Link>
            {navLinks.map((link) => (
              <Link key={link.href} className="transition hover:text-slate-950" href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/signup?next=/ai-cv"
            className="hidden items-center gap-2 rounded-pill bg-brand px-5 py-2.5 text-sm font-bold text-brand-foreground shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-strong md:inline-flex"
          >
            Get started
            <ArrowRight className="h-4 w-4" />
          </Link>
          <MobileNav
            links={[{ href: '/', label: 'Home' }, ...navLinks]}
            ctaHref="/signup?next=/ai-cv"
            ctaLabel="Get started"
            tone="dark"
          />
        </header>

        <div className="relative z-10 mx-auto max-w-3xl px-5 pb-14 pt-10 text-center sm:px-6 lg:pb-16 lg:pt-16">
          <div className="inline-flex items-center gap-2 rounded-pill border border-brand/20 bg-brand/[0.06] px-4 py-2 text-sm font-semibold text-brand">
            <ShieldCheck className="h-4 w-4" />
            Ethics &amp; Code of Conduct
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1] tracking-[-0.05em] sm:text-6xl">
            Use CV Prime honestly.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            CV Prime helps your real experience get a fair reading from automated systems. That is
            a powerful tool — and like any tool, it works only when used with integrity.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:py-20">
        <div className="space-y-4">
          {principles.map((principle, index) => (
            <article
              key={principle.title}
              className="rounded-panel border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-inner bg-brand/10 font-display text-sm font-bold text-brand">
                  {index + 1}
                </span>
                <div>
                  <h2 className="font-display text-xl font-bold tracking-[-0.02em] text-slate-950">
                    {principle.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{principle.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-panel border border-emerald-200 bg-emerald-50/60 p-6 sm:p-8">
            <h2 className="font-display text-lg font-bold text-emerald-900">Do this</h2>
            <ul className="mt-4 space-y-3">
              {dos.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-emerald-900">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-pill bg-emerald-500 text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-panel border border-rose-200 bg-rose-50/60 p-6 sm:p-8">
            <h2 className="font-display text-lg font-bold text-rose-900">Never do this</h2>
            <ul className="mt-4 space-y-3">
              {donts.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-rose-900">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-pill bg-rose-500 text-white">
                    <X className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-panel border border-slate-200 bg-slate-950 p-6 text-white sm:p-8">
          <h2 className="font-display text-2xl font-bold tracking-[-0.02em]">The bottom line</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            We built CV Prime to give honest, qualified people a fair chance — not to help anyone
            misrepresent themselves. Optimising your CV is not the same as faking it. Keep it true,
            stay qualified, and let the tool do what it does best: make sure your real story is
            seen. Questions about responsible use? Email{' '}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-semibold text-cyan-300 underline-offset-4 hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
