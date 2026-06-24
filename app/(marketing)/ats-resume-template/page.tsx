import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, FileCheck2, CheckCircle2, XCircle, Download, ScanLine } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'ATS Resume Template (Free) — Parser-Safe Templates That Pass | CV Prime',
  description:
    'Free ATS resume templates that parse cleanly and pass Applicant Tracking Systems. Pick a single-column, recruiter-ready template, fill it with AI, score it against any JD, and export — no watermark on Pro.',
  alternates: { canonical: 'https://cv-prime.in/ats-resume-template' },
  keywords: [
    'ats resume template free',
    'ats resume template',
    'free ats resume template',
    'ats friendly resume template',
    'ats template download',
    'ats cv template',
    'applicant tracking system template',
    'parser friendly resume template',
    'ats compliant resume template',
    'ats resume template india',
  ],
  openGraph: {
    title: 'ATS Resume Template (Free) — Parser-Safe Templates That Pass | CV Prime',
    description:
      'Free, parser-safe ATS resume templates. Fill with AI, score against any JD, export clean. Built for India.',
    url: 'https://cv-prime.in/ats-resume-template',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ATS resume template free — CV Prime' }],
  },
};

const templates = [
  { name: 'Classic', tier: 'Free', audience: 'Consulting, finance, operations', why: 'A formal single-column serif layout with conservative spacing — the safest, most universally parseable choice for heavily screened roles.' },
  { name: 'Modern', tier: 'Free', audience: 'Product, growth, marketing', why: 'A crisp, contemporary layout that reads cleanly to both the ATS and the recruiter, without looking loud.' },
  { name: 'Minimal', tier: 'Free', audience: 'Analyst, manager, generalist', why: 'A quiet, content-first design that keeps the parser focused on your experience and keywords.' },
  { name: 'Technical', tier: 'Pro', audience: 'Engineering, data, product', why: 'A dense, skills-first layout that surfaces the technical keywords ATS systems screen for in tech roles.' },
];

const atsSafe = [
  'Single, linear column the parser reads top-to-bottom',
  'Standard section headings (Skills, Experience, Education)',
  'Selectable text — no images, icons, or charts',
  'Standard fonts at readable sizes',
  'Consistent date formatting for experience calculation',
  'Exports as a text-based PDF, not a flattened image',
];

const notAtsSafe = [
  'Multi-column and sidebar layouts that scramble on parse',
  'Tables and text boxes the ATS drops or reorders',
  'Contact details hidden in headers or footers',
  'Graphic, icon-heavy "designer" templates from generic tools',
  'Decorative fonts that render as garbage characters',
  'Scanned or image-based resume files',
];

const faqs = [
  {
    q: 'What is an ATS resume template?',
    a: 'An ATS resume template is a layout designed so Applicant Tracking System software can read every word correctly. In practice that means a single-column structure, standard section headings, selectable text with no images or tables, standard fonts, and consistent date formatting. All of CV Prime\'s templates are built to be ATS-readable, so you start from a parser-safe foundation instead of risking a beautiful template that silently fails the scan.',
  },
  {
    q: 'Are CV Prime\'s ATS templates really free?',
    a: 'Yes. The Classic, Modern, and Minimal templates are free, and the free plan includes 3 clean PDF exports along with full ATS scoring and AI bullet rewrites — no credit card required. The Pro templates (including Technical) and unlimited, watermark-free exports unlock with a one-time ₹999 Lifetime Pro upgrade. There is no subscription.',
  },
  {
    q: 'Why do most free resume templates fail the ATS?',
    a: 'Most free templates floating around — especially graphic, multi-column ones from generic design tools — prioritise looks over parseability. Their columns, tables, text boxes, icons, and decorative fonts confuse the ATS parser, which drops or reorders your content. The resume looks great to you but reaches the recruiter as a scrambled, low-ranked mess. An ATS template avoids all of those elements by design.',
  },
  {
    q: 'Can I make an ATS template stand out and still pass?',
    a: 'Yes. ATS-safe does not mean boring. CV Prime\'s templates use clean typography, smart spacing, and clear hierarchy to look professional while staying fully parseable. The way to truly stand out within an ATS template is content — quantified bullets, strong action verbs, and keywords matched to the job description — which is exactly what CV Prime\'s AI helps you build.',
  },
  {
    q: 'How do I download an ATS resume template without a watermark?',
    a: 'Sign up free, pick an ATS template, fill it with your content (the AI can rewrite and tailor it), and export. The free plan gives you 3 clean PDF exports; the one-time ₹999 Pro upgrade gives unlimited exports with no watermark and unlocks all premium templates. Either way you get a real, editable, ATS-ready resume — not a static file you have to reformat.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'ATS Resume Template', item: 'https://cv-prime.in/ats-resume-template' },
  ],
};

export default function ATSResumeTemplatePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <FileCheck2 className="h-4 w-4" />
            Free · Parser-safe · Recruiter-ready
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Free ATS resume templates that actually pass the scan
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Beautiful templates that fail the ATS are worse than plain ones that pass. Every CV Prime template is built single-column and parser-safe — so the software reads every word. Pick one, fill it with AI, score it against your JD, and export clean.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Use a free ATS template
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/templates" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              Browse the gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Recommended templates */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">ATS-ready templates to start from</h2>
            <p className="mt-4 text-slate-500">Free to start; Pro templates unlock with one-time ₹999 Lifetime</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {templates.map((t) => (
              <div key={t.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold text-slate-950">{t.name}</h3>
                  <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${t.tier === 'Pro' ? 'bg-slate-950 text-white' : 'bg-cyan-50 text-cyan-800'}`}>{t.tier}</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-700">{t.audience}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{t.why}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/templates" className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">
              See all 8 ATS-ready templates <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ATS-safe vs not */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">What makes a template ATS-safe</h2>
            <p className="mt-4 text-slate-500">The difference between a template that passes and one that gets you filtered</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-white p-6">
              <div className="flex items-center gap-2 text-emerald-700">
                <CheckCircle2 className="h-5 w-5" />
                <h3 className="font-display text-lg font-bold">ATS-safe</h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {atsSafe.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />{d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-2 text-red-600">
                <XCircle className="h-5 w-5" />
                <h3 className="font-display text-lg font-bold">ATS-breaking</h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {notAtsSafe.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />{d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold">From template to tailored, scored resume</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { icon: FileCheck2, title: 'Pick a template', desc: 'Start from any ATS-ready template — all are parser-safe by design.' },
              { icon: ScanLine, title: 'Fill + score', desc: 'Add your content, let AI tailor it to the JD, and check your ATS score.' },
              { icon: Download, title: 'Export clean', desc: 'Download a text-based PDF — 3 free, or unlimited and watermark-free on Pro.' },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-slate-950">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">ATS resume template — FAQ</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-slate-950">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-slate-900">Related templates & guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/templates', label: 'All templates' },
              { href: '/minimal-ats-resume-template', label: 'Minimal ATS template' },
              { href: '/modern-resume-template-india', label: 'Modern resume template' },
              { href: '/professional-cv-template-india', label: 'Professional CV template' },
              { href: '/resume-template-for-engineers', label: 'Resume template for engineers' },
              { href: '/ats-resume-format-2026', label: 'ATS resume format 2026' },
              { href: '/ats-friendly-cv', label: 'ATS-friendly CV' },
              { href: '/no-watermark-resume-download', label: 'No-watermark download' },
              { href: '/ats-score-checker', label: 'Free ATS score checker' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Start from a template that passes</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Pick an ATS-ready template, fill it with AI, and export a clean PDF. Free to start — ₹999 one-time for unlimited.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Use a free ATS template
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Use a free ATS template" message="Parser-safe ATS templates — fill with AI, export clean, free" />
    </main>
  );
}
