import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Cpu, Code2, GitBranch, CheckCircle2, Boxes } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Resume Template for Engineers (India) — Technical & Developer CVs | CV Prime',
  description:
    'Engineering and developer resume templates for India — skills-first, project-led, and ATS-readable. Built for software, data, and core engineering roles. Fill with AI, match the JD, and export clean. Free to start.',
  alternates: { canonical: 'https://cv-prime.in/resume-template-for-engineers' },
  keywords: [
    'resume template for engineers india',
    'developer resume template india',
    'software engineer resume template',
    'engineering resume template india',
    'technical resume template',
    'developer cv template india',
    'engineer cv format india',
    'programmer resume template',
    'it engineer resume template',
    'tech resume template india',
  ],
  openGraph: {
    title: 'Resume Template for Engineers (India) — Technical & Developer CVs | CV Prime',
    description:
      'Skills-first, project-led, ATS-readable engineering and developer resume templates for India. Free to start.',
    url: 'https://cv-prime.in/resume-template-for-engineers',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume template for engineers India — CV Prime' }],
  },
};

const templates = [
  { name: 'Technical', tier: 'Pro', audience: 'Engineering, data, product', why: 'A dense, skills-first layout designed for engineering, data, security, and systems work — surfaces your stack and impact where recruiters and ATS look first.' },
  { name: 'Modern', tier: 'Free', audience: 'Product & startup engineering', why: 'A crisp, contemporary layout that fits product-company and startup engineering roles — clean, current, and fully ATS-readable.' },
];

const mustHave = [
  { icon: Code2, title: 'A real technical skills section', body: 'Languages, frameworks, databases, cloud, and tools — grouped and spelled exactly as the JD lists them. This is the densest keyword zone the ATS scans for engineers.' },
  { icon: GitBranch, title: 'Projects with stack + outcome', body: 'Each project should name the tech used and a measurable result (latency cut, users served, cost saved). For freshers, projects often matter more than experience.' },
  { icon: Cpu, title: 'Impact-driven experience bullets', body: 'Not "worked on the backend" but "built 12 payment APIs handling ₹40Cr/month, cutting failure rate to 0.9%." Engineering recruiters reward measurable systems impact.' },
  { icon: Boxes, title: 'Links that prove it', body: 'GitHub, portfolio, or live project URLs in the contact section — placed as plain text so the ATS reads them, and reviewed by recruiters before interviews.' },
];

const stack = [
  'Python / Java / Go / JavaScript', 'React / Node.js / Spring Boot', 'AWS / GCP / Azure',
  'Kubernetes / Docker / CI-CD', 'SQL / NoSQL / Kafka', 'System Design / Microservices',
  'Machine Learning / Data Pipelines', 'REST / gRPC / GraphQL',
];

const tips = [
  'Lead with a skills section — engineering ATS screens hardest on tech keywords',
  'Mirror the JD\'s exact spelling: "Node.js" not "NodeJS", "PostgreSQL" not "Postgres"',
  'Quantify systems impact: scale, latency, uptime, cost, throughput',
  'Freshers: put projects and internships above a thin experience section',
  'Keep it single-column so the dense technical content still parses cleanly',
];

const faqs = [
  {
    q: 'What is the best resume template for engineers in India?',
    a: 'For most engineers, CV Prime\'s Technical template is the best fit — a dense, skills-first layout that surfaces your tech stack, projects, and systems impact exactly where engineering recruiters and ATS systems look. For product-company and startup roles where a cleaner, more contemporary look fits, the Modern template works well and is free. Both are single-column and ATS-readable, so your technical keywords get parsed correctly instead of being lost in a multi-column design.',
  },
  {
    q: 'What should a developer or software engineer resume include?',
    a: 'A strong developer resume includes a technical skills section (languages, frameworks, databases, cloud, tools), work experience with quantified systems impact, projects that name the stack and the measurable outcome, education, and links to GitHub or a portfolio. The skills section and project outcomes carry the most weight, both for ATS keyword matching and for the engineering manager reviewing you. CV Prime structures all of this and tailors the keywords to each job description.',
  },
  {
    q: 'Is the engineering resume template free?',
    a: 'The Modern template is free and works well for many engineering roles, and the free plan includes 3 clean PDF exports plus full ATS scoring and AI rewrites. The dedicated Technical template and unlimited watermark-free exports unlock with a one-time ₹999 Lifetime Pro upgrade. There is no subscription.',
  },
  {
    q: 'How do I make my engineering resume pass the ATS?',
    a: 'Use a single-column template, put a detailed technical skills section near the top, and mirror the exact keywords from the job description — engineering ATS configurations screen heavily on specific languages, frameworks, and tools. Avoid multi-column or graphic templates that scramble the parse. Then check your ATS score against the JD before applying. CV Prime does the keyword matching and scoring automatically so you can confirm you pass.',
  },
  {
    q: 'Should freshers and final-year engineering students use this template?',
    a: 'Yes. For engineering freshers, the Technical and Modern templates are ideal because they let projects and skills lead, which is where freshers have the most to show. Put academic and personal projects above a thin work-experience section, name the stack and outcome for each, and include your GitHub. CV Prime helps freshers turn rough project descriptions into quantified, recruiter-ready bullets without inventing experience.',
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
    { '@type': 'ListItem', position: 2, name: 'Resume Template for Engineers', item: 'https://cv-prime.in/resume-template-for-engineers' },
  ],
};

export default function ResumeTemplateForEngineersPage(): JSX.Element {
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
            <Cpu className="h-4 w-4" />
            Engineering · Developer · ATS-ready · India
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Resume templates built for engineers and developers
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Skills-first, project-led, and parser-safe — the resume structure engineering recruiters and ATS systems actually reward. Surface your stack, quantify your impact, match the JD, and export clean.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Build an engineering resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/resume-builder/software-engineer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              Software engineer resume
            </Link>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Templates for technical roles</h2>
            <p className="mt-4 text-slate-400">Layouts that put your stack and impact first</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {templates.map((t) => (
              <div key={t.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold text-white">{t.name}</h3>
                  <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${t.tier === 'Pro' ? 'bg-slate-950 text-white' : 'bg-cyan-500/10 text-cyan-200'}`}>{t.tier}</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-300">{t.audience}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{t.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Must-have sections */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">What an engineering resume must have</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {mustHave.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="rounded-2xl bg-white/[0.04] p-6 shadow-sm">
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

      {/* Stack keywords */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Technical keywords ATS screens for</h2>
          <p className="mt-3 text-slate-400">Mirror the JD&apos;s exact terms — CV Prime checks your resume against them automatically.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((kw) => (
              <span key={kw} className="rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-sm font-semibold text-brand">{kw}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Engineering resume tips that move the needle</h2>
          <div className="mt-10 space-y-3">
            {tips.map((t) => (
              <div key={t} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-sm leading-6 text-slate-300">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Engineering resume template — FAQ</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
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
          <h2 className="font-display text-lg font-bold text-white">Related templates & guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/templates', label: 'All templates' },
              { href: '/software-engineer-resume', label: 'Software engineer resume' },
              { href: '/resume-builder/software-engineer', label: 'SDE resume builder' },
              { href: '/resume-builder/full-stack-developer', label: 'Full-stack developer resume' },
              { href: '/resume-builder/data-engineer', label: 'Data engineer resume' },
              { href: '/it-resume-builder', label: 'IT resume builder' },
              { href: '/modern-resume-template-india', label: 'Modern resume template' },
              { href: '/ats-resume-template', label: 'ATS resume template' },
              { href: '/ats-score-checker', label: 'Free ATS score checker' },
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Ship a resume that compiles with the ATS</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Build a skills-first engineering resume, match it to the JD, and export clean. Free to start.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Build an engineering resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build an engineering resume" message="Skills-first, ATS-ready resume templates for engineers — free" />
    </main>
  );
}
