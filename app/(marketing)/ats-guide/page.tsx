import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { roles } from '@/lib/roleData';

export const metadata: Metadata = {
  title: 'ATS CV Guide by Profession — Pass Any ATS in India 2026 | CV Prime',
  description:
    'Role-specific ATS CV guides for 35 professions in India. Learn the exact ATS keywords, formatting rules, and common ATS failures for your job role. Updated 2026.',
  keywords: [
    'ats cv guide india',
    'ats resume tips india',
    'ats friendly cv india 2026',
    'how to pass ats india',
    'ats keywords by job role india',
    'applicant tracking system india',
    'ats optimised cv india',
    'ats checker india free',
  ],
  alternates: { canonical: 'https://cv-prime.in/ats-guide' },
  openGraph: {
    title: 'ATS CV Guide by Profession — Pass Any ATS in India 2026 | CV Prime',
    description: 'Role-specific ATS guides for 35 professions. ATS keywords, formatting rules, and common failures by job role.',
    url: 'https://cv-prime.in/ats-guide',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ATS Guide India — CV Prime' }],
  },
};

const industries = Array.from(new Set(roles.map((r) => r.industry))).sort();

export default function AtsGuidePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <ShieldCheck className="h-4 w-4" />
            ATS guide · India 2026
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            ATS CV guide by profession — India 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Role-specific ATS guides for 35 professions in India. Exact ATS keywords, critical formatting rules, and the most common ATS failures — tailored to your job role.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/ats-checker"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground hover:bg-brand-strong"
            >
              Check my CV&apos;s ATS score free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/cv-examples"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white hover:border-white/40"
            >
              View ATS-optimised CV examples
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-6">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-8 text-center">
          {[
            { stat: '75%', label: 'of CVs rejected by ATS before a human sees them (JobScan, 2024)' },
            { stat: '30', label: 'role-specific ATS guides covering keywords, formatting, and failures' },
            { stat: '93%', label: 'of Fortune 500 companies use ATS (SHRM, 2023)' },
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
          <h2 className="font-display text-2xl font-bold sm:text-3xl">ATS guide by job role</h2>
          <p className="mt-3 text-slate-500">
            Select your profession to see ATS keywords, formatting rules, and the most common ATS failures for your specific role.
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
                      href={`/ats-guide/${role.slug}`}
                      className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-cyan-300 hover:shadow-sm"
                    >
                      <div>
                        <p className="font-display font-bold text-slate-900 group-hover:text-cyan-700">
                          {role.displayTitle}
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">ATS keyword guide</p>
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

      {/* What is ATS */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            How ATS works in India — what you need to know
          </h2>
          <div className="mt-8 space-y-5">
            {[
              {
                q: 'What is an ATS and why does it reject CVs?',
                a: 'An Applicant Tracking System (ATS) is software used by companies to receive, sort, and filter job applications. ATS parses your CV into structured data (name, skills, experience, education) and ranks candidates based on keyword matches with the job description. CVs are rejected when the ATS cannot parse the content (formatting issues) or cannot find the required keywords (content issues). 75% of CVs never reach a human reviewer because of ATS rejection.',
              },
              {
                q: 'Which Indian companies use ATS?',
                a: 'Most companies with more than 100 employees in India use an ATS. Large IT companies (TCS, Infosys, Wipro, HCL) use SAP SuccessFactors, Taleo, or custom portals. Product companies and startups (Swiggy, Groww, CRED, PhonePe) use Lever, Greenhouse, or Ashby. MNCs (Amazon, Google, Microsoft, Unilever) use Workday or custom enterprise ATS. Even mid-size companies increasingly use tools like Zoho Recruit or iSmartRecruit.',
              },
              {
                q: 'The two types of ATS failures: formatting and keywords',
                a: 'Formatting failures: ATS cannot parse your CV. This happens with table-based layouts, text in headers/footers, images, columns, decorative fonts, or text boxes. Even if your content is perfect, the ATS sees blank or garbled data. Keyword failures: ATS cannot match your CV to the job description. This happens when you use synonyms or abbreviations that the JD does not use, or when a required keyword is missing from your Skills section entirely.',
              },
              {
                q: 'How to know if your CV passed ATS',
                a: 'Use CV Prime\'s free ATS checker to scan your CV against a job description. The checker extracts keywords from the JD, identifies which ones are present or missing in your CV, and scores your match percentage. A score above 70% is generally considered competitive — though the threshold varies by company and role.',
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

      {/* Universal ATS rules */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Universal ATS rules — apply to every job role
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              { n: '1', title: 'Use single-column layout', body: 'Two-column, table-based, and infographic CVs break most ATS parsers. Single column, top-to-bottom — every time.' },
              { n: '2', title: 'No text in headers/footers', body: 'Microsoft Word headers and footers are invisible to many ATS systems. Put your contact info in the main body of the document.' },
              { n: '3', title: 'Use standard section headings', body: '"Work Experience", "Education", "Skills" — not "Career Journey", "Academic Achievements", "What I Know". ATS looks for exact label matches.' },
              { n: '4', title: 'Include a dedicated Skills section', body: 'Skills embedded only in bullets are less reliably extracted. A separate Skills section ensures all keywords appear in a structured, parseable location.' },
              { n: '5', title: 'Mirror the job description language', body: 'If the JD says "ReactJS", use "ReactJS" not "React.js". If it says "Google Analytics 4", use the full name. ATS keyword matching is often exact-string.' },
              { n: '6', title: 'Submit as text-based PDF or DOCX', body: 'Scanned PDFs (photos of your CV) are completely unreadable by ATS. Submit a text-based PDF or DOCX. Check the JD for the preferred format.' },
            ].map((item) => (
              <div key={item.n} className="rounded-2xl border border-slate-100 p-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-50 text-sm font-bold text-cyan-700">
                  {item.n}
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
              { href: '/ats-checker', title: 'Free ATS Checker', sub: 'Score your CV against any job description' },
              { href: '/ats-friendly-cv', title: 'ATS-Friendly CV Guide', sub: 'Complete guide to building ATS-safe CVs' },
              { href: '/cv-examples', title: 'CV Examples', sub: '30 ATS-optimised CV templates by role' },
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
            Build an ATS-optimised CV in minutes
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            CV Prime generates ATS-safe CVs from the start — single-column format, structured skills sections, and AI-assisted keyword matching. Free to start.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Build my ATS CV free
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
              name: 'ATS CV Guide by Profession — India 2026',
              description: 'Role-specific ATS guides for 35 professions in India. ATS keywords, formatting rules, and common failures.',
              url: 'https://cv-prime.in/ats-guide',
              publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
              breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                  { '@type': 'ListItem', position: 2, name: 'ATS Guide', item: 'https://cv-prime.in/ats-guide' },
                ],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is an ATS and how does it work in India?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'An ATS (Applicant Tracking System) is software that receives and filters job applications. It parses your CV for keywords that match the job description and ranks candidates accordingly. Companies like TCS, Infosys, Amazon, Google, Swiggy, and Groww all use ATS. 75% of CVs are rejected by ATS before a human sees them — typically due to formatting issues or missing keywords.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How do I make my CV ATS-friendly in India?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Six universal rules: (1) Use single-column layout — no tables or two-column formats. (2) Put contact info in the main document body, not the header. (3) Use standard section names: Work Experience, Education, Skills. (4) Include a dedicated Skills section. (5) Mirror the exact language from the job description. (6) Submit as text-based PDF or DOCX, not a scanned image.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do startups in India use ATS?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes — most Indian startups with 50+ employees use an ATS. Common tools include Lever, Greenhouse, Ashby (all used by product-first companies), and Zoho Recruit (common for mid-size startups). Even smaller companies increasingly use LinkedIn Easy Apply, which routes applications through LinkedIn\'s own ATS-like filtering system.',
                  },
                },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
