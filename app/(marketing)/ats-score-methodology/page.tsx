import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, FlaskConical, ShieldCheck, AlertTriangle } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';
import {
  aiScoreBands,
  aiScoreFactors,
  keywordBands,
  strengthChecks,
  KEYWORD_MATCHER_MAX_KEYWORDS,
  STRENGTH_SCORE_TOTAL,
} from '@/lib/atsMethodology';

const PAGE_URL = 'https://cv-prime.in/ats-score-methodology';
const LAST_REVIEWED = '2026-11-12';

export const metadata: Metadata = {
  title: 'ATS Score Methodology — How CV Prime Calculates Your Score',
  description:
    'Exactly how CV Prime calculates its three resume scores: the AI ATS match score rubric, the keyword coverage formula, and the 100-point resume strength checklist — with weights, thresholds, and limitations.',
  alternates: { canonical: PAGE_URL },
  keywords: [
    'ats score methodology',
    'how is ats score calculated',
    'ats score calculation',
    'what is a good ats score',
    'ats score meaning',
    'how ats scoring works',
    'resume score formula',
    'ats keyword match formula',
    'cv prime ats score',
    'ats score out of 100',
  ],
  openGraph: {
    title: 'ATS Score Methodology — How CV Prime Calculates Your Score',
    description:
      'The rubric, formulas, weights, and limits behind CV Prime\'s ATS match score, keyword coverage score, and resume strength score.',
    url: PAGE_URL,
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime ATS score methodology' }],
  },
};

const scoreTypes = [
  {
    name: 'AI ATS match score',
    where: 'CV editor and the AI ATS score tool',
    href: '/tools/ai-ats-score',
    needs: 'Your CV and a job description',
    method: 'AI evaluation against a fixed five-band rubric',
    access: 'Free account and your own AI key',
  },
  {
    name: 'Keyword coverage score',
    where: 'ATS keyword matcher',
    href: '/tools/ats-keyword-matcher',
    needs: 'Your resume and a job description',
    method: 'Formula: matched keywords ÷ keywords checked × 100',
    access: 'No login — runs in your browser',
  },
  {
    name: 'Resume strength score',
    where: 'Resume strength analyzer',
    href: '/tools/resume-strength-analyzer',
    needs: 'Your resume only',
    method: `Six rule-based checks adding up to ${STRENGTH_SCORE_TOTAL} points`,
    access: 'No login — runs in your browser',
  },
];

const limitations = [
  'No score on this page is produced by an employer\'s applicant tracking system. ATS vendors do not publish a common scoring formula, and many employers search and filter candidates rather than rank them by a single number. Our scores are estimates of how well your CV answers a job description.',
  'The AI match score comes from a language model. It runs at a low temperature setting to keep results steady, but the same CV and job description can still score a few points apart between runs. Read it as a band, not a precise measurement.',
  'The keyword coverage score matches words exactly. It does not know that "people management" and "team leadership" mean similar things, so it can undercount a well-written CV that uses different wording from the job description.',
  'All three scores read text. They do not check how a PDF or Word file will be parsed, so layout problems such as tables, text boxes, or text inside images are not detected here.',
  'A high score means your CV covers what the job description asks for. It is not a prediction that you will be shortlisted, which also depends on the applicant pool and the recruiter.',
];

const faqs = [
  {
    q: 'How is an ATS score calculated?',
    a: 'There is no single industry formula. On CV Prime, the AI ATS match score is a 0–100 rating given by an AI model that compares your CV with a specific job description on three factors — keyword overlap, relevant experience, and role seniority — using a fixed five-band rubric. The free keyword coverage score is a plain formula: the number of job-description keywords found in your resume, divided by the number checked (up to 30), multiplied by 100.',
  },
  {
    q: 'What is a good ATS score?',
    a: 'On CV Prime\'s AI ATS match score, 70–89 is a good match with minor gaps and 90–100 is an excellent match. 50–69 means notable keywords are missing, and below 50 means the CV is weakly aligned with that job description. On the free keyword matcher, 80 or above is labelled a strong match and below 45 is labelled likely to be filtered out.',
  },
  {
    q: 'Is the CV Prime ATS score the same score a recruiter sees?',
    a: 'No. It is CV Prime\'s own estimate of how well your CV matches a job description. Each employer\'s applicant tracking system works differently, vendors do not publish their matching logic, and many recruiters search and filter rather than rely on one score. Use the CV Prime score to find missing keywords and gaps, not as a prediction of an employer\'s decision.',
  },
  {
    q: 'Why did my score change when I ran the same CV again?',
    a: 'The AI ATS match score is produced by a language model, so small differences of a few points between runs are normal even with identical inputs. The keyword coverage score and the resume strength score are fixed formulas and always return the same result for the same text.',
  },
  {
    q: 'What does the resume strength score measure?',
    a: `It measures writing quality without a job description, using six checks that add up to ${STRENGTH_SCORE_TOTAL} points: ${strengthChecks.map((c) => `${c.label.toLowerCase()} (${c.max})`).join(', ')}. Each check awards full, partial, or low points based on published thresholds.`,
  },
  {
    q: 'Does CV Prime store the resume I paste into the free tools?',
    a: 'The keyword matcher and the resume strength analyzer run entirely in your browser, so the text you paste is not sent to CV Prime. The AI ATS match score sends your CV and job description to an AI model through your own OpenRouter key to produce the result; when you score a saved CV, CV Prime keeps the latest score and the last 20 scores so you can track progress.',
  },
  {
    q: 'Can I get a 100 ATS score, and should I try?',
    a: 'A 100 is possible but not the goal. Chasing it usually means copying the job description, which reads badly to the recruiter who opens the CV next. Aim for the good band (70+) by adding the missing keywords you can honestly claim, then spend the remaining effort on clear, quantified bullet points.',
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
    { '@type': 'ListItem', position: 3, name: 'ATS Score Methodology', item: PAGE_URL },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'ATS Score Methodology — How CV Prime Calculates Your Score',
  description:
    'The rubric, formulas, weights, thresholds, and limitations behind CV Prime\'s ATS match score, keyword coverage score, and resume strength score.',
  url: PAGE_URL,
  mainEntityOfPage: PAGE_URL,
  datePublished: LAST_REVIEWED,
  dateModified: LAST_REVIEWED,
  inLanguage: 'en-IN',
  author: { '@type': 'Organization', '@id': 'https://cv-prime.in/#organization', name: 'CV Prime' },
  publisher: { '@type': 'Organization', '@id': 'https://cv-prime.in/#organization', name: 'CV Prime' },
  about: [
    { '@type': 'Thing', name: 'Applicant tracking system' },
    { '@type': 'Thing', name: 'ATS score' },
    { '@type': 'Thing', name: 'Resume keyword matching' },
  ],
};

const thClass = 'pb-3 pr-4 text-left font-semibold text-slate-300';
const tdClass = 'py-3 pr-4 align-top text-slate-300';

export default function AtsScoreMethodologyPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-brand/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <FlaskConical className="h-4 w-4" />
            Scoring methodology
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            How CV Prime calculates your ATS score
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            CV Prime gives three different resume scores. This page sets out what each one measures, the rubric or formula
            behind it, the thresholds for each band, and what the scores cannot tell you.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Last reviewed against the live scoring code: <time dateTime={LAST_REVIEWED}>12 November 2026</time>
          </p>
        </div>
      </section>

      {/* Short answer */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="font-display text-2xl font-bold">The short answer</h2>
          <p className="mt-4 leading-8 text-slate-300">
            An ATS score is an estimate, on a 0–100 scale, of how well a CV matches a job description. On CV Prime the{' '}
            <strong className="text-white">AI ATS match score</strong> is assigned by an AI model that weighs keyword
            overlap, relevant experience, and role seniority against a fixed five-band rubric, where 70 or above is a
            good match. The free <strong className="text-white">keyword coverage score</strong> is a formula: keywords
            from the job description found in your resume, divided by keywords checked, times 100. The{' '}
            <strong className="text-white">resume strength score</strong> needs no job description and adds up six
            rule-based checks worth {STRENGTH_SCORE_TOTAL} points.
          </p>
        </div>
      </section>

      {/* Three scores overview */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-bold">The three scores at a glance</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className={thClass}>Score</th>
                  <th className={thClass}>What you provide</th>
                  <th className={thClass}>How it is calculated</th>
                  <th className={thClass}>Access</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {scoreTypes.map((s) => (
                  <tr key={s.name}>
                    <td className={tdClass}>
                      <Link href={s.href} className="font-semibold text-brand underline-offset-4 hover:underline">
                        {s.name}
                      </Link>
                      <div className="mt-1 text-xs text-slate-400">{s.where}</div>
                    </td>
                    <td className={tdClass}>{s.needs}</td>
                    <td className={tdClass}>{s.method}</td>
                    <td className={tdClass}>{s.access}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AI match score */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-bold">1. AI ATS match score</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            This is the score shown in the CV editor and the{' '}
            <Link href="/tools/ai-ats-score" className="font-semibold text-brand underline-offset-4 hover:underline">
              AI ATS score tool
            </Link>
            . Your CV text and the job description are sent to an AI model with one instruction: rate the match honestly
            on a 0–100 scale using the rubric below, and never inflate it. The model is asked to base the score on three
            factors.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {aiScoreFactors.map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-display text-lg font-bold">{f.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{f.body}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-12 font-display text-xl font-bold">Score bands</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[480px] text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className={thClass}>Score</th>
                  <th className={thClass}>Band</th>
                  <th className={thClass}>What it means</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {aiScoreBands.map((b) => (
                  <tr key={b.range}>
                    <td className={`${tdClass} font-semibold text-white`}>{b.range.replace('-', '–')}</td>
                    <td className={tdClass}>{b.label}</td>
                    <td className={tdClass}>{b.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-12 font-display text-xl font-bold">What you get back</h3>
          <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-7 text-slate-300">
            <li>One whole-number score from 0 to 100.</li>
            <li>Up to 30 important job-description keywords found in your CV, and up to 30 that are missing.</li>
            <li>Up to 12 short, concrete suggestions for closing the gaps.</li>
            <li>For a saved CV, a history of your last 20 scores so you can see whether edits helped.</li>
          </ul>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-400">
            The model runs at a low temperature setting (0.2) so that repeat runs stay close together. Scoring uses your
            own OpenRouter API key, which CV Prime stores encrypted; see{' '}
            <Link href="/pricing" className="text-brand underline-offset-4 hover:underline">pricing</Link> for what is
            included on each plan.
          </p>
        </div>
      </section>

      {/* Keyword coverage */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-bold">2. Keyword coverage score</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            The{' '}
            <Link href="/tools/ats-keyword-matcher" className="font-semibold text-brand underline-offset-4 hover:underline">
              ATS keyword matcher
            </Link>{' '}
            uses no AI. It is a fixed formula that runs in your browser and returns the same result every time.
          </p>
          <ol className="mt-6 max-w-3xl list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-300">
            <li>
              <strong className="text-white">Pick the keywords.</strong> The tool first looks in the job description for
              known multi-word skills such as &ldquo;machine learning&rdquo; or &ldquo;stakeholder management&rdquo;. It
              then adds the most frequently repeated remaining words, skipping common filler words and plain numbers,
              until it has up to {KEYWORD_MATCHER_MAX_KEYWORDS} keywords.
            </li>
            <li>
              <strong className="text-white">Check your resume.</strong> Each keyword is searched for as a whole word or
              phrase, ignoring capital letters.
            </li>
            <li>
              <strong className="text-white">Calculate.</strong> Score = keywords found ÷ keywords checked × 100, rounded
              to a whole number. If 18 of 24 keywords appear in your resume, the score is 75.
            </li>
          </ol>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[400px] max-w-xl text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className={thClass}>Score</th>
                  <th className={thClass}>Label shown</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {keywordBands.map((b) => (
                  <tr key={b.range}>
                    <td className={`${tdClass} font-semibold text-white`}>{b.range.replace('-', '–')}</td>
                    <td className={tdClass}>{b.label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Strength score */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-bold">3. Resume strength score</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            The{' '}
            <Link href="/tools/resume-strength-analyzer" className="font-semibold text-brand underline-offset-4 hover:underline">
              resume strength analyzer
            </Link>{' '}
            scores writing quality on its own, with no job description. Six checks each award full, partial, or low
            points, and the points add up to a score out of {STRENGTH_SCORE_TOTAL}.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className={thClass}>Check</th>
                  <th className={thClass}>Points</th>
                  <th className={thClass}>What is measured</th>
                  <th className={thClass}>Full marks for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {strengthChecks.map((c) => (
                  <tr key={c.label}>
                    <td className={`${tdClass} font-semibold text-white`}>{c.label}</td>
                    <td className={tdClass}>{c.max}</td>
                    <td className={tdClass}>{c.measures}</td>
                    <td className={tdClass}>{c.fullMarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-2 text-amber-300">
            <AlertTriangle className="h-6 w-6" />
            <h2 className="font-display text-3xl font-bold text-white">What these scores cannot tell you</h2>
          </div>
          <ul className="mt-6 space-y-4">
            {limitations.map((item) => (
              <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-slate-300">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-start gap-3 text-sm leading-7 text-slate-300">
            <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
            <p>
              The right way to use a score is as a checklist: add the missing keywords you can honestly claim, fix the
              flagged gaps, and re-run it. CV Prime does not encourage adding skills you do not have — see our{' '}
              <Link href="/ethics" className="text-brand underline-offset-4 hover:underline">ethics page</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">ATS score methodology — FAQ</h2>
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
          <h2 className="font-display text-lg font-bold text-white">Related tools and research</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/ats-score-checker', label: 'ATS score checker' },
              { href: '/tools/ats-keyword-matcher', label: 'ATS keyword matcher' },
              { href: '/tools/resume-strength-analyzer', label: 'Resume strength analyzer' },
              { href: '/resume-job-match-score', label: 'Resume job match score' },
              { href: '/how-to-pass-ats-screening', label: 'How to pass ATS screening' },
              { href: '/resume-tips/ats-keywords', label: 'ATS keywords guide' },
              { href: '/ats-guide/system', label: 'ATS guides by system' },
              { href: '/ats-report-2026', label: 'ATS report 2026' },
              { href: '/statistics', label: 'ATS & resume statistics' },
              { href: '/glossary', label: 'Resume & ATS glossary' },
              { href: '/about', label: 'About CV Prime' },
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">See your own score</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Paste a job description, score your CV against it, and get the list of missing keywords to fix.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Check my ATS score
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/tools/ats-keyword-matcher" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-bold text-white transition hover:border-white/40">
              Try the no-login keyword matcher
            </Link>
          </div>
        </div>
      </section>

      <StickyCTA label="Check my ATS score" message="Score your CV against a job description and see the missing keywords" />
    </main>
  );
}
