import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Percent, GitCompareArrows, Crosshair, ListChecks, RefreshCw } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Resume Job Match Score — See How Well Your Resume Fits Any Job | CV Prime',
  description:
    'Get a 0–100 job match score for your resume against any job description. CV Prime\'s keyword match tool shows your overlap percentage, the skills you\'re missing, and how to close the gap — free to start.',
  alternates: { canonical: 'https://cv-prime.in/resume-job-match-score' },
  keywords: [
    'resume job match score',
    'resume keyword match tool',
    'job match score',
    'resume match percentage',
    'resume to job description match',
    'cv match score',
    'job description match tool',
    'resume fit score',
    'keyword match resume',
    'how well does my resume match the job',
  ],
  openGraph: {
    title: 'Resume Job Match Score — See How Well Your Resume Fits Any Job | CV Prime',
    description:
      'Get a 0–100 match score for your resume vs any JD — overlap %, missing skills, and how to close the gap. Free to start.',
    url: 'https://cv-prime.in/resume-job-match-score',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume job match score — CV Prime' }],
  },
};

const matchInputs = [
  { icon: Crosshair, title: 'Hard skills overlap', desc: 'Every tool, language, framework, and certification the JD names is matched against your resume — the heaviest-weighted part of the score because recruiters filter on it first.' },
  { icon: ListChecks, title: 'Responsibilities alignment', desc: 'The match looks beyond keywords to whether your experience bullets reflect the actual responsibilities of the role, not just the tools listed.' },
  { icon: GitCompareArrows, title: 'Seniority & scope fit', desc: 'A senior JD expects ownership and scale; a junior JD expects execution. The score reflects whether your framing matches the level the role is hiring for.' },
  { icon: Percent, title: 'Title & domain relevance', desc: 'Your past titles and industry context are weighed against the target role and sector, so a fintech PM scores higher for a fintech PM role than a generic one.' },
];

const steps = [
  { step: '01', title: 'Paste the job description', desc: 'Drop in the full JD from any portal. The match engine works best with the complete requirements and responsibilities sections.' },
  { step: '02', title: 'Add your resume', desc: 'Upload a PDF or DOCX, or paste your resume text. Nothing to reformat — CV Prime parses it automatically.' },
  { step: '03', title: 'Get your 0–100 match score', desc: 'See your overall match, your keyword overlap percentage, and a ranked list of the exact skills and terms the JD wants that your resume is missing.' },
  { step: '04', title: 'Close the gap and re-score', desc: 'Apply AI fixes — keyword injection and bullet rewriting — then re-run the match to watch your score climb before you apply.' },
];

const faqs = [
  {
    q: 'What is a resume job match score?',
    a: 'A resume job match score is a 0–100 number showing how closely your resume aligns with a specific job description. It weighs hard-skill overlap, responsibility alignment, seniority fit, and domain relevance into a single figure, plus a keyword overlap percentage. The higher the score, the more likely the employer\'s ATS surfaces your resume and the more relevant you appear to the recruiter.',
  },
  {
    q: 'What is a good resume match score?',
    a: 'Aim for 80 or above. Below roughly 70, your resume is likely to be filtered out by the ATS or skimmed past by a recruiter as a weak fit. The match score is JD-specific, so a strong resume can still score low against a role that needs different skills — the fix is to tailor for that role rather than send a generic version.',
  },
  {
    q: 'How is the match score different from an ATS score?',
    a: 'They overlap but are not identical. The ATS score focuses on machine readability and keyword coverage — will the software parse and rank your resume. The match score adds a layer of relevance judgement: responsibilities alignment, seniority, and domain fit, answering "is this person actually right for the role" not just "does the resume contain the keywords". CV Prime gives you both so you can see machine-fit and human-fit together.',
  },
  {
    q: 'Will improving my match score actually get me more interviews?',
    a: 'A higher match score means you clear the automated filter and read as a stronger fit, which is the prerequisite for an interview — it gets your resume in front of a human. It is not a guarantee, because interviews also depend on the role, competition, and your actual experience. But a generic resume that scores 55 rarely gets seen at all, so closing the match gap removes the biggest, most fixable barrier.',
  },
  {
    q: 'Does the match tool work for any role or industry?',
    a: 'Yes. The match engine reads whatever JD you paste — software, data, product, marketing, finance, operations, design, and more — and compares it against your resume. It is calibrated for the Indian job market and understands Indian role terminology and credentials, but works for international roles too.',
  },
  {
    q: 'Is the resume match score free?',
    a: 'Yes. You can check your match score and keyword overlap on the free plan, which also includes 3 PDF exports and full ATS scoring at no cost. Lifetime Pro (₹999 one-time, no subscription) adds unlimited match checks and exports for high-volume applying.',
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
    { '@type': 'ListItem', position: 2, name: 'Resume Job Match Score', item: 'https://cv-prime.in/resume-job-match-score' },
  ],
};

export default function ResumeJobMatchScorePage(): JSX.Element {
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
            <Percent className="h-4 w-4" />
            Resume ↔ job match score, 0 to 100
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            See how well your resume matches the job — before you apply
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Paste any job description and your resume. CV Prime returns a 0–100 match score with your keyword overlap percentage and a ranked list of the exact skills you&apos;re missing — so you know your real chances and how to improve them.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Get my match score free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/tailor-resume-to-job-description" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              Tailor my resume to the JD
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free · Keyword overlap + missing-skills report · No credit card</p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-white/10 bg-white/[0.03] px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {[
            { stat: '80+', label: 'match score you want before applying to a role' },
            { stat: '< 60 sec', label: 'to score your resume against any job description' },
            { stat: '4', label: 'dimensions scored: skills, responsibilities, seniority, domain' },
            { stat: '0–100', label: 'overall match plus a keyword overlap percentage' },
          ].map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-brand">{item.stat}</p>
              <p className="mt-1 max-w-[170px] text-xs leading-5 text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What feeds the match */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">What goes into your match score</h2>
            <p className="mt-4 text-slate-400">More than a keyword count — four weighted dimensions of fit</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {matchInputs.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
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

      {/* Steps */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">From resume to match score in four steps</h2>
          </div>
          <div className="mt-12 space-y-5">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-brand-foreground font-display text-lg font-bold">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-2 leading-7 text-slate-300">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-brand">
            <RefreshCw className="h-4 w-4" />
            Re-score as many times as you like until the match clears 80
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Resume match score — FAQ</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
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
              { href: '/ats-score-checker', label: 'Free ATS score checker' },
              { href: '/tailor-resume-to-job-description', label: 'Tailor resume to a JD' },
              { href: '/ai-resume-rewriter', label: 'AI resume rewriter' },
              { href: '/resume-optimizer', label: 'Resume optimizer' },
              { href: '/ats-checker', label: 'ATS checker' },
              { href: '/resume-tips/ats-keywords', label: 'ATS keywords guide' },
              { href: '/resume-tips/skills-section', label: 'Skills section guide' },
              { href: '/ai-resume-builder', label: 'AI resume builder' },
              { href: '/resume-examples', label: 'Resume examples by role' },
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Stop guessing if you&apos;re a fit</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Get your resume-to-job match score in under a minute, see what&apos;s missing, and close the gap with AI. Free to start.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Get my match score free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Get my match score free" message="Score how well your resume matches any job — free, 0 to 100" />
    </main>
  );
}
