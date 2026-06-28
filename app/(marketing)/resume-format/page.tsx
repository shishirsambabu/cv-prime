import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, AlertTriangle, FileText, Layout } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Resume Format Guide 2026 — Which Format to Use & Why | CV Prime',
  description:
    'Complete resume format guide for India 2026. Reverse-chronological vs functional vs combination format — which to choose, how to structure each section, and how to format your resume to pass ATS.',
  alternates: { canonical: 'https://cv-prime.in/resume-format' },
  keywords: [
    'resume format',
    'resume format india',
    'best resume format 2026',
    'cv format',
    'resume format for freshers',
    'ats resume format',
    'chronological resume format',
    'functional resume format',
    'resume format guide',
    'how to format a resume',
    'resume layout',
    'resume structure',
    'professional resume format',
    'resume format pdf',
  ],
  openGraph: {
    title: 'Resume Format Guide 2026 — Which Format Passes ATS | CV Prime',
    description:
      'Reverse-chronological, functional, or combination? The definitive guide to resume format for India 2026 — with ATS compliance rules.',
    url: 'https://cv-prime.in/resume-format',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume Format Guide 2026 — CV Prime' }],
  },
};

const formatTypes = [
  {
    name: 'Reverse-chronological format',
    best: 'Best for 95% of job seekers — the default choice for India',
    atsScore: 'Excellent',
    atsColor: 'text-green-700 bg-green-50',
    structure: ['Contact information', 'Professional summary (3 lines)', 'Work experience (most recent first)', 'Education', 'Skills', 'Certifications / Achievements'],
    pros: ['ATS-friendly — what automated systems expect', 'Shows clear career progression', 'Fastest to read for recruiters', 'Works for experienced professionals and freshers'],
    cons: ['Employment gaps are visible', 'Career changers may prefer combination format'],
    verdict: 'Use this unless you have a specific reason not to. It is what Indian ATS systems (Taleo, Workday, Greenhouse) parse best, and what Indian recruiters prefer.',
  },
  {
    name: 'Functional / Skills-based format',
    best: 'For career changers with transferable skills — rarely used in India',
    atsScore: 'Poor',
    atsColor: 'text-red-700 bg-red-50',
    structure: ['Contact information', 'Professional summary', 'Key skills (grouped by competency)', 'Work experience (brief, without dates)', 'Education'],
    pros: ['Highlights transferable skills over timeline', 'Useful for career changers'],
    cons: ['Most ATS systems struggle to parse it', 'Raises red flags for Indian recruiters who see it as hiding something', 'Hides career progression'],
    verdict: 'Avoid in India. Indian recruiters and ATS systems strongly prefer chronological format. Using functional format often results in automatic rejection from ATS.',
  },
  {
    name: 'Combination / Hybrid format',
    best: 'For senior professionals with diverse experience to showcase',
    atsScore: 'Good',
    atsColor: 'text-cyan-300 bg-cyan-50',
    structure: ['Contact information', 'Professional summary', 'Core competencies (brief skills block)', 'Work experience (chronological)', 'Education', 'Certifications'],
    pros: ['Shows both skills and career progression', 'Works well for senior or director-level candidates', 'Good for roles requiring specific skill sets'],
    cons: ['Longer than pure chronological', 'Risk of repetition between skills and experience sections'],
    verdict: 'Good choice for senior professionals (8+ years), leadership roles, or when you have a strong skills profile to lead with. Keep it to 2 pages maximum.',
  },
];

const atsFormattingRules = [
  {
    rule: 'Use standard fonts only',
    good: 'Arial, Calibri, Helvetica, Times New Roman, Georgia — 10–12pt body, 14–18pt name',
    bad: 'Decorative fonts, script fonts, or anything that only renders on specific operating systems',
  },
  {
    rule: 'No tables, text boxes, or columns for core content',
    good: 'Single-column layout or two columns where the right column is only for secondary info (e.g. dates)',
    bad: 'Multi-column layouts built with tables, text boxes, or frames — ATS parsers read these left-to-right regardless of your intended column structure',
  },
  {
    rule: 'No photos, logos, or graphics',
    good: 'Text-only layout for all work experience, education, and skills',
    bad: 'Profile photos, company logos, skill rating bars, charts, or icons embedded in the content',
  },
  {
    rule: 'Use standard section headings',
    good: '"Work Experience," "Education," "Skills," "Certifications"',
    bad: '"My Journey," "What I\'ve Learned," "Arsenal of Expertise" — ATS cannot identify non-standard headings',
  },
  {
    rule: 'Save and send as PDF or DOCX',
    good: 'PDF (from a text-based tool like CV Prime) or DOCX — both parse well',
    bad: 'JPEG, PNG, Google Docs links, or PDFs created from image scans — text is not extractable',
  },
  {
    rule: 'Use bullet points, not paragraphs',
    good: 'Concise bullet points starting with action verbs for experience and achievements',
    bad: 'Long paragraphs in experience sections — harder for ATS to parse keywords and harder for recruiters to scan',
  },
];

const sectionOrder = [
  { section: 'Contact information', note: 'Name, phone, email, city, LinkedIn, GitHub' },
  { section: 'Professional summary', note: '2–4 lines targeting the specific role' },
  { section: 'Work experience', note: 'Most recent first; company, title, dates, bullets' },
  { section: 'Education', note: 'Degree, institution, year, CGPA (if 7.5+)' },
  { section: 'Skills', note: 'Grouped by category: languages, tools, frameworks' },
  { section: 'Certifications', note: 'Name, issuer, date — relevant certs only' },
  { section: 'Projects', note: 'Optional for experienced; required for freshers' },
  { section: 'Achievements / Awards', note: 'Optional: competitions, publications, patents' },
];

const faqs = [
  {
    q: 'What is the best resume format for India in 2026?',
    a: 'Reverse-chronological format is the best choice for 95% of job seekers in India. It lists your most recent experience first, is ATS-parseable, and is what Indian recruiters expect. Use combination format only if you have 8+ years of experience with a strong skills profile to lead with.',
  },
  {
    q: 'Should I use a single-column or two-column resume format?',
    a: 'Single-column is the safest choice — it is the most ATS-compatible format. Two-column formats can work if the right column only contains secondary information (dates, locations). Never use two-column layouts built with tables or text boxes — most ATS systems will read them as a single, jumbled column.',
  },
  {
    q: 'What font and font size should I use on my resume?',
    a: 'Use a standard font: Arial, Calibri, Helvetica, or Times New Roman. Body text: 10–11pt. Section headings: 12–14pt. Your name: 16–18pt. Avoid decorative or script fonts — they may not render on all systems and can confuse ATS parsers.',
  },
  {
    q: 'How long should a resume be?',
    a: 'Freshers: 1 page strictly. 0–5 years experience: 1 page. 5–10 years: 1–2 pages. 10+ years: 2 pages maximum. For most roles in India, a 2-page resume is the absolute maximum. Longer resumes are common in academic contexts but unusual in corporate hiring.',
  },
  {
    q: 'What margins should I use on my resume?',
    a: 'Standard margins: 0.5–1 inch (1.25–2.5 cm) on all sides. This ensures clean formatting when printed and proper parsing by ATS. Do not use very narrow margins (<0.5 inch) to fit more content — it makes the resume look dense and unprofessional.',
  },
  {
    q: 'Should I save my resume as PDF or DOCX?',
    a: 'PDF is the safest choice — it preserves your formatting exactly and renders identically on all devices. DOCX is acceptable and sometimes requested by recruiters. Never send your resume as a JPEG, PNG, or from a Google Docs link — ATS cannot extract text from image files.',
  },
  {
    q: 'Can I use a template from Canva or Figma for my resume?',
    a: 'Only if it produces a text-extractable PDF. Many Canva designs use text boxes, graphics, and multi-column layouts that ATS cannot parse. CV Prime\'s templates are specifically built to be ATS-readable while still looking professional — that is the difference.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Resume Format Guide', item: 'https://cv-prime.in/resume-format' },
  ],
};

export default function ResumeFormatPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-sm font-bold text-amber-300">
            <Layout className="h-4 w-4" />
            Resume format guide 2026
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Resume format guide — which format passes ATS in 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Reverse-chronological, functional, or combination? This guide explains which resume format works for your situation, how to structure each section, and the formatting rules that ensure ATS compatibility for Indian job seekers.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-3.5 text-base font-bold text-white transition hover:bg-amber-300"
            >
              Build my resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/ats-checker"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              Check my ATS score
            </Link>
          </div>
        </div>
      </section>

      {/* Three formats */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">The three resume formats — compared</h2>
            <p className="mt-4 text-slate-400">Which one you should use depends on your career stage and situation</p>
          </div>
          <div className="mt-12 space-y-8">
            {formatTypes.map((format) => (
              <div key={format.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">{format.name}</h3>
                    <p className="mt-1 text-sm text-slate-400">{format.best}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-sm font-bold ${format.atsColor}`}>
                    ATS: {format.atsScore}
                  </span>
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Structure</p>
                    <ol className="mt-3 space-y-1.5">
                      {format.structure.map((item, i) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.05] text-xs font-bold text-slate-400">
                            {i + 1}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-green-600">✅ Pros</p>
                    <ul className="mt-3 space-y-1.5">
                      {format.pros.map((p) => (
                        <li key={p} className="text-sm text-slate-300">{p}</li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs font-bold uppercase tracking-wide text-red-500">❌ Cons</p>
                    <ul className="mt-2 space-y-1.5">
                      {format.cons.map((c) => (
                        <li key={c} className="text-sm text-slate-300">{c}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Verdict</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{format.verdict}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended section order */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Standard resume section order for India</h2>
            <p className="mt-4 text-slate-400">For experienced professionals using reverse-chronological format</p>
          </div>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-3 text-left font-semibold text-slate-300">Position</th>
                  <th className="pb-3 text-left font-semibold text-slate-300">Section</th>
                  <th className="pb-3 text-left font-semibold text-slate-300">What to include</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {sectionOrder.map((row, i) => (
                  <tr key={row.section}>
                    <td className="py-3 font-bold text-amber-600">{i + 1}</td>
                    <td className="py-3 font-medium text-white">{row.section}</td>
                    <td className="py-3 text-slate-300">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ATS formatting rules */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">ATS formatting rules — what to do and avoid</h2>
            <p className="mt-4 text-slate-400">Format mistakes that cause silent ATS rejection — even for qualified candidates</p>
          </div>
          <div className="mt-10 space-y-5">
            {atsFormattingRules.map((rule) => (
              <div key={rule.rule} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                  <h3 className="font-display text-lg font-bold text-white">{rule.rule}</h3>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wide text-green-700">✅ Do this</p>
                    <p className="text-sm text-green-800">{rule.good}</p>
                  </div>
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wide text-red-700">❌ Avoid this</p>
                    <p className="text-sm text-red-800">{rule.bad}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-500/10 p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
              <div>
                <p className="font-bold text-white">The biggest ATS formatting mistake in India</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Using a graphic-heavy template (Canva, Novoresume, Kickresume) with columns, icons, and text boxes. 38% of visually designed resumes fail ATS parsing entirely — the system reads your skills section as part of your education, or skips sections completely. CV Prime&apos;s templates are specifically tested for ATS compatibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Resume format — frequently asked questions</h2>
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
          <h2 className="font-display text-lg font-bold text-white">Related guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/resume-builder', label: 'AI resume builder' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/ats-friendly-cv', label: 'ATS-friendly resume guide' },
              { href: '/fresher-resume', label: 'Fresher resume guide' },
              { href: '/resume-vs-cv', label: 'Resume vs CV' },
              { href: '/cv-examples', label: 'Resume examples by role' },
              { href: '/templates', label: 'ATS-ready resume templates' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 hover:border-amber-300 hover:text-amber-300 transition">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Build a perfectly formatted ATS resume — free</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            CV Prime&apos;s resume builder applies all ATS formatting rules automatically. Pick a template, fill in your details, and export a format-perfect PDF.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-400 px-10 py-4 text-base font-bold text-white hover:bg-amber-300 transition">
            Start building free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build my resume free" message="Resume format guide — build an ATS-compatible resume in minutes" />
    </main>
  );
}
