import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, Minus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CV Prime vs Indeed Resume Builder — Which is Better for India? | CV Prime',
  description:
    'CV Prime vs Indeed Resume Builder comparison for 2026. Compare ATS scoring, AI features, India-specific content, pricing, and templates. Find out which resume builder helps Indian job seekers get more callbacks.',
  keywords: [
    'cv prime vs indeed resume builder',
    'indeed resume builder alternative india',
    'indeed resume builder india',
    'indeed vs cv prime',
    'best resume builder india vs indeed',
    'indeed resume builder review india',
    'free resume builder india alternative to indeed',
    'resume builder india 2026 comparison',
  ],
  alternates: { canonical: 'https://cv-prime.in/cv-prime-vs-indeed-resume-builder' },
  openGraph: {
    title: 'CV Prime vs Indeed Resume Builder — Which is Better for India? (2026)',
    description: 'Feature-by-feature comparison of CV Prime and Indeed Resume Builder for Indian job seekers — ATS scoring, AI features, templates, and pricing.',
    url: 'https://cv-prime.in/cv-prime-vs-indeed-resume-builder',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime vs Indeed Resume Builder' }],
  },
};

const features = [
  {
    feature: 'ATS scoring (0–100)',
    cvPrime: 'yes',
    indeed: 'no',
    note: 'CV Prime scores your resume against any job description on a 0–100 scale with keyword gap analysis',
  },
  {
    feature: 'AI keyword tailoring per JD',
    cvPrime: 'yes',
    indeed: 'no',
    note: 'CV Prime rewrites your bullets to include the exact keywords from any job description you paste',
  },
  {
    feature: 'AI cover letter generator',
    cvPrime: 'yes',
    indeed: 'limited',
    note: 'CV Prime generates full cover letters tailored to the JD; Indeed offers basic templates only',
  },
  {
    feature: 'Free PDF export (no watermark)',
    cvPrime: 'yes (3 free)',
    indeed: 'yes',
    note: 'Both platforms offer free PDF downloads; CV Prime also offers print-to-PDF with full formatting control',
  },
  {
    feature: 'India-specific content and guides',
    cvPrime: 'yes',
    indeed: 'no',
    note: 'CV Prime has 35+ role guides, salary data, and ATS guides built specifically for the Indian job market',
  },
  {
    feature: 'Job application tracker',
    cvPrime: 'yes',
    indeed: 'built-in (job board)',
    note: 'Indeed tracks applications submitted on Indeed.com; CV Prime tracks applications across all platforms',
  },
  {
    feature: 'CV upload & parse',
    cvPrime: 'yes',
    indeed: 'yes',
    note: 'Both support PDF and DOCX upload to pre-fill your resume',
  },
  {
    feature: 'Number of templates',
    cvPrime: '8 (ATS-optimised)',
    indeed: '5–6 (basic)',
    note: 'CV Prime templates are engineered for ATS parsing safety; Indeed templates are functional but generic',
  },
  {
    feature: 'INR pricing',
    cvPrime: 'yes',
    indeed: 'free (India)',
    note: "Indeed Resume Builder is free globally including India; CV Prime's free tier + ₹999 one-time Pro",
  },
  {
    feature: 'UPI and Indian payment methods',
    cvPrime: 'yes',
    indeed: 'N/A (free only)',
    note: 'CV Prime accepts UPI, net banking, Indian cards for Pro upgrade; Indeed has no paid tier',
  },
  {
    feature: 'Multi-resume management',
    cvPrime: 'yes',
    indeed: 'yes',
    note: 'Both platforms allow creating and saving multiple resume versions',
  },
  {
    feature: 'BYOK (own AI API key)',
    cvPrime: 'yes',
    indeed: 'no',
    note: 'CV Prime lets power users bring their own OpenRouter API key for enhanced AI features and privacy',
  },
];

const faqs = [
  {
    q: 'Is Indeed Resume Builder good for Indian job seekers?',
    a: "Indeed Resume Builder is functional and free — it creates a basic, well-formatted resume that can be submitted directly to Indeed.com job listings. However, it lacks ATS scoring, AI tailoring, and India-specific content. For Indian job seekers targeting Naukri.com, LinkedIn, or direct company applications, CV Prime's ATS analysis and India-specific guides provide significantly more value.",
  },
  {
    q: 'Does Indeed Resume Builder have ATS scoring?',
    a: 'No. Indeed Resume Builder does not provide ATS match scoring against specific job descriptions. It creates a formatted resume but does not analyse how well it matches a given JD. CV Prime provides a 0–100 ATS score with specific keyword gaps identified when you paste any job description.',
  },
  {
    q: 'Is Indeed Resume Builder completely free?',
    a: "Yes — Indeed Resume Builder is free. There's no paid tier. However, the free tool has limited templates, no AI tailoring, and no ATS scoring. CV Prime's free tier (3 PDF exports, ATS scoring, AI bullet rewrites) provides more functionality, with a one-time Pro upgrade at ₹999 for unlimited use.",
  },
  {
    q: 'Can I use Indeed Resume Builder for jobs in India?',
    a: "Yes, you can use it for jobs posted on Indeed India. However, Indeed's India market share is significantly lower than Naukri.com and LinkedIn for most professional roles. A CV Prime resume can be downloaded and submitted anywhere — giving you flexibility across all Indian job platforms, not just Indeed.",
  },
  {
    q: 'Which resume builder is better for freshers in India — CV Prime or Indeed?',
    a: "CV Prime — particularly for Indian freshers targeting campus recruitment, AMCAT/CoCubes assessments, or the top IT companies. CV Prime has India-specific fresher CV guides, ATS scoring for Indian company JDs, and helps with the specific sections (projects, internships, certifications) that matter for fresher profiles. Indeed Resume Builder's content is generic and US-oriented.",
  },
  {
    q: 'Does Indeed Resume Builder work well with Naukri.com?',
    a: "Indeed Resume Builder exports a PDF that can be uploaded to Naukri.com. However, Naukri's own ATS parser and profile system has specific preferences for format and structure. CV Prime's ATS-optimised templates are validated for parsing compatibility with major Indian ATS systems, and CV Prime has dedicated Naukri resume tips and guides built for the Indian context.",
  },
];

export default function CvPrimeVsIndeedPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">CV Prime vs Indeed Resume Builder</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            CV Prime vs Indeed Resume Builder — which is better for India in 2026?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Indeed Resume Builder is free but limited. CV Prime adds ATS scoring, AI keyword tailoring, and India-specific guides. Here is an honest comparison so you can choose the right tool.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800 px-5 py-2 text-sm text-slate-300">
            Last updated: June 2026 — based on publicly available feature information
          </div>
        </div>
      </section>

      {/* Verdict cards */}
      <section className="border-b border-white/10 px-5 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border-2 border-cyan-400 bg-cyan-500/10 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-brand-foreground">
                  CP
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-white">CV Prime</p>
                  <p className="text-sm text-slate-300">Best for ATS, AI & India-specific content</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600" /> ATS scoring & keyword gap analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600" /> AI bullet rewriting per JD
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600" /> India salary guides, role guides, ATS guides
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600" /> 8 ATS-safe templates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600" /> Free tier (3 exports, no card needed)
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-display text-sm font-bold text-white">
                  IN
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-white">Indeed Resume Builder</p>
                  <p className="text-sm text-slate-300">Free basic builder tied to Indeed job board</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-slate-400" /> Completely free (no paid tier)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-slate-400" /> Works directly with Indeed job listings
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="h-4 w-4 text-red-400" /> No ATS scoring or keyword analysis
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="h-4 w-4 text-red-400" /> No AI tailoring to specific JDs
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="h-4 w-4 text-red-400" /> No India-specific content or guides
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Feature comparison — CV Prime vs Indeed Resume Builder
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="p-4 text-left font-semibold text-slate-300">Feature</th>
                  <th className="p-4 text-center font-semibold text-cyan-300">CV Prime</th>
                  <th className="p-4 text-center font-semibold text-slate-300">Indeed</th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white/[0.02]' : 'bg-white/[0.03]'}>
                    <td className="p-4">
                      <p className="font-medium text-slate-200">{row.feature}</p>
                      <p className="mt-0.5 text-xs text-slate-400">{row.note}</p>
                    </td>
                    <td className="p-4 text-center">
                      {row.cvPrime === 'yes' ? (
                        <CheckCircle2 className="mx-auto h-5 w-5 text-cyan-600" />
                      ) : row.cvPrime === 'no' ? (
                        <XCircle className="mx-auto h-5 w-5 text-red-400" />
                      ) : (
                        <span className="inline-block rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-bold text-cyan-300">
                          {row.cvPrime}
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.indeed === 'yes' ? (
                        <CheckCircle2 className="mx-auto h-5 w-5 text-slate-400" />
                      ) : row.indeed === 'no' ? (
                        <XCircle className="mx-auto h-5 w-5 text-red-400" />
                      ) : row.indeed === 'limited' ? (
                        <Minus className="mx-auto h-5 w-5 text-amber-500" />
                      ) : (
                        <span className="inline-block rounded-full bg-white/[0.05] px-2 py-0.5 text-xs font-bold text-slate-300">
                          {row.indeed}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key differences section */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            The key differences that matter for Indian job seekers
          </h2>
          <div className="mt-10 space-y-8">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="font-display text-lg font-bold text-cyan-300">
                1. ATS scoring — the single biggest differentiator
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Indeed Resume Builder creates a resume. CV Prime tells you how that resume will perform against a specific job description. This is the core difference. In India, where 90%+ of large companies use ATS systems and 75% of resumes never reach a human recruiter (Jobscan, 2024), knowing your ATS score before applying is the difference between a 10% and 40% callback rate.
              </p>
              <p className="mt-3 leading-7 text-slate-300">
                CV Prime&apos;s 0–100 ATS score shows you exactly which keywords are missing, which sections are weak, and what to fix before you apply — turning your resume from a formatted document into an optimised job-hunting tool.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="font-display text-lg font-bold text-cyan-300">
                2. India-specific content vs generic templates
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Indeed Resume Builder was designed primarily for the US job market. Its templates, suggestions, and content prompts reflect US hiring conventions — which differ meaningfully from India in section ordering (Indian resumes include projects, certifications, and interests more prominently), content expectations (Indian JDs emphasise specific tool stacks and company-type experience), and format norms.
              </p>
              <p className="mt-3 leading-7 text-slate-300">
                CV Prime is built for India. Its 35+ role guides cover Indian companies, Indian salary ranges, ATS keyword sets drawn from Indian JDs, and guidance on the specific sections and formats that Indian recruiters expect. The ATS checker is calibrated for the way Indian companies structure their JDs.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="font-display text-lg font-bold text-cyan-300">
                3. Platform breadth — Indeed-only vs everywhere
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Indeed Resume Builder integrates tightly with Indeed.com — which is logical if you apply exclusively through Indeed. In India, most professional roles are listed on Naukri.com (market leader), LinkedIn, company career pages, and AngelList. Indeed India has a smaller market share for professional tech roles compared to these platforms.
              </p>
              <p className="mt-3 leading-7 text-slate-300">
                CV Prime exports a clean PDF that works on any platform. The ATS checker is agnostic — paste any JD from Naukri, LinkedIn, or a company&apos;s website and get an analysis. This flexibility makes it more practical for most Indian job seekers who apply across multiple platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When to choose */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">When to choose CV Prime vs Indeed Resume Builder</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-6">
              <p className="font-display font-bold text-white">Choose CV Prime if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {[
                  'Want ATS scoring against the specific JDs you are applying to',
                  'Need AI to tailor your bullets and keywords to each job',
                  'Are applying on Naukri.com, LinkedIn, or company career pages',
                  'Want India-specific role guides, salary data, and ATS tips',
                  'Need a cover letter that mirrors the JD you are applying to',
                  'Are a fresher building your first CV for Indian recruiters',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="font-display font-bold text-white">Indeed might suit you if you:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {[
                  'Apply exclusively through Indeed.com and want tight integration',
                  'Want the absolute simplest resume builder with no learning curve',
                  'Only need a basic formatted resume and no ATS analysis',
                  'Prefer a tool from Indeed to keep applications on one platform',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Minus className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            CV Prime vs Indeed Resume Builder — frequently asked questions
          </h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links to other comparisons */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-xl font-bold">Compare CV Prime with other tools</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { label: 'CV Prime vs Zety', href: '/cv-prime-vs-zety' },
              { label: 'CV Prime vs Resume.io', href: '/cv-prime-vs-resume-io' },
              { label: 'CV Prime vs Rezi', href: '/cv-prime-vs-rezi' },
              { label: 'CV Prime vs Teal', href: '/cv-prime-vs-teal' },
              { label: 'CV Prime vs Enhancv', href: '/cv-prime-vs-enhancv' },
              { label: 'CV Prime vs Kickresume', href: '/cv-prime-vs-kickresume' },
              { label: 'CV Prime vs Novoresume', href: '/cv-prime-vs-novoresume' },
              { label: 'CV Prime vs Resume Worded', href: '/cv-prime-vs-resume-worded' },
              { label: 'CV Prime vs Jobscan', href: '/cv-prime-vs-jobscan' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 hover:border-cyan-400/50 hover:text-white"
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
            Try CV Prime free — no credit card required
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Free plan includes 3 PDF exports, ATS scoring against any JD, AI bullet rewrites, and all 8 templates.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Try CV Prime free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-sm text-slate-400">
            Or{' '}
            <Link href="/pricing" className="underline hover:text-white">
              view full pricing
            </Link>{' '}
            — Pro from ₹999 one-time
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'CV Prime vs Indeed Resume Builder — Which is Better for India? (2026)',
              description:
                'Feature-by-feature comparison of CV Prime and Indeed Resume Builder for Indian job seekers — ATS scoring, AI features, India-specific content, and pricing.',
              url: 'https://cv-prime.in/cv-prime-vs-indeed-resume-builder',
              author: { '@type': 'Organization', name: 'CV Prime' },
              publisher: {
                '@type': 'Organization',
                name: 'CV Prime',
                url: 'https://cv-prime.in',
              },
              dateModified: new Date().toISOString().split('T')[0],
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
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'CV Prime vs Indeed Resume Builder',
                  item: 'https://cv-prime.in/cv-prime-vs-indeed-resume-builder',
                },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
