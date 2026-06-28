import { AiToolCallout } from '@/components/tools/ai/AiToolCallout';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, AlertTriangle, BarChart3, Search, Zap } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Free Resume Checker — Score & Fix Your Resume in 60 Seconds | CV Prime',
  description:
    'Free resume checker tool. Paste your resume and a job description to get an instant ATS score, keyword gap analysis, and AI-powered fix recommendations. No signup required to see your score.',
  alternates: { canonical: 'https://cv-prime.in/resume-checker' },
  keywords: [
    'resume checker',
    'free resume checker',
    'resume checker online',
    'resume score checker',
    'ats resume checker',
    'resume review',
    'resume checker free',
    'resume analyser',
    'cv checker',
    'resume checker tool',
    'check my resume',
    'resume review online',
    'resume scanner',
    'resume keyword checker',
  ],
  openGraph: {
    title: 'Free Resume Checker — ATS Score + Keyword Analysis | CV Prime',
    description:
      'Check your resume against any job description. Get an instant ATS score, see missing keywords, and fix everything with AI — free.',
    url: 'https://cv-prime.in/resume-checker',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Free Resume Checker — CV Prime' }],
  },
};

const whatWeCheck = [
  {
    icon: Search,
    title: 'Keyword coverage',
    desc: 'Which critical keywords from the job description appear in your resume — and which are missing. Missing keywords are the #1 reason for ATS rejection.',
  },
  {
    icon: BarChart3,
    title: 'ATS compatibility score',
    desc: 'A 0–100 composite score showing how likely your resume is to pass the Applicant Tracking System at the company you\'re targeting.',
  },
  {
    icon: CheckCircle2,
    title: 'Section completeness',
    desc: 'Whether your resume has all the sections ATS expects — Summary, Experience, Education, Skills — and whether they are properly structured.',
  },
  {
    icon: Zap,
    title: 'Bullet quality analysis',
    desc: 'Whether your experience bullets use strong action verbs and contain quantified outcomes — the two biggest factors in recruiter engagement after ATS pass.',
  },
  {
    icon: AlertTriangle,
    title: 'Format compliance',
    desc: 'Whether your resume uses an ATS-parseable layout. Tables, columns, text boxes, and graphics break most ATS parsers and cause silent rejections.',
  },
  {
    icon: Search,
    title: 'Skills density',
    desc: 'Whether technical and soft skills from the JD appear naturally distributed throughout your resume or are missing entirely.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Paste the job description',
    desc: 'Copy the full job description from Naukri, LinkedIn, Indeed, Instahyre, or any company careers page and paste it into CV Prime.',
  },
  {
    num: '02',
    title: 'Add your resume',
    desc: 'Upload your existing PDF or DOCX resume, or paste it as text. CV Prime extracts the content and analyses it against the JD.',
  },
  {
    num: '03',
    title: 'Get your resume check results instantly',
    desc: 'See your ATS score, the full keyword gap list, section issues, and bullet quality rating — all in under 60 seconds.',
  },
  {
    num: '04',
    title: 'Fix everything with AI in one click',
    desc: 'CV Prime\'s AI automatically fixes your resume: adds missing keywords, rewrites weak bullets, strengthens your summary, and keeps your original facts intact.',
  },
];

const scoreRanges = [
  { range: '85–100', label: 'Excellent', color: 'text-green-700 bg-green-50 border-green-200', desc: 'Your resume will pass ATS at most companies. Focus now on interview prep, not resume tweaks.' },
  { range: '70–84', label: 'Good', color: 'text-cyan-300 bg-cyan-500/10 border-cyan-400/30', desc: 'A few keyword gaps remain. One targeted AI edit session should push you above 85 and significantly improve your callback rate.' },
  { range: '55–69', label: 'Needs work', color: 'text-amber-300 bg-amber-500/10 border-amber-400/20', desc: 'Significant keyword gaps. ATS will likely filter you out at competitive companies even if you are qualified.' },
  { range: '0–54', label: 'High risk', color: 'text-red-700 bg-red-50 border-red-200', desc: 'Your resume is unlikely to pass ATS for this role. Immediate tailoring needed before applying.' },
];

const faqs = [
  {
    q: 'What does a resume checker do?',
    a: 'A resume checker analyses your resume against a specific job description to measure ATS compatibility. It identifies missing keywords, weak sections, poor formatting, and vague bullets — all the things that cause automated rejection before a recruiter ever sees your application. CV Prime\'s resume checker also provides AI-powered fix recommendations for every issue it finds.',
  },
  {
    q: 'Is the resume checker really free?',
    a: 'Yes. You can run the full resume check — including the ATS score, keyword gap analysis, and section review — for free with a CV Prime account. Sign-up takes 30 seconds and requires no credit card. Free plan includes 3 resume checks with AI fix recommendations.',
  },
  {
    q: 'How accurate is CV Prime\'s resume checker?',
    a: 'Very accurate for keyword-based ATS systems, which is how most Indian companies (using Taleo, Workday, Greenhouse, iCIMS, or Lever) filter resumes. The checker identifies missing keywords, structural issues, and format violations that actually cause rejections. AI scoring may vary ±5 points between runs — what matters most is the keyword gap analysis and fix list.',
  },
  {
    q: 'Why is my resume being rejected even though I\'m qualified?',
    a: 'The most common reason is ATS keyword mismatch — your resume doesn\'t contain the specific keywords from the job description. ATS systems are literal: if the JD says "data visualisation" and your resume says "data reporting," the ATS may not connect them. CV Prime\'s resume checker finds exactly this gap and fixes it.',
  },
  {
    q: 'How often should I check my resume?',
    a: 'Check your resume against the JD every time you apply to a new role — especially if the roles are in different companies, industries, or seniority levels. A resume that scores 88 for a Software Engineer role at Infosys may score 52 for a similar-sounding role at a startup with different keyword preferences.',
  },
  {
    q: 'What resume score do I need to get shortlisted?',
    a: 'Aim for 75+ for most roles. Above 85 is excellent and significantly improves your callback rate. Below 60 usually means keyword gaps — not a skills gap — and those are fixable in under 5 minutes with AI tailoring.',
  },
  {
    q: 'Does the resume checker work for all industries?',
    a: 'Yes. CV Prime\'s resume checker has been tested across IT, BFSI, consulting, manufacturing, healthcare, marketing, sales, and operations roles in India. It understands both Indian and global resume conventions and keyword patterns.',
  },
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
    { '@type': 'ListItem', position: 2, name: 'Resume Checker', item: 'https://cv-prime.in/resume-checker' },
  ],
};

export default function ResumeCheckerPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-violet-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <BarChart3 className="h-4 w-4" />
            Free resume checker — instant ATS score
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Check your resume. Find every weakness. Fix it all — free.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Paste your resume and job description to get an instant ATS compatibility score, full keyword gap list, and AI-powered fix plan. Know exactly why your resume might be failing — and fix it in minutes.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Check my resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/ats-friendly-cv"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              What is ATS?
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free account · No credit card · Results in 60 seconds</p>
        </div>
      </section>
      <AiToolCallout href="/tools/ai-cv-roast" label="Get a brutally honest AI CV critique" blurb="An honest score, what is working, and every red flag paired with a concrete fix." />

      {/* Stats */}
      <section className="border-b border-white/10 bg-white/[0.03] px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {[
            { stat: '75%', label: 'of resumes are rejected by ATS before a human sees them' },
            { stat: '55%', label: 'of ATS rejections are due to missing keywords, not missing qualifications' },
            { stat: '60 sec', label: 'to get your full resume check and fix plan' },
            { stat: '40%', label: 'average improvement in ATS score after CV Prime tailoring' },
          ].map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-cyan-600">{item.stat}</p>
              <p className="mt-1 max-w-[160px] text-xs leading-5 text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">How the resume checker works</h2>
            <p className="mt-4 text-slate-400">From paste to fix in four steps</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {steps.map((step) => (
              <div key={step.num} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 font-display text-xl font-bold text-cyan-300">
                  {step.num}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we check */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">What the resume checker analyses</h2>
            <p className="mt-4 text-slate-400">Six dimensions that determine whether your resume gets through</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeCheck.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl bg-white/[0.04] p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Score guide */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold">What your resume score means</h2>
          <p className="mt-4 text-center text-slate-400">Your ATS score is always relative to the specific job description — not universal</p>
          <div className="mt-10 space-y-4">
            {scoreRanges.map((range) => (
              <div key={range.range} className={`flex items-start gap-5 rounded-2xl border p-5 ${range.color}`}>
                <div className="shrink-0 rounded-xl px-4 py-2 text-sm font-bold bg-white/60 min-w-[80px] text-center">
                  {range.range}
                </div>
                <div>
                  <p className="font-bold">{range.label}</p>
                  <p className="mt-1 text-sm leading-6 opacity-90">{range.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-amber-400/20 bg-amber-500/10 p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
              <div>
                <p className="font-bold text-white">Your resume score is role-specific</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  A resume that scores 90 for a Software Engineer role at Amazon may score 55 for a similar role at a different company. Always check your score against the <em>specific</em> job description you are applying for — that is when the data is meaningful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Resume checker — frequently asked questions</h2>
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
          <h2 className="font-display text-lg font-bold text-white">Related tools & guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/ats-checker', label: 'ATS resume checker' },
              { href: '/ats-friendly-cv', label: 'ATS-friendly resume guide' },
              { href: '/resume-builder', label: 'AI resume builder' },
              { href: '/free-resume-builder', label: 'Free resume builder' },
              { href: '/resume-format', label: 'Resume format guide' },
              { href: '/statistics', label: 'ATS & resume statistics' },
              { href: '/cv-examples', label: 'Resume examples by role' },
              { href: '/blog/ats-resume-mistakes', label: '15 ATS resume mistakes' },
              { href: '/blog/resume-format-india-2026', label: 'Best resume format India 2026' },
              { href: '/blog/how-to-write-skills-section-resume-2026', label: 'How to write your skills section' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 hover:border-cyan-300 hover:text-cyan-300 transition">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Find out why your resume is being ignored — and fix it free</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Your ATS score, keyword gaps, and a full fix plan in 60 seconds. No credit card.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Check my resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Check my resume free" message="Free resume checker — ATS score + keyword gaps + AI fix plan in 60 seconds" />
    </main>
  );
}
