import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, MapPin, CheckCircle2, Star, Users, IndianRupee } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Resume Builder India — Free AI Resume Builder for Indian Jobs 2026 | CV Prime',
  description:
    'The best free resume builder for India in 2026. AI-powered, ATS-optimised for Naukri and Indian MNCs, INR pricing, Indian resume formats. Build a professional resume in 15 minutes. Free to start.',
  alternates: { canonical: 'https://cv-prime.in/resume-builder-india' },
  keywords: [
    'resume builder india',
    'free resume builder india',
    'best resume builder india 2026',
    'resume builder india free',
    'online resume builder india',
    'ai resume builder india',
    'resume builder for naukri',
    'resume builder for indian jobs',
    'resume builder india 2026',
    'professional resume builder india',
    'resume maker india free',
    'resume creator india',
  ],
  openGraph: {
    title: 'Resume Builder India — Free AI Resume for Indian Jobs | CV Prime',
    description:
      'Build a professional, ATS-optimised resume for Indian job applications in 15 minutes. Free to start, INR pricing, works on Naukri and LinkedIn.',
    url: 'https://cv-prime.in/resume-builder-india',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume Builder India — CV Prime' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best resume builder for India in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CV Prime is the best resume builder for India in 2026 because it is designed specifically for Indian job seekers: it understands Indian resume conventions, is priced in INR (₹249/month), optimises for ATS systems used by Indian companies (Naukri, Taleo, iCIMS), and produces resumes that work on Naukri.com, LinkedIn, and Indian company career portals. The free plan includes 3 PDF exports.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a free resume builder for Indian job seekers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. CV Prime is free to use — you can build a complete resume with AI assistance and download 3 PDFs without a credit card. The free plan includes ATS scoring, keyword gap analysis, AI bullet rewrites, and all 8 professional templates. Pro plan is ₹249/month for unlimited exports.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is an Indian resume different from an international resume?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Indian resumes differ from international resumes in several ways: (1) Length — Indian resumes are typically 1–2 pages (2 pages accepted for experienced professionals), while US resumes aim for 1 page. (2) Date of birth — Sometimes included in Indian resumes for traditional corporate and government roles; never included in US/UK resumes. (3) Photo — Optional in India for some sectors; not expected for IT and MNC roles. (4) Summary style — Indian resumes traditionally used an Objective statement; professional summaries are now the modern standard. CV Prime handles all Indian resume conventions correctly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will a resume built on CV Prime work on Naukri.com?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. CV Prime exports text-based PDFs that Naukri.com can parse and index correctly. The text is selectable, ATS-readable, and formatted to score well in Naukri\'s internal ranking system. We recommend uploading as a PDF to Naukri for best parsing results — not as a DOCX.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does CV Prime work for freshers in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. CV Prime is used by tens of thousands of freshers in India each year. For freshers with no work experience, CV Prime helps you structure your Academic Projects section, write a strong objective or summary, and create a keyword-matched skills section — so your resume competes effectively even without full-time work experience.',
      },
    },
  ],
};

const indianFeatures = [
  {
    icon: MapPin,
    title: 'Optimised for Indian ATS systems',
    body: 'CV Prime calibrates its ATS scoring against Naukri RMS, Taleo, iCIMS, Greenhouse, Workday, and SmartRecruiters — the systems used by Indian IT majors, BFSI firms, and MNCs.',
  },
  {
    icon: IndianRupee,
    title: 'Priced for India',
    body: 'Pro at ₹249/month — not $12–20 converted to ₹1,500+. Payments via UPI, debit card, credit card, and net banking. 3 free PDF exports with no credit card required.',
  },
  {
    icon: Users,
    title: 'Understands Indian hiring conventions',
    body: 'Knows when Date of Birth and Photo are expected (government, traditional corporate) vs. when they hurt your chances (IT, MNC, startup roles). Handles CTC disclosure, Indian degree names, and Indian phone number formats correctly.',
  },
  {
    icon: Star,
    title: 'Templates designed for Indian recruiters',
    body: '8 ATS-safe templates used by Indian professionals: from Classic (BFSI, consulting) to Modern (product, startups) to Academic (research, PSU). Every template is single-column and ATS-parseable.',
  },
];

const indianJobPortals = [
  { portal: 'Naukri.com', support: 'Text-based PDF uploads parse correctly on Naukri. ATS score calibrated for Naukri RMS.' },
  { portal: 'LinkedIn India', support: 'PDF exports are clean and text-selectable. Profile import supported.' },
  { portal: 'Instahyre', support: 'Clean PDF format parses correctly. Skills section optimised for Instahyre matching.' },
  { portal: 'Cutshort', support: 'ATS-safe formatting works with Cutshort\'s AI candidate matching.' },
  { portal: 'AngelList / Wellfound', support: 'Concise, achievement-led format preferred by startup founders on Wellfound.' },
  { portal: 'Hirist (tech-focused)', support: 'Technical skills section and GitHub links formatted for developer-focused portals.' },
];

const faqs = [
  {
    q: 'What is the best resume builder for India in 2026?',
    a: 'CV Prime is the best resume builder for India in 2026 because it is designed specifically for Indian job seekers: INR pricing (₹249/month), ATS scoring calibrated for Indian company systems, and understanding of Indian resume conventions. Free plan includes 3 PDF exports with no credit card.',
  },
  {
    q: 'Is there a free resume builder for Indian job seekers?',
    a: 'Yes. CV Prime is free — build a complete resume with AI assistance and download 3 PDFs without a credit card. The free plan includes ATS scoring, keyword gap analysis, AI bullet rewrites, and all 8 templates.',
  },
  {
    q: 'How is an Indian resume different from an international resume?',
    a: 'Indian resumes: (1) Can be 2 pages for experienced professionals (US resumes aim for 1 page). (2) Sometimes include Date of Birth for traditional and government roles. (3) May include a photo for certain sectors. (4) Use "Objective" statements in some traditional formats, though Professional Summary is now the modern standard. CV Prime handles all of this.',
  },
  {
    q: 'Will a CV Prime resume work on Naukri.com?',
    a: "Yes. CV Prime exports text-based PDFs that Naukri parses and indexes correctly. The text is selectable and ATS-readable. Upload as PDF to Naukri for best results.",
  },
  {
    q: 'Does CV Prime work for freshers in India?',
    a: 'Yes. CV Prime is used by tens of thousands of Indian freshers. For freshers with no work experience, it helps you structure your Academic Projects section, write a strong objective, and create a keyword-matched skills section — so your resume competes effectively.',
  },
  {
    q: 'What sections should an Indian resume have?',
    a: 'Standard Indian resume sections: (1) Contact Information with city and LinkedIn. (2) Professional Summary (3–5 lines, tailored per application). (3) Work Experience — reverse chronological, 3–5 bullet points per role. (4) Education — with CGPA if 7.5+ for freshers. (5) Skills — technical skills in a dedicated, labelled section. (6) Certifications (if relevant). (7) Projects (for freshers and engineers). All CV Prime templates follow this structure.',
  },
];

export default function ResumBuilderIndiaPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5 text-sm font-bold text-orange-300">
            <MapPin className="h-4 w-4" />
            Resume Builder for India — Built for Indian Jobs
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The Best Free Resume Builder{' '}
            <span className="text-orange-400">for Indian Job Seekers in 2026</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            CV Prime is the only resume builder designed specifically for India — ATS-optimised for Naukri and Indian MNCs,
            INR pricing, Indian resume conventions, and AI that understands the Indian job market.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-400 px-8 py-4 text-base font-bold text-slate-950 transition hover:bg-orange-300"
            >
              Build My Resume Free <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/templates" className="text-sm font-medium text-slate-300 underline underline-offset-4 hover:text-white">
              See all templates →
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Free plan: 3 PDF exports · No credit card · Pro at ₹249/month
          </p>
        </div>
      </section>

      {/* Indian market stats */}
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { stat: '75%', label: 'of Indian resumes rejected by ATS before a recruiter reads them', source: 'Jobscan, 2024' },
              { stat: '250+', label: 'average applications per corporate role at Indian companies', source: 'Naukri data, 2025' },
              { stat: '8M+', label: 'engineers graduating in India annually — the competition is real', source: 'AICTE, 2025' },
            ].map((item) => (
              <div key={item.stat} className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center">
                <p className="mb-1 text-4xl font-bold text-orange-500">{item.stat}</p>
                <p className="mb-2 text-sm font-medium text-slate-700">{item.label}</p>
                <p className="text-xs text-slate-400">{item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CV Prime for India */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight">Why CV Prime is India&apos;s best resume builder</h2>
            <p className="text-lg text-slate-600">
              Built for India. Not adapted from a US tool.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {indianFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div key={feat.title} className="flex items-start gap-5 rounded-2xl bg-white p-7 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50">
                    <Icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold">{feat.title}</h3>
                    <p className="text-sm text-slate-600">{feat.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Indian resume needs */}
      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight">What a strong Indian resume needs in 2026</h2>
            <p className="text-lg text-slate-600">The 7-section structure that passes ATS and impresses Indian recruiters.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { num: '01', section: 'Contact Information', detail: 'Name, city, phone (+91), email, LinkedIn URL. No full address needed. Date of birth only if specifically requested.' },
              { num: '02', section: 'Professional Summary', detail: 'Role-specific 3–5 lines. Use the job title from the JD. Include 2–3 keywords that the JD emphasises. Never write a generic objective.' },
              { num: '03', section: 'Work Experience', detail: 'Reverse chronological. 3–5 bullet points per role starting with strong action verbs. Quantify every achievement (₹, %, users, time saved).' },
              { num: '04', section: 'Skills', detail: 'Dedicated, labelled section. Grouped by category for tech roles. This is where ATS extracts structured keywords — not from buried bullet points.' },
              { num: '05', section: 'Education', detail: 'Degree, institution, city, year. CGPA/GPA if 7.5+ (for freshers and within 5 years of graduation). Include 10th/12th board for freshers only.' },
              { num: '06', section: 'Certifications', detail: 'Only include if relevant to the target role. AWS, PMP, CFA, Google Analytics, NISM are valued certifications in Indian corporate hiring.' },
              { num: '07', section: 'Projects', detail: 'Essential for freshers. For each project: technologies used + problem solved + measurable outcome. Links to GitHub or live project when available.' },
            ].map((item) => (
              <div key={item.num} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <span className="mb-2 block text-sm font-bold text-orange-500">{item.num}</span>
                <h3 className="mb-2 font-bold text-slate-950">{item.section}</h3>
                <p className="text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works on Indian job portals */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight">Works on every major Indian job portal</h2>
            <p className="text-lg text-slate-600">
              CV Prime resumes are text-based PDFs that parse correctly on all Indian hiring platforms.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-left">
                  <th className="pb-4 pr-4 text-sm font-bold text-slate-500 uppercase tracking-wide">Job portal</th>
                  <th className="pb-4 text-sm font-bold text-slate-500 uppercase tracking-wide">CV Prime support</th>
                </tr>
              </thead>
              <tbody>
                {indianJobPortals.map((row, i) => (
                  <tr key={row.portal} className={i < indianJobPortals.length - 1 ? 'border-b border-slate-100' : ''}>
                    <td className="py-4 pr-4 font-bold text-slate-950">{row.portal}</td>
                    <td className="py-4 text-sm text-slate-600">{row.support}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related tools */}
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold">More CV Prime tools for Indian job seekers</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              { label: 'AI Resume Builder', href: '/ai-resume-builder', desc: 'Build with AI from scratch or upload' },
              { label: 'CV Builder India', href: '/cv-builder-india', desc: 'India-specific CV builder guide' },
              { label: 'Free Resume Builder', href: '/free-resume-builder', desc: 'Build a resume free — 3 PDF downloads' },
              { label: 'ATS Resume Checker', href: '/ats-checker', desc: 'Score your resume for any Indian JD' },
              { label: 'Resume Optimizer', href: '/resume-optimizer', desc: 'Tailor your resume for ATS in 2 minutes' },
              { label: 'Fresher Resume Guide', href: '/fresher-resume', desc: 'Resume guide for 0-experience job seekers' },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="rounded-2xl bg-slate-50 p-5 shadow-sm transition hover:shadow-md"
              >
                <p className="mb-1 font-bold text-slate-950">{tool.label}</p>
                <p className="text-sm text-slate-500">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold">What Indian job seekers say</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: 'Karthik R.', city: 'Bengaluru', role: 'Backend Engineer', text: 'Got my Amazon interview within 2 weeks of using CV Prime to optimise my resume. The ATS keyword gap report showed me exactly what was missing.' },
              { name: 'Sneha P.', city: 'Mumbai', role: 'Data Analyst', text: 'As a fresher, I didn\'t know how to present my projects. CV Prime structured everything correctly and I got calls from 3 companies in my first week.' },
              { name: 'Rahul V.', city: 'Hyderabad', role: 'Product Manager', text: 'Switching from IT to product was tough. CV Prime\'s AI rewrote my engineering experience in product language — got 4 PM interviews in one month.' },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="mb-4 text-sm text-slate-600 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-bold text-slate-950">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role} · {t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-100 bg-white px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">Resume builder India FAQ</h2>
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
          <h2 className="mb-4 text-3xl font-bold">Build your Indian resume — free</h2>
          <p className="mb-8 text-slate-400">
            ATS-optimised for Indian companies. 3 free PDF downloads. Works on Naukri, LinkedIn, and every Indian job portal.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-xl bg-orange-400 px-8 py-4 text-base font-bold text-slate-950 transition hover:bg-orange-300"
          >
            Build My Resume Free <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <StickyCTA />
    </main>
  );
}
