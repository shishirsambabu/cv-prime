import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, FileText, Zap, Download, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Online CV Maker — Create a Professional CV in Minutes | CV Prime',
  description:
    'The best free online CV maker in India. Build a professional CV with AI assistance, ATS-friendly templates, and instant PDF download. No design skills needed. Start free today.',
  alternates: {
    canonical: 'https://cv-prime.in/online-cv-maker',
  },
  keywords: [
    'online cv maker',
    'free cv maker online',
    'cv maker india',
    'create cv online free',
    'professional cv maker',
    'cv builder online',
    'make cv online',
    'free resume maker online',
  ],
  openGraph: {
    title: 'Free Online CV Maker — CV Prime',
    description:
      'Build a job-winning CV online in minutes. AI-powered, ATS-optimised, free to start.',
    url: 'https://cv-prime.in/online-cv-maker',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Online CV Maker — CV Prime' }],
  },
};

const steps = [
  {
    num: '01',
    title: 'Fill in your details',
    body: 'Enter your work history, education, and skills. Our guided form makes it fast and error-free.',
    icon: FileText,
  },
  {
    num: '02',
    title: 'Pick a template',
    body: 'Choose from 8 ATS-optimised templates — classic, modern, executive, technical, and more.',
    icon: Star,
  },
  {
    num: '03',
    title: 'Let AI improve it',
    body: 'Paste the job description and our AI rewrites your bullets to match keywords and boost your ATS score.',
    icon: Zap,
  },
  {
    num: '04',
    title: 'Download your PDF',
    body: 'Export a pixel-perfect, recruiter-ready PDF instantly. No watermarks on the free plan.',
    icon: Download,
  },
];

const features = [
  'No sign-up required to preview templates',
  'ATS-friendly formatting on every template',
  'AI keyword gap analysis vs job description',
  'Instant PDF export — no waiting',
  'Save and edit multiple CVs',
  '8 professional templates included',
  'Supports all industries and experience levels',
  'Works on mobile, tablet, and desktop',
];

const faqs = [
  {
    q: 'Is this online CV maker really free?',
    a: 'Yes. You can build a complete CV and download up to 3 PDFs for free. A Pro plan (₹249/month) removes the download limit and unlocks unlimited AI tailoring.',
  },
  {
    q: 'How long does it take to make a CV online?',
    a: 'Most users complete their first CV in under 15 minutes. If you already have your work history ready, it can be as fast as 5 minutes.',
  },
  {
    q: 'Will my CV pass ATS software?',
    a: 'Every template is built for ATS compatibility — clean HTML, proper heading hierarchy, no tables or text boxes that confuse parsers. Our AI also checks keyword density against your target role.',
  },
  {
    q: 'Can I use this CV maker for jobs in India?',
    a: 'Absolutely. CV Prime is built for the Indian job market. It understands Indian date formats, handles Indian phone numbers, and produces CVs suited to Indian HR expectations.',
  },
  {
    q: 'Can I create multiple CVs for different jobs?',
    a: 'Yes. Your dashboard stores all your CVs. You can duplicate an existing CV and tailor it for each role — the AI Job CV feature automates this in minutes.',
  },
];

export default function OnlineCVMakerPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            Free online CV maker
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Create a professional CV online — free, fast, ATS-ready
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            India&apos;s smartest online CV maker. Fill in your details, pick a template, let AI improve your bullets, and download a recruiter-ready PDF in minutes.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-8 py-3.5 text-base font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Make my CV free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              See templates
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">No credit card required · 3 free PDF downloads</p>
        </div>
      </section>

      {/* How it works */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              How our online CV maker works
            </h2>
            <p className="mt-4 text-slate-500">Four steps from blank page to PDF</p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative rounded-[1.5rem] border border-slate-100 bg-slate-50 p-6">
                  <span className="font-display text-5xl font-bold text-slate-100">{step.num}</span>
                  <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{step.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Everything you need in a free online CV maker
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                CV Prime combines a beautiful template editor with AI intelligence. Every feature is designed to help you get more interviews — not just look good on screen.
              </p>
              <ul className="mt-8 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                    <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3 text-sm font-bold text-white hover:bg-slate-800"
              >
                Start building free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-[2rem] bg-gradient-to-br from-cyan-50 to-slate-100 p-8 text-center">
              <div className="mx-auto max-w-xs space-y-4">
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-cyan-600">ATS Score</p>
                  <p className="mt-2 font-display text-5xl font-bold text-slate-950">92<span className="text-2xl text-slate-400">/100</span></p>
                  <p className="mt-1 text-sm text-slate-500">After AI optimisation</p>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-green-600">Keyword match</p>
                  <p className="mt-2 font-display text-5xl font-bold text-slate-950">18<span className="text-2xl text-slate-400">/20</span></p>
                  <p className="mt-1 text-sm text-slate-500">JD keywords found in CV</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 p-6">
                <h3 className="font-display text-lg font-bold text-slate-950">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Ready to make your CV online?
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Join thousands of job seekers who built their CV with CV Prime. Free to start, takes less than 15 minutes.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-10 py-4 text-base font-bold text-slate-950 hover:bg-cyan-300"
          >
            Create my free CV now
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
            name: 'Free Online CV Maker — CV Prime',
            description: 'Create a professional ATS-optimised CV online for free. AI-powered, instant PDF download.',
            url: 'https://cv-prime.in/online-cv-maker',
            mainEntity: {
              '@type': 'SoftwareApplication',
              name: 'CV Prime Online CV Maker',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                { '@type': 'ListItem', position: 2, name: 'Online CV Maker', item: 'https://cv-prime.in/online-cv-maker' },
              ],
            },
          }),
        }}
      />
    </main>
  );
}
