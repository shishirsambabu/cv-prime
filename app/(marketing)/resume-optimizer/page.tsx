import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, BarChart3, Wand2, Search, CheckCircle2, AlertTriangle } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Resume Optimizer — Optimise Your Resume for ATS Free | CV Prime',
  description:
    'Free AI resume optimizer for India 2026. Paste a job description and instantly see your ATS score, keyword gaps, and AI rewrites that fix your resume. Improve your callback rate.',
  alternates: { canonical: 'https://cv-prime.in/resume-optimizer' },
  keywords: [
    'resume optimizer',
    'resume optimization tool',
    'ats resume optimizer',
    'optimize resume for ats',
    'resume optimiser india',
    'resume optimization free',
    'ai resume optimizer',
    'resume optimizer online india',
    'improve resume ats score',
    'resume keyword optimizer',
    'cv optimizer india 2026',
    'resume optimization tool india',
  ],
  openGraph: {
    title: 'Resume Optimizer — Fix ATS Keywords and Score Your Resume Free | CV Prime',
    description:
      'Optimise your resume for any job description. Get your ATS score, fix keyword gaps, and rewrite weak bullets with AI — free to try.',
    url: 'https://cv-prime.in/resume-optimizer',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume Optimizer — CV Prime' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a resume optimizer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A resume optimizer is a tool that analyses your existing resume against a specific job description and identifies: missing keywords that the ATS screens for, weak bullet points that lack metrics and action verbs, section gaps that lower your ATS score, and formatting issues that break ATS parsers. CV Prime's resume optimizer then provides AI rewrites to fix each issue.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much can a resume optimizer improve my callback rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Research and CV Prime's internal data show that tailored, ATS-optimised resumes receive 2–4x higher callback rates than generic resumes. The average CV Prime user sees a 40% improvement in ATS score after optimisation. Higher ATS scores mean more resumes reaching human recruiters, which directly increases interview callback rates.",
      },
    },
    {
      '@type': 'Question',
      name: 'How is a resume optimizer different from a resume builder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A resume builder helps you create a resume from scratch. A resume optimizer takes your existing resume and improves it for a specific job description. CV Prime does both — you can build from scratch or upload an existing resume and optimise it. Most users who are already working professionals use the optimizer flow; freshers often use the builder flow.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is CV Prime resume optimizer free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The ATS scoring and keyword gap analysis are completely free. AI rewrites and PDF export are included in the free plan (3 exports). Pro (₹249/month) gives unlimited exports and tailoring sessions.',
      },
    },
  ],
};

const optimizationChecks = [
  {
    icon: Search,
    title: 'Keyword gap analysis',
    desc: "Compares every keyword in the job description against your resume. Shows you exactly which required and preferred skills are missing — so you know what to add.",
    severity: 'critical',
  },
  {
    icon: BarChart3,
    title: 'ATS match score',
    desc: "0–100 score based on keyword coverage, section completeness, formatting, and bullet quality. Aim for 75+ before submitting. The score is role-specific, not generic.",
    severity: 'critical',
  },
  {
    icon: Wand2,
    title: 'Bullet quality analysis',
    desc: 'Identifies responsibility-led bullets ("responsible for X") and rewrites them as impact-led bullets with action verbs and quantified results.',
    severity: 'high',
  },
  {
    icon: AlertTriangle,
    title: 'Formatting issues',
    desc: 'Detects tables, text boxes, columns, and other formatting elements that break ATS parsers — before you submit and get silently rejected.',
    severity: 'high',
  },
  {
    icon: CheckCircle2,
    title: 'Section completeness check',
    desc: 'Verifies all required sections are present and labelled correctly: Work Experience, Education, Skills, and Summary/Objective.',
    severity: 'medium',
  },
];

const commonIssues = [
  {
    issue: 'Missing keywords',
    frequency: '72% of resumes',
    impact: "The single biggest cause of ATS rejection — your resume doesn't use the same words as the JD",
    fix: 'CV Prime shows you exactly which JD keywords are missing and where to add them',
  },
  {
    issue: 'Vague bullets',
    frequency: '65% of resumes',
    impact: 'Generic duties without metrics get low recruiter ratings even after passing ATS',
    fix: 'AI rewrites each weak bullet with a strong verb, specific output, and quantified result',
  },
  {
    issue: 'No skills section',
    frequency: '38% of resumes',
    impact: 'ATS systems struggle to classify resumes without a dedicated, labelled Skills section',
    fix: 'CV Prime adds a keyword-matched skills section tailored to the JD automatically',
  },
  {
    issue: 'Table/column formatting',
    frequency: '29% of resumes',
    impact: 'Two-column and table-based layouts corrupt ATS parsing — skills end up merged with dates',
    fix: 'All CV Prime templates use single-column, ATS-safe formatting by design',
  },
];

const faqs = [
  {
    q: 'What is a resume optimizer?',
    a: "A resume optimizer is a tool that analyses your existing resume against a specific job description and identifies: missing keywords that the ATS screens for, weak bullet points that lack metrics and action verbs, section gaps that lower your ATS score, and formatting issues that break ATS parsers. CV Prime's resume optimizer then provides AI rewrites to fix each issue.",
  },
  {
    q: 'How much can a resume optimizer improve my callback rate?',
    a: "Research and CV Prime's internal data show that tailored, ATS-optimised resumes receive 2–4x higher callback rates than generic resumes. The average CV Prime user sees a 40% improvement in ATS score after optimisation. Higher ATS scores mean more resumes reaching human recruiters, which directly increases interview callback rates.",
  },
  {
    q: 'How is a resume optimizer different from a resume builder?',
    a: 'A resume builder helps you create a resume from scratch. A resume optimizer takes your existing resume and improves it for a specific job description. CV Prime does both — you can build from scratch or upload an existing resume and optimise it. Most users who are already working professionals use the optimizer flow; freshers often use the builder flow.',
  },
  {
    q: 'Is CV Prime resume optimizer free?',
    a: 'Yes. The ATS scoring and keyword gap analysis are completely free. AI rewrites and PDF export are included in the free plan (3 exports). Pro (₹249/month) gives unlimited exports and tailoring sessions.',
  },
  {
    q: 'How often should I optimize my resume?',
    a: 'For every job application. The same resume rarely has an ATS score above 60 for two different job descriptions — JDs use different terminology, prioritise different skills, and emphasise different experience. CV Prime takes 2 minutes to optimise per application — meaningfully improving your callback rate for each role.',
  },
  {
    q: 'What ATS systems does the optimizer work for?',
    a: "CV Prime's optimizer is calibrated against ATS systems commonly used by Indian employers: Taleo, iCIMS, Greenhouse, Workday, Naukri ATS, and SmartRecruiters. It also covers global ATS systems used by MNCs and international employers.",
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Resume Optimizer', item: 'https://cv-prime.in/resume-optimizer' },
  ],
};

export default function ResumeOptimizerPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, breadcrumbSchema]) }}
      />

      {/* Hero */}
      <section className="bg-slate-950 px-5 pb-20 pt-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <BarChart3 className="h-4 w-4" />
            AI Resume Optimizer — Free ATS Scoring
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Optimise Your Resume for{' '}
            <span className="text-cyan-400">Any Job Description in Minutes</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            75% of resumes never reach a recruiter. CV Prime&apos;s resume optimizer scores your ATS match,
            identifies missing keywords, and rewrites weak bullets — so your resume gets through the filter.
            Free to try.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-8 py-4 text-base font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Optimise My Resume Free <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/ats-checker" className="text-sm font-medium text-slate-300 underline underline-offset-4 hover:text-white">
              Try the free ATS checker →
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Free ATS scoring · No credit card · 2 minutes per optimisation
          </p>
        </div>
      </section>

      {/* ATS stats */}
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { stat: '75%', label: 'of resumes rejected by ATS before a human reads them', source: 'Jobscan, 2024' },
              { stat: '40%', label: 'average ATS score improvement after CV Prime optimisation', source: 'CV Prime data, 2025' },
              { stat: '2–4×', label: 'higher callback rate for ATS-optimised resumes vs. generic', source: 'LinkedIn India, 2024' },
            ].map((item) => (
              <div key={item.stat} className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center">
                <p className="mb-1 text-4xl font-bold text-cyan-600">{item.stat}</p>
                <p className="mb-2 text-sm font-medium text-slate-700">{item.label}</p>
                <p className="text-xs text-slate-400">{item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What the optimizer checks */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight">What the resume optimizer checks</h2>
            <p className="text-lg text-slate-600">
              Every check is specific to the job description you paste — not a generic resume quality score.
            </p>
          </div>
          <div className="space-y-4">
            {optimizationChecks.map((check) => {
              const Icon = check.icon;
              return (
                <div key={check.title} className="flex items-start gap-5 rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-50">
                    <Icon className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-slate-950">{check.title}</h3>
                    <p className="text-sm text-slate-600">{check.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Most common issues */}
      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight">The most common issues the optimizer finds</h2>
            <p className="text-lg text-slate-600">
              These 4 issues cause the majority of ATS rejections at Indian companies in 2026.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-left">
                  <th className="pb-4 pr-4 text-sm font-bold text-slate-500 uppercase tracking-wide">Issue</th>
                  <th className="pb-4 pr-4 text-sm font-bold text-slate-500 uppercase tracking-wide">How common</th>
                  <th className="pb-4 pr-4 text-sm font-bold text-slate-500 uppercase tracking-wide">Impact</th>
                  <th className="pb-4 text-sm font-bold text-slate-500 uppercase tracking-wide">CV Prime fix</th>
                </tr>
              </thead>
              <tbody>
                {commonIssues.map((row, i) => (
                  <tr key={row.issue} className={i < commonIssues.length - 1 ? 'border-b border-slate-100' : ''}>
                    <td className="py-4 pr-4 font-bold text-slate-950">{row.issue}</td>
                    <td className="py-4 pr-4 text-sm font-medium text-red-600">{row.frequency}</td>
                    <td className="py-4 pr-4 text-sm text-slate-600">{row.impact}</td>
                    <td className="py-4 text-sm text-emerald-700">{row.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related tools */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold">More resume tools</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              { label: 'AI Resume Builder', href: '/ai-resume-builder', desc: 'Build a resume with AI from scratch' },
              { label: 'Resume Maker', href: '/resume-maker', desc: 'Make a professional resume online' },
              { label: 'Resume Generator', href: '/resume-generator', desc: 'Generate a resume from a JD with AI' },
              { label: 'ATS Resume Checker', href: '/ats-checker', desc: 'Free ATS score for any job description' },
              { label: 'Resume Checker', href: '/resume-checker', desc: 'Check for mistakes before applying' },
              { label: 'Cover Letter Generator', href: '/cover-letter', desc: 'Generate a tailored cover letter' },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <p className="mb-1 font-bold text-slate-950">{tool.label}</p>
                <p className="text-sm text-slate-500">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-100 bg-white px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">Resume optimizer FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <h3 className="mb-2 font-bold text-slate-950">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Optimise your resume now — it is free</h2>
          <p className="mb-8 text-slate-400">
            See your ATS score in 60 seconds. Free keyword gap analysis, AI rewrites, and PDF export.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-8 py-4 text-base font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Optimise My Resume Free <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <StickyCTA />
    </main>
  );
}
