import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'One Page Resume Guide 2026 — When to Use & How to Write It | CV Prime',
  description:
    'Complete guide to one page resume format in India. When to use a 1-page resume, how to cut it down, what to remove, and when a 2-page resume is better. Free template and examples.',
  keywords: [
    'one page resume',
    '1 page resume',
    'one page resume format',
    'one page cv',
    'single page resume',
    'resume one page or two',
    'how to make a one page resume',
    '1 page resume template india',
    'one page resume india',
    'one page resume for freshers',
  ],
  alternates: { canonical: 'https://cv-prime.in/one-page-resume' },
  openGraph: {
    title: 'One Page Resume Guide 2026 — When to Use & How to Write It',
    description:
      'When to use a 1-page resume in India, how to cut it down without losing impact, and what recruiters at Google, Amazon, and Indian startups expect.',
    url: 'https://cv-prime.in/one-page-resume',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'One Page Resume Guide India' }],
  },
};

const mustOnePage = [
  'Freshers and candidates with 0–3 years of experience',
  'Students applying for internships or campus placements',
  'Anyone applying to Google, Amazon, Microsoft, or any FAANG company',
  'Anyone applying to Indian product startups (Zomato, Swiggy, PhonePe, CRED)',
  'Candidates with under 5 years of total experience',
  'Anyone asked to submit a "1-page CV" in the job description',
];

const twoPageOk = [
  'Professionals with 5–10 years of diverse experience across multiple roles',
  'Senior managers, directors, and heads of department',
  'Candidates applying to traditional Indian companies (IT services, BFSI, manufacturing)',
  'Anyone with 3+ distinct employers or significant role transitions',
  'Candidates with extensive certifications and publications (research, academia)',
];

const whatToRemove = [
  { item: 'Objective statement', action: 'Replace with a 3-line professional summary with your top 2–3 metrics' },
  { item: 'References (Available on request)', action: 'Remove entirely — recruiters know they can ask' },
  { item: 'Hobbies and interests', action: 'Remove unless they are directly relevant to the role' },
  { item: 'Old jobs (5+ years ago)', action: 'Keep only the role title and dates for jobs beyond 10 years' },
  { item: 'Duty-led bullets for every role', action: 'Cut all except the top 2–3 impact bullets per role' },
  { item: 'Weak technical skills', action: 'Keep only what appears in the job description or is relevant' },
  { item: 'Full address', action: 'Replace with just the city name' },
  { item: 'Date of birth, marital status, nationality', action: 'Remove entirely from corporate resumes' },
  { item: 'Photo', action: 'Remove — not needed for tech and corporate roles in India' },
  { item: 'Lengthy education section (experienced)', action: 'Reduce to one line: Degree, Institution, Year' },
];

const faqs = [
  {
    q: 'Should a fresher\'s resume be one page in India?',
    a: 'Yes, strictly. For freshers (0–2 years of experience), a one-page resume is the standard expectation in India. Anything longer with thin experience looks padded. Focus on Education (first), Projects, Internships, Skills, and a 2-line objective. CV Prime\'s fresher template is designed for exactly this structure.',
  },
  {
    q: 'Do companies like Google and Amazon in India want a 1-page resume?',
    a: 'Yes. FAANG companies (Google, Amazon, Microsoft, Meta, Apple) globally — including their India offices — strongly prefer 1-page resumes for most roles. Amazon India recruiters have explicitly stated a preference for concise, metrics-heavy single-page resumes. Google\'s own resume guidance recommends 1 page for candidates with under 10 years of experience.',
  },
  {
    q: 'How do I fit 8 years of experience into one page?',
    a: 'Four techniques: (1) Reduce older jobs to just the role title, company, and dates — no bullets. (2) Cut bullets to the top 2–3 impact lines per role, each with a metric. (3) Remove the objective statement and replace with a tight 3-line summary. (4) Use a compact, ATS-safe layout with 10pt body font and 0.5in margins. CV Prime\'s templates are designed to maximise information density while staying ATS-readable.',
  },
  {
    q: 'Is a 2-page resume acceptable for senior roles in India?',
    a: 'Yes, for senior roles (Director, VP, Head of Department, Principal Engineer) with 10+ years of experience, 2 pages is acceptable and sometimes expected. However, most Indian recruiters still prefer 1 page even for senior candidates. If in doubt, start with 1 page and expand only if you genuinely cannot fit critical information without sacrificing impact.',
  },
  {
    q: 'Should I use a smaller font to make my resume fit one page?',
    a: 'No — do not go below 10pt for body text and 11pt for headings. Instead, reduce content volume: fewer bullets, shorter descriptions, tighter formatting. Tiny fonts make your resume harder to skim and signal that you haven\'t prioritised well. Recruiters spend 6–10 seconds on initial review — poor typography reduces that.',
  },
  {
    q: 'What is the best one-page resume format for India?',
    a: 'A clean single-column or simple two-column layout with 10–11pt body text, 0.5in margins, and clear section headings. Avoid tables, text boxes, graphics, and headers/footers (which ATS systems often fail to parse). CV Prime\'s Minimal and Classic templates are designed for one-page formats and are tested for ATS compatibility.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Make a One Page Resume',
  description: 'Step-by-step guide to fitting your resume onto one page without losing impact.',
  step: [
    { '@type': 'HowToStep', name: 'Remove the objective statement', text: 'Replace with a 3-line professional summary containing your top metric.' },
    { '@type': 'HowToStep', name: 'Cut bullets to 2–3 per role', text: 'Keep only the highest-impact, metric-driven bullet for each position.' },
    { '@type': 'HowToStep', name: 'Compress old experience', text: 'For jobs older than 8 years, list only role title, company, and dates.' },
    { '@type': 'HowToStep', name: 'Remove irrelevant sections', text: 'Delete hobbies, references, full addresses, photos, and date of birth.' },
    { '@type': 'HowToStep', name: 'Optimise layout', text: 'Use 0.5in margins, 10–11pt font, and a compact ATS-safe template.' },
  ],
};

export default function OnePageResumePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, howToSchema, {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
            { '@type': 'ListItem', position: 2, name: 'One Page Resume', item: 'https://cv-prime.in/one-page-resume' },
          ],
        }]) }}
      />

      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/resume-tips" className="hover:text-white">Resume Tips</Link>
            <span>/</span>
            <span className="text-white">One Page Resume</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            One page resume guide — when to use it and how to write it in India
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            The complete answer to &quot;should my resume be one page?&quot; — with specific rules for freshers, experienced professionals, FAANG applicants, and Indian company norms in 2026.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong"
            >
              Build a one-page resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/resume-tips/resume-length"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-3 text-sm font-medium text-slate-300 hover:border-slate-400 hover:text-white"
            >
              Resume length guide
            </Link>
          </div>
        </div>
      </section>

      {/* The short answer */}
      <section className="border-b border-slate-100 px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border-2 border-brand/30 bg-brand/5 p-8">
            <h2 className="font-display text-xl font-bold text-slate-900">The short answer</h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              <p><strong>Fresher (0–3 years):</strong> Always 1 page. No exceptions.</p>
              <p><strong>Mid-level (3–7 years):</strong> 1 page strongly preferred. 2 pages acceptable only if genuinely content-heavy.</p>
              <p><strong>Senior (8+ years):</strong> 1–2 pages. 1 page preferred by most product companies and FAANG.</p>
              <p><strong>Director / VP (15+ years):</strong> 2 pages acceptable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Must be 1 page */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">When your resume must be one page</h2>
          <div className="mt-6 space-y-3">
            {mustOnePage.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-cyan-200 bg-cyan-50 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                <span className="text-sm font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2 page acceptable */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">When a two-page resume is acceptable</h2>
          <div className="mt-6 space-y-3">
            {twoPageOk.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />
                <span className="text-sm font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Even in these cases, ask yourself: if I cut the least important bullet from every section, would I lose significant information? If not, cut it and stay on one page.
          </p>
        </div>
      </section>

      {/* What to remove */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">What to remove to fit one page</h2>
          <p className="mt-4 text-slate-600">If your resume is spilling onto page two, cut in this order:</p>
          <div className="mt-8 space-y-3">
            {whatToRemove.map((item, i) => (
              <div key={item.item} className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-slate-900">{item.item}</p>
                    <p className="mt-1 text-sm text-slate-600">{item.action}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">One page resume — frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="border-t border-slate-100 px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">Related guides</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { label: 'Resume length guide', href: '/resume-tips/resume-length' },
              { label: 'How to write a resume', href: '/resume-tips/how-to-write-a-resume' },
              { label: 'Resume bullet points', href: '/resume-tips/resume-bullet-points' },
              { label: 'Fresher resume guide', href: '/fresher-resume' },
              { label: 'ATS resume templates', href: '/templates' },
              { label: 'Free resume builder', href: '/free-resume-builder' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Build a one-page resume that passes ATS</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            CV Prime&apos;s compact templates and AI tailoring help you fit the right information into one page — without sacrificing ATS compatibility.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Build your 1-page resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-sm text-slate-400">Free plan — 3 PDF exports, no credit card required.</p>
        </div>
      </section>
    </main>
  );
}
