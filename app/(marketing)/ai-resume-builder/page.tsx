import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Sparkles, BarChart3, Wand2, FileText, Shield, Download } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'AI Resume Builder — Build an ATS-Optimised Resume with AI | CV Prime',
  description:
    'Build a professional resume with AI in minutes. CV Prime\'s AI resume builder tailors your resume to any job description, scores your ATS match, rewrites weak bullets, and exports a recruiter-ready PDF free.',
  alternates: { canonical: 'https://cv-prime.in/ai-resume-builder' },
  keywords: [
    'ai resume builder',
    'ai resume maker',
    'artificial intelligence resume builder',
    'ai resume generator',
    'ai powered resume builder',
    'best ai resume builder',
    'ai resume builder free',
    'ai resume builder india',
    'ai resume writing tool',
    'resume builder with ai',
    'ai cv builder',
    'resume builder artificial intelligence',
    'chatgpt resume builder',
    'ai resume optimizer',
  ],
  openGraph: {
    title: 'AI Resume Builder — Tailor Your Resume to Any Job with AI | CV Prime',
    description:
      'AI resume builder that tailors your resume to any job description, scores ATS match, rewrites weak bullets, and exports a clean PDF — free to start.',
    url: 'https://cv-prime.in/ai-resume-builder',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Resume Builder — CV Prime' }],
  },
};

const howAIWorks = [
  {
    step: '01',
    title: 'Upload your existing resume',
    desc: 'Upload a PDF, DOCX, or paste your resume text. CV Prime extracts your experience, education, skills, and projects automatically — no reformatting needed.',
  },
  {
    step: '02',
    title: 'Paste the job description',
    desc: 'Copy the full JD from Naukri, LinkedIn, Indeed, or the company portal. The AI reads both your resume and the JD simultaneously to understand the gap.',
  },
  {
    step: '03',
    title: 'AI tailors your resume to the role',
    desc: 'The AI rewrites your experience bullets with stronger action verbs and quantified outcomes, adds missing keywords from the JD, tightens your summary, and restructures weak sections — without fabricating facts.',
  },
  {
    step: '04',
    title: 'Review your ATS score and fixes',
    desc: 'Get a 0–100 ATS compatibility score with a full breakdown: keyword coverage %, missing skills, section gaps, and bullet quality. See exactly what changed and why.',
  },
  {
    step: '05',
    title: 'Export a recruiter-ready PDF',
    desc: 'Choose from 8 professional templates and export a clean, ATS-readable PDF. Free plan includes 3 downloads. Pro gives you unlimited exports with no watermark.',
  },
];

const aiCapabilities = [
  {
    icon: Sparkles,
    title: 'JD-specific keyword injection',
    desc: 'The AI reads the exact job description and adds the missing keywords from it into your resume bullets and skills section — naturally, not as keyword stuffing.',
  },
  {
    icon: Wand2,
    title: 'Bullet rewriting with outcomes',
    desc: 'Transforms "responsible for X" into "increased X by 40% by doing Y" — adding action verbs, quantified results, and role-appropriate language.',
  },
  {
    icon: BarChart3,
    title: 'ATS keyword scoring',
    desc: 'Scores your resume against the JD with a 0–100 composite score covering keyword match %, section completeness, and format compliance.',
  },
  {
    icon: FileText,
    title: 'Professional summary rewriting',
    desc: 'Rewrites your summary to be role-specific, lead with your strongest credential, and include the job title from the JD — all in 3 lines.',
  },
  {
    icon: Shield,
    title: 'No fabrication guarantee',
    desc: 'The AI is instructed never to add qualifications, companies, dates, or roles that are not in your original resume. It rewrites what you have — it does not invent.',
  },
  {
    icon: Download,
    title: 'Before / after comparison',
    desc: 'See exactly which bullets were changed, what keywords were added, and how your ATS score improved between the original and the AI-tailored version.',
  },
];

const useCases = [
  {
    title: 'Tailoring to a specific JD',
    example: 'You have a general resume but want to apply to a Senior Product Manager role at Groww. Paste the JD → AI adds missing fintech and growth keywords → ATS score jumps from 61 to 84.',
  },
  {
    title: 'Improving a weak resume',
    example: 'Your current resume has duties-based bullets ("Managed team of 5"). AI rewrites each bullet with outcomes ("Led cross-functional team of 5 to ship payment gateway integration, reducing checkout abandonment by 22%.").',
  },
  {
    title: 'Career change resumes',
    example: 'Moving from a service company (TCS) to a startup. The AI reframes your existing experience using startup terminology and pulls out transferable skills the startup JD is looking for.',
  },
  {
    title: 'Fresher resumes',
    example: 'No work experience yet. AI helps freshers write stronger project bullets, structure internship experience properly, and ensure technical keywords match the JD.',
  },
  {
    title: 'Applying to multiple roles',
    example: 'Applying to 10 companies? Save your base resume in CV Prime. For each JD, run AI tailoring and export a separate PDF. Each version is stored — you always know which resume went where.',
  },
];

const faqItems = [
  {
    q: 'What is an AI resume builder?',
    a: 'An AI resume builder uses artificial intelligence to help you write, tailor, and optimise your resume for specific job applications. Unlike traditional resume builders that just provide templates, an AI resume builder like CV Prime reads your resume and the job description together, then automatically rewrites your bullets, adds missing keywords, and scores your ATS compatibility — so your resume is specifically matched to the role you are applying for.',
  },
  {
    q: 'How is an AI resume builder different from ChatGPT?',
    a: 'ChatGPT is a general-purpose AI that can help you write resume content, but it has no access to your existing resume, no ATS scoring capability, and no resume-specific output formatting. CV Prime\'s AI resume builder is purpose-built: it imports your existing resume, reads the specific job description, runs ATS keyword analysis, produces a properly formatted resume, and scores the result — all in one workflow. It is a complete resume optimisation tool, not a text generator.',
  },
  {
    q: 'Will the AI make up experience I don\'t have?',
    a: 'No. CV Prime\'s AI is explicitly instructed not to fabricate experience, companies, dates, degrees, or qualifications. It can only rewrite, reframe, and restructure information that is already in your resume. If you did not work at Google, the AI will not add Google to your resume. This is a hard constraint in the AI instructions.',
  },
  {
    q: 'Can AI write my entire resume from scratch?',
    a: 'CV Prime can help structure a resume from scratch if you fill in the sections manually — it then rewrites and strengthens each section with AI. However, for best results, start with an existing resume (even a rough draft) and let AI tailor it to the specific JD. A fully AI-generated resume without real experience input produces generic content that experienced recruiters can spot.',
  },
  {
    q: 'Is the AI resume builder free?',
    a: 'Yes. CV Prime\'s AI resume builder is free to start — no credit card required. The free plan includes 3 PDF exports, full ATS scoring, AI bullet rewrites, and all 8 templates. Pro (₹999 one-time) gives you unlimited tailoring sessions and unlimited PDF exports.',
  },
  {
    q: 'How much does an AI resume builder improve ATS scores?',
    a: 'CV Prime users see an average 40% improvement in ATS score after AI tailoring. For a resume starting at 55 (likely ATS rejection territory), that typically means reaching 75+ — above the threshold most Indian companies set for human review. The biggest gains come from keyword injection (adding missing JD keywords) and bullet rewriting (improving the signal quality).',
  },
  {
    q: 'Which is the best AI resume builder for India?',
    a: 'CV Prime is the only AI resume builder built specifically for the Indian job market with INR pricing, Indian payment methods, and ATS scoring calibrated for Indian employers (TCS, Infosys, Wipro, Amazon India, Flipkart, Zomato, etc.). It\'s also one of the most generous free plans in the market — 3 PDF exports, full ATS scoring, all templates.',
  },
  {
    q: 'Does AI resume building work for senior professionals?',
    a: 'Yes. For senior professionals (10+ years), the AI focuses on strategic impact bullets, P&L ownership framing, and leadership scope — rather than task-level descriptions. CV Prime\'s Executive and Premium templates are designed for director, VP, and C-suite level applications.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'AI Resume Builder', item: 'https://cv-prime.in/ai-resume-builder' },
  ],
};

export default function AIResumeBuilderPage(): JSX.Element {
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
            <Sparkles className="h-4 w-4" />
            AI resume builder — tailor to any job description
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The AI resume builder that actually understands the job description
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Paste the job description. CV Prime&apos;s AI reads your resume and the JD together, then rewrites your bullets, adds missing keywords, scores your ATS match, and exports a recruiter-ready PDF — all in under 5 minutes.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Try AI resume builder free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/resume-checker"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              Check my resume first
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free · 3 PDF exports · ATS scoring · No credit card</p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-white/10 bg-white/[0.03] px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {[
            { stat: '40%', label: 'average ATS score improvement after AI tailoring' },
            { stat: '< 5 min', label: 'from paste to a tailored, scored, and exported resume' },
            { stat: '0', label: 'facts fabricated — AI only rewrites what you already have' },
            { stat: '35', label: 'role-specific resume examples with AI generation' },
          ].map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-brand">{item.stat}</p>
              <p className="mt-1 max-w-[160px] text-xs leading-5 text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How AI works */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">How CV Prime&apos;s AI resume builder works</h2>
            <p className="mt-4 text-slate-400">Five steps from your current resume to an ATS-optimised, job-specific version</p>
          </div>
          <div className="mt-14 space-y-5">
            {howAIWorks.map((step) => (
              <div key={step.step} className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-brand-foreground font-display text-lg font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-2 leading-7 text-slate-300">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI capabilities */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">What the AI does to your resume</h2>
            <p className="mt-4 text-slate-400">Six specific AI operations — not just template suggestions</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aiCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="rounded-2xl bg-white/[0.04] p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{cap.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">When to use an AI resume builder</h2>
            <p className="mt-4 text-slate-400">Real use cases — not just theory</p>
          </div>
          <div className="mt-12 space-y-5">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm">
                <h3 className="font-display text-xl font-bold text-white">{useCase.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{useCase.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI vs manual comparison */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold">AI resume builder vs building manually</h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-3 text-left font-semibold text-slate-300">Task</th>
                  <th className="pb-3 text-center font-bold text-brand">AI resume builder</th>
                  <th className="pb-3 text-center text-slate-400">Manual editing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  ['Identify missing keywords from JD', 'Automatic, < 30 seconds', '30–60 min reading and comparing'],
                  ['Rewrite 10 experience bullets', '< 2 minutes', '2–4 hours if done well'],
                  ['ATS compatibility score', 'Instant, 0–100 with breakdown', 'Not measurable manually'],
                  ['Tailor resume to a new JD', '< 5 minutes', '3–5 hours per tailoring'],
                  ['Maintain original facts', 'Guaranteed (no fabrication)', 'Risk of embellishment under pressure'],
                  ['Version management', 'Automatic (all versions saved)', 'Manual file management'],
                ].map(([task, ai, manual]) => (
                  <tr key={task}>
                    <td className="py-3 font-medium text-slate-300">{task}</td>
                    <td className="py-3 text-center font-semibold text-brand">{ai}</td>
                    <td className="py-3 text-center text-slate-400">{manual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">AI resume builder — FAQ</h2>
          <div className="mt-10 space-y-5">
            {faqItems.map((faq) => (
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
          <h2 className="font-display text-lg font-bold text-white">Related tools & guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/resume-tools', label: 'All resume tools' },
              { href: '/resume-builder', label: 'Resume builder' },
              { href: '/free-resume-builder', label: 'Free resume builder' },
              { href: '/tailor-resume-to-job-description', label: 'Tailor resume to a JD' },
              { href: '/ats-score-checker', label: 'Free ATS score checker' },
              { href: '/ai-resume-rewriter', label: 'AI resume rewriter' },
              { href: '/resume-job-match-score', label: 'Resume job match score' },
              { href: '/resume-checker', label: 'Free resume checker' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/ai-cv-builder', label: 'AI CV builder' },
              { href: '/resume-examples', label: 'Resume examples by role' },
              { href: '/cover-letter-generator', label: 'AI cover letter generator' },
              { href: '/fresher-resume', label: 'Fresher resume guide' },
              { href: '/blog/best-ai-resume-builders-india-2026', label: 'Best AI resume builders India 2026' },
              { href: '/blog/ats-resume-mistakes', label: '15 ATS resume mistakes to avoid' },
              { href: '/blog/how-to-write-resume-summary-2026', label: 'How to write a resume summary' },
              { href: '/blog/resume-action-verbs-2026', label: 'Power words & action verbs' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 hover:border-brand hover:text-brand transition">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Stop sending the same resume to every company. Let AI tailor it — free.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Paste the JD. Get a tailored, ATS-scored resume in 5 minutes. 3 free PDF exports. No credit card.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Try AI resume builder free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Try AI resume builder free" message="AI tailors your resume to any job description in 5 minutes — free" />
    </main>
  );
}
