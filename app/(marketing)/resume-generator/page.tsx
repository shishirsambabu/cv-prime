import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Sparkles, Wand2, FileText, Zap, BarChart3 } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'AI Resume Generator — Generate a Resume from Job Description Free | CV Prime',
  description:
    'Generate a professional resume automatically with AI. Paste your experience and a job description — CV Prime\'s resume generator creates an ATS-optimised resume with tailored bullets, keywords, and score. Free to start.',
  alternates: { canonical: 'https://cv-prime.in/resume-generator' },
  keywords: [
    'resume generator',
    'ai resume generator',
    'resume generator free',
    'resume generator india',
    'automatic resume generator',
    'resume generator from job description',
    'ai generated resume',
    'resume generator online india 2026',
    'resume creator ai',
    'generate resume ai',
    'resume builder generator',
    'automatic cv generator',
  ],
  openGraph: {
    title: 'AI Resume Generator — Generate Your Resume from a Job Description | CV Prime',
    description:
      'Paste a job description and let AI generate a tailored, ATS-optimised resume. Free to try — no credit card required.',
    url: 'https://cv-prime.in/resume-generator',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Resume Generator — CV Prime' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does an AI resume generator work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CV Prime\'s AI resume generator reads your existing experience (uploaded as PDF or DOCX, or entered manually) and the target job description. The AI identifies keyword gaps, rewrites your experience bullets to match the JD language and keywords, strengthens your summary, and generates a complete ATS-optimised resume. It does not fabricate experience — it restructures and rewrites what you have provided.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is an AI-generated resume detectable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CV Prime does not generate resumes from nothing — it rewrites and optimises the content you provide. The final resume reflects your real experience, skills, and achievements, expressed more clearly. Recruiters evaluate the content; a resume with strong, specific bullets and good ATS keyword match will perform well regardless of whether AI assisted in writing it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I generate a resume for multiple job descriptions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. CV Prime supports multiple resume versions — you can generate a tailored resume for each role you apply to. Free plan includes 3 PDF exports. Pro (₹999 one-time) gives unlimited exports, so you can apply to as many roles as you want with tailored resumes for each.',
      },
    },
    {
      '@type': 'Question',
      name: 'How accurate is the ATS score from the resume generator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "CV Prime's ATS score reflects keyword coverage, section completeness, formatting compliance, and bullet quality for the specific job description you paste. It is calibrated against the types of ATS systems used by Indian companies (Taleo, iCIMS, Greenhouse, Naukri ATS). A score of 75+ significantly improves your likelihood of passing automated screening.",
      },
    },
  ],
};

const howItWorks = [
  {
    step: '01',
    icon: FileText,
    title: 'Upload your current resume',
    desc: 'Upload a PDF or DOCX, paste text, or build from scratch. The AI extracts your work history, skills, and achievements automatically.',
  },
  {
    step: '02',
    icon: Zap,
    title: 'Paste the target job description',
    desc: 'Copy the full JD from any job board — Naukri, LinkedIn, Indeed, or the company site. The AI reads both documents simultaneously.',
  },
  {
    step: '03',
    icon: Wand2,
    title: 'AI generates your tailored resume',
    desc: "The AI rewrites your bullets with the JD's exact keywords, strengthens your professional summary, fills keyword gaps, and restructures weak sections — in seconds.",
  },
  {
    step: '04',
    icon: BarChart3,
    title: 'Review your ATS score and export',
    desc: 'See your 0–100 ATS match score, review every AI change before accepting, choose a template, and export a recruiter-ready PDF. Free for 3 exports.',
  },
];

const whatAIGenerates = [
  {
    title: 'Tailored professional summary',
    desc: 'A 3-line summary that uses the exact role title and key skills from the JD — written to pass ATS and impress the first human reader.',
  },
  {
    title: 'Rewritten experience bullets',
    desc: 'Weak duty descriptions become strong impact statements: action verb + specific output + quantified result + relevant keyword from JD.',
  },
  {
    title: 'Keyword-matched skills section',
    desc: 'Your skills section is reorganised to front-load the most important skills from the JD — the zone ATS systems weight most heavily.',
  },
  {
    title: 'ATS compatibility report',
    desc: 'A full breakdown: keyword coverage %, missing skills, section gaps, formatting issues, and a 0–100 ATS match score for the specific role.',
  },
];

const faqs = [
  {
    q: 'How does an AI resume generator work?',
    a: "CV Prime's AI resume generator reads your existing experience (uploaded as PDF or DOCX, or entered manually) and the target job description. The AI identifies keyword gaps, rewrites your experience bullets to match the JD language and keywords, strengthens your summary, and generates a complete ATS-optimised resume. It does not fabricate experience — it restructures and rewrites what you have provided.",
  },
  {
    q: 'Is an AI-generated resume detectable?',
    a: 'CV Prime does not generate resumes from nothing — it rewrites and optimises the content you provide. The final resume reflects your real experience, skills, and achievements, expressed more clearly. Recruiters evaluate the content; a resume with strong, specific bullets and good ATS keyword match will perform well regardless of whether AI assisted in writing it.',
  },
  {
    q: 'Can I generate a resume for multiple job descriptions?',
    a: 'Yes. CV Prime supports multiple resume versions — you can generate a tailored resume for each role you apply to. Free plan includes 3 PDF exports. Pro (₹999 one-time) gives unlimited exports, so you can apply to as many roles as you want with tailored resumes for each.',
  },
  {
    q: 'How accurate is the ATS score from the resume generator?',
    a: "CV Prime's ATS score reflects keyword coverage, section completeness, formatting compliance, and bullet quality for the specific job description you paste. It is calibrated against the types of ATS systems used by Indian companies (Taleo, iCIMS, Greenhouse, Naukri ATS). A score of 75+ significantly improves your likelihood of passing automated screening.",
  },
  {
    q: 'Does the AI resume generator work for freshers?',
    a: 'Yes. For freshers with limited experience, the AI focuses on your academic projects, skills, and certifications. It rewrites project descriptions using industry-standard language and ensures your skills section is keyword-matched to the JD. The generator includes a fresher-specific resume objective writer.',
  },
  {
    q: 'Can I edit the AI-generated resume before downloading?',
    a: 'Yes. Every AI-generated change is shown as a before/after comparison. You review and approve each rewrite individually — the AI generates suggestions, you make the final decisions. Nothing is automatically applied without your review.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Resume Generator', item: 'https://cv-prime.in/resume-generator' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'CV Prime AI Resume Generator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  featureList: [
    'Generate a tailored resume from a job description',
    'Rewritten experience bullets',
    'Keyword-matched skills section',
    'ATS compatibility report',
  ],
};

export default function ResumeGeneratorPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, breadcrumbSchema, softwareApplicationSchema]) }}
      />

      {/* Hero */}
      <section className="bg-slate-950 px-5 pb-20 pt-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <Sparkles className="h-4 w-4" />
            AI Resume Generator — Built for ATS
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            AI That Generates Your{' '}
            <span className="text-cyan-400">Resume from Any Job Description</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            Paste a job description and your existing resume. AI generates a tailored version with matched keywords,
            stronger bullets, and a 0–100 ATS score — in under 2 minutes. Free to start.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-8 py-4 text-base font-bold text-white transition hover:bg-cyan-300"
            >
              Generate My Resume Free <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/resume-examples" className="text-sm font-medium text-slate-300 underline underline-offset-4 hover:text-white">
              See resume examples →
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Free forever · 3 PDF exports · No fabrication · AI rewrites only what you provide
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white/[0.04] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight">How the AI resume generator works</h2>
            <p className="text-lg text-slate-300">4 steps from job description to interview-ready resume</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.step} className="flex flex-col items-start">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
                    <Icon className="h-6 w-6 text-cyan-600" />
                  </div>
                  <span className="mb-2 text-sm font-bold text-cyan-600">{s.step}</span>
                  <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
                  <p className="text-sm text-slate-300">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What AI generates */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight">What the AI generates for you</h2>
            <p className="text-lg text-slate-300">
              Not a generic resume — a version of your resume tailored to the specific role you are applying for.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {whatAIGenerates.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white/[0.04] p-7 shadow-sm">
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="border-y border-white/10 bg-white/[0.04] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight">What AI generation actually does to your bullets</h2>
            <p className="text-slate-300">See the difference between a generic bullet and an AI-generated, JD-matched bullet.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
              <p className="mb-3 text-sm font-bold text-red-600">Before: Generic bullet</p>
              <p className="rounded-lg bg-white/[0.04] p-4 text-sm text-slate-300 leading-relaxed">
                &ldquo;Responsible for managing social media accounts and creating content for the team.&rdquo;
              </p>
              <ul className="mt-4 space-y-1">
                <li className="text-xs text-red-600">✕ No action verb</li>
                <li className="text-xs text-red-600">✕ No metrics</li>
                <li className="text-xs text-red-600">✕ No JD keywords matched</li>
                <li className="text-xs text-red-600">✕ ATS score: 0/100 for this bullet</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-500/10 p-6">
              <p className="mb-3 text-sm font-bold text-emerald-600">After: AI-generated, JD-matched</p>
              <p className="rounded-lg bg-white/[0.04] p-4 text-sm text-slate-300 leading-relaxed">
                &ldquo;Grew organic Instagram following by 340% (8K → 35K) and reduced content production time by 60% by implementing a structured editorial calendar aligned with product launch cycles.&rdquo;
              </p>
              <ul className="mt-4 space-y-1">
                <li className="text-xs text-emerald-600">✓ Strong action verb (Grew)</li>
                <li className="text-xs text-emerald-600">✓ Quantified outcome (340%, 60%)</li>
                <li className="text-xs text-emerald-600">✓ JD keywords matched</li>
                <li className="text-xs text-emerald-600">✓ Impact is clear and specific</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related tools */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold">Related resume tools</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              { label: 'AI Resume Builder', href: '/ai-resume-builder', desc: 'Build with AI from scratch or upload' },
              { label: 'Resume Maker', href: '/resume-maker', desc: 'Make a professional resume online free' },
              { label: 'ATS Resume Checker', href: '/ats-checker', desc: 'Score your resume against any JD' },
              { label: 'Resume Optimizer', href: '/resume-optimizer', desc: 'Optimise your existing resume for ATS' },
              { label: 'Cover Letter Generator', href: '/cover-letter-generator', desc: 'Generate a tailored cover letter' },
              { label: 'Resume Examples', href: '/resume-examples', desc: 'Samples for 49 roles in India' },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="rounded-2xl bg-white/[0.04] p-5 shadow-sm transition hover:shadow-md"
              >
                <p className="mb-1 font-bold text-white">{tool.label}</p>
                <p className="text-sm text-slate-400">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 bg-white/[0.04] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">AI resume generator FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="mb-2 font-bold text-white">{faq.q}</h3>
                <p className="text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Generate your tailored resume — it is free</h2>
          <p className="mb-8 text-slate-400">
            Paste a job description. AI generates your tailored resume in under 2 minutes. 3 free PDF exports, no credit card.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-8 py-4 text-base font-bold text-white transition hover:bg-cyan-300"
          >
            Generate My Resume Free <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <StickyCTA />
    </main>
  );
}
