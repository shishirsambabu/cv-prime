import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Trophy, CheckCircle2, Search, IndianRupee, ScanLine, LayoutTemplate } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Best AI Resume Builder in India (2026) — Top 8 Compared | CV Prime',
  description:
    'The best AI resume builders for India in 2026, compared on ATS scoring, JD tailoring, pricing, and India fit. See how CV Prime, Zety, Resume.io, Enhancv, Rezi, Novoresume, Canva, and Naukri stack up.',
  alternates: { canonical: 'https://cv-prime.in/best-ai-resume-builder-india-2026' },
  keywords: [
    'best resume builder india 2026',
    'best ai resume builder india',
    'best ai cv tool india 2026',
    'best resume builder india',
    'top resume builder india',
    'best ats resume builder india',
    'best cv maker india',
    'best ai resume builder',
    'best online resume builder india',
    'cv builder with ai score india',
  ],
  openGraph: {
    title: 'Best AI Resume Builder in India (2026) — Top 8 Compared',
    description:
      'Top AI resume builders for India in 2026 compared on ATS scoring, tailoring, pricing, and India fit.',
    url: 'https://cv-prime.in/best-ai-resume-builder-india-2026',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Best AI resume builder India 2026' }],
  },
};

const criteria = [
  { icon: ScanLine, title: 'Real ATS scoring', desc: 'Does it score your resume 0–100 against a specific job description and show the missing keywords — or just hand you a template?' },
  { icon: Search, title: 'AI tailoring quality', desc: 'Can it rewrite your bullets and inject JD keywords without fabricating experience, and re-score the result?' },
  { icon: IndianRupee, title: 'India-friendly pricing', desc: 'INR pricing, Indian payment methods, and ideally a one-time option instead of a recurring USD subscription.' },
  { icon: LayoutTemplate, title: 'ATS-safe templates', desc: 'Single-column, machine-readable templates that parse cleanly — not graphical multi-column designs that break parsers.' },
];

const ranked = [
  {
    rank: 1,
    name: 'CV Prime',
    tag: 'Best overall for India',
    summary: 'Built specifically for the Indian job market. Genuine 0–100 ATS scoring against a real JD, AI tailoring that does not fabricate experience, and a one-time ₹999 Lifetime Pro instead of a subscription. Generous free plan to verify results before paying.',
    best: 'Indian job seekers who want ATS pass-through and to pay once.',
    href: '/ai-resume-builder',
    isWinner: true,
  },
  {
    rank: 2,
    name: 'Zety',
    tag: 'Large template library',
    summary: 'A long-established builder with many templates and guided content suggestions. Subscription-based and US-oriented, so pricing is recurring and not localised for India. Strong on guidance, lighter on India-specific ATS calibration.',
    best: 'Users who want lots of template choices and step-by-step prompts.',
    href: '/cv-prime-vs-zety',
  },
  {
    rank: 3,
    name: 'Resume.io',
    tag: 'Polished and global',
    summary: 'Clean, well-designed templates and a smooth editor with a global user base. Runs on a recurring subscription and is not tailored to Indian ATS patterns or INR-first pricing.',
    best: 'Users who prioritise a polished editor and global templates.',
    href: '/cv-prime-vs-resume-io',
  },
  {
    rank: 4,
    name: 'Enhancv',
    tag: 'Design-forward',
    summary: 'Distinctive, visually rich resumes with personality sections. Beautiful for design and creative roles, but some layouts are graphic-heavy and the model is a recurring subscription.',
    best: 'Design, creative, and marketing roles where visuals matter.',
    href: '/cv-prime-vs-enhancv',
  },
  {
    rank: 5,
    name: 'Rezi',
    tag: 'ATS-focused',
    summary: 'Strong ATS orientation and keyword tooling. Useful for ATS optimisation, though it is US-centric with credit/subscription pricing rather than India-first INR pricing.',
    best: 'Users who want a dedicated ATS-optimisation workflow.',
    href: '/cv-prime-vs-rezi',
  },
  {
    rank: 6,
    name: 'Novoresume',
    tag: 'Freemium templates',
    summary: 'A clean freemium builder with solid templates, but the free tier is fairly limited and the better features sit behind a recurring subscription. Not India-localised.',
    best: 'Users wanting a simple, clean template to start from.',
    href: '/templates',
  },
  {
    rank: 7,
    name: 'Canva',
    tag: 'Best for visual design',
    summary: 'A general design tool with attractive resume templates. The catch: many are multi-column and graphic-heavy, which frequently break ATS parsing — risky for roles screened by software.',
    best: 'Roles where the resume is reviewed by humans, not an ATS.',
    href: '/cv-prime-vs-canva',
  },
  {
    rank: 8,
    name: 'Naukri Resume',
    tag: 'Bundled with the job portal',
    summary: 'Free with a Naukri profile and convenient if you already apply there, but formatting and ATS tooling are basic, with limited AI tailoring or scoring against a specific JD.',
    best: 'Naukri users who want a quick, basic resume.',
    href: '/resume-builder-india',
  },
];

const faqs = [
  {
    q: 'What is the best AI resume builder in India in 2026?',
    a: 'For Indian job seekers, CV Prime is the best overall choice in 2026 because it combines genuine ATS scoring against a specific job description, AI tailoring that does not fabricate experience, ATS-safe templates, and one-time ₹999 pricing instead of a subscription. Established global tools like Zety, Resume.io, and Enhancv have larger template libraries and longer track records, but charge recurring fees and are not calibrated for Indian ATS patterns. The best choice depends on whether you prioritise India fit and ATS pass-through (CV Prime) or template variety and design (the global tools).',
  },
  {
    q: 'Which resume builder is best for passing the ATS?',
    a: 'The builders that actually score your resume against a specific job description and show your keyword gaps are best for passing the ATS — CV Prime and Rezi both focus here. CV Prime additionally tailors and rewrites your bullets to close the gaps and is calibrated for Indian employers. Design-first tools like Canva can produce great-looking resumes that ironically fail ATS parsing because of multi-column layouts.',
  },
  {
    q: 'Are AI resume builders worth it?',
    a: 'Yes, if the AI does real work: tailoring your resume to each job description, surfacing missing keywords, rewriting weak bullets, and scoring your ATS match. That directly addresses why most qualified candidates get auto-rejected — keyword mismatch. A builder that only offers templates with no scoring or tailoring is worth much less. The highest-value tools combine ATS scoring with AI tailoring, which is exactly what CV Prime is built around.',
  },
  {
    q: 'Which AI resume builder is cheapest in India?',
    a: 'On a total-cost basis, a one-time payment tool is cheapest over any real job search because subscriptions keep charging long after you land a role. CV Prime is free to start and ₹999 once for Lifetime Pro, whereas most global builders charge a recurring monthly fee that adds up to ₹14,000–₹30,000 over a year. Always compare the total cost over the months you will actually use it, not just the first month.',
  },
  {
    q: 'Can I use a free AI resume builder and still pass the ATS?',
    a: 'Yes. CV Prime\'s free plan includes full ATS scoring, AI bullet rewrites, and 3 PDF exports with no card required, which is enough to build and tailor an ATS-ready resume. You only need to pay if you want unlimited exports and premium templates. Many "free" builders, by contrast, let you build but then lock the download behind a subscription.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Best AI Resume Builders in India 2026',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: ranked.map((r) => ({
    '@type': 'ListItem',
    position: r.rank,
    name: r.name,
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Best AI Resume Builder India 2026', item: 'https://cv-prime.in/best-ai-resume-builder-india-2026' },
  ],
};

export default function BestAIResumeBuilderIndiaPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <Trophy className="h-4 w-4" />
            Buyer&apos;s guide · India · 2026
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The best AI resume builders in India for 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            We compared the top resume builders on the four things that actually win interviews in India: ATS scoring, AI tailoring, India-friendly pricing, and ATS-safe templates. Here is how they rank — and how to choose.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Try our #1 pick free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/cv-prime-review" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              Read the CV Prime review
            </Link>
          </div>
        </div>
      </section>

      {/* Criteria */}
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">How we ranked them</h2>
          <p className="mt-3 text-center text-slate-500">Four criteria that decide whether a resume actually gets seen in India</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {criteria.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-slate-950">{c.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ranked list */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">The top 8, ranked</h2>
          <div className="mt-12 space-y-5">
            {ranked.map((r) => (
              <div
                key={r.name}
                className={`rounded-2xl border p-6 shadow-sm ${r.isWinner ? 'border-brand bg-brand/5' : 'border-slate-200 bg-white'}`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-lg font-bold ${r.isWinner ? 'bg-brand text-brand-foreground' : 'bg-slate-100 text-slate-700'}`}>
                    {r.rank}
                  </span>
                  <h3 className="font-display text-xl font-bold text-slate-950">{r.name}</h3>
                  <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${r.isWinner ? 'bg-brand text-brand-foreground' : 'bg-slate-100 text-slate-600'}`}>
                    {r.tag}
                  </span>
                </div>
                <p className="mt-4 leading-7 text-slate-600">{r.summary}</p>
                <p className="mt-3 text-sm text-slate-700"><span className="font-semibold">Best for:</span> {r.best}</p>
                <Link href={r.href} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why #1 */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Why CV Prime takes the top spot for India</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              'Scores your resume 0–100 against a real job description, not a generic template check',
              'AI tailors and rewrites your bullets without inventing experience',
              'One-time ₹999 — no subscription, no auto-renew, nothing to cancel',
              'Calibrated for Indian ATS patterns and credentials (B.Tech, CGPA, CA)',
              'Free plan with full ATS scoring lets you verify results before paying',
              'Job tracker and AI cover letter generator included',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-sm leading-6 text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Best AI resume builder India — FAQ</h2>
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
              { href: '/ai-resume-builder', label: 'AI resume builder' },
              { href: '/cv-prime-review', label: 'CV Prime review' },
              { href: '/ats-resume-builder', label: 'ATS resume builder' },
              { href: '/lifetime-resume-builder-india', label: 'Lifetime ₹999 plan' },
              { href: '/cv-prime-vs-zety', label: 'CV Prime vs Zety' },
              { href: '/cv-prime-vs-resume-io', label: 'CV Prime vs Resume.io' },
              { href: '/cv-prime-vs-canva', label: 'CV Prime vs Canva' },
              { href: '/resume-builder-india', label: 'Resume builder India' },
              { href: '/ats-score-checker', label: 'Free ATS score checker' },
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Skip the shortlist — try the #1 pick</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Build, tailor, and ATS-score your resume free. Upgrade to lifetime Pro for ₹999 only if you want unlimited exports.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Try CV Prime free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Try the #1 pick free" message="India's best-fit AI resume builder — free to start, ₹999 lifetime" />
    </main>
  );
}
