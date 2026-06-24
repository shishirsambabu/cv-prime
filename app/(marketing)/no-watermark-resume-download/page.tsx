import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Download, Stamp, CheckCircle2, FileDown, ShieldCheck } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'No-Watermark Resume Download — Export a Clean PDF | CV Prime',
  description:
    'Download your resume as a clean PDF with no watermark. CV Prime gives you free clean exports to start, and unlimited watermark-free downloads with one-time ₹999 Pro — no subscription, no logos stamped on your CV.',
  alternates: { canonical: 'https://cv-prime.in/no-watermark-resume-download' },
  keywords: [
    'no watermark resume download',
    'resume without watermark',
    'download resume no watermark',
    'free resume download no watermark',
    'watermark free resume',
    'resume pdf no watermark',
    'remove watermark resume',
    'clean resume download',
    'no logo resume download',
    'resume builder no watermark india',
  ],
  openGraph: {
    title: 'No-Watermark Resume Download — Export a Clean PDF | CV Prime',
    description:
      'Download a clean, watermark-free resume PDF. Free clean exports to start, unlimited with one-time ₹999 Pro. No subscription.',
    url: 'https://cv-prime.in/no-watermark-resume-download',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'No-watermark resume download — CV Prime' }],
  },
};

const whyWatermarks = [
  'Many "free" builders let you create a resume, then stamp a logo or "Made with X" watermark across the PDF unless you subscribe.',
  'A watermark instantly signals to a recruiter that you used a free tool and could not be bothered to clean it up.',
  'Some tools downgrade your template or add their branding to the footer on free exports.',
  'Others lock the download entirely until you start a recurring subscription you then have to cancel.',
];

const howCVPrime = [
  { icon: FileDown, title: '3 clean exports on the free plan', body: 'Your free PDF downloads are clean within the free plan — no logo stamped across your resume. Enough to apply and test the tool before paying anything.' },
  { icon: ShieldCheck, title: 'Unlimited & watermark-free on Pro', body: 'One-time ₹999 Lifetime Pro removes every export limit and watermark, forever — unlimited clean PDFs with no branding on your CV.' },
  { icon: Stamp, title: 'Never your design downgraded', body: 'CV Prime exports the exact template you chose. We do not silently swap to a basic layout or add a footer credit to push you into paying.' },
];

const steps = [
  { step: '01', title: 'Build or upload your resume', desc: 'Start from a template or upload your existing PDF/DOCX. Add your content and let AI tailor it to the job.' },
  { step: '02', title: 'Pick your template and export', desc: 'Choose any ATS-ready template and hit export. You get a clean, text-based PDF — the same design you see on screen.' },
  { step: '03', title: 'Download clean — no watermark', desc: 'Your PDF downloads without a watermark across it. Go unlimited and fully watermark-free with one-time ₹999 Pro.' },
];

const faqs = [
  {
    q: 'How do I download my resume without a watermark?',
    a: 'On CV Prime, sign up free, build or upload your resume, choose an ATS-ready template, and export — your PDF downloads clean, without a watermark stamped across it. The free plan includes 3 clean exports, and a one-time ₹999 Lifetime Pro upgrade gives you unlimited watermark-free downloads forever. Unlike many builders, CV Prime does not brand your resume or hold the clean download hostage behind a recurring subscription.',
  },
  {
    q: 'Why do other resume builders put a watermark on my download?',
    a: 'Most free resume builders monetise by letting you do all the work — building and formatting your resume — and then stamping a watermark or logo on the PDF so you have to pay to remove it. Some downgrade your template or add a branded footer on free exports. It is a deliberate friction point. CV Prime avoids that pattern: your free exports are clean, and the only upgrade is a one-time payment, not a subscription.',
  },
  {
    q: 'Is the no-watermark resume download really free?',
    a: 'The free plan gives you 3 clean PDF exports at no cost, with no credit card required — enough to apply to roles and try the tool. If you need unlimited downloads, the one-time ₹999 Lifetime Pro upgrade removes all export limits and watermarks permanently. There is no monthly fee and nothing to cancel.',
  },
  {
    q: 'Will my resume look the same as the on-screen preview when I download it?',
    a: 'Yes. CV Prime exports the exact template and content you see in the editor as a clean, text-based PDF — no surprise downgrade to a basic layout and no branding added to the footer. Because the export is a real text PDF (not a flattened image), it also stays fully ATS-readable when you upload it to an application.',
  },
  {
    q: 'Can I remove a watermark from a resume I made elsewhere?',
    a: 'Rather than trying to strip a watermark from another tool\'s PDF — which usually degrades the file — the cleaner approach is to rebuild it in CV Prime. Upload your existing resume, CV Prime parses your content automatically, you pick a template, and you export a fresh, clean, watermark-free PDF. You also get ATS scoring and AI tailoring in the same step.',
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
    { '@type': 'ListItem', position: 2, name: 'No-Watermark Resume Download', item: 'https://cv-prime.in/no-watermark-resume-download' },
  ],
};

export default function NoWatermarkResumeDownloadPage(): JSX.Element {
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
            <Download className="h-4 w-4" />
            Clean PDF · No watermark · No subscription
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Download your resume without a watermark
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            No logo stamped across your CV. No branded footer. No download held hostage behind a subscription. CV Prime gives you clean PDF exports to start — and unlimited, watermark-free downloads for a one-time ₹999.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Download a clean resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Why watermarks */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">The watermark trap on most free builders</h2>
            <p className="mt-4 text-slate-500">Why your &ldquo;free&rdquo; resume often comes out branded</p>
          </div>
          <div className="mt-12 space-y-4">
            {whyWatermarks.map((w) => (
              <div key={w} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <Stamp className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                <p className="text-sm leading-7 text-slate-700">{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How CV Prime handles it */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">How CV Prime keeps your resume clean</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {howCVPrime.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-slate-950">{c.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{c.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Download a clean PDF in 3 steps</h2>
          <div className="mt-12 space-y-5">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-5 rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-brand-foreground font-display text-lg font-bold">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-950">{s.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8">
          <div className="flex items-center gap-2 text-emerald-700">
            <CheckCircle2 className="h-5 w-5" />
            <h2 className="font-display text-xl font-bold text-slate-950">What you get either way</h2>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              'A clean, text-based PDF that matches your on-screen design',
              'Fully ATS-readable export — not a flattened image',
              'No branding on your CV and no template downgrade',
              'One-time ₹999 for unlimited, watermark-free downloads',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />{p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">No-watermark download — FAQ</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
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
          <h2 className="font-display text-lg font-bold text-slate-900">Related pages</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/free-resume-builder', label: 'Free resume builder' },
              { href: '/resume-builder-no-subscription', label: 'No-subscription builder' },
              { href: '/lifetime-resume-builder-india', label: 'Lifetime ₹999 plan' },
              { href: '/pricing', label: 'Pricing' },
              { href: '/templates', label: 'All templates' },
              { href: '/ats-resume-template', label: 'ATS resume template' },
              { href: '/resume-generator', label: 'Resume generator' },
              { href: '/resume-maker', label: 'Resume maker' },
              { href: '/ai-resume-builder', label: 'AI resume builder' },
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Your resume, clean — the way it should be</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Build it, tailor it, and download a clean PDF with no watermark. Free to start, ₹999 once for unlimited.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Download a clean resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Download a clean resume" message="No watermark on your CV — clean PDF exports, free to start" />
    </main>
  );
}
