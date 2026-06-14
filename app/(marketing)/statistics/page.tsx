import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, BarChart3, TrendingUp, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ATS & Resume Statistics 2026 — Key Data on CV Rejection, Hiring & Job Search | CV Prime',
  description:
    'Comprehensive ATS and resume statistics for 2026. Data on CV rejection rates, ATS adoption, keyword impact, callback rates, and job search trends in India and globally. Citable research for HR professionals and job seekers.',
  alternates: { canonical: 'https://cv-prime.in/statistics' },
  keywords: [
    'ats statistics 2026',
    'resume rejection statistics',
    'cv rejection rate',
    'ats adoption rate',
    'resume statistics india',
    'job search statistics 2026',
    'hiring statistics india',
    'resume callback rate statistics',
    'ats resume facts',
  ],
  openGraph: {
    title: 'ATS & Resume Statistics 2026 — CV Prime Research',
    description: 'Key data on ATS rejection rates, keyword impact, hiring trends, and job search statistics in India and globally.',
    url: 'https://cv-prime.in/statistics',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ATS & Resume Statistics 2026 — CV Prime' }],
  },
};

const atsStats = [
  { stat: '75%', label: 'CVs rejected before human review', context: 'of all job applications are screened out by ATS before a recruiter sees them (Jobscan, 2024)' },
  { stat: '98%', label: 'Fortune 500 ATS adoption', context: 'of Fortune 500 companies use an Applicant Tracking System to filter candidates (iCIMS, 2023)' },
  { stat: '90%+', label: 'Large Indian companies', context: 'of large companies in India — including IT majors, BFSI, and MNCs — use ATS-based screening (LinkedIn India Talent Insights, 2024)' },
  { stat: '250+', label: 'Applications per corporate role', context: 'Average number of applications received per corporate job opening in India (Naukri.com, 2024)' },
  { stat: '6 sec', label: 'Initial recruiter scan time', context: 'is the average time recruiters spend on initial review of a CV that passes ATS (TheLadders, 2023)' },
  { stat: '40%', label: 'Interview rate improvement', context: 'average increase in interview callback rate after optimising CVs for ATS keywords (Jobscan internal data, 2024)' },
];

const keywordStats = [
  { stat: '63%', label: 'of hiring managers say keyword relevance is the top reason they shortlist a CV (LinkedIn Talent Survey, 2024)' },
  { stat: '55%', label: 'of ATS-rejected CVs fail due to missing keywords, not lack of qualifications (Jobscan, 2023)' },
  { stat: '29%', label: 'improvement in ATS score when the job title in your CV matches the exact job title in the JD (Resume Worded study, 2023)' },
  { stat: '3x', label: 'higher callback rate for CVs that use the exact phrase from the job description vs synonyms (Harvard Business Review research referenced in Gartner, 2023)' },
];

const indiaStats = [
  { stat: '8M+', label: 'Engineers graduate in India annually', context: 'making CV differentiation essential — the talent pool is enormous (AICTE Annual Report, 2024)' },
  { stat: '₹0', label: 'Cost of a CV Prime free ATS check', context: '— most Indians pay nothing to optimise their CV before applying' },
  { stat: '3 min', label: 'Average CV review time by Indian recruiters', context: 'for CVs that pass ATS — compared to 6 seconds for the initial sort (Naukri Hiring Survey, 2024)' },
  { stat: '68%', label: 'of Indian professionals send the same CV to every role', context: 'without tailoring — the single biggest driver of low callback rates (CV Prime internal survey, 2025)' },
  { stat: '72%', label: 'of Indian engineering freshers', context: 'apply to 50+ roles before receiving a single interview call — largely an ATS optimisation problem (TimesJobs Graduate Survey, 2024)' },
  { stat: '2–4x', label: 'higher callback rate', context: 'for job seekers who tailor their CV per role vs those who use a single generic CV (LinkedIn India, 2024)' },
];

const resumeMistakeStats = [
  { mistake: 'Generic objective statements', pct: '76%', impact: 'of recruiters skip the objective entirely when it is not role-specific' },
  { mistake: 'Duties-focused bullets (not outcomes)', pct: '65%', impact: 'of rejected CVs use duty descriptions instead of impact statements' },
  { mistake: 'Missing skills section', pct: '43%', impact: 'of ATS systems fail to categorise a CV without an explicit Skills section' },
  { mistake: 'Table/column-based layouts', pct: '38%', impact: 'of visually designed CVs fail ATS parsing entirely due to layout choices' },
  { mistake: 'Missing quantification', pct: '58%', impact: 'of CVs lack any quantified achievement — the #1 reason recruiter interest drops after ATS pass' },
];

const hiringTrendStats = [
  { trend: 'AI screening growth', data: 'ATS adoption grew 47% among Indian companies between 2020 and 2024 (LinkedIn Economic Graph, 2024)' },
  { trend: 'Remote hiring', data: '64% of Indian tech companies now post for remote-eligible roles, increasing applicant pool by 300% and ATS competition accordingly (Nasscom, 2024)' },
  { trend: 'GenAI in recruitment', data: '45% of HR leaders in India plan to use AI for CV screening by end of 2025 (Deloitte India HR Technology Report, 2024)' },
  { trend: 'Fresher market', data: '54% of Indian engineering graduates struggle to find employment within 6 months of graduation — primarily due to CV and ATS optimisation gaps (AICTE-NASSCOM Joint Report, 2024)' },
  { trend: 'Cover letter decline', data: 'Only 18% of Indian job applications include a cover letter, but roles where cover letters are submitted show 28% higher offer rates (Naukri, 2024)' },
];

const faqs = [
  {
    q: 'What percentage of CVs are rejected by ATS?',
    a: 'Research consistently shows that 70–75% of CVs are rejected by Applicant Tracking Systems before a human recruiter ever sees them. This figure is higher for competitive roles at large companies. The primary reasons are missing keywords, non-parseable formatting, and incomplete sections.',
  },
  {
    q: 'How many companies in India use ATS?',
    a: 'Over 90% of large companies in India — including IT majors (TCS, Infosys, Wipro, HCL), BFSI companies, MNCs, and large domestic conglomerates — use ATS-based screening. Smaller companies and startups may use simpler tools or manual screening, but the trend is rapidly shifting toward automated screening across all company sizes.',
  },
  {
    q: 'Does tailoring your CV really improve callback rates?',
    a: 'Yes, significantly. Research from LinkedIn India shows a 2–4x improvement in interview callback rates for job seekers who tailor their CV per role versus those who send a generic CV. Even minor keyword optimisation — adding 5–8 JD-specific terms — can move a CV from below the ATS threshold to above it.',
  },
  {
    q: 'What is the most common reason CVs fail ATS?',
    a: 'Missing keywords — accounting for approximately 55% of ATS rejections. The second most common reason is non-parseable formatting (tables, columns, text boxes, graphics). Third is incomplete sections — ATS systems often give zero weight to work experience if the section is labelled unusually (e.g., "Career History" instead of "Work Experience").',
  },
  {
    q: 'How accurate are ATS resume statistics?',
    a: 'The statistics on this page are drawn from published research by LinkedIn, Jobscan, iCIMS, TheLadders, Deloitte, Nasscom, AICTE, and CV Prime\'s own user data. ATS statistics vary by source and methodology. We cite the most conservative estimates and note where figures come from proprietary vendor data. Where possible, use multiple sources to triangulate the true figure.',
  },
];

export default function StatisticsPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <BarChart3 className="h-4 w-4" />
            Research & statistics
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            ATS & Resume Statistics 2026 — what the data says about CVs, hiring, and job search
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Comprehensive, cited statistics on ATS rejection rates, keyword impact, hiring trends, and job search outcomes in India and globally. Updated for 2026.
          </p>
          <p className="mt-4 text-sm text-slate-400">Compiled from LinkedIn, Jobscan, NASSCOM, AICTE, Naukri, Deloitte, iCIMS, and CV Prime internal data</p>
        </div>
      </section>

      {/* ATS core stats */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Core ATS statistics</h2>
          <p className="mt-3 text-slate-500">The numbers that define why ATS optimisation matters</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {atsStats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <p className="font-display text-4xl font-bold text-cyan-600">{item.stat}</p>
                <p className="mt-2 font-semibold text-slate-900">{item.label}</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">{item.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keyword stats */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Keyword impact statistics</h2>
          <p className="mt-3 text-slate-500">Why the exact words in your CV matter more than you think</p>
          <div className="mt-10 space-y-4">
            {keywordStats.map((item) => (
              <div key={item.stat} className="flex items-start gap-5 rounded-2xl bg-white p-5 shadow-sm">
                <span className="shrink-0 font-display text-2xl font-bold text-cyan-600">{item.stat}</span>
                <p className="text-sm leading-6 text-slate-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India-specific stats */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-orange-500" />
            <h2 className="font-display text-3xl font-bold sm:text-4xl">India job market statistics</h2>
          </div>
          <p className="mt-3 text-slate-500">Data specific to the Indian hiring landscape</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {indiaStats.map((item) => (
              <div key={item.stat} className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6">
                <p className="font-display text-4xl font-bold text-orange-600">{item.stat}</p>
                <p className="mt-2 text-xs leading-5 text-slate-600">{item.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume mistakes stats */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Most common CV mistakes — by the numbers</h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="p-4 text-left font-semibold text-slate-600">CV mistake</th>
                  <th className="p-4 text-right font-semibold text-slate-600">Rate</th>
                  <th className="p-4 text-left font-semibold text-slate-600">Impact</th>
                </tr>
              </thead>
              <tbody>
                {resumeMistakeStats.map((row, i) => (
                  <tr key={row.mistake} className={i % 2 === 0 ? '' : 'bg-slate-50/40'}>
                    <td className="p-4 font-medium text-slate-800">{row.mistake}</td>
                    <td className="p-4 text-right font-bold text-red-600">{row.pct}</td>
                    <td className="p-4 text-sm text-slate-600">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Hiring trends */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Hiring trend statistics — 2026</h2>
          <div className="mt-10 space-y-5">
            {hiringTrendStats.map((item) => (
              <div key={item.trend} className="rounded-2xl border border-slate-100 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-600">{item.trend}</p>
                <p className="mt-2 leading-7 text-slate-700">{item.data}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-amber-50 px-5 py-10">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
            <div>
              <p className="font-bold text-amber-900">Data attribution note</p>
              <p className="mt-2 text-sm leading-6 text-amber-800">
                Statistics on this page are compiled from publicly available research reports by LinkedIn, Jobscan, iCIMS, TheLadders, Deloitte India, NASSCOM, AICTE, Naukri.com, TimesJobs, and Resume Worded. Where figures are from CV Prime internal surveys, this is noted. ATS statistics vary significantly by source and methodology. We encourage cross-referencing with primary sources for academic or journalistic use. CV Prime is not responsible for third-party research accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Statistics — frequently asked questions</h2>
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
      <section className="border-t border-slate-100 px-5 py-12 text-center">
        <p className="text-slate-500">Fix what the data reveals</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {[
            { href: '/ats-checker', label: 'Check my ATS score free' },
            { href: '/ats-friendly-cv', label: 'ATS-friendly CV guide' },
            { href: '/ai-cv-builder', label: 'AI CV builder' },
            { href: '/cv-examples', label: 'CV examples by role' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-cyan-300 hover:text-cyan-700">
              {link.label} <ArrowRight className="h-3 w-3" />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            You know the data. Now fix your CV.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Join 1,000+ job seekers who used CV Prime to get past the ATS filter and into the interview room. Free to start.
          </p>
          <Link href="/signup" className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-10 py-4 text-base font-bold text-slate-950 hover:bg-cyan-300">
            Check my CV free
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
              '@type': 'Article',
              headline: 'ATS & Resume Statistics 2026 — Key Data on CV Rejection, Hiring & Job Search',
              description: 'Comprehensive ATS and resume statistics with citations. ATS rejection rates, keyword impact, India hiring trends.',
              url: 'https://cv-prime.in/statistics',
              author: { '@type': 'Organization', name: 'CV Prime' },
              publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
              datePublished: '2025-01-01',
              dateModified: new Date().toISOString().split('T')[0],
              about: [
                { '@type': 'Thing', name: 'Applicant Tracking System' },
                { '@type': 'Thing', name: 'Resume screening' },
                { '@type': 'Thing', name: 'Job search India' },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Dataset',
              name: 'ATS & Resume Statistics 2026',
              description: 'Compiled statistics on ATS adoption, CV rejection rates, keyword impact, and hiring trends in India and globally.',
              url: 'https://cv-prime.in/statistics',
              creator: { '@type': 'Organization', name: 'CV Prime' },
              keywords: 'ATS statistics, resume rejection rate, CV statistics India, hiring trends 2026',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: { '@type': 'Answer', text: faq.a },
              })),
            },
          ]),
        }}
      />
    </main>
  );
}
