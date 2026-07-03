import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, FileText, Sparkles } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Cover Letter Examples 2026 — By Role, Industry & Experience Level | CV Prime',
  description:
    'Free cover letter examples for India 2026. Real-world cover letter samples for software engineers, product managers, freshers, career changers, and 20+ more roles. AI-powered cover letter generator included.',
  alternates: { canonical: 'https://cv-prime.in/cover-letter-examples' },
  keywords: [
    'cover letter examples',
    'cover letter sample',
    'cover letter template',
    'cover letter examples india',
    'cover letter for freshers',
    'software engineer cover letter',
    'product manager cover letter',
    'cover letter format india',
    'how to write a cover letter',
    'cover letter example 2026',
    'professional cover letter',
    'cover letter generator',
    'ai cover letter',
    'cover letter sample india',
  ],
  openGraph: {
    title: 'Cover Letter Examples 2026 — 20+ Role-Specific Samples | CV Prime',
    description:
      'Free cover letter examples for 20+ roles in India. Software engineers, product managers, freshers, career changers — with AI generation.',
    url: 'https://cv-prime.in/cover-letter-examples',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Cover Letter Examples 2026 — CV Prime' }],
  },
};

const roles = [
  { title: 'Software Engineer', slug: 'software-engineer', industry: 'Technology', experience: 'All levels' },
  { title: 'Product Manager', slug: 'product-manager', industry: 'Product', experience: 'All levels' },
  { title: 'Data Analyst', slug: 'data-analyst', industry: 'Analytics', experience: 'All levels' },
  { title: 'UX Designer', slug: 'ux-designer', industry: 'Design', experience: 'All levels' },
  { title: 'Marketing Manager', slug: 'marketing-manager', industry: 'Marketing', experience: 'Mid-senior' },
  { title: 'HR Manager', slug: 'hr-manager', industry: 'Human Resources', experience: 'Mid-senior' },
  { title: 'Finance Analyst', slug: 'finance-analyst', industry: 'Finance', experience: 'All levels' },
  { title: 'Business Analyst', slug: 'business-analyst', industry: 'Consulting', experience: 'All levels' },
  { title: 'DevOps Engineer', slug: 'devops-engineer', industry: 'Technology', experience: 'All levels' },
  { title: 'Sales Executive', slug: 'sales-executive', industry: 'Sales', experience: 'All levels' },
  { title: 'Frontend Developer', slug: 'frontend-developer', industry: 'Technology', experience: 'All levels' },
  { title: 'Full Stack Developer', slug: 'full-stack-developer', industry: 'Technology', experience: 'All levels' },
  { title: 'QA Engineer', slug: 'qa-engineer', industry: 'Technology', experience: 'All levels' },
  { title: 'Operations Manager', slug: 'operations-manager', industry: 'Operations', experience: 'Mid-senior' },
  { title: 'Content Writer', slug: 'content-writer', industry: 'Media & Content', experience: 'All levels' },
  { title: 'Fresher (Any role)', slug: 'fresher', industry: 'All industries', experience: 'Entry level' },
  { title: 'Career Changer', slug: 'career-changer', industry: 'All industries', experience: 'Varies' },
  { title: 'Internship Application', slug: 'internship', industry: 'All industries', experience: 'Student' },
];

const coverLetterStructure = [
  {
    section: 'Opening paragraph',
    purpose: 'Hook + role + referral or context',
    example: '"I am applying for the Senior Product Manager role at Groww. As a PM with 4 years of experience building B2B payment products at HDFC SmartHub, I have the fintech depth and growth-stage product intuition you are looking for."',
    tips: ['Name the specific role and company', 'Lead with your strongest credential immediately', 'Reference a referral or specific trigger if applicable'],
  },
  {
    section: 'Why this company',
    purpose: 'Show you researched them — not generic',
    example: '"Groww\'s recent push into merchant lending (PayLater) directly overlaps with the credit product I built at SmartHub — I want to work on the harder, regulated version of the same problem at scale."',
    tips: ['Reference something specific about the company (product, news, mission)', 'Connect their work to your experience or motivation', 'Avoid generic praise like "innovative company with great culture"'],
  },
  {
    section: 'Your strongest proof',
    purpose: '2–3 bullet-style achievements that match the JD',
    example: '"At SmartHub: increased merchant activation by 38% by redesigning onboarding (from 12 steps to 5). Launched a merchant credit product processing ₹45Cr/month within 6 months of launch."',
    tips: ['Pick 2–3 achievements that directly map to the job description requirements', 'Every bullet must have a metric or outcome', 'Match the language and keywords from the JD'],
  },
  {
    section: 'Closing',
    purpose: 'Clear ask + enthusiasm + contact',
    example: '"I would welcome the opportunity to discuss how my experience scaling payment products maps to Groww\'s next phase. I can be reached at arjun.sharma@gmail.com or +91-98765-43210."',
    tips: ['Ask clearly for an interview or conversation', 'Keep it 2 sentences — do not pad', 'Include your email and phone again (even though they\'re on your resume)'],
  },
];

const doAndDont = [
  { do: 'Address the hiring manager by name if you can find it', dont: 'Use "To Whom It May Concern" or "Dear Sir/Madam"' },
  { do: 'Tailor every cover letter to the specific role and company', dont: 'Send the same letter to every company with just the company name swapped' },
  { do: 'Lead with your strongest achievement in sentence 2', dont: 'Start with "I am writing to apply for..." (every cover letter starts this way)' },
  { do: 'Keep it to 3–4 short paragraphs, under 350 words', dont: 'Write more than one page — recruiters do not read long cover letters' },
  { do: 'Quantify every achievement ("increased by 40%", "reduced by 2 days")', dont: 'Use vague descriptions ("significantly improved", "responsible for")' },
  { do: 'Match 5+ keywords from the job description naturally', dont: 'Ignore the JD and write a generic summary of your career' },
  { do: 'End with a clear call to action (asking for an interview)', dont: 'End passively ("I hope to hear from you")' },
];

const faqs = [
  {
    q: 'Do I need a cover letter when applying for jobs in India?',
    a: 'Not always — many Indian job portals (Naukri, Shine) don\'t have a mandatory cover letter field. However, when a cover letter is requested (via LinkedIn Easy Apply, company career portals, or email applications), a tailored cover letter can be the difference between a shortlist and a rejection. For senior roles (5+ years) and international applications, cover letters are almost always expected.',
  },
  {
    q: 'How long should a cover letter be for India?',
    a: '250–350 words is the ideal length for most Indian employers. That is 3–4 short paragraphs: why you\'re applying, your strongest proof points, and a clear ask for an interview. Recruiters spend under 30 seconds scanning a cover letter — keep it tight and impactful.',
  },
  {
    q: 'What is the best way to start a cover letter?',
    a: 'Name the role, show you know the company, and lead with your strongest credential — all in the first two sentences. Example: "I\'m applying for the Backend Engineering role at Zepto. I\'ve spent 3 years building the same infrastructure problems at a different fast-commerce company — and I\'d like to work on the harder version at Zepto\'s scale." This is immediately more compelling than any generic opening.',
  },
  {
    q: 'Should I use AI to write my cover letter?',
    a: 'Yes, with one condition: you must personalise the output. AI is excellent at structuring a cover letter around your achievements and matching it to a job description — that\'s exactly what CV Prime\'s AI cover letter generator does. What AI cannot do is know why you specifically want this company or role. Add those 2–3 sentences yourself.',
  },
  {
    q: 'Can I use the same cover letter for multiple companies?',
    a: 'Only the structure — not the content. Your opening paragraph, company-specific paragraph, and closing must be tailored to each company and role. The middle achievements section can be reused if the roles are similar, but always check that the keywords match the specific JD. CV Prime generates a fresh, tailored cover letter for each role you apply to.',
  },
  {
    q: 'What should a fresher\'s cover letter include?',
    a: 'For freshers: (1) State your degree, college, and graduation year. (2) Reference a relevant internship, project, or course that shows you have the foundational skills. (3) Explain why you specifically want this company — show you\'ve researched them. (4) Ask clearly for an interview. Freshers can make up for lack of experience with enthusiasm, specificity, and research depth.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Cover Letter Examples', item: 'https://cv-prime.in/cover-letter-examples' },
  ],
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Cover Letter Examples — CV Prime',
  description: 'Free cover letter examples for 20+ roles in India. ATS-optimised templates with role-specific guidance.',
  url: 'https://cv-prime.in/cover-letter-examples',
};

export default function CoverLetterExamplesPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-rose-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-400/10 px-4 py-1.5 text-sm font-bold text-rose-300">
            <FileText className="h-4 w-4" />
            Cover letter examples — 20+ roles
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Cover letter examples for every role in India — 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Free cover letter samples for software engineers, product managers, freshers, career changers, and 20+ more roles. Each example follows the structure that actually gets interviews in India.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-rose-400 px-8 py-3.5 text-base font-bold text-slate-950 transition hover:bg-rose-300"
            >
              Generate my cover letter free
              <Sparkles className="h-4 w-4" />
            </Link>
            <Link
              href="/cover-letter-generator"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              AI cover letter guide
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free plan · AI generation for every role · No credit card</p>
        </div>
      </section>

      {/* Role grid */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
<div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Cover letter examples by role</h2>
            <p className="mt-4 text-slate-500">Click any role to see a real-world cover letter example with breakdown</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <Link
                key={role.slug}
                href="/signup?next=/ai-cv"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-rose-200 hover:shadow-md"
              >
                <p className="font-display text-lg font-bold text-slate-950 group-hover:text-rose-700">{role.title}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">{role.industry}</span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">{role.experience}</span>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-rose-600 opacity-0 transition group-hover:opacity-100">
                  Generate with AI <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-rose-100 bg-rose-50 p-6 text-center">
            <Sparkles className="mx-auto h-8 w-8 text-rose-500" />
            <h3 className="mt-3 font-display text-xl font-bold text-slate-950">Don&apos;t see your role?</h3>
            <p className="mt-2 text-sm text-slate-600">CV Prime&apos;s AI generates tailored cover letters for any role and company — just paste the job description.</p>
            <Link href="/signup?next=/ai-cv" className="mt-5 inline-flex items-center gap-2 rounded-full bg-rose-500 px-6 py-2.5 text-sm font-bold text-white hover:bg-rose-600 transition">
              Generate for my role <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cover letter structure */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">The cover letter structure that gets interviews</h2>
            <p className="mt-4 text-slate-500">Four sections — with examples of what to write in each</p>
          </div>
          <div className="mt-12 space-y-6">
            {coverLetterStructure.map((section, i) => (
              <div key={section.section} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-100 font-display text-sm font-bold text-rose-700">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-slate-950">{section.section}</h3>
                    <p className="mt-1 text-sm text-slate-500">{section.purpose}</p>
                    <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Example</p>
                      <p className="mt-2 text-sm italic leading-6 text-slate-700">{section.example}</p>
                    </div>
                    <ul className="mt-4 space-y-1.5">
                      {section.tips.map((tip) => (
                        <li key={tip} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Do and don't */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold">Cover letter do&apos;s and don&apos;ts for India</h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-3 text-left font-bold text-green-700">✅ Do this</th>
                  <th className="pb-3 text-left font-bold text-red-600">❌ Don&apos;t do this</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {doAndDont.map((row) => (
                  <tr key={row.do}>
                    <td className="py-3 pr-6 text-slate-700">{row.do}</td>
                    <td className="py-3 text-slate-700">{row.dont}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Cover letter — frequently asked questions</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-slate-950">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-lg font-bold text-slate-900">Related tools & guides</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/blog/cover-letter-guide-india-2026', label: 'Cover letter guide India 2026' },
              { href: '/blog/fresher-resume-guide-india-2026', label: 'Fresher resume guide 2026' },
              { href: '/cover-letter-generator', label: 'AI cover letter generator' },
              { href: '/resume-builder', label: 'AI resume builder' },
              { href: '/cv-examples', label: 'Resume examples by role' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/interview-questions', label: 'Interview questions by role' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-rose-300 hover:text-rose-700 transition">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
<h2 className="font-display text-3xl font-bold sm:text-4xl">Generate a tailored cover letter for your next role — free</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Paste the job description and let AI write a tailored cover letter in 60 seconds. Includes your experience, their keywords, and a clear call to action.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-rose-400 px-10 py-4 text-base font-bold text-slate-950 hover:bg-rose-300 transition">
            Generate my cover letter free
            <Sparkles className="h-4 w-4" />
          </Link>
        </div>
      </section>

<StickyCTA label="Generate cover letter free" message="AI cover letter generator — tailored to your role and company in 60 seconds" />
    </main>
  );
}
