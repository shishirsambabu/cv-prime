import Link from 'next/link';
import { StickyCTA } from '@/components/marketing/StickyCTA';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume vs CV — What is the Difference? Which Should You Use? | CV Prime',
  description:
    'Resume vs CV explained for Indian job seekers. Learn the difference, when to use each, and how CV Prime helps you build the right document for your target role.',
  alternates: {
    canonical: 'https://cv-prime.in/resume-vs-cv',
  },
  keywords: [
    'resume vs cv',
    'difference between resume and cv',
    'cv vs resume india',
    'what is a cv',
    'what is a resume',
    'cv or resume for india',
    'resume vs cv which to use',
    'cv meaning',
  ],
  openGraph: {
    title: 'Resume vs CV — The Difference Explained | CV Prime',
    description:
      'CV vs resume: what\'s the difference, which to use in India, and how to build either one free with AI.',
    url: 'https://cv-prime.in/resume-vs-cv',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume vs CV — CV Prime' }],
  },
};

const differences = [
  { aspect: 'Length', cv: '2+ pages (full career history)', resume: '1–2 pages (targeted snapshot)' },
  { aspect: 'Purpose', cv: 'Academic, research, government, Indian corporate', resume: 'US/UK private sector, startups' },
  { aspect: 'Content', cv: 'All experience, publications, awards, affiliations', resume: 'Relevant experience only, tailored per role' },
  { aspect: 'Photos', cv: 'Sometimes expected in India/Asia', resume: 'Never included in US/UK' },
  { aspect: 'Date of birth', cv: 'Often included in Indian CVs', resume: 'Never included in Western resumes' },
  { aspect: 'Update frequency', cv: 'Updated occasionally — master document', resume: 'Tailored for every application' },
];

const faqs = [
  {
    q: 'Should I use a CV or a resume in India?',
    a: 'In India, "CV" and "resume" are used interchangeably by most employers and HR portals. When an Indian job posting says "upload your resume", they mean a 1–2 page professional document — what internationally would be called a resume. CV Prime produces this document.',
  },
  {
    q: 'What does CV stand for?',
    a: 'CV stands for Curriculum Vitae — Latin for "course of life." It originally referred to a comprehensive academic document listing all degrees, research, publications, and awards. In everyday Indian usage, CV now just means your professional profile document.',
  },
  {
    q: 'How long should an Indian CV be?',
    a: 'For most private sector and IT roles in India: 1–2 pages. For government roles, PSUs, and academic positions: 2–4 pages are acceptable. CV Prime templates are optimised for the standard 1–2 page private sector format.',
  },
  {
    q: 'Should I include a photo in my Indian CV?',
    a: 'It depends on the sector. Photos are still common in some Indian industries (hospitality, sales, customer-facing roles). They are generally not expected for IT, finance, and consulting roles in MNCs. CV Prime templates leave this to your discretion.',
  },
  {
    q: 'What is the difference between a CV and a biodata?',
    a: 'Biodata is an older Indian term for a more personal document that includes date of birth, religion, language, marital status, and family details. It is rarely used in modern corporate hiring but still seen in some government and matrimonial contexts. A CV/resume focuses on professional qualifications only.',
  },
];

export default function ResumeVsCVPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-purple-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-300">
            The definitive guide
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Resume vs CV — what&apos;s the difference and which should you use?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            In India, &ldquo;CV&rdquo; and &ldquo;resume&rdquo; mean the same thing in 95% of job applications. Here&apos;s when the distinction actually matters — and how to build either one free with AI.
          </p>
          <Link
            href="/signup"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
          >
            Build mine free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Quick answer */}
      <section className="border-b border-slate-100 px-5 py-14">
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-cyan-50 p-8">
          <h2 className="font-display text-2xl font-bold">The short answer for Indian job seekers</h2>
          <p className="mt-4 leading-7 text-slate-700">
            <strong>Use a CV</strong> (2 pages, full history) for: government jobs, PSU applications, academia, research positions, and senior executive roles at Indian conglomerates.
          </p>
          <p className="mt-3 leading-7 text-slate-700">
            <strong>Use a resume</strong> (1–2 pages, targeted) for: IT, startups, MNCs, BFSI, consulting, and any role using an international ATS system like Workday, Greenhouse, or Lever.
          </p>
          <p className="mt-3 leading-7 text-slate-700">
            <strong>The good news:</strong> CV Prime&apos;s format works perfectly for both. When the job portal says &ldquo;upload your resume or CV&rdquo;, just upload your CV Prime PDF.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold">
            CV vs resume — side-by-side comparison
          </h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-4 text-left font-semibold text-slate-600">Aspect</th>
                  <th className="p-4 text-left font-bold text-slate-900">CV (Curriculum Vitae)</th>
                  <th className="p-4 text-left font-bold text-slate-900">Resume</th>
                </tr>
              </thead>
              <tbody>
                {differences.map((row, i) => (
                  <tr key={row.aspect} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="p-4 font-medium text-slate-700">{row.aspect}</td>
                    <td className="p-4 text-slate-600">{row.cv}</td>
                    <td className="p-4 text-slate-600">{row.resume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Guide sections */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl space-y-12">
          <div>
            <h2 className="font-display text-2xl font-bold">What is a CV?</h2>
            <p className="mt-4 leading-7 text-slate-700">
              A CV (Curriculum Vitae) is a comprehensive document covering your entire professional and academic history. Unlike a resume, a CV does not have a page limit — it includes everything: every degree, every job, every publication, every award, every conference presentation.
            </p>
            <p className="mt-3 leading-7 text-slate-700">
              In India, &ldquo;CV&rdquo; has become a catch-all term for any professional document you hand to a recruiter, regardless of length. When your Indian manager says &ldquo;send me your CV&rdquo;, they almost certainly mean a 1–2 page targeted document.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">What is a resume?</h2>
            <p className="mt-4 leading-7 text-slate-700">
              A resume (from the French &ldquo;résumé&rdquo; — summary) is a short, targeted, 1–2 page document tailored for a specific job application. Every section is chosen to match the role. Work history beyond 10 years is often cut. Skills that aren&apos;t relevant are left out.
            </p>
            <p className="mt-3 leading-7 text-slate-700">
              The resume format dominates in the USA, Canada, and UK private sector. In India, the format is increasingly adopted by IT companies, MNCs, and ATS-driven hiring processes.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">Which should you use for Indian jobs?</h2>
            <p className="mt-4 leading-7 text-slate-700">
              For most Indian private sector roles, use the resume format — 1–2 pages, outcome-focused bullets, tailored to each JD. This is what ATS systems at Indian MNCs expect and what CV Prime helps you build.
            </p>
            <p className="mt-3 leading-7 text-slate-700">
              For government (UPSC, state PSC, PSU), academic, or research roles, a traditional 3–5 page CV listing all qualifications may be appropriate or required. CV Prime&apos;s templates can accommodate longer formats too.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">
            CV vs resume — your questions answered
          </h2>
          <div className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 p-6">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Related guides</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { href: '/online-cv-maker', label: 'Free online CV maker →' },
              { href: '/ai-cv-builder', label: 'AI CV builder →' },
              { href: '/ats-friendly-cv', label: 'ATS-friendly CV guide →' },
              { href: '/cv-builder-india', label: 'CV builder for India →' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 font-semibold text-slate-800 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Build your CV or resume — free
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Whatever you call it, CV Prime helps you build a professional, ATS-ready document in under 15 minutes.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Build mine free now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Resume vs CV — What is the Difference and Which Should You Use in India?',
            description: 'Comprehensive guide explaining the difference between a resume and CV for Indian job seekers.',
            url: 'https://cv-prime.in/resume-vs-cv',
            author: { '@type': 'Organization', name: 'CV Prime' },
            publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                { '@type': 'ListItem', position: 2, name: 'Resume vs CV', item: 'https://cv-prime.in/resume-vs-cv' },
              ],
            },
          }),
        }}
      />
      <StickyCTA />
    </main>
  );
}
