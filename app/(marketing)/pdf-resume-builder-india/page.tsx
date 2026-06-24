import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, FileDown, FileText, ScanLine, CheckCircle2, Upload } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'PDF Resume Builder India — Export a Clean, ATS-Readable PDF | CV Prime',
  description:
    'Build your resume and export a clean, text-based PDF that stays ATS-readable. CV Prime\'s PDF resume builder gives you free clean exports, ATS-safe templates, and AI tailoring — no image-flattened files, no watermark on Pro.',
  alternates: { canonical: 'https://cv-prime.in/pdf-resume-builder-india' },
  keywords: [
    'pdf resume builder india',
    'pdf resume maker',
    'resume pdf builder',
    'export resume to pdf',
    'pdf cv maker india',
    'resume to pdf converter',
    'ats friendly pdf resume',
    'create resume pdf online',
    'download resume as pdf',
    'pdf resume format india',
  ],
  openGraph: {
    title: 'PDF Resume Builder India — Export a Clean, ATS-Readable PDF | CV Prime',
    description:
      'Build and export a clean, text-based PDF that stays ATS-readable. Free clean exports, ATS-safe templates, AI tailoring.',
    url: 'https://cv-prime.in/pdf-resume-builder-india',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'PDF resume builder India — CV Prime' }],
  },
};

const whyTextPdf = [
  { icon: ScanLine, title: 'Text-based, not a flattened image', body: 'CV Prime exports a real text PDF with selectable text, so the ATS can read every word. Image-only PDFs (like a scan or a screenshot) read as blank to the parser and get auto-rejected.' },
  { icon: FileText, title: 'Keeps your formatting intact', body: 'A PDF locks your layout so it looks the same to every recruiter and on every device — unlike a DOCX, which can reflow and break depending on the software that opens it.' },
  { icon: CheckCircle2, title: 'ATS-safe by design', body: 'Every template exports single-column with standard headings and clean fonts, so the PDF parses correctly. You get a polished look and machine readability at once.' },
];

const steps = [
  { step: '01', icon: Upload, title: 'Start fresh or upload', desc: 'Begin from an ATS-ready template or upload your existing PDF/DOCX — CV Prime parses your content automatically.' },
  { step: '02', icon: FileText, title: 'Build and tailor', desc: 'Add your details, let AI rewrite weak bullets and tailor to a job description, and check your ATS score.' },
  { step: '03', icon: FileDown, title: 'Export a clean PDF', desc: 'Download a text-based, ATS-readable PDF — 3 free, or unlimited and watermark-free with one-time ₹999 Pro.' },
];

const faqs = [
  {
    q: 'What is a PDF resume builder?',
    a: 'A PDF resume builder lets you create your resume online and export it as a PDF file — the format almost every employer and ATS expects. CV Prime is a PDF resume builder that goes further: it exports a text-based PDF (not a flattened image), so the resume stays fully ATS-readable, and it adds AI tailoring and ATS scoring so the content is matched to each job before you download.',
  },
  {
    q: 'Is a PDF the best format for a resume in India?',
    a: 'Yes, in almost all cases. A text-based PDF preserves your formatting so it looks identical to every recruiter and on every device, and modern ATS systems read it correctly. The only exception is when an application explicitly asks for a .docx file — then follow the instruction. What you should never submit is a scanned or image-only PDF, because the ATS cannot extract text from an image.',
  },
  {
    q: 'Will my PDF resume pass the ATS?',
    a: 'It will if it is a text-based PDF with a single-column, standard-heading layout and keywords matched to the job description — which is exactly what CV Prime produces. The common reason PDFs fail is that they were exported from graphic, multi-column templates or saved as images. CV Prime\'s templates are built ATS-safe, and you can score the resume against the JD before exporting to confirm it passes.',
  },
  {
    q: 'Can I export a PDF resume for free?',
    a: 'Yes. CV Prime\'s free plan includes 3 clean PDF exports with no credit card, alongside full ATS scoring and AI rewrites. If you need more, a one-time ₹999 Lifetime Pro upgrade gives you unlimited, watermark-free PDF exports and all premium templates — with no subscription.',
  },
  {
    q: 'Can I turn my existing Word or PDF resume into a clean ATS PDF?',
    a: 'Yes. Upload your existing DOCX or PDF and CV Prime parses your experience, skills, education, and projects automatically. You can then pick an ATS-ready template, let AI tailor and strengthen the content, and export a fresh, clean, text-based PDF — fixing any format problems your original file had in the process.',
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
    { '@type': 'ListItem', position: 2, name: 'PDF Resume Builder India', item: 'https://cv-prime.in/pdf-resume-builder-india' },
  ],
};

export default function PDFResumeBuilderPage(): JSX.Element {
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
            <FileDown className="h-4 w-4" />
            Clean, text-based, ATS-readable PDF
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            PDF resume builder that stays ATS-readable
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Build your resume and export a clean, text-based PDF — the format every employer and ATS expects. Not a flattened image, not a layout that breaks on parse. Add AI tailoring and ATS scoring, and download with confidence.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Build my PDF resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/templates" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              See templates
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free · 3 clean PDF exports · ATS scoring · No credit card</p>
        </div>
      </section>

      {/* Why text PDF */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Why the right PDF matters</h2>
            <p className="mt-4 text-slate-500">Not all PDFs are equal — the wrong kind gets you auto-rejected</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {whyTextPdf.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
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
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Build to PDF in 3 steps</h2>
          <div className="mt-12 space-y-5">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.step} className="flex gap-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-brand-foreground font-display text-lg font-bold">
                    {s.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-brand" />
                      <h3 className="font-display text-xl font-bold text-slate-950">{s.title}</h3>
                    </div>
                    <p className="mt-2 leading-7 text-slate-600">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">PDF resume builder — FAQ</h2>
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
          <h2 className="font-display text-lg font-bold text-slate-900">Related tools</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/no-watermark-resume-download', label: 'No-watermark download' },
              { href: '/ats-resume-template', label: 'ATS resume template' },
              { href: '/resume-maker', label: 'Resume maker' },
              { href: '/resume-generator', label: 'Resume generator' },
              { href: '/online-cv-maker', label: 'Online CV maker' },
              { href: '/ai-resume-builder', label: 'AI resume builder' },
              { href: '/ats-score-checker', label: 'Free ATS score checker' },
              { href: '/templates', label: 'All templates' },
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Download a PDF that actually passes</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Build, tailor, and export a clean, text-based, ATS-readable PDF. Free to start, ₹999 once for unlimited.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Build my PDF resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build my PDF resume free" message="Clean, text-based, ATS-readable PDF export — free to start" />
    </main>
  );
}
