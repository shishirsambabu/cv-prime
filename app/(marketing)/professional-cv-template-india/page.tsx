import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Briefcase, CheckCircle2, Crown, Building2 } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Professional CV Template India — Formal, ATS-Ready Templates | CV Prime',
  description:
    'Professional CV templates for India built for corporate, consulting, finance, and leadership roles. Formal, ATS-readable layouts you fill with AI, tailor to the job, and export clean. Free to start.',
  alternates: { canonical: 'https://cv-prime.in/professional-cv-template-india' },
  keywords: [
    'professional cv template india',
    'professional resume template india',
    'corporate cv template',
    'formal cv template india',
    'professional cv format india',
    'executive cv template india',
    'business cv template',
    'professional resume format india',
    'corporate resume template india',
    'professional cv design india',
  ],
  openGraph: {
    title: 'Professional CV Template India — Formal, ATS-Ready Templates | CV Prime',
    description:
      'Formal, ATS-readable professional CV templates for corporate, consulting, finance, and leadership roles in India. Free to start.',
    url: 'https://cv-prime.in/professional-cv-template-india',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Professional CV template India — CV Prime' }],
  },
};

const templates = [
  { name: 'Classic', tier: 'Free', audience: 'Consulting, finance, operations', why: 'A formal serif layout with conservative spacing and high recruiter readability — the default for traditional, heavily screened corporate roles.' },
  { name: 'Executive', tier: 'Pro', audience: 'Leadership, strategy, consulting', why: 'Editorial hierarchy built for senior profiles, leadership proof, and board-level polish — when the reader is a hiring committee.' },
  { name: 'Premium', tier: 'Pro', audience: 'High-conviction applications', why: 'A high-contrast layout for the applications that matter most, where a strong, confident first impression is worth it.' },
];

const whoFor = [
  { icon: Building2, title: 'Corporate & MNC roles', body: 'IT services, BFSI, FMCG, and consulting firms expect a formal, conservative CV. A professional template signals you understand the environment.' },
  { icon: Briefcase, title: 'Mid-to-senior professionals', body: 'When your experience is the story, you need a layout that organises depth cleanly — clear hierarchy, generous structure, no gimmicks.' },
  { icon: Crown, title: 'Leadership & management', body: 'Director, VP, and C-suite applications need editorial polish that frames scope, P&L, and team leadership at a glance.' },
];

const tips = [
  'Keep it formal and conservative for IT services, banking, and consulting — save bold visuals for design roles',
  'Lead with a professional summary that states your seniority and domain in the first line',
  'Quantify outcomes in business terms — revenue, cost, team size, market — not just tasks',
  'Use a clean single-column structure so the CV stays ATS-readable even when it looks premium',
  'Match the CV\'s keywords to each job description rather than sending one master version',
];

const faqs = [
  {
    q: 'What is the best professional CV template for India?',
    a: 'For most Indian professionals, a formal single-column template like CV Prime\'s Classic is the safest, most widely accepted choice — it suits IT services, banking, consulting, and operations roles that use conservative formatting and ATS screening. Senior professionals and leadership candidates benefit from the Executive or Premium templates, which add editorial polish for board-level applications while staying ATS-readable. The right pick depends on your seniority and industry, but all of them are built to pass the ATS.',
  },
  {
    q: 'Are these professional CV templates ATS-friendly?',
    a: 'Yes. Every CV Prime template, including the professional ones, is built to be ATS-readable — single-column structure, standard headings, selectable text, and clean fonts. That means your CV looks polished to a human reader and still parses correctly in the Applicant Tracking System, so you do not have to choose between looking professional and getting past the software.',
  },
  {
    q: 'Is the professional CV template free?',
    a: 'The Classic professional template is free, and the free plan includes 3 clean PDF exports plus full ATS scoring and AI rewrites. The Executive and Premium templates, along with unlimited watermark-free exports, unlock with a one-time ₹999 Lifetime Pro upgrade — there is no subscription.',
  },
  {
    q: 'What should a professional CV in India include?',
    a: 'A professional Indian CV should include a header with contact details, a professional summary stating your role and seniority, a skills section, reverse-chronological work experience with quantified bullets, and education with degree, institution, and year (CGPA or percentage where relevant). For corporate and consulting roles, keep the tone formal and the layout conservative. CV Prime structures all of this for you and tailors it to each job description.',
  },
  {
    q: 'How do I make my professional CV stand out without looking flashy?',
    a: 'Within a formal template, you stand out through content, not decoration: a sharp summary, quantified achievements in business terms, and keywords matched to the specific role. The Premium and Executive templates add subtle polish — strong typography and hierarchy — without the graphic elements that look out of place in corporate settings or break ATS parsing. CV Prime\'s AI strengthens the content so the substance does the standing out.',
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
    { '@type': 'ListItem', position: 2, name: 'Professional CV Template India', item: 'https://cv-prime.in/professional-cv-template-india' },
  ],
};

export default function ProfessionalCVTemplatePage(): JSX.Element {
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
            <Briefcase className="h-4 w-4" />
            Professional · Formal · ATS-ready · India
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Professional CV templates built for Indian corporate roles
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Formal, conservative, and recruiter-ready — the CV style expected by IT services, BFSI, consulting, and leadership hiring in India. Fill a professional template with AI, tailor it to the role, and export a clean PDF.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Build a professional CV free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/templates" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              Browse all templates
            </Link>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Professional templates to choose from</h2>
            <p className="mt-4 text-slate-400">Formal layouts for corporate, consulting, and leadership applications</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
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

      {/* Who it's for */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Who a professional template is for</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {whoFor.map((c) => {
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

      {/* Tips */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Making a professional CV that wins</h2>
          <div className="mt-10 space-y-3">
            {tips.map((t) => (
              <div key={t} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-sm leading-6 text-slate-300">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Professional CV template — FAQ</h2>
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
          <h2 className="font-display text-lg font-bold text-white">Related templates & guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/templates', label: 'All templates' },
              { href: '/ats-resume-template', label: 'ATS resume template' },
              { href: '/modern-resume-template-india', label: 'Modern resume template' },
              { href: '/minimal-ats-resume-template', label: 'Minimal ATS template' },
              { href: '/mba-resume', label: 'MBA resume' },
              { href: '/resume-builder-india', label: 'Resume builder India' },
              { href: '/cv-builder-india', label: 'CV builder India' },
              { href: '/resume-format', label: 'Resume format guide' },
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Look the part — and pass the ATS</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Build a formal, professional CV that reads well to recruiters and parses cleanly in the ATS. Free to start.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Build a professional CV free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build a professional CV free" message="Formal, ATS-ready CV templates for Indian corporate roles" />
    </main>
  );
}
