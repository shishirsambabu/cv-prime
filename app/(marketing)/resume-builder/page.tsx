import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Sparkles, FileText, Download, BarChart3, Wand2 } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Free AI Resume Builder — Create a Resume Online in Minutes | CV Prime',
  description:
    'Build a professional resume free with CV Prime\'s AI resume builder. Paste a job description, let AI tailor your resume, score your ATS match, and export a recruiter-ready PDF in minutes. No credit card required.',
  alternates: { canonical: 'https://cv-prime.in/resume-builder' },
  keywords: [
    'resume builder',
    'free resume builder',
    'ai resume builder',
    'resume builder online',
    'resume maker free',
    'resume creator',
    'resume builder india',
    'online resume builder',
    'professional resume builder',
    'resume builder no sign up',
    'best resume builder',
    'resume builder free download',
  ],
  openGraph: {
    title: 'Free AI Resume Builder — Build & Download Your Resume | CV Prime',
    description:
      'Create a professional, ATS-optimised resume in minutes. AI tailors your resume to any job description and exports a clean PDF — free to start.',
    url: 'https://cv-prime.in/resume-builder',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Free AI Resume Builder — CV Prime' }],
  },
};

const features = [
  {
    icon: Sparkles,
    title: 'AI resume tailoring',
    desc: 'Paste any job description and AI rewrites your resume to match — keywords, bullets, summary, all of it.',
  },
  {
    icon: BarChart3,
    title: 'ATS resume scoring',
    desc: 'Get a 0–100 ATS compatibility score and a prioritised list of fixes before you hit apply.',
  },
  {
    icon: FileText,
    title: '8 professional templates',
    desc: 'Modern, Classic, Executive, Technical, Creative, Minimal, Academic, and Premium — all ATS-readable.',
  },
  {
    icon: Wand2,
    title: 'Bullet rewriter',
    desc: 'Turn vague "responsible for X" statements into outcome-driven bullets with measurable impact.',
  },
  {
    icon: Download,
    title: 'Clean PDF export',
    desc: 'Export a recruiter-ready PDF with browser-native print — no watermarks on paid plans.',
  },
  {
    icon: CheckCircle2,
    title: 'Job tracker included',
    desc: 'Track every application, status, and follow-up in one place alongside your resume workspace.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Start with your existing resume or build from scratch',
    desc: 'Upload a PDF or DOCX resume and CV Prime extracts your experience, education, and skills automatically. Or start from a blank canvas and fill in each section — whichever is faster.',
  },
  {
    num: '02',
    title: 'Paste the job description to tailor your resume',
    desc: 'Copy the full job description from Naukri, LinkedIn, Indeed, or the company careers page. CV Prime\'s AI reads both your resume and the JD, then rewrites your bullets, adds missing keywords, and tightens your summary to match the role.',
  },
  {
    num: '03',
    title: 'Check your ATS score and fix what\'s weak',
    desc: 'See your ATS match score instantly. Every keyword gap, missing section, and weak bullet is flagged with a fix suggestion. Use the AI to apply the fixes in one click.',
  },
  {
    num: '04',
    title: 'Choose a template and export your resume as PDF',
    desc: 'Pick from 8 professionally designed templates and export a pixel-perfect PDF. Free plan includes 3 PDF downloads. Pro gives you unlimited clean exports with no watermark.',
  },
];

const faqs = [
  {
    q: 'Is CV Prime\'s resume builder really free?',
    a: 'Yes. The free plan includes 3 PDF exports, full ATS scoring, AI bullet rewrites, and access to all 8 templates. No credit card required to start. Upgrade to Pro (₹249/month) for unlimited exports and no watermark.',
  },
  {
    q: 'What makes CV Prime different from other resume builders?',
    a: 'Most resume builders are template-first — you pick a design and fill in blanks. CV Prime is diagnosis-first: it tells you exactly why your resume might be failing ATS, shows you the keyword gaps, and fixes them with AI automatically. The template is just how you export the result.',
  },
  {
    q: 'Can I use this resume builder if I have no work experience?',
    a: 'Absolutely. CV Prime works for freshers, students, and career changers. For zero-experience candidates, it structures education, internships, projects, and skills into a professional resume format and highlights transferable skills that match the job description.',
  },
  {
    q: 'Does the AI resume builder work for Indian job portals?',
    a: 'Yes. CV Prime is built specifically for the Indian job market — it understands keywords and formats used by Naukri, LinkedIn India, Shine, Indeed India, and Instahyre. The ATS scoring is calibrated for Indian employer patterns including IT, BFSI, consulting, and startup roles.',
  },
  {
    q: 'How long does it take to build a resume?',
    a: 'If you upload an existing resume: 2–5 minutes to get a tailored, ATS-scored draft. If you start from scratch: 15–20 minutes. The AI handles the heavy lifting — you just review and approve the rewrites.',
  },
  {
    q: 'Can I save multiple resume versions?',
    a: 'Yes. CV Prime lets you create multiple resume versions — one for each role or industry you are targeting. Each version is stored separately in your dashboard so you can switch between them without overwriting previous work.',
  },
  {
    q: 'What file formats does the resume builder support?',
    a: 'You can upload your existing resume as a PDF, DOCX, or TXT file. Exports are as PDF via browser-native print — clean, ATS-readable, and professional.',
  },
  {
    q: 'Is CV Prime suitable for senior professionals and executives?',
    a: 'Yes. CV Prime has dedicated templates and AI prompts for senior professionals — including the Executive and Premium templates. The AI understands how to frame leadership impact, P&L ownership, and strategic outcomes appropriate for director and VP-level applications.',
  },
];

const templateNames = [
  { name: 'Modern', best: 'Product, marketing, growth' },
  { name: 'Classic', best: 'Finance, banking, law' },
  { name: 'Executive', best: 'Leadership, strategy, C-suite' },
  { name: 'Technical', best: 'Engineering, data science, DevOps' },
  { name: 'Creative', best: 'Design, media, content' },
  { name: 'Minimal', best: 'Consulting, research, academia' },
  { name: 'Academic', best: 'PhD, research, education' },
  { name: 'Premium', best: 'High-conviction senior applications' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
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
    { '@type': 'ListItem', position: 2, name: 'Resume Builder', item: 'https://cv-prime.in/resume-builder' },
  ],
};

export default function ResumeBuilderPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <Sparkles className="h-4 w-4" />
            AI resume builder — free to start
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Build a resume that actually gets you interviews
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            CV Prime's AI resume builder tailors your resume to every job description, scores your ATS match, rewrites weak bullets, and exports a recruiter-ready PDF — all in minutes.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Build my resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              Browse templates
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free plan · 3 PDF exports · No credit card · ATS scoring included</p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {[
            { stat: '75%', label: 'of resumes rejected by ATS before a human reads them' },
            { stat: '5 min', label: 'average time to tailor a resume with CV Prime AI' },
            { stat: '40%', label: 'average improvement in ATS score after CV Prime tailoring' },
            { stat: '8', label: 'professional resume templates, all ATS-readable' },
          ].map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-brand">{item.stat}</p>
              <p className="mt-1 max-w-[160px] text-xs leading-5 text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">How CV Prime's resume builder works</h2>
            <p className="mt-4 text-slate-500">Four steps from blank page to a resume that gets callbacks</p>
          </div>
          <div className="mt-14 space-y-8">
            {steps.map((step, i) => (
              <div key={step.num} className={`flex gap-6 rounded-2xl border border-slate-100 bg-slate-50 p-6 md:gap-10 ${i % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand text-brand-foreground font-display text-xl font-bold">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-950">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Everything in one resume builder</h2>
            <p className="mt-4 text-slate-500">Not just templates — a full resume optimisation workflow</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-slate-950">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">8 resume templates for every career</h2>
            <p className="mt-4 text-slate-500">ATS-readable, professionally designed — not generic</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {templateNames.map((t) => (
              <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-brand hover:shadow-md transition">
                <p className="font-display text-lg font-bold text-slate-950">{t.name}</p>
                <p className="mt-1 text-sm text-slate-500">Best for: {t.best}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/templates" className="inline-flex items-center gap-2 text-sm font-bold text-brand underline underline-offset-4">
              Browse all templates <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Resume builder vs competitors */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold">CV Prime vs other resume builders</h2>
          <p className="mt-4 text-center text-slate-500">Why job seekers choose CV Prime over template-only tools</p>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-3 text-left font-semibold text-slate-700">Feature</th>
                  <th className="pb-3 text-center font-bold text-brand">CV Prime</th>
                  <th className="pb-3 text-center text-slate-500">Canva</th>
                  <th className="pb-3 text-center text-slate-500">Zety</th>
                  <th className="pb-3 text-center text-slate-500">Resume.io</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ['ATS keyword scoring', '✅', '❌', '❌', '❌'],
                  ['AI resume tailoring to JD', '✅', '❌', 'Limited', '❌'],
                  ['Bullet point rewriter', '✅', '❌', '❌', '❌'],
                  ['Free PDF export', '✅ 3 free', '✅', '❌ Paid', '❌ Watermarked'],
                  ['India pricing (INR)', '✅ ₹249/mo', '❌ USD', '❌ USD', '❌ USD'],
                  ['Job application tracker', '✅', '❌', '❌', '❌'],
                  ['No credit card to start', '✅', '✅', '❌', '❌'],
                ].map(([feature, ...vals]) => (
                  <tr key={feature}>
                    <td className="py-3 font-medium text-slate-700">{feature}</td>
                    {vals.map((v, i) => (
                      <td key={i} className={`py-3 text-center ${i === 0 ? 'font-semibold text-slate-950' : 'text-slate-500'}`}>{v}</td>
                    ))}
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
          <h2 className="text-center font-display text-3xl font-bold">Resume builder — FAQ</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <h3 className="font-display text-lg font-bold text-slate-950">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-slate-900">Related tools & guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/ats-checker', label: 'Free ATS resume checker' },
              { href: '/ats-friendly-cv', label: 'ATS-friendly resume guide' },
              { href: '/ai-cv-builder', label: 'AI CV builder' },
              { href: '/cover-letter', label: 'AI cover letter generator' },
              { href: '/resume-format', label: 'Resume format guide' },
              { href: '/cv-examples', label: 'Resume examples by role' },
              { href: '/fresher-resume', label: 'Fresher resume guide' },
              { href: '/statistics', label: 'ATS statistics 2026' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand hover:text-brand transition">
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
            Build a resume that passes ATS and impresses recruiters — free
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            No credit card. No templates to wrestle with. Just paste your JD and let AI do the heavy lifting.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Start building free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build my resume free" message="AI resume builder — tailor to any job description in minutes" />
    </main>
  );
}
