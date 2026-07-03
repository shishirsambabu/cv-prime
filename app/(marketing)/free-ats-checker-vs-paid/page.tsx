import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Scale, CheckCircle2, XCircle, Wallet, ShieldCheck } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Free ATS Checker vs Paid — Do You Need to Pay? | CV Prime',
  description:
    'Free ATS checker vs paid: what each actually gives you, where free falls short, and when paying is worth it. CV Prime offers free 0–100 ATS scoring with keyword gaps and fixes — see how it compares.',
  alternates: { canonical: 'https://cv-prime.in/free-ats-checker-vs-paid' },
  keywords: [
    'free ats checker vs paid',
    'free vs paid ats checker',
    'is a paid ats checker worth it',
    'free ats resume checker',
    'best free ats checker',
    'paid ats scanner comparison',
    'do i need a paid ats checker',
    'ats checker free or paid',
    'free ats score checker india',
    'ats checker comparison',
  ],
  openGraph: {
    title: 'Free ATS Checker vs Paid — Do You Need to Pay? | CV Prime',
    description:
      'What free vs paid ATS checkers actually give you, where free falls short, and when paying is worth it. CV Prime scores free.',
    url: 'https://cv-prime.in/free-ats-checker-vs-paid',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Free ATS checker vs paid — CV Prime' }],
  },
};

const freeGood = [
  'A 0–100 ATS score against a specific job description',
  'Your keyword coverage and the exact missing terms',
  'Format and section warnings that block the parse',
  'Enough to fix the biggest reasons for auto-rejection',
];
const freeLimits = [
  'Many free checkers cap you at one or two scans',
  'Some show only a score with no fixes or detail',
  'Free exports are often watermarked or limited',
  'A few are loss-leaders that push a subscription hard',
];

const compareRows = [
  { feature: '0–100 score vs a specific JD', free: true, typicalFree: 'Sometimes', paid: true },
  { feature: 'Missing-keyword report', free: true, typicalFree: 'Rarely', paid: true },
  { feature: 'AI fixes (rewrite + keyword injection)', free: true, typicalFree: 'No', paid: true },
  { feature: 'Unlimited checks', free: false, typicalFree: 'No', paid: true },
  { feature: 'Clean export with no watermark', free: false, typicalFree: 'No', paid: true },
  { feature: 'One-time price (no subscription)', free: true, typicalFree: 'n/a', paid: true },
];

const faqs = [
  {
    q: 'Is a free ATS checker good enough, or do I need a paid one?',
    a: 'For most people, a good free ATS checker is enough to fix the biggest problems — it tells you your 0–100 match score, the keywords you are missing, and the format issues that block the parse. That covers the main reasons qualified candidates get auto-rejected. You only benefit from paying when you need volume (unlimited checks as you apply to many roles) and unlimited clean, watermark-free exports. CV Prime gives the core scoring and AI fixes free, and reserves only unlimited usage for its one-time Pro.',
  },
  {
    q: 'What do paid ATS checkers offer that free ones don\'t?',
    a: 'Paid checkers typically remove usage limits (unlimited scans), unlock unlimited clean exports without watermarks, and bundle extra features like full AI rewriting and premium templates. The score and keyword analysis themselves are not magically more accurate when paid — the difference is mostly volume and polish. The trap to watch for is paying a recurring subscription for something you only use for a few weeks during a job search.',
  },
  {
    q: 'Are free ATS checkers accurate?',
    a: 'A good free ATS checker is accurate for what matters: keyword coverage against the job description, format and section problems, and an overall match score. CV Prime\'s free checker is calibrated for the Indian job market and gives the same scoring engine as Pro — Pro simply removes usage limits. Be cautious of free tools that only return a vague score with no breakdown, since those are often designed to alarm you into upgrading rather than to actually help.',
  },
  {
    q: 'Why is CV Prime\'s ATS checker free when others charge?',
    a: 'CV Prime believes the core diagnosis — your ATS score, missing keywords, and fixes — should be free, because that is what gets you unstuck. Its free plan includes full ATS scoring, AI bullet rewrites, and 3 clean PDF exports with no card required. Only unlimited usage and watermark-free unlimited exports sit behind a one-time ₹999 Lifetime Pro, not a subscription. You get the value before you pay, and you never pay twice.',
  },
  {
    q: 'When is paying for an ATS checker actually worth it?',
    a: 'Paying is worth it when you are applying to many roles and want to score and re-score without hitting a usage cap, and when you need unlimited clean, watermark-free exports. In that case, a one-time payment is far better value than a subscription, because your job search is seasonal. CV Prime\'s ₹999 Lifetime Pro covers exactly this — unlimited checks and exports, paid once, used whenever you next job-hunt.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Free ATS Checker vs Paid', item: 'https://cv-prime.in/free-ats-checker-vs-paid' },
  ],
};

export default function FreeVsPaidATSPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <Scale className="h-4 w-4" />
            Free vs paid — the honest answer
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Free ATS checker vs paid: do you actually need to pay?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Short answer: a good free checker fixes the things that get you auto-rejected. Paid mostly buys volume and unlimited clean exports. Here is exactly what each gives you — and where CV Prime draws the line (more free than most).
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Check my ATS score free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/ats-score-checker" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              About the free ATS checker
            </Link>
          </div>
        </div>
      </section>

      {/* Free: good vs limits */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">What a free ATS checker gives you</h2>
            <p className="mt-4 text-slate-400">Enough to fix the biggest reasons for rejection — with some common limits</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/20 bg-white/[0.04] p-6">
              <div className="flex items-center gap-2 text-emerald-300">
                <CheckCircle2 className="h-5 w-5" />
                <h3 className="font-display text-lg font-bold">Free usually covers</h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {freeGood.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm leading-6 text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />{d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-center gap-2 text-amber-600">
                <XCircle className="h-5 w-5" />
                <h3 className="font-display text-lg font-bold">Where free often falls short</h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {freeLimits.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm leading-6 text-slate-300">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />{d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold">CV Prime free vs typical free vs paid</h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-3 text-left font-semibold text-slate-300">Capability</th>
                  <th className="pb-3 text-center font-bold text-brand">CV Prime (free)</th>
                  <th className="pb-3 text-center text-slate-400">Typical free</th>
                  <th className="pb-3 text-center text-slate-400">Paid</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {compareRows.map((row) => (
                  <tr key={row.feature}>
                    <td className="py-3 font-medium text-slate-300">{row.feature}</td>
                    <td className="py-3 text-center">
                      {row.free ? <CheckCircle2 className="mx-auto h-5 w-5 text-emerald-600" /> : <XCircle className="mx-auto h-5 w-5 text-slate-300" />}
                    </td>
                    <td className="py-3 text-center text-xs font-semibold text-slate-400">{row.typicalFree}</td>
                    <td className="py-3 text-center">
                      {row.paid ? <CheckCircle2 className="mx-auto h-5 w-5 text-slate-400" /> : <XCircle className="mx-auto h-5 w-5 text-slate-300" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-slate-400">CV Prime&apos;s &quot;paid&quot; is a one-time ₹999 Lifetime Pro that mainly removes usage limits — not a recurring subscription.</p>
        </div>
      </section>

      {/* Verdict */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <div className="flex items-center gap-2 text-brand">
            <Wallet className="h-6 w-6" />
            <h2 className="font-display text-2xl font-bold text-white">The verdict</h2>
          </div>
          <p className="mt-4 leading-8 text-slate-300">
            Start free. A capable free ATS checker — score, keyword gaps, and fixes — solves the problem that actually gets resumes rejected, so most people never need to pay just to check. Upgrade only when you are applying at volume and want unlimited checks and clean, watermark-free exports. And when you do, prefer a one-time price over a subscription, because a job search is seasonal. CV Prime is built around exactly that line: the diagnosis is free; only unlimited usage costs a one-time ₹999.
          </p>
          <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-300">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            No card to check your score · No subscription · Pay once if ever
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Free vs paid ATS — FAQ</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white/[0.04] p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-white">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-white/10 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-white">Related tools</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/ats-score-checker', label: 'Free ATS score checker' },
              { href: '/ats-checker', label: 'ATS checker' },
              { href: '/resume-checker', label: 'Free resume checker' },
              { href: '/resume-job-match-score', label: 'Resume job match score' },
              { href: '/how-to-pass-ats-screening', label: 'How to pass ATS screening' },
              { href: '/pricing', label: 'Pricing' },
              { href: '/lifetime-resume-builder-india', label: 'Lifetime ₹999 plan' },
              { href: '/cv-prime-vs-jobscan', label: 'CV Prime vs Jobscan' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-brand hover:text-brand">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Check your score free — decide later</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Get your ATS score, missing keywords, and fixes at no cost. Only pay once if you want unlimited usage. No subscription.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Check my ATS score free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Check my ATS score free" message="Free ATS score, keyword gaps, and fixes — pay once only if ever" />
    </main>
  );
}
