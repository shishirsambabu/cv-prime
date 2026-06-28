import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Lock, Zap, ShieldCheck } from 'lucide-react';
import { ResumeStrengthAnalyzer } from '@/components/tools/ResumeStrengthAnalyzer';

export const metadata: Metadata = {
  title: 'Free Resume Strength Analyzer — Score Your Resume Instantly (No Login) | CV Prime',
  description:
    'Free resume checker that scores your resume 0–100 on length, action verbs, quantified impact, filler words, sections, and contact info — instantly, in your browser, no signup or upload.',
  alternates: { canonical: 'https://cv-prime.in/tools/resume-strength-analyzer' },
  keywords: [
    'resume strength analyzer',
    'free resume checker no login',
    'resume score tool',
    'resume grader free',
    'check my resume free',
    'resume analyzer free india',
    'resume quality checker',
    'resume bullet point checker',
    'free resume review tool',
    'instant resume score',
  ],
  openGraph: {
    title: 'Free Resume Strength Analyzer — Score Your Resume Instantly (No Login)',
    description:
      'Score your resume 0–100 on action verbs, quantified impact, filler, sections, and more — instantly, in your browser, no signup.',
    url: 'https://cv-prime.in/tools/resume-strength-analyzer',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Free resume strength analyzer — CV Prime' }],
  },
};

const faqs = [
  {
    q: 'Is this resume analyzer free and private?',
    a: 'Yes. It is free with no signup, and it runs entirely in your browser — your resume text is never uploaded to a server or stored. You can analyse as many versions as you like.',
  },
  {
    q: 'What does the resume strength score measure?',
    a: 'The tool scores six fundamentals recruiters and ATS both care about: appropriate length, how many bullets start with strong action verbs, how many bullets are quantified with metrics, the presence of weak filler phrases ("responsible for", "worked on"), whether you use standard sections (Summary, Skills, Experience, Education), and whether your contact details are present. Each contributes to a 0–100 score with specific fixes.',
  },
  {
    q: 'What is a good resume strength score?',
    a: 'Aim for 80 or above. A score in the 60s usually means weak or un-quantified bullets and some filler; below 50 typically means the resume is thin, lacks metrics, or is missing standard structure. The per-check breakdown tells you exactly what to fix and roughly how many points each fix is worth.',
  },
  {
    q: 'Does this also check ATS keyword match?',
    a: 'No — this tool checks the quality and structure of your resume itself. To check how well your resume matches a specific job description, use the free ATS keyword matcher, which compares your resume against a pasted JD and shows your keyword match and missing terms.',
  },
  {
    q: 'How is this different from CV Prime\'s AI resume tools?',
    a: 'This analyzer uses fast, rule-based checks in your browser — no AI, no login. CV Prime\'s AI tools (inside your account, on your own OpenRouter key) go further: they rewrite your weak bullets into strong quantified lines, tailor your resume to a specific job description, and give a full AI ATS score with format and section analysis. Use this tool to diagnose, then the AI to fix.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'CV Prime Resume Strength Analyzer',
  url: 'https://cv-prime.in/tools/resume-strength-analyzer',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Free tool that scores your resume 0–100 on action verbs, quantified impact, filler, sections, and contact info. No signup.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Free Tools', item: 'https://cv-prime.in/tools' },
    { '@type': 'ListItem', position: 3, name: 'Resume Strength Analyzer', item: 'https://cv-prime.in/tools/resume-strength-analyzer' },
  ],
};

export default function ResumeStrengthAnalyzerPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <Zap className="h-4 w-4" />
            Free · No login · Runs in your browser
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Free resume strength analyzer
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Paste your resume and get an instant 0–100 score on the six things recruiters and ATS judge first — with specific fixes. No signup, no upload, nothing stored.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <ResumeStrengthAnalyzer />
        </div>
      </section>

      {/* Trust row */}
      <section className="px-5 pb-8">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-10 gap-y-3 text-center text-sm text-slate-400">
          <span className="inline-flex items-center gap-2"><Lock className="h-4 w-4 text-brand" /> Nothing uploaded or stored</span>
          <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-brand" /> Instant, unlimited use</span>
          <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand" /> No credit card, no account</span>
        </div>
      </section>

      {/* What it checks */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">What it checks</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['Length', 'Word count and estimated pages for your experience level'],
              ['Action verbs', 'How many bullets lead with strong verbs vs "responsible for"'],
              ['Quantified impact', 'How many bullets include numbers, %, ₹, or scale'],
              ['Filler words', 'Weak phrases that dilute your bullets'],
              ['Standard sections', 'Summary, Skills, Experience, Education present'],
              ['Contact info', 'Email and phone detected in the header'],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="font-display text-base font-bold text-white">{t}</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">Resume strength analyzer — FAQ</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-display text-lg font-bold text-white">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-white/10 px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-white">More free tools & guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/tools', label: 'All free tools' },
              { href: '/tools/ats-keyword-matcher', label: 'ATS keyword matcher' },
              { href: '/tools/cgpa-to-percentage', label: 'CGPA to percentage' },
              { href: '/resume-checker', label: 'Full AI resume checker' },
              { href: '/ai-resume-rewriter', label: 'AI resume rewriter' },
              { href: '/resume-tips/resume-bullet-points', label: 'How to write bullet points' },
              { href: '/resume-tips/action-verbs', label: 'Resume action verbs' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-brand hover:text-brand">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">Diagnose free. Fix with AI.</h2>
          <p className="mt-4 text-slate-300">
            This tool shows what&apos;s weak. CV Prime&apos;s AI rewrites it — stronger bullets, quantified impact, ATS-scored against a real job.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
            Fix my resume with AI <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
