import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, AlignLeft, ListOrdered, Type, Calendar, CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'ATS Resume Format 2026 — The Exact Structure That Passes | CV Prime',
  description:
    'The correct ATS resume format for 2026: section order, fonts, file type, and layout rules that pass Applicant Tracking Systems. Copy the structure, then score your resume against any job description for free.',
  alternates: { canonical: 'https://cv-prime.in/ats-resume-format-2026' },
  keywords: [
    'ats resume format 2026',
    'ats friendly resume format',
    'ats resume format',
    'best resume format for ats',
    'ats compliant resume format',
    'resume format that passes ats',
    'ats resume structure',
    'ats resume layout 2026',
    'applicant tracking system resume format',
    'ats optimised resume format india',
  ],
  openGraph: {
    title: 'ATS Resume Format 2026 — The Exact Structure That Passes | CV Prime',
    description:
      'Section order, fonts, file type, and layout rules that pass the ATS in 2026 — plus a free score check against any JD.',
    url: 'https://cv-prime.in/ats-resume-format-2026',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ATS resume format 2026 — CV Prime' }],
  },
};

const sectionOrder = [
  { n: '1', name: 'Header (name + contact)', detail: 'Full name, phone, professional email, city, and LinkedIn/GitHub URL — as plain text in the body, never in the document header/footer area.' },
  { n: '2', name: 'Professional summary', detail: '2–3 lines that lead with your target role and strongest credentials, including the job title from the JD. Replaces the outdated "objective".' },
  { n: '3', name: 'Skills', detail: 'A clean list of hard skills, tools, and technologies — the section the ATS scans hardest for keyword matches. Mirror the JD\'s spelling.' },
  { n: '4', name: 'Work experience', detail: 'Reverse-chronological, each role with title, company, dates, and 3–5 quantified bullets starting with action verbs.' },
  { n: '5', name: 'Education', detail: 'Degree, institution, year, and CGPA/percentage where relevant. Place above experience only if you are a fresher.' },
  { n: '6', name: 'Projects / Certifications', detail: 'Especially important for freshers and tech roles. Name the project, the stack, and the measurable outcome.' },
];

const formatRules = [
  { icon: AlignLeft, title: 'Single-column, top-to-bottom', desc: 'One readable column with no tables, text boxes, or sidebars. The parser reads in order — give it a clean linear flow.' },
  { icon: Type, title: 'Standard fonts, 10–12pt', desc: 'Use Arial, Calibri, Helvetica, or Georgia at 10–12pt for body text. Decorative fonts can render as gibberish after parsing.' },
  { icon: ListOrdered, title: 'Plain section headings', desc: 'Summary, Skills, Experience, Education — exact, boring, standard. Creative headings stop the ATS from bucketing your content.' },
  { icon: Calendar, title: 'Consistent date format', desc: 'Use one format throughout, e.g. "Jan 2023 – Mar 2025". The ATS calculates your years of experience from these dates.' },
];

const whatChanged = [
  'AI-assisted screening now reads for semantic relevance, not just exact keywords — so context around a skill matters, but exact-match keywords still carry the most weight.',
  'Recruiters increasingly skim AI-summarised candidate profiles, so your first 3 bullets and summary must front-load impact.',
  'Graphic, Canva-style multi-column resumes are more common — and still fail parsing — making a clean ATS format a competitive advantage.',
  'A single generic resume performs worse than ever; tailoring to each JD is now the baseline expectation, not an edge.',
];

const dos = [
  'One column, standard headings, reverse-chronological',
  'Text-based PDF with selectable text',
  'Quantified bullets led by action verbs',
  'Keywords mirrored from the job description',
];
const donts = [
  'Tables, columns, text boxes, or sidebars',
  'Photos, logos, icons, or charts',
  'Info inside headers/footers',
  'Scanned or image-only PDFs',
];

const faqs = [
  {
    q: 'What is the best resume format for ATS in 2026?',
    a: 'The best ATS resume format in 2026 is a single-column, reverse-chronological layout with standard section headings (Summary, Skills, Experience, Education), a standard 10–12pt font, consistent date formatting, and quantified bullets that mirror the keywords in the job description. It should be exported as a text-based PDF. This structure parses cleanly in every major ATS while still reading well to the human recruiter who opens it after you pass.',
  },
  {
    q: 'What order should resume sections be in for an ATS?',
    a: 'For most candidates: header, professional summary, skills, work experience, education, then projects or certifications. Freshers and recent graduates should move education above experience and lead with projects, since that is their strongest evidence. The skills and experience sections are where the ATS finds most of its keyword matches, so they should be detailed and tailored to the role.',
  },
  {
    q: 'Has the ATS resume format changed for 2026?',
    a: 'The fundamentals are stable — single column, standard headings, keyword match — but two things have shifted. First, AI-assisted screening reads for semantic relevance, so the context around your skills matters more, though exact-match keywords still carry the most weight. Second, more applicants now use graphic multi-column templates that fail parsing, which makes a clean, correctly formatted resume a genuine competitive advantage. Tailoring to each JD has also moved from an edge to the baseline.',
  },
  {
    q: 'Should an ATS resume be one page or two?',
    a: 'For freshers and candidates with under 7–8 years of experience, one page is strongly preferred. Senior professionals with deep, relevant experience can use two pages. The ATS does not penalise length directly, but recruiters spend 6–10 seconds on the first scan, so every line must earn its place regardless of page count. Format quality matters far more than length for passing the ATS.',
  },
  {
    q: 'What font and size should I use for an ATS resume?',
    a: 'Use a standard, widely-supported font — Arial, Calibri, Helvetica, or Georgia — at 10–12pt for body text and 14–16pt for your name and section headings. Avoid decorative, condensed, or downloaded fonts, which can render incorrectly or as unreadable characters once the ATS extracts your text. Consistency and readability beat style here.',
  },
  {
    q: 'How do I check if my resume format is ATS-compliant?',
    a: 'Run it through an ATS score checker. CV Prime parses your resume the way an ATS would, flags format problems (columns, tables, images, header/footer content), checks your section structure, and scores your keyword match against a specific job description — all free. If the format is breaking the parse, the score and warnings will show it immediately, and you can switch to one of CV Prime\'s ATS-ready templates.',
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
    { '@type': 'ListItem', position: 2, name: 'ATS Resume Format 2026', item: 'https://cv-prime.in/ats-resume-format-2026' },
  ],
};

export default function ATSResumeFormat2026Page(): JSX.Element {
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
            <AlignLeft className="h-4 w-4" />
            ATS resume format · 2026 standard
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The ATS resume format that actually passes in 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            The exact section order, fonts, file type, and layout rules that get your resume parsed correctly and ranked — not silently filtered. Copy the structure below, then score your resume against any job description for free.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Build an ATS-format resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/ats-score-checker" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              Check my format free
            </Link>
          </div>
        </div>
      </section>

      {/* Section order */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">The correct section order</h2>
            <p className="mt-4 text-slate-500">Top to bottom — the structure every major ATS reads cleanly</p>
          </div>
          <div className="mt-12 space-y-4">
            {sectionOrder.map((s) => (
              <div key={s.name} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand text-brand-foreground font-display font-bold">{s.n}</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-950">{s.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Format rules */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">The four formatting rules</h2>
            <p className="mt-4 text-slate-500">Get these right and the parser reads every word</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {formatRules.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-slate-950">{r.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What changed 2026 */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-2 text-brand">
            <Sparkles className="h-6 w-6" />
            <h2 className="font-display text-3xl font-bold text-slate-950">What&apos;s different in 2026</h2>
          </div>
          <div className="mt-10 space-y-4">
            {whatChanged.map((c) => (
              <div key={c} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <p className="text-sm leading-7 text-slate-700">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Do / Don't */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-white p-6">
              <div className="flex items-center gap-2 text-emerald-700">
                <CheckCircle2 className="h-5 w-5" />
                <h2 className="font-display text-lg font-bold">Format do&apos;s</h2>
              </div>
              <ul className="mt-4 space-y-2.5">
                {dos.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />{d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-2 text-red-600">
                <XCircle className="h-5 w-5" />
                <h2 className="font-display text-lg font-bold">Format don&apos;ts</h2>
              </div>
              <ul className="mt-4 space-y-2.5">
                {donts.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />{d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">ATS resume format — FAQ</h2>
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
          <h2 className="font-display text-lg font-bold text-slate-900">Related tools & guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/ats-resume-template', label: 'ATS resume template' },
              { href: '/how-to-pass-ats-screening', label: 'How to pass ATS screening' },
              { href: '/ats-friendly-cv', label: 'ATS-friendly CV format' },
              { href: '/ats-score-checker', label: 'Free ATS score checker' },
              { href: '/resume-format', label: 'Resume format guide' },
              { href: '/templates', label: 'ATS-friendly templates' },
              { href: '/resume-tips/ats-keywords', label: 'ATS keywords guide' },
              { href: '/ats-resume-builder', label: 'ATS resume builder' },
              { href: '/minimal-ats-resume-template', label: 'Minimal ATS template' },
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
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Get the format right automatically</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            CV Prime&apos;s templates are built in the ATS-ready format — you just add your content and tailor. Free to start.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Build an ATS-format resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build an ATS-format resume" message="Templates already in the 2026 ATS format — free to start" />
    </main>
  );
}
