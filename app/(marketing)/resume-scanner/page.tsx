import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, FileSearch, GaugeCircle, Wand2, AlertCircle, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Resume Scanner — Scan Your Resume for ATS Issues Instantly | CV Prime',
  description:
    'Scan your resume for ATS issues, missing keywords, formatting problems, and weak bullets — free, instant, no signup required. Get a 0–100 score and actionable fixes for every problem found. CV Prime\'s free resume scanner.',
  keywords: [
    'resume scanner',
    'resume scanner free',
    'resume scanner online',
    'ats resume scanner',
    'free resume scanner',
    'resume scanner tool',
    'resume scan online free',
    'scan resume for ats',
    'resume ats scanner',
    'resume scanner india',
    'resume scanner no signup',
    'online resume scanner free india',
    'ats resume scan free 2026',
    'check resume ats score free',
  ],
  alternates: { canonical: 'https://cv-prime.in/resume-scanner' },
  openGraph: {
    title: 'Free Resume Scanner — Scan for ATS Issues, Keywords & Weak Bullets | CV Prime',
    description:
      "Scan your resume in seconds: ATS keyword gaps, formatting issues, weak bullets, missing sections. Free — no signup needed to scan.",
    url: 'https://cv-prime.in/resume-scanner',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume Scanner — CV Prime' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a resume scanner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A resume scanner is a tool that reads your resume and analyses it for issues that might prevent it from getting interviews — specifically ATS parsing problems (formatting that ATS systems cannot read), keyword gaps (missing terms from the job description), structural issues (missing sections, wrong order), and content weaknesses (vague bullets, no quantified achievements). CV Prime\'s resume scanner provides a 0–100 ATS score, a keyword gap report, formatting warnings, and a bullet quality analysis.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does an ATS resume scanner work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "An ATS resume scanner simulates how Applicant Tracking Systems process resumes. It parses your resume text the same way ATS software does — identifying whether key sections are present and correctly labelled, extracting keywords and comparing them against the job description's required skills, and flagging formatting elements (tables, columns, text boxes) that ATS parsers commonly fail on. CV Prime's scanner is calibrated for the ATS systems used by major Indian employers.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is a free resume scanner accurate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "CV Prime's free resume scanner is calibrated against the ATS systems actually used by Indian employers — Taleo (TCS, Wipro, MNCs), iCIMS (BFSI companies), Greenhouse (tech startups), and Workday (IT services). The keyword matching and formatting analysis is based on real ATS parsing behaviour. The 0–100 score correlates with actual interview callback rates in our user data.",
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do after scanning my resume?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After scanning, you will see: your ATS score (0–100), missing keywords from the JD, formatting issues that need fixing, and weak bullets that lack outcomes or metrics. CV Prime\'s AI can fix all of these automatically — rewriting bullets, filling keyword gaps, and strengthening your summary. The goal is to scan, fix, and re-scan until your score is above 70 before you apply.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is a resume scanner different from a resume checker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Resume scanner and resume checker are often used interchangeably, but there is a practical difference: a resume scanner typically analyses formatting and structure (can ATS read this?), while a resume checker analyses content quality (are the bullets strong? Is the summary tailored?). CV Prime does both simultaneously — formatting scan and content quality check — in a single ATS score report.',
      },
    },
  ],
};

const scanCategories = [
  {
    icon: FileSearch,
    title: 'Keyword scan',
    description: 'Identifies every keyword in the job description and checks whether it appears in your resume — by section.',
    findings: ['Missing: "Python", "ETL", "data pipeline" (from Skills)', 'Partial match: "SQL" present, "PostgreSQL" missing', '18 of 34 JD keywords matched — score: 53/100'],
    colour: 'border-cyan-200 bg-cyan-50',
    iconColour: 'text-cyan-600',
  },
  {
    icon: AlertCircle,
    title: 'Formatting scan',
    description: 'Detects tables, columns, text boxes, graphics, and other layout elements that ATS parsers cannot read correctly.',
    findings: ['⚠ Two-column layout detected — ATS may scramble column order', '⚠ Text box in header — contact info may not be parsed', '✓ No graphic elements found'],
    colour: 'border-amber-200 bg-amber-50',
    iconColour: 'text-amber-600',
  },
  {
    icon: GaugeCircle,
    title: 'Structure scan',
    description: 'Checks that all required resume sections are present with ATS-standard headings that parsers can identify.',
    findings: ['✓ Work Experience section found', '⚠ Skills section missing — add one with 10–15 keywords', '✓ Education section found', '⚠ Professional Summary missing — high ATS impact'],
    colour: 'border-violet-200 bg-violet-50',
    iconColour: 'text-violet-600',
  },
  {
    icon: Wand2,
    title: 'Bullet quality scan',
    description: 'Analyses every bullet point for action verb strength, quantified outcomes, and keyword relevance.',
    findings: ['"Responsible for backend development" — no action verb, no metric', '"Worked on improving performance" — weak, no specific outcome', 'Only 2 of 12 bullets contain a quantified metric'],
    colour: 'border-rose-200 bg-rose-50',
    iconColour: 'text-rose-600',
  },
];

export default function ResumeScannerPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800 px-4 py-2 text-sm text-slate-300">
            <Zap className="h-4 w-4 text-cyan-400" />
            Free ATS resume scanner — instant results
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Free resume scanner — scan for ATS issues, keyword gaps, and weak spots
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Paste your resume and a job description. CV Prime scans for ATS compatibility, missing keywords, formatting problems, section structure, and bullet quality — and gives you a 0–100 score with specific fixes.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/tools/ats-keyword-matcher"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-7 py-3.5 font-display font-bold text-brand-foreground transition-opacity hover:opacity-90"
            >
              Scan my resume free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/signup?next=/dashboard" className="text-sm font-medium text-slate-300 hover:text-white underline underline-offset-2">
              Full scan with AI fixes →
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">No signup required for basic scan · Full AI fixes with free account</p>
        </div>
      </section>

      {/* What the scanner checks */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">What the resume scanner checks</h2>
          <p className="mt-3 text-slate-500">
            CV Prime scans four dimensions simultaneously — the same way real ATS software processes your application.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {scanCategories.map((cat) => (
              <div key={cat.title} className={`rounded-2xl border p-6 ${cat.colour}`}>
                <div className="flex items-center gap-3">
                  <cat.icon className={`h-6 w-6 ${cat.iconColour}`} />
                  <p className="font-display font-bold text-slate-900">{cat.title}</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{cat.description}</p>
                <div className="mt-4 space-y-1.5">
                  {cat.findings.map((f) => (
                    <p key={f} className="text-xs font-mono text-slate-700 bg-white/60 rounded px-3 py-1.5">{f}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATS systems */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Calibrated for Indian employer ATS systems</h2>
          <p className="mt-3 text-slate-500">
            CV Prime&apos;s resume scanner is calibrated for the Applicant Tracking Systems most commonly used by Indian employers and MNCs.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { system: 'Taleo', users: 'TCS, Wipro, many MNCs' },
              { system: 'iCIMS', users: 'HDFC Bank, ICICI, BFSI' },
              { system: 'Workday', users: 'Infosys, Accenture, IT services' },
              { system: 'Greenhouse', users: 'Tech startups, product companies' },
              { system: 'Lever', users: 'Flipkart, Swiggy, growth startups' },
              { system: 'Naukri ATS', users: "Naukri's candidate management system" },
              { system: 'SmartRecruiters', users: 'Mid-size companies, consultancies' },
              { system: 'Darwinbox', users: 'India-focused enterprise HR' },
              { system: 'Zoho Recruit', users: 'SMBs, consulting, staffing' },
            ].map((ats) => (
              <div key={ats.system} className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="font-display font-bold text-slate-900">{ats.system}</p>
                <p className="mt-0.5 text-xs text-slate-500">{ats.users}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scan to fix workflow */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">From scan to interview-ready in 3 steps</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                step: '01',
                icon: FileSearch,
                title: 'Scan your resume',
                body: 'Paste your resume and the job description. CV Prime scans for keyword gaps, formatting issues, missing sections, and bullet quality. You get a 0–100 score instantly.',
              },
              {
                step: '02',
                icon: Wand2,
                title: 'Let AI fix the issues',
                body: 'Click Fix. The AI rewrites weak bullets into outcome statements, fills keyword gaps from the JD, and strengthens your summary. No manual editing required.',
              },
              {
                step: '03',
                icon: GaugeCircle,
                title: 'Rescan to confirm',
                body: 'After the AI fixes your resume, run a second scan. Aim for a score above 70 before applying — that is when your resume is competitive for ATS screening.',
              },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border border-slate-200 p-6">
                <div className="flex items-start gap-3">
                  <span className="font-display text-2xl font-bold text-brand/30">{s.step}</span>
                  <s.icon className="mt-1 h-5 w-5 text-brand" />
                </div>
                <p className="mt-3 font-display font-bold text-slate-900">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/signup?next=/dashboard"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-7 py-3.5 font-display font-bold text-brand-foreground transition-opacity hover:opacity-90"
            >
              Scan and fix my resume free <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Free tools mention */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-xl font-bold">Free resume scanning tools — no signup required</h2>
          <p className="mt-2 text-sm text-slate-500">Run a quick scan without creating an account.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: '/tools/ats-keyword-matcher', title: 'ATS Keyword Matcher', desc: 'Paste resume + JD → instant keyword match score and missing keywords.' },
              { href: '/tools/resume-strength-analyzer', title: 'Resume Strength Analyzer', desc: '0–100 score on action verbs, metrics, filler words, sections, and contact.' },
              { href: '/tools/resume-bullet-analyzer', title: 'Bullet Point Analyzer', desc: 'Per-line feedback on action verb, metric, length, and filler — with fixes.' },
            ].map((tool) => (
              <Link key={tool.href} href={tool.href} className="group rounded-2xl border border-slate-200 bg-white p-5 hover:border-cyan-300 transition-colors">
                <p className="font-display font-bold text-slate-900 group-hover:text-cyan-700">{tool.title}</p>
                <p className="mt-1 text-sm text-slate-500">{tool.desc}</p>
                <p className="mt-3 text-xs font-semibold text-brand">Try free →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">FAQ — resume scanning</h2>
          <div className="mt-8 divide-y divide-slate-200">
            {[
              {
                q: 'What is a resume scanner?',
                a: "A resume scanner reads your resume and identifies problems that prevent you from getting interviews — ATS parsing failures (formatting issues), keyword gaps (missing terms from the JD), structural problems (missing sections), and content weaknesses (vague bullets, no metrics). CV Prime's scanner provides a 0–100 ATS score, a keyword gap report, formatting warnings, and bullet quality analysis.",
              },
              {
                q: 'How does an ATS resume scanner work?',
                a: "An ATS resume scanner simulates how Applicant Tracking Systems process resumes — parsing text, identifying sections, extracting keywords, and checking formatting. CV Prime's scanner is calibrated for the ATS systems used by major Indian employers: Taleo (TCS, Wipro), iCIMS (BFSI), Greenhouse (tech startups), Workday (IT services), and Naukri ATS.",
              },
              {
                q: 'Is a free resume scanner accurate?',
                a: "CV Prime's free scanner is calibrated against ATS systems used by Indian employers. The 0–100 score is based on keyword match percentage, formatting compliance, section completeness, and bullet quality — factors that directly correlate with ATS pass rates and interview callback rates.",
              },
              {
                q: 'What should I do after scanning my resume?',
                a: "After scanning: (1) Review your ATS score — under 50 means significant keyword gaps; 50–70 means good but improvable; above 70 is competitive. (2) Fix the highest-impact issues first: missing keywords in the Skills section, formatting problems, missing Professional Summary. (3) Use CV Prime's AI to rewrite weak bullets and fill keyword gaps automatically. (4) Rescan after fixing to confirm your score improved before applying.",
              },
              {
                q: 'How is a resume scanner different from a resume checker?',
                a: "Scanner and checker are often used interchangeably. In practice: a scanner focuses on ATS parsing and keyword matching (can the ATS read and score this resume?), while a checker focuses on content quality (are the bullets strong, is the summary tailored?). CV Prime does both simultaneously in one report.",
              },
            ].map((item) => (
              <div key={item.q} className="py-6">
                <p className="font-semibold text-slate-900">{item.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand px-5 py-20 text-brand-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold">Scan your resume free — get your ATS score now</h2>
          <p className="mt-4 text-lg opacity-90">
            Find out why your resume isn&apos;t getting callbacks. 3 free PDF exports. No credit card.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/signup?next=/dashboard"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-display font-bold text-slate-950 transition-opacity hover:opacity-90"
            >
              Scan my resume free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/tools/ats-keyword-matcher" className="text-sm font-medium opacity-80 hover:opacity-100 underline underline-offset-2">
              Quick keyword scan (no signup) →
            </Link>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-10">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold text-slate-500">Related tools and guides</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/resume-checker', label: 'Resume Checker' },
              { href: '/ats-checker', label: 'ATS Checker' },
              { href: '/ats-score-checker', label: 'ATS Score Checker' },
              { href: '/resume-enhancer', label: 'Resume Enhancer' },
              { href: '/resume-optimizer', label: 'Resume Optimizer' },
              { href: '/tailor-resume-to-job-description', label: 'Tailor Resume to JD' },
              { href: '/how-to-pass-ats-screening', label: 'How to Pass ATS Screening' },
              { href: '/tools/ats-keyword-matcher', label: 'Free ATS Keyword Matcher' },
              { href: '/tools/resume-strength-analyzer', label: 'Resume Strength Analyzer' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:border-cyan-300 hover:text-cyan-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
