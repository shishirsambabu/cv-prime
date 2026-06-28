import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Sparkles, XCircle } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'AI Cover Letter Generator — Write a Tailored Cover Letter Free | CV Prime',
  description:
    'Generate a professional cover letter in minutes. Paste a job description, and our AI writes a personalised, ATS-friendly cover letter that matches the role. Free to start.',
  alternates: { canonical: 'https://cv-prime.in/cover-letter' },
  keywords: [
    'cover letter generator',
    'ai cover letter writer',
    'free cover letter generator india',
    'cover letter maker',
    'cover letter template india',
    'professional cover letter generator',
    'cover letter writer ai',
    'cover letter for job application india',
    'how to write a cover letter india',
  ],
  openGraph: {
    title: 'AI Cover Letter Generator — CV Prime',
    description: 'Write a tailored, professional cover letter in minutes with AI. Free to try.',
    url: 'https://cv-prime.in/cover-letter',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Cover Letter Generator — CV Prime' }],
  },
};

const coverLetterDos = [
  'Open with why you want this specific role at this specific company',
  'Reference 2–3 achievements from your CV with concrete metrics',
  'Mirror the language and keywords from the job description',
  'Keep it to 3–4 short paragraphs and under 350 words',
  'Close with a specific, confident call to action',
  'Match the tone of the company (formal for banking, conversational for startups)',
];

const coverLetterDonts = [
  'Repeat your CV verbatim — a cover letter adds context, not content',
  'Start with "I am writing to apply for..." — it is instantly forgettable',
  'Use the same cover letter for every role without tailoring',
  'Include personal information (DOB, religion, marital status)',
  'Write more than one page — brevity signals good communication',
  'Submit a cover letter with spelling errors — it ends the application immediately',
];

const structure = [
  {
    label: 'Opening hook (1 sentence)',
    desc: 'Name the specific role and company. State your strongest single qualification or a specific reason you want this role — not a generic "I am excited to apply."',
    example: '"As a frontend engineer who has shipped React products used by 500K+ users, I was drawn to the Principal Engineer role at Groww by the challenge of building India\'s payments infrastructure at scale."',
  },
  {
    label: 'Proof paragraph 1 (3–4 sentences)',
    desc: 'Your most relevant past achievement, with a metric. Connect it explicitly to what the JD asks for.',
    example: '"At Swiggy, I led the performance optimisation of our checkout flow — reducing bundle size by 42% and improving mobile Lighthouse scores from 58 to 91. This work directly cut cart abandonment by 18% in the first quarter post-launch."',
  },
  {
    label: 'Proof paragraph 2 (2–3 sentences)',
    desc: 'A second strength that addresses another key requirement in the JD. Can be cultural or team-based if you have already covered technical proof.',
    example: '"I also have direct experience mentoring junior engineers, having set up the frontend guild and weekly design system reviews that onboarded 6 new engineers to our stack in under 3 weeks."',
  },
  {
    label: 'Close (2 sentences)',
    desc: 'Express genuine interest and invite conversation. Do not beg — be confident.',
    example: '"I would love to discuss how my experience in high-traffic consumer applications maps to what your team is building. Happy to share my portfolio or join a technical screen at your convenience."',
  },
];

const faqs = [
  {
    q: 'Do I need a cover letter for jobs in India?',
    a: 'Most Indian job portals (Naukri, LinkedIn) make cover letters optional — and most applicants skip them. This is an opportunity: a well-crafted cover letter submitted alongside a strong CV can be the deciding factor in a competitive shortlist. For senior roles, international companies, and direct applications, cover letters are increasingly expected.',
  },
  {
    q: 'How long should an Indian cover letter be?',
    a: 'Three to four short paragraphs, under 350 words, fitting on one page. Indian recruiters read faster than you think — get to your strongest point within the first two sentences. Long cover letters are rarely read.',
  },
  {
    q: 'Can AI write my cover letter?',
    a: 'Yes — and AI-generated cover letters, when properly prompted with your specific experience and the JD, are typically stronger than most people write themselves. The key is to provide your real achievements and the exact JD as context, then edit the AI output for your authentic voice. CV Prime\'s AI does this in under 2 minutes.',
  },
  {
    q: 'Should I address the cover letter to a specific person?',
    a: 'Yes, always, if you can find the name. "Dear Hiring Manager" is a fallback. Check LinkedIn for the team\'s recruiter or the hiring manager. Addressed cover letters consistently outperform generic ones — the extra 2 minutes of research signals initiative.',
  },
  {
    q: 'Is a cover letter the same as a resume?',
    a: 'No. Your resume lists your full experience and qualifications in structured format. A cover letter is a narrative letter that explains why you specifically want this role, and why your specific background makes you right for it. A cover letter without a CV is incomplete; a CV without a cover letter misses an opportunity to add context.',
  },
];

export default function CoverLetterPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-purple-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-1.5 text-sm font-bold text-purple-300">
            <Sparkles className="h-4 w-4" />
            AI cover letter generator
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Write a tailored cover letter in 2 minutes with AI
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Paste the job description and let CV Prime&apos;s AI generate a professional, personalised cover letter that mirrors the JD&apos;s tone and keywords — and sounds like you wrote it.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-purple-400 px-8 py-3.5 text-base font-bold text-white transition hover:bg-purple-300"
            >
              Generate my cover letter free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/cv-examples"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              See CV examples
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Included with your free CV Prime account · No credit card</p>
        </div>
      </section>

      {/* Structure guide */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">The proven cover letter structure</h2>
          <p className="mt-4 text-slate-400">What every strong cover letter needs — and what CV Prime&apos;s AI generates automatically</p>
          <div className="mt-10 space-y-6">
            {structure.map((item, i) => (
              <div key={item.label} className="rounded-2xl border border-white/10 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">{i + 1}</span>
                  <h3 className="font-display text-lg font-bold">{item.label}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.desc}</p>
                <blockquote className="mt-3 rounded-xl border-l-4 border-purple-300 bg-purple-50 p-4 text-sm leading-6 text-slate-300 italic">
                  {item.example}
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dos and don'ts */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Cover letter dos and don&apos;ts</h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="flex items-center gap-2 font-display text-xl font-bold text-green-700">
                <CheckCircle2 className="h-5 w-5" /> Do
              </h3>
              <ul className="mt-5 space-y-3">
                {coverLetterDos.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <span className="text-sm leading-6 text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-display text-xl font-bold text-red-600">
                <XCircle className="h-5 w-5" /> Don&apos;t
              </h3>
              <ul className="mt-5 space-y-3">
                {coverLetterDonts.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    <span className="text-sm leading-6 text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">Cover letter — common questions</h2>
          <div className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 p-6">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-white/10 px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-xl font-bold">Related tools</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/ai-cv-builder', label: 'AI CV builder' },
              { href: '/ats-checker', label: 'ATS resume checker' },
              { href: '/online-cv-maker', label: 'Online CV maker' },
              { href: '/cv-examples', label: 'CV examples by role' },
              { href: '/resume-vs-cv', label: 'Resume vs CV' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 hover:border-purple-300 hover:text-purple-700">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Write your cover letter with AI — free</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Stop staring at a blank page. CV Prime generates a tailored, professional cover letter from your experience and the job description in under 2 minutes.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-purple-400 px-10 py-4 text-base font-bold text-white hover:bg-purple-300">
            Generate mine free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Generate cover letter free" message="AI cover letter tailored to any job description — free with CV Prime" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'AI Cover Letter Generator — CV Prime',
            description: 'Generate a tailored, professional cover letter with AI in 2 minutes. Free to try.',
            url: 'https://cv-prime.in/cover-letter',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                { '@type': 'ListItem', position: 2, name: 'Cover Letter Generator', item: 'https://cv-prime.in/cover-letter' },
              ],
            },
            mainEntity: {
              '@type': 'SoftwareApplication',
              name: 'CV Prime Cover Letter Generator',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
            },
          }),
        }}
      />
    </main>
  );
}
