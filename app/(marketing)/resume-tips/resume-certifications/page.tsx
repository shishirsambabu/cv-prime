import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Certifications on a Resume — How to List Them for India 2026 | CV Prime',
  description:
    'How to list certifications on your resume in India 2026. Which certifications matter most for tech, finance, and operations roles. Where to place them and how to format for ATS.',
  alternates: { canonical: 'https://cv-prime.in/resume-tips/resume-certifications' },
  keywords: [
    'certifications on resume',
    'how to list certifications on resume',
    'resume certifications india',
    'certifications for resume india',
    'best certifications for resume india',
    'resume certifications section',
    'aws certification resume',
    'google certification resume india',
  ],
  openGraph: {
    title: 'Certifications on a Resume — How to List Them for India 2026 | CV Prime',
    description: 'How to list certifications on your resume in India 2026. Which certifications matter most for tech, finance, and operations roles.',
    url: 'https://cv-prime.in/resume-tips/resume-certifications',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Certifications on a Resume — CV Prime' }],
  },
};

const certsByRole = [
  {
    role: 'Tech / Engineering',
    color: 'border-cyan-200 bg-cyan-50',
    labelColor: 'text-cyan-700',
    certs: [
      'AWS Certified Solutions Architect',
      'AWS Certified Developer',
      'Google Cloud Professional (GCP)',
      'Microsoft Azure Administrator (AZ-104)',
      'Certified Kubernetes Administrator (CKA)',
      'Cisco CCNA',
      'Google IT Support Certificate',
      'Python for Everybody (Coursera/Google)',
      'Meta Back-End Developer Certificate',
      'Oracle Java SE Certified',
    ],
  },
  {
    role: 'Data & Analytics',
    color: 'border-violet-200 bg-violet-50',
    labelColor: 'text-violet-700',
    certs: [
      'Google Data Analytics Professional Certificate',
      'IBM Data Science Professional Certificate',
      'Tableau Desktop Specialist',
      'Microsoft Power BI Data Analyst (PL-300)',
      'Databricks Certified Associate Developer',
      'AWS Certified Data Engineer',
      'TensorFlow Developer Certificate',
      'Stanford ML Specialisation (Coursera)',
    ],
  },
  {
    role: 'Finance & Accounting',
    color: 'border-emerald-200 bg-emerald-50',
    labelColor: 'text-emerald-700',
    certs: [
      'CA (Chartered Accountant — ICAI)',
      'CFA (Chartered Financial Analyst)',
      'FRM (Financial Risk Manager)',
      'CMA (Cost & Management Accountant — ICMAI)',
      'CPA (Certified Public Accountant)',
      'Tally ERP 9 / TallyPrime Certified',
      'SAP FICO Certification',
      'NISM Certifications (SEBI)',
    ],
  },
  {
    role: 'Marketing & Growth',
    color: 'border-pink-200 bg-pink-50',
    labelColor: 'text-pink-700',
    certs: [
      'Google Analytics Individual Qualification (GAIQ)',
      'Google Ads Search Certification',
      'HubSpot Inbound Marketing Certification',
      'HubSpot Content Marketing Certification',
      'Meta Blueprint (Facebook Ads)',
      'SEMrush SEO Toolkit Certification',
      'Hootsuite Social Media Marketing',
      'Salesforce Certified Marketing Cloud',
    ],
  },
  {
    role: 'Project Management',
    color: 'border-amber-200 bg-amber-50',
    labelColor: 'text-amber-700',
    certs: [
      'PMP (Project Management Professional)',
      'PRINCE2 Foundation / Practitioner',
      'Certified Scrum Master (CSM)',
      'PMI-ACP (Agile Certified Practitioner)',
      'SAFe Agilist Certification',
      'ITIL 4 Foundation',
      'Six Sigma Green Belt / Black Belt',
      'Lean Six Sigma (KPMG / ISI)',
    ],
  },
  {
    role: 'Operations & Supply Chain',
    color: 'border-rose-200 bg-rose-50',
    labelColor: 'text-rose-700',
    certs: [
      'APICS CPIM (Certified in Production & Inventory Management)',
      'APICS CSCP (Certified Supply Chain Professional)',
      'Lean Manufacturing Certification',
      'ISO 9001 Lead Auditor',
      'Six Sigma Green Belt',
      'SAP MM / WM Certification',
      'Oracle SCM Certified',
    ],
  },
];

const formatExamples = [
  {
    label: 'AWS Certification',
    formatted: 'AWS Certified Solutions Architect — Associate | Amazon Web Services | August 2024 | Credential ID: AWS-SAA-C03-XXXXXX',
  },
  {
    label: 'Google Analytics',
    formatted: 'Google Analytics Individual Qualification (GAIQ) | Google | March 2025 | No expiry',
  },
  {
    label: 'PMP',
    formatted: 'Project Management Professional (PMP) | PMI | January 2024 | PDC: 60 PDUs earned | Credential ID: 1234567',
  },
  {
    label: 'CA (ICAI)',
    formatted: 'Chartered Accountant (CA) | Institute of Chartered Accountants of India (ICAI) | November 2023 | Membership No. XXXXXXX',
  },
];

const doNotInclude = [
  { issue: 'Expired certifications', why: 'An expired AWS cert signals you stopped investing in the skill. Either renew it or remove it.' },
  { issue: 'Low-credibility platform certs', why: 'A certificate of completion from a random YouTube course or unknown platform adds no weight and can hurt credibility. Stick to recognised issuers.' },
  { issue: 'Certs unrelated to the role', why: 'A yoga instructor certificate on a software engineering resume confuses ATS and wastes precious space.' },
  { issue: 'School-level or basic computer certificates', why: '"MS Office Certificate" or "Typing Speed Certificate" are expected baseline skills, not differentiators — remove them.' },
  { issue: 'Very old certs (7+ years) in fast-changing fields', why: 'A 2016 AWS cert in a 2026 market signals you have not kept pace. Remove or update.' },
];

const faqs = [
  {
    q: 'Should I include certifications on my resume in India?',
    a: 'Yes — especially for tech, finance, and data roles. Indian employers and their ATS systems actively scan for certification names as keywords. An AWS, GCP, or CFA certification on your resume acts as a pre-screener that gets you past automated filters. Even for freshers, certifications from Google, Coursera, or Cisco serve as credible proxies for hands-on skills when work experience is limited.',
  },
  {
    q: 'Where should I put the certifications section on my resume?',
    a: 'For freshers and candidates with less than 2 years of experience: place Certifications immediately after your Skills section, before Projects. This positions your strongest proof-of-skill prominently. For experienced professionals (3+ years): place Certifications after your Work Experience section. Your work history is the main signal; certifications support and reinforce it. If you have a single highly prestigious certification (CA, CFA, PMP), you can also mention it in your resume summary line.',
  },
  {
    q: 'How do I list an AWS certification on my resume?',
    a: 'Use this exact format: AWS Certified Solutions Architect — Associate | Amazon Web Services | August 2024 | Credential ID: AWS-SAA-C03-XXXXXX. Use the full official name as it appears on the AWS website — ATS systems look for "AWS Certified Solutions Architect" not just "AWS cert." Include the credential ID so recruiters can verify it on the AWS certification portal. If the certification has an expiry, note the expiry date too.',
  },
  {
    q: 'Do online certifications count on Indian resumes?',
    a: 'Yes, if they are from recognised issuers. Google Career Certificates, IBM Professional Certificates (on Coursera), Microsoft Learn certifications, Meta Developer certificates, HubSpot Academy, and Cisco NetAcad certifications are all well-respected by Indian recruiters. Platform-agnostic certifications (AWS, GCP, Azure, PMP, CFA) that require a proctored exam carry the most weight. Avoid listing "completion certificates" from informal or unverified courses — they do more harm than good.',
  },
  {
    q: 'How many certifications should I list on my resume?',
    a: 'List a maximum of 5–8 certifications that are directly relevant to the target role. Freshers can list up to 6 if each one is from a credible issuer. For experienced professionals, stick to 3–5 high-impact certifications. A long list of 15+ certifications looks padded and makes it harder to identify the strongest credentials.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Resume Tips', item: 'https://cv-prime.in/resume-tips' },
    { '@type': 'ListItem', position: 3, name: 'Certifications on a Resume', item: 'https://cv-prime.in/resume-tips/resume-certifications' },
  ],
};

export default function ResumeCertificationsPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
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
            <span className="text-white">Certifications on a Resume</span>
          </nav>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Certifications on a resume — how to list them for India 2026
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            The right certifications are ATS keywords that get your resume past automated filters. Learn where to place them, how to format each entry, and which certifications actually matter for your role.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong transition">
              Check my resume certifications section <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/ats-checker" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white hover:border-white/40 transition">
              Free ATS checker →
            </Link>
          </div>
        </div>
      </section>

      {/* Why certifications matter */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Why certifications matter for Indian job seekers</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Indian companies — from Tata Consultancy to early-stage startups — use ATS software (Naukri RMS, iCIMS, Zoho Recruit, Lever) to filter resumes before a human ever reads them. These systems are configured to look for specific certification names as keywords. If your resume says &ldquo;cloud experience&rdquo; but the job description says &ldquo;AWS Certified,&rdquo; you may not pass the filter even if you have the skills.
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            Beyond ATS, certifications serve three additional purposes for Indian job seekers:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { title: 'Credibility signal', body: 'A proctored exam certification (AWS, CFA, PMP) signals discipline and verified knowledge — especially important when switching industries or applying to MNCs.' },
              { title: 'Fresher advantage', body: 'With limited work experience, certifications from Google, Cisco, or IBM demonstrate hands-on skill. They can substitute for 1–2 years of experience in screening.' },
              { title: 'Salary leverage', body: 'Candidates with relevant certifications command 10–25% higher offers in tech and finance roles in India, according to Naukri salary data.' },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <p className="font-display text-base font-bold">{card.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where to place */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Where to put certifications on your resume</h2>
          <p className="mt-4 leading-7 text-slate-600">
            The placement of your certifications section depends on your experience level:
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-brand/20 bg-brand/5 p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-brand">Freshers &amp; Early Career (0–2 years)</p>
              <p className="mt-3 font-display text-lg font-bold">After Skills, before Projects</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                When work experience is thin, certifications are your strongest proof of competency. Place them high — right after your Skills section — so a recruiter sees them in the first half of your resume.
              </p>
              <div className="mt-4 rounded-xl border border-brand/10 bg-white p-3 text-xs text-slate-500 font-mono leading-6">
                <p>Summary</p>
                <p>Education</p>
                <p>Skills</p>
                <p className="font-bold text-brand">Certifications ← here</p>
                <p>Projects</p>
                <p>Internships</p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Experienced Professionals (3+ years)</p>
              <p className="mt-3 font-display text-lg font-bold">After Work Experience</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Your work history is the primary signal. Certifications support and reinforce your experience. Place them after your most recent roles, before Education.
              </p>
              <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-3 text-xs text-slate-500 font-mono leading-6">
                <p>Summary</p>
                <p>Work Experience</p>
                <p className="font-bold text-slate-700">Certifications ← here</p>
                <p>Skills</p>
                <p>Education</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to format */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">How to format each certification entry</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Use this format for every entry: <span className="font-semibold text-slate-800">Certification Name | Issuing Organisation | Month Year | Credential ID (optional)</span>. Always use the full official certification name — ATS systems match against exact strings from the job description.
          </p>
          <div className="mt-8 space-y-4">
            {formatExamples.map((ex) => (
              <div key={ex.label} className="rounded-2xl border border-slate-100 p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{ex.label}</p>
                <p className="mt-2 font-mono text-sm text-slate-800 leading-6">{ex.formatted}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-bold text-amber-800">ATS tip: use the exact certification name from the job description</p>
            <p className="mt-2 text-sm leading-6 text-amber-700">
              If the JD says &ldquo;AWS Certified Solutions Architect,&rdquo; do not write &ldquo;Amazon Cloud Certification&rdquo; or &ldquo;AWS Cert.&rdquo; ATS systems match strings literally. Use the exact name — including hyphens, capitalisation, and level (Associate / Professional / Expert).
            </p>
          </div>
        </div>
      </section>

      {/* Best certs by role */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Best certifications by role in India 2026</h2>
          <p className="mt-3 text-slate-500">Focus on certifications that hiring managers in your field actively look for — not the ones that just look impressive</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {certsByRole.map((cat) => (
              <div key={cat.role} className={`rounded-2xl border p-5 ${cat.color}`}>
                <p className={`text-xs font-bold uppercase tracking-wider ${cat.labelColor}`}>{cat.role}</p>
                <ul className="mt-3 space-y-1.5">
                  {cat.certs.map((cert) => (
                    <li key={cert} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Do not include */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Certifications NOT to include on your resume</h2>
          <p className="mt-4 leading-7 text-slate-600">
            A poorly chosen certification entry can hurt your resume more than help it. Avoid these:
          </p>
          <div className="mt-8 space-y-4">
            {doNotInclude.map((item) => (
              <div key={item.issue} className="grid gap-2 rounded-2xl border border-slate-100 p-5 md:grid-cols-[200px_1fr]">
                <div className="rounded-xl border border-red-200 bg-red-50 p-3">
                  <p className="text-xs font-bold uppercase tracking-wide text-red-600">Remove</p>
                  <p className="mt-1 text-sm font-semibold text-red-800">{item.issue}</p>
                </div>
                <div className="flex items-center rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <p className="text-sm leading-6 text-slate-700">{item.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fresher tip */}
      <section className="bg-brand/5 px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-brand/20 bg-white p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-brand">Fresher tip</p>
            <h2 className="mt-3 font-display text-2xl font-bold">Certifications can substitute for work experience</h2>
            <p className="mt-4 leading-7 text-slate-600">
              If you are a fresh graduate with no internships, a cluster of strong certifications — for example, the Google Data Analytics Certificate + Tableau Desktop Specialist + IBM Data Science Certificate — signals the same practical readiness as a 6-month internship to many recruiters.
            </p>
            <p className="mt-3 leading-7 text-slate-600">
              Pair each certification with a personal project that demonstrates you applied the skill. The certification proves you know the theory; the project proves you can execute. Together, they create a compelling profile even without formal work experience.
            </p>
            <Link href="/resume-tips/skills-section" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline">
              How to write a skills section for freshers <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Certifications on a resume — FAQ</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="font-display text-sm font-bold text-slate-500 uppercase tracking-wider">Related resume tips</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { href: '/resume-tips', label: '← All resume tips' },
              { href: '/resume-tips/skills-section', label: 'How to write your skills section' },
              { href: '/resume-tips/ats-keywords', label: 'ATS keywords guide' },
              { href: '/ats-checker', label: 'Free ATS checker' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand hover:text-brand transition">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">Check if your certifications are ATS-optimised — free</h2>
          <p className="mt-4 text-slate-300">CV Prime scans your certifications section against the job description and flags missing keywords before you apply.</p>
          <Link href="/signup?next=/ai-cv" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Check my resume for free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Check my certifications section" message="See if your certifications match the job description keywords — free ATS scan" />
    </main>
  );
}
