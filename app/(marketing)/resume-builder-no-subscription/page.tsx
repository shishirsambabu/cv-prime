import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Ban, CheckCircle2, XCircle, Lock, HeartHandshake } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Resume Builder Without Subscription — Free, No Recurring Fees | CV Prime',
  description:
    'A resume builder with no subscription. CV Prime is free to use, and Pro is a one-time ₹999 — no monthly fees, no auto-renew, nothing to cancel. Build, tailor, and export an ATS-ready resume without a card on file.',
  alternates: { canonical: 'https://cv-prime.in/resume-builder-no-subscription' },
  keywords: [
    'resume builder without subscription india',
    'resume builder no subscription india',
    'free resume builder no subscription',
    'cv prime free plan',
    'resume builder no recurring fee',
    'no subscription cv maker',
    'resume builder without credit card',
    'resume builder no monthly fee',
    'cv builder no subscription',
    'resume download without subscription',
  ],
  openGraph: {
    title: 'Resume Builder Without Subscription — Free, No Recurring Fees | CV Prime',
    description:
      'No subscription. Free to use, Pro is a one-time ₹999. No monthly fees, no auto-renew, nothing to cancel. Build an ATS-ready resume.',
    url: 'https://cv-prime.in/resume-builder-no-subscription',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume builder without subscription — CV Prime' }],
  },
};

const subscriptionTraps = [
  { trap: 'The "free" trial that needs a card', reality: 'Many builders ask for your card before you can download anything, then auto-charge when the trial ends.' },
  { trap: 'The hidden auto-renew', reality: 'You subscribe for one month to download a resume, get the job, and forget — then get billed monthly for a year.' },
  { trap: 'The cancellation maze', reality: 'Cancelling means digging through settings, surviving retention pop-ups, and sometimes emailing support to actually stop the charges.' },
  { trap: 'The download held hostage', reality: 'You build a full resume, then discover the only way to export it without a watermark is to start a paid subscription.' },
];

const cvPrimeWay = [
  'Free to use — no card required to start',
  'Build, edit, tailor, and ATS-score for free',
  '3 clean PDF exports on the free plan',
  'Pro is a one-time ₹999 — not a subscription',
  'No auto-renew and nothing to cancel',
  'Your account never gets charged twice',
];

const planRows = [
  { feature: 'Card required to start', free: false, sub: true },
  { feature: 'Recurring monthly charge', free: false, sub: true },
  { feature: 'Auto-renew you must cancel', free: false, sub: true },
  { feature: 'One-time payment option', free: true, sub: false },
  { feature: 'Free ATS scoring', free: true, sub: false },
  { feature: 'Free PDF exports to start', free: true, sub: false },
];

const faqs = [
  {
    q: 'Is there a resume builder with no subscription?',
    a: 'Yes — CV Prime. It is free to use with no card required, and the only paid option is a one-time ₹999 Lifetime Pro upgrade, not a subscription. There are no monthly or annual charges, no auto-renew, and nothing to cancel. This is deliberately different from most resume builders, which lock exports behind a recurring subscription.',
  },
  {
    q: 'Can I build and download a resume for free without subscribing?',
    a: 'Yes. On CV Prime\'s free plan you can build your resume, edit it, tailor it to a job description, run ATS scoring, and export 3 clean PDFs — all without a subscription and without entering a card. You only pay if you choose the one-time ₹999 Pro upgrade for unlimited exports and premium templates.',
  },
  {
    q: 'Why do most resume builders force a subscription?',
    a: 'Recurring subscriptions maximise revenue: most people use a resume builder intensely for a few weeks, land a job, and stop — but keep getting charged. CV Prime rejects that model with a one-time price because a resume tool is something you use in bursts, not continuously. You should not pay every month for something you touch twice a year.',
  },
  {
    q: 'Will CV Prime put a watermark on my free resume?',
    a: 'Your 3 free PDF exports are clean within the free plan\'s terms, and the one-time ₹999 Pro upgrade removes any export limits and watermarks entirely with unlimited downloads. Either way, you are never pushed into a recurring subscription to get a usable resume.',
  },
  {
    q: 'Do I need to enter my credit card to try CV Prime?',
    a: 'No. You can sign up and use the free plan — including building, tailoring, ATS scoring, and 3 PDF exports — without entering any payment details. A card is only needed if you decide to make the one-time ₹999 Pro purchase, and even then there is nothing stored for recurring billing because there is no recurring billing.',
  },
  {
    q: 'What happens after I pay the one-time fee?',
    a: 'Your account becomes Lifetime Pro permanently. You get unlimited clean exports, no watermark, and all premium templates, and you are never charged again — there is no renewal date and nothing to manage. It is the opposite of a subscription: pay once, done.',
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
    { '@type': 'ListItem', position: 2, name: 'Resume Builder Without Subscription', item: 'https://cv-prime.in/resume-builder-no-subscription' },
  ],
};

export default function ResumeBuilderNoSubscriptionPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <Ban className="h-4 w-4" />
            No subscription · No auto-renew · No card to start
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            A resume builder with no subscription
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Build, tailor, ATS-score, and export your resume without handing over a card or signing up for a monthly plan. CV Prime is free to use — and if you ever upgrade, Pro is a single ₹999, not a subscription you have to remember to cancel.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Start free — no card needed
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/lifetime-resume-builder-india" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              See the ₹999 lifetime plan
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free plan · 3 PDF exports · ATS scoring · Optional one-time Pro</p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {[
            { stat: '₹0', label: 'to build, tailor, and ATS-score your resume' },
            { stat: 'No card', label: 'required to sign up or export on the free plan' },
            { stat: '₹999', label: 'one-time for Pro — never a subscription' },
            { stat: '0', label: 'auto-renewals, renewal dates, or cancellations' },
          ].map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-brand">{item.stat}</p>
              <p className="mt-1 max-w-[170px] text-xs leading-5 text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subscription traps */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">The subscription traps CV Prime doesn&apos;t use</h2>
            <p className="mt-4 text-slate-500">The reasons people end up paying for a resume builder long after they got the job</p>
          </div>
          <div className="mt-12 space-y-4">
            {subscriptionTraps.map((t) => (
              <div key={t.trap} className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-950">{t.trap}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{t.reality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The CV Prime way */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-2 text-brand">
            <HeartHandshake className="h-6 w-6" />
            <h2 className="font-display text-3xl font-bold text-slate-950">The CV Prime way instead</h2>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {cvPrimeWay.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">CV Prime vs a subscription builder</h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
            <div className="grid grid-cols-[1fr_110px_110px] bg-slate-50 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">
              <span>What you deal with</span>
              <span className="text-center text-brand">CV Prime</span>
              <span className="text-center">Subscription</span>
            </div>
            <div className="divide-y divide-slate-100">
              {planRows.map((row) => (
                <div key={row.feature} className="grid grid-cols-[1fr_110px_110px] items-center px-5 py-3.5 text-sm">
                  <span className="font-medium text-slate-700">{row.feature}</span>
                  <span className="flex justify-center">
                    {row.free ? <CheckCircle2 className="h-5 w-5 text-emerald-600" /> : <XCircle className="h-5 w-5 text-slate-300" />}
                  </span>
                  <span className="flex justify-center">
                    {row.sub ? <CheckCircle2 className="h-5 w-5 text-slate-400" /> : <XCircle className="h-5 w-5 text-slate-300" />}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-slate-400">A check under CV Prime means &quot;you get this&quot;; under Subscription it means &quot;this is what you have to deal with&quot;.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">No-subscription resume builder — FAQ</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-slate-950">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-slate-900">Related pages</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/lifetime-resume-builder-india', label: 'Lifetime resume builder ₹999' },
              { href: '/free-resume-builder', label: 'Free resume builder' },
              { href: '/pricing', label: 'Pricing' },
              { href: '/ai-resume-builder', label: 'AI resume builder' },
              { href: '/ats-resume-builder', label: 'ATS resume builder' },
              { href: '/cv-prime-review', label: 'CV Prime review' },
              { href: '/cv-prime-vs-zety', label: 'CV Prime vs Zety' },
              { href: '/cv-prime-vs-resume-io', label: 'CV Prime vs Resume.io' },
              { href: '/resume-builder-india', label: 'Resume builder India' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2 text-brand">
            <Lock className="h-5 w-5" />
            <span className="text-sm font-bold">No card. No subscription. No catch.</span>
          </div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Build your resume without a subscription</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Start free, export your resume, and only ever pay once if you want unlimited Pro. No recurring charges, ever.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Start free — no card needed
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Start free — no subscription" message="Build an ATS-ready resume with no subscription and no card" />
    </main>
  );
}
