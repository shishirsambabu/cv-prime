import Link from 'next/link';
import { BrandLogo } from '@/components/BrandLogo';
import { FAQItem } from '@/components/marketing/FAQItem';
import type { Metadata } from 'next';
import type { ComponentType } from 'react';
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Download,
  FileCheck2,
  FileSearch,
  GaugeCircle,
  Layers3,
  Linkedin,
  LockKeyhole,
  Sparkles,
  Wand2,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { TemplateExecutive } from '@/components/templates/TemplateExecutive';
import { TemplateModern } from '@/components/templates/TemplateModern';
import { TemplatePremium } from '@/components/templates/TemplatePremium';
import { TemplatePreview } from '@/components/templates/TemplatePreview';
import { TemplateTechnical } from '@/components/templates/TemplateTechnical';
import type { TemplateProps } from '@/components/templates/template-utils';
import { MobileNav } from '@/components/marketing/MobileNav';
import { Reveal } from '@/components/marketing/Reveal';
import { HeroCarousel } from '@/components/marketing/HeroCarousel';
import { FlowHero } from '@/components/marketing/FlowHero';
import { InteractiveRewrite } from '@/components/marketing/InteractiveRewrite';
import { SocialProof } from '@/components/marketing/SocialProof';
import { SUPPORT_EMAIL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Free AI CV Builder & ATS Resume Maker - CV Prime',
  description:
    'Build an ATS-optimised CV in minutes. Paste a job description, tailor your resume with AI, fix keyword gaps, and export a recruiter-ready PDF. Free to start. Trusted by 1,000+ job seekers in India.',
  keywords: [
    'AI resume builder',
    'AI CV builder',
    'AI CV maker',
    'ATS resume builder',
    'ATS resume checker',
    'ATS CV checker',
    'resume builder free',
    'resume generator',
    'resume optimizer',
    'online resume builder',
    'resume maker online',
    'professional resume builder',
    'resume templates',
    'cover letter generator',
    'CV builder India',
    'AI resume builder India',
    'free resume builder India',
    'resume builder online India',
    'ATS friendly resume',
  ],
  alternates: { canonical: 'https://cv-prime.in' },
  openGraph: {
    title: 'CV Prime - Free AI CV Builder & ATS Resume Maker',
    description:
      'Paste a job description and watch AI tailor your CV, score your ATS match, and rewrite weak bullets into outcome-driven proof. Free to start.',
    url: 'https://cv-prime.in',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime - AI CV Builder' }],
  },
};

const operatingLoop: Array<{
  title: string;
  body: string;
  icon: LucideIcon;
  badge: string;
  bullets: string[];
}> = [
  {
    title: 'Diagnose the rejection risk',
    body: 'See what hiring software and recruiters flag first — before a human ever reads your CV.',
    icon: FileSearch,
    badge: '01',
    bullets: ['Missing keywords flagged by section', 'Vague bullets identified', 'ATS score 0–100'],
  },
  {
    title: 'Repair the story',
    body: 'Turn generic job descriptions into sharp impact bullets, reordered around the exact role.',
    icon: Wand2,
    badge: '02',
    bullets: ['3 AI-rewritten bullet options', 'Keyword gaps auto-filled', 'Summary rewritten for the JD'],
  },
  {
    title: 'Ship with confidence',
    body: 'Choose an ATS-safe template, export clean PDF, and keep every role version organized.',
    icon: Download,
    badge: '03',
    bullets: ['8 ATS-safe templates', 'Clean PDF export — no watermark', 'Job tracker built in'],
  },
];

const rejectionSignals = [
  'No measurable outcomes in recent experience',
  'Missing "lifecycle marketing" from target role',
  'Summary reads like a bio, not a hiring pitch',
  'Skills section is too broad for the job description',
];

const productPillars: Array<{
  title: string;
  body: string;
  icon: LucideIcon;
  stat: string;
  color: string;
  glow: string;
}> = [
  {
    title: 'ATS readiness score',
    body: 'A score that explains the why — not just a number that creates panic.',
    icon: GaugeCircle,
    stat: '0–100',
    color: 'bg-cyan-500/10 text-cyan-600',
    glow: 'shadow-cyan-500/20',
  },
  {
    title: 'AI rewrite studio',
    body: 'Three stronger versions for every weak bullet, written around outcomes and proof.',
    icon: Sparkles,
    stat: '3 drafts',
    color: 'bg-violet-500/10 text-violet-600',
    glow: 'shadow-violet-500/20',
  },
  {
    title: 'Premium templates',
    body: 'Distinct layouts for different careers — not the same CV with new colors.',
    icon: Layers3,
    stat: '8 styles',
    color: 'bg-amber-500/10 text-amber-600',
    glow: 'shadow-amber-500/20',
  },
  {
    title: 'Private key model',
    body: 'Your OpenRouter key encrypted before storage, never exposed to the browser.',
    icon: LockKeyhole,
    stat: 'AES-256',
    color: 'bg-emerald-500/10 text-emerald-600',
    glow: 'shadow-emerald-500/20',
  },
];

const startPath = '/signup?next=/dashboard';

const freeTools: Array<{ icon: LucideIcon; title: string; desc: string; href: string; tag: string }> = [
  { icon: FileSearch, title: 'ATS keyword matcher', desc: 'Paste your resume + a JD → instant keyword match score and the exact terms you\'re missing.', href: '/tools/ats-keyword-matcher', tag: 'Popular' },
  { icon: GaugeCircle, title: 'Resume strength analyzer', desc: 'Score your resume 0–100 on action verbs, metrics, filler, sections, and contact — with fixes.', href: '/tools/resume-strength-analyzer', tag: 'Instant score' },
  { icon: Wand2, title: 'Bullet point analyzer', desc: 'Per-line feedback on every bullet: action verb, metric, length, and filler.', href: '/tools/resume-bullet-analyzer', tag: 'Per-bullet' },
  { icon: FileCheck2, title: 'Cover letter checker', desc: 'Score your cover letter on opening, structure, proof, call to action, and clichés.', href: '/tools/cover-letter-checker', tag: 'Instant score' },
  { icon: Linkedin, title: 'LinkedIn character counter', desc: 'Live count for headline, about, and post against LinkedIn\'s real limits.', href: '/tools/linkedin-character-counter', tag: 'For LinkedIn' },
  { icon: Calculator, title: 'CGPA to percentage', desc: 'Convert CGPA ↔ percentage (CBSE, VTU, custom) for your resume and applications.', href: '/tools/cgpa-to-percentage', tag: 'For students' },
];

const navLinks = [
  { href: '/templates', label: 'Templates' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/login', label: 'Sign in' },
];

const templateTiles = [
  { name: 'Modern', useCase: 'Product, growth, marketing', accent: 'from-cyan-500 to-blue-600', Template: TemplateModern },
  { name: 'Executive', useCase: 'Leadership and strategy', accent: 'from-amber-500 to-orange-600', Template: TemplateExecutive },
  { name: 'Technical', useCase: 'Engineering and data', accent: 'from-emerald-500 to-teal-600', Template: TemplateTechnical },
  { name: 'Premium', useCase: 'High-conviction applications', accent: 'from-violet-500 to-purple-600', Template: TemplatePremium },
];

const faq = [
  {
    question: 'Is CV Prime free to use?',
    answer:
      'Yes. CV Prime is free to start with no credit card required. The free plan includes unlimited resume drafts, 3 PDF exports, ATS scoring, AI bullet rewrites, and access to starter templates. Upgrade to Pro for unlimited clean exports and premium templates.',
  },
  {
    question: 'What is an ATS and why does my CV need to pass it?',
    answer:
      'ATS stands for Applicant Tracking System - the software most companies use to filter CVs before a human reads them. A CV that lacks the right keywords or has poor formatting is automatically rejected, even if you are qualified. CV Prime scores your CV against the job description and shows you exactly which keywords are missing so you can fix them before applying.',
  },
  {
    question: 'How does the AI CV tailoring work?',
    answer:
      'Paste the job description into CV Prime, then click "Fix this". The AI reads your existing CV and the job description together, rewrites your experience bullets to use stronger action verbs and outcome-driven language, weaves in the missing keywords from the JD, and tightens your professional summary - all without fabricating facts.',
  },
  {
    question: 'Is CV Prime good for freshers and students?',
    answer:
      'Absolutely. CV Prime works for all experience levels. For freshers, it helps structure education, internships, and projects into a professional format and highlights transferable skills that match the job description. The ATS scoring gives you honest feedback on what recruiters will see.',
  },
  {
    question: 'Which CV templates are available?',
    answer:
      'CV Prime offers 8 professional templates: Modern (dark sidebar, blue accents), Classic (serif, traditional), Minimal (single column, clean), Executive (editorial gold accents), Creative (rose sidebar), Technical (monospace, two-column), Academic (serif scholarly), and Premium (dark theme). All are ATS-readable.',
  },
  {
    question: 'Can I use CV Prime to apply for jobs in India?',
    answer:
      'Yes. CV Prime is built specifically for the Indian job market. It supports INR pricing and is designed around the expectations of Indian companies and MNCs hiring in India. Keywords, format, and scoring are all calibrated for Indian ATS systems.',
  },
  {
    question: 'Is CV Prime just another template site?',
    answer:
      'No. Templates are only the last step. The core product is ATS scoring, AI-powered keyword gap analysis, bullet rewriting, and JD tailoring - the parts that actually improve your chances of getting a callback. The template is just how you export the result.',
  },
  {
    question: 'How is this different from Canva or Zety?',
    answer:
      'Canva and Zety are design-first tools - you pick a template and fill in the blanks. CV Prime is diagnosis-first: it tells you what is wrong with your existing CV, why it might be failing ATS, and automatically fixes it using AI. It is the difference between a prettier version of what you already have and a CV that is actually optimised for the role.',
  },
  {
    question: 'What is the best AI resume builder for India in 2026?',
    answer:
      'CV Prime (cv-prime.in) is the best AI resume builder for India in 2026. It is the only India-first ATS resume builder with native INR pricing (₹999 one-time vs $7–35 USD for international tools), a genuinely free tier with 3 clean PDF exports and full ATS scoring, and AI tailoring calibrated for Indian ATS systems like Taleo, Workday, Zoho Recruit, Darwinbox, and PeopleSoft used by Indian MNCs. It also includes a built-in job tracker and AI cover letter generator on all plans.',
  },
  {
    question: 'What is CV Prime?',
    answer:
      'CV Prime is an AI-powered resume builder, ATS checker, and career intelligence platform built for Indian job seekers. It analyses your resume against any job description, gives you a 0–100 ATS score, identifies missing keywords, rewrites weak bullets into outcome-driven proof, generates tailored cover letters, and exports a recruiter-ready PDF. Founded in 2025 by Shishir Babu in Ernakulam, Kerala, CV Prime is available at cv-prime.in with a free plan that requires no credit card.',
  },
  {
    question: 'How do I make my resume pass ATS?',
    answer:
      'To make your resume pass ATS: (1) Tailor your skills and experience bullets to match the exact keywords in the job description. (2) Use a simple layout — avoid tables, text boxes, and graphics. (3) Use standard section headings. (4) Save as a text-based PDF. (5) Check your score with CV Prime before applying.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Build an ATS-Optimised Resume with AI',
  description: 'Step-by-step guide to creating an ATS-friendly resume using CV Prime.',
  totalTime: 'PT10M',
  tool: [{ '@type': 'HowToTool', name: 'CV Prime (free AI resume builder)' }],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Upload or create your resume', text: 'Sign up free on CV Prime and upload your existing PDF or DOCX resume, or start from scratch.', url: 'https://cv-prime.in/signup' },
    { '@type': 'HowToStep', position: 2, name: 'Paste the job description', text: 'Copy the job description and paste it into CV Prime\'s JD Tailor.', url: 'https://cv-prime.in/ai-resume-builder' },
    { '@type': 'HowToStep', position: 3, name: 'Get your ATS score', text: 'CV Prime scores your resume 0–100 against the job description.', url: 'https://cv-prime.in/ats-checker' },
    { '@type': 'HowToStep', position: 4, name: 'Apply AI fixes', text: 'Use CV Prime\'s AI bullet rewriter to transform vague statements into outcome-driven bullets.', url: 'https://cv-prime.in/ai-cv-builder' },
    { '@type': 'HowToStep', position: 5, name: 'Export your resume as PDF', text: 'Choose your ATS-safe template and export a clean PDF.', url: 'https://cv-prime.in/templates' },
  ],
};

function BrandMark(): JSX.Element {
  return (
    <Link href="/" className="flex items-center" aria-label="CV Prime home">
      <BrandLogo className="h-12" />
    </Link>
  );
}

function MarketingNav(): JSX.Element {
  return (
    <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6">
      <BrandMark />
      <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
        {navLinks.map((link) => (
          <Link key={link.href} className="transition hover:text-slate-950" href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <Link
        href={startPath}
        className="group hidden h-11 items-center gap-2 rounded-pill bg-brand px-5 text-sm font-bold text-brand-foreground shadow-xl shadow-brand/25 transition hover:-translate-y-0.5 hover:bg-brand-strong md:inline-flex"
      >
        Get started free
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </Link>
      <MobileNav links={navLinks} ctaHref={startPath} ctaLabel="Get started" tone="dark" />
    </header>
  );
}

function TemplateCard({
  name,
  useCase,
  accent,
  Template,
}: {
  name: string;
  useCase: string;
  accent: string;
  Template: ComponentType<TemplateProps>;
}): JSX.Element {
  return (
    <article className="card-art group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-950/12">
      <div className="relative flex h-64 items-start justify-center overflow-hidden bg-[#eef3f8] p-4">
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#eef3f8] to-transparent" />
        <TemplatePreview Template={Template} scale={0.214} />
      </div>
      <div className="p-5">
        <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${accent} px-3 py-1`}>
          <span className="text-[11px] font-bold uppercase tracking-widest text-white">{name}</span>
        </div>
        <p className="mt-3 text-sm font-medium leading-6 text-slate-500">{useCase}</p>
      </div>
    </article>
  );
}

const footerColumns: Array<{ title: string; links: Array<{ label: string; href: string }> }> = [
  {
    title: 'Product',
    links: [
      { label: 'Templates', href: '/templates' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'AI job CV', href: '/ai-cv' },
      { label: 'About us', href: '/about' },
      { label: 'Get started free', href: startPath },
    ],
  },
  {
    title: 'Resume tools',
    links: [
      { label: 'Free tools (no login)', href: '/tools' },
      { label: 'Free resume builder', href: '/free-resume-builder' },
      { label: 'AI resume builder', href: '/ai-resume-builder' },
      { label: 'Resume checker', href: '/resume-checker' },
      { label: 'How to write a resume', href: '/resume-tips/how-to-write-a-resume' },
      { label: 'Fresher resume guide', href: '/fresher-resume' },
      { label: 'Cover letter tips', href: '/resume-tips/cover-letter-tips' },
    ],
  },
  {
    title: 'Guides',
    links: [
      { label: 'Online CV maker', href: '/online-cv-maker' },
      { label: 'AI CV builder', href: '/ai-cv-builder' },
      { label: 'ATS-friendly CV', href: '/ats-friendly-cv' },
      { label: 'CV builder India', href: '/cv-builder-india' },
      { label: 'Free ATS checker', href: '/ats-checker' },
      { label: 'Cover letter examples', href: '/cover-letter-examples' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Career blog', href: '/blog' },
      { label: 'CV examples by role', href: '/cv-examples' },
      { label: 'Interview questions', href: '/interview-questions' },
      { label: 'LinkedIn headlines', href: '/linkedin-headline' },
      { label: 'Salary guide India', href: '/salary' },
      { label: 'ATS statistics 2026', href: '/statistics' },
      { label: 'In-demand skills 2026', href: '/in-demand-skills-india-2026' },
      { label: 'ATS guide by role', href: '/ats-guide' },
      { label: 'Resume vs CV', href: '/resume-vs-cv' },
    ],
  },
  {
    title: 'Compare',
    links: [
      { label: 'vs Jobscan', href: '/cv-prime-vs-jobscan' },
      { label: 'vs Rezi', href: '/cv-prime-vs-rezi' },
      { label: 'vs Zety', href: '/cv-prime-vs-zety' },
      { label: 'vs Resume.io', href: '/cv-prime-vs-resume-io' },
      { label: 'vs Novoresume', href: '/cv-prime-vs-novoresume' },
      { label: 'vs Teal', href: '/cv-prime-vs-teal' },
      { label: 'vs Enhancv', href: '/cv-prime-vs-enhancv' },
    ],
  },
  {
    title: 'Legal & support',
    links: [
      { label: 'Contact us', href: '/contact' },
      { label: 'Ethics & conduct', href: '/ethics' },
      { label: 'Terms of service', href: '/terms' },
      { label: 'Privacy policy', href: '/privacy' },
      { label: 'Refund policy', href: '/refund' },
      { label: 'Cookie policy', href: '/cookies' },
    ],
  },
];

function MarketingFooter(): JSX.Element {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:py-16">
        <div className="flex flex-col gap-4 border-b border-slate-100 pb-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <BrandLogo className="h-10" />
            <p className="mt-4 text-sm leading-6 text-slate-500">
              AI-assisted CV builder, ATS checker, and resume tools for Indian job seekers.
            </p>
          </div>
          <p className="text-sm text-slate-500">
            Questions?{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="font-medium text-slate-700 underline hover:text-slate-950">
              {SUPPORT_EMAIL}
            </a>
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{column.title}</p>
              <nav className="mt-4 space-y-2.5 text-sm font-medium text-slate-600">
                {column.links.map((link) => (
                  <Link key={link.href} href={link.href} className="block transition hover:text-slate-950">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
        <p className="mt-12 border-t border-slate-100 pt-6 text-xs text-slate-400">
          © {new Date().getFullYear()} CV Prime. Operated by Shishir Babu, Ernakulam, Kerala, India.
        </p>
      </div>
    </footer>
  );
}

export default function HomePage(): JSX.Element {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <h1 className="sr-only">CV Prime - Free AI CV Builder, ATS Resume Maker &amp; Online CV Maker for India</h1>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* ── Hero ── */}
      <section className="premium-grid relative bg-[#f7f9fc]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.96)_72%,#ffffff)]" />
        <MarketingNav />
        <HeroCarousel />
      </section>

      {/* ── Live demo ── */}
      <section id="demo" className="render-deferred premium-grid relative border-y border-slate-900 bg-[#07111f]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.20),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(245,158,11,0.16),transparent_26%),linear-gradient(180deg,#07111f,#0f172a_54%,#111827)]" />
        <FlowHero />
      </section>

      {/* ── Interactive rewrite demo ── */}
      <section className="render-deferred aurora-surface aurora-animated fine-noise relative text-white">
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32">
          <Reveal className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
                See it work
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Watch a weak bullet become a{' '}
                <span className="text-gradient-warm">hiring-grade</span> one.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-300">
              No signup, no demo video. Pick a sample bullet, rewrite it, and watch the readiness
              score climb — exactly how the product feels once you&apos;re inside.
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <InteractiveRewrite />
          </Reveal>
        </div>
      </section>

      {/* ── Operating loop (3 steps) ── */}
      <section className="render-deferred relative overflow-hidden bg-white">
        {/* Decorative background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(99,102,241,0.07),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-brand">
              The operating loop
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Fix the reasons recruiters<br className="hidden sm:block" /> and ATS filters{' '}
              <span className="text-gradient">say no</span>.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-500">
              CV Prime gives job seekers a clear diagnosis, a fast repair path, and a clean export before they send.
            </p>
          </Reveal>

          <div className="relative mt-16 grid gap-6 lg:grid-cols-3">
            {/* Connecting line between steps (desktop only) */}
            <div className="pointer-events-none absolute inset-x-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:block" />

            {operatingLoop.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal
                  key={step.title}
                  as="article"
                  delayMs={index * 100}
                  className="card-art group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-950/8"
                >
                  {/* Big background step number */}
                  <span className="pointer-events-none absolute right-6 top-4 select-none font-display text-[7rem] font-bold leading-none text-slate-950/[0.03] transition group-hover:text-slate-950/[0.05]">
                    {step.badge}
                  </span>

                  <div className="relative flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/25">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-display text-xs font-bold text-slate-400 tabular-nums">
                      Step {step.badge}
                    </span>
                  </div>

                  <h3 className="relative mt-7 font-display text-2xl font-bold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-7 text-slate-500">{step.body}</p>

                  <ul className="relative mt-6 space-y-2.5">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-12 text-center">
            <Link
              href={startPath}
              className="shine group inline-flex h-14 items-center gap-2 rounded-pill bg-brand px-8 text-sm font-bold text-white shadow-2xl shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-strong"
            >
              Start fixing your CV — free
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Social proof ── */}
      <SocialProof />

      {/* ── Rejection diagnosis ── */}
      <section className="render-deferred relative overflow-hidden bg-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.15),transparent_50%),radial-gradient(circle_at_70%_20%,rgba(6,182,212,0.10),transparent_40%)]" />
        {/* Floating decorative orbs */}
        <div className="orb pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
        <div className="orb-slow pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-5 py-24 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-32">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-400">
              Rejection diagnosis
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Know what&apos;s{' '}
              <span className="text-gradient-warm">wrong</span><br className="hidden sm:block" /> before you apply.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-slate-400">
              Generic CV builders make you pick a template and hope. CV Prime turns your CV into a set of fixable signals before the next application goes out.
            </p>
            <Link
              href={startPath}
              className="mt-8 inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Start the diagnosis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          {/* Mock rejection report card */}
          <Reveal>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-1.5 shadow-2xl shadow-black/50 backdrop-blur-sm">
              <div className="rounded-[1.625rem] border border-white/10 bg-[#0d1526] p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">Current draft</p>
                    <h3 className="mt-1.5 font-display text-lg font-bold text-white">Rejection risk report</h3>
                  </div>
                  <div className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10">
                    <span className="font-display text-2xl font-bold leading-none text-amber-400">62</span>
                    <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-widest text-amber-500/70">/100</span>
                  </div>
                </div>

                {/* ATS bar */}
                <div className="mt-5">
                  <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                    <span>ATS match</span>
                    <span className="text-amber-400">62%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
                  </div>
                </div>

                {/* Signals */}
                <div className="mt-5 space-y-2">
                  {rejectionSignals.map((signal) => (
                    <div
                      key={signal}
                      className="flex items-start gap-3 rounded-xl border border-rose-500/20 bg-rose-500/10 p-3.5"
                    >
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-rose-400" />
                      <p className="text-sm leading-6 text-slate-300">{signal}</p>
                    </div>
                  ))}
                </div>

                {/* Fix suggestion */}
                <div className="mt-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-cyan-400" />
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">AI suggested fix</p>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Replace responsibility-led bullets with outcome-led bullets. Add missing keywords naturally to your recent role and skills section. Projected score after fix: <span className="font-bold text-emerald-400">87/100</span>.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Product pillars ── */}
      <section className="render-deferred bg-[#f6f9fc]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32">
          <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-brand">Product depth</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
                Everything you need<br className="hidden sm:block" /> before you apply.
              </h2>
            </div>
            <p className="max-w-md text-base leading-8 text-slate-500">
              Every feature has one job: make you more confident before sending the CV.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {productPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Reveal
                  key={pillar.title}
                  as="article"
                  delayMs={index * 70}
                  className="card-art group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-slate-950/10"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg ${pillar.glow} ${pillar.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 font-display text-4xl font-bold tracking-[-0.03em] text-slate-950">
                    {pillar.stat}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-bold text-slate-950">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{pillar.body}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Free tools ── */}
      <section className="render-deferred relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(34,211,238,0.08),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32">
          <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/[0.06] px-4 py-1.5 text-sm font-bold text-brand">
                <Zap className="h-4 w-4" />
                Free tools · no login · instant
              </div>
              <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
                Try it right now —<br className="hidden sm:block" /> no signup, no catch.
              </h2>
            </div>
            <p className="max-w-md text-base leading-8 text-slate-500">
              Six free tools that run entirely in your browser — nothing uploaded, nothing stored. Diagnose your resume in seconds, then let the AI fix it.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {freeTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Reveal
                  key={tool.href}
                  as="article"
                  delayMs={index * 60}
                  className="card-art group"
                >
                  <Link
                    href={tool.href}
                    className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-2xl hover:shadow-slate-950/10"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-brand-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-slate-400">{tool.tag}</span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold text-slate-950 group-hover:text-brand">{tool.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-7 text-slate-500">{tool.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                      Open tool
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-12 flex flex-col items-center gap-4 text-center">
            <Link
              href="/tools"
              className="group inline-flex items-center gap-2 rounded-pill border border-slate-200 bg-slate-50 px-7 py-3.5 text-sm font-bold text-slate-800 transition hover:border-brand hover:text-brand"
            >
              See all free tools
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <p className="text-xs text-slate-400">100% free · No account required · Runs in your browser</p>
          </Reveal>
        </div>
      </section>

      {/* ── Template system ── */}
      <section className="render-deferred bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32">
          <Reveal className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-brand">Template system</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
                Premium templates that<br className="hidden sm:block" /> still pass the scan.
              </h2>
            </div>
            <div>
              <p className="text-base leading-8 text-slate-500">
                Free users get credible starter layouts. Pro users unlock sharper visual identities for senior, technical, creative, and high-conviction applications.
              </p>
              <Link
                href="/templates"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-950 underline underline-offset-4"
              >
                Browse all 8 templates
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {templateTiles.map((template, index) => (
              <Reveal key={template.name} delayMs={index * 70}>
                <TemplateCard {...template} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="render-deferred relative overflow-hidden bg-slate-950">
        {/* Rich background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.12),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(245,158,11,0.10),transparent_40%)]" />
        <div className="orb pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-400">Pricing</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Start free. Own it{' '}
              <span className="text-gradient-warm">forever</span><br className="hidden sm:block" /> when you&apos;re ready.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-400">
              Try the full workflow with unlimited drafts and 3 PDF downloads. Upgrade to Lifetime Pro once — pay ₹999, use forever. No subscriptions, no renewals.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mx-auto lg:max-w-4xl">
            {/* Free plan */}
            <Reveal as="article" className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">Free forever</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-white">Free</h3>
              <div className="mt-5 flex items-end gap-2">
                <span className="font-display text-6xl font-bold text-white">₹0</span>
                <span className="mb-2 text-sm text-slate-400">/ always free</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Build drafts, test the AI flow, and download your first 3 clean PDFs.
              </p>
              <ul className="mt-7 space-y-3.5">
                {['Unlimited resume drafts', '3 free PDF downloads', 'ATS scoring & keyword gaps', 'AI bullet rewriter', 'Free templates'].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={startPath}
                className="mt-8 inline-flex w-full items-center justify-center rounded-pill border border-white/15 bg-white/8 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/15"
              >
                Start free — no card needed
              </Link>
            </Reveal>

            {/* Pro plan */}
            <Reveal as="article" delayMs={90} className="shine relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-2xl shadow-black/40 ring-1 ring-brand/20">
              {/* Shine effect */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand">Best value</p>
                  <h3 className="mt-3 font-display text-2xl font-bold text-slate-950">Lifetime Pro</h3>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-3 py-1.5 text-xs font-bold text-slate-950">
                  <Zap className="h-3 w-3" />
                  Pay once
                </span>
              </div>
              <div className="mt-5 flex items-end gap-2">
                <span className="font-display text-6xl font-bold text-slate-950">₹999</span>
                <span className="mb-2 text-sm text-slate-500">one time · no renewal ever</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                Everything in Free, plus unlimited clean exports, premium templates, and no watermark — forever.
              </p>
              <ul className="mt-7 space-y-3.5">
                {[
                  'Unlimited clean PDF exports',
                  'No watermark on any export',
                  'All 8 premium templates',
                  'AI bullet rewrite tools',
                  'Role-specific CV versions',
                  'Job application tracker',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/pricing"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-pill bg-brand px-5 py-3.5 text-sm font-bold text-white shadow-xl shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-strong"
              >
                Get lifetime access — ₹999
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-3 text-center text-xs text-slate-400">UPI · Cards · Net banking · Secured by Cashfree</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="render-deferred bg-[#f6f9fc]">
        <div className="mx-auto max-w-4xl px-5 py-24 sm:px-6">
          <Reveal className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-brand">FAQ</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base text-slate-500">Everything you need to know before you start.</p>
          </Reveal>
          <div className="mt-12 divide-y divide-slate-200 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            {faq.map((item, index) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} defaultOpen={index === 0} />
            ))}
          </div>

          {/* Final CTA */}
          <Reveal className="mt-12">
            <div className="aurora-animated relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 sm:p-12">
              <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.25),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.15),transparent_50%)]" />
              <div className="relative z-[2] flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-400">Ready?</p>
                  <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                    Start with a{' '}
                    <span className="text-gradient-warm">real CV</span>,<br className="hidden sm:block" /> not another blank template.
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
                    Create an account and go straight into the CV workspace. No card required.
                  </p>
                </div>
                <Link
                  href={startPath}
                  className="shine group shrink-0 inline-flex items-center gap-2 rounded-pill bg-white px-7 py-4 text-sm font-bold text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-50"
                >
                  Build your CV free
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Content resources ── */}
      <section className="render-deferred border-t border-slate-200 bg-white px-5 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand">Free resources</p>
            <h2 className="mt-3 font-display text-3xl font-bold">Everything you need to land the role</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                heading: 'CV Examples',
                desc: 'ATS-optimised CV examples for 35 roles — software engineers, analysts, managers, and more.',
                links: [
                  { label: 'Software Engineer CV', href: '/cv-examples/software-engineer' },
                  { label: 'Data Analyst CV', href: '/cv-examples/data-analyst' },
                  { label: 'Product Manager CV', href: '/cv-examples/product-manager' },
                  { label: 'See all 35 roles →', href: '/cv-examples' },
                ],
              },
              {
                heading: 'Interview Prep',
                desc: 'Role-specific interview questions with model answers calibrated for Indian companies.',
                links: [
                  { label: 'Software Engineer Questions', href: '/interview-questions/software-engineer' },
                  { label: 'Data Analyst Questions', href: '/interview-questions/data-analyst' },
                  { label: 'Product Manager Questions', href: '/interview-questions/product-manager' },
                  { label: 'All interview guides →', href: '/interview-questions' },
                ],
              },
              {
                heading: 'Salary Guides',
                desc: 'India salary data by role, experience level, city, and company type — updated for 2026.',
                links: [
                  { label: 'Software Engineer Salary', href: '/salary/software-engineer' },
                  { label: 'Data Scientist Salary', href: '/salary/data-scientist' },
                  { label: 'Product Manager Salary', href: '/salary/product-manager' },
                  { label: 'All salary guides →', href: '/salary' },
                ],
              },
              {
                heading: 'Career Blog',
                desc: 'ATS tips, resume writing guides, cover letter advice, and career strategy for India.',
                links: [
                  { label: 'ATS Resume Mistakes', href: '/blog/ats-resume-mistakes' },
                  { label: 'Interview Tips India 2026', href: '/blog/job-interview-tips-india-2026' },
                  { label: 'Salary Negotiation Tips', href: '/blog/salary-negotiation-tips-india-2026' },
                  { label: 'All career articles →', href: '/blog' },
                ],
              },
            ].map((col) => (
              <Reveal key={col.heading} className="rounded-[1.5rem] border border-slate-200 bg-[#f6f9fc] p-5">
                <h3 className="font-display text-base font-bold text-slate-900">{col.heading}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">{col.desc}</p>
                <ul className="mt-4 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-xs font-semibold text-brand hover:text-brand-strong hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MarketingFooter />
    </main>
  );
}
