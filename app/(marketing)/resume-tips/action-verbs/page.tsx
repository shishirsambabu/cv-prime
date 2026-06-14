import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Resume Action Verbs — 150+ Strong Verbs by Category 2026 | CV Prime',
  description:
    'Comprehensive list of 150+ resume action verbs for 2026. Grouped by skill type: leadership, communication, technical, analytical, and more. Replace weak verbs and improve your ATS score.',
  alternates: { canonical: 'https://cv-prime.in/resume-tips/action-verbs' },
  keywords: [
    'action verbs for resume',
    'resume action verbs',
    'strong action verbs resume',
    'power verbs for resume',
    'resume verbs list',
    'action words for cv',
    'resume verbs india',
    'powerful resume verbs',
    'action verbs for cv india',
    'best action verbs resume 2026',
  ],
  openGraph: {
    title: '150+ Resume Action Verbs by Category — 2026 | CV Prime',
    description: 'Complete list of strong action verbs for your resume — grouped by leadership, technical, analytical, communication, and more.',
    url: 'https://cv-prime.in/resume-tips/action-verbs',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume Action Verbs — CV Prime' }],
  },
};

const verbCategories = [
  {
    category: 'Leadership & Management',
    color: 'border-brand/20 bg-brand/5',
    labelColor: 'text-brand',
    verbs: ['Led', 'Directed', 'Managed', 'Spearheaded', 'Oversaw', 'Supervised', 'Coordinated', 'Championed', 'Mentored', 'Coached', 'Delegated', 'Established', 'Founded', 'Launched', 'Mobilised', 'Steered', 'Transformed', 'Drove'],
  },
  {
    category: 'Technical & Engineering',
    color: 'border-cyan-200 bg-cyan-50',
    labelColor: 'text-cyan-700',
    verbs: ['Architected', 'Built', 'Deployed', 'Engineered', 'Developed', 'Designed', 'Implemented', 'Integrated', 'Automated', 'Migrated', 'Optimised', 'Refactored', 'Configured', 'Debugged', 'Containerised', 'Shipped', 'Programmed', 'Coded'],
  },
  {
    category: 'Analytical & Data',
    color: 'border-violet-200 bg-violet-50',
    labelColor: 'text-violet-700',
    verbs: ['Analysed', 'Evaluated', 'Assessed', 'Modelled', 'Forecasted', 'Diagnosed', 'Investigated', 'Identified', 'Synthesised', 'Quantified', 'Benchmarked', 'Audited', 'Tracked', 'Measured', 'Interpreted', 'Validated', 'Tested', 'Researched'],
  },
  {
    category: 'Growth & Revenue',
    color: 'border-emerald-200 bg-emerald-50',
    labelColor: 'text-emerald-700',
    verbs: ['Grew', 'Increased', 'Accelerated', 'Expanded', 'Generated', 'Boosted', 'Scaled', 'Maximised', 'Doubled', 'Tripled', 'Captured', 'Acquired', 'Converted', 'Monetised', 'Upsold', 'Retained', 'Revived', 'Secured'],
  },
  {
    category: 'Reduction & Efficiency',
    color: 'border-rose-200 bg-rose-50',
    labelColor: 'text-rose-700',
    verbs: ['Reduced', 'Cut', 'Decreased', 'Eliminated', 'Streamlined', 'Simplified', 'Consolidated', 'Minimised', 'Automated', 'Accelerated', 'Saved', 'Trimmed', 'Improved', 'Enhanced', 'Optimised', 'Resolved', 'Fixed', 'Prevented'],
  },
  {
    category: 'Communication & Collaboration',
    color: 'border-amber-200 bg-amber-50',
    labelColor: 'text-amber-700',
    verbs: ['Presented', 'Negotiated', 'Communicated', 'Collaborated', 'Partnered', 'Influenced', 'Persuaded', 'Facilitated', 'Trained', 'Educated', 'Authored', 'Documented', 'Translated', 'Liaised', 'Advised', 'Consulted', 'Reported', 'Published'],
  },
  {
    category: 'Strategy & Planning',
    color: 'border-slate-200 bg-slate-50',
    labelColor: 'text-slate-600',
    verbs: ['Formulated', 'Devised', 'Planned', 'Prioritised', 'Defined', 'Proposed', 'Recommended', 'Developed', 'Created', 'Initiated', 'Conceptualised', 'Mapped', 'Structured', 'Aligned', 'Positioned', 'Envisioned', 'Roadmapped', 'Strategised'],
  },
  {
    category: 'Customer & Product',
    color: 'border-pink-200 bg-pink-50',
    labelColor: 'text-pink-700',
    verbs: ['Shipped', 'Launched', 'Piloted', 'Iterated', 'Tested', 'Validated', 'Improved', 'Enhanced', 'Personalised', 'Onboarded', 'Activated', 'Retained', 'Served', 'Supported', 'Resolved', 'Delivered', 'Released', 'Rolled out'],
  },
];

const weakVsStrong = [
  {
    weak: 'Was responsible for managing a team of engineers',
    strong: 'Led a cross-functional team of 8 engineers to ship a payment gateway integration 2 weeks ahead of schedule',
  },
  {
    weak: 'Helped with data analysis tasks',
    strong: 'Analysed 4M+ rows of transaction data to identify ₹1.2Cr in recoverable revenue from lapsed customers',
  },
  {
    weak: 'Worked on improving customer satisfaction',
    strong: 'Increased NPS from 42 to 68 within 6 months by redesigning the post-purchase support flow',
  },
  {
    weak: 'Did content writing for social media',
    strong: 'Authored 40+ LinkedIn posts per month that grew company followers from 2k to 18k in 12 months',
  },
  {
    weak: 'Participated in product development',
    strong: 'Shipped 3 major product features — reducing checkout abandonment by 18% and increasing Day-7 retention by 11%',
  },
];

const faqs = [
  {
    q: 'Why do action verbs matter on a resume?',
    a: 'Action verbs do two things: (1) They signal to ATS that your bullet is about a concrete achievement, not a vague description. ATS systems are tuned to recognise result-oriented language. (2) They make your bullets faster to scan — recruiters spend an average of 6 seconds on initial review, so the first word of each bullet must immediately convey impact.',
  },
  {
    q: 'Should I use past or present tense for action verbs?',
    a: 'Use past tense for all roles you have left. Use present tense for your current role only. Be consistent throughout each role — do not mix tenses within the same position.',
  },
  {
    q: 'What is the weakest action verb to use on a resume?',
    a: '"Assisted," "helped," "participated," and "was responsible for" are the weakest choices — they signal involvement but not ownership or impact. Replace them with the verb that shows what you specifically did: Led, Built, Developed, Analysed, Negotiated, etc.',
  },
  {
    q: 'Can I use the same action verb multiple times?',
    a: 'Avoid repeating the same verb in consecutive bullets — it reads as lazy and repetitive. Use synonyms: "Built" → "Developed" → "Engineered" → "Architected." Variation also helps capture more keyword variants in ATS.',
  },
  {
    q: 'Do ATS systems care about action verbs?',
    a: 'Indirectly, yes. ATS systems do not specifically look for "Led" vs "Managed" — but they do analyse sentence structure and extract named entities (technologies, companies, job titles). Strong action verbs ensure your bullets are cleanly parsed, whereas passive constructions ("was responsible for") can confuse extraction algorithms.',
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
    { '@type': 'ListItem', position: 3, name: 'Action Verbs', item: 'https://cv-prime.in/resume-tips/action-verbs' },
  ],
};

export default function ActionVerbsPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/resume-tips" className="hover:text-white">Resume Tips</Link>
            <span>/</span>
            <span className="text-white">Action Verbs</span>
          </nav>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            150+ resume action verbs — grouped by category
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            The first word of every resume bullet determines whether a recruiter reads the rest. Replace weak verbs ("responsible for", "helped") with the strong action verbs that signal ownership, impact, and results.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong transition">
              Rewrite my bullets with AI <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/resume-tips/resume-bullet-points" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white hover:border-white/40 transition">
              Bullet writing guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Weak vs Strong */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Weak verbs vs strong action verbs — examples</h2>
          <p className="mt-3 text-slate-500">Every bullet in these examples starts with a weak verb — and shows what it looks like fixed</p>
          <div className="mt-8 space-y-4">
            {weakVsStrong.map((item) => (
              <div key={item.weak} className="grid gap-2 rounded-2xl border border-slate-100 p-5 md:grid-cols-2">
                <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-red-600">❌ Weak</p>
                  <p className="text-sm text-red-800">{item.weak}</p>
                </div>
                <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-green-700">✅ Strong</p>
                  <p className="text-sm font-medium text-green-900">{item.strong}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verb categories */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">150+ action verbs by category</h2>
          <p className="mt-3 text-slate-500">Pick verbs that match the type of work you actually did — using the right category signals competency</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {verbCategories.map((cat) => (
              <div key={cat.category} className={`rounded-2xl border p-5 ${cat.color}`}>
                <p className={`text-xs font-bold uppercase tracking-wider ${cat.labelColor}`}>{cat.category}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cat.verbs.map((v) => (
                    <span key={v} className="rounded-full bg-white/70 px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm">{v}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Action verbs — FAQ</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="font-display text-sm font-bold text-slate-500 uppercase tracking-wider">Related resume tips</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { href: '/resume-tips', label: '← All resume tips' },
              { href: '/resume-tips/resume-bullet-points', label: 'How to write resume bullets' },
              { href: '/resume-tips/quantifying-achievements', label: 'Quantifying achievements' },
              { href: '/resume-tips/resume-summary', label: 'Resume summary guide' },
              { href: '/resume-checker', label: 'Free resume checker' },
              { href: '/resume-builder', label: 'AI resume builder' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand hover:text-brand transition">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">Let AI rewrite your weak bullets — free</h2>
          <p className="mt-4 text-slate-300">CV Prime's AI replaces every weak verb and adds quantified outcomes — automatically, in under 2 minutes.</p>
          <Link href="/signup?next=/ai-cv" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Rewrite my resume bullets free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Rewrite my bullets with AI" message="Replace weak verbs — AI rewrites every bullet with outcomes and impact" />
    </main>
  );
}
