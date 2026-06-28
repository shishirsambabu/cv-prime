import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Lock, Zap } from 'lucide-react';
import { LinkedInCounter } from '@/components/tools/LinkedInCounter';

export const metadata: Metadata = {
  title: 'LinkedIn Character Counter — Headline, About & Post Limits (Free) | CV Prime',
  description:
    'Free LinkedIn character counter for headline (220), about/summary (2,600), post (3,000), and more. Live count, characters remaining, and over-limit warnings — instant, no signup, runs in your browser.',
  alternates: { canonical: 'https://cv-prime.in/tools/linkedin-character-counter' },
  keywords: [
    'linkedin character counter',
    'linkedin headline character limit',
    'linkedin about character limit',
    'linkedin post character limit',
    'linkedin summary character count',
    'linkedin character count tool',
    'linkedin headline length',
    'character counter linkedin free',
  ],
  openGraph: {
    title: 'LinkedIn Character Counter — Headline, About & Post Limits (Free)',
    description: 'Live character counter for LinkedIn headline (220), about (2,600), post (3,000) and more. Free, no signup.',
    url: 'https://cv-prime.in/tools/linkedin-character-counter',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'LinkedIn character counter — CV Prime' }],
  },
};

const faqs = [
  { q: 'What is the LinkedIn headline character limit?', a: 'The LinkedIn headline limit is 220 characters. Because the headline is one of the most heavily searched fields on LinkedIn, use those characters well: lead with your role and specialisation, then a credential or proof. This counter shows your live character count and how many you have left.' },
  { q: 'What is the LinkedIn About / summary character limit?', a: 'The LinkedIn About (summary) section allows up to 2,600 characters. Only the first ~2 lines are visible before the "see more" cut-off, so front-load your strongest hook. Switch this tool to the "About / Summary" tab to count against the 2,600 limit.' },
  { q: 'What is the LinkedIn post character limit?', a: 'A LinkedIn post allows up to 3,000 characters, but only roughly the first 140–210 characters show in the feed before "see more". Put your hook in those opening characters. Use the "Post" tab here to track your count.' },
  { q: 'Is this LinkedIn counter free and private?', a: 'Yes — completely free, no signup, and it runs entirely in your browser. Nothing you type is uploaded or stored. The limits shown are LinkedIn\'s standard maximums and may vary slightly over time.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
const appSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'CV Prime LinkedIn Character Counter', url: 'https://cv-prime.in/tools/linkedin-character-counter', applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', description: 'Free live character counter for LinkedIn headline, about, post, and more, with limits and over-limit warnings. No signup.', offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' } };
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
  { '@type': 'ListItem', position: 2, name: 'Free Tools', item: 'https://cv-prime.in/tools' },
  { '@type': 'ListItem', position: 3, name: 'LinkedIn Character Counter', item: 'https://cv-prime.in/tools/linkedin-character-counter' },
] };

export default function LinkedInCharacterCounterPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <Zap className="h-4 w-4" /> Free · No login · Live count
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">LinkedIn character counter</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Count your LinkedIn headline, about, post, and more against LinkedIn&apos;s real limits — with live count, characters remaining, and over-limit warnings.</p>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="mx-auto max-w-3xl"><LinkedInCounter /></div>
      </section>

      <section className="px-5 pb-8">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-10 gap-y-3 text-center text-sm text-slate-400">
          <span className="inline-flex items-center gap-2"><Lock className="h-4 w-4 text-brand" /> Nothing uploaded or stored</span>
          <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-brand" /> Instant, unlimited use</span>
        </div>
      </section>

      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">LinkedIn limits — FAQ</h2>
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
              { href: '/linkedin-headline', label: 'LinkedIn headline examples' },
              { href: '/linkedin-profile-optimizer', label: 'LinkedIn profile optimizer' },
              { href: '/tools/resume-strength-analyzer', label: 'Resume strength analyzer' },
              { href: '/tools/ats-keyword-matcher', label: 'ATS keyword matcher' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-brand hover:text-brand">{l.label} →</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">A great profile deserves a great resume</h2>
          <p className="mt-4 text-slate-300">Build an ATS-ready resume that matches your LinkedIn — tailored to each job with CV Prime. Free to start.</p>
          <Link href="/signup?next=/ai-cv" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">Build my resume free <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}
