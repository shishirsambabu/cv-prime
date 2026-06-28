import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, GraduationCap } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Education Section on a Resume — What to Include & Format Guide 2026 | CV Prime',
  description:
    'Complete guide to the education section on your resume for 2026. What to include, where to put it, CGPA rules, certifications, and examples for freshers, experienced professionals, and career changers in India.',
  alternates: { canonical: 'https://cv-prime.in/resume-tips/education-section' },
  keywords: [
    'education section resume',
    'how to write education on resume',
    'resume education format',
    'cgpa on resume india',
    'education section resume india',
    'where to put education on resume',
    'education section examples',
    'resume education guide 2026',
    'degree on resume india',
    'fresher education section resume',
  ],
  openGraph: {
    title: 'Education Section on a Resume — Complete Format Guide 2026 | CV Prime',
    description: 'What to include in the education section of your resume, where to place it, and CGPA rules for Indian job seekers.',
    url: 'https://cv-prime.in/resume-tips/education-section',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Education Section Resume Guide — CV Prime' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Should I include CGPA on my resume in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'Include CGPA if it is 7.0 or above. If you have under 3 years of experience, CGPA is still a relevant signal — include it even at 6.8+ if the company you are targeting does not have an explicit minimum. If you have 5+ years of experience, drop your CGPA entirely — recruiters do not screen for it at that stage.' },
    },
    {
      '@type': 'Question',
      name: 'Should education go at the top or bottom of my resume?',
      acceptedAnswer: { '@type': 'Answer', text: 'If you are a student or have less than 2 years of experience: put education near the top, after your summary/objective. If you have 3+ years of professional experience: put education at the bottom after your work experience. Your most recent and most relevant information should appear first.' },
    },
    {
      '@type': 'Question',
      name: 'Should I include 12th and 10th marks on my resume?',
      acceptedAnswer: { '@type': 'Answer', text: 'Include 12th marks if you are in your first or second year of college or are a very recent graduate applying to your first role. Drop both 12th and 10th marks once you have secured your first job or internship. After 2–3 years of professional experience, no one should see your school marks on your resume.' },
    },
    {
      '@type': 'Question',
      name: 'Should I include my GPA if it is low?',
      acceptedAnswer: { '@type': 'Answer', text: 'If your CGPA is below 6.5, consider omitting it — especially for experienced professionals. For freshers, if a company has a stated minimum threshold (common at large IT companies), check whether you meet it before applying. Do not falsify your CGPA — it is verified during background checks.' },
    },
  ],
};

const examples = [
  {
    profile: 'Engineering fresher (B.Tech, 2024)',
    layout: `B.Tech in Computer Science Engineering
National Institute of Technology, Warangal
2020 – 2024 | CGPA: 8.4 / 10

Relevant coursework: Data Structures, Algorithms, Database Management Systems, Operating Systems, Machine Learning

Award: Best Final Year Project — "Smart Traffic Management using Reinforcement Learning" (2024)`,
    notes: 'For freshers: CGPA is prominent, relevant courses show technical alignment with JD, award adds differentiation.',
  },
  {
    profile: 'MBA graduate (IIM, 3 years experience)',
    layout: `Master of Business Administration (Finance & Strategy)
IIM Kozhikode | 2019 – 2021 | CGPA: 7.8 / 10

B.Com (Hons) | University of Delhi | 2015 – 2018 | 82%`,
    notes: 'For MBA professionals: MBA institution and specialisation lead; undergraduate follows briefly. CGPA still relevant at 3 years experience.',
  },
  {
    profile: 'Senior software engineer (8 years experience)',
    layout: `B.Tech in Electronics and Communication Engineering
Amrita University | 2012 – 2016`,
    notes: 'For experienced professionals: just degree, institution, and year. No CGPA, no courses. Everything else is in your work history.',
  },
  {
    profile: 'Chartered Accountant',
    layout: `CA Final | ICAI | Cleared November 2022 (First Attempt)

B.Com | Loyola College, Chennai | 2016 – 2019 | 78%`,
    notes: 'For CAs: the ICAI qualification and attempt (first/second) are the primary credentials. Undergraduate follows. Year is critical.',
  },
];

const rules = [
  { rule: 'CGPA ≥ 7.0 with < 3 years experience', action: 'Include prominently', detail: 'Many ATS systems filter on CGPA — include it to pass the filter and as a positive signal.' },
  { rule: 'CGPA 6.5 – 6.9 with < 3 years experience', action: 'Include or omit based on context', detail: 'If the company has no stated minimum, include it. If you know the threshold is 7.0, compensate with strong projects and certifications elsewhere.' },
  { rule: 'CGPA < 6.5 with any experience level', action: 'Omit', detail: 'It is likely to trigger an ATS filter or recruiter concern. Focus instead on skills, certifications, and projects.' },
  { rule: '3–5 years of experience', action: 'Include CGPA if ≥ 7.5', detail: 'Starting to become less relevant. Include only if it is genuinely strong (7.5+) or if the role explicitly asks for it.' },
  { rule: '5+ years of experience', action: 'Drop CGPA entirely', detail: 'Your professional track record is your credential. No recruiter at this stage screens for CGPA.' },
];

const certifications = [
  { cert: 'AWS Certified Solutions Architect', field: 'Cloud / Engineering', notes: 'List under Education or a separate Certifications section; include the level (Associate/Professional) and year' },
  { cert: 'Google Data Analytics Certificate', field: 'Data & Analytics', notes: 'Well-recognised; list with Coursera as the platform and year earned' },
  { cert: 'CFA Level I / II / III', field: 'Finance', notes: 'State clearly: "CFA Level I — Passed, June 2024" — do not just list "CFA" without the level' },
  { cert: 'SAP Certified Application Associate', field: 'ERP / Technology', notes: 'List the full module (e.g., SAP S/4HANA for Financial Accounting) — "SAP Certified" alone is too vague' },
  { cert: 'PMP (Project Management Professional)', field: 'Project Management', notes: 'List with PMI as the issuing body and expiry year (PMP requires renewal every 3 years)' },
  { cert: 'NPTEL Elite + Gold', field: 'Engineering / Technology', notes: 'Include score and course name; well-regarded at Indian engineering companies for freshers' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Resume Tips', item: 'https://cv-prime.in/resume-tips' },
    { '@type': 'ListItem', position: 3, name: 'Education Section Guide', item: 'https://cv-prime.in/resume-tips/education-section' },
  ],
};

export default function EducationSectionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, breadcrumbSchema]) }} />

      <main className="min-h-screen bg-white/[0.04] text-white">
        <nav className="sticky top-0 z-40 border-b border-white/10 bg-white/90 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="text-lg font-bold text-brand">CV Prime</Link>
            <div className="flex items-center gap-4">
              <Link href="/resume-tips" className="hidden text-sm text-slate-300 hover:text-brand sm:block">Resume Tips</Link>
              <Link href="/signup" className="rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-white hover:bg-brand/90">Build Free</Link>
            </div>
          </div>
        </nav>

        <section className="border-b border-white/10 bg-gradient-to-b from-slate-50 to-white px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-2 flex items-center gap-1 text-sm text-slate-400">
              <Link href="/resume-tips" className="hover:text-brand">Resume Tips</Link>
              <span className="mx-1">›</span>
              <span>Education Section</span>
            </div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-sm font-semibold text-brand">
              <GraduationCap className="h-4 w-4" />
              Resume Tips — Education Section
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">
              Education Section on a Resume — What to Include & Format Guide 2026
            </h1>
            <p className="text-lg text-slate-300">
              The education section is straightforward — but most people either include too much or too little. Here is exactly what to include at every career stage, with real examples for India.
            </p>
          </div>
        </section>

        <article className="px-4 py-12">
          <div className="mx-auto max-w-3xl">

            <h2 className="mb-4 text-2xl font-bold text-white">Where does education go on a resume?</h2>
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4">
                <h3 className="mb-2 font-semibold text-emerald-200">Near the top → for:</h3>
                <ul className="space-y-1 text-sm text-emerald-200">
                  {['Students and freshers', 'Less than 2 years of experience', 'Roles where academic credentials are central (research, academia, law)', 'MBA freshers where the institution brand matters first'].map((t) => (
                    <li key={t} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0" />{t}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <h3 className="mb-2 font-semibold text-slate-200">After work experience → for:</h3>
                <ul className="space-y-1 text-sm text-slate-300">
                  {['3+ years of professional experience', 'Any role where work history is the primary credential', 'Career changers leading with transferable experience', 'Candidates with high-impact work history to show first'].map((t) => (
                    <li key={t} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" />{t}</li>
                  ))}
                </ul>
              </div>
            </div>

            <h2 className="mb-4 text-2xl font-bold text-white">CGPA rules — when to include and when to omit</h2>
            <div className="mb-8 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <thead className="bg-white/[0.03]">
                  <tr>
                    <th className="p-3 text-left font-semibold text-slate-300">Situation</th>
                    <th className="p-3 text-left font-semibold text-slate-300">Decision</th>
                    <th className="p-3 text-left font-semibold text-slate-300">Reasoning</th>
                  </tr>
                </thead>
                <tbody>
                  {rules.map((r, i) => (
                    <tr key={r.rule} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="p-3 font-medium text-slate-200 text-xs">{r.rule}</td>
                      <td className={`p-3 font-semibold text-xs ${r.action === 'Include prominently' ? 'text-emerald-300' : r.action === 'Omit' ? 'text-red-600' : 'text-amber-300'}`}>{r.action}</td>
                      <td className="p-3 text-slate-300 text-xs">{r.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="mb-4 text-2xl font-bold text-white">Education section examples by career stage</h2>
            <div className="mb-10 space-y-6">
              {examples.map((e) => (
                <div key={e.profile} className="rounded-2xl border border-white/10 p-5">
                  <div className="mb-3 text-sm font-semibold text-brand">{e.profile}</div>
                  <pre className="mb-3 whitespace-pre-wrap rounded-lg bg-white/[0.03] border border-white/10 p-4 text-xs text-slate-200 font-mono leading-relaxed">{e.layout}</pre>
                  <p className="text-xs text-slate-400">{e.notes}</p>
                </div>
              ))}
            </div>

            <h2 className="mb-4 text-2xl font-bold text-white">Should certifications go in the education section?</h2>
            <p className="mb-6 text-slate-300 text-sm">
              If you have 1–3 certifications that are directly relevant, include them in your Education section under a sub-heading &ldquo;Certifications&rdquo; or create a separate &ldquo;Certifications&rdquo; section if you have 4+. Here is how to list common certifications:
            </p>
            <div className="mb-10 space-y-3">
              {certifications.map((c) => (
                <div key={c.cert} className="flex items-start gap-3 rounded-xl border border-white/10 p-3">
                  <span className="mt-0.5 shrink-0 rounded-full bg-brand/10 px-2 py-0.5 text-xs font-medium text-brand">{c.field}</span>
                  <div>
                    <div className="text-sm font-semibold text-slate-200">{c.cert}</div>
                    <div className="text-xs text-slate-400">{c.notes}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-10 rounded-2xl border border-red-200 bg-red-50 p-5">
              <h2 className="mb-3 text-lg font-bold text-red-900">What NOT to include in your education section</h2>
              <ul className="space-y-2">
                {[
                  '12th and 10th marks once you have 2+ years of professional experience',
                  'CGPA below 6.5 for experienced professionals',
                  'Incomplete degrees without noting "In Progress" or expected completion date',
                  'Online certificates from unknown or low-credibility platforms',
                  'Every short Udemy course taken — only include citable, platform-verified certifications',
                  'High school activities, sports, or clubs — irrelevant once you have a degree',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-red-800">
                    <span className="mt-0.5 font-bold text-red-600">✗</span> {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <h2 className="mb-6 text-2xl font-bold text-white">Frequently asked questions</h2>
            <div className="space-y-4">
              {[
                { q: 'Should I include CGPA on my resume in India?', a: 'Include CGPA if it is 7.0 or above and you have less than 3 years of experience. Drop it for experienced professionals (5+ years). Never falsify — CGPA is verified in background checks.' },
                { q: 'Should education go at the top or bottom of my resume?', a: 'Top for students and freshers (under 2 years experience). After work experience for professionals (3+ years). Put your most credible and relevant information first.' },
                { q: 'Should I include 12th and 10th marks on my resume?', a: 'Only if you are in your first or second year of college. Drop both once you have secured your first job. After 2–3 years of experience, school marks are irrelevant.' },
                { q: 'Should I include my GPA if it is low?', a: 'If your CGPA is below 6.5, omit it for experienced professionals. For freshers at companies with known thresholds, assess whether including it helps or hurts on a case-by-case basis.' },
              ].map((f) => (
                <details key={f.q} className="group rounded-xl border border-white/10 p-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-3 font-semibold text-slate-200 marker:content-none">
                    {f.q}
                    <ArrowRight className="h-4 w-4 shrink-0 rotate-90 text-slate-400 group-open:rotate-[270deg] transition-transform" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </article>

        <section className="border-t border-white/10 bg-white/[0.03] px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-xl font-bold text-white">Related resume tips</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { href: '/resume-tips/skills-section', label: 'Skills Section Guide', desc: 'How to list technical and soft skills for ATS' },
                { href: '/resume-tips/resume-summary', label: 'Resume Summary Guide', desc: 'Write a strong 2–4 line summary' },
                { href: '/fresher-resume', label: 'Fresher Resume Guide', desc: 'Education-first resume guide for students' },
                { href: '/internship-resume', label: 'Internship Resume Guide', desc: 'How to structure a resume for internship applications' },
                { href: '/resume-tips/work-experience', label: 'Work Experience Section', desc: 'How to write strong experience bullets' },
                { href: '/ats-checker', label: 'ATS Resume Checker', desc: 'Score your resume against any job description' },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="rounded-xl border border-white/10 bg-white/[0.04] p-4 hover:border-brand/30 hover:shadow-sm transition-all">
                  <div className="font-semibold text-slate-200 text-sm">{l.label}</div>
                  <div className="mt-1 text-xs text-slate-400">{l.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <StickyCTA />
      </main>
    </>
  );
}
