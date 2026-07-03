import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, Minus } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CV Prime vs LinkedIn Resume Builder — Which is Better? | CV Prime',
  description:
    'CV Prime vs LinkedIn Resume Builder comparison 2026. LinkedIn converts your profile to PDF but has no ATS scoring, no job-specific tailoring, and no AI rewriting. CV Prime does all of that.',
  keywords: [
    'cv prime vs linkedin resume builder',
    'linkedin resume builder vs cv prime',
    'linkedin resume builder review',
    'linkedin resume builder ats',
    'linkedin cv download vs resume builder',
    'best resume builder india linkedin',
    'linkedin resume builder alternative india',
    'linkedin vs resume builder india',
    'download linkedin profile as resume',
    'linkedin resume builder india',
  ],
  alternates: { canonical: 'https://cv-prime.in/cv-prime-vs-linkedin-resume' },
  openGraph: {
    title: 'CV Prime vs LinkedIn Resume Builder — Which is Better?',
    description:
      'LinkedIn exports your profile as a PDF. CV Prime builds an ATS-optimised, job-tailored resume with AI. Full comparison for Indian job seekers.',
    url: 'https://cv-prime.in/cv-prime-vs-linkedin-resume',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime vs LinkedIn Resume Builder' }],
  },
};

const features = [
  { feature: 'ATS scoring against job description', cvPrime: 'yes', linkedin: 'no', note: 'CV Prime gives a 0–100 ATS match score per JD. LinkedIn has no ATS analysis.' },
  { feature: 'AI keyword tailoring per JD', cvPrime: 'yes', linkedin: 'no', note: 'CV Prime rewrites your bullets with JD-specific keywords. LinkedIn only exports your profile as-is.' },
  { feature: 'AI bullet rewriter', cvPrime: 'yes', linkedin: 'no', note: 'CV Prime identifies weak bullets and rewrites them with outcome-driven language.' },
  { feature: 'Cover letter generator', cvPrime: 'yes', linkedin: 'no', note: 'CV Prime generates role-specific cover letters. LinkedIn has no cover letter tool.' },
  { feature: 'Multiple resume versions', cvPrime: 'yes', linkedin: 'no', note: 'CV Prime manages multiple role-specific versions. LinkedIn only exports your current profile.' },
  { feature: 'ATS-safe PDF templates', cvPrime: 'yes', linkedin: 'partial', note: 'LinkedIn\'s PDF export is clean but generic — not keyword-optimised for any specific role.' },
  { feature: 'CV upload from PDF/DOCX', cvPrime: 'yes', linkedin: 'no', note: 'CV Prime imports your existing resume. LinkedIn only works from your LinkedIn profile data.' },
  { feature: 'Free clean PDF export', cvPrime: 'yes', linkedin: 'yes', note: 'Both offer free PDF export. LinkedIn\'s is your profile; CV Prime\'s is a tailored, scored resume.' },
  { feature: 'Job application tracker', cvPrime: 'yes', linkedin: 'yes', note: 'LinkedIn has job tracking via Easy Apply history. CV Prime has a dedicated application tracker.' },
  { feature: 'INR pricing', cvPrime: 'yes', linkedin: 'no', note: 'CV Prime is ₹999 one-time INR. LinkedIn Premium is ~₹2,500–₹5,000/month.' },
  { feature: 'Works independently of your LinkedIn profile', cvPrime: 'yes', linkedin: 'no', note: 'CV Prime is a standalone tool. LinkedIn Resume Builder only reflects your profile data.' },
];

const faqs = [
  {
    q: 'What is LinkedIn Resume Builder?',
    a: 'LinkedIn Resume Builder is a feature in LinkedIn that converts your LinkedIn profile into a downloadable resume PDF. It automatically pulls your headline, experience, education, skills, and summary from your profile and formats them into a resume template. It is free for all LinkedIn users. The output is a clean, readable PDF — but it is a generic export of your profile, not a tailored, ATS-scored resume.',
  },
  {
    q: 'Is the LinkedIn Resume Builder ATS-compatible?',
    a: 'The PDF that LinkedIn exports is technically parseable by ATS — it uses a clean, text-based format without graphics. However, ATS compatibility is not just about the format — it is also about keyword coverage. LinkedIn\'s export uses whatever is on your profile, regardless of whether those keywords match the specific job description you are applying to. Without tailoring, even a clean PDF will have a poor ATS match score if the role has different keyword requirements than your profile language.',
  },
  {
    q: 'Should I use my LinkedIn PDF as my resume when applying to jobs?',
    a: 'Only if your LinkedIn profile is already fully optimised for the specific role. For most candidates, the LinkedIn export is a starting point, not a finished resume. The profile-to-resume conversion does not add outcome-driven bullets, remove irrelevant information, or tailor keywords to a job description. A better workflow: export your LinkedIn PDF, upload it to CV Prime, paste the job description, and let AI tailor the content and score your ATS match before submitting.',
  },
  {
    q: 'Is CV Prime better than LinkedIn Premium Resume features?',
    a: 'Yes, for active job applications. LinkedIn Premium Resume Builder is still just an export of your profile data — it doesn\'t score your resume against job descriptions, rewrite your bullets, or generate cover letters. CV Prime does all three. CV Prime is also significantly cheaper: ₹999 one-time vs LinkedIn Premium at ₹2,500–₹5,000/month (which is primarily priced for recruiting and networking features, not resume building).',
  },
  {
    q: 'Can I use both LinkedIn and CV Prime together?',
    a: 'Yes — and this is the recommended workflow. Keep your LinkedIn profile comprehensive and well-maintained for networking and inbound recruiter visibility. For each active application, use CV Prime to create a tailored version of your resume: paste the JD, score your ATS match, fix keyword gaps, rewrite weak bullets, and export a clean PDF. This gives you the best of both: LinkedIn visibility + ATS-optimised applications.',
  },
  {
    q: 'Does LinkedIn Resume Builder work for Indian job seekers?',
    a: 'LinkedIn\'s resume export works fine technically for Indian users, but it has no India-specific content or guidance. There is no India-focused keyword database, no INR pricing, and no understanding of Indian CV conventions (fresher format, CGPA inclusion, Indian employer expectations). CV Prime is built specifically for the Indian job market with 36 role-specific India guides, salary data by Indian city, and ATS calibration for Indian employers.',
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

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'CV Prime vs LinkedIn Resume Builder — Which is Better for India? (2026)',
  description: 'Comparison of CV Prime and LinkedIn Resume Builder for Indian job seekers — ATS scoring, AI tailoring, pricing, and which tool gets more interviews.',
  url: 'https://cv-prime.in/cv-prime-vs-linkedin-resume',
  author: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
  publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
  dateModified: new Date().toISOString().split('T')[0],
};

export default function CvPrimeVsLinkedInResumePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, articleSchema, {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
            { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://cv-prime.in/compare' },
            { '@type': 'ListItem', position: 3, name: 'CV Prime vs LinkedIn Resume', item: 'https://cv-prime.in/cv-prime-vs-linkedin-resume' },
          ],
        }]) }}
      />

      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/compare" className="hover:text-white">Compare</Link>
            <span>/</span>
            <span className="text-white">CV Prime vs LinkedIn Resume</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            CV Prime vs LinkedIn Resume Builder — which gets you more interviews?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            LinkedIn converts your profile to a PDF. CV Prime builds a tailored, ATS-scored resume per job description with AI. Here&apos;s the full comparison for Indian job seekers in 2026.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800 px-5 py-2 text-sm text-slate-300">
            Last updated: June 2026
          </div>
        </div>
      </section>

      {/* Key insight */}
      <section className="border-b border-white/10 px-5 py-10">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">The core difference</p>
            <p className="mt-3 text-base leading-8 text-white">
              LinkedIn Resume Builder exports a snapshot of your profile. CV Prime builds a targeted resume — scoring it against the specific job description, rewriting weak bullets, and generating a matching cover letter. They solve different problems.
            </p>
          </div>
        </div>
      </section>

      {/* Verdict cards */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border-2 border-cyan-400 bg-cyan-500/10 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-brand-foreground">CP</div>
                <div>
                  <p className="font-display text-lg font-bold text-white">CV Prime</p>
                  <p className="text-sm text-slate-300">ATS-first resume builder</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> ATS scoring per job description</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> AI keyword tailoring</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Bullet rewriter (outcome-focused)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Cover letter generator</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> Multiple role-specific resume versions</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> ₹999 one-time INR pricing</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-display text-sm font-bold text-white">in</div>
                <div>
                  <p className="font-display text-lg font-bold text-white">LinkedIn Resume Builder</p>
                  <p className="text-sm text-slate-300">Profile-to-PDF converter</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Free PDF export of your profile</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-400" /> Clean, readable format</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No ATS scoring or keyword analysis</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No AI tailoring to job description</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No bullet rewriter</li>
                <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> No cover letter generator</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature table */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Feature comparison — CV Prime vs LinkedIn Resume Builder</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.04]">
                  <th className="p-4 text-left font-semibold text-slate-300">Feature</th>
                  <th className="p-4 text-center font-semibold text-cyan-300">CV Prime</th>
                  <th className="p-4 text-center font-semibold text-blue-700">LinkedIn</th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white/[0.06]' : 'bg-white/[0.03]'}>
                    <td className="p-4">
                      <p className="font-medium text-slate-200">{row.feature}</p>
                      <p className="mt-0.5 text-xs text-slate-400">{row.note}</p>
                    </td>
                    <td className="p-4 text-center">
                      {row.cvPrime === 'yes' ? <CheckCircle2 className="mx-auto h-5 w-5 text-cyan-600" /> :
                       <XCircle className="mx-auto h-5 w-5 text-red-400" />}
                    </td>
                    <td className="p-4 text-center">
                      {row.linkedin === 'yes' ? <CheckCircle2 className="mx-auto h-5 w-5 text-blue-500" /> :
                       row.linkedin === 'no' ? <XCircle className="mx-auto h-5 w-5 text-red-400" /> :
                       <Minus className="mx-auto h-5 w-5 text-amber-500" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">CV Prime vs LinkedIn Resume — frequently asked questions</h2>
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

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Go beyond your LinkedIn export
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Import your LinkedIn resume, paste the JD, get your ATS score, and let AI rewrite your bullets for the role. Free to start.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Try CV Prime free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-sm text-slate-400">3 free PDF exports — no credit card required</p>
        </div>
      </section>
    </main>
  );
}
