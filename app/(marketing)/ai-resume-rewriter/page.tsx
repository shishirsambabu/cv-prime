import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Wand2, Zap, Quote, ShieldCheck, Sparkles } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'AI Resume Rewriter — Rewrite Weak Bullets into Strong Ones | CV Prime',
  description:
    'Turn vague, duties-based bullet points into sharp, quantified, recruiter-ready lines with CV Prime\'s AI resume rewriter. Rewrite your whole resume or a single bullet — without inventing facts. Free to start.',
  alternates: { canonical: 'https://cv-prime.in/ai-resume-rewriter' },
  keywords: [
    'ai resume rewriter',
    'resume bullet point rewriter ai',
    'rewrite my resume ai',
    'ai resume bullet rewriter',
    'resume rewording tool',
    'improve resume bullets ai',
    'ai cv rewriter',
    'resume bullet generator',
    'rewrite resume bullet points',
    'ai resume editor',
  ],
  openGraph: {
    title: 'AI Resume Rewriter — Rewrite Weak Bullets into Strong Ones | CV Prime',
    description:
      'Rewrite vague resume bullets into sharp, quantified, recruiter-ready lines with AI — without inventing facts. Free to start.',
    url: 'https://cv-prime.in/ai-resume-rewriter',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI resume rewriter — CV Prime' }],
  },
};

const beforeAfter = [
  {
    before: 'Responsible for managing the social media accounts of the company.',
    after: 'Grew Instagram and LinkedIn following 3.2× to 48K in 8 months, lifting inbound leads 27% through a weekly content calendar.',
  },
  {
    before: 'Worked on the backend of the payments system.',
    after: 'Built and shipped 12 payment-gateway APIs handling ₹40Cr/month, cutting transaction failure rate from 4.1% to 0.9%.',
  },
  {
    before: 'Helped the team with testing and bug fixing.',
    after: 'Owned regression testing for 3 release cycles, automating 180+ test cases and reducing production bugs by 35%.',
  },
  {
    before: 'Did data analysis and made reports for management.',
    after: 'Delivered weekly revenue dashboards in Power BI for a 9-region sales org, surfacing a leak that recovered ₹1.2Cr in churned accounts.',
  },
];

const rewriteModes = [
  { icon: Zap, title: 'Whole-resume rewrite', desc: 'Run every experience bullet through the rewriter at once — each is rebuilt with a strong action verb, the work you actually did, and a quantified outcome where one exists.' },
  { icon: Quote, title: 'Single-bullet rewrite', desc: 'Stuck on one stubborn line? Rewrite it in isolation and pick from variations until it reads the way you want — no need to touch the rest of the resume.' },
  { icon: Sparkles, title: 'JD-aware rewrite', desc: 'Paste a job description and the rewriter aligns your bullets to that role\'s language and priorities, so the rewrite also lifts your keyword match.' },
  { icon: ShieldCheck, title: 'Fact-safe rewrite', desc: 'The AI is hard-constrained never to add companies, dates, titles, metrics, or skills that are not in your original. It rewrites how you say it — never invents what you did.' },
];

const principles = [
  { title: 'Lead with an action verb', body: 'Every rewritten bullet starts with a strong verb — Built, Led, Cut, Shipped, Grew — instead of "Responsible for" or "Worked on", which signal passive duties rather than ownership.' },
  { title: 'Quantify the outcome', body: 'Wherever your input implies a result, the rewriter surfaces a metric — percentage, rupee value, time saved, scale — because recruiters and ATS both weight quantified impact far higher than tasks.' },
  { title: 'Cut filler, keep signal', body: 'Vague qualifiers and corporate padding are stripped so each line is tight and scannable in the 6–10 seconds a recruiter spends on the first pass.' },
  { title: 'Match the seniority', body: 'Junior bullets emphasise execution and learning; senior bullets emphasise ownership, scope, and business impact — the rewriter matches the level you\'re targeting.' },
];

const faqs = [
  {
    q: 'What does an AI resume rewriter do?',
    a: 'An AI resume rewriter takes your existing bullet points and rewrites them to be stronger — leading with action verbs, adding quantified outcomes, cutting filler, and matching the language recruiters and ATS systems reward. CV Prime\'s rewriter works on your whole resume at once or a single bullet at a time, and can align the rewrite to a specific job description so it also improves your keyword match.',
  },
  {
    q: 'Will the AI invent achievements or metrics I didn\'t have?',
    a: 'No. CV Prime\'s rewriter is explicitly constrained never to fabricate companies, dates, job titles, metrics, or skills. It only reframes and strengthens the information you provide. Where a bullet implies a result but you have not given a number, the rewriter leaves a clearly marked placeholder for you to fill in with your real figure — it does not make one up.',
  },
  {
    q: 'How is this better than rewriting bullets in ChatGPT?',
    a: 'A general chatbot has no view of your full resume, no ATS scoring, and no resume-specific formatting — and it tends to invent impressive-sounding metrics. CV Prime\'s rewriter works inside your actual resume, keeps every other section intact, enforces the no-fabrication rule, and lets you re-score the result against a job description to confirm the rewrite actually improved your match before you export.',
  },
  {
    q: 'Can I rewrite just one bullet instead of the whole resume?',
    a: 'Yes. You can rewrite a single bullet in isolation and choose from several variations, or run the whole resume through at once. This is useful when most of your resume is strong but a few lines are dragging it down, or when you want to keep specific wording you are attached to.',
  },
  {
    q: 'Does the rewriter work for freshers with little experience?',
    a: 'Yes. For freshers, the rewriter focuses on turning academic projects, internships, and responsibilities into outcome-oriented bullets — for example reframing "made a college project on machine learning" into a specific, quantified line about what you built and what it achieved. It is one of the most effective ways for freshers to make a thin resume read as substantial without exaggerating.',
  },
  {
    q: 'Is the AI resume rewriter free?',
    a: 'Yes. You can rewrite bullets and export your resume on the free plan, which includes 3 PDF exports and full ATS scoring. Lifetime Pro (₹999 one-time, no subscription) unlocks unlimited rewrites and exports — useful when you are tailoring and rewriting for many roles.',
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
    { '@type': 'ListItem', position: 2, name: 'AI Resume Rewriter', item: 'https://cv-prime.in/ai-resume-rewriter' },
  ],
};

export default function AIResumeRewriterPage(): JSX.Element {
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
            <Wand2 className="h-4 w-4" />
            AI resume rewriter — no fabrication
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Rewrite weak resume bullets into strong ones — with AI
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            &quot;Responsible for managing the team&quot; becomes &quot;Led a 6-person team to ship X, cutting Y by 30%.&quot; CV Prime&apos;s AI rewrites your whole resume or a single bullet — sharper verbs, quantified outcomes, recruiter-ready — without inventing a single fact.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Rewrite my resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/resume-tips/resume-bullet-points" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              How to write better bullets
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free · Whole-resume or single-bullet · No invented facts</p>
        </div>
      </section>

      {/* Before / after */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Before and after the rewrite</h2>
            <p className="mt-4 text-slate-400">Same real experience — rewritten to read like impact, not duties</p>
          </div>
          <div className="mt-12 space-y-5">
            {beforeAfter.map((row) => (
              <div key={row.before} className="grid gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-sm sm:grid-cols-2 sm:gap-5">
                <div className="rounded-xl bg-red-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-red-500">Before</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{row.before}</p>
                </div>
                <div className="rounded-xl bg-green-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-green-600">After</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{row.after}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-400">Illustrative rewrites. The AI only quantifies outcomes you provide — it never invents numbers.</p>
        </div>
      </section>

      {/* Rewrite modes */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Four ways to rewrite</h2>
            <p className="mt-4 text-slate-400">From a one-line fix to a full resume overhaul</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {rewriteModes.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="rounded-2xl bg-white/[0.04] p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{c.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">The rules every rewrite follows</h2>
            <p className="mt-4 text-slate-400">The same principles a professional resume writer applies — at scale</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">AI resume rewriter — FAQ</h2>
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
          <h2 className="font-display text-lg font-bold text-white">Related tools & guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/tailor-resume-to-job-description', label: 'Tailor resume to a JD' },
              { href: '/ats-score-checker', label: 'Free ATS score checker' },
              { href: '/resume-job-match-score', label: 'Resume job match score' },
              { href: '/ai-resume-builder', label: 'AI resume builder' },
              { href: '/resume-tips/resume-bullet-points', label: 'How to write resume bullet points' },
              { href: '/resume-tips/action-verbs', label: 'Resume action verbs' },
              { href: '/resume-tips/quantifying-achievements', label: 'Quantifying achievements' },
              { href: '/resume-optimizer', label: 'Resume optimizer' },
              { href: '/resume-examples', label: 'Resume examples by role' },
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Make every bullet earn its place</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Rewrite your resume into sharp, quantified, recruiter-ready lines in minutes — without inventing facts. Free to start.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Rewrite my resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Rewrite my resume free" message="Turn weak bullets into sharp, quantified lines with AI — free" />
    </main>
  );
}
