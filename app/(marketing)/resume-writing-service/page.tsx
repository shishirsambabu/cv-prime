import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Star, FileText, Brain, Zap, Clock } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'AI Resume Writing Service — Get a Job-Ready Resume in Minutes | CV Prime',
  description:
    'CV Prime is India\'s AI resume writing service. Enter your details, paste the job description, and get a fully written, ATS-optimised resume in under 5 minutes. Free plan — no credit card.',
  alternates: { canonical: 'https://cv-prime.in/resume-writing-service' },
  keywords: [
    'resume writing service',
    'resume writing service india',
    'professional resume writing service',
    'ai resume writing service',
    'online resume writing service india',
    'best resume writing service india',
    'resume writing service for freshers',
    'resume writing service bangalore',
    'affordable resume writing service india',
    'resume writer india',
    'cv writing service india',
    'professional cv writing service',
  ],
  openGraph: {
    title: 'AI Resume Writing Service India — CV Prime',
    description:
      'Get a professionally written, ATS-optimised resume in minutes. AI tailors every word to your target job description. Free to start — no credit card.',
    url: 'https://cv-prime.in/resume-writing-service',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Resume Writing Service India — CV Prime' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is CV Prime\'s resume writing service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CV Prime is an AI-powered resume writing service for Indian job seekers. Instead of filling in a blank template, you enter your career details and paste the job description you are targeting — and the AI writes your resume summary, rewrites your work experience bullets with strong action verbs and quantified outcomes, and flags exactly which keywords are missing. The result is an ATS-optimised, professionally written resume tailored to the specific role. Free plan includes 3 PDF exports.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is CV Prime different from a traditional resume writing service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional resume writing services charge ₹1,500–15,000+ per resume, take 2–5 business days, and produce a single generic document not tailored to a specific job description. CV Prime charges ₹999 one-time (or free for 3 exports), produces a tailored resume in under 5 minutes, and gives you a live ATS score showing how your resume performs against the actual ATS used by your target company. You can create unlimited tailored versions for different roles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my resume pass ATS with CV Prime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CV Prime is specifically designed to produce ATS-passing resumes. Every template uses single-column layouts with no tables, text boxes, or graphics that break ATS parsing. The AI keyword matching ensures your resume mirrors the critical terms from the job description. The live ATS score (0–100) shows your current match rate before you submit. CV Prime is calibrated against Taleo, iCIMS, Greenhouse, Workday, and Naukri ATS — the most common systems used by Indian and global employers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is CV Prime\'s resume writing service free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, CV Prime\'s free plan includes 3 PDF resume exports with full AI writing features. The Pro plan at ₹999 one-time includes unlimited exports, all 8 professional templates, a cover letter generator, and LinkedIn summary generation. There is no credit card required to start. Compare this to traditional resume writing services in India that charge ₹2,000–15,000 for a single resume with no ATS guarantee.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to get a resume with CV Prime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most users complete a full, ATS-optimised resume in under 5 minutes. The AI handles the writing — you provide your career details and the JD, and CV Prime generates the summary, rewrites bullets to be outcome-driven, and shows you exactly which keywords to add. For users who want to refine manually, the editor is available immediately after generation. PDF export is instant.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Resume Writing Service', item: 'https://cv-prime.in/resume-writing-service' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Resume Writing Service',
  description: 'AI-powered resume writing service that creates ATS-optimised, tailored resumes for Indian job seekers in under 5 minutes.',
  provider: {
    '@type': 'Organization',
    name: 'CV Prime',
    url: 'https://cv-prime.in',
  },
  areaServed: { '@type': 'Country', name: 'India' },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
    description: 'Free plan: 3 PDF exports included. Pro: ₹999 one-time unlimited.',
  },
};

const stats = [
  { value: '5 min', label: 'Average time to a complete resume' },
  { value: '75%', label: 'Resumes never reach a human without ATS optimisation' },
  { value: '3×', label: 'More interviews for ATS-optimised resumes' },
  { value: '₹999', label: 'One-time vs ₹2,000–15,000 for traditional services' },
];

const features = [
  {
    icon: Brain,
    heading: 'AI writes your resume',
    body: 'Enter your career details and the target JD. AI generates a professional summary, rewrites your bullets with strong action verbs, and highlights achievements with metrics — so you start with a great first draft, not a blank page.',
  },
  {
    icon: FileText,
    heading: 'Real-time ATS keyword scoring',
    body: 'See a live 0–100 ATS score as you edit. CV Prime shows exactly which keywords from the JD are present and which are missing — so you know your resume will pass the ATS before you click submit.',
  },
  {
    icon: CheckCircle2,
    heading: 'ATS-safe templates',
    body: 'Every CV Prime template uses single-column layout with no tables, columns, text boxes, or graphics. Clean formatting that every ATS can parse — including Taleo, iCIMS, Greenhouse, Workday, and Naukri ATS.',
  },
  {
    icon: Zap,
    heading: 'Unlimited tailored versions',
    body: 'Apply to 20 different roles? Create 20 different targeted resumes. Each version is optimised for the specific JD. Traditional resume services charge ₹2,000+ per resume. CV Prime Pro is ₹999 one-time, unlimited.',
  },
];

const comparisons = [
  { feature: 'Time to complete', cvprime: 'Under 5 minutes', traditional: '2–5 business days' },
  { feature: 'ATS optimisation', cvprime: 'Real-time score + keyword gap analysis', traditional: 'No guarantee' },
  { feature: 'Tailored per JD', cvprime: 'Yes — unlimited versions', traditional: 'Generic or expensive per version' },
  { feature: 'Price', cvprime: 'Free (3 exports) or ₹999 one-time', traditional: '₹2,000–15,000 per resume' },
  { feature: 'Revisions', cvprime: 'Unlimited self-service editing', traditional: '1–2 rounds, then extra charge' },
  { feature: 'Cover letter', cvprime: 'Included in Pro plan', traditional: 'Separate charge (₹500–3,000)' },
  { feature: 'ATS score visibility', cvprime: '0–100 live score', traditional: 'None' },
];

const testimonialRoles = [
  { role: 'Software Engineer, 3 YOE', company: 'Bengaluru', text: 'Got 4 interview calls in a week after switching to a CV Prime resume. My old resume was getting zero response on LinkedIn.' },
  { role: 'MBA Fresher', company: 'Mumbai', text: 'Used CV Prime for my campus placement. The ATS score feature made me realise my skills section was missing 6 keywords from the JD. Fixed it in 2 minutes.' },
  { role: 'Data Analyst, 2 YOE', company: 'Hyderabad', text: 'The AI rewrote my boring bullet points into proper achievement statements. "Worked on data cleaning" became "Automated the weekly ETL pipeline, reducing 4 hours of manual work to 12 minutes." Got interviews at Flipkart and PhonePe.' },
];

export default function ResumeWritingServicePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, breadcrumbSchema, serviceSchema]) }}
      />

      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Resume Writing Service</span>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <Star className="h-3.5 w-3.5" />
            AI Resume Writing Service — India
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Professional resume writing service,{' '}
            <span className="text-cyan-400">powered by AI</span>
          </h1>
          <p className="mt-5 text-lg text-slate-300 sm:text-xl">
            Traditional resume writing services charge ₹2,000–15,000 and take 2–5 days. CV Prime writes your
            ATS-optimised resume in under 5 minutes — tailored to the exact job description, with a live ATS score.
            Free to start.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-bold text-white hover:bg-cyan-300 transition-colors"
            >
              Write my resume — free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white hover:border-white/40 transition-colors"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-white/10 bg-white/[0.03] px-5 py-10">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="text-center">
              <div className="text-3xl font-extrabold text-cyan-600">{s.value}</div>
              <div className="mt-1 text-xs text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-tight">How CV Prime&apos;s resume writing service works</h2>
          <p className="mt-3 text-slate-400">
            Not a template tool. Not a blank editor. CV Prime is the only resume writing service that reads
            the job description and writes a tailored resume for you — with a real ATS score.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.heading} className="rounded-xl border border-white/10 p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
                    <Icon className="h-5 w-5 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-bold">{f.heading}</h3>
                  <p className="mt-2 text-sm text-slate-400">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works steps */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-tight">Get your resume in 4 steps</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '1', heading: 'Enter your details', body: 'Add your work history, skills, and education — or import your existing resume.' },
              { step: '2', heading: 'Paste the job description', body: 'CV Prime reads the JD and identifies the exact keywords the ATS will filter for.' },
              { step: '3', heading: 'AI writes your resume', body: 'Summary, bullets, and skills section are generated and scored against the JD in real time.' },
              { step: '4', heading: 'Download your PDF', body: 'Export an ATS-safe PDF in one click. Free plan includes 3 exports.' },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-cyan-600 text-sm font-black text-white">
                  {item.step}
                </div>
                <h3 className="font-bold">{item.heading}</h3>
                <p className="mt-1.5 text-sm text-slate-400">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-7 py-3.5 font-bold text-white hover:bg-cyan-700 transition-colors"
            >
              Start writing — it&apos;s free <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-tight">CV Prime vs traditional resume writing services</h2>
          <p className="mt-3 text-slate-400">
            Traditional services in India charge ₹2,000–15,000 per resume with no ATS guarantee and a 2–5 day turnaround.
          </p>
          <div className="mt-8 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="px-4 py-3 text-left font-semibold text-slate-300">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold text-cyan-300">CV Prime (AI)</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-400">Traditional service</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {comparisons.map((row) => (
                  <tr key={row.feature}>
                    <td className="px-4 py-3 font-medium text-slate-300">{row.feature}</td>
                    <td className="px-4 py-3 text-cyan-300">{row.cvprime}</td>
                    <td className="px-4 py-3 text-slate-400">{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-tight">What Indian job seekers say</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {testimonialRoles.map((t) => (
              <div key={t.role} className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
                <div className="flex gap-0.5 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-sm text-slate-300 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4">
                  <div className="text-sm font-semibold text-slate-200">{t.role}</div>
                  <div className="text-xs text-slate-400">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related tools and guides */}
      <section className="px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl font-bold text-white">Related tools &amp; guides</h2>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {[
              { href: '/ai-resume-builder', label: 'AI resume builder' },
              { href: '/ats-checker', label: 'Free ATS resume checker' },
              { href: '/ats-resume-builder', label: 'ATS resume builder' },
              { href: '/cover-letter-generator', label: 'AI cover letter generator' },
              { href: '/resume-checker', label: 'Resume checker' },
              { href: '/resume-optimizer', label: 'Resume optimiser' },
              { href: '/blog/ats-resume-mistakes', label: '15 ATS resume mistakes to avoid' },
              { href: '/blog/how-to-write-resume-summary-2026', label: 'How to write a resume summary' },
              { href: '/blog/resume-action-verbs-2026', label: 'Power words & action verbs' },
              { href: '/blog/resume-objective-examples-india-2026', label: 'Career objective examples India' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-300 hover:border-cyan-300 hover:text-cyan-300 transition-colors"
              >
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-cyan-500" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-tight">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-bold text-white">{faq.name}</h3>
                <p className="mt-2 text-sm text-slate-300">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <Clock className="mx-auto mb-4 h-8 w-8 text-cyan-400" />
          <h2 className="text-3xl font-extrabold">Get your resume in 5 minutes — free</h2>
          <p className="mt-4 text-slate-300">
            No credit card. No waiting days for a human writer. CV Prime&apos;s AI resume writing service delivers
            a tailored, ATS-optimised resume immediately. Free plan includes 3 PDF exports.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-8 py-4 font-bold text-white hover:bg-cyan-300 transition-colors"
          >
            Write my resume — free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA />
    </main>
  );
}
