import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Lock, Zap } from 'lucide-react';
import { CoverLetterChecker } from '@/components/tools/CoverLetterChecker';

export const metadata: Metadata = {
  title: 'Free Cover Letter Checker — Score Your Cover Letter Instantly (No Login) | CV Prime',
  description:
    'Free cover letter checker that scores your letter 0–100 on length, opening, structure, quantified proof, call to action, and clichés — instantly, in your browser, no signup or upload.',
  alternates: { canonical: 'https://cv-prime.in/tools/cover-letter-checker' },
  keywords: [
    'cover letter checker',
    'free cover letter checker',
    'cover letter analyzer',
    'check my cover letter',
    'cover letter score',
    'cover letter review free',
    'cover letter grader',
    'cover letter checker india',
  ],
  openGraph: {
    title: 'Free Cover Letter Checker — Score Your Cover Letter Instantly (No Login)',
    description: 'Score your cover letter 0–100 on opening, structure, quantified proof, call to action, and clichés. Free, no signup.',
    url: 'https://cv-prime.in/tools/cover-letter-checker',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Free cover letter checker — CV Prime' }],
  },
};

const faqs = [
  { q: 'What does the cover letter checker look for?', a: 'It scores six things hiring managers notice: an appropriate length (200–400 words), a specific opening (not "To whom it may concern" or "I am writing to apply"), clear paragraph structure, at least one quantified achievement, a closing call to action, and the absence of tired clichés. You get a 0–100 score with a fix for each.' },
  { q: 'How long should a cover letter be?', a: 'Aim for 200–400 words across 3–4 short paragraphs: a specific hook, your most relevant quantified achievement, why this company, and a clear closing call to action. Anything under ~180 words tends to feel thin; over ~450 words rarely gets read in full.' },
  { q: 'Is the cover letter checker free and private?', a: 'Yes — free, no signup, and it runs entirely in your browser. Nothing you paste is uploaded or stored.' },
  { q: 'Can CV Prime write a cover letter for me?', a: 'Yes. Inside your account, CV Prime\'s AI generates a tailored cover letter from your resume and a job description in about 60 seconds — a specific hook, quantified proof, a why-this-company paragraph, and a clear close. It runs on your own OpenRouter key. This free checker is the no-login way to grade a letter you already have.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
const appSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'CV Prime Cover Letter Checker', url: 'https://cv-prime.in/tools/cover-letter-checker', applicationCategory: 'BusinessApplication', operatingSystem: 'Web', description: 'Free tool that scores your cover letter 0–100 on opening, structure, proof, call to action, and clichés. No signup.', offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' } };
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
  { '@type': 'ListItem', position: 2, name: 'Free Tools', item: 'https://cv-prime.in/tools' },
  { '@type': 'ListItem', position: 3, name: 'Cover Letter Checker', item: 'https://cv-prime.in/tools/cover-letter-checker' },
] };

export default function CoverLetterCheckerPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <Zap className="h-4 w-4" /> Free · No login · Runs in your browser
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Free cover letter checker</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Paste your cover letter for an instant 0–100 score on opening, structure, quantified proof, call to action, and clichés — with a specific fix for each.</p>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="mx-auto max-w-4xl"><CoverLetterChecker /></div>
      </section>

      <section className="px-5 pb-8">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-10 gap-y-3 text-center text-sm text-slate-400">
          <span className="inline-flex items-center gap-2"><Lock className="h-4 w-4 text-brand" /> Nothing uploaded or stored</span>
          <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-brand" /> Instant, unlimited use</span>
        </div>
      </section>

      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">Cover letter checker — FAQ</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white/[0.04] p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-white">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-white">More free tools & guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/tools', label: 'All free tools' },
              { href: '/tools/resume-strength-analyzer', label: 'Resume strength analyzer' },
              { href: '/cover-letter-generator', label: 'AI cover letter generator' },
              { href: '/cover-letter-examples', label: 'Cover letter examples by role' },
              { href: '/resume-tips/cover-letter-tips', label: 'Cover letter tips' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-brand hover:text-brand">{l.label} →</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">Skip the blank page — generate one with AI</h2>
          <p className="mt-4 text-slate-300">CV Prime writes a tailored cover letter from your resume + the job description in ~60 seconds. Free to start.</p>
          <Link href="/signup?next=/cover-letter" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">Generate with AI <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}
