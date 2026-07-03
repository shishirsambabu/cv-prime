import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Lock, Zap } from 'lucide-react';
import { ResumeBulletAnalyzer } from '@/components/tools/ResumeBulletAnalyzer';

export const metadata: Metadata = {
  title: 'Free Resume Bullet Point Analyzer — Check Every Bullet (No Login) | CV Prime',
  description:
    'Free tool that scores each resume bullet on four things recruiters check: action verb, quantified metric, length, and filler. Paste your bullets and get instant per-line feedback — no signup, runs in your browser.',
  alternates: { canonical: 'https://cv-prime.in/tools/resume-bullet-analyzer' },
  keywords: [
    'resume bullet point analyzer',
    'resume bullet checker',
    'check resume bullet points',
    'resume bullet point examples tool',
    'improve resume bullets free',
    'action verb checker resume',
    'resume bullet strength',
    'bullet point analyzer free',
  ],
  openGraph: {
    title: 'Free Resume Bullet Point Analyzer — Check Every Bullet (No Login)',
    description: 'Score each resume bullet on action verb, metric, length, and filler. Instant per-line feedback, no signup.',
    url: 'https://cv-prime.in/tools/resume-bullet-analyzer',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Free resume bullet point analyzer — CV Prime' }],
  },
};

const faqs = [
  { q: 'What makes a strong resume bullet point?', a: 'A strong bullet starts with a strong action verb, describes what you actually did, and ends with a quantified outcome — for example "Cut API latency 40% by migrating to GraphQL". It should be one tight line (roughly 6–34 words) and avoid weak openers like "responsible for" or "worked on". This tool checks each of your bullets against exactly those four criteria.' },
  { q: 'Is the bullet analyzer free and private?', a: 'Yes. It is free with no signup and runs entirely in your browser — nothing you paste is uploaded or stored. Analyse as many bullets as you like.' },
  { q: 'How is each bullet scored?', a: 'Each bullet gets a 0–4 score across four checks: starts with a strong action verb, includes a number or metric, sits in a good length range, and avoids filler openers. You get a per-bullet breakdown with a specific suggestion for anything that fails, plus an average strength score.' },
  { q: 'Can it rewrite my bullets for me?', a: 'This free tool diagnoses — it tells you exactly which bullets are weak and why. To rewrite them automatically into strong, quantified lines, use CV Prime\'s AI resume rewriter inside your account (it runs on your own OpenRouter key and never fabricates facts).' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
const appSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'CV Prime Resume Bullet Point Analyzer', url: 'https://cv-prime.in/tools/resume-bullet-analyzer', applicationCategory: 'BusinessApplication', operatingSystem: 'Web', description: 'Free tool that scores each resume bullet on action verb, metric, length, and filler. No signup.', offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' } };
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
  { '@type': 'ListItem', position: 2, name: 'Free Tools', item: 'https://cv-prime.in/tools' },
  { '@type': 'ListItem', position: 3, name: 'Resume Bullet Analyzer', item: 'https://cv-prime.in/tools/resume-bullet-analyzer' },
] };

export default function ResumeBulletAnalyzerPage(): JSX.Element {
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
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Free resume bullet point analyzer</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Paste your bullets and get instant per-line feedback on the four things recruiters and ATS reward: action verb, quantified metric, length, and no filler.</p>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="mx-auto max-w-4xl"><ResumeBulletAnalyzer /></div>
      </section>

      <section className="px-5 pb-8">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-10 gap-y-3 text-center text-sm text-slate-400">
          <span className="inline-flex items-center gap-2"><Lock className="h-4 w-4 text-brand" /> Nothing uploaded or stored</span>
          <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-brand" /> Instant, unlimited use</span>
        </div>
      </section>

      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">Bullet analyzer — FAQ</h2>
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
              { href: '/tools/ats-keyword-matcher', label: 'ATS keyword matcher' },
              { href: '/ai-resume-rewriter', label: 'AI resume rewriter' },
              { href: '/resume-tips/resume-bullet-points', label: 'How to write bullet points' },
              { href: '/resume-tips/action-verbs', label: 'Resume action verbs' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-brand hover:text-brand">{l.label} →</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">Weak bullets? Let AI fix them.</h2>
          <p className="mt-4 text-slate-300">CV Prime rewrites flagged bullets into strong, quantified, action-led lines — without inventing facts. Free to start.</p>
          <Link href="/signup?next=/ai-cv" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">Rewrite my bullets with AI <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}
