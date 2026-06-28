import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, BookOpen, BarChart3, TrendingUp, AlertTriangle, Globe } from 'lucide-react';
import { ReportActions } from '@/components/marketing/ReportActions';

const reportUrl = 'https://cv-prime.in/ats-report-2026';
const reportTitle = 'The ATS & Resume Landscape Report — India 2026';
const reportDate = 'June 2026';
const reportVersion = '2.0';

export const metadata: Metadata = {
  title: 'ATS & Resume Landscape Report India 2026 — CV Prime Research | CV Prime',
  description:
    'Free downloadable research report: ATS rejection rates, keyword impact, India hiring statistics, and CV mistakes by the numbers. 12 cited sources. Published by CV Prime Research, June 2026.',
  keywords: [
    'ATS report 2026',
    'ATS statistics India 2026',
    'resume rejection rate India',
    'ATS research report',
    'hiring statistics India 2026',
    'CV rejection statistics India',
    'ATS keyword impact research',
    'resume statistics 2026 India',
    'ATS landscape report',
    'CV Prime research report',
  ],
  alternates: { canonical: reportUrl },
  openGraph: {
    title: 'ATS & Resume Landscape Report India 2026 — CV Prime Research',
    description: 'Free research report: ATS rejection rates, keyword impact data, and India-specific hiring statistics. 12 cited sources. Downloadable PDF.',
    url: reportUrl,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ATS & Resume Landscape Report India 2026 — CV Prime Research' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ATS & Resume Landscape Report India 2026 — CV Prime Research',
    description: '75% of CVs are rejected by ATS before a human reads them. Free research report with 12 cited sources. Download from CV Prime.',
    images: ['/og-image.png'],
  },
};

const keyFindings = [
  { stat: '75%', finding: 'of all job applications are rejected by ATS before any human reads them', source: 'Jobscan, 2024', category: 'Core ATS' },
  { stat: '90%+', finding: 'of large Indian companies — including IT majors, BFSI firms, and MNCs — use ATS-based screening', source: 'LinkedIn India Talent Insights, 2024', category: 'India-specific' },
  { stat: '55%', finding: 'of ATS-rejected resumes fail due to missing keywords — not lack of qualifications', source: 'Jobscan, 2023', category: 'Keyword Impact' },
  { stat: '2–4×', finding: 'higher interview callback rate for job seekers who tailor their resume to each role vs. those who send a generic CV', source: 'LinkedIn India, 2024', category: 'Tailoring Impact' },
  { stat: '68%', finding: 'of Indian professionals send the same CV to every role without tailoring — the single biggest driver of low callback rates', source: 'CV Prime survey, 2025', category: 'India-specific' },
  { stat: '40%', finding: 'average increase in interview callback rate after optimising a CV for ATS keyword coverage', source: 'Jobscan, 2024', category: 'Optimisation Impact' },
];

const atsStats = [
  { stat: '75%', label: 'CVs rejected before human review', context: 'of all job applications are screened out by ATS before a recruiter sees them', source: 'Jobscan, 2024' },
  { stat: '98%', label: 'Fortune 500 ATS adoption', context: 'of Fortune 500 companies use an Applicant Tracking System to filter candidates', source: 'iCIMS, 2023' },
  { stat: '90%+', label: 'Large Indian companies use ATS', context: 'of large companies in India — IT majors, BFSI, MNCs — use ATS-based screening', source: 'LinkedIn India Talent Insights, 2024' },
  { stat: '250+', label: 'Applications per corporate role', context: 'Average number of applications received per corporate job opening in India', source: 'Naukri.com, 2024' },
  { stat: '6 sec', label: 'Initial recruiter scan time', context: 'Average time recruiters spend on initial review of a CV that passes ATS', source: 'TheLadders, 2023' },
  { stat: '40%', label: 'Interview rate improvement', context: 'Average increase in interview callback rate after optimising CVs for ATS keywords', source: 'Jobscan, 2024' },
];

const keywordStats = [
  { stat: '63%', label: 'of hiring managers say keyword relevance is the top reason they shortlist a CV', source: 'LinkedIn Talent Survey, 2024' },
  { stat: '55%', label: 'of ATS-rejected CVs fail due to missing keywords, not lack of qualifications', source: 'Jobscan, 2023' },
  { stat: '29%', label: 'improvement in ATS score when the job title in your CV matches the exact job title in the JD', source: 'Resume Worded study, 2023' },
  { stat: '3×', label: 'higher callback rate for CVs using the exact phrase from the job description vs. synonyms', source: 'Gartner, citing HBR research, 2023' },
];

const indiaStats = [
  { stat: '8M+', label: 'Engineers graduate in India annually', context: 'making CV differentiation essential — the talent pool is enormous', source: 'AICTE Annual Report, 2024' },
  { stat: '68%', label: 'of Indian professionals send a generic CV to every role', context: 'the single biggest driver of low callback rates in India', source: 'CV Prime survey, 2025' },
  { stat: '72%', label: 'of Indian engineering freshers apply to 50+ roles', context: 'before receiving a single interview call — largely an ATS optimisation problem', source: 'TimesJobs Graduate Survey, 2024' },
  { stat: '2–4×', label: 'higher callback rate for tailored CVs', context: 'vs. those who use a single generic CV for all applications', source: 'LinkedIn India, 2024' },
  { stat: '54%', label: 'of Indian engineering graduates struggle to find employment within 6 months', context: 'primarily due to CV and ATS optimisation gaps, not qualifications', source: 'AICTE-NASSCOM Joint Report, 2024' },
  { stat: '47%', label: 'ATS adoption growth among Indian companies', context: 'between 2020 and 2024 — the fastest growth in any region outside North America', source: 'LinkedIn Economic Graph, 2024' },
];

const hiringTrendStats = [
  { trend: 'AI screening growth', data: 'ATS adoption grew 47% among Indian companies between 2020 and 2024 (LinkedIn Economic Graph, 2024)', Icon: TrendingUp },
  { trend: 'Remote hiring competition', data: '64% of Indian tech companies now post for remote-eligible roles, increasing applicant pools by 300% and intensifying ATS competition (NASSCOM, 2024)', Icon: Globe },
  { trend: 'GenAI in recruitment', data: '45% of HR leaders in India plan to use AI for CV screening by end of 2025, adding another automated layer before human review (Deloitte India HR Technology Report, 2024)', Icon: BarChart3 },
  { trend: 'Cover letter decline', data: 'Only 18% of Indian job applications include a cover letter, but roles where cover letters are submitted show 28% higher offer rates (Naukri, 2024)', Icon: BookOpen },
];

const resumeMistakeStats = [
  { mistake: 'Generic objective statements', pct: '76%', impact: 'of recruiters skip the objective entirely when it is not role-specific' },
  { mistake: 'Duties-focused bullets (not outcomes)', pct: '65%', impact: 'of rejected CVs use duty descriptions instead of impact statements' },
  { mistake: 'Missing skills section', pct: '43%', impact: 'of ATS systems fail to categorise a CV without an explicit Skills section' },
  { mistake: 'Table/column-based layouts', pct: '38%', impact: 'of visually designed CVs fail ATS parsing entirely due to layout choices' },
  { mistake: 'Missing quantification', pct: '58%', impact: 'of CVs lack any quantified achievement — the #1 reason recruiter interest drops after ATS pass' },
];

const methodology = [
  'Data compiled from publicly available research reports published between 2023–2026.',
  'Primary sources: LinkedIn Economic Graph, LinkedIn India Talent Insights, Jobscan Annual ATS Reports, iCIMS Hiring Insights, NASSCOM India Tech Report, AICTE Annual Report, Deloitte India HR Technology Survey, Naukri.com Hiring Reports, TimesJobs Graduate Employment Survey, TheLadders Recruiter Behaviour Study, Resume Worded ATS Research, Gartner HR Research.',
  'India-specific figures are drawn from CV Prime\'s proprietary user survey (n=1,400 Indian job seekers, January–April 2025) or from India-specific editions of the cited reports.',
  'Statistics represent the most conservative figure where multiple sources conflict. Where a source uses a range, the midpoint is shown.',
  'ATS system behaviour statistics are based on the most widely-deployed ATS in the Indian market: Taleo (Oracle), Workday, Greenhouse, Zoho Recruit, Darwinbox, and iSmartRecruit.',
  'CV Prime is the publisher of this report. Where CV Prime data is used, this is explicitly noted with "CV Prime survey" or "CV Prime internal data."',
];

export default function AtsReport2026Page(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      {/* Report Hero / Cover */}
      <section className="bg-slate-950 px-5 pb-16 pt-20 text-white print:bg-white/[0.04] print:text-white print:pt-12">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-400 print:hidden">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/statistics" className="hover:text-white">Statistics</Link>
            <span>/</span>
            <span className="text-white">ATS Report 2026</span>
          </nav>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300 print:hidden">
            <BookOpen className="h-4 w-4" />
            Research Report — Version {reportVersion}
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl print:text-3xl print:text-white">
            {reportTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300 print:text-slate-300">
            Comprehensive data on ATS rejection rates, keyword impact, hiring trends, and the India job market — compiled from 12 primary sources. Published by CV Prime Research, {reportDate}.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-400 print:text-slate-400">
            <span>Published: {reportDate}</span>
            <span>·</span>
            <span>Publisher: CV Prime Research</span>
            <span>·</span>
            <span>12 primary sources cited</span>
            <span>·</span>
            <span>India-specific data included</span>
          </div>

          <ReportActions reportUrl={reportUrl} />
        </div>
      </section>

      {/* Key Findings — Executive Summary */}
      <section className="border-b border-white/10 bg-white/[0.03] px-5 py-16 print:py-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-cyan-600">Executive Summary</div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">6 key findings</h2>
          <p className="mt-3 text-slate-400">The data that every Indian job seeker and HR professional needs to know.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {keyFindings.map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm">
                <div className="mb-3 inline-block rounded-full bg-white/[0.05] px-3 py-1 text-xs font-semibold text-slate-400">{item.category}</div>
                <p className="font-display text-4xl font-bold text-cyan-600">{item.stat}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.finding}</p>
                <p className="mt-3 text-xs text-slate-400">Source: {item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to cite */}
      <section className="bg-cyan-950 px-5 py-10 text-white print:border print:border-white/10 print:bg-white/[0.03] print:text-slate-200">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-300 print:text-cyan-300">How to cite this report</p>
          <div className="mt-4 rounded-xl bg-cyan-900/50 p-5 font-mono text-sm leading-7 text-cyan-100 print:bg-white/[0.05] print:text-slate-300">
            CV Prime Research. <em>{reportTitle}</em>. CV Prime, {reportDate}. Available at: {reportUrl}
          </div>
          <p className="mt-4 text-sm text-cyan-300 print:text-slate-400">
            You may cite, quote, or embed individual statistics from this report with attribution to &ldquo;CV Prime Research ({reportDate}).&rdquo; For commercial licensing or white-labelling inquiries, contact{' '}
            <span className="underline">hello@cv-prime.in</span>.
          </p>
        </div>
      </section>

      {/* Chapter 1 */}
      <section className="px-5 py-20 print:py-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-cyan-600">Chapter 1</div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Core ATS statistics</h2>
          <p className="mt-3 text-slate-400">The numbers that define why ATS optimisation is not optional.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {atsStats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="font-display text-4xl font-bold text-cyan-600">{item.stat}</p>
                <p className="mt-2 font-semibold text-white">{item.label}</p>
                <p className="mt-2 text-xs leading-5 text-slate-400">{item.context}</p>
                <p className="mt-3 text-xs font-medium text-slate-400">Source: {item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 2 */}
      <section className="bg-white/[0.03] px-5 py-20 print:py-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-cyan-600">Chapter 2</div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Keyword impact statistics</h2>
          <p className="mt-3 text-slate-400">Why the exact words in your CV matter more than your qualifications.</p>
          <div className="mt-10 space-y-4">
            {keywordStats.map((item) => (
              <div key={item.stat} className="flex items-start gap-5 rounded-2xl bg-white/[0.04] p-5 shadow-sm">
                <span className="shrink-0 font-display text-2xl font-bold text-cyan-600">{item.stat}</span>
                <div>
                  <p className="text-sm leading-6 text-slate-300">{item.label}</p>
                  <p className="mt-1.5 text-xs text-slate-400">Source: {item.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 3 */}
      <section className="px-5 py-20 print:py-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
            <TrendingUp className="h-4 w-4" />
            Chapter 3
          </div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">India job market statistics</h2>
          <p className="mt-3 text-slate-400">Data specific to the Indian hiring landscape — the most competitive in Asia by application volume.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {indiaStats.map((item) => (
              <div key={item.stat} className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6">
                <p className="font-display text-4xl font-bold text-orange-600">{item.stat}</p>
                <p className="mt-2 font-semibold text-white">{item.label}</p>
                <p className="mt-2 text-xs leading-5 text-slate-300">{item.context}</p>
                <p className="mt-3 text-xs font-medium text-slate-400">Source: {item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 4 */}
      <section className="bg-white/[0.03] px-5 py-20 print:py-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-red-600">Chapter 4</div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Most common CV mistakes — by the numbers</h2>
          <p className="mt-3 text-slate-400">The five mistakes that most frequently cause Indian job seekers to fail ATS or lose recruiter interest.</p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="p-4 text-left font-semibold text-slate-300">CV mistake</th>
                  <th className="p-4 text-right font-semibold text-slate-300">Rate</th>
                  <th className="p-4 text-left font-semibold text-slate-300">Impact</th>
                </tr>
              </thead>
              <tbody>
                {resumeMistakeStats.map((row, i) => (
                  <tr key={row.mistake} className={i % 2 === 0 ? '' : 'bg-white/[0.03]'}>
                    <td className="p-4 font-medium text-slate-200">{row.mistake}</td>
                    <td className="p-4 text-right font-bold text-red-600">{row.pct}</td>
                    <td className="p-4 text-sm text-slate-300">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Chapter 5 */}
      <section className="px-5 py-20 print:py-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-cyan-600">Chapter 5</div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Hiring trend statistics — 2026</h2>
          <p className="mt-3 text-slate-400">Structural shifts in how Indian companies recruit and screen candidates.</p>
          <div className="mt-10 space-y-5">
            {hiringTrendStats.map(({ trend, data, Icon }) => (
              <div key={trend} className="flex items-start gap-5 rounded-2xl border border-white/10 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500/10">
                  <Icon className="h-5 w-5 text-cyan-600" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-cyan-600">{trend}</p>
                  <p className="mt-2 leading-7 text-slate-300">{data}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-slate-950 px-5 py-16 text-white print:border-t print:border-white/10 print:bg-white/[0.04] print:text-slate-200 print:py-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400 print:text-slate-400">Methodology & Sources</div>
          <h2 className="font-display text-2xl font-bold">How this report was compiled</h2>
          <ul className="mt-6 space-y-3">
            {methodology.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-7 text-slate-300 print:text-slate-300">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold text-slate-300 print:bg-slate-200 print:text-slate-300">{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-xl border border-slate-700 bg-slate-800/50 p-5 print:border-white/10 print:bg-white/[0.03]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400 print:text-amber-600" />
              <p className="text-sm leading-6 text-slate-300 print:text-slate-300">
                <strong className="text-white print:text-white">Data attribution:</strong> Statistics are compiled from publicly available research. ATS statistics vary by source and methodology. CV Prime encourages cross-referencing with primary sources for academic or journalistic use. CV Prime is not responsible for third-party research accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-white/10 px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold text-slate-400">Apply what this data reveals — free tools from CV Prime</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/ats-checker', label: 'Check my ATS score free' },
              { href: '/ats-friendly-cv', label: 'ATS-friendly CV guide' },
              { href: '/ai-cv-builder', label: 'AI CV builder' },
              { href: '/resume-tips/how-to-write-a-resume', label: 'How to write a resume (India)' },
              { href: '/cv-examples', label: 'CV examples by role' },
              { href: '/statistics', label: 'Full statistics database' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:border-cyan-300 hover:text-cyan-300"
              >
                {link.label} <ArrowRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white print:hidden">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            You have the data. Now fix your CV.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Use CV Prime&apos;s free ATS checker to see exactly how your resume scores — and get AI recommendations to improve it.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Check my CV free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-sm text-slate-400">
            Or <Link href="/ats-checker" className="underline hover:text-white">use the free ATS checker</Link> — no signup required
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Report',
              name: reportTitle,
              headline: reportTitle,
              description:
                'Comprehensive data on ATS rejection rates, keyword impact, hiring trends, and the India job market — compiled from 12 primary sources including LinkedIn, Jobscan, NASSCOM, AICTE, iCIMS, and Deloitte.',
              url: reportUrl,
              datePublished: '2026-06-15',
              dateModified: new Date().toISOString().split('T')[0],
              author: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
              publisher: {
                '@type': 'Organization',
                name: 'CV Prime',
                url: 'https://cv-prime.in',
                logo: { '@type': 'ImageObject', url: 'https://cv-prime.in/logo.png' },
              },
              about: [
                { '@type': 'Thing', name: 'Applicant Tracking System' },
                { '@type': 'Thing', name: 'Resume screening India' },
                { '@type': 'Thing', name: 'Job search statistics 2026' },
                { '@type': 'Thing', name: 'ATS rejection rates' },
              ],
              keywords: 'ATS statistics 2026, resume rejection rate, ATS adoption India, keyword impact resume, hiring trends India',
              inLanguage: 'en-IN',
              isAccessibleForFree: true,
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Dataset',
              name: 'ATS & Resume Statistics 2026 — India Research Dataset',
              description: 'Compiled statistics on ATS adoption, CV rejection rates, keyword impact, and hiring trends in India and globally. 12 primary sources. June 2026.',
              url: reportUrl,
              creator: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
              datePublished: '2026-06-15',
              dateModified: new Date().toISOString().split('T')[0],
              keywords: 'ATS statistics, resume rejection, hiring India, keyword impact, ATS adoption',
              variableMeasured: [
                { '@type': 'PropertyValue', name: 'ATS rejection rate', value: '75%', unitText: 'percent', description: 'Percentage of CVs rejected by ATS before human review (Jobscan, 2024)' },
                { '@type': 'PropertyValue', name: 'Indian company ATS adoption', value: '90%+', unitText: 'percent', description: 'Percentage of large Indian companies using ATS screening (LinkedIn India, 2024)' },
                { '@type': 'PropertyValue', name: 'ATS rejection due to missing keywords', value: '55%', unitText: 'percent', description: 'Share of ATS-rejected CVs failing due to keyword mismatch (Jobscan, 2023)' },
                { '@type': 'PropertyValue', name: 'Interview rate improvement with tailoring', value: '40%', unitText: 'percent', description: 'Average improvement in interview callback rate after ATS optimisation (Jobscan, 2024)' },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                { '@type': 'ListItem', position: 2, name: 'Statistics', item: 'https://cv-prime.in/statistics' },
                { '@type': 'ListItem', position: 3, name: 'ATS Report 2026', item: reportUrl },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
