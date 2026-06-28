import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'How to Explain a Gap in Resume — Honest Strategies + Examples 2026 | CV Prime',
  description:
    'How to address a gap in your resume without lying or apologising. Covers what to write, how to list a career break, and example statements for 6 types of gaps — maternity, layoff, health, education, travel, and sabbatical.',
  alternates: { canonical: 'https://cv-prime.in/resume-tips/gap-in-resume' },
  keywords: [
    'gap in resume',
    'career gap resume',
    'how to explain gap in resume',
    'employment gap resume',
    'career break resume',
    'resume gap explanation',
    'gap in cv india',
    'how to address resume gap',
    'career gap examples resume',
    'resume gap strategies',
  ],
  openGraph: {
    title: 'How to Explain a Gap in Resume — 6 Gap Types + Examples | CV Prime',
    description: 'Address resume gaps honestly and confidently. Includes what to write, how to list a career break, and example statements for 6 gap types.',
    url: 'https://cv-prime.in/resume-tips/gap-in-resume',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Gap in Resume Guide — CV Prime' }],
  },
};

const gapLengthGuide = [
  {
    duration: 'Under 3 months',
    risk: 'Low',
    riskColor: 'text-green-700 bg-green-50',
    strategy: 'No action needed on the resume. If asked, mention it briefly in the interview: "I took a short break between roles." Short gaps are normal and expected.',
  },
  {
    duration: '3–6 months',
    risk: 'Low–Medium',
    riskColor: 'text-cyan-300 bg-cyan-50',
    strategy: 'Use month-year dates (not year only) so the gap is visible and honest. If you did anything productive (course, freelance, caregiving), list it briefly. If not, prepare a 1-sentence answer for interviews.',
  },
  {
    duration: '6 months – 1 year',
    risk: 'Medium',
    riskColor: 'text-amber-300 bg-amber-50',
    strategy: 'Add a brief career break entry in your work experience section. List the duration, the reason in 3–5 words, and any relevant activity (certifications, freelance projects). Do not leave the gap unaddressed.',
  },
  {
    duration: '1–2 years',
    risk: 'Medium–High',
    riskColor: 'text-orange-700 bg-orange-50',
    strategy: 'List as a formal career break entry. Include skills maintained or developed. Tailor your resume summary to address re-entry. Prepare a confident 30-second explanation for interviews.',
  },
  {
    duration: '2+ years',
    risk: 'High (requires active management)',
    riskColor: 'text-red-700 bg-red-50',
    strategy: 'Career break entry is essential. Cover letter is strongly recommended. Consider returnship programmes. Skills refreshers (certifications, courses) help significantly. Your explanation needs to be clear, confident, and forward-focused.',
  },
];

const gapTypes = [
  {
    type: 'Maternity / Parental leave',
    resumeLine: 'Career Break — Parental Leave (Mar 2023 – Dec 2023)',
    interviewAnswer: 'I took maternity leave to care for my newborn. I maintained my professional development during this time by completing a [certification/course]. I am now fully ready to return to work and excited about this opportunity.',
    tips: 'Maternity leave is legally protected and extremely common. Never apologise for it. Forward-focus your answer to what you bring to the role today.',
  },
  {
    type: 'Layoff / Redundancy',
    resumeLine: '(No resume entry needed — the gap between roles speaks for itself)',
    interviewAnswer: 'My position was made redundant as part of a broader restructuring when [company] reduced its [team/division] by [X]%. I used the time to [upskill / consult / explore roles aligned with my long-term goals]. I am now focused on [target role] and particularly interested in this opportunity because [specific reason].',
    tips: 'Layoffs affect thousands of people and recruiters understand them. State it factually, do not over-explain or blame the company, and pivot quickly to what you did with the time and why you are excited about this role.',
  },
  {
    type: 'Higher education / Upskilling',
    resumeLine: 'Full-time MBA — ISB Hyderabad (Jun 2023 – May 2025) | or "Google Data Analytics Certification (self-paced, 6 months)"',
    interviewAnswer: 'I took a planned break from work to complete my MBA at ISB, which I had been planning for 2 years. The programme gave me [specific skills]. I am now targeting [target role] where I can apply both my pre-MBA experience and the strategic frameworks I built during the programme.',
    tips: 'Education is the easiest gap to explain — list it directly in the Education section and/or as an entry in the experience timeline. Never call it a "gap".',
  },
  {
    type: 'Health / Medical leave',
    resumeLine: 'Career Break — Medical Leave (Sep 2022 – Mar 2023)',
    interviewAnswer: 'I took a medical leave for a health issue that has since been fully resolved. I am back to full health and capacity, and I am excited to return to work.',
    tips: 'You are not required to disclose the specific medical condition. A brief, confident statement that the issue is resolved is all that is needed. Do not over-share.',
  },
  {
    type: 'Caregiving (elderly parent / family)',
    resumeLine: 'Career Break — Family Caregiving (Jan 2023 – Oct 2023)',
    interviewAnswer: 'I took time off to care for a family member who needed full-time support. That situation has now resolved, and I am ready and excited to return to work full-time.',
    tips: 'Caregiving is increasingly understood and respected. Be direct and confident. You do not need to provide details about the family member\'s condition.',
  },
  {
    type: 'Travel / Sabbatical',
    resumeLine: 'Career Break — Personal Sabbatical / Extended Travel (Jun 2023 – Nov 2023)',
    interviewAnswer: 'After [X] years of intense work, I took a planned 6-month sabbatical to [travel / recharge / pursue a personal project]. It was a deliberate decision, and I am now fully energised and ready to commit to a new role.',
    tips: 'Be matter-of-fact about it. Planned sabbaticals are increasingly common, particularly in tech and consulting. The key is confidence — if you apologise for it, the interviewer will be suspicious. If you own it, most will respect it.',
  },
];

const whatNotToWrite = [
  { bad: 'Leaving dates vague ("2021 – 2023") to hide the gap', why: 'ATS often flags year-only dates as suspicious. Recruiters may see it as deliberately deceptive.' },
  { bad: 'Filling the gap with fake freelance work', why: 'Background checks and references can expose fabrications. A genuine gap is always safer than a discovered lie.' },
  { bad: 'Writing an overly long explanation on the resume itself', why: 'Your resume is not the place for explanations — it is a document of your professional record. One line is all you need; the interview is where you explain.' },
  { bad: 'Omitting the gap entirely on a long resume', why: 'Unexplained timeline gaps are more suspicious than explained ones. A blank 12-month period always gets noticed.' },
];

const faqs = [
  {
    q: 'Should I explain a gap in my resume or cover letter?',
    a: 'On the resume: one line (e.g., "Career Break — Parental Leave"). In the cover letter: 1–2 sentences if the gap is over 6 months and you want to proactively address it. In the interview: a confident 30-second explanation that ends on a forward-focused note. The resume is not the place for a detailed explanation — it just needs to acknowledge the period honestly.',
  },
  {
    q: 'How do I list a career break on a resume?',
    a: 'Create an entry in your work experience section in the correct chronological position. Format: "Career Break — [Reason, e.g., Maternity Leave / Upskilling / Family Caregiving] (Month Year – Month Year)". Optionally, add 1 bullet with the most relevant thing you did during the break: "Completed Google Data Analytics Professional Certificate (Coursera)".',
  },
  {
    q: 'Do employers care about gaps in India?',
    a: 'Historically, Indian employers were more concerned about gaps than Western counterparts — but this is changing rapidly, particularly in tech, startups, and MNCs. Gaps of under 6 months are largely ignored. For longer gaps, what matters more than the gap itself is how you explain it: confidently, honestly, and with a focus on what you bring to the role today.',
  },
  {
    q: 'What if I have multiple gaps in my resume?',
    a: 'Address each one honestly with a brief entry. If multiple gaps add up to more than 24 months in a 10-year career, consider leading your resume summary with a direct, confident statement: "HR Manager with 7 years of progressive experience across 3 companies, including a planned 12-month break for family caregiving and a 6-month break for an MBA programme." Getting ahead of it builds more trust than hoping the recruiter won\'t notice.',
  },
  {
    q: 'Can a gap hurt my ATS score?',
    a: 'Yes — ATS systems often flag timeline gaps as a screening factor, particularly for roles that specify "continuous employment." To minimise the ATS impact, use month-year dates (not year-only), list your career break as a formal entry so the timeline is unbroken, and ensure your skills section and bullet keywords are strong enough to compensate for the gap flag.',
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
    { '@type': 'ListItem', position: 2, name: 'Resume Tips', item: 'https://cv-prime.in/resume-tips' },
    { '@type': 'ListItem', position: 3, name: 'Gap in Resume', item: 'https://cv-prime.in/resume-tips/gap-in-resume' },
  ],
};

export default function GapInResumePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/resume-tips" className="hover:text-white">Resume Tips</Link><span>/</span>
            <span className="text-white">Gap in Resume</span>
          </nav>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            How to explain a gap in your resume — honest strategies for every situation
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Gaps happen — parental leave, redundancy, health, education, caregiving. What matters is not the gap itself but how you address it. Learn exactly what to write on your resume and say in interviews for 6 common gap types.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong transition">
            Build my resume with AI <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Gap length guide */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">How gap length affects your approach</h2>
          <div className="mt-8 space-y-4">
            {gapLengthGuide.map((item) => (
              <div key={item.duration} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-base font-bold text-white">{item.duration}</h3>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${item.riskColor}`}>Risk: {item.risk}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.strategy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 gap types */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">How to address 6 types of career gaps</h2>
          <p className="mt-3 text-slate-400">Resume line + interview answer + key tips for each gap type</p>
          <div className="mt-8 space-y-6">
            {gapTypes.map((gap) => (
              <div key={gap.type} className="rounded-2xl bg-white/[0.04] p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-brand">{gap.type}</h3>
                <div className="mt-4 space-y-3">
                  <div className="rounded-xl bg-white/[0.03] p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Resume line</p>
                    <p className="mt-1 text-sm font-mono text-slate-300">{gap.resumeLine}</p>
                  </div>
                  <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-brand">Interview answer</p>
                    <p className="mt-1 text-sm italic text-slate-300">&quot;{gap.interviewAnswer}&quot;</p>
                  </div>
                  <div className="rounded-xl bg-amber-500/10 border border-amber-400/20 p-4">
                    <p className="text-xs font-bold text-amber-300">Key tips</p>
                    <p className="mt-1 text-sm text-amber-200">{gap.tips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What not to write */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">4 things never to do when you have a resume gap</h2>
          <div className="mt-8 space-y-4">
            {whatNotToWrite.map((item, i) => (
              <div key={item.bad} className="flex gap-4 rounded-2xl border border-red-100 bg-red-50 p-5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-200 text-xs font-bold text-red-700">{i + 1}</span>
                <div>
                  <p className="text-sm font-semibold text-red-800">❌ {item.bad}</p>
                  <p className="mt-1 text-sm text-red-700"><span className="font-semibold">Why:</span> {item.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Gap in resume — FAQ</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white/[0.04] p-5 shadow-sm">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-12">
        <div className="mx-auto max-w-5xl flex flex-wrap gap-3">
          {[
            { href: '/resume-tips', label: '← All resume tips' },
            { href: '/resume-tips/work-experience', label: 'Work experience guide' },
            { href: '/resume-tips/resume-summary', label: 'Resume summary guide' },
            { href: '/resume-tips/resume-length', label: 'Resume length guide' },
            { href: '/resume-builder', label: 'AI resume builder' },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 hover:border-brand hover:text-brand transition">{l.label}</Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">Build a resume that gets you interviews — gap or no gap</h2>
          <p className="mt-4 text-slate-300">CV Prime&apos;s AI builds a strong, ATS-optimised resume around your actual career history — including how to frame any career break. Free to start.</p>
          <Link href="/signup?next=/ai-cv" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Build my resume free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <StickyCTA label="Build my resume free" message="AI builds an ATS-optimised resume around your actual career history" />
    </main>
  );
}
