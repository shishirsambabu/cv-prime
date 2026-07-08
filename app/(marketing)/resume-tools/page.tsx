import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Sparkles, ScanLine, LayoutTemplate, BookOpen, GitCompareArrows, MapPin, Briefcase } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Resume Tools & Guides — Everything to Build an ATS Resume | CV Prime',
  description:
    'Every CV Prime tool and guide in one place: AI resume builder, ATS score checker, JD tailoring, resume rewriter, ATS-safe templates, format guides, and competitor comparisons. Free to start, built for India.',
  alternates: { canonical: 'https://cv-prime.in/resume-tools' },
  keywords: [
    'resume tools',
    'resume building tools',
    'ats resume tools',
    'free resume tools india',
    'cv tools',
    'resume builder tools',
    'ai resume tools',
    'resume help tools',
    'resume tool directory',
    'resume tools india',
  ],
  openGraph: {
    title: 'Resume Tools & Guides — Everything to Build an ATS Resume | CV Prime',
    description:
      'AI builder, ATS score checker, JD tailoring, rewriter, ATS-safe templates, format guides, and comparisons — all in one place.',
    url: 'https://cv-prime.in/resume-tools',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume tools & guides — CV Prime' }],
  },
};

type LinkItem = { href: string; label: string };
type Group = { icon: typeof Sparkles; title: string; desc: string; links: LinkItem[] };

const groups: Group[] = [
  {
    icon: Sparkles,
    title: 'AI resume tools',
    desc: 'Build, tailor, and rewrite your resume with AI.',
    links: [
      { href: '/ai-resume-builder', label: 'AI resume builder' },
      { href: '/ai-cv-builder', label: 'AI CV builder' },
      { href: '/tailor-resume-to-job-description', label: 'Tailor resume to a JD' },
      { href: '/ai-resume-rewriter', label: 'AI resume rewriter' },
      { href: '/resume-generator', label: 'Resume generator' },
      { href: '/resume-optimizer', label: 'Resume optimizer' },
      { href: '/cover-letter-generator', label: 'AI cover letter generator' },
      { href: '/job-application-tracker', label: 'Job application tracker' },
    ],
  },
  {
    icon: ScanLine,
    title: 'ATS tools & scoring',
    desc: 'Score, check, and fix your resume for the ATS.',
    links: [
      { href: '/tools/ats-keyword-matcher', label: 'Free ATS keyword matcher (no login)' },
      { href: '/tools/resume-strength-analyzer', label: 'Free resume strength analyzer' },
      { href: '/ats-score-checker', label: 'Full AI ATS score checker' },
      { href: '/ats-checker', label: 'ATS checker' },
      { href: '/resume-checker', label: 'Free resume checker' },
      { href: '/resume-job-match-score', label: 'Resume job match score' },
      { href: '/ats-resume-builder', label: 'ATS resume builder' },
      { href: '/how-to-pass-ats-screening', label: 'How to pass ATS screening' },
      { href: '/free-ats-checker-vs-paid', label: 'Free vs paid ATS checker' },
      { href: '/ats-guide', label: 'ATS guides by role' },
    ],
  },
  {
    icon: LayoutTemplate,
    title: 'Templates & formats',
    desc: 'ATS-safe templates and the formats that pass.',
    links: [
      { href: '/templates', label: 'All templates' },
      { href: '/ats-resume-template', label: 'ATS resume template' },
      { href: '/modern-resume-template-india', label: 'Modern resume template' },
      { href: '/minimal-ats-resume-template', label: 'Minimal ATS template' },
      { href: '/professional-cv-template-india', label: 'Professional CV template' },
      { href: '/resume-template-for-engineers', label: 'Resume template for engineers' },
      { href: '/ats-resume-format-2026', label: 'ATS resume format 2026' },
      { href: '/resume-format-for-indian-companies', label: 'Resume format for Indian companies' },
      { href: '/mnc-resume-format-india', label: 'MNC resume format India' },
      { href: '/one-page-resume', label: 'One-page resume' },
      { href: '/no-watermark-resume-download', label: 'No-watermark download' },
      { href: '/pdf-resume-builder-india', label: 'PDF resume builder' },
    ],
  },
  {
    icon: BookOpen,
    title: 'Guides by stage & topic',
    desc: 'Write every section well, at every career stage.',
    links: [
      { href: '/resume-tips', label: 'All resume tips' },
      { href: '/resume-tips/how-to-write-a-resume', label: 'How to write a resume' },
      { href: '/resume-tips/resume-bullet-points', label: 'Resume bullet points' },
      { href: '/resume-tips/ats-keywords', label: 'ATS keywords' },
      { href: '/resume-summary-vs-objective', label: 'Summary vs objective' },
      { href: '/fresher-resume', label: 'Fresher resume' },
      { href: '/engineering-fresher-resume', label: 'Engineering fresher resume' },
      { href: '/campus-placement-resume', label: 'Campus placement resume' },
      { href: '/mba-resume', label: 'MBA resume' },
      { href: '/career-change-resume', label: 'Career change resume' },
      { href: '/internship-resume', label: 'Internship resume' },
      { href: '/biodata-format', label: 'Biodata format' },
    ],
  },
  {
    icon: GitCompareArrows,
    title: 'Compare & alternatives',
    desc: 'How CV Prime stacks up — and the honest verdict.',
    links: [
      { href: '/best-ai-resume-builder-india-2026', label: 'Best AI resume builders India 2026' },
      { href: '/cv-prime-review', label: 'CV Prime review' },
      { href: '/lifetime-resume-builder-india', label: 'Lifetime ₹999 plan' },
      { href: '/resume-builder-no-subscription', label: 'No-subscription builder' },
      { href: '/naukri-resume-builder-alternative', label: 'Naukri alternative' },
      { href: '/cv-prime-vs-zety', label: 'CV Prime vs Zety' },
      { href: '/cv-prime-vs-resume-io', label: 'CV Prime vs Resume.io' },
      { href: '/cv-prime-vs-canva', label: 'CV Prime vs Canva' },
      { href: '/cv-prime-vs-jobscan', label: 'CV Prime vs Jobscan' },
      { href: '/cv-prime-vs-overleaf', label: 'CV Prime vs Overleaf' },
      { href: '/cv-prime-vs-flowcv', label: 'CV Prime vs FlowCV' },
      { href: '/cv-prime-vs-resume-worded', label: 'CV Prime vs Resume Worded' },
      { href: '/cv-prime-vs-linkedin-resume', label: 'CV Prime vs LinkedIn Resume Builder' },
      { href: '/cv-prime-vs-teal', label: 'CV Prime vs Teal' },
      { href: '/cv-prime-vs-enhancv', label: 'CV Prime vs Enhancv' },
      { href: '/cv-prime-vs-kickresume', label: 'CV Prime vs Kickresume' },
      { href: '/cv-prime-vs-rezi', label: 'CV Prime vs Rezi' },
      { href: '/cv-prime-vs-resume-genius', label: 'CV Prime vs Resume Genius' },
      { href: '/cv-prime-vs-myperfectresume', label: 'CV Prime vs MyPerfectResume' },
      { href: '/cv-prime-vs-novoresume', label: 'CV Prime vs Novoresume' },
      { href: '/cv-prime-vs-google-docs', label: 'CV Prime vs Google Docs' },
      { href: '/cv-prime-vs-resumelab', label: 'CV Prime vs ResumeLab' },
      { href: '/cv-prime-vs-visualcv', label: 'CV Prime vs VisualCV' },
      { href: '/pricing', label: 'Pricing' },
    ],
  },
  {
    icon: MapPin,
    title: 'By city',
    desc: 'Resume builders tuned to each city\'s job market.',
    links: [
      { href: '/resume-builder-bangalore', label: 'Bangalore' },
      { href: '/resume-builder-mumbai', label: 'Mumbai' },
      { href: '/resume-builder-delhi', label: 'Delhi NCR' },
      { href: '/resume-builder-hyderabad', label: 'Hyderabad' },
      { href: '/resume-builder-chennai', label: 'Chennai' },
      { href: '/resume-builder-pune', label: 'Pune' },
      { href: '/resume-builder-kolkata', label: 'Kolkata' },
      { href: '/resume-builder-ahmedabad', label: 'Ahmedabad' },
    ],
  },
  {
    icon: Briefcase,
    title: 'By role',
    desc: 'Role-specific examples, salaries, and guides.',
    links: [
      { href: '/resume-examples', label: 'Resume examples by role' },
      { href: '/cv-examples', label: 'CV examples by role' },
      { href: '/salary', label: 'Salary guides by role' },
      { href: '/interview-questions', label: 'Interview questions by role' },
      { href: '/cover-letter-examples', label: 'Cover letter examples' },
      { href: '/linkedin-headline', label: 'LinkedIn headlines by role' },
      { href: '/software-engineer-resume', label: 'Software engineer resume' },
      { href: '/it-resume-builder', label: 'IT resume builder' },
    ],
  },
];

const faqs = [
  {
    q: 'What resume tools does CV Prime offer?',
    a: 'CV Prime offers a full set of free-to-start resume tools: an AI resume builder, an ATS score checker (0–100 against any job description), AI job-description tailoring, an AI bullet rewriter, a resume job match score, ATS-safe templates, an AI cover letter generator, and a job application tracker. It also publishes guides on ATS format, templates, and career stages, plus side-by-side comparisons with other resume builders. Everything is calibrated for the Indian job market.',
  },
  {
    q: 'Are CV Prime\'s resume tools free?',
    a: 'Yes, the core tools are free to start with no credit card — including ATS scoring, AI bullet rewrites, JD tailoring, and 3 clean PDF exports. Unlimited exports, no watermark, and premium templates unlock with a one-time ₹999 Lifetime Pro upgrade. There is no subscription.',
  },
  {
    q: 'Which tool should I start with?',
    a: 'If you already have a resume, start with the ATS score checker to see how it performs against a specific job description, then use JD tailoring and the AI rewriter to fix the gaps. If you are building from scratch, start with the AI resume builder and pick an ATS-safe template. Freshers should begin with the fresher or engineering-fresher resume guide to get the structure right first.',
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
    { '@type': 'ListItem', position: 2, name: 'Resume Tools', item: 'https://cv-prime.in/resume-tools' },
  ],
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'CV Prime Resume Tools & Guides',
  url: 'https://cv-prime.in/resume-tools',
  description: 'A directory of CV Prime resume tools, ATS tools, templates, guides, and comparisons for job seekers in India.',
};

export default function ResumeToolsPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <Sparkles className="h-4 w-4" />
            Every resume tool & guide in one place
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            CV Prime resume tools &amp; guides
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            The complete toolkit for getting hired in India: AI building and tailoring, ATS scoring, ATS-safe templates, format guides, and honest comparisons. Free to start — pick a tool and go.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Start building free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/ats-score-checker" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              Check my ATS score
            </Link>
          </div>
        </div>
      </section>

      {/* Groups */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {groups.map((g) => {
              const Icon = g.icon;
              return (
                <div key={g.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold text-white">{g.title}</h2>
                      <p className="text-sm text-slate-400">{g.desc}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {g.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm font-semibold text-slate-300 transition hover:border-brand hover:text-brand"
                      >
                        {l.label} →
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Resume tools — FAQ</h2>
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

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Pick a tool. Land the interview.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Build, tailor, score, and export your resume — all free to start. Upgrade once for ₹999 if you want unlimited.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Start building free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Start building free" message="Every CV Prime resume tool in one place — free to start" />
    </main>
  );
}
