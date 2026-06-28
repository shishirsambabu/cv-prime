import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Lock, Zap, ShieldCheck } from 'lucide-react';
import { AtsKeywordMatcher } from '@/components/tools/AtsKeywordMatcher';

export const metadata: Metadata = {
  title: 'Free ATS Keyword Matcher — Match Your Resume to a Job (No Login) | CV Prime',
  description:
    'Free resume keyword match tool. Paste your resume and a job description to instantly see your keyword match score and the exact terms you\'re missing — runs in your browser, no signup, no upload.',
  alternates: { canonical: 'https://cv-prime.in/tools/ats-keyword-matcher' },
  keywords: [
    'resume keyword match tool',
    'ats keyword matcher',
    'resume keyword scanner',
    'free ats keyword checker',
    'keyword match resume',
    'resume vs job description keyword tool',
    'job description keyword matcher',
    'check resume keywords free',
    'resume keyword checker no login',
    'ats keyword tool india',
  ],
  openGraph: {
    title: 'Free ATS Keyword Matcher — Match Your Resume to a Job (No Login)',
    description:
      'Paste your resume + a job description and instantly see your keyword match score and missing terms. Free, no signup, runs in your browser.',
    url: 'https://cv-prime.in/tools/ats-keyword-matcher',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Free ATS keyword matcher — CV Prime' }],
  },
};

const faqs = [
  {
    q: 'Is this ATS keyword matcher really free and without login?',
    a: 'Yes. The keyword matcher is completely free with no signup and no credit card. It runs entirely in your browser using on-page logic — your resume and the job description are never uploaded to a server or stored anywhere. You can use it as many times as you like.',
  },
  {
    q: 'How does the keyword match score work?',
    a: 'The tool reads the job description, extracts the most important keywords and skill phrases (filtering out common filler words), and checks how many of them appear in your resume. Your score is the percentage of those key terms found in your resume, shown alongside the exact matched and missing keywords. It is a fast, practical proxy for how an ATS weighs keyword relevance.',
  },
  {
    q: 'What is a good keyword match score?',
    a: 'Aim for 80% or higher for roles you care about. Below roughly 65% your resume is likely missing terms the employer screens for. The fix is to weave the genuinely-true missing keywords into your skills section and experience bullets — naturally, not as a list. Then re-run the check to confirm the improvement before you apply.',
  },
  {
    q: 'How is this different from CV Prime\'s full ATS score?',
    a: 'This free tool checks keyword overlap only. CV Prime\'s full AI ATS score (inside the app) goes further: it scores format and section gaps, rewrites your weak bullets to incorporate the missing keywords without fabricating facts, and re-scores the result — then lets you export a clean PDF. The AI features run on your own OpenRouter key inside your account; this keyword matcher needs none of that and works instantly here.',
  },
  {
    q: 'Will adding the missing keywords get my resume past the ATS?',
    a: 'Keyword match is the single biggest factor, so closing the gap helps a lot — but it is not the whole picture. You also need an ATS-readable format (single column, standard headings, text-based PDF) and quantified, well-written bullets. Use this tool to fix keywords, then check the format with CV Prime\'s ATS-safe templates and full score.',
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
  name: 'CV Prime ATS Keyword Matcher',
  url: 'https://cv-prime.in/tools/ats-keyword-matcher',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Free tool to match your resume against a job description and see your keyword match score and missing keywords. No signup.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Free Tools', item: 'https://cv-prime.in/tools' },
    { '@type': 'ListItem', position: 3, name: 'ATS Keyword Matcher', item: 'https://cv-prime.in/tools/ats-keyword-matcher' },
  ],
};

export default function ATSKeywordMatcherPage(): JSX.Element {
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
            Free ATS keyword matcher
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Paste your resume and a job description. Instantly see your keyword match score and the exact terms you&apos;re missing — no signup, no upload, nothing stored.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <AtsKeywordMatcher />
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

      {/* How it works */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">How the keyword matcher works</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { step: '1', title: 'Paste both', desc: 'Drop your resume text and the full job description into the two boxes.' },
              { step: '2', title: 'Get your score', desc: 'See a 0–100 keyword match plus the matched and missing terms, instantly.' },
              { step: '3', title: 'Close the gaps', desc: 'Add the true missing keywords to your skills and bullets, then re-check.' },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display font-bold text-brand-foreground">{s.step}</div>
                <h3 className="mt-4 font-display text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">ATS keyword matcher — FAQ</h2>
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
              { href: '/tools/resume-strength-analyzer', label: 'Resume strength analyzer' },
              { href: '/tools/cgpa-to-percentage', label: 'CGPA to percentage' },
              { href: '/ats-score-checker', label: 'Full AI ATS score' },
              { href: '/tailor-resume-to-job-description', label: 'Tailor resume to a JD' },
              { href: '/resume-tips/ats-keywords', label: 'ATS keywords guide' },
              { href: '/how-to-pass-ats-screening', label: 'How to pass ATS screening' },
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
          <h2 className="font-display text-3xl font-bold">From keywords to a fully tailored resume</h2>
          <p className="mt-4 text-slate-300">
            The free tool finds the gaps. CV Prime&apos;s AI fills them — rewriting your bullets, scoring format, and exporting a clean PDF.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
            Try the AI version free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
