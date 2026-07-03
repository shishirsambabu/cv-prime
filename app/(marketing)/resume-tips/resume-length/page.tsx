import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'How Long Should a Resume Be? 1 Page vs 2 Page Rules 2026 | CV Prime',
  description:
    'How many pages should your resume be? The 1-page vs 2-page rule explained with experience-level guidance, what to cut to fit one page, and when a longer resume is actually better.',
  alternates: { canonical: 'https://cv-prime.in/resume-tips/resume-length' },
  keywords: [
    'how long should a resume be',
    'resume length',
    'resume 1 page or 2 pages',
    'how many pages should a resume be',
    'resume page limit',
    'one page resume',
    'two page resume',
    'resume length india',
    'cv length india',
    'resume how many pages',
  ],
  openGraph: {
    title: 'How Long Should a Resume Be? 1 vs 2 Pages — Rules + Examples | CV Prime',
    description: 'The 1-page vs 2-page resume debate settled — with experience-level guidance, what to cut, and when longer is actually better.',
    url: 'https://cv-prime.in/resume-tips/resume-length',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume Length Guide — CV Prime' }],
  },
};

const lengthByExperience = [
  {
    experience: '0–2 years (fresher / junior)',
    pages: '1 page',
    confidence: 'Strong rule',
    confidenceColor: 'text-red-700 bg-red-50',
    detail: 'You do not have enough experience to justify 2 pages. A 2-page fresher resume reads as padding and signals poor self-editing. Fit everything — education, internships, projects, skills — on one tight page.',
  },
  {
    experience: '3–7 years (mid-level)',
    pages: '1–2 pages',
    confidence: 'Flexible',
    confidenceColor: 'text-amber-300 bg-amber-50',
    detail: 'One page is fine if you can achieve it without sacrificing key achievements. Two pages is acceptable if the second page is genuinely full of relevant content. Never have a second page that is 30–40% white space.',
  },
  {
    experience: '8–15 years (senior)',
    pages: '2 pages',
    confidence: 'Standard',
    confidenceColor: 'text-cyan-300 bg-cyan-50',
    detail: 'Two pages is expected and appropriate. You have enough relevant roles, achievements, and context to fill two pages. The question is not whether to use 2 pages — it is whether each line on those 2 pages is earning its place.',
  },
  {
    experience: '15+ years (executive / principal)',
    pages: '2–3 pages',
    confidence: 'Context-dependent',
    confidenceColor: 'text-slate-300 bg-slate-100',
    detail: 'Three pages is occasionally justified for senior executives, academics, and technical leads with extensive publications or patents. For most C-suite candidates, 2 tight pages is still more impactful than 3 average ones.',
  },
];

const whatToCut = [
  { item: 'Objective statement (if you have 3+ years of experience)', impact: 'Replace with a 3-line summary — saves 2 lines' },
  { item: 'References section ("References available on request")', impact: 'Always implied. Cut it — saves 2–3 lines' },
  { item: 'Bullets with no measurable outcome on roles 3+ ago', impact: 'Cut bullets that are < 3 roles old and have no metric — saves 2–4 lines per old role' },
  { item: 'Obvious technical skills (MS Word, Google Docs, Email)', impact: 'Everyone can use these. Cut unless the JD specifically lists them — saves 1–2 lines' },
  { item: 'Hobbies and interests (unless directly relevant)', impact: '"Reading, travelling, cooking" adds zero value. Cut entirely — saves 3–4 lines' },
  { item: 'Full address (street + city + PIN)', impact: 'City and state are enough. "Bengaluru, Karnataka" vs "4th Floor, #14, 80 Feet Road..." — saves 1–2 lines' },
  { item: 'Description of very large, well-known companies', impact: '"Google is a global tech company" — recruiters know what Google is. Cut company descriptions entirely' },
  { item: 'Long job title banners and decorative headers', impact: 'Reduce font size, reduce spacing, use condensed headers — can save 1–2 lines per page' },
];

const marginAndSpacingGuide = [
  { param: 'Margins', value: '0.5"–0.75" (1.3–1.9cm)', note: 'Below 0.5" reads as cramped. Above 1" wastes too much space.' },
  { param: 'Font size (body)', value: '10–11pt', note: '10pt is the minimum for comfortable reading. 9pt is too small for most screens.' },
  { param: 'Font size (section headers)', value: '12–13pt bold', note: 'Should be clearly larger than body text but not oversized.' },
  { param: 'Line spacing', value: '1.0–1.15', note: 'Single or slightly expanded. 1.5 or double wastes significant vertical space.' },
  { param: 'Space between sections', value: '6–8pt', note: 'Enough visual breathing room without wasting a full blank line between each section.' },
  { param: 'Bullet indent', value: '0.25"', note: 'Minimal indent keeps bullets flush-left and readable. Deep indents waste horizontal space.' },
];

const faqs = [
  {
    q: 'Is a 1-page resume better than a 2-page resume?',
    a: 'It depends on your experience level. For freshers and candidates under 3 years of experience — yes, 1 page is strictly better. For mid-level (3–7 years), 1 page is fine but 2 is acceptable if it is genuinely full. For 8+ years, 2 pages is standard. The real rule: every line on your resume must be earning its place. A tight 2-page resume beats a padded 1-page resume, and a tight 1-page beats a sparse 2-page resume.',
  },
  {
    q: 'Do Indian recruiters prefer 1 or 2 page resumes?',
    a: 'Indian recruiter preferences largely mirror global norms: 1 page for freshers, 1–2 pages for mid-level, 2 pages for senior. For MNC applications (FAANG, Big 4, investment banks), 1 page is often preferred even at mid-level. For domestic companies and large Indian conglomerates, 2 pages is widely accepted for candidates with 5+ years of experience.',
  },
  {
    q: 'What if my resume is 1.5 pages? Should I extend to 2 or cut to 1?',
    a: 'Cut to 1 page if you can without losing important content. A 1.5-page resume is the worst outcome — too long for a 1-pager but looks incomplete at 2 pages. If you cannot cut it to 1 page cleanly, expand it to a full 2 pages by adding more achievement detail to your recent roles (not padding — real context and quantified bullets you had left out).',
  },
  {
    q: 'Can I make my font smaller to fit everything on one page?',
    a: 'Down to 10pt for body text — that is the minimum. Going below 10pt makes the resume genuinely hard to read and signals desperation. If you cannot fit your content at 10pt with 0.5" margins, the issue is content volume, not font size. Cut instead.',
  },
  {
    q: 'Should an academic or researcher have a longer resume?',
    a: 'Yes — academics use a CV (curriculum vitae) rather than a resume. Academic CVs list publications, conference presentations, grants, and teaching experience, and can run 4–10+ pages. This guide covers professional resumes for industry roles. If you are applying to academic positions, a different format applies.',
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
    { '@type': 'ListItem', position: 2, name: 'Resume Tips', item: 'https://cv-prime.in/resume-tips' },
    { '@type': 'ListItem', position: 3, name: 'Resume Length', item: 'https://cv-prime.in/resume-tips/resume-length' },
  ],
};

export default function ResumeLengthPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/resume-tips" className="hover:text-white">Resume Tips</Link><span>/</span>
            <span className="text-white">Resume Length</span>
          </nav>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            How long should a resume be — 1 page vs 2 pages, settled
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            The 1-page vs 2-page debate has a clear answer — it depends on your experience level. Learn the rules, what to cut to fit one page, and how to decide when a longer resume is actually the right call.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong transition">
            Build my resume in the right length <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Length by experience */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Resume length by experience level</h2>
          <div className="mt-8 space-y-4">
            {lengthByExperience.map((item) => (
              <div key={item.experience} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">{item.experience}</h3>
                    <p className="mt-1 text-2xl font-bold text-brand">{item.pages}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${item.confidenceColor}`}>{item.confidence}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to cut */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">8 things to cut to make your resume fit</h2>
          <p className="mt-3 text-slate-400">Before changing font sizes or margins, remove these common space-wasters first</p>
          <div className="mt-8 space-y-3">
            {whatToCut.map((item, i) => (
              <div key={item.item} className="flex gap-4 rounded-2xl bg-white/[0.04] p-5 shadow-sm">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">{i + 1}</span>
                <div>
                  <p className="text-sm font-semibold text-white">{item.item}</p>
                  <p className="mt-0.5 text-sm text-slate-400">💡 {item.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Margin and spacing guide */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Margin and spacing settings — the right range</h2>
          <p className="mt-3 text-slate-400">Adjust these before resorting to cutting content or shrinking font below 10pt</p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-white/10">
                  <th className="pb-3 text-left font-bold text-slate-300">Parameter</th>
                  <th className="pb-3 text-left font-bold text-brand">Recommended range</th>
                  <th className="pb-3 text-left font-bold text-slate-400">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {marginAndSpacingGuide.map((row) => (
                  <tr key={row.param}>
                    <td className="py-3 pr-4 font-medium text-white">{row.param}</td>
                    <td className="py-3 pr-4 font-bold text-brand">{row.value}</td>
                    <td className="py-3 text-slate-400">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Resume length — FAQ</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white/[0.04] p-5 shadow-sm">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-12">
        <div className="mx-auto max-w-5xl flex flex-wrap gap-3">
          {[
            { href: '/resume-tips', label: '← All resume tips' },
            { href: '/resume-tips/resume-bullet-points', label: 'Bullet writing guide' },
            { href: '/resume-tips/work-experience', label: 'Work experience guide' },
            { href: '/resume-format', label: 'Resume format guide' },
            { href: '/resume-builder', label: 'AI resume builder' },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 hover:border-brand hover:text-brand transition">{l.label}</Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">Build a resume that fits — and impresses</h2>
          <p className="mt-4 text-slate-300">CV Prime&apos;s AI builder formats your resume to the right length for your experience level — no manual tweaking needed.</p>
          <Link href="/signup?next=/ai-cv" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Build my resume free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <StickyCTA label="Build my resume free" message="CV Prime AI formats your resume to the right length automatically" />
    </main>
  );
}
