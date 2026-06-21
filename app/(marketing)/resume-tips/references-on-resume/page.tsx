import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'References on a Resume India 2026 — Should You Include Them? | CV Prime',
  description:
    'Should you include references on your resume in India? The answer for most jobs is no. Learn when references are needed, how to format them, and what to write instead.',
  alternates: { canonical: 'https://cv-prime.in/resume-tips/references-on-resume' },
  keywords: [
    'references on resume',
    'should i include references on resume india',
    'references available upon request resume',
    'how to list references on resume india',
    'resume references format india',
    'professional references resume india',
  ],
  openGraph: {
    title: 'References on a Resume India 2026 — Should You Include Them? | CV Prime',
    description: 'Should you include references on your resume in India? The answer for most jobs is no. Learn when references are needed and what to write instead.',
    url: 'https://cv-prime.in/resume-tips/references-on-resume',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'References on a Resume — CV Prime' }],
  },
};

const whenRefsExpected = [
  {
    scenario: 'Government jobs',
    detail: 'Many PSU and central / state government application forms explicitly ask for referee details (typically a gazetted officer or current employer). Follow the form instructions exactly — do not add them to your resume itself.',
    color: 'border-amber-200 bg-amber-50',
    labelColor: 'text-amber-800',
  },
  {
    scenario: 'Senior executive roles (Director and above)',
    detail: 'At VP, Director, and CXO level, references are often informally checked before or alongside the formal offer. Have a polished reference list ready — you will likely be asked for it.',
    color: 'border-brand/20 bg-brand/5',
    labelColor: 'text-brand',
  },
  {
    scenario: 'Background-verification-heavy roles',
    detail: 'BFSI (banking, financial services, insurance), defence contractors, and roles with regulatory clearance requirements often ask for specific referee contact details as part of the application — but typically via a separate form, not the resume.',
    color: 'border-cyan-200 bg-cyan-50',
    labelColor: 'text-cyan-700',
  },
  {
    scenario: 'Academic and research positions',
    detail: 'Faculty applications and research fellowships (IITs, IISc, NITs, CSIR) traditionally expect 2–3 academic references. These go in a separate section of the application, not inline on the resume.',
    color: 'border-violet-200 bg-violet-50',
    labelColor: 'text-violet-700',
  },
];

const referenceFormat = [
  { field: 'Full Name', example: 'Priya Shankar' },
  { field: 'Title', example: 'Engineering Manager' },
  { field: 'Company', example: 'Flipkart Internet Pvt. Ltd.' },
  { field: 'Relationship', example: 'Direct manager (2021–2023)' },
  { field: 'Email', example: 'priya.shankar@example.com' },
  { field: 'Phone', example: '+91 98765 43210' },
  { field: 'Years known', example: '2 years (worked together directly)' },
];

const insteadOf = [
  {
    remove: '"References available upon request"',
    addInstead: 'A quantified achievement bullet from your most recent role',
    why: 'Recruiters know references exist — this phrase signals you ran out of content. Use the space to show impact instead.',
  },
  {
    remove: 'Blank space at the bottom of page 1',
    addInstead: 'A strong resume summary (3–4 lines)',
    why: 'Empty white space makes your resume look thin. A sharp summary immediately communicates your value to the hiring manager.',
  },
  {
    remove: 'A list of 5 references with full contact details',
    addInstead: 'An extra achievements bullet per role',
    why: 'References are not evaluated at the resume stage. Use every line to prove impact — save the references for when they are requested.',
  },
];

const bgvInfo = [
  'Most Indian companies (Infosys, Wipro, HCL, Deloitte India, HDFC, Reliance) run a formal BGV process after the offer letter is issued — not before.',
  'BGV agencies (AuthBridge, First Advantage, Idfy) contact previous employers directly. They do not rely on names you provide.',
  'If you are asked for a referee as part of BGV, provide them then — not proactively on your resume.',
  'BGV typically checks: employment dates, last drawn salary, reason for leaving, and sometimes performance. It does not require a pre-listed reference on the resume.',
];

const faqs = [
  {
    q: 'Should I include references on my resume in India?',
    a: 'No, for the vast majority of corporate, tech, and startup jobs in India. Recruiters and ATS systems do not evaluate references at the resume screening stage. Including them wastes precious space — space you could use for achievements, skills, or projects. Provide references only when a specific job application explicitly asks for them, or when requested during the interview / offer stage.',
  },
  {
    q: 'What should I write instead of "References available upon request"?',
    a: 'Delete it entirely. Every recruiter knows references can be provided on request — stating the obvious adds no value. Use that space to add one more quantified achievement bullet to your most recent role. For example: "Reduced deployment time by 40% by introducing CI/CD pipelines across 3 product teams." That is infinitely more useful than a filler phrase.',
  },
  {
    q: 'How many references should I have ready?',
    a: 'Prepare 3 references before you start actively applying — even if you never put them on your resume. An ideal mix: (1) a current or former direct manager who can speak to your performance, (2) a peer or cross-functional collaborator who can speak to teamwork and skills, and (3) a client, stakeholder, or skip-level manager who can speak to impact and professionalism. Always get explicit consent from each person before naming them as a reference.',
  },
  {
    q: 'What if a job application explicitly asks for references?',
    a: 'If the application form or job description specifically requests references, create a separate one-page "Professional References" document — do not put them on your resume. Use the format: Full Name | Title | Company | Relationship | Email | Phone | Years known. Brief each reference beforehand: tell them the company name, the role, and what aspects of your work you would like them to emphasise.',
  },
  {
    q: 'Will my previous employers be contacted during background verification in India?',
    a: 'Yes — but through the BGV process, not your resume. After you receive an offer letter, most Indian companies engage a BGV agency (AuthBridge, First Advantage, Idfy) that contacts your previous employers directly via official HR channels. They verify employment dates, designation, salary, and exit reason. This is separate from personal references and does not require you to list referee names on your resume in advance.',
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
    { '@type': 'ListItem', position: 3, name: 'References on a Resume', item: 'https://cv-prime.in/resume-tips/references-on-resume' },
  ],
};

export default function ReferencesOnResumePage(): JSX.Element {
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
            <span className="text-white">References on a Resume</span>
          </nav>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            References on a resume India 2026 — should you include them?
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Short answer: no. For most corporate and tech jobs in India, putting references on your resume wastes space and signals you ran out of content. Here is when they matter, how to prepare them, and what to write instead.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/signup?next=/ai-cv" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong transition">
              Improve my resume with AI <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/ats-checker" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white hover:border-white/40 transition">
              Free ATS checker →
            </Link>
          </div>
        </div>
      </section>

      {/* Short answer callout */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-red-700">The verdict</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-red-900">Do NOT put references on your resume</h2>
            <p className="mt-3 leading-7 text-red-800">
              For corporate jobs, IT roles, startups, MNCs, and most private sector positions in India — references do not belong on your resume. No recruiter reads them at the screening stage. ATS systems do not score them. They take up space that could show your achievements, skills, or additional experience.
            </p>
          </div>

          <h2 className="mt-12 font-display text-2xl font-bold sm:text-3xl">Why &ldquo;References available upon request&rdquo; is outdated</h2>
          <p className="mt-4 leading-7 text-slate-600">
            This phrase became common in the 1990s when resume conventions were still forming. In 2026, it communicates three things — none of them good:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { heading: 'It is obvious', body: 'Every candidate can provide references if asked. Stating it offers no new information and makes you look like you filled space.' },
              { heading: 'It wastes a line', body: 'On a 1–2 page resume, every line is valuable real estate. This phrase returns zero value — swap it for a quantified bullet point.' },
              { heading: 'It signals a thin resume', body: 'Recruiters often interpret filler phrases as a sign the candidate struggled to fill the page with substantive content.' },
            ].map((card) => (
              <div key={card.heading} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <p className="font-display text-base font-bold">{card.heading}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When references ARE expected */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">When references ARE expected in India</h2>
          <p className="mt-4 leading-7 text-slate-600">
            There are specific situations where references are genuinely required — but even then, they go on a separate document or application form, not your resume:
          </p>
          <div className="mt-8 space-y-4">
            {whenRefsExpected.map((item) => (
              <div key={item.scenario} className={`rounded-2xl border p-5 ${item.color}`}>
                <p className={`text-xs font-bold uppercase tracking-wider ${item.labelColor}`}>{item.scenario}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to write instead */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">What to write instead of references</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Every line you free up from references or filler phrases is a line you can use to prove your value. Here are direct swaps:
          </p>
          <div className="mt-8 space-y-4">
            {insteadOf.map((item) => (
              <div key={item.remove} className="grid gap-2 rounded-2xl border border-slate-100 p-5 md:grid-cols-2">
                <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-red-600">Remove</p>
                  <p className="text-sm font-semibold text-red-800">{item.remove}</p>
                  <p className="mt-2 text-xs text-red-700">{item.why}</p>
                </div>
                <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-green-700">Add instead</p>
                  <p className="text-sm font-semibold text-green-900">{item.addInstead}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to prepare references */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">How to prepare your references (before you need them)</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Even though references do not go on your resume, having them ready is part of professional job-search preparation. Build your reference list now — before a hiring manager asks.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { num: '01', title: 'Current or former manager', body: 'The strongest reference. They can speak directly to your performance, output, and growth. Choose someone who managed you recently and with whom you left on good terms.' },
              { num: '02', title: 'Peer or collaborator', body: 'A colleague, cross-functional partner, or team member who can speak to how you work with others, your communication style, and day-to-day reliability.' },
              { num: '03', title: 'Client or stakeholder', body: 'A client, internal customer, or senior stakeholder who can speak to business impact and professional conduct — especially powerful for sales, consulting, and customer-facing roles.' },
            ].map((ref) => (
              <div key={ref.num} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-display text-3xl font-bold text-slate-200">{ref.num}</p>
                <p className="mt-2 font-display text-base font-bold">{ref.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{ref.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-bold text-amber-800">Always get consent before naming someone as a reference</p>
            <p className="mt-2 text-sm leading-6 text-amber-700">
              Contact each reference in advance. Tell them: the company you are applying to, the role title, what skills or projects you would like them to highlight, and the likely timeline. A prepared reference gives a far stronger response than a surprised one.
            </p>
          </div>
        </div>
      </section>

      {/* Format when asked */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">If a job asks for references — the correct format</h2>
          <p className="mt-4 leading-7 text-slate-600">
            When a role explicitly requests references, create a separate one-page document titled &ldquo;Professional References — [Your Name].&rdquo; Do not add it to your resume. Use this format for each entry:
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-slate-700">Field</th>
                  <th className="px-4 py-3 text-left font-bold text-slate-700">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {referenceFormat.map((row) => (
                  <tr key={row.field} className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-700">{row.field}</td>
                    <td className="px-4 py-3 font-mono text-slate-600">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-500">
            Send this document as a separate PDF attachment titled &ldquo;References_[YourName].pdf&rdquo; — never paste reference details into the body of your resume.
          </p>
        </div>
      </section>

      {/* BGV section */}
      <section className="bg-brand/5 px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-brand/20 bg-white p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-brand">India-specific</p>
            <h2 className="mt-3 font-display text-2xl font-bold">Background verification (BGV) — how it actually works in India</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Indian companies do conduct thorough background checks — but the process is separate from your resume and happens after the offer is issued, not during screening.
            </p>
            <ul className="mt-5 space-y-3">
              {bgvInfo.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              Bottom line: BGV is not a reason to include references on your resume. When the time comes, you will be asked to fill in a BGV form — your proactive resume references will not help and may even create confusion if the details differ from what HR finds independently.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">References on a resume — FAQ</h2>
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
              { href: '/resume-tips/resume-length', label: 'How long should a resume be?' },
              { href: '/resume-tips/work-experience', label: 'Work experience section guide' },
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
          <h2 className="font-display text-3xl font-bold">Use that freed-up space to strengthen your resume</h2>
          <p className="mt-4 text-slate-300">CV Prime&apos;s AI identifies weak sections — filler phrases, thin bullets, missing keywords — and rewrites them for impact in under 2 minutes.</p>
          <Link href="/signup?next=/ai-cv" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Strengthen my resume free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Improve my resume with AI" message="Remove filler and add impact — AI rewrites your resume in under 2 minutes" />
    </main>
  );
}
