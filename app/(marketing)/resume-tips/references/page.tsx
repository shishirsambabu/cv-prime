import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'References on a Resume — Should You Include Them? Complete Guide 2026 | CV Prime',
  description:
    'Should you include references on your resume? Complete guide for Indian job seekers 2026. When to include references, how to format them, and the "references available on request" rule explained.',
  alternates: { canonical: 'https://cv-prime.in/resume-tips/references' },
  keywords: [
    'references on resume',
    'should i include references on resume',
    'references available on request resume',
    'how to list references on resume',
    'resume references india',
    'professional references resume',
    'references format resume',
    'who to use as reference resume',
    'references on cv india 2026',
  ],
  openGraph: {
    title: 'References on a Resume — Complete Guide 2026 | CV Prime',
    description: 'Should you include references on your resume in India? What to say, how to format, and who to choose.',
    url: 'https://cv-prime.in/resume-tips/references',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume References Guide — CV Prime' }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Should I include references on my resume?',
      acceptedAnswer: { '@type': 'Answer', text: 'No — do not include references on your resume unless the job posting specifically requests them. References are verified during the final stage of hiring, not the initial screening. Including them takes up valuable space and provides no ATS value. Have a prepared reference sheet ready to provide when asked.' },
    },
    {
      '@type': 'Question',
      name: 'Should I write "references available on request" on my resume?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. This phrase was standard advice 20+ years ago and is now outdated. Hiring managers know you have references — stating it adds no value and signals an outdated resume format. Use that line of space for another achievement bullet or leave it out entirely.' },
    },
    {
      '@type': 'Question',
      name: 'Who should I use as a reference for a job application?',
      acceptedAnswer: { '@type': 'Answer', text: 'The best references are: (1) Former direct managers who can speak to your performance and output, (2) Senior colleagues or project leads who observed your work closely, (3) Clients or stakeholders who benefited from your work (for client-facing roles). Never list family, friends, or people who cannot speak directly to your professional work.' },
    },
    {
      '@type': 'Question',
      name: 'How many references should I have?',
      acceptedAnswer: { '@type': 'Answer', text: 'Prepare 3 professional references. This is the standard number requested during background verification. For senior roles (VP, Director, CXO level), companies may ask for 4–5. Have your reference list formatted and ready — employers expect it to be delivered within 24 hours of the request.' },
    },
  ],
};

export default function ReferencesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen bg-white text-slate-900">
        <nav className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="text-lg font-bold text-brand">CV Prime</Link>
            <div className="flex items-center gap-4">
              <Link href="/resume-tips" className="hidden text-sm text-slate-600 hover:text-brand sm:block">Resume Tips</Link>
              <Link href="/signup" className="rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-white hover:bg-brand/90">Build Free</Link>
            </div>
          </div>
        </nav>

        <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-2 flex items-center gap-1 text-sm text-slate-500">
              <Link href="/resume-tips" className="hover:text-brand">Resume Tips</Link>
              <span className="mx-1">›</span>
              <span>References</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">
              References on a Resume — Should You Include Them?
            </h1>
            <p className="text-lg text-slate-600">
              The short answer: no. The long answer: here is exactly what to do with references in 2026 — on your resume, in applications, and when employers ask.
            </p>
          </div>
        </section>

        <article className="px-4 py-12">
          <div className="mx-auto max-w-3xl">

            <div className="mb-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <h2 className="mb-2 text-xl font-bold text-emerald-900">The short answer</h2>
              <p className="text-sm text-emerald-800 font-medium">
                Do not include references on your resume. Do not write &ldquo;references available on request.&rdquo; Have a prepared reference sheet ready to share when the employer requests it — typically during the final stage of the hiring process.
              </p>
            </div>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">Why not to include references on your resume</h2>
            <div className="mb-8 space-y-3">
              {[
                { reason: 'References are checked at the end of the process, not the start', detail: 'ATS systems do not parse or value reference information. Recruiters do not check references until they have already decided to hire you. Including references takes up prime space that should be used for ATS keywords, skills, and achievements.' },
                { reason: '"References available on request" is a 1990s convention', detail: 'This phrase adds zero value — every candidate has references. Hiring managers know this. Using this phrase signals an outdated approach to resume writing and consumes a line that could hold another achievement.' },
                { reason: 'Including reference contact details risks your references getting unsolicited calls', detail: 'References should be briefed before they are contacted. Placing their phone numbers on a resume you send to 50 companies means they may be contacted multiple times without notice — which damages the relationship and the quality of the reference they provide.' },
                { reason: 'References that are disclosed publicly may be poached or spammed', detail: 'In India particularly, contact details on widely distributed documents can result in spam calls or your reference contacts being added to unsolicited databases.' },
              ].map((r) => (
                <div key={r.reason} className="rounded-xl border border-slate-200 p-4">
                  <div className="mb-1 flex items-start gap-2 font-semibold text-slate-800 text-sm">
                    <span className="mt-0.5 text-red-500 font-bold">✗</span> {r.reason}
                  </div>
                  <p className="text-xs text-slate-600 pl-5">{r.detail}</p>
                </div>
              ))}
            </div>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">How to prepare your reference sheet</h2>
            <p className="mb-4 text-sm text-slate-700">Create a separate document — not part of your resume — with 3 professional references formatted as follows:</p>
            <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-3 text-xs font-semibold text-slate-400 uppercase">Example reference sheet format</div>
              <div className="space-y-4 font-mono text-xs text-slate-800">
                <div className="rounded-lg bg-white border border-slate-200 p-4">
                  <div className="font-bold">REFERENCES — [Your Name]</div>
                  <div className="mt-3">
                    <div className="font-semibold">Priya Nair</div>
                    <div>Engineering Manager — Swiggy</div>
                    <div>Relationship: Direct Manager at Swiggy (2021–2023)</div>
                    <div>Email: priya.nair@[company].com</div>
                    <div>Phone: +91 98XXXXXXXX</div>
                  </div>
                  <div className="mt-4">
                    <div className="font-semibold">Rahul Mehta</div>
                    <div>VP Engineering — Razorpay</div>
                    <div>Relationship: Senior colleague and project collaborator (2019–2021)</div>
                    <div>Email: rahul.mehta@[company].com</div>
                    <div>Phone: +91 99XXXXXXXX</div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">Who to choose as a reference</h2>
            <div className="mb-8 space-y-3">
              {[
                { type: 'Best choice: Former direct manager', desc: 'A manager who directly supervised your work and can speak to your performance, reliability, and specific contributions. They carry the most weight in reference checks.' },
                { type: 'Good choice: Senior colleague or project lead', desc: 'Someone who worked closely with you and observed your work quality, even if they did not formally manage you. Common for cross-functional or project-based roles.' },
                { type: 'Good choice: Client or stakeholder', desc: 'For client-facing roles (sales, consulting, customer success), a client who can speak to your impact and relationship management is a powerful reference.' },
                { type: 'Acceptable: Academic professor or mentor', desc: 'For freshers or candidates with limited work history, a professor who supervised a significant project or dissertation is acceptable. Less ideal than a professional reference but credible.' },
                { type: 'Avoid: Family, friends, or personal contacts', desc: 'Hiring managers identify personal references immediately and discount them entirely. Never use family members or personal friends as professional references.' },
              ].map((r, i) => (
                <div key={r.type} className={`rounded-xl border p-4 ${i <= 2 ? 'border-emerald-200 bg-emerald-50' : i === 3 ? 'border-amber-200 bg-amber-50' : 'border-red-200 bg-red-50'}`}>
                  <div className={`mb-1 font-semibold text-sm ${i <= 2 ? 'text-emerald-800' : i === 3 ? 'text-amber-800' : 'text-red-800'}`}>{r.type}</div>
                  <p className={`text-xs ${i <= 2 ? 'text-emerald-700' : i === 3 ? 'text-amber-700' : 'text-red-700'}`}>{r.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">How to prepare your references before job searching</h2>
            <div className="mb-8 space-y-2">
              {[
                'Contact each reference before you apply — ask for their permission and update them on your target role',
                'Brief them on what to emphasise: your key achievements, relevant skills, and why you are a strong fit for the new role',
                'Share your resume with them so they can reference specific projects or achievements consistently',
                'Give them a 48-hour heads-up before you know a company is likely to call them',
                'Thank references after each hiring process, regardless of outcome — they are doing you a significant favour',
              ].map((t) => (
                <div key={t} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /> {t}
                </div>
              ))}
            </div>

            <div className="mb-10 rounded-2xl bg-brand px-8 py-8 text-center">
              <h2 className="mb-2 text-2xl font-bold text-white">Build a resume that gets you to the references stage</h2>
              <p className="mb-6 text-white/80 text-sm">References only matter if your resume gets you to the final stage. CV Prime scores and optimises your resume for ATS so recruiters see it — and you get the call.</p>
              <Link href="/signup" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-brand hover:bg-white/90">
                Build My Resume Free <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <h2 className="mb-6 text-2xl font-bold text-slate-900">Frequently asked questions</h2>
            <div className="space-y-4">
              {[
                { q: 'Should I include references on my resume?', a: 'No — do not include references on your resume unless the job posting specifically requests them. Have a prepared reference sheet ready to provide when asked, typically during final stage hiring.' },
                { q: 'Should I write "references available on request" on my resume?', a: 'No. This phrase is outdated and adds no value. Use that space for an achievement bullet instead.' },
                { q: 'Who should I use as a reference for a job application?', a: 'Ideal references: former direct managers first, then senior colleagues or project leads, then clients or stakeholders for client-facing roles. Never use family or personal friends.' },
                { q: 'How many references should I have?', a: 'Prepare 3 professional references as a standard. Senior roles (VP, Director) may require 4–5. Have your list ready to deliver within 24 hours of the request.' },
                { q: 'What if I do not have professional references?', a: "For freshers: use a professor, internship supervisor, or academic project mentor. For career changers: a client, volunteer coordinator, or colleague from an adjacent field can work. The key is someone who can speak to observable work output — not just personal character." },
              ].map((f) => (
                <details key={f.q} className="group rounded-xl border border-slate-200 p-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-3 font-semibold text-slate-800 marker:content-none">
                    {f.q}
                    <ArrowRight className="h-4 w-4 shrink-0 rotate-90 text-slate-400 group-open:rotate-[270deg] transition-transform" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </article>

        <section className="border-t border-slate-100 bg-slate-50 px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-xl font-bold text-slate-900">Related resume tips</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { href: '/resume-tips/education-section', label: 'Education Section Guide', desc: 'What to include and where to put your education' },
                { href: '/resume-tips/work-experience', label: 'Work Experience Section', desc: 'How to write achievement-driven bullets' },
                { href: '/resume-tips/how-to-write-a-resume', label: 'How to Write a Resume', desc: 'Complete step-by-step resume writing guide' },
                { href: '/resume-tips/gap-in-resume', label: 'Gap in Resume Guide', desc: 'How to handle and explain employment gaps' },
                { href: '/resume-tips/resume-length', label: 'Resume Length Guide', desc: '1 page vs 2 pages — the definitive rules' },
                { href: '/ats-checker', label: 'ATS Resume Checker', desc: 'Score your resume against any job description' },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="rounded-xl border border-slate-200 bg-white p-4 hover:border-brand/30 hover:shadow-sm transition-all">
                  <div className="font-semibold text-slate-800 text-sm">{l.label}</div>
                  <div className="mt-1 text-xs text-slate-500">{l.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <StickyCTA />
      </main>
    </>
  );
}
