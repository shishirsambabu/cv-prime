import Link from 'next/link';
import { StickyCTA } from '@/components/marketing/StickyCTA';
import type { Metadata } from 'next';
import { ArrowRight, BrainCircuit, Zap, Target, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI CV Builder — Tailor Your Resume to Any Job with AI | CV Prime',
  description:
    'Build and tailor your CV with AI in seconds. Paste a job description, upload your CV, and let AI rewrite bullets, fix ATS gaps, and score your match. Free to try.',
  alternates: {
    canonical: 'https://cv-prime.in/ai-cv-builder',
  },
  keywords: [
    'ai cv builder',
    'ai resume builder',
    'ai cv maker',
    'artificial intelligence resume builder',
    'ai powered cv builder india',
    'chatgpt cv builder',
    'ai resume writer',
    'automated cv builder',
  ],
  openGraph: {
    title: 'AI CV Builder — CV Prime',
    description:
      'Let AI tailor your CV to any job description. Score your ATS match, rewrite weak bullets, and export a recruiter-ready PDF.',
    url: 'https://cv-prime.in/ai-cv-builder',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI CV Builder — CV Prime' }],
  },
};

const aiFeatures = [
  {
    icon: Target,
    title: 'Job-description matching',
    body: 'Paste any job description and our AI identifies the exact keywords and phrases recruiters are screening for — then inserts them naturally into your CV.',
  },
  {
    icon: BrainCircuit,
    title: 'Bullet rewriting',
    body: 'Generic duties become sharp, outcome-driven achievements. The AI uses the STAR method to turn "Managed a team" into quantified, evidence-backed impact.',
  },
  {
    icon: TrendingUp,
    title: 'ATS score prediction',
    body: 'Get a live score from 0–100 showing how well your CV will pass automated screening. See exactly which gaps to close before applying.',
  },
  {
    icon: Zap,
    title: 'Instant tailoring',
    body: 'One click to generate a fully tailored CV for a new role. No copy-pasting, no manual rewriting — the AI handles the entire transformation.',
  },
];

const comparison = [
  { feature: 'Tailors CV to job description', cvprime: true, canva: false, zety: false },
  { feature: 'ATS keyword gap analysis', cvprime: true, canva: false, zety: true },
  { feature: 'AI bullet rewriting', cvprime: true, canva: false, zety: false },
  { feature: 'ATS score with breakdown', cvprime: true, canva: false, zety: false },
  { feature: 'Free PDF export', cvprime: true, canva: true, zety: false },
  { feature: 'India pricing', cvprime: true, canva: true, zety: false },
];

const faqs = [
  {
    q: 'How does the AI CV builder work?',
    a: 'You paste the job description and upload your existing CV. Our AI (powered by OpenRouter / your choice of model) parses both, identifies keyword gaps, rewrites your experience bullets to be stronger and more relevant, and produces a tailored CV ready to download as PDF.',
  },
  {
    q: 'Do I need an AI API key?',
    a: 'Yes — you bring your own OpenRouter key. This means you control which AI model you use and pay only for what you consume (often fractions of a rupee per CV). We never train on your CV data.',
  },
  {
    q: 'Is the AI CV builder free?',
    a: 'The builder itself is free. You need an OpenRouter key (free to sign up, pay-per-use) and a CV Prime account. The first 3 PDF downloads are free; unlimited downloads need a Pro plan at ₹999 one-time.',
  },
  {
    q: 'Will the AI make up information?',
    a: 'No. Our AI operates strictly within the content you provide. It rephrases and restructures your existing experience — it does not invent jobs, degrees, or skills.',
  },
  {
    q: 'How accurate is the ATS score?',
    a: 'Very accurate for keyword-based ATS systems (which most Indian companies use). The score reflects keyword density, section completeness, and formatting compliance. Note: AI scoring may vary by ±5 points between runs.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does the AI CV builder work?',
      acceptedAnswer: { '@type': 'Answer', text: 'You paste the job description and upload your existing CV. Our AI parses both, identifies keyword gaps, rewrites your experience bullets to be stronger and more relevant, and produces a tailored CV ready to download as PDF.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need an AI API key?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — you bring your own OpenRouter key. This means you control which AI model you use and pay only for what you consume (often fractions of a rupee per CV). We never train on your CV data.' },
    },
    {
      '@type': 'Question',
      name: 'Is the AI CV builder free?',
      acceptedAnswer: { '@type': 'Answer', text: 'The builder itself is free. You need an OpenRouter key (free to sign up, pay-per-use) and a CV Prime account. The first 3 PDF downloads are free; unlimited downloads need a Pro plan at ₹999 one-time.' },
    },
    {
      '@type': 'Question',
      name: 'Will the AI make up information?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Our AI operates strictly within the content you provide. It rephrases and restructures your existing experience — it does not invent jobs, degrees, or skills.' },
    },
    {
      '@type': 'Question',
      name: 'How accurate is the ATS score?',
      acceptedAnswer: { '@type': 'Answer', text: 'Very accurate for keyword-based ATS systems (which most Indian companies use). The score reflects keyword density, section completeness, and formatting compliance. Note: AI scoring may vary by ±5 points between runs.' },
    },
  ],
};

export default function AICVBuilderPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-5 py-20 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <BrainCircuit className="h-4 w-4" />
            Powered by AI
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The AI CV builder that tailors your resume to every job
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Paste a job description. Upload your CV. In seconds, AI rewrites your experience bullets, fills keyword gaps, scores your ATS match, and produces a tailored PDF ready to send.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Try AI CV builder free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/ai-cv"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              Already have an account?
            </Link>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              What the AI does for your CV
            </h2>
            <p className="mt-4 text-slate-400">Four powerful AI capabilities working together</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {aiFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-[1.5rem] border border-white/10 p-7 transition hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{f.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">
            CV Prime vs other CV builders
          </h2>
          <p className="mt-4 text-center text-slate-400">See why AI makes the difference</p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-left font-semibold text-slate-300">Feature</th>
                  <th className="p-4 text-center font-bold text-cyan-300">CV Prime</th>
                  <th className="p-4 text-center font-semibold text-slate-400">Canva</th>
                  <th className="p-4 text-center font-semibold text-slate-400">Zety</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-slate-50/50' : ''}>
                    <td className="p-4 text-slate-300">{row.feature}</td>
                    <td className="p-4 text-center text-lg">{row.cvprime ? '✅' : '❌'}</td>
                    <td className="p-4 text-center text-lg">{row.canva ? '✅' : '❌'}</td>
                    <td className="p-4 text-center text-lg">{row.zety ? '✅' : '❌'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">
            AI CV builder — common questions
          </h2>
          <div className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 p-6">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            Looking for the full AI CV maker walkthrough — writing, scoring, and formatting in one flow?{' '}
            <Link href="/ai-cv-maker" className="text-cyan-300 underline underline-offset-4">
              See the AI CV maker
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Stop sending the same CV for every job
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Let AI tailor your CV to each role in minutes. Free to try — no design skills, no writing experience needed.
          </p>
          <Link
            href="/signup?next=/ai-cv"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Build my AI CV free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'AI CV Builder — CV Prime',
            description: 'AI-powered CV builder that tailors your resume to any job description with ATS scoring and bullet rewriting.',
            url: 'https://cv-prime.in/ai-cv-builder',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                { '@type': 'ListItem', position: 2, name: 'AI CV Builder', item: 'https://cv-prime.in/ai-cv-builder' },
              ],
            },
          }),
        }}
      />
      <StickyCTA />
    </main>
  );
}
