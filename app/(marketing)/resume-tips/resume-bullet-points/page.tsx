import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'How to Write Resume Bullet Points — Formula + 20 Examples | CV Prime',
  description:
    'Write resume bullet points that get interviews. Learn the exact formula, see 20 before/after examples across roles, and use AI to rewrite your bullets — free.',
  alternates: { canonical: 'https://cv-prime.in/resume-tips/resume-bullet-points' },
  keywords: [
    'resume bullet points',
    'how to write resume bullets',
    'resume bullet point examples',
    'strong resume bullets',
    'resume bullets india',
    'how to write bullets on resume',
    'resume experience bullets',
    'resume achievement bullets',
    'impact bullets resume',
    'star method resume bullets',
  ],
  openGraph: {
    title: 'How to Write Resume Bullet Points — 20 Examples | CV Prime',
    description: 'The exact formula for resume bullets that pass ATS and impress recruiters. 20 before/after examples across roles.',
    url: 'https://cv-prime.in/resume-tips/resume-bullet-points',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume Bullet Points — CV Prime' }],
  },
};

const formula = {
  name: 'The CAR formula (Context → Action → Result)',
  parts: [
    { label: 'Context (optional, 3–5 words)', desc: 'What was the situation or challenge? (brief)', example: '"For a startup with 200% YoY growth..."' },
    { label: 'Action (required)', desc: 'What did YOU specifically do? Start with a strong action verb.', example: '"Built a real-time inventory management system..."' },
    { label: 'Result (required)', desc: 'What was the measurable outcome?', example: '"...reducing stockouts by 60% and saving ₹18L annually."' },
  ],
  combined: 'Built a real-time inventory management system using Node.js and Redis for a high-growth e-commerce startup, reducing stockouts by 60% and saving ₹18L annually in lost sales.',
};

const beforeAfter = [
  { role: 'Software Engineer', weak: 'Worked on backend systems for e-commerce platform', strong: 'Re-architected product catalogue service from monolith to microservices, reducing p99 latency from 1.2s to 180ms and supporting 10x traffic during sale events.' },
  { role: 'Product Manager', weak: 'Managed product roadmap and worked with engineering', strong: 'Defined and shipped 3-sprint onboarding redesign that improved Day-7 activation from 31% to 54%, directly contributing ₹1.4Cr in incremental annual subscription revenue.' },
  { role: 'Data Analyst', weak: 'Did analysis for marketing and operations teams', strong: 'Built cohort analysis model in Python that identified ₹2.1Cr in recoverable revenue from lapsed customers; led to targeted re-engagement campaign with 22% conversion rate.' },
  { role: 'Marketing Manager', weak: 'Ran Google and Meta ad campaigns', strong: 'Scaled Google Ads spend from ₹8L to ₹32L/month while reducing CPA by 34% over 6 months through granular bid strategy restructuring and creative iteration.' },
  { role: 'HR Manager', weak: 'Handled end-to-end recruitment for the company', strong: 'Led talent acquisition for 120+ hires across 3 business units in FY24, achieving an average 22-day time-to-hire — 43% below industry benchmark — at 18% reduced cost-per-hire.' },
  { role: 'Finance Analyst', weak: 'Prepared MIS reports for management', strong: 'Built automated MIS reporting framework in Excel + Power Query that reduced monthly close cycle from 8 days to 2.5 days, saving 22 analyst-hours per month.' },
  { role: 'UX Designer', weak: 'Worked on redesign of checkout flow', strong: 'Led end-to-end redesign of 7-step checkout flow (from discovery to launch in 6 weeks), reducing cart abandonment from 68% to 49% — generating an estimated ₹3.2Cr additional annual revenue.' },
  { role: 'Sales Executive', weak: 'Responsible for B2B sales and account management', strong: 'Exceeded FY24 quota by 138% — closed 14 enterprise deals worth ₹4.2Cr ARR, including the company\'s largest single contract (₹72L) with a Fortune 500 FMCG client.' },
  { role: 'DevOps Engineer', weak: 'Set up CI/CD pipelines and managed infrastructure', strong: 'Implemented GitOps-based CI/CD pipeline using ArgoCD and Kubernetes, reducing deployment time from 45 minutes to 8 minutes and cutting production incidents by 40% through automated rollbacks.' },
  { role: 'Business Analyst', weak: 'Gathered requirements from stakeholders', strong: 'Led requirements elicitation for core banking migration project (₹150Cr budget), producing 200+ user stories and resolving 47 conflicting stakeholder requirements — project delivered on time with zero post-launch P1 defects.' },
];

const commonMistakes = [
  { mistake: 'Starting with "Responsible for" or "Duties included"', fix: 'Start with an action verb: Led, Built, Developed, Analysed, Negotiated.' },
  { mistake: 'No measurable result', fix: 'Every bullet should answer "so what?" — add a %, ₹, time saved, users impacted, or revenue figure.' },
  { mistake: 'Too long (3+ lines)', fix: 'One bullet = one achievement. If it takes 3 lines, split it into two bullets or cut the context.' },
  { mistake: 'Team achievement without your role', fix: '"Team reduced churn by 20%" tells recruiters nothing. Say what you specifically did: "Designed the re-engagement flow that reduced churn by 20%."' },
  { mistake: 'Using first person ("I built", "I managed")', fix: 'Omit pronouns entirely. "Built a system that..." not "I built a system that..."' },
  { mistake: 'Listing identical-sounding bullets for every role', fix: 'Each role should have 3–5 bullets covering different dimensions: impact, scale, technical scope, leadership, and collaboration.' },
];

const faqs = [
  {
    q: 'How many bullet points per job on a resume?',
    a: '3–5 bullets per role is the standard. Your most recent and most relevant role can have up to 6 bullets. Older or less relevant roles should have 2–3. Never write 1 bullet (too thin) or 8+ bullets (too dense) for any single role.',
  },
  {
    q: 'Do all resume bullets need a number or metric?',
    a: 'Aim for 70–80% of bullets to have a number. For some achievements (founding a team, introducing a process, winning an award), a number is not always available — that is fine. But if you have a metric available and are not using it, that is a missed opportunity. Use estimates if exact numbers are unavailable: "approximately 30%", "~200 users", "₹5L+ in savings."',
  },
  {
    q: 'How long should a resume bullet point be?',
    a: 'One to two lines (25–40 words). If a bullet runs to 3+ lines, split it into two bullets or edit ruthlessly. Recruiters scan bullets in under 2 seconds — a long bullet loses them before they finish reading.',
  },
  {
    q: 'Should I use the STAR method for resume bullets?',
    a: 'A simplified version — yes. STAR (Situation, Task, Action, Result) works well for interview answers but is too verbose for bullets. On a resume, use CAR: Context (optional, brief) → Action (what you did) → Result (quantified outcome). The full STAR format is for interviews.',
  },
  {
    q: 'What is the most common resume bullet mistake?',
    a: 'Writing duty descriptions instead of achievement statements. "Responsible for managing client relationships" describes a job. "Retained 94% of a ₹12Cr client portfolio by implementing quarterly business reviews and proactive escalation protocols" describes an achievement. The difference in recruiter perception is enormous.',
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
    { '@type': 'ListItem', position: 2, name: 'Resume Tips', item: 'https://cv-prime.in/resume-tips' },
    { '@type': 'ListItem', position: 3, name: 'Resume Bullet Points', item: 'https://cv-prime.in/resume-tips/resume-bullet-points' },
  ],
};

export default function ResumeBulletPointsPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/resume-tips" className="hover:text-white">Resume Tips</Link><span>/</span>
            <span className="text-white">Resume Bullet Points</span>
          </nav>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            How to write resume bullet points — the formula + 20 real examples
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Your bullet points are the most important part of your resume. Recruiters spend 6 seconds on initial review — and 80% of that time is reading bullets. Learn the exact formula and see how it looks across 10 roles.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong transition">
            Rewrite my bullets with AI <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Formula */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">The CAR formula for resume bullets</h2>
          <div className="mt-8 space-y-4">
            {formula.parts.map((part) => (
              <div key={part.label} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 font-display text-sm font-bold text-brand">{part.label.charAt(0)}</div>
                <div>
                  <p className="font-display font-bold text-white">{part.label}</p>
                  <p className="mt-1 text-sm text-slate-400">{part.desc}</p>
                  <p className="mt-2 text-sm italic text-slate-300">{part.example}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-brand/20 bg-brand/5 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-brand">Combined result</p>
            <p className="mt-2 text-sm leading-6 font-medium text-slate-200">&ldquo;{formula.combined}&rdquo;</p>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">20 resume bullet rewrites — before & after</h2>
          <p className="mt-3 text-slate-400">Two examples from each of 10 roles — the weak original and the improved version</p>
          <div className="mt-8 space-y-4">
            {beforeAfter.map((item) => (
              <div key={item.weak} className="rounded-2xl bg-white/[0.04] p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-brand mb-3">{item.role}</p>
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wide text-red-600">❌ Before</p>
                    <p className="text-sm text-red-800">{item.weak}</p>
                  </div>
                  <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wide text-green-700">✅ After</p>
                    <p className="text-sm font-medium text-green-900">{item.strong}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mistakes */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">6 resume bullet mistakes to fix today</h2>
          <div className="mt-8 space-y-4">
            {commonMistakes.map((item, i) => (
              <div key={item.mistake} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 font-display text-sm font-bold text-red-600">{i + 1}</span>
                <div>
                  <p className="font-semibold text-white">❌ {item.mistake}</p>
                  <p className="mt-1 text-sm text-slate-300">✅ Fix: {item.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Resume bullet points — FAQ</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white/[0.04] p-5 shadow-sm">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-12">
        <div className="mx-auto max-w-5xl flex flex-wrap gap-3">
          {[
            { href: '/resume-tips', label: '← All resume tips' },
            { href: '/resume-tips/action-verbs', label: 'Action verbs list' },
            { href: '/resume-tips/quantifying-achievements', label: 'Quantifying achievements' },
            { href: '/resume-tips/work-experience', label: 'Work experience guide' },
            { href: '/resume-builder', label: 'AI resume builder' },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 hover:border-brand hover:text-brand transition">{l.label}</Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">AI rewrites every weak bullet — with real outcomes</h2>
          <p className="mt-4 text-slate-300">Paste your resume and a JD. CV Prime&apos;s AI turns every duty statement into a CAR-format achievement bullet. Free to start.</p>
          <Link href="/signup?next=/ai-cv" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Rewrite my bullets free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <StickyCTA label="Rewrite my bullets free" message="AI rewrites weak duty bullets into outcome-driven achievements" />
    </main>
  );
}
