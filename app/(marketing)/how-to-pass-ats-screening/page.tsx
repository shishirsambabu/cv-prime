import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, ScanLine, KeyRound, FileText, Layers, FileType2, Ban, CheckCircle2, XCircle } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'How to Pass ATS Screening — The Complete 2026 Guide | CV Prime',
  description:
    'Learn exactly how to pass ATS screening: match the right keywords, use an ATS-readable format, structure your sections correctly, and avoid the elements that get resumes auto-rejected. With a free ATS score check.',
  alternates: { canonical: 'https://cv-prime.in/how-to-pass-ats-screening' },
  keywords: [
    'how to pass ats screening',
    'how to pass ats',
    'pass applicant tracking system',
    'beat the ats',
    'how to get past ats',
    'ats screening tips',
    'pass ats resume scan',
    'how to make resume ats friendly',
    'ats resume checklist',
    'get past resume screening software',
  ],
  openGraph: {
    title: 'How to Pass ATS Screening — The Complete 2026 Guide | CV Prime',
    description:
      'Match keywords, use an ATS-readable format, structure sections right, avoid auto-reject elements — with a free ATS score check.',
    url: 'https://cv-prime.in/how-to-pass-ats-screening',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'How to pass ATS screening — CV Prime' }],
  },
};

const rules = [
  { icon: KeyRound, title: 'Match the keywords in the JD', desc: 'The ATS ranks you on how many of the job description\'s required skills, tools, and qualifications appear in your resume. Mirror the JD\'s exact terms — if it says "Node.js", write "Node.js", not "NodeJS". This single factor decides most rejections.' },
  { icon: FileText, title: 'Use a clean, single-flow format', desc: 'Stick to a standard reverse-chronological layout the parser can read top-to-bottom. Avoid text boxes, tables, columns, headers/footers, and images — they scramble or drop content when the ATS extracts your text.' },
  { icon: Layers, title: 'Use the section names the ATS expects', desc: 'Label sections plainly: Summary, Skills, Experience, Education, Projects, Certifications. Creative headings like "Where I\'ve Made Magic" confuse the parser, which is looking for standard headers to bucket your information.' },
  { icon: FileType2, title: 'Submit the right file type', desc: 'Export a text-based PDF (not a scanned image) unless the application explicitly asks for .docx. A text PDF preserves your formatting and stays fully machine-readable. Never upload a flattened image of your resume.' },
  { icon: ScanLine, title: 'Put dates and titles where they belong', desc: 'Every role needs a clear job title, company, and start–end dates in a consistent format. The ATS uses these to calculate your experience; missing or inconsistent dates can drop your ranking or flag gaps.' },
  { icon: Ban, title: 'Cut the elements that break parsers', desc: 'No logos, icons, photos (in most cases), graphics, charts, or fancy fonts. They add nothing the ATS can read and often corrupt the parse. Save the visuals for roles reviewed by humans, not software.' },
];

const steps = [
  { step: '01', title: 'Read the JD and pull the keywords', desc: 'List every hard skill, tool, certification, and qualification the job description names. These are the terms the ATS will look for in your resume.' },
  { step: '02', title: 'Map them against your resume', desc: 'Check which of those terms already appear in your resume and which are missing. The gaps are exactly what is costing you the match.' },
  { step: '03', title: 'Weave the missing keywords in naturally', desc: 'Add the missing skills into your summary, skills section, and experience bullets — only where they are genuinely true for you, written as real sentences, not a keyword dump.' },
  { step: '04', title: 'Fix the format and sections', desc: 'Move to a single-column, ATS-readable layout with standard section names and consistent dates. Remove tables, columns, and graphics.' },
  { step: '05', title: 'Score it and confirm before applying', desc: 'Run your resume and the JD through an ATS score checker. Aim for 80+ before you submit. Re-check after every change until you clear the threshold.' },
];

const dos = [
  'Tailor your resume to each specific job description',
  'Use standard section headings (Skills, Experience, Education)',
  'Mirror the JD\'s exact keyword spelling and phrasing',
  'Keep one clean column the parser can read top-to-bottom',
  'Export a text-based PDF with selectable text',
  'Quantify achievements so they read well to humans too',
];

const donts = [
  'Don\'t use tables, text boxes, or multi-column layouts',
  'Don\'t hide keywords in white text — modern ATS detect it',
  'Don\'t put key info in headers, footers, or images',
  'Don\'t use creative section names the parser won\'t recognise',
  'Don\'t submit a scanned or image-only PDF',
  'Don\'t stuff unrelated keywords — it reads as spam to recruiters',
];

const faqs = [
  {
    q: 'How do I pass ATS screening?',
    a: 'To pass ATS screening, tailor your resume to the specific job description so it contains the keywords the system is scanning for, use a clean single-column format the parser can read, label your sections with standard headings, include clear job titles and dates, and export a text-based PDF. The most important factor is keyword match: the ATS ranks resumes on how closely they align with the JD, so a generic resume usually fails regardless of how qualified you are. Checking your ATS score against the JD before you apply is the fastest way to confirm you will pass.',
  },
  {
    q: 'What gets a resume rejected by an ATS?',
    a: 'The two biggest causes are low keyword match (your resume uses different terms than the JD) and format problems (tables, columns, text boxes, headers/footers, images, or unusual fonts that the parser cannot read). Other causes include missing or inconsistently formatted dates, non-standard section headings, and submitting a scanned image instead of a text-based file. Most of these are invisible to you until your resume scores low and gets filtered before a human sees it.',
  },
  {
    q: 'Do ATS systems really reject most resumes?',
    a: 'Yes. Around 75% of resumes are filtered out by ATS software before a human recruiter ever reads them, and over 90% of large companies in India use an ATS to pre-screen applications. With the average corporate role in India receiving 250+ applications, recruiters rely on the ATS to rank and shortlist, which is why getting past it is the single biggest hurdle for qualified candidates.',
  },
  {
    q: 'Does keyword stuffing help me pass the ATS?',
    a: 'No. Old tricks like stuffing keywords or hiding them in white text are detected by modern ATS and flagged, and they read as spam to the recruiter who eventually opens your resume. The right approach is to include the JD\'s keywords naturally in real bullets that describe your actual work. CV Prime weaves keywords in this way and scores the result so you raise your match without tripping spam filters.',
  },
  {
    q: 'Is a PDF or Word document better for ATS?',
    a: 'A text-based PDF is safe for almost all modern ATS and preserves your formatting, so it is the best default. The only exception is when an application explicitly asks for a .docx file — in that case, follow the instruction. What you must never do is upload a scanned or image-only PDF, because the ATS cannot extract text from an image and will read your resume as blank.',
  },
  {
    q: 'How do I know if my resume will pass before I apply?',
    a: 'Use an ATS score checker. Paste your resume and the job description into CV Prime and you get a 0–100 ATS score with your keyword coverage, missing terms, and format warnings. Aim for 80+ before submitting. It is the only way to know your resume will pass instead of finding out through silence after you apply.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to pass ATS screening',
  description: 'Five steps to get your resume past Applicant Tracking System screening.',
  step: steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.desc })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'How to Pass ATS Screening', item: 'https://cv-prime.in/how-to-pass-ats-screening' },
  ],
};

export default function HowToPassATSPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <ScanLine className="h-4 w-4" />
            The complete ATS screening guide · 2026
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            How to pass ATS screening — every rule that matters
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Around 75% of resumes are filtered out by software before a human reads them. This guide covers exactly how to get past the ATS: keyword matching, format, sections, file types, and the elements that auto-reject you — plus a free score check to confirm you pass.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Check if my resume passes
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/ats-score-checker" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              Free ATS score checker
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-white/10 bg-white/[0.03] px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {[
            { stat: '75%', label: 'of resumes filtered by ATS before a human reads them' },
            { stat: '90%+', label: 'of large Indian companies screen with an ATS' },
            { stat: '250+', label: 'applications the average Indian corporate role receives' },
            { stat: '80+', label: 'ATS score to aim for before you apply' },
          ].map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-brand">{item.stat}</p>
              <p className="mt-1 max-w-[170px] text-xs leading-5 text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The rules */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">The six rules that get you past the ATS</h2>
            <p className="mt-4 text-slate-400">Follow these and your resume reaches a human recruiter</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rules.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{r.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">The 5-step process to pass</h2>
          </div>
          <div className="mt-12 space-y-5">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-brand-foreground font-display text-lg font-bold">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-2 leading-7 text-slate-300">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Do / Don't */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/20 bg-white/[0.04] p-6">
              <div className="flex items-center gap-2 text-emerald-300">
                <CheckCircle2 className="h-5 w-5" />
                <h2 className="font-display text-xl font-bold">Do</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {dos.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm leading-6 text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-center gap-2 text-red-600">
                <XCircle className="h-5 w-5" />
                <h2 className="font-display text-xl font-bold">Don&apos;t</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {donts.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm leading-6 text-slate-300">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Passing the ATS — FAQ</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white/[0.04] p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-white">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-white/10 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-white">Related tools & guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/ats-score-checker', label: 'Free ATS score checker' },
              { href: '/ats-resume-format-2026', label: 'ATS resume format 2026' },
              { href: '/ats-friendly-cv', label: 'ATS-friendly CV format' },
              { href: '/ats-resume-template', label: 'ATS resume template' },
              { href: '/tailor-resume-to-job-description', label: 'Tailor resume to a JD' },
              { href: '/resume-tips/ats-keywords', label: 'ATS keywords guide' },
              { href: '/ats-guide', label: 'ATS guides by role' },
              { href: '/ats-resume-builder', label: 'ATS resume builder' },
              { href: '/ats-checker', label: 'ATS checker' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-brand hover:text-brand">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Confirm you pass — before you apply</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Paste your resume and a JD, get your ATS score with every fix, and reach a human recruiter. Free to start.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Check if my resume passes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Check if my resume passes" message="See your ATS score and fixes before you apply — free" />
    </main>
  );
}
