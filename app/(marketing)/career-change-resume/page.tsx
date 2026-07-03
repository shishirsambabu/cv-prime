import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, Lightbulb } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Career Change Resume — How to Write a Resume for a Career Change in India 2026 | CV Prime',
  description:
    'Complete guide to writing a career change resume in India. How to frame transferable skills, handle recruiters\' concerns, and build an ATS-optimised resume when switching industries or roles. With free AI resume builder.',
  alternates: { canonical: 'https://cv-prime.in/career-change-resume' },
  keywords: [
    'career change resume',
    'career change resume india',
    'how to write a resume for career change',
    'resume for career switch india',
    'transferable skills resume',
    'career transition resume',
    'changing careers resume india',
    'resume for new industry india',
    'career change cv india',
  ],
  openGraph: {
    title: 'Career Change Resume — How to Write a Resume for a Career Change in India 2026 | CV Prime',
    description:
      'Complete guide to writing a career change resume in India. How to frame transferable skills and build an ATS-optimised resume when switching industries. Free AI resume builder.',
    url: 'https://cv-prime.in/career-change-resume',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Career Change Resume Guide — CV Prime' }],
  },
};

const commonCareerChanges = [
  { from: 'IT / Engineering', to: 'Product Management', reason: 'Leverages technical depth + desire for broader business impact' },
  { from: 'Banking / Finance', to: 'Fintech / Startup', reason: 'Domain expertise transferred to high-growth environments' },
  { from: 'Teaching / Education', to: 'Corporate Training / L&D', reason: 'Direct skill transfer with better compensation' },
  { from: 'Marketing', to: 'Product / Growth', reason: 'Analytics and user insight skills are directly applicable' },
  { from: 'HR / Recruitment', to: 'People Operations / HRTech', reason: 'Ops and people skills transfer with tech layer added' },
  { from: 'Consulting', to: 'Strategy / Business Development', reason: 'Analytical frameworks apply across industries' },
  { from: 'Engineering (Civil/Mech)', to: 'Operations / Supply Chain', reason: 'Process and systems thinking is directly transferable' },
  { from: 'Content / Journalism', to: 'Marketing / SEO / Brand', reason: 'Writing, research, and communication skills apply' },
];

const resumeStructure = [
  {
    section: 'Professional Summary',
    advice: 'Lead with your new direction, not your old title. State what you are moving towards and your single strongest transferable credential. Example: "Marketing operations professional transitioning into product management, with 4 years of experience in user journey analysis, A/B testing, and cross-functional roadmap execution at Nykaa." Do NOT write "I am looking to change careers" — frame your past as preparation, not as departure.',
  },
  {
    section: 'Transferable Skills Section',
    advice: 'Add a dedicated skills section placed near the top of your resume. Separate transferable skills (that work in the new field) from domain-specific skills (that belong to your old field). List only the skills relevant to the new role. For a marketing-to-PM transition, transferable skills include: user research, A/B testing, data analysis, cross-functional communication, and go-to-market strategy.',
  },
  {
    section: 'Reframed Work Experience',
    advice: 'Do not delete your old experience — reframe it. Every bullet point should be rewritten to highlight the aspect of that work that is relevant to the new role. If you were a finance analyst applying for a data scientist role, reframe: "Built Excel models to forecast revenue" becomes "Designed quantitative forecasting models using structured data from 3 ERP systems to predict ₹200Cr revenue outcomes." The skill is transferable; the framing needs to make that transfer obvious.',
  },
  {
    section: 'Bridge Credentials',
    advice: 'Include certifications, courses, and projects that demonstrate active preparation for the new field. For a tech-to-PM switch: a Product School or Reforge certification, a side project with a user base, or an open-source contribution. For finance-to-data science: Google Data Analytics Certificate, Kaggle competitions, and an annotated portfolio. Place these in a "Certifications & Projects" section immediately after the summary to show commitment.',
  },
  {
    section: 'Education',
    advice: 'If your education directly supports the new career (e.g., you have a CS degree but worked in marketing, and you\'re moving to tech), move education higher in the resume. If your degree is unrelated to both your old and new career, keep it at the bottom. For career changers with an MBA, the MBA should always appear near the top — it signals generalist business capability that supports almost any cross-sector transition.',
  },
];

const doList = [
  'Lead with the destination, not the departure — write for the role you want',
  'Identify your 3–5 strongest transferable skills and make them visible in the first 10 lines',
  'Show bridge credentials: certifications, freelance projects, or volunteering in the new field',
  'Quantify outcomes across all roles — numbers translate across industries better than titles',
  'Use keywords from the target JD — ATS does not know you\'re changing careers, it just scans for terms',
  'Write a targeted cover letter for every career change application — recruiters expect an explanation',
  'Network actively — 60%+ of career change roles in India are filled through referrals, not job portals',
  'Tailor your LinkedIn to match your new direction before you start applying',
];

const dontList = [
  'Don\'t apologise in your resume for changing careers — frame it as progress, not retreat',
  'Don\'t list your full job history equally — weight the bullets toward transferable work',
  'Don\'t use a functional resume (skills-only, no timeline) — Indian recruiters distrust it and assume you\'re hiding something',
  'Don\'t apply to senior roles in the new field immediately — a lateral move is realistic, a vertical leap in a new industry rarely is',
  'Don\'t ignore ATS — career change resumes are already risky; a poorly formatted PDF that doesn\'t parse is doubly damaging',
  'Don\'t send the same resume to 50 companies — targeted applications with personalised cover letters convert 3–4x better than mass applying',
];

const faqs = [
  {
    q: 'Is it possible to change careers in India without starting from scratch?',
    a: 'Yes, and most successful career changers in India do not start from scratch. They identify a field adjacent to their current one, build bridge credentials (certifications, freelance projects, or internal transfers), and make a lateral move at the same seniority level in the new field. Starting fresh at a junior level is only necessary for dramatic career pivots (e.g., doctor to software engineer) where the skill overlap is minimal. For most professional career transitions — IT to PM, Finance to Fintech, Marketing to Growth — the transferable skills are substantial enough to justify a lateral entry.',
  },
  {
    q: 'What is the best resume format for a career change?',
    a: 'A modified reverse-chronological format with an enhanced skills section and a strong professional summary. Avoid the pure functional format (grouping skills without dates) — Indian recruiters flag it as hiding something. Instead, use a hybrid approach: strong skills-forward summary → dedicated transferable skills block → standard reverse-chronological experience (with bullets reframed for the new role) → education and certifications. CV Prime\'s AI resume builder supports this format automatically.',
  },
  {
    q: 'How long should a career change resume be?',
    a: 'One page for candidates with fewer than 6 years of total experience — even if you\'re combining two different careers, keep it tight. Two pages for candidates with 6–15 years of experience across both careers. Avoid the trap of listing every job and every skill in the hope that something will stick — a targeted 1-page resume that clearly connects your background to the new role will convert better than a comprehensive 3-page document.',
  },
  {
    q: 'Should I include a career change cover letter?',
    a: 'Yes — always. A career change without a cover letter is asking recruiters to do extra work to understand your application. The cover letter should: (1) acknowledge the transition directly ("I am moving from X to Y because..."), (2) identify the 2–3 specific transferable skills that make you a strong candidate, and (3) reference a bridge credential (certification, project, or relevant experience) that shows active commitment. Keep it to 3 short paragraphs — one per point.',
  },
  {
    q: 'How do I explain a career change in an interview?',
    a: 'Use the "3 Cs" framework: Clarity, Contribution, Commitment. Clarity: "I\'ve spent 4 years in X, and I\'ve been consistently drawn to Y because of [specific element]." Contribution: "My background in X gives me a differentiated perspective in Y — specifically, I\'ve already done [specific transferable skill] at scale." Commitment: "I\'ve spent the last 6 months preparing for this move through [certification, project, networking]. I\'m not jumping blindly." Practice this until it sounds natural, not rehearsed.',
  },
  {
    q: 'Which career changes are easiest in India\'s job market?',
    a: 'The easiest transitions in India are between adjacent fields with high skill overlap: (1) Engineering to Product Management — technical skills + product sense. (2) Finance / CA to Fintech / Banking Tech — domain expertise is premium. (3) Marketing to Growth / Performance Marketing — analytics and campaigns transfer. (4) HR to HRTech / People Analytics — ops and people skills apply. (5) Consulting to Strategy — frameworks are portable. The hardest transitions are across completely different knowledge domains (e.g., doctor to software engineer), which typically require formal education and a restart at a junior level.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Resume Tips', item: 'https://cv-prime.in/resume-tips' },
    { '@type': 'ListItem', position: 3, name: 'Career Change Resume', item: 'https://cv-prime.in/career-change-resume' },
  ],
};

export default function CareerChangeResumePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/resume-tips" className="hover:text-white">Resume Tips</Link>
            <span>/</span>
            <span className="text-white">Career Change Resume</span>
          </nav>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Career change resume — how to write one that actually works
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            A complete guide to building a resume for a career switch in India — how to reframe your experience, highlight transferable skills, pass ATS, and convince recruiters you are worth the risk of hiring someone from a different field.
          </p>
          <Link
            href="/signup?next=/ai-cv"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground transition hover:bg-brand-strong"
          >
            Build my career change resume with AI <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Common career changes */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Most common career changes in India — 2026</h2>
          <p className="mt-3 text-slate-400">These are the transitions that work in India&apos;s job market because the skill overlap is substantial enough to make a compelling case.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {commonCareerChanges.map((c) => (
              <div key={c.from} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-slate-200 px-2.5 py-1 text-xs font-bold text-slate-300">{c.from}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-brand" />
                  <span className="rounded-lg bg-brand/10 px-2.5 py-1 text-xs font-bold text-brand">{c.to}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{c.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to structure */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">How to structure a career change resume</h2>
          <p className="mt-3 text-slate-400">Each section of your resume needs to be reframed to speak to the new role, not just your old one.</p>
          <div className="mt-8 space-y-5">
            {resumeStructure.map((s, i) => (
              <div key={s.section} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 font-display text-sm font-bold text-brand">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold">{s.section}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{s.advice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Do and don't */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Career change resume — do&apos;s and don&apos;ts</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-lg font-bold text-green-700 mb-4">Do</h3>
              <div className="space-y-3">
                {doList.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-green-100 bg-green-50 p-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <p className="text-sm text-green-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-red-700 mb-4">Don&apos;t</h3>
              <div className="space-y-3">
                {dontList.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-3">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    <p className="text-sm text-red-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATS tip */}
      <section className="bg-amber-500/10 border-y border-amber-400/20 px-5 py-10">
        <div className="mx-auto max-w-4xl flex items-start gap-4">
          <Lightbulb className="mt-1 h-6 w-6 shrink-0 text-amber-600" />
          <div>
            <h3 className="font-display text-lg font-bold text-amber-200">ATS and career change resumes</h3>
            <p className="mt-2 leading-7 text-amber-200">
              ATS software does not know you are changing careers. It scans for keywords from the job description and scores your resume on keyword match. A career change resume that fails to include the target role&apos;s keywords will be eliminated before a human reads it — regardless of how strong your transferable background is. Use CV Prime&apos;s ATS checker to score your career change resume before you send it. Paste the job description from your target role and see exactly which keywords you are missing. Then use the AI to add them naturally to your experience bullets and skills section.
            </p>
            <Link
              href="/ats-checker"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-amber-300 hover:text-amber-200"
            >
              Check my resume ATS score free <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Career change resume — FAQ</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-sm">
                <h3 className="font-display text-base font-bold">{faq.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-white/10 px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Related guides and tools</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/resume-tips', label: '← All resume tips' },
              { href: '/resume-builder', label: 'AI resume builder' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/resume-tips/how-to-write-a-resume', label: 'How to write a resume' },
              { href: '/resume-tips/resume-summary', label: 'How to write a professional summary' },
              { href: '/resume-tips/skills-section', label: 'Skills section guide' },
              { href: '/resume-tips/gap-in-resume', label: 'Gap in resume guide' },
              { href: '/cover-letter-generator', label: 'Cover letter generator' },
              { href: '/fresher-resume', label: 'Fresher resume guide' },
              { href: '/cv-examples', label: 'Resume examples by role' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-brand hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">Build your career change resume with AI</h2>
          <p className="mt-4 text-slate-300">
            CV Prime&apos;s AI reframes your existing experience for the new role, identifies your strongest transferable skills, and optimises your resume for ATS — automatically. Free to start.
          </p>
          <Link
            href="/signup?next=/ai-cv"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
          >
            Build my career change resume free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build my career change resume free" message="AI reframes your experience for your new target role" />
    </main>
  );
}
