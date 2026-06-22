import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Search, Zap, BarChart3, AlertTriangle } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Free ATS Resume Checker — Score Your CV Against Any Job Description | CV Prime',
  description:
    'Free ATS resume checker. Paste a job description and your CV to get an instant ATS compatibility score, missing keyword report, and AI-powered fix recommendations. No signup required to see your score.',
  alternates: { canonical: 'https://cv-prime.in/ats-checker' },
  keywords: [
    'ats resume checker',
    'free ats checker',
    'ats cv checker',
    'ats resume scanner',
    'resume ats score',
    'ats compatibility checker',
    'free resume checker india',
    'ats keyword checker',
    'resume score checker',
    'ats resume test',
  ],
  openGraph: {
    title: 'Free ATS Resume Checker — Score Your CV Instantly | CV Prime',
    description: 'Get your ATS score in seconds. Paste a job description + your CV and see exactly what keywords are missing, what\'s weak, and how to fix it.',
    url: 'https://cv-prime.in/ats-checker',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ATS Resume Checker — CV Prime' }],
  },
};

const whatWeMeasure = [
  { label: 'Keyword match %', desc: 'How many of the job description\'s critical keywords appear in your CV.' },
  { label: 'Section completeness', desc: 'Whether your CV has all the sections ATS expects: Summary, Experience, Education, Skills.' },
  { label: 'Format compliance', desc: 'Whether your CV structure is ATS-parseable — no tables, columns, or text boxes that break parsing.' },
  { label: 'Bullet quality', desc: 'Whether your bullets use strong action verbs and contain quantified outcomes.' },
  { label: 'Skills density', desc: 'Whether technical and soft skills from the JD are naturally distributed throughout your CV.' },
  { label: 'Overall ATS score', desc: 'A composite 0–100 score reflecting your CV\'s likelihood of passing automated screening.' },
];

const scoreRanges = [
  { range: '85–100', label: 'Excellent', color: 'text-green-600 bg-green-50', desc: 'Your CV will pass ATS at most companies. Focus on interview prep.' },
  { range: '70–84', label: 'Good', color: 'text-cyan-600 bg-cyan-50', desc: 'A few keyword gaps remain. One targeted edit session should push you above 85.' },
  { range: '55–69', label: 'Needs work', color: 'text-amber-600 bg-amber-50', desc: 'Significant keyword gaps detected. ATS will likely filter you out at competitive companies.' },
  { range: '0–54', label: 'High risk', color: 'text-red-600 bg-red-50', desc: 'Your CV is unlikely to pass ATS. Immediate tailoring needed before applying.' },
];

const faqs = [
  {
    q: 'What is an ATS resume checker?',
    a: 'An ATS resume checker analyses your CV against a specific job description to determine how likely it is to pass the Applicant Tracking System used by that employer. It checks keyword coverage, formatting compliance, section completeness, and bullet quality — giving you a score and actionable improvement list.',
  },
  {
    q: 'How accurate is CV Prime\'s ATS checker?',
    a: 'Very accurate for keyword-based ATS systems, which is what most Indian companies (including IT companies using Taleo, Workday, Greenhouse, or Lever) use. Our checker identifies missing keywords, weak sections, and formatting violations that actually cause rejections. AI scoring may vary by ±5 points between runs — what matters is the keyword gap analysis.',
  },
  {
    q: 'Do I need to create an account to check my ATS score?',
    a: 'You need a free CV Prime account to run the full ATS check with AI recommendations. Sign up takes 30 seconds — no credit card required.',
  },
  {
    q: 'How do I improve my ATS score after checking?',
    a: 'The checker gives you a list of missing keywords and weak sections. Add the missing keywords naturally into your experience bullets, skills section, and summary. Use CV Prime\'s AI tailoring feature to do this automatically in under 2 minutes — it inserts keywords from the JD without fabricating any information.',
  },
  {
    q: 'What ATS score do I need to get shortlisted?',
    a: 'Aim for 75+ for targeted applications. Above 85 is excellent. Below 60 for a role you are qualified for usually means keyword gaps, not skill gaps — and those are fixable. For competitive roles (FAANG, top consulting, Big 4), targeting 85+ dramatically improves your callback rate.',
  },
  {
    q: 'Does the ATS checker work for all job types in India?',
    a: 'Yes. CV Prime\'s ATS checker has been tested against JDs from IT, BFSI, consulting, manufacturing, healthcare, marketing, and operations roles. It understands Indian resume conventions and Indian employer keyword patterns.',
  },
  {
    q: 'What is a good keyword match percentage?',
    a: 'Aim for 70% or above. If 15 critical keywords from the JD appear in your CV (out of 20 identified), you have a 75% match — which is strong. Below 50% is where most ATS rejections happen.',
  },
];

const steps = [
  { num: '1', icon: Search, title: 'Paste the job description', desc: 'Copy the full JD from the job portal into CV Prime. The more complete the JD, the more accurate the check.' },
  { num: '2', icon: Zap, title: 'Add or upload your CV', desc: 'Use your existing CV Prime document or upload a PDF/DOCX. We extract the text automatically.' },
  { num: '3', icon: BarChart3, title: 'Get your ATS score instantly', desc: 'See your 0–100 score, the full keyword gap list, missing sections, and a prioritised fix plan.' },
];

export default function ATSCheckerPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-green-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <BarChart3 className="h-4 w-4" />
            Free ATS resume checker
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Is your CV passing ATS? Find out in 60 seconds — free
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Paste a job description and your CV to get an instant ATS compatibility score. See the exact keywords you are missing, what sections are weak, and how to fix it all in minutes.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Check my ATS score free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/ats-friendly-cv"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              What is ATS?
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">No credit card · Free plan includes 3 ATS checks + fixes</p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-8 text-center">
          {[
            { stat: '75%', label: 'of CVs are rejected by ATS before a human sees them' },
            { stat: '40%', label: 'average improvement in ATS score after CV Prime tailoring' },
            { stat: '90%+', label: 'of MNCs in India use ATS to screen applicants' },
            { stat: '5 min', label: 'to go from score to a fully fixed CV with AI' },
          ].map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-cyan-600">{item.stat}</p>
              <p className="mt-1 text-xs leading-5 text-slate-500 max-w-[140px]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">How the ATS checker works</h2>
            <p className="mt-4 text-slate-500">Three steps from CV to score to fixed</p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative rounded-[1.5rem] border border-slate-100 bg-slate-50 p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What we measure */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">What our ATS checker measures</h2>
            <p className="mt-4 text-slate-500">Six dimensions that determine whether your CV gets through</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeMeasure.map((item) => (
              <div key={item.label} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600" />
                  <h3 className="font-semibold text-slate-900">{item.label}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Score ranges */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold">What your ATS score means</h2>
          <div className="mt-10 space-y-4">
            {scoreRanges.map((range) => (
              <div key={range.range} className="flex items-start gap-5 rounded-2xl border border-slate-100 p-5">
                <div className={`shrink-0 rounded-xl px-3 py-1.5 text-sm font-bold ${range.color}`}>
                  {range.range}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{range.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{range.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
              <div>
                <p className="font-bold text-slate-900">Your score is role-specific — not universal</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  A CV that scores 92 for a Software Engineer role at Amazon may score 54 for a Product Manager role at Zomato. ATS scoring is always relative to the job description. That is why CV Prime checks your score against the <em>specific</em> JD you are applying for — not a generic resume rubric.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">ATS checker — frequently asked questions</h2>
          <div className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-xl font-bold text-slate-900">Related guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/blog/ats-resume-mistakes', label: '15 ATS resume mistakes' },
              { href: '/blog/resume-format-india-2026', label: 'Best resume format India 2026' },
              { href: '/blog/how-to-write-resume-summary-2026', label: 'Write a resume summary that passes ATS' },
              { href: '/ats-guide', label: 'ATS guide by role' },
              { href: '/ats-report-2026', label: 'ATS research report 2026' },
              { href: '/ats-friendly-cv', label: 'ATS-friendly CV guide' },
              { href: '/statistics', label: 'ATS & resume statistics' },
              { href: '/ai-cv-builder', label: 'AI CV builder' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-cyan-300 hover:text-cyan-700">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Stop guessing. Check your ATS score now — free.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Get your score, see every keyword gap, and let AI fix it all in under 5 minutes. No credit card required.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong">
            Check my CV free now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Check my ATS score free" message="75% of CVs are rejected by ATS — check yours in 60 seconds" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Free ATS Resume Checker — CV Prime',
            description: 'Free ATS resume checker. Get an instant ATS compatibility score, missing keyword analysis, and AI fix recommendations.',
            url: 'https://cv-prime.in/ats-checker',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                { '@type': 'ListItem', position: 2, name: 'ATS Checker', item: 'https://cv-prime.in/ats-checker' },
              ],
            },
            mainEntity: {
              '@type': 'SoftwareApplication',
              name: 'CV Prime ATS Resume Checker',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
              featureList: ['ATS keyword analysis', 'Resume scoring 0-100', 'Missing keyword detection', 'Format compliance check', 'AI-powered fix recommendations'],
            },
          }),
        }}
      />
    </main>
  );
}
