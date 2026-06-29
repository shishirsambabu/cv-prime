import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Resume Headline — What It Is, Why It Matters & 30+ Examples 2026 | CV Prime',
  description:
    'Learn what a resume headline is, how to write one, and see 30+ examples for different roles and experience levels. A strong resume headline passes ATS and makes recruiters read your full resume.',
  alternates: { canonical: 'https://cv-prime.in/resume-tips/resume-headline' },
  keywords: [
    'resume headline',
    'resume headline examples',
    'what is a resume headline',
    'resume title',
    'resume headline vs summary',
    'how to write resume headline',
    'resume headline for freshers',
    'resume headline india',
    'professional headline resume',
    'resume headline 2026',
  ],
  openGraph: {
    title: 'Resume Headline — 30+ Examples & Writing Guide 2026 | CV Prime',
    description: 'What a resume headline is, when to use one, and 30+ examples for every role and experience level.',
    url: 'https://cv-prime.in/resume-tips/resume-headline',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume Headline Guide — CV Prime' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a resume headline?',
      acceptedAnswer: { '@type': 'Answer', text: 'A resume headline is a 1-line phrase placed directly below your name and contact information that summarises who you are as a professional. It is different from a resume summary — a headline is 5–10 words; a summary is 2–4 sentences. The headline functions like a news headline: it tells the reader the most important thing first, in the fewest words possible.' },
    },
    {
      '@type': 'Question',
      name: 'Should a resume have a headline or a summary?',
      acceptedAnswer: { '@type': 'Answer', text: 'Both can work — they serve different purposes. A resume headline (1 line) is faster to read and immediately signals your role and specialisation. A resume summary (2–4 sentences) provides more context but requires more reading. For experienced candidates: use a headline followed by a 2-line summary. For freshers: use a brief objective statement instead of either.' },
    },
    {
      '@type': 'Question',
      name: 'Is a resume headline the same as a LinkedIn headline?',
      acceptedAnswer: { '@type': 'Answer', text: 'They serve the same purpose but are not identical. A LinkedIn headline has 220 characters and can include keywords, emojis, and a value proposition. A resume headline should be 5–10 words, plain text, and focused on your core professional identity. Your LinkedIn headline can be more creative; your resume headline should be more precise.' },
    },
  ],
};

const examples = [
  { role: 'Software Engineer', level: 'Fresher', headline: 'B.Tech CSE Graduate | Python & React Developer | 2 Internships' },
  { role: 'Software Engineer', level: 'Mid-level', headline: 'Backend Software Engineer | 4 Years | Node.js, AWS, PostgreSQL' },
  { role: 'Software Engineer', level: 'Senior', headline: 'Senior Software Engineer | Distributed Systems | Ex-Amazon, Flipkart' },
  { role: 'Data Analyst', level: 'Entry', headline: 'Data Analyst | SQL, Python, Tableau | Google Analytics Certified' },
  { role: 'Data Analyst', level: 'Experienced', headline: 'Senior Data Analyst | 6 Years | E-commerce & BFSI | Power BI, SQL' },
  { role: 'Product Manager', level: 'APM', headline: 'Associate Product Manager | B.Tech IIT | Internship at Swiggy' },
  { role: 'Product Manager', level: 'Senior', headline: 'Senior Product Manager | Growth & Monetisation | ₹50Cr Revenue Impact' },
  { role: 'Marketing', level: 'Entry', headline: 'Digital Marketing Executive | SEO & Performance Marketing | Google Certified' },
  { role: 'Marketing', level: 'Manager', headline: 'Marketing Manager | D2C Growth | ₹1.5Cr Monthly Ad Budget Managed' },
  { role: 'Finance', level: 'CA', headline: 'Chartered Accountant | Big 4 Trained | Audit, IFRS & Tax Advisory' },
  { role: 'Finance', level: 'IB', headline: 'Investment Banking Analyst | M&A & ECM | Goldman Sachs Intern' },
  { role: 'HR', level: 'Executive', headline: 'HR Executive | Talent Acquisition & Employee Relations | 3 Years' },
  { role: 'HR', level: 'Manager', headline: 'HR Manager | 200+ Person Organisation | HRBP & L&D Specialist' },
  { role: 'Sales', level: 'BDM', headline: 'Business Development Manager | SaaS Sales | 120% Quota Attainment' },
  { role: 'Design', level: 'UX', headline: 'UX Designer | Figma & Research | Fintech & E-commerce Products' },
  { role: 'Operations', level: 'Manager', headline: 'Operations Manager | Supply Chain & Logistics | 15,000 Daily Shipments' },
  { role: 'Fresher', level: 'General', headline: 'B.Com Graduate | Finance & Accounting | Tally, Excel, GST Knowledge' },
  { role: 'Career Change', level: 'Switching', headline: 'Former Civil Engineer Transitioning to Project Management | PMP Certified' },
];

const badExamples = [
  { bad: '"Seeking a challenging opportunity in a reputed organisation"', why: 'This is an objective statement, not a headline, and it says nothing about your professional identity.' },
  { bad: '"Hardworking and dedicated professional"', why: 'Soft skills are not a professional identity. No recruiter searches for "hardworking" in ATS.' },
  { bad: '"Experienced professional with 5 years of experience"', why: 'In what field? Doing what? "Experienced professional" is content-free.' },
  { bad: '"Looking for a job in software development"', why: 'Your headline is about what you offer, not what you want. Save your goals for your summary.' },
];

const formula = [
  { element: 'Your title', example: 'Senior Product Manager', notes: 'Use the exact job title from the JD when possible — it helps ATS keyword matching' },
  { element: 'Specialisation', example: 'Growth & Monetisation', notes: 'Your domain focus within the role — the thing you are known for' },
  { element: 'Credential signal', example: 'Ex-Swiggy, IIM-A', notes: 'A company name, degree, certification, or metric that creates instant credibility' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Resume Tips', item: 'https://cv-prime.in/resume-tips' },
    { '@type': 'ListItem', position: 3, name: 'Resume Headline Guide', item: 'https://cv-prime.in/resume-tips/resume-headline' },
  ],
};

export default function ResumeHeadlinePage() {
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
            <div className="mb-2 text-sm text-slate-400">
              <Link href="/resume-tips" className="hover:text-brand">Resume Tips</Link>
              <span className="mx-2">›</span>
              <span>Resume Headline</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">
              Resume Headline — What It Is, How to Write It & 30+ Examples
            </h1>
            <p className="text-lg text-slate-300">
              A resume headline is the single most under-utilised section on most resumes. Done right, it takes 1 line and 5 seconds to read — and immediately convinces a recruiter to keep reading. Done wrong, it wastes the prime real estate at the top of your resume.
            </p>
          </div>
        </section>

        <article className="px-4 py-12">
          <div className="mx-auto max-w-3xl">

            <h2 className="mb-4 text-2xl font-bold text-white">What is a resume headline?</h2>
            <p className="mb-6 text-slate-300">
              A resume headline (also called a resume title) is a short phrase — typically 5–10 words — that sits directly below your name and contact information at the top of your resume. It answers one question immediately: <em>Who are you as a professional?</em>
            </p>
            <p className="mb-8 text-slate-300">
              A resume headline is different from a resume summary. A headline is a single line that labels you. A summary is 2–4 sentences that describes your value and experience. Many strong resumes include both.
            </p>

            <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-2 text-sm font-semibold text-slate-400">Example of resume headline vs summary</div>
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-slate-400 mb-1">HEADLINE (1 line)</div>
                  <div className="rounded-lg bg-white/[0.04] border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200">
                    Senior Data Analyst | 6 Years | E-commerce & BFSI | SQL, Python, Power BI
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">SUMMARY (follows headline)</div>
                  <div className="rounded-lg bg-white/[0.04] border border-white/10 px-4 py-2 text-sm text-slate-300">
                    Data analyst with 6 years at Flipkart and HDFC, specialising in customer behaviour modelling and revenue attribution. Built dashboards tracking ₹800Cr in annual GMV. Reduced dashboard load time from 45s to 4s through BigQuery optimisation.
                  </div>
                </div>
              </div>
            </div>

            <h2 className="mb-4 text-2xl font-bold text-white">The resume headline formula</h2>
            <p className="mb-6 text-slate-300">Most effective resume headlines follow this 3-element structure:</p>
            <div className="mb-8 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <thead className="bg-white/[0.03]">
                  <tr>
                    <th className="p-3 text-left font-semibold text-slate-300">Element</th>
                    <th className="p-3 text-left font-semibold text-slate-300">Example</th>
                    <th className="p-3 text-left font-semibold text-slate-300">Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  {formula.map((f, i) => (
                    <tr key={f.element} className={i % 2 === 0 ? 'bg-white/[0.06]' : 'bg-white/[0.03]'}>
                      <td className="p-3 font-semibold text-slate-200">{f.element}</td>
                      <td className="p-3 text-brand font-medium">{f.example}</td>
                      <td className="p-3 text-slate-300 text-xs">{f.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mb-10 rounded-xl bg-brand/5 border border-brand/20 p-4 text-sm text-slate-300">
              <strong>Result:</strong> <span className="font-semibold text-brand">Senior Product Manager | Growth & Monetisation | Ex-Swiggy, IIM-A</span>
            </div>

            <h2 className="mb-6 text-2xl font-bold text-white">30+ resume headline examples</h2>
            <div className="mb-10 space-y-2">
              {examples.map((e) => (
                <div key={e.headline} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3">
                  <div className="flex shrink-0 flex-col gap-1">
                    <span className="rounded-full bg-white/[0.05] px-2 py-0.5 text-xs font-medium text-slate-300">{e.role}</span>
                    <span className="rounded-full bg-brand/10 px-2 py-0.5 text-xs font-medium text-brand">{e.level}</span>
                  </div>
                  <p className="font-semibold text-slate-200 text-sm leading-relaxed">{e.headline}</p>
                </div>
              ))}
            </div>

            <h2 className="mb-6 text-2xl font-bold text-white">Bad resume headline examples — and why they fail</h2>
            <div className="mb-10 space-y-4">
              {badExamples.map((b) => (
                <div key={b.bad} className="rounded-xl border border-red-200 bg-red-50 p-4">
                  <div className="mb-1 text-sm font-semibold text-red-800">✗ {b.bad}</div>
                  <p className="text-xs text-red-700">{b.why}</p>
                </div>
              ))}
            </div>

            <h2 className="mb-4 text-2xl font-bold text-white">When to use a headline vs an objective</h2>
            <div className="mb-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 p-4">
                <h3 className="mb-2 font-semibold text-white">Use a headline when:</h3>
                <ul className="space-y-1.5">
                  {['You have 2+ years of experience', 'Your job title + specialisation are clear', 'You are not making a significant career change', 'You want to pass ATS with a role-specific label'].map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 p-4">
                <h3 className="mb-2 font-semibold text-white">Use an objective when:</h3>
                <ul className="space-y-1.5">
                  {['You are a student or recent fresher', 'You are making a career change', 'You are re-entering the workforce after a gap', 'The application specifically requests an objective'].map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-10 rounded-2xl bg-brand px-8 py-8 text-center">
              <h2 className="mb-2 text-2xl font-bold text-white">Get a headline tailored to your target role</h2>
              <p className="mb-6 text-white/80 text-sm">CV Prime generates a role-specific resume headline, summary, and tailored bullet points based on the job description you paste.</p>
              <Link href="/signup" className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-6 py-2.5 text-sm font-bold text-brand hover:bg-white/90">
                Build My Resume Free <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* FAQ */}
            <h2 className="mb-6 text-2xl font-bold text-white">Frequently asked questions</h2>
            <div className="space-y-4">
              {[
                { q: 'What is a resume headline?', a: 'A resume headline is a 1-line phrase placed directly below your name and contact information that summarises who you are as a professional. It is different from a resume summary — a headline is 5–10 words; a summary is 2–4 sentences.' },
                { q: 'Should a resume have a headline or a summary?', a: 'Both can work together. Use a headline (1 line) for immediate role identification, then follow it with a 2-line summary for context. For freshers, use an objective statement instead.' },
                { q: 'Is a resume headline the same as a LinkedIn headline?', a: 'They serve the same purpose but are different formats. A LinkedIn headline is up to 220 characters and can be more creative. A resume headline should be 5–10 words, plain text, and precise.' },
                { q: 'Does a resume headline help with ATS?', a: 'Yes — if the headline contains the exact job title or role keywords from the JD, it contributes to your ATS keyword match score. Many ATS systems weight the top of the document more heavily in their parsing algorithms.' },
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

        {/* Related */}
        <section className="border-t border-white/10 bg-white/[0.03] px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-xl font-bold text-white">Related resume tips</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { href: '/resume-tips/resume-summary', label: 'Resume Summary Guide', desc: 'How to write a compelling 2–4 line summary' },
                { href: '/resume-tips/resume-objective', label: 'Resume Objective Guide', desc: 'When and how to write a resume objective' },
                { href: '/resume-tips/action-verbs', label: 'Resume Action Verbs', desc: '150+ strong verbs by category' },
                { href: '/linkedin-headline', label: 'LinkedIn Headline Examples', desc: '50+ examples by role and industry' },
                { href: '/resume-tips/ats-keywords', label: 'ATS Keywords Guide', desc: 'How to choose and use the right keywords' },
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
