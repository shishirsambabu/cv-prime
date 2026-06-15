import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume Tips 2026 — How to Write a Resume That Gets Interviews | CV Prime',
  description:
    'Comprehensive resume writing tips for India 2026. Covers action verbs, ATS keywords, resume summary, skills section, bullet points, work experience, and more. Free tools included.',
  alternates: { canonical: 'https://cv-prime.in/resume-tips' },
  keywords: [
    'resume tips',
    'resume writing tips',
    'how to write a resume',
    'resume tips india',
    'resume tips 2026',
    'tips for resume',
    'resume advice',
    'resume writing guide',
    'how to make a good resume',
    'resume help',
    'resume tips for freshers',
    'resume improvement tips',
  ],
  openGraph: {
    title: 'Resume Tips 2026 — How to Write a Resume That Gets Interviews | CV Prime',
    description: 'Complete resume writing guide for India. Action verbs, ATS keywords, summary writing, skills, bullet points, and more — with free tools.',
    url: 'https://cv-prime.in/resume-tips',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume Tips 2026 — CV Prime' }],
  },
};

const subTopics = [
  {
    href: '/resume-tips/resume-summary',
    title: 'How to write a resume summary',
    desc: 'Write a 3-line summary that immediately shows recruiters you are the right person for the role.',
    keywords: '~20k monthly searches',
  },
  {
    href: '/resume-tips/action-verbs',
    title: 'Resume action verbs',
    desc: '100+ strong action verbs grouped by category — the single fastest way to strengthen every bullet.',
    keywords: '~15k monthly searches',
  },
  {
    href: '/resume-tips/skills-section',
    title: 'Resume skills section guide',
    desc: 'How to format a skills section that ATS scans correctly and recruiters find useful.',
    keywords: '~20k monthly searches',
  },
  {
    href: '/resume-tips/resume-bullet-points',
    title: 'How to write resume bullet points',
    desc: 'Transform responsibility statements into outcome-driven bullets that get callbacks.',
    keywords: '~10k monthly searches',
  },
  {
    href: '/resume-tips/quantifying-achievements',
    title: 'Quantifying achievements on a resume',
    desc: 'The exact formula for adding numbers, metrics, and impact to every experience bullet.',
    keywords: '~8k monthly searches',
  },
  {
    href: '/resume-tips/ats-keywords',
    title: 'ATS keywords guide',
    desc: 'How to find the right keywords in a job description and add them naturally to your resume.',
    keywords: '~12k monthly searches',
  },
  {
    href: '/resume-tips/resume-objective',
    title: 'Resume objective vs summary',
    desc: 'When to use an objective statement vs a summary — with examples for freshers and career changers.',
    keywords: '~10k monthly searches',
  },
  {
    href: '/resume-tips/work-experience',
    title: 'How to write work experience',
    desc: 'Structure, format, and bullet writing guide for the most important section on your resume.',
    keywords: '~8k monthly searches',
  },
  {
    href: '/resume-tips/resume-length',
    title: 'How long should a resume be?',
    desc: '1 page vs 2 pages — definitive guide based on experience level and role type in India.',
    keywords: '~6k monthly searches',
  },
  {
    href: '/resume-tips/gap-in-resume',
    title: 'How to explain a gap in your resume',
    desc: 'Frame career gaps, breaks, and sabbaticals without lying or over-explaining.',
    keywords: '~8k monthly searches',
  },
];

const quickTips = [
  { tip: 'Tailor your resume to every JD', detail: 'A single generic resume sent everywhere is the most common reason for low callback rates. Even 20 minutes of tailoring per application significantly improves your hit rate.' },
  { tip: 'Lead every bullet with an action verb', detail: 'Weak: "Was responsible for managing campaigns." Strong: "Led 8 performance marketing campaigns across Google and Meta, generating ₹2.4Cr in revenue at 3.2x ROAS."' },
  { tip: 'Add a number to every achievement', detail: 'Quantified bullets are 3x more likely to pass ATS and catch recruiter attention. If you don\'t have exact numbers, use estimates: "~40%", "approximately 200 users", "₹5L+ ARR".' },
  { tip: 'Match your skills section to the JD', detail: 'ATS scores your keyword match against the exact job description. Missing one critical keyword ("Python" vs "Python 3" vs "Python programming") can drop your score 10+ points.' },
  { tip: 'Keep formatting ATS-readable', detail: 'No tables, text boxes, columns built with frames, photos, or graphic icons. 38% of visually designed resumes fail ATS parsing silently.' },
  { tip: 'Write a role-specific summary', detail: 'Your summary should name the exact role you\'re applying for, your strongest credential, and your key impact — all in 3 lines. Generic summaries are ignored.' },
];

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Resume Tips 2026 — CV Prime',
  description: 'Comprehensive resume writing tips covering action verbs, ATS keywords, resume summary, skills, bullet points, and more.',
  url: 'https://cv-prime.in/resume-tips',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
      { '@type': 'ListItem', position: 2, name: 'Resume Tips', item: 'https://cv-prime.in/resume-tips' },
    ],
  },
};

export default function ResumeTipsHubPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero */}
      <section className="bg-slate-950 px-5 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1.5 text-sm font-bold text-yellow-300">
            <Lightbulb className="h-4 w-4" />
            Resume writing guide 2026
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Resume tips that actually get you interviews
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Comprehensive resume writing tips for India 2026. Covers every part of the resume — from action verbs and ATS keywords to bullet writing, skills sections, and employment gaps. With free tools.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Apply these tips with AI
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/resume-checker"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              Check my resume free
            </Link>
          </div>
        </div>
      </section>

      {/* Quick 6 tips */}
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold">The 6 most impactful resume tips</h2>
          <p className="mt-3 text-slate-500">The changes that improve ATS score and callback rate the fastest</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickTips.map((item, i) => (
              <div key={item.tip} className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/10 font-display text-sm font-bold text-brand">{i + 1}</span>
                  <h3 className="font-display font-bold text-slate-950">{item.tip}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-topic grid */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold">In-depth resume writing guides</h2>
          <p className="mt-3 text-slate-500">Click any topic for a comprehensive guide with examples, templates, and free tools</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {subTopics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-bold text-slate-950 group-hover:text-brand">{topic.title}</h3>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-brand" />
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{topic.desc}</p>
                <p className="mt-3 text-xs font-semibold text-slate-400">{topic.keywords}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold">Why resume quality matters so much in India</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: '75%', label: 'of resumes are rejected by ATS before a human reads them' },
              { stat: '6 sec', label: 'is all recruiters spend on an initial resume scan' },
              { stat: '40%', label: 'higher callback rate after ATS keyword optimisation' },
              { stat: '68%', label: 'of Indian job seekers send the same resume to every role — the #1 callback killer' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-white p-5 shadow-sm text-center">
                <p className="font-display text-3xl font-bold text-brand">{item.stat}</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related tools */}
      <section className="border-t border-slate-100 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-slate-900">Free tools to apply these tips</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/resume-builder', label: 'AI resume builder' },
              { href: '/resume-checker', label: 'Free resume checker' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/resume-format', label: 'Resume format guide' },
              { href: '/fresher-resume', label: 'Fresher resume guide' },
              { href: '/resume-examples', label: 'Resume examples by role' },
              { href: '/cover-letter-examples', label: 'Cover letter examples' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand hover:text-brand transition">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Apply every resume tip automatically — with AI</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            CV Prime&apos;s AI applies these tips to your actual resume in under 5 minutes — keyword injection, bullet rewriting, ATS scoring, and a clean PDF export.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Improve my resume with AI — free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
