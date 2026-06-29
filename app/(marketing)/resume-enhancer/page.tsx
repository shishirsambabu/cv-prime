import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Sparkles, GaugeCircle, Wand2, FileSearch, Download, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Resume Enhancer — Enhance Your Resume Free Online | CV Prime',
  description:
    'Enhance your resume with AI. Paste your resume and a job description — CV Prime rewrites weak bullets, fills keyword gaps, improves your summary, and gives a live ATS score. Free to start. No credit card required.',
  keywords: [
    'resume enhancer',
    'ai resume enhancer',
    'resume enhancer free',
    'resume enhancer online',
    'enhance resume with ai',
    'resume enhancement tool',
    'resume improver',
    'resume booster',
    'ai resume improver',
    'improve resume online free',
    'resume enhancement india',
    'resume enhancer india',
    'free resume enhancer online india',
    'ai resume enhancement tool 2026',
  ],
  alternates: { canonical: 'https://cv-prime.in/resume-enhancer' },
  openGraph: {
    title: 'AI Resume Enhancer — Enhance Your Resume Free | CV Prime',
    description:
      'Paste your resume + a job description. AI rewrites weak bullets, fills keyword gaps, and lifts your ATS score. Free to try.',
    url: 'https://cv-prime.in/resume-enhancer',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Resume Enhancer — CV Prime' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does an AI resume enhancer do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "An AI resume enhancer analyses your existing resume against a target job description, identifies weaknesses (missing keywords, vague bullets, weak summary), and rewrites or improves those elements. CV Prime's enhancer specifically: rewrites duty-based bullets into outcome-driven statements, fills keyword gaps identified by comparing your resume to the JD, and strengthens your professional summary to match the target role.",
      },
    },
    {
      '@type': 'Question',
      name: 'How is a resume enhancer different from a resume builder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A resume builder helps you create a new resume from scratch. A resume enhancer improves an existing resume — it reads what you have and makes it better. CV Prime does both: you can upload your existing resume (PDF or DOCX) for enhancement, or build a new one from scratch. The enhancement feature is particularly useful when you already have a resume but it\'s not performing well (low ATS scores, no interview callbacks).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a free resume enhancer good enough, or do I need to pay?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "CV Prime's free plan includes 3 PDF exports with the full enhancement workflow: ATS scoring, keyword gap analysis, AI bullet rewrites, and summary improvement — all at no cost and with no credit card required. For active job seekers applying to many roles, Pro at ₹999 one-time removes the PDF export limit.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much can AI resume enhancement improve my ATS score?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Job seekers using CV Prime report an average 40% improvement in ATS score after AI enhancement. The improvement is most significant when the original resume has low keyword match (under 50%), vague experience bullets with no quantified outcomes, or a missing/generic professional summary.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will an AI-enhanced resume sound artificial to recruiters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "CV Prime's AI enhances your resume using only the information you provide — it does not fabricate achievements, skills, or experiences. The AI restructures and strengthens how your real experience is expressed: converting duty descriptions into outcome statements, using industry-specific vocabulary, and matching the language of your target role. The result reads as a more confident and specific version of your own voice, not as AI-generated text.",
      },
    },
  ],
};

const enhancementSteps = [
  {
    step: '01',
    icon: FileSearch,
    title: 'Upload your existing resume',
    body: 'Import your current PDF or DOCX, or paste your resume text. CV Prime reads every section — experience, skills, summary, education.',
  },
  {
    step: '02',
    icon: GaugeCircle,
    title: 'Paste any job description',
    body: 'The AI compares your resume against the JD. You get a 0–100 ATS score, the exact missing keywords by section, and a list of vague or weak bullets.',
  },
  {
    step: '03',
    icon: Wand2,
    title: 'AI rewrites weak spots',
    body: 'Click Fix. The AI rewrites your bullets with outcome-driven language and JD keywords, strengthens your summary, and fills identified keyword gaps.',
  },
  {
    step: '04',
    icon: Download,
    title: 'Download the enhanced resume',
    body: 'Export a clean ATS-readable PDF in seconds. Apply with confidence — you know exactly how your enhanced resume scores against this specific JD.',
  },
];

const whatWeEnhance = [
  {
    before: '"Responsible for managing a team of 5 engineers"',
    after: '"Led 5-engineer team delivering payment microservice handling 80K daily transactions, reducing checkout latency by 340ms"',
    tag: 'Experience bullet',
  },
  {
    before: '"Experienced marketing professional seeking a challenging opportunity"',
    after: '"Performance Marketing Manager with 6 years growing D2C brands — delivered 3.2× ROAS on ₹4Cr annual ad spend at Nykaa"',
    tag: 'Professional summary',
  },
  {
    before: '"Skills: Excel, PowerPoint, Communication, Teamwork"',
    after: '"Technical Skills: SQL, Python, Tableau, Power BI, Google Analytics — aligned to target analytics JD keywords"',
    tag: 'Skills section',
  },
];

export default function ResumeEnhancerPage(): JSX.Element {
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
            <Sparkles className="h-4 w-4 text-cyan-400" />
            Free AI resume enhancer — no credit card required
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            AI resume enhancer — improve your resume in minutes
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Upload your existing resume, paste a job description, and let AI identify what&apos;s weak and fix it. Vague bullets become outcome-driven proof. Missing keywords get filled. Your ATS score improves — before you apply.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/signup?next=/dashboard"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-7 py-3.5 font-display font-bold text-brand-foreground transition-opacity hover:opacity-90"
            >
              Enhance my resume free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/tools/ats-keyword-matcher" className="text-sm font-medium text-slate-300 hover:text-white underline underline-offset-2">
              Try free keyword matcher →
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">3 free PDF exports · No credit card · Free ATS scoring</p>
        </div>
      </section>

      {/* Enhancement stats */}
      <section className="border-b border-slate-100 px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              { stat: '40%', label: 'average ATS score improvement after AI enhancement' },
              { stat: '75%', label: 'of resumes rejected by ATS before a human reads them' },
              { stat: '55%', label: 'of ATS rejections due to missing keywords — not missing skills' },
              { stat: '6s', label: 'average recruiter time on CV after it passes ATS screening' },
            ].map((item) => (
              <div key={item.stat} className="text-center">
                <p className="font-display text-4xl font-bold text-brand">{item.stat}</p>
                <p className="mt-1 text-sm text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">How the AI resume enhancer works</h2>
          <p className="mt-3 text-slate-500">Four steps from your current resume to an ATS-optimised version.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {enhancementSteps.map((s) => (
              <div key={s.step} className="rounded-2xl border border-slate-200 p-6">
                <div className="flex items-start gap-3">
                  <span className="font-display text-2xl font-bold text-brand/30">{s.step}</span>
                  <s.icon className="mt-1 h-5 w-5 shrink-0 text-brand" />
                </div>
                <p className="mt-3 font-display font-bold text-slate-900">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After examples */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">What AI resume enhancement looks like</h2>
          <p className="mt-3 text-slate-500">Real before-and-after examples of AI enhancement across different resume sections.</p>
          <div className="mt-8 space-y-6">
            {whatWeEnhance.map((item) => (
              <div key={item.tag} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="border-b border-slate-100 px-5 py-3">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{item.tag}</span>
                </div>
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                  <div className="p-5">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-red-500">Before</p>
                    <p className="text-sm italic text-slate-600">{item.before}</p>
                  </div>
                  <div className="p-5 bg-cyan-50/50">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-cyan-700">After AI enhancement</p>
                    <p className="text-sm text-slate-800 font-medium">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What CV Prime enhances */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">What CV Prime&apos;s enhancer improves</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Experience bullets',
                body: 'Converts duty-based bullets ("responsible for X") into outcome-driven proof ("increased X by 40% using Y").',
                icon: Wand2,
              },
              {
                title: 'Keyword coverage',
                body: 'Identifies which keywords from the job description are missing and weaves them naturally into your skills and experience sections.',
                icon: FileSearch,
              },
              {
                title: 'Professional summary',
                body: 'Rewrites your summary to lead with your strongest metric, mirror the target role language, and hit the key JD requirements.',
                icon: Sparkles,
              },
              {
                title: 'ATS score',
                body: 'Gives you a 0–100 score against the JD before and after enhancement — so you can see the improvement and know when to stop.',
                icon: GaugeCircle,
              },
              {
                title: 'Skills section',
                body: 'Reorganises and fills your skills section with JD-matched keywords that ATS systems screen against first.',
                icon: Zap,
              },
              {
                title: 'Action verb strength',
                body: 'Replaces weak verbs ("helped with", "assisted in") with powerful action verbs (Architected, Launched, Generated) relevant to your role.',
                icon: CheckCircle2,
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 p-6">
                <item.icon className="h-6 w-6 text-brand" />
                <p className="mt-3 font-display font-bold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Free to enhance — ₹999 one-time for unlimited</h2>
          <p className="mt-3 text-slate-500">No subscription. No auto-renewal. No credit card to start.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 text-left">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="font-display text-xl font-bold">Free plan</p>
              <p className="mt-1 text-sm text-slate-500">₹0 — no credit card required</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {['3 enhanced PDF exports (no watermark)', 'Full ATS scoring for every JD', 'AI bullet rewriting', 'Summary enhancement', 'Keyword gap analysis', 'All 8 ATS-safe templates', 'Cover letter generation'].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-bold text-slate-800 hover:bg-slate-100 transition-colors"
              >
                Start free <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl border-2 border-cyan-400 bg-white p-6 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-bold text-brand-foreground">Most popular</div>
              <p className="font-display text-xl font-bold">Lifetime Pro</p>
              <p className="mt-1 text-sm text-slate-500">₹999 one-time — pay once, use forever</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {['Everything in Free, plus:', 'Unlimited PDF exports', 'Unlimited AI tailoring sessions', 'Unlimited job tracker entries', 'Priority AI processing', 'No watermark'].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/pricing"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-brand-foreground hover:opacity-90 transition-opacity"
              >
                Get Lifetime Pro <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">FAQ — AI resume enhancement</h2>
          <div className="mt-8 divide-y divide-slate-200">
            {[
              {
                q: 'What does an AI resume enhancer do?',
                a: "An AI resume enhancer analyses your existing resume against a target job description, finds weaknesses — missing keywords, vague bullets, weak summary — and rewrites those elements. CV Prime's enhancer converts duty-based bullets to outcome statements, fills keyword gaps from the JD, and strengthens your professional summary to match the target role.",
              },
              {
                q: 'How is a resume enhancer different from a resume builder?',
                a: 'A resume builder creates from scratch. A resume enhancer improves what you already have. CV Prime does both — you can upload an existing PDF or DOCX for enhancement, or build new. Enhancement is most useful when you have a resume that isn\'t getting callbacks.',
              },
              {
                q: 'Is a free resume enhancer good enough?',
                a: "CV Prime's free plan includes 3 PDF exports with the full enhancement workflow: ATS scoring, keyword gap analysis, AI bullet rewrites, and summary improvement — all free. For active job seekers applying to many roles, Pro at ₹999 one-time removes the export limit.",
              },
              {
                q: 'How much can AI resume enhancement improve my ATS score?',
                a: 'CV Prime users see an average 40% improvement in ATS score after enhancement. Biggest gains come from resumes with low keyword match (under 50%), duty-based bullets with no metrics, or missing professional summary.',
              },
              {
                q: 'Will an enhanced resume sound artificial?',
                a: "CV Prime's AI works only with information you provide — it doesn't fabricate achievements. It restructures how you express your real experience: stronger verbs, quantified outcomes, JD-matched vocabulary. The result is a more confident version of your own voice.",
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

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-10">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold text-slate-500">Related tools and guides</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/resume-optimizer', label: 'Resume Optimizer' },
              { href: '/ats-checker', label: 'ATS Checker' },
              { href: '/ats-score-checker', label: 'ATS Score Checker' },
              { href: '/resume-scanner', label: 'Resume Scanner' },
              { href: '/ai-resume-rewriter', label: 'AI Resume Rewriter' },
              { href: '/resume-checker', label: 'Resume Checker' },
              { href: '/tailor-resume-to-job-description', label: 'Tailor Resume to JD' },
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
