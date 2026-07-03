import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Zap, ShieldCheck, Calculator } from 'lucide-react';
import { CgpaConverter } from '@/components/tools/CgpaConverter';

export const metadata: Metadata = {
  title: 'CGPA to Percentage Calculator (India) — Free, Instant, No Login | CV Prime',
  description:
    'Convert CGPA to percentage (and percentage to CGPA) instantly with the free India calculator. Supports CBSE (× 9.5), VTU, and custom university formulas — runs in your browser, no signup.',
  alternates: { canonical: 'https://cv-prime.in/tools/cgpa-to-percentage' },
  keywords: [
    'cgpa to percentage',
    'cgpa to percentage calculator',
    'percentage to cgpa',
    'cgpa to percentage calculator india',
    '9.5 cgpa to percentage',
    'how to convert cgpa to percentage',
    'cbse cgpa to percentage',
    'vtu cgpa to percentage',
    'cgpa calculator',
    'cgpa percentage converter',
  ],
  openGraph: {
    title: 'CGPA to Percentage Calculator (India) — Free, Instant, No Login',
    description:
      'Convert CGPA to percentage and back instantly. CBSE (× 9.5), VTU, and custom formulas. Free, no signup, runs in your browser.',
    url: 'https://cv-prime.in/tools/cgpa-to-percentage',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CGPA to percentage calculator — CV Prime' }],
  },
};

const faqs = [
  {
    q: 'How do I convert CGPA to percentage?',
    a: 'The most common rule in India is Percentage = CGPA × 9.5 (used by CBSE). For example, a CGPA of 8.2 equals 8.2 × 9.5 = 77.9%. Some universities use different formulas — VTU uses Percentage = (CGPA − 0.75) × 10 — so always check your university\'s official rule. This calculator supports CBSE, VTU, and a custom multiplier so you can match whatever your institution uses.',
  },
  {
    q: 'What is 9.5 CGPA in percentage?',
    a: 'Using the standard CBSE formula (CGPA × 9.5), a 9.5 CGPA equals 90.25%. Using a custom multiplier or a different university formula will give a slightly different figure — enter your CGPA above and pick the right formula to get the exact value for your case.',
  },
  {
    q: 'How do I convert percentage to CGPA?',
    a: 'Reverse the formula. With the CBSE rule, CGPA = Percentage ÷ 9.5 — so 77.9% ÷ 9.5 = 8.2 CGPA. Switch this tool to "% → CGPA" mode, enter your percentage, and it computes the CGPA for the formula you select.',
  },
  {
    q: 'Which should I put on my resume — CGPA or percentage?',
    a: 'It depends on the employer. Many Indian recruiters and ATS filters screen on percentage, while some campus and university processes use CGPA. The safest approach for freshers is to list whatever your target employer asks for, and when unsure, include both (e.g., "8.2 CGPA / 77.9%"). Only include it if it strengthens your application — typically a CGPA of 7.5+ or roughly 70%+.',
  },
  {
    q: 'Is this CGPA calculator free and private?',
    a: 'Yes. It is completely free with no signup, and it runs entirely in your browser — nothing you type is uploaded or stored. Use it as often as you like.',
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
  name: 'CV Prime CGPA to Percentage Calculator',
  url: 'https://cv-prime.in/tools/cgpa-to-percentage',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  description: 'Free calculator to convert CGPA to percentage and percentage to CGPA using CBSE, VTU, or custom formulas. No signup.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Free Tools', item: 'https://cv-prime.in/tools' },
    { '@type': 'ListItem', position: 3, name: 'CGPA to Percentage', item: 'https://cv-prime.in/tools/cgpa-to-percentage' },
  ],
};

export default function CgpaToPercentagePage(): JSX.Element {
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
            <Calculator className="h-4 w-4" />
            Free · Instant · No login
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            CGPA to percentage calculator
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Convert CGPA to percentage — and percentage to CGPA — instantly. Supports the CBSE (× 9.5), VTU, and custom university formulas. Then put the right number on an ATS-ready resume.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="px-5 py-12">
        <div className="mx-auto max-w-3xl">
          <CgpaConverter />
        </div>
      </section>

      {/* Trust row */}
      <section className="px-5 pb-8">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-10 gap-y-3 text-center text-sm text-slate-400">
          <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-brand" /> Instant, unlimited use</span>
          <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand" /> No signup, nothing stored</span>
        </div>
      </section>

      {/* Quick reference table */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">CGPA to percentage — quick reference (× 9.5)</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03] text-left">
                  <th className="p-3 font-semibold text-slate-300">CGPA</th>
                  <th className="p-3 font-semibold text-slate-300">Percentage (CBSE)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  ['10', '95.0%'], ['9.5', '90.25%'], ['9.0', '85.5%'], ['8.5', '80.75%'],
                  ['8.0', '76.0%'], ['7.5', '71.25%'], ['7.0', '66.5%'], ['6.5', '61.75%'], ['6.0', '57.0%'],
                ].map(([c, p]) => (
                  <tr key={c}>
                    <td className="p-3 font-semibold text-slate-200">{c}</td>
                    <td className="p-3 text-slate-300">{p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-center text-xs text-slate-400">Based on Percentage = CGPA × 9.5. Use the calculator above for VTU or custom formulas.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">CGPA to percentage — FAQ</h2>
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
              { href: '/tools/resume-strength-analyzer', label: 'Resume strength analyzer' },
              { href: '/fresher-resume', label: 'Fresher resume guide' },
              { href: '/engineering-fresher-resume', label: 'Engineering fresher resume' },
              { href: '/resume-tips/education-section', label: 'Resume education section' },
              { href: '/campus-placement-resume', label: 'Campus placement resume' },
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
          <h2 className="font-display text-3xl font-bold">Got your number? Now build the resume.</h2>
          <p className="mt-4 text-slate-300">
            CV Prime builds an ATS-ready fresher resume — projects, skills, and your CGPA/percentage in the right place. Free to start.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
            Build my resume free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
