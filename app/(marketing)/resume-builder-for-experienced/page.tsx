import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Briefcase, TrendingUp, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume Builder for Experienced Professionals India 2026 — AI Resume Tailoring | CV Prime',
  description:
    'The best resume builder for experienced professionals in India 2026. AI tailoring to any job description, ATS scoring for senior roles, and professional templates for managers and leaders. Free to start.',
  alternates: { canonical: 'https://cv-prime.in/resume-builder-for-experienced' },
  keywords: [
    'resume builder for experienced professionals',
    'resume builder for experienced india',
    'resume for experienced professionals india',
    'best resume builder for experienced',
    'resume for senior professionals india',
    'experienced professional resume format india',
    'resume builder for managers india',
    'professional resume builder india',
    'ai resume builder for experienced',
    'resume for 10 years experience india',
    'mid-career resume builder india',
    'senior resume builder india 2026',
  ],
  openGraph: {
    title: 'Resume Builder for Experienced Professionals India 2026 | CV Prime',
    description:
      'AI resume builder designed for India\'s mid-senior professionals. Tailor your resume to any job description, fix ATS gaps, and export a clean PDF — free to start.',
    url: 'https://cv-prime.in/resume-builder-for-experienced',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume Builder for Experienced Professionals — CV Prime' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best resume format for experienced professionals in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best resume format for experienced professionals in India is reverse chronological with a strong professional summary. Structure: Contact → Professional Summary (4–6 lines, leading with your strongest achievement and total years of experience) → Work Experience (reverse chronological, 4–6 quantified bullets per role) → Skills (grouped by category) → Education (degree and institution only — no CGPA for experienced professionals) → Certifications. For senior professionals (10+ years), a 2-page resume is acceptable and often expected. For managers and directors, include team size and budget managed in each role.',
      },
    },
    {
      '@type': 'Question',
      name: 'How should I write a resume when switching jobs with 8–10 years of experience?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For job switching with 8–10 years of experience in India: (1) Lead with a strong professional summary that targets the next role, not just describes what you have done. (2) Quantify your most significant achievements — P&L managed, team size, revenue generated, cost saved. (3) Remove CGPA and education details beyond degree + institution + year. (4) Tailor your resume to each JD using CV Prime\'s ATS scorer — senior role keywords vary significantly between companies. (5) Keep to 2 pages maximum — every bullet should earn its place.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should experienced professionals include a resume objective or summary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Experienced professionals (5+ years) should use a Professional Summary, not a career objective. A career objective is appropriate for freshers seeking their first role. A professional summary for experienced candidates should: state your specialisation and total years of experience, include one strong quantified achievement, list 3–5 core keywords matching your target JD, and optionally state your career aspiration. Total length: 3–5 lines. Example: "Senior Product Manager with 9 years in fintech, having grown GMV from ₹400 Cr to ₹2,100 Cr at PhonePe through A/B-led checkout optimisation. Expertise in growth metrics (DAU, ARR), Agile delivery, and cross-functional leadership. Targeting Group PM / VP Product roles at Series B–D consumer fintech."',
      },
    },
    {
      '@type': 'Question',
      name: 'How many pages should a resume be for a 10-year experience professional in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For professionals with 10 years of experience in India, a 2-page resume is standard and expected. Indian recruiters and hiring managers at this experience level expect to see your full career trajectory. Never try to compress 10 years of relevant experience into 1 page — it will appear thin. However, do not pad to 2 pages with irrelevant details. Every bullet on page 1 and page 2 should reflect a genuinely significant contribution. Recruiters at product companies (Amazon, Google, Flipkart) prefer 1–1.5 pages even for senior candidates.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get past ATS with 10+ years of experience?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Experienced professionals are not immune to ATS rejection — senior roles often have equally strict ATS filtering. To pass ATS with 10+ years of experience: (1) Tailor your resume to each JD — senior role keywords vary significantly. (2) Include your target job title in your professional summary. (3) Avoid image-based PDFs or two-column layouts — even at senior levels, ATS parsers reject these. (4) Mirror the exact language of the JD — if it says "P&L ownership" do not write "profit and loss responsibility." (5) Use CV Prime\'s ATS checker to score each application before submitting.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Resume Builder for Experienced', item: 'https://cv-prime.in/resume-builder-for-experienced' },
  ],
};

const resumeStructure = [
  {
    section: 'Contact information',
    guidance: 'Name, phone, email, city, LinkedIn URL, GitHub (for tech roles). No photo, no date of birth, no marital status.',
    seniorNote: 'Add your LinkedIn URL even if it\'s not 100% updated — recruiters look up senior candidates on LinkedIn regardless.',
  },
  {
    section: 'Professional summary',
    guidance: '4–6 lines. Lead with your specialisation + total years. Include one quantified achievement. Add 3–5 JD-targeted keywords. State what you\'re targeting next.',
    seniorNote: 'This section is weighted heavily by ATS for senior roles. Paste your target JD title and top 3 skills here verbatim.',
  },
  {
    section: 'Work experience',
    guidance: 'Reverse chronological. 4–6 bullets per role for the most recent 2–3 positions. 2–3 bullets for older roles. Each bullet: Action Verb + What + Metric.',
    seniorNote: 'For roles beyond 10 years ago, 1–2 bullets or a single-line entry is sufficient. Recruiters focus on the last 5–7 years.',
  },
  {
    section: 'Skills',
    guidance: 'Grouped by category. For managers: domain expertise + tools + methodologies. For senior ICs: technical stack + frameworks + certifications.',
    seniorNote: 'Mirror the exact skill names from your target JD. "Project Management" vs "PMP" vs "Agile project management" are matched differently by ATS.',
  },
  {
    section: 'Education',
    guidance: 'Degree, institution, year. No CGPA for professionals with 5+ years of experience.',
    seniorNote: 'For MBA holders from IIM/ISB/XLRI, put B-school name prominently. For other MBAs, include specialisation.',
  },
  {
    section: 'Certifications',
    guidance: 'Active certifications relevant to your target role. Include certification body and year.',
    seniorNote: 'PMP, CFA, CISSP, AWS Solutions Architect, Six Sigma GB/BB — these add ATS keyword value and signal currency in your field.',
  },
];

const beforeAfter = [
  {
    label: 'Summary',
    weak: 'A result-oriented professional with 12 years of experience in the IT industry looking for a challenging role in a reputable organisation.',
    strong: 'Senior Engineering Manager with 12 years in distributed systems and cloud infrastructure, having led a 42-engineer org at Flipkart delivering 99.97% uptime across 8 product squads. Expertise in Kubernetes, AWS, platform engineering, and Agile at scale. Targeting Engineering Director / VP Engineering roles at consumer tech companies.',
  },
  {
    label: 'Experience bullet',
    weak: 'Responsible for managing the backend engineering team and delivering projects on time.',
    strong: 'Led a 14-engineer backend squad to deliver 3 major platform migrations (monolith → microservices) over 18 months, reducing p99 API latency by 68% and cutting infrastructure costs by ₹3.2 Cr/year.',
  },
];

const faqs = [
  {
    q: 'What is the best resume format for experienced professionals in India?',
    a: 'Reverse chronological with a strong professional summary. Structure: Contact → Summary (4–6 lines) → Work Experience (quantified bullets, most recent first) → Skills → Education (no CGPA) → Certifications. Two pages is standard and expected for 10+ years of experience.',
  },
  {
    q: 'Should I include CGPA on my resume if I have 10 years of experience?',
    a: 'No. Drop CGPA entirely once you have 5+ years of experience. Recruiters screening for senior roles do not use CGPA as a filter. The space is far better used for quantified achievements in your experience bullets.',
  },
  {
    q: 'How many pages should an experienced professional\'s resume be?',
    a: 'Two pages is standard for professionals with 10+ years of experience in India. Senior roles expect to see full career progression. Never compress 10 years into 1 page — it reads as incomplete. However, ruthlessly remove anything from more than 10 years ago that is not directly relevant to your target role.',
  },
  {
    q: 'How do I write a professional summary for 10+ years of experience?',
    a: 'Formula: [Specialisation] + [Total Years] + [One Quantified Achievement] + [3–5 JD-targeted keywords] + [Target Role]. Example: "Senior Finance Director with 14 years in BFSI, having built and managed ₹8,000 Cr AUM portfolio at HDFC AMC. Expertise in DCF valuation, fund strategy, regulatory compliance (SEBI/AMFI), and investor relations. Targeting CIO / Head of Investments roles at mid-large AMCs or family offices."',
  },
  {
    q: 'Do experienced professionals get rejected by ATS too?',
    a: 'Yes. ATS filtering applies to all candidates regardless of seniority. Common reasons experienced professionals fail ATS: (1) Generic summary not containing the target JD\'s keywords. (2) Two-column or visually designed resume that ATS cannot parse. (3) Not mirroring the exact language of senior-level JDs (which have different keyword requirements from junior roles). CV Prime\'s ATS checker is calibrated for senior roles and will show you exactly what keywords are missing.',
  },
];

export default function ResumeBuilderForExperiencedPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <Briefcase className="h-4 w-4" />
            For mid-senior professionals in India
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Resume builder for experienced professionals — India 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            AI resume tailoring designed for India's mid-senior job market. Paste any senior role JD, fix ATS keyword gaps, and export a 2-page resume that gets you into the shortlist — not the reject pile.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground hover:bg-brand-strong"
            >
              Build my senior resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/ats-checker"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/20"
            >
              Check ATS score
            </Link>
          </div>
        </div>
      </section>

      {/* Why experienced professionals still fail ATS */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Why experienced professionals still fail ATS in India
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Having 10 years of experience does not protect you from ATS rejection. Senior roles in India — especially at product companies, MNCs, and consulting firms — use the same ATS systems as fresher roles. The keyword requirements are just different (and harder to guess).
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: '❌',
                title: 'Generic summary not targeting the next role',
                body: 'A summary that describes what you did (not where you are going) wastes the highest-weighted ATS section.',
              },
              {
                icon: '❌',
                title: 'Not mirroring senior JD language',
                body: 'Senior role keywords differ from junior ones: "P&L ownership" vs "profit responsibility", "OKR-driven" vs "goal-oriented", "C-suite stakeholder management" vs "managing stakeholders."',
              },
              {
                icon: '❌',
                title: 'Visually designed or two-column resume',
                body: 'Many experienced professionals use premium-looking Canva templates. These fail ATS parsing at every seniority level — ATS systems cannot read image PDFs or multi-column layouts.',
              },
              {
                icon: '❌',
                title: 'Using only one resume for all applications',
                body: 'A VP Product resume sent to an Engineering Manager JD will score poorly on ATS. Senior roles require per-application tailoring more than junior roles, not less.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-red-100 bg-red-50/50 p-6">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="mt-3 font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume structure for senior roles */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Resume structure for experienced professionals in India
          </h2>
          <p className="mt-3 text-slate-500">The section-by-section guide for mid-senior roles (5–20 years experience)</p>
          <div className="mt-10 space-y-5">
            {resumeStructure.map((item, i) => (
              <div key={item.section} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-sm font-bold text-cyan-700">
                    {i + 1}
                  </span>
                  <h3 className="font-display text-lg font-bold">{item.section}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.guidance}</p>
                <div className="mt-3 rounded-xl bg-cyan-50 p-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-cyan-700">Senior-specific tip</p>
                  <p className="mt-1 text-sm text-slate-700">{item.seniorNote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Before and after — AI rewrite examples
          </h2>
          <p className="mt-3 text-slate-500">What CV Prime's AI changes in experienced professional resumes</p>
          <div className="mt-10 space-y-10">
            {beforeAfter.map((item) => (
              <div key={item.label}>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">{item.label}</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
                    <p className="mb-2 text-xs font-bold uppercase text-red-600">Before — Weak</p>
                    <p className="text-sm leading-6 text-slate-700">{item.weak}</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                    <p className="mb-2 text-xs font-bold uppercase text-emerald-700">After — Strong</p>
                    <p className="text-sm leading-6 text-slate-700">{item.strong}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How CV Prime works for senior candidates */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">How CV Prime works for senior professionals</h2>
          <div className="mt-10 space-y-6">
            {[
              {
                step: '1',
                title: 'Upload your existing resume (PDF or DOCX)',
                body: 'CV Prime reads your full resume — all experience, skills, and achievements — and builds a structured version you can edit section by section.',
                icon: Zap,
              },
              {
                step: '2',
                title: 'Paste the target job description',
                body: 'Add any JD from Naukri, LinkedIn, or a company career page. CV Prime runs its ATS engine against the JD and gives you a 0–100 keyword match score.',
                icon: TrendingUp,
              },
              {
                step: '3',
                title: 'See exact keyword gaps and fix them with AI',
                body: 'Every missing keyword from the JD is listed with context. One click applies AI-suggested rewrites to your bullets — you review and keep the ones that are accurate.',
                icon: CheckCircle2,
              },
              {
                step: '4',
                title: 'Export a clean ATS-readable PDF',
                body: 'Download a professional PDF that passes Naukri, LinkedIn, Greenhouse, Workday, and Taleo parsing. No watermark on the first 3 exports — free to start.',
                icon: Briefcase,
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 rounded-2xl bg-white p-6 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 font-display text-lg font-bold text-cyan-700">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">
            Resume for experienced professionals — FAQ
          </h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 p-6">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-slate-500">Related guides for senior professionals</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {[
              { href: '/ats-checker', label: 'ATS checker' },
              { href: '/resume-format', label: 'Resume format 2026' },
              { href: '/career-change-resume', label: 'Career change resume' },
              { href: '/resume-writing-service', label: 'AI resume writing service' },
              { href: '/cv-examples', label: 'CV examples by role' },
              { href: '/resume-builder', label: 'AI resume builder' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-cyan-300 hover:text-cyan-700"
              >
                {link.label} <ArrowRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Your experience deserves to get past the ATS filter
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Join experienced professionals across India who use CV Prime to tailor their senior resumes, score 80+ on ATS, and land interviews at product companies, MNCs, and consulting firms.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Build my resume free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
