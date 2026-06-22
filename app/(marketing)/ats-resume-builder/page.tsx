import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Shield, CheckCircle2, Zap, Target } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'ATS Resume Builder — Build an ATS-Friendly Resume That Gets Through Screening | CV Prime',
  description:
    'Build a resume that passes ATS screening every time. CV Prime\'s ATS resume builder checks keywords, formatting, and structure in real time. Free to try — no credit card.',
  alternates: { canonical: 'https://cv-prime.in/ats-resume-builder' },
  keywords: [
    'ats resume builder',
    'ats friendly resume builder',
    'ats optimized resume builder',
    'ats resume builder free',
    'ats resume builder india',
    'applicant tracking system resume builder',
    'ats compliant resume builder',
    'ats resume creator',
    'build ats resume',
    'ats resume maker',
    'ats resume builder 2026',
    'resume builder that passes ats',
  ],
  openGraph: {
    title: 'ATS Resume Builder — CV Prime',
    description:
      'Build a resume optimised for ATS from the ground up. Real-time keyword checking, ATS-safe formatting, and a score from 0–100. Free to start.',
    url: 'https://cv-prime.in/ats-resume-builder',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ATS Resume Builder — CV Prime' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an ATS resume builder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An ATS resume builder is a tool that creates resumes specifically designed to pass Applicant Tracking System (ATS) screening. Unlike generic resume builders, an ATS resume builder uses clean formatting (no tables, columns, or graphics that break parsing), includes relevant keywords from the job description, and structures sections in the way ATS software expects. CV Prime\'s ATS resume builder also provides a live ATS score from 0–100 so you can see exactly how your resume will perform before you apply.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I build a resume that passes ATS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To build an ATS-passing resume: (1) Use a clean, single-column layout with no tables, text boxes, or graphics. (2) Include an exact-match job title in your resume summary. (3) Mirror keywords from the job description in your skills and experience sections. (4) Use standard section headings like "Work Experience", "Skills", and "Education". (5) Save as a PDF or Word document — both are parseable by modern ATS. CV Prime does all of this automatically, including keyword gap analysis and live ATS scoring.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which ATS systems does CV Prime optimise for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CV Prime\'s ATS resume builder is calibrated against the most widely used ATS platforms in India and globally: Taleo (used by large Indian MNCs and Fortune 500 companies), iCIMS (BFSI, FMCG sectors), Greenhouse (tech startups), Workday (IT services, consulting), Naukri ATS (India-specific), and SmartRecruiters (mid-market companies). The formatting and keyword rules apply across all these systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the ATS resume builder free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — CV Prime\'s ATS resume builder is free to use. You can build your resume, get a live ATS score, see keyword gaps, and download your first 3 PDFs at no cost. For unlimited PDF downloads and advanced AI features, Pro is ₹249/month — which is less than the cost of one cup of coffee per week.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my ATS-optimised resume look good to human recruiters too?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. ATS-optimised and visually professional are not opposites — they just mean different things. CV Prime\'s templates are clean, well-structured, and easy to scan. They avoid design elements that break ATS parsers (tables, columns, graphics) but still look polished and professional. Our most popular template has been shortlisted at Google, Amazon, and Razorpay.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'ATS Resume Builder', item: 'https://cv-prime.in/ats-resume-builder' },
  ],
};

const atsSystems = [
  { name: 'Taleo', by: 'Oracle', used: 'Fortune 500, large Indian MNCs (TCS, Wipro, Infosys)', score: '✅ Fully optimised' },
  { name: 'iCIMS', by: 'iCIMS', used: 'BFSI, FMCG, manufacturing companies', score: '✅ Fully optimised' },
  { name: 'Greenhouse', by: 'Greenhouse', used: 'Tech startups, SaaS companies', score: '✅ Fully optimised' },
  { name: 'Workday', by: 'Workday', used: 'IT services, consulting, professional services', score: '✅ Fully optimised' },
  { name: 'Naukri ATS', by: 'Naukri.com', used: 'Indian companies on Naukri portal', score: '✅ Fully optimised' },
  { name: 'SmartRecruiters', by: 'SmartRecruiters', used: 'Mid-market companies, retail, hospitality', score: '✅ Fully optimised' },
];

const atsFeatures = [
  {
    icon: Shield,
    title: 'ATS-safe formatting',
    body: 'Every template uses single-column, table-free layouts that ATS parsers read correctly. No design elements that break automated screening.',
  },
  {
    icon: Target,
    title: 'Real-time keyword matching',
    body: 'Paste the job description and see which keywords are in your resume and which are missing — with one-click insertion into the right section.',
  },
  {
    icon: CheckCircle2,
    title: 'Live ATS score (0–100)',
    body: 'Get a score showing how your resume will perform against ATS. See section-by-section feedback: keywords, formatting, completeness, and more.',
  },
  {
    icon: Zap,
    title: 'AI bullet rewriting',
    body: 'Generic duty descriptions become quantified, keyword-rich achievements. The AI rewrites your experience bullets to maximise both ATS score and recruiter impact.',
  },
];

const faqs = [
  {
    q: 'What is an ATS resume builder?',
    a: "An ATS resume builder creates resumes designed to pass Applicant Tracking System screening. Unlike generic builders, it uses ATS-safe formatting, includes relevant keywords from the job description, and structures sections the way ATS software expects. CV Prime's builder also gives a live ATS score from 0–100.",
  },
  {
    q: 'How do I build a resume that passes ATS?',
    a: 'Use a clean, single-column layout with no tables, text boxes, or graphics. Include an exact-match job title in your summary. Mirror keywords from the job description. Use standard section headings. CV Prime does all of this automatically with keyword gap analysis and live ATS scoring.',
  },
  {
    q: 'Which ATS systems does CV Prime optimise for?',
    a: "CV Prime is calibrated against Taleo, iCIMS, Greenhouse, Workday, Naukri ATS, and SmartRecruiters — the systems most commonly used by Indian companies and global MNCs. The formatting and keyword rules apply across all these systems.",
  },
  {
    q: 'Is the ATS resume builder free?',
    a: 'Yes — build your resume, get a live ATS score, see keyword gaps, and download your first 3 PDFs at no cost. Pro is ₹249/month for unlimited exports and advanced AI features.',
  },
  {
    q: 'Will my ATS-optimised resume look good to human recruiters too?',
    a: "Yes. ATS-optimised and visually professional aren't opposites. CV Prime templates are clean, well-structured, and easy to scan — they avoid ATS-breaking design elements but still look polished. Our most popular template has been shortlisted at Google, Amazon, and Razorpay.",
  },
];

export default function ATSResumeBuilderPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, breadcrumbSchema]) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-5 py-20 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <Shield className="h-4 w-4" />
            ATS-guaranteed formatting
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The ATS resume builder that gets you through screening
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            75% of resumes are rejected by ATS before a human sees them. CV Prime builds your resume with ATS compliance built in — real-time keyword matching, ATS-safe formatting, and a live score from 0–100.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Build my ATS resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/ats-checker"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              Check my existing resume
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-cyan-400" /> 3 free PDF exports</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-cyan-400" /> No credit card required</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-cyan-400" /> Works on Naukri & LinkedIn</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-100 px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 text-center sm:grid-cols-3">
            {[
              { stat: '75%', label: 'of resumes rejected by ATS before human review', sub: 'Jobscan, 2024' },
              { stat: '55%', label: 'of ATS rejections are due to missing keywords', sub: 'Jobscan, 2023' },
              { stat: '40%', label: 'interview rate improvement after ATS optimisation', sub: 'Jobscan internal, 2024' },
            ].map((item) => (
              <div key={item.stat} className="px-4">
                <p className="font-display text-4xl font-bold text-cyan-600">{item.stat}</p>
                <p className="mt-2 text-sm font-medium text-slate-800">{item.label}</p>
                <p className="mt-1 text-xs text-slate-400">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATS Features */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Built for ATS from the ground up
            </h2>
            <p className="mt-4 text-slate-500">Every feature designed to get you past automated screening</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {atsFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-[1.5rem] border border-slate-100 p-7 transition hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{f.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
            How to build an ATS resume in 4 steps
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              { step: '1', title: 'Choose an ATS-safe template', body: 'All CV Prime templates use single-column, parsing-compliant layouts. No columns, tables, or graphics that confuse ATS parsers.' },
              { step: '2', title: 'Paste the job description', body: 'CV Prime scans the JD and highlights every keyword your resume is missing — ranked by importance and frequency.' },
              { step: '3', title: 'Build with AI keyword guidance', body: 'As you write, AI suggests keyword insertions and rewrites weak bullets into quantified, ATS-optimised achievements.' },
              { step: '4', title: 'Check your ATS score and export', body: 'Get a 0–100 ATS score with section-level feedback. When you hit your target, download a recruiter-ready PDF.' },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl bg-white p-7 shadow-sm">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-cyan-600 text-sm font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 font-display text-lg font-bold">{item.title}</h3>
                <p className="text-slate-600 leading-7">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATS systems table */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold">
            ATS systems we optimise for
          </h2>
          <p className="mt-4 text-center text-slate-500">
            Calibrated against the ATS platforms used by Indian companies and global MNCs
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="p-4 text-left font-semibold text-slate-600">ATS System</th>
                  <th className="p-4 text-left font-semibold text-slate-600">Commonly used by</th>
                  <th className="p-4 text-center font-semibold text-slate-600">CV Prime</th>
                </tr>
              </thead>
              <tbody>
                {atsSystems.map((row, i) => (
                  <tr key={row.name} className={i % 2 === 0 ? '' : 'bg-slate-50/50'}>
                    <td className="p-4 font-medium text-slate-900">{row.name} <span className="ml-1 text-xs text-slate-400">by {row.by}</span></td>
                    <td className="p-4 text-slate-600">{row.used}</td>
                    <td className="p-4 text-center text-sm font-semibold text-emerald-700">{row.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Blog links */}
      <section className="border-t border-slate-100 bg-slate-50 px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold">Learn more about ATS and resume optimisation</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { href: '/blog/ats-resume-mistakes', title: '15 ATS Resume Mistakes That Get You Rejected', desc: 'The most common reasons resumes fail ATS screening — 7 min read' },
              { href: '/blog/resume-format-india-2026', title: 'Best Resume Format for India 2026', desc: 'Which format works for Naukri, LinkedIn, and Indian MNCs — 6 min read' },
              { href: '/blog/how-to-write-resume-summary-2026', title: 'How to Write an ATS Resume Summary', desc: 'The opening section that determines your ATS score — 8 min read' },
            ].map((post) => (
              <Link key={post.href} href={post.href} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-md">
                <p className="mb-2 text-sm font-bold text-slate-950 leading-snug">{post.title}</p>
                <p className="text-xs text-slate-500">{post.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-slate-900">Related ATS tools</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/ats-checker', label: 'Free ATS score checker' },
              { href: '/ats-friendly-cv', label: 'ATS-friendly CV guide' },
              { href: '/ats-report-2026', label: 'ATS research report 2026' },
              { href: '/ai-resume-builder', label: 'AI resume builder' },
              { href: '/resume-optimizer', label: 'Resume optimizer' },
              { href: '/statistics', label: 'ATS & resume statistics' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-cyan-300 hover:text-cyan-700 transition">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-100 bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">
            ATS resume builder — frequently asked questions
          </h2>
          <div className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Stop losing jobs to a screening robot
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Build an ATS-optimised resume in under 15 minutes. Free to start — 3 PDF exports, no credit card.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Build my ATS resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA />
    </main>
  );
}
