import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Star, ThumbsUp, ThumbsDown, CheckCircle2, XCircle, Users, BadgeIndianRupee } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'CV Prime Review (2026) — Features, Pricing, Pros & Cons | CV Prime',
  description:
    'An honest, detailed overview of CV Prime: the AI resume builder and ATS checker built for India. See what it does well, its real limitations, the ₹999 one-time pricing, and who it is — and isn\'t — for.',
  alternates: { canonical: 'https://cv-prime.in/cv-prime-review' },
  keywords: [
    'cv prime review',
    'cv prime',
    'is cv prime good',
    'cv prime resume builder review',
    'cv prime ai',
    'best ai cv tool india 2026',
    'cv builder with ai score india',
    'cv prime features',
    'cv prime pros and cons',
    'cv-prime.in review',
  ],
  openGraph: {
    title: 'CV Prime Review (2026) — Features, Pricing, Pros & Cons',
    description:
      'An honest overview of CV Prime: AI tailoring, ATS scoring, ₹999 one-time pricing, real pros and cons, and who it is for.',
    url: 'https://cv-prime.in/cv-prime-review',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime review 2026' }],
  },
};

const atAGlance = [
  { label: 'What it is', value: 'AI resume builder + ATS checker for India' },
  { label: 'Best for', value: 'Indian job seekers tailoring to specific JDs' },
  { label: 'Pricing', value: 'Free plan; Lifetime Pro ₹999 one-time' },
  { label: 'Standout', value: 'ATS scoring + JD tailoring, no subscription' },
];

const pros = [
  'ATS score (0–100) against any specific job description, with a clear keyword and format breakdown',
  'AI tailoring and bullet rewriting that does not fabricate experience',
  'One-time ₹999 Lifetime Pro — no subscription, no auto-renew, nothing to cancel',
  'Genuinely usable free plan: 3 PDF exports, full ATS scoring, AI rewrites',
  'Built for India — INR pricing, Indian ATS patterns, B.Tech/CGPA/CA-aware',
  '8 templates, all single-column and ATS-safe',
  'Extras included: job tracker, AI cover letter generator, role-specific examples',
];

const cons = [
  'AI features use a bring-your-own-key (BYOK) model, so you supply an OpenRouter key for unlimited AI use',
  'Primarily tuned for the Indian market — global users get value but less localisation',
  'Pro payments are non-refundable (though support reviews genuine issues)',
  'A newer brand than decade-old US incumbents, so fewer third-party reviews so far',
  'Template library is focused and ATS-safe rather than highly designed/graphical',
];

const forYou = [
  'You are applying to Indian companies that screen resumes with an ATS',
  'You want to tailor your resume per job instead of sending one generic version',
  'You would rather pay once than subscribe monthly',
  'You are a fresher or career-switcher who needs help quantifying experience',
];

const notForYou = [
  'You want a heavily graphical, multi-column "designer" resume (often ATS-unfriendly anyway)',
  'You need a tool deeply localised for a non-Indian market',
  'You refuse to use any AI assistance and only want a static template',
];

const ratings = [
  { area: 'ATS scoring & tailoring', score: '4.9' },
  { area: 'Value for money', score: '4.9' },
  { area: 'Ease of use', score: '4.7' },
  { area: 'Templates', score: '4.5' },
  { area: 'India fit', score: '5.0' },
];

const faqs = [
  {
    q: 'Is CV Prime good?',
    a: 'For its core job — getting an Indian job seeker\'s resume past the ATS and tailored to a specific role — CV Prime is strong. Its standout features are 0–100 ATS scoring against a real job description and AI tailoring that does not invent experience, paired with one-time ₹999 pricing instead of a subscription. Its main trade-offs are a bring-your-own-key model for unlimited AI, an India-first focus, and a smaller template library than some designer-oriented builders.',
  },
  {
    q: 'How much does CV Prime cost?',
    a: 'CV Prime is free to start, with no card required — the free plan includes 3 PDF exports, full ATS scoring, and AI bullet rewrites. The only paid option is Lifetime Pro at ₹999 one-time, which unlocks unlimited clean exports, no watermark, and all premium templates. There is no subscription and no recurring charge.',
  },
  {
    q: 'Is CV Prime free?',
    a: 'Yes, there is a free plan you can use without a credit card. It covers building, editing, tailoring to a job description, ATS scoring, and 3 clean PDF exports. You only pay if you choose the one-time ₹999 Pro upgrade for unlimited exports and premium templates.',
  },
  {
    q: 'Is CV Prime better than Zety, Resume.io, or Canva?',
    a: 'It depends on what you value. CV Prime wins on India fit, real ATS-vs-JD scoring, and one-time pricing; subscription tools like Zety and Resume.io have larger template libraries and longer track records, while Canva wins on visual design but its multi-column layouts often fail ATS parsing. For Indian job seekers who want ATS pass-through and to pay once, CV Prime is usually the better fit. See the detailed comparison pages for specifics.',
  },
  {
    q: 'Does CV Prime use AI to write the resume for me?',
    a: 'CV Prime uses AI to tailor and rewrite your existing content — sharpening bullets, adding missing keywords from the job description, and scoring your ATS match — but it is constrained never to fabricate companies, dates, or qualifications. It strengthens what you provide rather than inventing a resume from nothing.',
  },
  {
    q: 'Who is behind CV Prime?',
    a: 'CV Prime (cv-prime.in) was founded in 2025 by Shishir Babu and is based in Ernakulam, Kerala, India. It is built specifically for the Indian job market, with INR pricing, Indian payment methods, and ATS scoring calibrated for Indian employers.',
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
    { '@type': 'ListItem', position: 2, name: 'CV Prime Review', item: 'https://cv-prime.in/cv-prime-review' },
  ],
};

export default function CVPrimeReviewPage(): JSX.Element {
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
            <Star className="h-4 w-4" />
            CV Prime review · Updated for 2026
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            CV Prime review: is it the right resume builder for you?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            An honest, detailed look at CV Prime — what it does well, where it falls short, what it costs, and exactly who it is and isn&apos;t for. No fluff, including the limitations.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Try CV Prime free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {atAGlance.map((g) => (
              <div key={g.label} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-brand">{g.label}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">{g.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">The verdict</h2>
          <p className="mt-4 leading-8 text-slate-700">
            CV Prime is one of the strongest choices for Indian job seekers whose biggest obstacle is the ATS. Its real differentiators are genuine ATS scoring against a specific job description, AI tailoring that strengthens your actual experience without fabricating it, and a one-time ₹999 price that replaces the monthly subscriptions most competitors charge. It is not the pick if you want a heavily designed, multi-column resume — but those usually fail ATS parsing anyway. For its core promise — getting your resume seen and matched — it delivers, and the free plan lets you verify that before paying anything.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            {ratings.map((r) => (
              <div key={r.area} className="rounded-xl bg-white px-4 py-3 shadow-sm">
                <p className="flex items-center gap-1 font-display text-xl font-bold text-slate-950">
                  {r.score} <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                </p>
                <p className="mt-0.5 text-xs text-slate-500">{r.area}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-400">Ratings reflect this overview&apos;s assessment against the needs of Indian job seekers.</p>
        </div>
      </section>

      {/* Pros & cons */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-white p-6">
              <div className="flex items-center gap-2 text-emerald-700">
                <ThumbsUp className="h-5 w-5" />
                <h2 className="font-display text-xl font-bold">What CV Prime does well</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {pros.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-2 text-slate-700">
                <ThumbsDown className="h-5 w-5" />
                <h2 className="font-display text-xl font-bold">Where it has limitations</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {cons.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 text-slate-950">
                <Users className="h-5 w-5 text-brand" />
                <h2 className="font-display text-xl font-bold">CV Prime is for you if…</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {forYou.map((f) => (
                  <li key={f} className="flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 text-slate-950">
                <Users className="h-5 w-5 text-slate-400" />
                <h2 className="font-display text-xl font-bold">It may not be for you if…</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {notForYou.map((f) => (
                  <li key={f} className="flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing strip */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-5 rounded-3xl border border-slate-200 bg-white p-8 sm:flex-row sm:items-center">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
            <BadgeIndianRupee className="h-6 w-6" />
          </span>
          <div>
            <h2 className="font-display text-xl font-bold text-slate-950">Pricing in one line</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Free to start (3 PDF exports, full ATS scoring, AI rewrites). Lifetime Pro is a one-time ₹999 — unlimited exports, no watermark, all premium templates. No subscription, ever. See the{' '}
              <Link href="/pricing" className="font-semibold text-brand underline-offset-4 hover:underline">full pricing page</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">CV Prime review — FAQ</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
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
          <h2 className="font-display text-lg font-bold text-slate-900">Compare & explore</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/pricing', label: 'Pricing' },
              { href: '/best-ai-resume-builder-india-2026', label: 'Best AI resume builders India 2026' },
              { href: '/lifetime-resume-builder-india', label: 'Lifetime ₹999 plan' },
              { href: '/cv-prime-vs-zety', label: 'CV Prime vs Zety' },
              { href: '/cv-prime-vs-resume-io', label: 'CV Prime vs Resume.io' },
              { href: '/cv-prime-vs-canva', label: 'CV Prime vs Canva' },
              { href: '/cv-prime-vs-rezi', label: 'CV Prime vs Rezi' },
              { href: '/ai-resume-builder', label: 'AI resume builder' },
              { href: '/ats-score-checker', label: 'Free ATS score checker' },
              { href: '/about', label: 'About CV Prime' },
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">See for yourself — free</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            The free plan lets you tailor a resume and check your ATS score before paying anything. Decide based on your own results.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Try CV Prime free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Try CV Prime free" message="Tailor a resume and check your ATS score free — then decide" />
    </main>
  );
}
