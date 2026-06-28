import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Gauge, ScanLine, ListChecks, KeyRound, FileWarning } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Free ATS Score Checker — Score Your Resume 0–100 Instantly | CV Prime',
  description:
    'Check your resume\'s ATS score for free. Paste a job description and your resume, and CV Prime scores your ATS match 0–100 — keyword coverage, missing skills, format issues, and exactly how to fix each one. Built for India.',
  alternates: { canonical: 'https://cv-prime.in/ats-score-checker' },
  keywords: [
    'ats score checker',
    'ats resume checker free',
    'resume ats score',
    'free ats checker india',
    'resume keyword scanner',
    'ats score',
    'check ats score',
    'ats compatibility checker',
    'resume ats test',
    'ats checker online free',
  ],
  openGraph: {
    title: 'Free ATS Score Checker — Score Your Resume 0–100 Instantly | CV Prime',
    description:
      'Paste your resume + a job description and get a 0–100 ATS score with keyword gaps, format issues, and fixes. Free, built for India.',
    url: 'https://cv-prime.in/ats-score-checker',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Free ATS score checker — CV Prime' }],
  },
};

const scoreBands = [
  { range: '85–100', label: 'Strong match', color: 'bg-green-100 text-green-700', note: 'Clears ATS filters comfortably and reads as a strong fit. Apply with confidence.' },
  { range: '70–84', label: 'Likely to pass', color: 'bg-emerald-100 text-emerald-300', note: 'Above the threshold most Indian employers set for human review. A few fixes push it higher.' },
  { range: '55–69', label: 'At risk', color: 'bg-amber-100 text-amber-300', note: 'Borderline — may be filtered depending on the role. Missing keywords are usually the cause.' },
  { range: '0–54', label: 'Likely rejected', color: 'bg-red-100 text-red-700', note: 'Most ATS configurations filter this out before a human ever sees it. Tailoring is essential.' },
];

const whatItChecks = [
  { icon: KeyRound, title: 'Keyword coverage', desc: 'Compares your resume against the exact skills, tools, and qualifications in the JD and reports your match percentage — plus the specific keywords you are missing.' },
  { icon: ListChecks, title: 'Section completeness', desc: 'Flags missing or weak sections an ATS expects — summary, skills, experience with dates, education — and points out where structure is hurting your parse.' },
  { icon: FileWarning, title: 'Format compliance', desc: 'Detects ATS-breaking elements: multi-column layouts, tables, headers/footers, images, and unusual fonts that cause parsers to drop or scramble your content.' },
  { icon: ScanLine, title: 'Bullet quality', desc: 'Identifies vague, duties-based bullets ("responsible for…") and shows where quantified, action-led rewrites would raise both your ATS and recruiter score.' },
];

const fixes = [
  {
    title: 'Low keyword coverage',
    cause: 'Your resume uses different words than the JD — "led a team" when the JD screens for "stakeholder management".',
    fix: 'CV Prime lists every missing keyword and weaves it into your real bullets and skills section, lifting coverage without stuffing.',
  },
  {
    title: 'Format parse failures',
    cause: 'Two-column or table-based templates look great to humans but break most ATS parsers, dropping half your content.',
    fix: 'Switch to one of CV Prime\'s 8 ATS-safe single-column templates — same clean look, but fully machine-readable.',
  },
  {
    title: 'Weak or missing sections',
    cause: 'No dedicated skills section, missing dates, or an objective where a summary should be.',
    fix: 'CV Prime restructures your resume into the sections an ATS expects and rewrites your summary to lead with the target role.',
  },
];

const faqs = [
  {
    q: 'What is an ATS score?',
    a: 'An ATS score is a 0–100 measure of how well your resume matches a specific job description in the eyes of an Applicant Tracking System — the software 90%+ of large Indian companies use to pre-screen applications. The score combines keyword coverage (how many of the JD\'s required skills appear in your resume), section completeness, and format compliance. A higher score means you are more likely to clear the automated filter and reach a human recruiter.',
  },
  {
    q: 'How do I check my resume\'s ATS score for free?',
    a: 'Paste your resume and the job description into CV Prime\'s ATS score checker. In seconds you get a 0–100 score with a full breakdown: keyword match percentage, the exact missing keywords, format warnings, and section gaps. The free plan includes ATS scoring and 3 PDF exports at no cost, with no credit card required.',
  },
  {
    q: 'What is a good ATS score?',
    a: 'Aim for 80+. Most Indian employers configure their ATS to surface resumes scoring roughly 70 and above for human review, so anything under that risks being filtered out automatically. A score of 85–100 indicates a strong match. Because the score is calculated against one specific JD, the same resume can score 88 for one role and 54 for another — which is why you check it per application.',
  },
  {
    q: 'Why does my resume get a different ATS score for different jobs?',
    a: 'Because an ATS score measures fit to one job description, not overall quality. A backend engineer\'s resume might score 90 for a Java backend role and 60 for a frontend React role, even though the resume itself has not changed. This is exactly why a single generic resume underperforms — and why CV Prime lets you re-check and tailor for every role you apply to.',
  },
  {
    q: 'Is this ATS checker accurate for Indian companies?',
    a: 'Yes. CV Prime\'s scoring is calibrated for the Indian job market — the ATS platforms and screening patterns used by IT majors (TCS, Infosys, Wipro), product companies (Amazon India, Flipkart, Zomato), and BFSI firms. It understands Indian credentials (B.Tech, CGPA, CA) and Indian role terminology, so the score reflects how Indian recruiters\' systems actually read your resume.',
  },
  {
    q: 'Does the ATS checker tell me how to fix a low score?',
    a: 'Yes — that is the point. Unlike checkers that only return a number, CV Prime shows you the specific missing keywords, the format issues, and the weak bullets, then lets you apply AI fixes in one click: keyword injection, bullet rewriting, and an ATS-safe template. You can re-score after fixing to confirm the improvement before you apply.',
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
    { '@type': 'ListItem', position: 2, name: 'ATS Score Checker', item: 'https://cv-prime.in/ats-score-checker' },
  ],
};

export default function ATSScoreCheckerPage(): JSX.Element {
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
            <Gauge className="h-4 w-4" />
            Free ATS score checker — 0 to 100
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Check your resume&apos;s ATS score — free, in seconds
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Paste your resume and a job description. CV Prime scores your ATS match 0–100 and shows the missing keywords, format problems, and weak bullets — then fixes them with AI. Know your score before you apply, not after a rejection.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Check my ATS score free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/tailor-resume-to-job-description" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              Tailor my resume to a JD
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free · No credit card · Keyword + format breakdown included</p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-white/10 bg-white/[0.03] px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {[
            { stat: '75%', label: 'of resumes are filtered by ATS before a human reads them' },
            { stat: '90%+', label: 'of large Indian companies screen with an ATS' },
            { stat: '0–100', label: 'instant score with keyword, format, and section breakdown' },
            { stat: '70+', label: 'the threshold most Indian employers set for human review' },
          ].map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-brand">{item.stat}</p>
              <p className="mt-1 max-w-[170px] text-xs leading-5 text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Score bands */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">What your ATS score means</h2>
            <p className="mt-4 text-slate-400">The score is calculated against one specific job description — check it per role</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {scoreBands.map((b) => (
              <div key={b.range} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="font-display text-2xl font-bold text-white">{b.range}</span>
                  <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${b.color}`}>{b.label}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{b.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it checks */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">What the ATS score checker analyses</h2>
            <p className="mt-4 text-slate-400">Four scoring dimensions — not just a keyword count</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {whatItChecks.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="rounded-2xl bg-white/[0.04] p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{c.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Common fixes */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">The three things that tank an ATS score</h2>
            <p className="mt-4 text-slate-400">And exactly how CV Prime fixes each one</p>
          </div>
          <div className="mt-12 space-y-5">
            {fixes.map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm">
                <h3 className="font-display text-xl font-bold text-white">{f.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300"><span className="font-semibold text-slate-200">Why it happens:</span> {f.cause}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300"><span className="font-semibold text-brand">The fix:</span> {f.fix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">ATS score checker — FAQ</h2>
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
              { href: '/ats-checker', label: 'ATS checker' },
              { href: '/resume-checker', label: 'Free resume checker' },
              { href: '/resume-job-match-score', label: 'Resume job match score' },
              { href: '/tailor-resume-to-job-description', label: 'Tailor resume to a JD' },
              { href: '/ats-friendly-cv', label: 'ATS-friendly CV format' },
              { href: '/ats-resume-builder', label: 'ATS resume builder' },
              { href: '/resume-tips/ats-keywords', label: 'ATS keywords guide' },
              { href: '/ats-guide', label: 'ATS optimisation guides by role' },
              { href: '/ai-resume-rewriter', label: 'AI resume rewriter' },
              { href: '/ats-report-2026', label: 'ATS report 2026' },
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Know your ATS score before you apply</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Paste your resume and a JD. Get a 0–100 score with every keyword gap and format issue — and fix them with AI. Free to start.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Check my ATS score free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Check my ATS score free" message="Score your resume 0–100 against any job description — free" />
    </main>
  );
}
