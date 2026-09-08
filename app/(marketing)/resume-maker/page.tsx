import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Sparkles, Wand2, FileText, Download, BarChart3, Shield } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Resume Maker — Build a Professional Resume Online Free | CV Prime',
  description:
    'Free online resume maker for India 2026. Build a professional, ATS-optimised resume in minutes. AI tailoring, 8 templates, ATS scoring, and PDF export. No credit card required.',
  alternates: { canonical: 'https://cv-prime.in/resume-maker' },
  keywords: [
    'resume maker',
    'resume maker online',
    'resume maker free',
    'online resume maker india',
    'resume maker india 2026',
    'professional resume maker',
    'cv maker online free',
    'resume maker with ai',
    'best resume maker india',
    'free resume maker india',
    'resume maker download',
    'quick resume maker',
  ],
  openGraph: {
    title: 'Resume Maker — Build a Professional Resume Free Online | CV Prime',
    description:
      'Make your resume in minutes with AI. ATS scoring, professional templates, and PDF export — free to start. Trusted by 10,000+ Indian job seekers.',
    url: 'https://cv-prime.in/resume-maker',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume Maker — CV Prime' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is CV Prime resume maker free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The core resume maker is free — create unlimited drafts, use AI rewrites, run ATS scoring, and access all 8 templates. The free plan includes 3 PDF exports with no watermark and no credit card required. Pro (₹999 one-time) gives unlimited exports.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to make a resume with CV Prime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most users build their first ATS-optimised resume in 15–30 minutes. If you upload an existing resume (PDF or DOCX), the AI imports your content in seconds and the tailoring + export process takes under 10 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes a resume ATS-friendly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ATS-friendly resumes use a single-column layout (no tables or text boxes), standard section headings (Work Experience, Education, Skills), keyword-matched language from the job description, and clean PDF export. CV Prime\'s resume maker automatically ensures all these criteria are met.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use this resume maker for Naukri and LinkedIn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. CV Prime exports a PDF you can upload to Naukri, LinkedIn Easy Apply, Instahyre, and any other job portal. The resume is formatted to pass ATS screening at Indian companies including IT majors, MNCs, and startups.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the resume maker support fresher resumes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. CV Prime has a specific flow for freshers with no work experience — prioritising the Education, Projects, and Skills sections, with AI suggestions for writing strong project descriptions and a resume objective. All 8 templates are suitable for freshers.',
      },
    },
  ],
};

const steps = [
  {
    step: '01',
    title: 'Import or start fresh',
    desc: 'Upload your existing resume (PDF or DOCX) and let AI import everything automatically — or start from scratch with a guided builder. Takes under 60 seconds either way.',
    icon: FileText,
  },
  {
    step: '02',
    title: 'Paste the job description',
    desc: 'Copy the JD from Naukri, LinkedIn, or the company portal. The AI reads both your resume and the JD to identify keyword gaps, weak bullets, and section issues.',
    icon: Sparkles,
  },
  {
    step: '03',
    title: 'AI rewrites and scores',
    desc: 'Get your ATS match score (0–100) and AI-rewritten bullets that use the exact keywords from the JD. See before/after for every change. Keep the rewrites you want.',
    icon: Wand2,
  },
  {
    step: '04',
    title: 'Choose a template and export',
    desc: 'Select from 8 ATS-safe templates. Export a clean, recruiter-ready PDF. Free plan includes 3 downloads. Pro gives unlimited exports with no watermark.',
    icon: Download,
  },
];

const features = [
  {
    title: 'ATS Resume Scoring',
    desc: 'Paste any job description and get a 0–100 ATS compatibility score. See which keywords are missing, which sections are weak, and exactly what to fix.',
    icon: BarChart3,
  },
  {
    title: 'AI Bullet Rewriter',
    desc: 'Transform "responsible for managing accounts" into "grew key accounts by 34%, contributing ₹2.8Cr in ARR." 3 alternatives per bullet — you choose the best.',
    icon: Wand2,
  },
  {
    title: 'AI Cover Letter Generator',
    desc: 'Generate a tailored cover letter for any role in under 60 seconds. Matches the keywords and tone of the job description automatically.',
    icon: Sparkles,
  },
  {
    title: 'ATS-Safe Templates',
    desc: '8 professional templates designed to pass ATS parsers. No tables, text boxes, or graphics that break automated screening — clean, readable, recruiter-approved.',
    icon: Shield,
  },
];

const faqs = [
  {
    q: 'Is CV Prime resume maker free?',
    a: 'Yes. The core resume maker is free — create unlimited drafts, use AI rewrites, run ATS scoring, and access all 8 templates. The free plan includes 3 PDF exports with no watermark and no credit card required. Pro (₹999 one-time) gives unlimited exports.',
  },
  {
    q: 'How long does it take to make a resume with CV Prime?',
    a: 'Most users build their first ATS-optimised resume in 15–30 minutes. If you upload an existing resume (PDF or DOCX), the AI imports your content in seconds and the tailoring + export process takes under 10 minutes.',
  },
  {
    q: 'What makes a resume ATS-friendly?',
    a: "ATS-friendly resumes use a single-column layout (no tables or text boxes), standard section headings (Work Experience, Education, Skills), keyword-matched language from the job description, and clean PDF export. CV Prime's resume maker automatically ensures all these criteria are met.",
  },
  {
    q: 'Can I use this resume maker for Naukri and LinkedIn?',
    a: 'Yes. CV Prime exports a PDF you can upload to Naukri, LinkedIn Easy Apply, Instahyre, and any other job portal. The resume is formatted to pass ATS screening at Indian companies including IT majors, MNCs, and startups.',
  },
  {
    q: 'Does the resume maker support fresher resumes?',
    a: 'Yes. CV Prime has a specific flow for freshers with no work experience — prioritising the Education, Projects, and Skills sections, with AI suggestions for writing strong project descriptions and a resume objective. All 8 templates are suitable for freshers.',
  },
  {
    q: 'How is CV Prime different from Canva or Google Docs for making a resume?',
    a: "Canva and Google Docs create visually designed resumes that often fail ATS parsing due to tables, columns, and graphic elements. CV Prime's resume maker is built specifically for ATS — every template is tested against real ATS parsers. Plus, CV Prime adds AI tailoring (keyword matching per JD) and ATS scoring that Canva and Google Docs cannot provide.",
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Resume Maker', item: 'https://cv-prime.in/resume-maker' },
  ],
};

export default function ResumeMakerPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, breadcrumbSchema]) }}
      />

      {/* Hero */}
      <section className="bg-slate-950 px-5 pb-20 pt-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <Sparkles className="h-4 w-4" />
            AI Resume Maker — Free to Start
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The Resume Maker That{' '}
            <span className="text-cyan-400">Scores and Fixes</span>{' '}
            Your Resume
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            Build a professional, ATS-optimised resume in minutes. Paste a job description and AI tailors your resume,
            scores your ATS match, rewrites weak bullets, and exports a recruiter-ready PDF. Free to start — no credit card.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-8 py-4 text-base font-bold text-white transition hover:bg-cyan-300"
            >
              Make My Resume Free <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/templates" className="text-sm font-medium text-slate-300 underline underline-offset-4 hover:text-white">
              See 8 resume templates →
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Free forever · 3 PDF exports · No credit card · Trusted by 10,000+ Indian job seekers
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-white/10 bg-white/[0.04] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight">Make a resume in 4 steps</h2>
            <p className="text-lg text-slate-300">From blank page to ATS-optimised PDF — in under 30 minutes</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.step} className="flex flex-col items-start">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
                    <Icon className="h-6 w-6 text-cyan-600" />
                  </div>
                  <span className="mb-2 text-sm font-bold text-cyan-600">{s.step}</span>
                  <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
                  <p className="text-sm text-slate-300">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight">More than a resume maker — it is an ATS fixer</h2>
            <p className="text-lg text-slate-300">
              Most resume makers help you design a resume. CV Prime helps you build one that actually gets past ATS.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-2xl bg-white/[0.04] p-7 shadow-sm">
                  <Icon className="mb-4 h-8 w-8 text-cyan-600" />
                  <h3 className="mb-2 text-xl font-bold">{f.title}</h3>
                  <p className="text-slate-300">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Free vs Pro */}
      <section className="border-b border-white/10 bg-white/[0.04] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight">Free resume maker — no catch</h2>
            <p className="text-slate-300">
              The free plan covers everything most job seekers need. Upgrade only if you need unlimited exports.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-7">
              <h3 className="mb-1 text-xl font-bold">Free Plan — ₹0</h3>
              <p className="mb-5 text-sm text-slate-400">No credit card. Always free.</p>
              <ul className="space-y-3">
                {[
                  'Unlimited resume drafts',
                  '3 PDF exports (no watermark)',
                  'Full ATS scoring',
                  'AI bullet rewriting',
                  'All 8 templates',
                  'CV import (PDF or DOCX)',
                  'AI cover letter generation',
                  'Job tracker (3 applications)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className="mt-6 block rounded-xl border border-white/10 py-3 text-center text-sm font-bold text-slate-300 transition hover:bg-white/[0.03]"
              >
                Start free
              </Link>
            </div>
            <div className="rounded-2xl border-2 border-cyan-400 bg-slate-950 p-7 text-white">
              <h3 className="mb-1 text-xl font-bold">Pro Plan — ₹999 one-time</h3>
              <p className="mb-5 text-sm text-slate-400">Everything in free, plus:</p>
              <ul className="space-y-3">
                {[
                  'Unlimited PDF exports',
                  'No watermark',
                  'Unlimited AI tailoring',
                  'Unlimited job tracker',
                  'Priority AI processing',
                  'Multi-version resume management',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/pricing"
                className="mt-6 block rounded-xl bg-cyan-400 py-3 text-center text-sm font-bold text-white transition hover:bg-cyan-300"
              >
                See Pro pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related tools */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold">More free resume tools</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              { label: 'Free ATS Resume Checker', href: '/ats-checker', desc: 'Score your resume against any JD' },
              { label: 'AI Resume Builder', href: '/ai-resume-builder', desc: 'AI tailoring for any job description' },
              { label: 'AI CV Builder', href: '/ai-cv-builder', desc: 'Build an ATS-optimised CV with AI' },
              { label: 'Resume Checker', href: '/resume-checker', desc: 'Check for common resume mistakes' },
              { label: 'Cover Letter Generator', href: '/cover-letter-generator', desc: 'Generate a tailored cover letter free' },
              { label: 'Resume Examples', href: '/resume-examples', desc: 'Examples for 49 roles in India' },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="rounded-2xl bg-white/[0.04] p-5 shadow-sm transition hover:shadow-md"
              >
                <p className="mb-1 font-bold text-white">{tool.label}</p>
                <p className="text-sm text-slate-400">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 bg-white/[0.04] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">Resume maker FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="mb-2 font-bold text-white">{faq.q}</h3>
                <p className="text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Make your resume now — it is free</h2>
          <p className="mb-8 text-slate-400">
            Join 10,000+ Indian job seekers who built ATS-optimised resumes with CV Prime. 3 free exports, no credit card.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-8 py-4 text-base font-bold text-white transition hover:bg-cyan-300"
          >
            Make My Resume — Free <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <StickyCTA />
    </main>
  );
}
