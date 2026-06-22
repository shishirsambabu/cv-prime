import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Sparkles, FileText, Zap, CheckCircle2, Clock } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'AI Cover Letter Generator — Free Cover Letter Writer India | CV Prime',
  description:
    'Generate a tailored cover letter in 60 seconds with AI. Paste your resume and job description — CV Prime writes a professional cover letter matching the role. Free to try, no credit card.',
  alternates: { canonical: 'https://cv-prime.in/cover-letter-generator' },
  keywords: [
    'cover letter generator',
    'ai cover letter generator',
    'cover letter generator free',
    'cover letter generator india',
    'cover letter writer ai',
    'automatic cover letter generator',
    'free cover letter generator',
    'ai cover letter writer india 2026',
    'cover letter maker online india',
    'cover letter generator from resume',
    'professional cover letter generator',
    'job application cover letter generator',
  ],
  openGraph: {
    title: 'AI Cover Letter Generator — Free, Tailored, Ready in 60 Seconds | CV Prime',
    description:
      'Generate a professional cover letter tailored to any job description in 60 seconds. Free to try — no credit card required.',
    url: 'https://cv-prime.in/cover-letter-generator',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Cover Letter Generator — CV Prime' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does an AI cover letter generator work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "CV Prime's AI cover letter generator reads your resume and the target job description simultaneously. It extracts your most relevant achievements, identifies the keywords the JD emphasises, and writes a tailored cover letter that connects your specific experience to what the employer needs. It follows the structure that gets interviews: a specific opening, proof of achievement, why-this-company, and a clear call to action.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is an AI-generated cover letter detectable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "CV Prime generates cover letters from your actual experience and the specific JD — not from a generic template. The output is personalised to your background, not a recognisable template. Recruiters evaluate whether the cover letter is specific and relevant, not whether AI assisted in writing it. A specific, well-structured cover letter from AI performs better than a generic hand-written one.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is the cover letter generator free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The AI cover letter generator is included in the free plan with 3 cover letter exports. Pro plan (₹999 one-time) gives unlimited cover letter generation and exports — useful if you are applying to multiple roles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I edit the AI-generated cover letter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The AI generates a complete first draft that you can edit in a live preview. Change any sentence, add a specific reference to the company, or adjust the tone before downloading. The AI gives you a strong starting point — you personalise the final details.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the cover letter generator work for Indian job applications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. CV Prime's cover letter generator understands Indian professional conventions — it writes in Indian English, references the Indian job market context where relevant, and formats the letter appropriately for email or portal submission at Indian companies. It works for roles on Naukri, LinkedIn, and direct company applications.",
      },
    },
  ],
};

const howItWorks = [
  {
    step: '01',
    icon: FileText,
    title: 'Upload your resume',
    desc: 'Upload your existing resume (PDF or DOCX) or use the resume you built with CV Prime. The AI extracts your experience, skills, and achievements.',
  },
  {
    step: '02',
    icon: Zap,
    title: 'Paste the job description',
    desc: 'Copy the full JD from Naukri, LinkedIn, or the company site. The AI reads both your resume and the JD simultaneously to find the best connection points.',
  },
  {
    step: '03',
    icon: Sparkles,
    title: 'AI generates your cover letter',
    desc: "The AI writes a specific, tailored cover letter in 60 seconds. It opens with a strong hook, highlights your most relevant achievement for this role, explains why this company, and ends with a clear call to action.",
  },
  {
    step: '04',
    icon: CheckCircle2,
    title: 'Edit, personalise, and export',
    desc: 'Review the draft, add any personal touches, and export as a PDF or copy the text for email submission. Free for 3 exports.',
  },
];

const coverLetterElements = [
  {
    title: 'Role-specific opening',
    desc: 'Never starts with "I am writing to express my interest." Opens with a specific hook — a reference to the company, the role, or a relevant achievement — that makes the recruiter want to keep reading.',
  },
  {
    title: 'Your strongest relevant achievement',
    desc: 'Pulls the achievement from your resume most relevant to this JD — with the specific number and context — and expands on it with the story behind the result.',
  },
  {
    title: 'Why this company specifically',
    desc: 'Uses signals from the JD and company name to write a genuine-sounding paragraph about why you are interested in this specific company — not "any company looking for a motivated professional."',
  },
  {
    title: 'Clear call to action',
    desc: 'Ends with a specific, confident close — proposing a conversation, referencing your availability, and providing your contact details. Not the passive "I look forward to hearing from you."',
  },
];

const faqs = [
  {
    q: 'How does an AI cover letter generator work?',
    a: "CV Prime's AI cover letter generator reads your resume and the target job description simultaneously. It extracts your most relevant achievements, identifies the keywords the JD emphasises, and writes a tailored cover letter that connects your specific experience to what the employer needs.",
  },
  {
    q: 'Is an AI-generated cover letter detectable?',
    a: "CV Prime generates cover letters from your actual experience and the specific JD — not from a generic template. The output is personalised to your background. Recruiters evaluate whether the cover letter is specific and relevant, not whether AI assisted in writing it.",
  },
  {
    q: 'Is the cover letter generator free?',
    a: 'Yes. The AI cover letter generator is included in the free plan with 3 cover letter exports. Pro plan (₹999 one-time) gives unlimited cover letter generation — useful if you are applying to multiple roles.',
  },
  {
    q: 'Can I edit the AI-generated cover letter?',
    a: 'Yes. The AI generates a complete first draft that you can edit in a live preview. Change any sentence, add a specific reference to the company, or adjust the tone before downloading. The AI gives you a strong starting point — you personalise the final details.',
  },
  {
    q: 'Does the cover letter generator work for Indian job applications?',
    a: "Yes. CV Prime's cover letter generator understands Indian professional conventions — it writes in Indian English and formats the letter appropriately for email or portal submission at Indian companies. It works for roles on Naukri, LinkedIn, and direct company applications.",
  },
  {
    q: 'Should I always send a cover letter with my application in India?',
    a: 'Not always. For portal applications (Naukri, LinkedIn Easy Apply): skip it unless explicitly asked. For direct email applications to a founder or hiring manager: always include one. For career change applications: include one — the cover letter is your chance to explain the pivot. For senior roles (Team Lead and above): include one when applying directly.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Cover Letter Generator', item: 'https://cv-prime.in/cover-letter-generator' },
  ],
};

export default function CoverLetterGeneratorPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, breadcrumbSchema]) }}
      />

      {/* Hero */}
      <section className="bg-slate-950 px-5 pb-20 pt-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <Sparkles className="h-4 w-4" />
            AI Cover Letter Generator — Ready in 60 Seconds
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Generate a Tailored Cover Letter{' '}
            <span className="text-cyan-400">for Any Job in 60 Seconds</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            Paste your resume and the job description. CV Prime&apos;s AI writes a specific, role-tailored
            cover letter that opens strong, proves your value with real achievements, and closes with confidence.
            Free to try.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-8 py-4 text-base font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Generate My Cover Letter Free <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/cover-letter" className="text-sm font-medium text-slate-300 underline underline-offset-4 hover:text-white">
              Learn about cover letters →
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Free plan includes 3 exports · No credit card · Works for all Indian job portals
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { stat: '60s', label: 'Average time to generate a tailored cover letter', source: 'CV Prime data, 2025' },
              { stat: '3×', label: 'higher read rate for specific vs generic cover letters', source: 'LinkedIn research, 2024' },
              { stat: '100%', label: 'tailored to your resume + the specific JD — never a template', source: 'CV Prime guarantee' },
            ].map((item) => (
              <div key={item.stat} className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center">
                <p className="mb-1 text-4xl font-bold text-cyan-600">{item.stat}</p>
                <p className="mb-2 text-sm font-medium text-slate-700">{item.label}</p>
                <p className="text-xs text-slate-400">{item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight">How the cover letter generator works</h2>
            <p className="text-lg text-slate-600">4 steps from job description to interview-winning cover letter</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.step} className="flex flex-col items-start">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50">
                    <Icon className="h-6 w-6 text-cyan-600" />
                  </div>
                  <span className="mb-2 text-sm font-bold text-cyan-600">{s.step}</span>
                  <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
                  <p className="text-sm text-slate-600">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What AI generates */}
      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight">What every AI-generated cover letter includes</h2>
            <p className="text-lg text-slate-600">
              Not a template — a specific letter built from your resume and this job description.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {coverLetterElements.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-7">
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="border-y border-slate-100 bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight">What AI generation does to your opening line</h2>
            <p className="text-slate-600">The opening line determines whether the recruiter reads on. Here is the difference.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
              <p className="mb-3 text-sm font-bold text-red-600">Before: Generic opening</p>
              <p className="rounded-lg bg-white p-4 text-sm text-slate-600 leading-relaxed">
                &ldquo;I am writing to express my interest in the Software Engineer position at your company. I believe my skills and experience make me a strong candidate for this role.&rdquo;
              </p>
              <ul className="mt-4 space-y-1">
                <li className="text-xs text-red-600">✕ Starts with &quot;I am writing to...&quot;</li>
                <li className="text-xs text-red-600">✕ No specific mention of the company</li>
                <li className="text-xs text-red-600">✕ No achievement or proof of value</li>
                <li className="text-xs text-red-600">✕ Used by 70%+ of applicants — invisible</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
              <p className="mb-3 text-sm font-bold text-emerald-600">After: AI-generated, specific</p>
              <p className="rounded-lg bg-white p-4 text-sm text-slate-600 leading-relaxed">
                &ldquo;I have been following Razorpay&apos;s engineering blog since the payments-at-scale post last quarter — and my 3 years building payment reconciliation systems at [Company] is directly relevant to the infrastructure problems you are solving at this scale.&rdquo;
              </p>
              <ul className="mt-4 space-y-1">
                <li className="text-xs text-emerald-600">✓ Company named specifically</li>
                <li className="text-xs text-emerald-600">✓ References real company content</li>
                <li className="text-xs text-emerald-600">✓ Immediately connects their problem to your experience</li>
                <li className="text-xs text-emerald-600">✓ Recruiter wants to read the next sentence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When to use a cover letter */}
      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight">When to use a cover letter for Indian jobs</h2>
            <p className="text-slate-600">Cover letters are not always necessary in India. Here is when they matter.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-emerald-800">Send a cover letter when</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {[
                  'Applying via email directly to a founder or hiring manager',
                  'Making a career change — the letter explains the pivot',
                  'Applying to a startup (founder often reads applications personally)',
                  'Senior roles (Team Lead+) where leadership context matters',
                  'Creative or writing roles where the letter is a writing sample',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-slate-700">Skip it when</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  'Applying via Naukri.com (cover letters are rarely read)',
                  'LinkedIn Easy Apply (only your profile is reviewed)',
                  'Mass recruitment drives at IT services companies',
                  'The application form doesn\'t ask for one',
                  'You don\'t have time to write a specific, tailored letter',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related tools */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold">Related resume and cover letter tools</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              { label: 'Cover Letter Guide', href: '/cover-letter', desc: 'Full guide: when to write, what to include, examples' },
              { label: 'AI Resume Builder', href: '/ai-resume-builder', desc: 'Build a resume to pair with your cover letter' },
              { label: 'Resume Optimizer', href: '/resume-optimizer', desc: 'Optimise your resume for ATS before applying' },
              { label: 'ATS Resume Checker', href: '/ats-checker', desc: 'Score your resume against the JD' },
              { label: 'Cover Letter Examples', href: '/cover-letter-examples', desc: 'See cover letter examples for 49 roles' },
              { label: 'Resume Generator', href: '/resume-generator', desc: 'Generate a tailored resume from any JD' },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <p className="mb-1 font-bold text-slate-950">{tool.label}</p>
                <p className="text-sm text-slate-500">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog links */}
      <section className="border-t border-slate-100 px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold">Learn more about cover letters &amp; applications</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { href: '/blog/cover-letter-guide-india-2026', title: 'How to Write a Cover Letter for Indian Jobs (2026)', desc: '4-paragraph structure, what to avoid, and a full sample — 8 min read' },
              { href: '/blog/ats-resume-mistakes', title: '15 ATS Resume Mistakes That Get You Rejected', desc: 'The most common reasons Indian resumes fail ATS screening — 7 min read' },
              { href: '/blog/career-change-resume-india-2026', title: 'Career Change Resume India 2026', desc: 'How to write a resume and cover letter when switching industries — 10 min read' },
            ].map((post) => (
              <Link key={post.href} href={post.href} className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:shadow-md">
                <p className="mb-2 text-sm font-bold text-slate-950 leading-snug">{post.title}</p>
                <p className="text-xs text-slate-500">{post.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-100 bg-white px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">Cover letter generator FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <h3 className="mb-2 font-bold text-slate-950">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Generate your cover letter now — it is free</h2>
          <p className="mb-8 text-slate-400">
            Tailored to your resume and the job description. Ready in 60 seconds. 3 free exports, no credit card.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-8 py-4 text-base font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Generate My Cover Letter Free <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <StickyCTA />
    </main>
  );
}
