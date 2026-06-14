import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, FileText } from 'lucide-react';
import { roles } from '@/lib/roleData';

export const metadata: Metadata = {
  title: 'Cover Letter Examples by Job Role — Free Templates India 2026 | CV Prime',
  description:
    'Free cover letter examples and templates for 30 job roles in India. Role-specific dos and don\'ts, sample paragraphs, and tips to write a cover letter that gets you interviews. Updated for 2026.',
  keywords: [
    'cover letter examples india',
    'cover letter templates india 2026',
    'cover letter samples by role',
    'how to write a cover letter india',
    'cover letter examples for freshers india',
    'professional cover letter templates india',
    'free cover letter examples',
    'cover letter writing guide india',
  ],
  alternates: { canonical: 'https://cv-prime.in/cover-letter-examples' },
  openGraph: {
    title: 'Cover Letter Examples by Job Role — Free Templates India 2026 | CV Prime',
    description:
      'Free cover letter examples for 30 job roles in India. Role-specific tips, sample paragraphs, and dos and don\'ts.',
    url: 'https://cv-prime.in/cover-letter-examples',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Cover Letter Examples — CV Prime' }],
  },
};

const industries = Array.from(new Set(roles.map((r) => r.industry))).sort();

export default function CoverLetterExamplesPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <FileText className="h-4 w-4" />
            Cover letter examples
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Cover letter examples by job role — India 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Free cover letter examples and templates for 30 job roles in India. Each guide includes role-specific dos and don&apos;ts, sample opening, body, and closing paragraphs, plus answers to common questions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-8 py-3.5 text-base font-bold text-slate-950 hover:bg-cyan-300"
            >
              Build my CV free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/cv-examples"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white hover:border-white/40"
            >
              View CV examples
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-6">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-8 text-center">
          {[
            { stat: '30', label: 'job roles covered' },
            { stat: '18%', label: 'higher offer rate with a cover letter (Naukri, 2024)' },
            { stat: '82%', label: 'of Indian applicants skip cover letters — stand out by submitting one' },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-display text-2xl font-bold text-slate-950">{item.stat}</p>
              <p className="mt-1 text-sm text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Role grid */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Cover letter examples by role</h2>
          <p className="mt-3 text-slate-500">
            Select your job role to see role-specific cover letter tips, sample paragraphs, and common mistakes to avoid.
          </p>

          {industries.map((industry) => {
            const industryRoles = roles.filter((r) => r.industry === industry);
            return (
              <div key={industry} className="mt-12">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">{industry}</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {industryRoles.map((role) => (
                    <Link
                      key={role.slug}
                      href={`/cover-letter-examples/${role.slug}`}
                      className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-cyan-300 hover:shadow-sm"
                    >
                      <div>
                        <p className="font-display font-bold text-slate-900 group-hover:text-cyan-700">
                          {role.displayTitle}
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">Cover letter example</p>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 group-hover:text-cyan-500" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why cover letters matter */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Do cover letters matter in India in 2026?
          </h2>
          <div className="mt-8 space-y-5">
            {[
              {
                q: 'Only 18% of Indian applicants submit a cover letter',
                a: 'Research from Naukri (2024) shows that only 18% of Indian job applications include a cover letter — meaning submitting one immediately differentiates you from 82% of the competition, before a recruiter reads a single word.',
              },
              {
                q: 'Roles where cover letters increase offer rates by 28%',
                a: 'For senior roles (manager level and above), leadership positions, and creative roles, submitting a tailored cover letter increases offer rates by 28% (Naukri, 2024). At these levels, hiring decisions involve multiple stakeholders who value written articulation.',
              },
              {
                q: 'When cover letters are skipped',
                a: 'For mass-application service company roles (TCS, Infosys, Wipro fresher drives), cover letters are rarely reviewed. For product companies, startups, and senior roles, a tailored cover letter adds genuine signal and is often read carefully.',
              },
              {
                q: 'ATS and cover letters',
                a: 'Most ATS systems process cover letters separately from CVs. A cover letter with relevant keywords reinforces your ATS score. However, your CV remains the primary ATS document — the cover letter is primarily for the human recruiter who reads after ATS screening.',
              },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-slate-900">{item.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cover letter writing tips */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            How to write a cover letter for Indian companies — 5 rules
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { rule: '1', title: 'Lead with a metric', body: 'The strongest cover letters open with a number. "I increased X by Y%" beats any introduction that starts with "I am writing to apply for..."' },
              { rule: '2', title: 'Keep it under 300 words', body: 'Hiring managers in India read fast. Three tight paragraphs (opening impact, evidence, closing ask) is the optimal structure.' },
              { rule: '3', title: 'Name the company specifically', body: 'Reference the company\'s product, challenge, or culture explicitly. Generic cover letters are immediately recognisable and deprioritised.' },
              { rule: '4', title: 'Add what the CV cannot', body: 'The cover letter adds context the CV cannot: why this company, why this role, what you are looking for. Do not repeat your CV — add to it.' },
              { rule: '5', title: 'End with a specific ask', body: 'Close with a clear ask: "I would welcome a 20-minute conversation about your engineering team\'s challenges." Specificity converts to action.' },
            ].map((item) => (
              <div key={item.rule} className="rounded-2xl border border-slate-100 p-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-50 text-sm font-bold text-cyan-700">
                  {item.rule}
                </div>
                <p className="mt-4 font-display font-bold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="border-t border-slate-100 bg-slate-50 px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-xl font-bold">Related resources</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { href: '/cv-examples', title: 'CV Examples', sub: '30 ATS-optimised CV guides by role' },
              { href: '/interview-questions', title: 'Interview Questions', sub: 'Model answers for 30 job roles in India' },
              { href: '/ats-checker', title: 'ATS Checker', sub: 'Free ATS score for your CV' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-cyan-300 hover:shadow-sm"
              >
                <p className="font-display font-bold text-slate-900 group-hover:text-cyan-700">{link.title} →</p>
                <p className="mt-1 text-sm text-slate-500">{link.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Write a great cover letter — and a CV to match
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Use CV Prime to build an ATS-optimised CV tailored to your target role. Free to start, no credit card required.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-10 py-4 text-base font-bold text-slate-950 hover:bg-cyan-300"
          >
            Build my CV free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'Cover Letter Examples by Job Role — India 2026',
              description: 'Free cover letter examples and templates for 30 job roles in India.',
              url: 'https://cv-prime.in/cover-letter-examples',
              publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
              breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                  { '@type': 'ListItem', position: 2, name: 'Cover Letter Examples', item: 'https://cv-prime.in/cover-letter-examples' },
                ],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Do cover letters matter in India?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Yes, particularly for senior roles, leadership positions, and creative industries. Research from Naukri (2024) shows that roles where cover letters are submitted have 28% higher offer rates. Only 18% of Indian applicants submit a cover letter — making it a meaningful differentiator.' },
                },
                {
                  '@type': 'Question',
                  name: 'How long should a cover letter be for an Indian company?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Under 300 words — 3 short paragraphs. Indian hiring managers read quickly. A concise, metric-driven cover letter is more effective than a lengthy one. Use the structure: opening impact → evidence → closing ask.' },
                },
                {
                  '@type': 'Question',
                  name: 'Should freshers write a cover letter for Indian companies?',
                  acceptedAnswer: { '@type': 'Answer', text: 'For product companies, startups, and management trainee roles, yes. A well-written cover letter that explains your project work, relevant coursework, and specific interest in the company can significantly differentiate a fresher from other applicants. For mass fresher drives at IT service companies, cover letters are rarely reviewed.' },
                },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
