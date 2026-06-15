import Link from 'next/link';
import { BrandLogo } from '@/components/BrandLogo';
import { FAQItem } from '@/components/marketing/FAQItem';
import type { Metadata } from 'next';
import type { ComponentType } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Download,
  FileSearch,
  GaugeCircle,
  Layers3,
  LockKeyhole,
  Sparkles,
  Wand2,
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
import { InteractiveRewrite } from '@/components/marketing/InteractiveRewrite';
import { SocialProof } from '@/components/marketing/SocialProof';
import { SUPPORT_EMAIL } from '@/lib/contact';
import { StickyCTA } from '@/components/marketing/StickyCTA';
import { ExitIntentBanner } from '@/components/marketing/ExitIntentBanner';

export const metadata: Metadata = {
  title: 'Free AI CV Builder & ATS Resume Maker — CV Prime',
  description:
    'Build an ATS-optimised CV in minutes. Paste a job description, tailor your resume with AI, fix keyword gaps, and export a recruiter-ready PDF. Free to start. Trusted by 1,000+ job seekers in India.',
  alternates: {
    canonical: 'https://cv-prime.in',
  },
  openGraph: {
    title: 'CV Prime — Free AI CV Builder & ATS Resume Maker',
    description:
      'Paste a job description and watch AI tailor your CV, score your ATS match, and rewrite weak bullets into outcome-driven proof. Free to start.',
    url: 'https://cv-prime.in',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Prime — AI CV Builder' }],
  },
};

const operatingLoop: Array<{
  title: string;
  body: string;
  icon: LucideIcon;
}> = [
  {
    title: 'Diagnose the rejection risk',
    body: 'See the weak signals hiring software and recruiters notice first: missing keywords, vague bullets, poor hierarchy, and thin proof.',
    icon: FileSearch,
  },
  {
    title: 'Repair the story',
    body: 'Turn generic responsibilities into sharper impact bullets, reorder sections, and tune the CV around the exact role.',
    icon: Wand2,
  },
  {
    title: 'Ship with confidence',
    body: 'Choose an ATS-safe template, export a clean PDF, and keep each role-specific version organized in your workspace.',
    icon: Download,
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
}> = [
  {
    title: 'ATS readiness',
    body: 'A score that explains the why, not just a number that creates panic.',
    icon: GaugeCircle,
    stat: '0-100',
  },
  {
    title: 'AI rewrite studio',
    body: 'Three stronger versions for weak bullets, written around outcomes and proof.',
    icon: Sparkles,
    stat: '3 drafts',
  },
  {
    title: 'Premium templates',
    body: 'Distinct layouts for different careers, not the same CV with new colors.',
    icon: Layers3,
    stat: '8 styles',
  },
  {
    title: 'Private key model',
    body: 'Your OpenRouter key is encrypted before storage, and never exposed to the browser.',
    icon: LockKeyhole,
    stat: 'AES-256',
  },
];

const startPath = '/signup?next=/ai-cv';

const navLinks = [
  { href: '/templates', label: 'Templates' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/login', label: 'Sign in' },
];

const templateTiles = [
  {
    name: 'Modern',
    useCase: 'Product, growth, marketing',
    accent: 'bg-cyan-500',
    Template: TemplateModern,
  },
  {
    name: 'Executive',
    useCase: 'Leadership and strategy',
    accent: 'bg-amber-500',
    Template: TemplateExecutive,
  },
  {
    name: 'Technical',
    useCase: 'Engineering and data',
    accent: 'bg-emerald-500',
    Template: TemplateTechnical,
  },
  {
    name: 'Premium',
    useCase: 'High-conviction applications',
    accent: 'bg-amber-300',
    Template: TemplatePremium,
  },
];

const faq = [
  {
    question: 'Is CV Prime free to use?',
    answer:
      'Yes. CV Prime is free to start with no credit card required. The free plan includes 3 PDF exports, ATS scoring, AI bullet rewrites, and access to all 8 templates. Upgrade to Pro for unlimited exports and no watermark.',
  },
  {
    question: 'What is an ATS and why does my CV need to pass it?',
    answer:
      'ATS stands for Applicant Tracking System — the software most companies use to filter CVs before a human reads them. A CV that lacks the right keywords or has poor formatting is automatically rejected, even if you are qualified. CV Prime scores your CV against the job description and shows you exactly which keywords are missing so you can fix them before applying.',
  },
  {
    question: 'How does the AI CV tailoring work?',
    answer:
      'Paste the job description into CV Prime, then click "Fix this". The AI reads your existing CV and the job description together, rewrites your experience bullets to use stronger action verbs and outcome-driven language, weaves in the missing keywords from the JD, and tightens your professional summary — all without fabricating facts.',
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
      'Yes. CV Prime is built specifically for the Indian job market. It supports INR pricing via Razorpay and is designed around the expectations of Indian companies and MNCs hiring in India. Keywords, format, and scoring are all calibrated for Indian ATS systems.',
  },
  {
    question: 'Is CV Prime just another template site?',
    answer:
      'No. Templates are only the last step. The core product is ATS scoring, AI-powered keyword gap analysis, bullet rewriting, and JD tailoring — the parts that actually improve your chances of getting a callback. The template is just how you export the result.',
  },
  {
    question: 'How is this different from Canva or Zety?',
    answer:
      'Canva and Zety are design-first tools — you pick a template and fill in the blanks. CV Prime is diagnosis-first: it tells you what is wrong with your existing CV, why it might be failing ATS, and automatically fixes it using AI. It is the difference between a prettier version of what you already have and a CV that is actually optimised for the role.',
  },
];

// FAQ schema for Google "People Also Ask" and rich results
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
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
        Get started
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
    <article className="group rounded-card border border-slate-200 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/10">
      <div className="relative flex h-72 items-start justify-center overflow-hidden rounded-inner border border-slate-200 bg-[#e9eef5] p-4">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/85 to-transparent" />
        <TemplatePreview Template={Template} scale={0.214} />
      </div>
      <div className="p-3">
        <div className={`h-2 w-14 rounded-pill ${accent}`} />
        <h3 className="mt-4 font-display text-xl font-bold text-slate-950">{name}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-500">{useCase}</p>
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
      { label: 'CV examples by role', href: '/cv-examples' },
      { label: 'Interview questions', href: '/interview-questions' },
      { label: 'LinkedIn headlines', href: '/linkedin-headline' },
      { label: 'Salary guide India', href: '/salary' },
      { label: 'ATS statistics 2026', href: '/statistics' },
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
        {/* Brand row */}
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

        {/* Link columns */}
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                {column.title}
              </p>
              <nav className="mt-4 space-y-2.5 text-sm font-medium text-slate-600">
                {column.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block transition hover:text-slate-950"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
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
      {/* Hidden SEO H1 — visible to crawlers and screen readers */}
      <h1 className="sr-only">
        CV Prime — Free AI CV Builder, ATS Resume Maker &amp; Online CV Maker for India
      </h1>

      {/* FAQ JSON-LD structured data */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero — slider between the problem and the product flow */}
      <section className="premium-grid relative bg-[#f6f9fc]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(99,102,241,0.18),transparent_28%),radial-gradient(circle_at_80%_8%,rgba(251,191,36,0.16),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.92)_72%,#ffffff)]" />
        <MarketingNav />
        <HeroCarousel />
      </section>

      <section className="aurora-surface fine-noise relative text-white">
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <Reveal className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                See it work
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                Watch a weak bullet become a hiring-grade one.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-300">
              No signup, no demo video. Pick a sample bullet, rewrite it, and watch the readiness
              score climb — exactly how the product feels once you are inside.
            </p>
          </Reveal>

          <Reveal className="mt-10">
            <InteractiveRewrite />
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <Reveal className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">
                The operating loop
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl">
                A paid product has to reduce anxiety, not just decorate a document.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              The experience is designed around the emotional moment that matters: the user is about to apply and does not know whether the CV is strong enough. CV Prime gives them a diagnosis, a repair path, and a clean export.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {operatingLoop.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal
                  key={step.title}
                  as="article"
                  delayMs={index * 80}
                  className="rounded-card border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-inner bg-brand text-brand-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-sm font-bold text-slate-300">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-bold text-slate-950">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{step.body}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <SocialProof />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
              Rejection diagnosis
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              The product should tell users what is wrong before they spend another week applying.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Generic CV builders make users choose a template and hope. CV Prime turns the CV into a set of fixable signals.
            </p>
            <Link
              href={startPath}
              className="mt-8 inline-flex items-center gap-2 rounded-pill bg-brand px-6 py-3 text-sm font-bold text-brand-foreground transition hover:-translate-y-0.5 hover:bg-brand-strong"
            >
              Start the diagnosis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal className="rounded-panel border border-slate-200 bg-[#f7fafc] p-4 shadow-2xl shadow-slate-950/8">
            <div className="rounded-card border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Current draft
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-slate-950">
                    Rejection risk report
                  </h3>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-pill bg-amber-50 font-display text-2xl font-bold text-amber-700">
                  62
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {rejectionSignals.map((signal) => (
                  <div
                    key={signal}
                    className="flex items-start gap-3 rounded-inner border border-slate-200 bg-slate-50 p-4"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-pill bg-rose-500" />
                    <p className="text-sm font-medium leading-6 text-slate-700">{signal}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-inner bg-slate-950 p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                  Suggested fix
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Replace responsibility-led bullets with outcome-led bullets, then add the missing keywords naturally to the recent role and skills section.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f6f9fc]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
                Product depth
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                The SaaS value is inside the workflow.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-600">
              Every feature has a clear job: make the user more confident before sending the CV.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {productPillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <Reveal
                  key={pillar.title}
                  as="article"
                  delayMs={index * 70}
                  className="rounded-card border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/10"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-inner bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-pill bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {pillar.stat}
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-xl font-bold text-slate-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{pillar.body}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <Reveal className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
                Template system
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                Templates with enough taste to justify an upgrade.
              </h2>
            </div>
            <div>
              <p className="text-base leading-8 text-slate-600">
                Free users get credible starter layouts. Pro users unlock sharper visual identities for senior, technical, creative, and high-conviction applications.
              </p>
              <Link
                href="/templates"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-950 underline underline-offset-4"
              >
                Browse all templates
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {templateTiles.map((template, index) => (
              <Reveal key={template.name} delayMs={index * 70}>
                <TemplateCard {...template} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:py-24">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
              Pricing story
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Free to start. Pro when the application gets serious.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              The upgrade is not for decoration. It unlocks the moment that matters commercially: after 3 free PDF downloads, serious job seekers upgrade for unlimited clean exports.
            </p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            <Reveal as="article" className="rounded-card border border-white/10 bg-white/[0.06] p-6">
              <h3 className="font-display text-2xl font-bold">Free</h3>
              <p className="mt-5 font-display text-5xl font-bold">Rs 0</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Build drafts, test the AI flow, and download your first 3 PDFs.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {['Unlimited drafts', '3 free PDF downloads', 'Free templates'].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal as="article" delayMs={90} className="rounded-card border border-brand bg-white p-6 text-slate-950 shadow-2xl shadow-brand/20">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold">Pro</h3>
                <span className="rounded-pill bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                  Best value
                </span>
              </div>
              <p className="mt-5 font-display text-5xl font-bold">Rs 249</p>
              <p className="mt-2 text-sm font-medium text-slate-500">per month</p>
              <ul className="mt-6 space-y-3 text-sm font-medium text-slate-700">
                {['Premium templates', 'AI rewrite tools', 'Unlimited clean PDF export', 'Role-specific CV versions'].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={startPath}
                className="mt-7 inline-flex w-full items-center justify-center rounded-pill bg-brand px-5 py-3 text-sm font-bold text-brand-foreground transition hover:bg-brand-strong"
              >
                Start with CV Prime
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc]">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-6">
          <Reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">FAQ</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em]">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-slate-500">Everything you need to know before you start.</p>
          </Reveal>
          <div className="mt-12 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
            {faq.map((item, index) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} defaultOpen={index === 0} />
            ))}
          </div>
          <Reveal className="mt-12 rounded-panel border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-950/8 sm:p-8">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-slate-950">
                  Start with a real CV, not another blank template.
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Create an account and go straight into the CV workspace.
                </p>
              </div>
              <Link
                href={startPath}
                className="inline-flex items-center justify-center gap-2 rounded-pill bg-brand px-6 py-3 text-sm font-bold text-brand-foreground transition hover:-translate-y-0.5 hover:bg-brand-strong"
              >
                Get started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <MarketingFooter />
      <StickyCTA />
      <ExitIntentBanner />
    </main>
  );
}
