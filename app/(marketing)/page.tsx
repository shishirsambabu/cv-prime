import Link from 'next/link';
import { FAQItem } from '@/components/marketing/FAQItem';
import type { Metadata } from 'next';
import type { ComponentType, CSSProperties } from 'react';
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  FileSearch,
  FileText,
  GaugeCircle,
  Layers3,
  Linkedin,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  TrendingUp,
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
import { Reveal } from '@/components/marketing/Reveal';
import { HeroCarousel } from '@/components/marketing/HeroCarousel';
import { CollapsibleDemo } from '@/components/marketing/CollapsibleDemo';
import { InteractiveRewrite } from '@/components/marketing/InteractiveRewrite';
import { SocialProof } from '@/components/marketing/SocialProof';
import { ScoreRing } from '@/components/marketing/ScoreRing';

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

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'CV Prime',
  url: 'https://cv-prime.in',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'Build an ATS-optimised CV in minutes. Paste a job description, let AI tailor your bullets and keywords, score your match, and export a clean PDF.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Free Plan',
      price: '0',
      priceCurrency: 'INR',
      description: '3 PDF exports, ATS scoring, AI rewrites, all templates.',
    },
    {
      '@type': 'Offer',
      name: 'Lifetime Pro',
      price: '999',
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '999',
        priceCurrency: 'INR',
        unitText: 'ONE_TIME',
      },
      description: 'Lifetime access — unlimited PDF exports, no watermark, all premium features. Pay once, use forever.',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '312',
    bestRating: '5',
    worstRating: '1',
  },
  featureList: [
    'AI CV tailoring to job description',
    'ATS keyword gap analysis and scoring',
    'Bullet rewriter with outcome focus',
    'PDF export with print-to-PDF',
    '8 professional CV templates',
    'Job application tracker',
    'AI cover letter generator',
    'Before and after CV comparison',
    'Free ATS resume checker',
    'CV examples for 49 roles across tech, business, and operations',
    'Interview question guides for 49 roles',
    'Salary guides for 49 roles in India',
    'LinkedIn headline templates for 49 roles',
    'ATS optimisation guides for 49 roles',
    'Cover letter examples for 49 roles',
  ],
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
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_30px_70px_-30px_rgba(245,158,11,0.4)]">
      <div className="relative flex h-64 items-start justify-center overflow-hidden bg-[#eef3f8] p-4">
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#eef3f8] to-transparent" />
        <TemplatePreview Template={Template} scale={0.214} />
      </div>
      <div className="p-5">
        <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${accent} px-3 py-1`}>
          <span className="text-[11px] font-bold uppercase tracking-widest text-white">{name}</span>
        </div>
        <p className="mt-3 text-sm font-medium leading-6 text-slate-400">{useCase}</p>
      </div>
    </article>
  );
}

export default function HomePage(): JSX.Element {
  return (
    <main className="overflow-hidden bg-[#04060c] text-slate-100">
      <h1 className="sr-only">CV Prime - Free AI CV Builder, ATS Resume Maker &amp; Online CV Maker for India</h1>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />

      {/* ── Hero (cinematic obsidian) ── */}
      <section id="hero" className="cinematic-dark grain spotlight-top relative overflow-hidden text-white">
        {/* Slowly drifting aurora mesh — the cold open */}
        <div className="ken-burns pointer-events-none absolute inset-0 bg-[radial-gradient(60%_52%_at_50%_-8%,rgba(139,92,246,0.30),transparent_60%),radial-gradient(46%_42%_at_86%_6%,rgba(34,211,238,0.24),transparent_60%),radial-gradient(48%_48%_at_8%_32%,rgba(217,70,239,0.18),transparent_62%),radial-gradient(40%_40%_at_94%_74%,rgba(99,102,241,0.16),transparent_60%)]" />
        {/* Faint architectural grid (light lines for the dark act) */}
        <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:46px_46px] [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent_75%)]" />
        {/* Floating glow orbs */}
        <div className="orb pointer-events-none absolute -left-24 top-8 h-96 w-96 rounded-full bg-violet-600/25 blur-3xl" />
        <div className="orb-slow pointer-events-none absolute right-0 top-24 h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="orb pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl" />
        {/* Drifting light beams + streaking light trails */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Wide, soft searchlight beams */}
          <div className="hero-beam-anim absolute -left-1/4 top-[10%] h-[38%] w-[95%]" style={{ '--ang': '-18deg', '--op': 0.16, animationDuration: '16s' } as CSSProperties}>
            <div className="h-full w-full bg-gradient-to-r from-transparent via-violet-500/25 to-transparent blur-3xl" />
          </div>
          <div className="hero-beam-anim absolute -right-1/4 top-[46%] h-[42%] w-[95%]" style={{ '--ang': '13deg', '--op': 0.14, animationDuration: '21s', animationDelay: '-6s' } as CSSProperties}>
            <div className="h-full w-full bg-gradient-to-r from-transparent via-cyan-500/22 to-transparent blur-3xl" />
          </div>
          {/* Streaking light trails (comet lines crossing the backdrop) */}
          <div className="hero-streak absolute left-0 top-[16%] h-px w-[62%]" style={{ '--ang': '-22deg', '--op': 0.65, animationDuration: '9s' } as CSSProperties}>
            <div className="h-full w-full rounded-full bg-gradient-to-r from-transparent via-cyan-300/40 to-cyan-100 shadow-[0_0_14px_2px_rgba(34,211,238,0.6)]" />
          </div>
          <div className="hero-streak absolute left-0 top-[34%] h-px w-[52%]" style={{ '--ang': '-20deg', '--op': 0.5, animationDuration: '13s', animationDelay: '-4s' } as CSSProperties}>
            <div className="h-full w-full rounded-full bg-gradient-to-r from-transparent via-violet-300/40 to-violet-100 shadow-[0_0_14px_2px_rgba(139,92,246,0.6)]" />
          </div>
          <div className="hero-streak absolute left-0 top-[58%] h-px w-[70%]" style={{ '--ang': '-26deg', '--op': 0.55, animationDuration: '11s', animationDelay: '-7s' } as CSSProperties}>
            <div className="h-full w-full rounded-full bg-gradient-to-r from-transparent via-fuchsia-300/40 to-fuchsia-100 shadow-[0_0_14px_2px_rgba(217,70,239,0.55)]" />
          </div>
          <div className="hero-streak absolute left-0 top-[74%] h-px w-[48%]" style={{ '--ang': '-19deg', '--op': 0.45, animationDuration: '15s', animationDelay: '-2s' } as CSSProperties}>
            <div className="h-full w-full rounded-full bg-gradient-to-r from-transparent via-cyan-300/35 to-cyan-100 shadow-[0_0_12px_2px_rgba(34,211,238,0.5)]" />
          </div>
          <div className="hero-streak absolute left-0 top-[90%] h-px w-[58%]" style={{ '--ang': '-23deg', '--op': 0.4, animationDuration: '17s', animationDelay: '-10s' } as CSSProperties}>
            <div className="h-full w-full rounded-full bg-gradient-to-r from-transparent via-indigo-300/35 to-indigo-100 shadow-[0_0_12px_2px_rgba(99,102,241,0.5)]" />
          </div>
        </div>
        <HeroCarousel />
        {/* Glowing beam transition into the dark demo act */}
        <div className="beam absolute inset-x-0 bottom-0" />
      </section>

      {/* ── Live demo ── */}
      <section id="demo" className="render-deferred grain spotlight-top relative overflow-hidden border-y border-white/5 bg-[#060a14] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-8%,rgba(99,102,241,0.22),transparent_60%),radial-gradient(46%_40%_at_85%_10%,rgba(34,211,238,0.20),transparent_60%),radial-gradient(40%_40%_at_10%_30%,rgba(217,70,239,0.14),transparent_62%),linear-gradient(180deg,#060a14,#0a1322_55%,#060a14)]" />
        <div className="orb pointer-events-none absolute -left-24 top-24 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="orb-slow pointer-events-none absolute -right-24 top-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <CollapsibleDemo />
        <div className="beam absolute inset-x-0 bottom-0" />
      </section>

      {/* ── Interactive rewrite demo (vivid transformation act) ── */}
      <section id="rewrite" className="render-deferred aurora-animated grain relative overflow-hidden bg-[#04070e] text-white">
        <div className="beam absolute inset-x-0 top-0" />
        {/* Vivid emerald/cyan "upgrade" grade — distinct from the violet hero and blue demo */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(58%_48%_at_50%_-6%,rgba(16,185,129,0.22),transparent_60%),radial-gradient(46%_44%_at_86%_10%,rgba(34,211,238,0.24),transparent_60%),radial-gradient(52%_52%_at_8%_92%,rgba(139,92,246,0.16),transparent_64%)]" />
        {/* Focusing spotlight cone on the headline */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(58%_44%_at_50%_-8%,rgba(255,255,255,0.12),transparent_60%)]" />
        {/* Floating orbs */}
        <div className="orb pointer-events-none absolute -left-24 top-16 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="orb-slow pointer-events-none absolute -right-20 bottom-10 h-[26rem] w-[26rem] rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="orb pointer-events-none absolute bottom-1/3 left-1/3 h-72 w-72 rounded-full bg-violet-500/12 blur-3xl" />
        {/* Vignette */}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_200px_52px_rgba(2,6,23,0.6)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-28 sm:px-6 lg:py-36">
          <Reveal className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-emerald-200 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 glow-pulse" />
                See it work
              </span>
              <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold tracking-[-0.04em] text-glow sm:text-5xl lg:text-6xl">
                Watch a weak bullet become a{' '}
                <span className="text-gradient-warm">hiring-grade</span> one.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-300">
              No signup, no demo video. Pick a sample bullet, rewrite it, and watch the readiness
              score climb — exactly how the product feels once you&apos;re inside.
            </p>
          </Reveal>
          <Reveal className="relative mt-12">
            {/* Luminous frame so the demo reads as the section's focal point */}
            <div className="pointer-events-none absolute -inset-4 rounded-[2.8rem] bg-[radial-gradient(60%_60%_at_50%_40%,rgba(16,185,129,0.25),transparent_70%)] blur-2xl" />
            <div className="relative rounded-panel bg-gradient-to-b from-white/20 via-white/[0.06] to-transparent p-px shadow-[0_50px_140px_-50px_rgba(16,185,129,0.55)]">
              <InteractiveRewrite />
            </div>
          </Reveal>
        </div>
        <div className="beam absolute inset-x-0 bottom-0" />
      </section>

      {/* ── Rejection diagnosis ── */}
      <section id="diagnosis" className="render-deferred grain spotlight-top relative overflow-hidden bg-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.15),transparent_50%),radial-gradient(circle_at_70%_20%,rgba(6,182,212,0.10),transparent_40%)]" />
        {/* Floating decorative orbs */}
        <div className="orb pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
        <div className="orb-slow pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-5 py-24 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-32">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 glow-pulse" />
              Rejection diagnosis
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-white text-glow sm:text-5xl lg:text-6xl">
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
          <Reveal className="relative">
            <div className="pointer-events-none absolute -inset-6 rounded-[2.6rem] bg-[radial-gradient(60%_60%_at_60%_40%,rgba(139,92,246,0.35),transparent_70%)] blur-2xl" />
            <div className="relative rounded-[2rem] bg-gradient-to-br from-violet-400/40 via-white/10 to-cyan-400/30 p-px shadow-[0_50px_120px_-40px_rgba(139,92,246,0.6)]">
              <div className="rounded-[2rem] border border-white/10 bg-[#0b0a16] p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">Current draft</p>
                    <h3 className="mt-1.5 font-display text-lg font-bold text-white">Rejection risk report</h3>
                  </div>
                  <ScoreRing value={62} size={76} hole="#0b0a16" />
                </div>

                {/* ATS bar */}
                <div className="mt-5">
                  <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                    <span>ATS match</span>
                    <span className="text-cyan-300">62%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400" />
                  </div>
                </div>

                {/* Signals */}
                <div className="mt-5 space-y-2">
                  {rejectionSignals.map((signal) => (
                    <div
                      key={signal}
                      className="flex items-center gap-3 rounded-xl border border-rose-500/20 bg-rose-500/[0.08] p-3.5"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-rose-500/15 text-rose-300">
                        <ArrowRight className="h-3.5 w-3.5 -rotate-45" />
                      </span>
                      <p className="flex-1 text-sm leading-6 text-slate-300">{signal}</p>
                      <ChevronRight className="h-4 w-4 shrink-0 text-slate-600" />
                    </div>
                  ))}
                </div>

                {/* Fix suggestion */}
                <div className="mt-5 rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.08] p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-emerald-300" />
                      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300">AI suggested fix</p>
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-300">
                      <TrendingUp className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Replace responsibility-led bullets with outcome-led bullets. Add missing keywords naturally to your recent role and skills section. Projected score after fix: <span className="font-bold text-emerald-300">87/100</span>.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Product depth (violet/obsidian bento act) ── */}
      <section id="features" className="render-deferred spotlight-top grain relative overflow-hidden bg-[#080611] text-white">
        <div className="beam absolute inset-x-0 top-0" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_0%,rgba(139,92,246,0.22),transparent_60%),radial-gradient(45%_40%_at_85%_14%,rgba(217,70,239,0.16),transparent_60%),radial-gradient(52%_52%_at_10%_92%,rgba(34,211,238,0.12),transparent_64%)]" />
        <div className="orb pointer-events-none absolute -left-24 top-24 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="orb-slow pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-28 sm:px-6 lg:py-36">
          <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-violet-200 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 glow-pulse" />
                Product depth
              </span>
              <h2 className="mt-5 max-w-2xl font-display text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-glow sm:text-6xl">
                Everything you need<br className="hidden sm:block" /> before you <span className="text-gradient-warm">apply</span>.
              </h2>
            </div>
            <p className="max-w-md text-base leading-8 text-slate-300">
              Every feature has one job: make you more confident before sending the CV.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {productPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const big = index === 0 || index === 3;
              return (
                <Reveal
                  key={pillar.title}
                  as="article"
                  delayMs={index * 80}
                  className={`group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_30px_70px_-30px_rgba(139,92,246,0.5)] ${big ? 'sm:col-span-2 lg:col-span-4' : 'lg:col-span-2'}`}
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/20 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/40 to-fuchsia-500/20 text-violet-200 ring-1 ring-white/10 transition group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className={`relative mt-5 font-display font-bold tracking-[-0.03em] text-gradient-warm ${big ? 'text-5xl sm:text-6xl' : 'text-4xl'}`}>
                    {pillar.stat}
                  </p>
                  <h3 className="relative mt-3 font-display text-lg font-bold text-white">{pillar.title}</h3>
                  <p className="relative mt-2 max-w-md text-sm leading-7 text-slate-400">{pillar.body}</p>

                  {/* Big-tile corner visuals */}
                  {index === 0 ? (
                    <div className="pointer-events-none absolute right-7 top-7 hidden lg:block">
                      <ScoreRing value={62} size={132} hole="#0c0a16" />
                    </div>
                  ) : null}
                  {index === 3 ? (
                    <div className="pointer-events-none absolute right-7 top-7 hidden lg:block">
                      <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-emerald-400/20 to-cyan-400/10 shadow-[0_0_46px_rgba(16,185,129,0.45)] backdrop-blur">
                        <div className="absolute inset-0 rounded-full border border-emerald-300/20" />
                        <ShieldCheck className="h-12 w-12 text-emerald-200" />
                      </div>
                    </div>
                  ) : null}

                  {/* Per-tile footer visuals */}
                  {index === 0 ? (
                    <div className="relative mt-auto pt-6">
                      <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                        <span>Rejection zone</span>
                        <span className="text-violet-200">ATS-ready</span>
                      </div>
                      <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400" />
                      </div>
                    </div>
                  ) : null}
                  {index === 1 ? (
                    <div className="relative mt-auto flex gap-2 pt-6">
                      {['V1', 'V2', 'V3'].map((v, i) => (
                        <div
                          key={v}
                          className={`flex flex-1 flex-col items-center gap-1.5 rounded-xl border p-3 ${i === 1 ? 'border-violet-300/50 bg-violet-500/15 shadow-[0_0_24px_rgba(139,92,246,0.35)]' : 'border-white/10 bg-white/[0.03]'}`}
                        >
                          <FileText className={`h-5 w-5 ${i === 1 ? 'text-violet-200' : 'text-slate-400'}`} />
                          <span className={`text-[10px] font-bold ${i === 1 ? 'text-violet-200' : 'text-slate-500'}`}>{v}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {index === 2 ? (
                    <div className="relative mt-auto flex gap-1.5 pt-6">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-12 flex-1 rounded-md border bg-white/[0.05] p-1 ${i === 2 ? 'border-violet-300/50 ring-1 ring-violet-300/30' : 'border-white/10'}`}
                        >
                          <div className="h-1 w-3/4 rounded bg-white/25" />
                          <div className="mt-1 h-0.5 w-full rounded bg-white/12" />
                          <div className="mt-0.5 h-0.5 w-2/3 rounded bg-white/12" />
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {index === 3 ? (
                    <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
                      {['Encrypted at rest', 'Never in the browser', 'You hold the key'].map((t) => (
                        <span key={t} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] font-semibold text-slate-300">{t}</span>
                      ))}
                    </div>
                  ) : null}
                </Reveal>
              );
            })}
          </div>
        </div>
        <div className="beam absolute inset-x-0 bottom-0" />
      </section>

      {/* ── Free tools ── */}
      <section className="render-deferred grain relative overflow-hidden bg-[#05080f] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_48%_at_50%_-6%,rgba(34,211,238,0.20),transparent_60%),radial-gradient(46%_44%_at_88%_10%,rgba(99,102,241,0.16),transparent_60%),radial-gradient(50%_50%_at_8%_92%,rgba(16,185,129,0.10),transparent_64%)]" />
        <div className="orb pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="orb-slow pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-brand/15 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32">
          <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/[0.06] px-4 py-1.5 text-sm font-bold text-cyan-200 backdrop-blur-sm">
                <Zap className="h-4 w-4" />
                Free tools · no login · instant
              </div>
              <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-tight text-glow sm:text-5xl">
                Try it <span className="text-gradient-warm">right now</span> —<br className="hidden sm:block" /> no signup, no catch.
              </h2>
            </div>
            <p className="max-w-md text-base leading-8 text-slate-300">
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
                  className="group"
                >
                  <Link
                    href={tool.href}
                    className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-white/[0.07] hover:shadow-[0_30px_70px_-30px_rgba(34,211,238,0.45)]"
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/20 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
                    <div className="relative flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/30 to-brand/20 text-cyan-200 ring-1 ring-white/10 transition group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-slate-300">{tool.tag}</span>
                    </div>
                    <h3 className="relative mt-5 font-display text-xl font-bold text-white">{tool.title}</h3>
                    <p className="relative mt-2 flex-1 text-sm leading-7 text-slate-400">{tool.desc}</p>
                    <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-cyan-300">
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
              className="group inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/[0.06] px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:border-cyan-300/40 hover:bg-white/[0.12]"
            >
              See all free tools
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <p className="text-xs text-slate-500">100% free · No account required · Runs in your browser</p>
          </Reveal>
        </div>
      </section>

      {/* ── Template system ── */}
      <section className="render-deferred grain relative overflow-hidden bg-[#070510] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(58%_46%_at_50%_-6%,rgba(245,158,11,0.14),transparent_60%),radial-gradient(46%_44%_at_86%_12%,rgba(139,92,246,0.18),transparent_60%),radial-gradient(48%_48%_at_8%_92%,rgba(34,211,238,0.10),transparent_64%)]" />
        <div className="orb-slow pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-amber-400/15 blur-3xl" />
        <div className="orb pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32">
          <Reveal className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-amber-200 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 glow-pulse" />
                Template system
              </span>
              <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-glow sm:text-5xl">
                Premium templates that<br className="hidden sm:block" /> still <span className="text-gradient-warm">pass the scan</span>.
              </h2>
            </div>
            <div>
              <p className="text-base leading-8 text-slate-300">
                Free users get credible starter layouts. Pro users unlock sharper visual identities for senior, technical, creative, and high-conviction applications.
              </p>
              <Link
                href="/templates"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
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

      {/* ── Social proof ── */}
      <SocialProof />

      {/* ── Pricing ── */}
      <section id="pricing" className="render-deferred grain spotlight-top relative overflow-hidden bg-slate-950">
        {/* Rich background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.12),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(245,158,11,0.10),transparent_40%)]" />
        <div className="orb pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 glow-pulse" />
              Pricing
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-white text-glow sm:text-5xl lg:text-6xl">
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
            <Reveal as="article" delayMs={90} className="relative">
              <div className="pointer-events-none absolute -inset-3 rounded-[2.4rem] bg-[radial-gradient(60%_60%_at_72%_28%,rgba(34,211,238,0.28),transparent_70%)] blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand/70 via-fuchsia-400/30 to-cyan-400/50 p-px shadow-[0_50px_120px_-40px_rgba(99,102,241,0.7)]">
                <div className="relative overflow-hidden rounded-[2rem] bg-[#0b0a16] p-8">
                  {/* Infinity glow accent */}
                  <div className="pointer-events-none absolute -right-8 top-10 h-40 w-40 rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.22),transparent)] blur-xl" />
                  <div className="relative flex items-start justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Best value</p>
                      <h3 className="mt-3 font-display text-2xl font-bold text-white">Lifetime Pro</h3>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-3 py-1.5 text-xs font-bold text-slate-950">
                      <Zap className="h-3 w-3" />
                      Pay once
                    </span>
                  </div>
                  <div className="relative mt-5 flex items-end gap-2">
                    <span className="font-display text-6xl font-bold text-gradient-warm">₹999</span>
                    <span className="mb-2 text-sm text-slate-400">one time · no renewal ever</span>
                  </div>
                  <p className="relative mt-4 text-sm leading-7 text-slate-300">
                    Everything in Free, plus unlimited clean exports, premium templates, and no watermark — forever.
                  </p>
                  <ul className="relative mt-7 space-y-3.5">
                    {[
                      'Unlimited clean PDF exports',
                      'No watermark on any export',
                      'All 8 premium templates',
                      'AI bullet rewrite tools',
                      'Role-specific CV versions',
                      'Job application tracker',
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-slate-200">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/pricing"
                    className="relative mt-8 inline-flex w-full items-center justify-center gap-2 rounded-pill bg-gradient-to-r from-brand to-cyan-500 px-5 py-3.5 text-sm font-bold text-white shadow-xl shadow-brand/30 transition hover:-translate-y-0.5"
                  >
                    Get lifetime access — ₹999
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <p className="relative mt-3 text-center text-xs text-slate-500">UPI · Cards · Net banking · Secured by Cashfree</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="render-deferred grain relative overflow-hidden bg-[#060812] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_42%_at_50%_-6%,rgba(99,102,241,0.16),transparent_60%),radial-gradient(44%_42%_at_88%_8%,rgba(34,211,238,0.10),transparent_62%)]" />
        <div className="orb-slow pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-brand/12 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 py-24 sm:px-6">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 glow-pulse" />
              FAQ
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] text-glow sm:text-5xl">
              Frequently asked <span className="text-gradient-warm">questions</span>
            </h2>
            <p className="mt-4 text-base text-slate-300">Everything you need to know before you start.</p>
          </Reveal>
          <div className="mt-12 divide-y divide-white/10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-md">
            {faq.map((item, index) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} defaultOpen={index === 0} tone="dark" />
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

    </main>
  );
}
