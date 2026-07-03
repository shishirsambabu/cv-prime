import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Infinity as InfinityIcon, BadgeIndianRupee, CheckCircle2, Ban, Clock, Award } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Lifetime Resume Builder India — Pay ₹999 Once, Use Forever | CV Prime',
  description:
    'CV Prime is the AI resume builder you pay for once. ₹999 one-time unlocks lifetime Pro — unlimited PDF exports, no watermark, all premium templates, forever. No subscription, no renewals. Built for India.',
  alternates: { canonical: 'https://cv-prime.in/lifetime-resume-builder-india' },
  keywords: [
    'lifetime resume builder india',
    'ai resume builder lifetime deal india',
    'one-time payment resume builder india',
    'ats resume builder pay once',
    'cv prime lifetime plan 999',
    'resume builder pay once',
    'lifetime cv builder',
    'one time payment cv maker',
    'resume builder lifetime access india',
    'best lifetime resume builder',
  ],
  openGraph: {
    title: 'Lifetime Resume Builder India — Pay ₹999 Once, Use Forever | CV Prime',
    description:
      '₹999 one-time = lifetime Pro. Unlimited exports, no watermark, all templates, forever. No subscription. Built for India.',
    url: 'https://cv-prime.in/lifetime-resume-builder-india',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Lifetime resume builder India — CV Prime' }],
  },
};

const costOverTime = [
  { period: 'First month', cvPrime: '₹999 (one-time)', subs: '₹1,200 – ₹2,500' },
  { period: 'After 6 months', cvPrime: '₹999 total', subs: '₹7,000 – ₹15,000' },
  { period: 'After 1 year', cvPrime: '₹999 total', subs: '₹14,000 – ₹30,000' },
  { period: 'After 3 years', cvPrime: '₹999 total', subs: '₹40,000+' },
];

const whatsIncluded = [
  'Unlimited clean PDF exports — no 3-download cap',
  'No watermark on any export, ever',
  'All premium templates (Executive, Creative, Technical, Academic, Premium)',
  'AI bullet rewriting and JD tailoring',
  'ATS scoring against any job description',
  'Job application tracker',
  'AI cover letter generator',
  'Every future feature added to Pro — at no extra cost',
];

const whyLifetime = [
  { icon: Clock, title: 'A job search is seasonal', body: 'You apply hard for a few months, land a role, and stop. A subscription keeps charging you long after you have stopped using it. A one-time purchase matches how people actually job-hunt — intensely, then not at all, then again in two years.' },
  { icon: Ban, title: 'No auto-renew, no surprises', body: 'There is nothing to cancel and no renewal date to forget. You pay ₹999 once and the account is Pro forever. No "your card was charged ₹1,499" email six months after you got the job.' },
  { icon: Award, title: 'It is genuinely yours', body: 'Lifetime Pro is owned, not rented. Come back in two years for your next switch and your templates, exports, and AI tools are still there — at no additional cost.' },
];

const faqs = [
  {
    q: 'Is CV Prime really a one-time payment?',
    a: 'Yes. CV Prime Pro is a single ₹999 payment that unlocks lifetime access — there are no monthly or annual charges, no renewals, and nothing to cancel. Once you upgrade, your account stays Pro permanently. This is deliberately different from most resume builders, which charge recurring subscriptions of ₹1,000–₹2,500 per month.',
  },
  {
    q: 'What does the ₹999 lifetime plan include?',
    a: 'Lifetime Pro includes unlimited clean PDF exports (no 3-download cap), no watermark on any export, all premium templates, AI bullet rewriting and job-description tailoring, ATS scoring, the job application tracker, and the AI cover letter generator. Any new feature added to the Pro tier in future is included automatically at no extra cost.',
  },
  {
    q: 'Why is CV Prime cheaper than subscription resume builders?',
    a: 'Most international resume builders run on recurring subscriptions because that maximises lifetime revenue per user — you keep paying long after you have landed a job. CV Prime is built for the Indian market with a one-time ₹999 price because that is how Indian job seekers prefer to pay and it is fairer for a tool you use in bursts. Over a single year, a typical subscription builder costs ₹14,000–₹30,000; CV Prime costs ₹999, once.',
  },
  {
    q: 'Do I have to pay anything to start?',
    a: 'No. CV Prime is free to start, with no credit card required. The free plan includes 3 PDF exports, full ATS scoring, AI bullet rewrites, and all free templates. You only pay the one-time ₹999 if and when you want unlimited exports, no watermark, and the premium templates.',
  },
  {
    q: 'Is the ₹999 lifetime payment refundable?',
    a: 'Pro payments are non-refundable, but if something genuinely goes wrong, our support team reviews each case fairly — just email support@cv-prime.in. Because there are no recurring charges, there is no risk of being billed again after you buy, which is the most common refund complaint with subscription tools.',
  },
  {
    q: 'Will the price stay ₹999 forever for me?',
    a: 'Your purchase is a one-time unlock — once you have paid ₹999, you have lifetime Pro at that price and are never charged again, regardless of any future pricing changes. New features added to Pro are included for existing lifetime members at no additional cost.',
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
    { '@type': 'ListItem', position: 2, name: 'Lifetime Resume Builder India', item: 'https://cv-prime.in/lifetime-resume-builder-india' },
  ],
};

export default function LifetimeResumeBuilderPage(): JSX.Element {
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
            <InfinityIcon className="h-4 w-4" />
            Pay once · ₹999 · Lifetime Pro
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The resume builder you pay for once — and keep forever
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            No monthly fees. No renewals. No cancellation maze. CV Prime&apos;s lifetime Pro is a single ₹999 payment that unlocks unlimited exports, no watermark, and every premium template — forever. Built for how India actually job-hunts.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Start free — upgrade once
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              See full pricing
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free to start · ₹999 one-time for lifetime Pro · No subscription</p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-white/10 bg-white/[0.03] px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {[
            { stat: '₹999', label: 'one-time — lifetime Pro, never charged again' },
            { stat: '₹0', label: 'recurring fees, renewals, or hidden charges' },
            { stat: '∞', label: 'clean PDF exports with no watermark' },
            { stat: '1', label: 'payment, then it is yours for good' },
          ].map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-brand">{item.stat}</p>
              <p className="mt-1 max-w-[170px] text-xs leading-5 text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cost over time */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">₹999 once vs a subscription that never stops</h2>
            <p className="mt-4 text-slate-400">What you actually pay over time — lifetime Pro vs a typical subscription builder</p>
          </div>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-3 text-left font-semibold text-slate-300">Time using it</th>
                  <th className="pb-3 text-center font-bold text-brand">CV Prime lifetime</th>
                  <th className="pb-3 text-center text-slate-400">Subscription builder</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {costOverTime.map((row) => (
                  <tr key={row.period}>
                    <td className="py-3 font-medium text-slate-300">{row.period}</td>
                    <td className="py-3 text-center font-semibold text-brand">{row.cvPrime}</td>
                    <td className="py-3 text-center text-slate-400">{row.subs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-slate-400">Subscription ranges are typical market rates for popular resume builders; CV Prime lifetime Pro is a fixed ₹999 one-time.</p>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-2 text-brand">
            <BadgeIndianRupee className="h-6 w-6" />
            <h2 className="font-display text-3xl font-bold text-white">What ₹999 lifetime unlocks</h2>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {whatsIncluded.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why lifetime */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Why one-time beats a subscription for a resume tool</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {whyLifetime.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{c.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{c.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Lifetime resume builder — FAQ</h2>
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
          <h2 className="font-display text-lg font-bold text-white">Related pages</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/pricing', label: 'Pricing' },
              { href: '/resume-builder-no-subscription', label: 'Resume builder without subscription' },
              { href: '/ai-resume-builder', label: 'AI resume builder' },
              { href: '/ats-resume-builder', label: 'ATS resume builder' },
              { href: '/cv-prime-review', label: 'CV Prime review' },
              { href: '/cv-prime-vs-zety', label: 'CV Prime vs Zety' },
              { href: '/cv-prime-vs-resume-io', label: 'CV Prime vs Resume.io' },
              { href: '/free-resume-builder', label: 'Free resume builder' },
              { href: '/resume-builder-india', label: 'Resume builder India' },
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Pay once. Job-hunt for life.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Start free, upgrade to lifetime Pro for ₹999 when you need unlimited clean exports — and never pay for a resume tool again.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Start free — upgrade once
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Get lifetime Pro — ₹999 once" message="Pay ₹999 once for lifetime Pro — no subscription, ever" />
    </main>
  );
}
