import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Search, Gauge, Calculator, Zap, Lock, Wand2, FileCheck2, Linkedin, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Resume Tools — No Login, Instant, India-Ready | CV Prime',
  description:
    'Free resume tools that run in your browser with no signup: ATS keyword matcher, resume strength analyzer, and CGPA-to-percentage calculator. Instant, private, and free — built for India.',
  alternates: { canonical: 'https://cv-prime.in/tools' },
  keywords: [
    'free resume tools',
    'free resume tools india',
    'free ats tools',
    'resume tools no login',
    'free career tools india',
    'resume checker tools free',
    'cv tools free',
  ],
  openGraph: {
    title: 'Free Resume Tools — No Login, Instant, India-Ready | CV Prime',
    description:
      'ATS keyword matcher, resume strength analyzer, and CGPA-to-percentage calculator — free, instant, no signup. Built for India.',
    url: 'https://cv-prime.in/tools',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Free resume tools — CV Prime' }],
  },
};

const tools = [
  {
    icon: Search,
    href: '/tools/ats-keyword-matcher',
    title: 'ATS keyword matcher',
    desc: 'Paste your resume and a job description to see your keyword match score and the exact terms you\'re missing.',
    tag: 'Most popular',
  },
  {
    icon: Gauge,
    href: '/tools/resume-strength-analyzer',
    title: 'Resume strength analyzer',
    desc: 'Score your resume 0–100 on action verbs, quantified impact, filler words, sections, and contact info — with fixes.',
    tag: 'Instant score',
  },
  {
    icon: Wand2,
    href: '/tools/resume-bullet-analyzer',
    title: 'Resume bullet analyzer',
    desc: 'Paste your bullets for instant per-line feedback on action verbs, metrics, length, and filler.',
    tag: 'Per-bullet',
  },
  {
    icon: FileCheck2,
    href: '/tools/cover-letter-checker',
    title: 'Cover letter checker',
    desc: 'Score your cover letter 0–100 on opening, structure, quantified proof, call to action, and clichés.',
    tag: 'Instant score',
  },
  {
    icon: Linkedin,
    href: '/tools/linkedin-character-counter',
    title: 'LinkedIn character counter',
    desc: 'Live count for LinkedIn headline (220), about (2,600), post (3,000) and more — with over-limit warnings.',
    tag: 'For LinkedIn',
  },
  {
    icon: Calculator,
    href: '/tools/cgpa-to-percentage',
    title: 'CGPA to percentage',
    desc: 'Convert CGPA to percentage (and back) using CBSE, VTU, or a custom formula — for your resume and applications.',
    tag: 'For students',
  },
];

const aiTools = [
  {
    icon: Gauge,
    href: '/tools/ai-ats-score',
    title: 'AI ATS score checker',
    desc: 'Paste your resume and a job description for an AI ATS match score (0–100), the keywords you\'re missing, and concrete fixes.',
  },
  {
    icon: Wand2,
    href: '/tools/ai-resume-tailor',
    title: 'AI resume tailor',
    desc: 'Tailor your resume to any job description — a rewritten summary, outcome-led bullets, and the keywords to weave in.',
  },
  {
    icon: Sparkles,
    href: '/tools/ai-bullet-rewriter',
    title: 'AI bullet rewriter',
    desc: 'Turn weak, duty-based bullets into stronger, outcome-driven, ATS-friendly lines — two rewrites each.',
  },
  {
    icon: FileCheck2,
    href: '/tools/ai-cover-letter',
    title: 'AI cover letter generator',
    desc: 'A tailored 180–250 word cover letter built from your resume and the job description, in your chosen tone.',
  },
];

const faqs = [
  {
    q: 'Are these resume tools really free with no login?',
    a: 'Yes. Every tool on this page is free, requires no signup or credit card, and runs entirely in your browser — your resume, job descriptions, and inputs are never uploaded or stored. Use them as many times as you like.',
  },
  {
    q: 'Do these tools use AI?',
    a: 'No — these are fast, rule-based utilities that run on your device, which is why they are instant and free. CV Prime\'s AI features (bullet rewriting, full ATS scoring, JD tailoring) live inside your account and run on your own OpenRouter key. The free tools here help you diagnose; the AI tools help you fix.',
  },
  {
    q: 'Which tool should I use first?',
    a: 'If you have a target job, start with the ATS keyword matcher to see your match against that job description. To improve the resume itself, use the resume strength analyzer for an instant 0–100 quality score with fixes. Students converting grades for applications can use the CGPA-to-percentage calculator.',
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
  name: 'Free CV Prime resume tools',
  itemListElement: tools.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.title,
    url: `https://cv-prime.in${t.href}`,
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Free Tools', item: 'https://cv-prime.in/tools' },
  ],
};

export default function ToolsHubPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <Zap className="h-4 w-4" />
            Free · No login · Runs in your browser
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Free resume tools
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Instant, private, no-signup tools to check and improve your resume — built for the Indian job market. Diagnose for free here, then fix with CV Prime&apos;s AI.
          </p>
        </div>
      </section>

      {/* Tools grid */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-3">
            {tools.map((t) => {
              const Icon = t.icon;
              return (
                <Link key={t.href} href={t.href} className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-brand hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-white/[0.04] px-2.5 py-0.5 text-xs font-bold text-slate-400 ring-1 ring-slate-200">{t.tag}</span>
                  </div>
                  <h2 className="mt-4 font-display text-xl font-bold text-white group-hover:text-brand">{t.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-300">{t.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">Open tool <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></span>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-3 text-center text-sm text-slate-400">
            <span className="inline-flex items-center gap-2"><Lock className="h-4 w-4 text-brand" /> Nothing uploaded or stored</span>
            <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-brand" /> Instant, unlimited use</span>
          </div>
        </div>
      </section>

      {/* AI tools (login + your key) */}
      <section className="border-t border-white/10 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
              <Sparkles className="h-3.5 w-3.5" />
              AI tools · login + your key
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
              AI tools that run on <span className="text-gradient-warm">your key</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-400">
              Connect a free OpenRouter key once. These run the AI on your key — so they stay free for you, and cost us nothing.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {aiTools.map((t) => {
              const Icon = t.icon;
              return (
                <Link key={t.href} href={t.href} className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-300/40 hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-500/20 text-cyan-200 ring-1 ring-white/10">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-white/[0.06] px-2.5 py-0.5 text-xs font-bold text-cyan-200 ring-1 ring-white/10">AI · your key</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-white group-hover:text-cyan-200">{t.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-300">{t.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cyan-300">Open tool <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">Free tools — FAQ</h2>
          <div className="mt-8 space-y-5">
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
      <section className="border-t border-white/10 px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-white">More from CV Prime</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/resume-tools', label: 'All resume tools & guides' },
              { href: '/embed', label: 'Embed these tools on your site' },
              { href: '/ats-score-checker', label: 'Full AI ATS score' },
              { href: '/ai-resume-builder', label: 'AI resume builder' },
              { href: '/templates', label: 'ATS-ready templates' },
              { href: '/resume-examples', label: 'Resume examples by role' },
              { href: '/pricing', label: 'Pricing' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-brand hover:text-brand">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">Free to diagnose. AI to fix.</h2>
          <p className="mt-4 text-slate-300">
            Use the free tools, then let CV Prime&apos;s AI rewrite and tailor your resume and score your ATS match. Free to start.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
            Try CV Prime free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
