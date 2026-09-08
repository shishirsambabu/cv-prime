import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { RelatedResumeTips } from '@/components/marketing/RelatedResumeTips';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Cover Letter Tips India 2026 — How to Write a Cover Letter That Gets Read | CV Prime',
  description:
    'Proven cover letter tips for India 2026. How to write a cover letter that gets read by hiring managers: structure, opening lines, length, common mistakes, and role-specific examples.',
  alternates: { canonical: 'https://cv-prime.in/resume-tips/cover-letter-tips' },
  keywords: [
    'cover letter tips india',
    'how to write a cover letter india',
    'cover letter writing tips 2026',
    'cover letter tips freshers india',
    'good cover letter examples india',
    'cover letter format india',
    'how to start a cover letter india',
  ],
  openGraph: {
    title: 'Cover Letter Tips India 2026 — How to Write a Cover Letter That Gets Read | CV Prime',
    description:
      'Proven cover letter tips for India 2026. How to write a cover letter that gets read by hiring managers: structure, opening lines, length, common mistakes, and role-specific examples.',
    url: 'https://cv-prime.in/resume-tips/cover-letter-tips',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Cover Letter Tips India 2026 — CV Prime' }],
  },
};

const formulaParts = [
  {
    step: '1',
    label: 'Hook (1 sentence)',
    desc: 'Your single strongest result + why this specific company caught your eye.',
    example: '"Having grown Meesho\'s seller onboarding conversion by 38% at my current role, I was immediately drawn to Flipkart Commerce Cloud\'s mission to replicate that at platform scale."',
  },
  {
    step: '2',
    label: 'Proof (1–2 sentences)',
    desc: 'Your most relevant achievement with hard metrics — the resume line that deserves a spotlight.',
    example: '"At Groww I led a 3-engineer squad that rebuilt the payment retry engine, reducing failed transactions by 27% and recovering ₹14Cr in previously lost GMV over two quarters."',
  },
  {
    step: '3',
    label: 'Why-Them (1 sentence)',
    desc: 'A specific, research-backed reason you chose this company — not "great culture" or "market leader."',
    example: '"Your recent move into BNPL for Tier-2 cities maps directly to the consumer credit problem I want to spend the next five years solving."',
  },
  {
    step: '4',
    label: 'Ask (1 sentence)',
    desc: 'A confident, direct call to action — no apologising for your application.',
    example: '"I would welcome 20 minutes to show you how the retry engine work translates to your infrastructure modernisation roadmap."',
  },
];

const dos = [
  { tip: 'Tailor every letter to the specific JD', detail: 'Mirror the exact skill and domain words from the job description — ATS tools at large Indian companies (Infosys, TCS, Swiggy, Zomato) parse cover letters too.' },
  { tip: 'Open with your strongest result, not your name', detail: 'Hiring managers already know your name from the email subject. Lead with impact to earn the next sentence.' },
  { tip: 'Quantify at least one achievement', detail: 'Even freshers can use marks, projects, or internship outcomes: "Built a Django app used by 300 college students" beats "developed a web project."' },
  { tip: 'Use the hiring manager\'s name if you can find it', detail: 'LinkedIn takes 60 seconds. "Dear Priya Sharma" is dramatically more personal than "Dear Hiring Manager."' },
  { tip: 'Keep it under 250 words (300 for senior roles)', detail: 'Indian hiring managers receive hundreds of applications. A letter that fits comfortably on screen — without scrolling — gets read. One that doesn\'t, often doesn\'t.' },
  { tip: 'Research the company before you write a word', detail: 'Reference a recent product launch, earnings report, or funding round. This single step puts you in the top 5% of applicants.' },
  { tip: 'End with a specific, confident ask', detail: '"I would welcome a 20-minute call to discuss how my experience applies to this role" is far stronger than "I look forward to hearing from you."' },
  { tip: 'Match the tone of the company', detail: 'A cover letter to Zepto or CRED can be punchy and direct. One to Tata Consultancy Services or Deloitte India should be slightly more formal. Read their careers page and Glassdoor reviews first.' },
];

const donts = [
  { mistake: 'Don\'t repeat your CV line for line', fix: 'A cover letter explains why your experience is relevant. It is not a prose version of your resume. Pick one or two highlights and expand on them.' },
  { mistake: 'Don\'t open with "To Whom It May Concern"', fix: 'Spend 60 seconds on LinkedIn to find the hiring manager\'s name. If you truly cannot, use "Dear [Company] Hiring Team" — never the generic phrase.' },
  { mistake: 'Don\'t mention salary expectations unless asked', fix: 'Bringing up compensation in your cover letter (especially in India, where negotiation happens late) signals inexperience and can screen you out early.' },
  { mistake: 'Don\'t exceed one page — ever', fix: 'Three short, tight paragraphs are the ceiling. If your letter is running long, you have not edited it enough.' },
  { mistake: 'Don\'t use a generic template you found online', fix: 'Indian recruiters have seen every ChatGPT-generated and Naukri-template cover letter. Specificity is the only signal that stands out.' },
  { mistake: 'Don\'t apologise for gaps or weaknesses unprompted', fix: 'Your cover letter is a pitch, not a confession. If you have a gap you want to address, do it in one sentence at the end — not in the opening.' },
  { mistake: 'Don\'t use flowery, overly formal language', fix: 'Avoid "I humbly request your kind consideration." Write the way you would speak to a respected colleague — clear, direct, confident.' },
  { mistake: 'Don\'t forget to proofread (especially the company name)', fix: 'Sending a letter addressed to the wrong company — or misspelling the company name — is an instant rejection. Copy-paste errors happen; build in a final check.' },
];

const lengthGuide = [
  { aspect: 'Word count', recommendation: '200–300 words for most roles; up to 350 for Director/VP-level applications' },
  { aspect: 'Paragraphs', recommendation: '3 short paragraphs: Hook + Proof → Why-Them → Ask' },
  { aspect: 'Page length', recommendation: 'Never more than half a page; fits on screen without scrolling' },
  { aspect: 'Line spacing', recommendation: '1.15–1.5× — dense single-spacing is harder to read on screen' },
  { aspect: 'Font / size', recommendation: 'Match your resume: Calibri, Inter, or Georgia at 10–11pt' },
];

const whenItMatters = [
  { context: 'Product companies (PhonePe, Groww, Swiggy, Zomato, CRED)', verdict: 'Yes — almost always read', note: 'PMs, designers, and senior engineers especially. Treat it as a filter, not a formality.' },
  { context: 'FAANG / global MNCs (Google, Microsoft, Amazon India)', verdict: 'Yes — often reviewed', note: 'Senior roles and specialist tracks. Keep it concise and results-led.' },
  { context: 'IT services (TCS, Infosys, Wipro, HCL)', verdict: 'Rarely read', note: 'Volume hiring means most cover letters are ignored. Focus effort on ATS-optimised resume and skills tests instead.' },
  { context: 'Early-stage startups (Seed to Series A)', verdict: 'Sometimes — depends on founder', note: 'A well-written, direct letter that shows you understand their specific problem can move you to the top of a short list.' },
  { context: 'Cold applications (no job posting)', verdict: 'Always — it is your entire pitch', note: 'Without a JD to respond to, your letter must create the job. Lead with the problem you solve.' },
  { context: 'Campus placements / fresher drives', verdict: 'Occasionally', note: 'Some companies ask for it; most don\'t. When asked, a focused 150-word letter outperforms a long generic one.' },
];

const openingLines = [
  {
    weak: 'I am writing to apply for the Product Manager position at your esteemed company.',
    strong: 'The moment I saw your Series B announcement — and the bet you\'re making on D2C logistics — I knew this PM role was the one I had been preparing for over the past three years.',
    why: 'The strong version shows research, signals alignment, and creates curiosity.',
  },
  {
    weak: 'I have 4 years of experience in software development and am looking for new opportunities.',
    strong: 'Four years of building payments infrastructure at a fintech that processed ₹800Cr in daily volume gave me an unusual vantage point — and your infrastructure modernisation JD reads like a direct list of problems I\'ve already solved.',
    why: 'Leads with scale, then bridges to the specific role.',
  },
  {
    weak: 'I am a fresher from IIT Bombay and I am very interested in your company.',
    strong: 'My final-year project — a demand-forecasting model that outperformed the department\'s baseline by 22% on a real FMCG dataset — is exactly the kind of applied ML problem your data science team is hiring to solve.',
    why: 'Even without work experience, a concrete project result is more compelling than enthusiasm.',
  },
];

const commonMistakes = [
  { mistake: 'Writing the same letter for every application', fix: 'Generic letters are detectable in seconds. At minimum, change the company name, role, and one company-specific detail per application.' },
  { mistake: 'Starting with "I" or your name', fix: 'Opening with yourself ("I am a motivated professional…") wastes the most valuable real estate in the letter. Start with them or with a result.' },
  { mistake: 'Focusing on what the role offers you, not what you offer them', fix: '"This role will help me grow" is irrelevant to a hiring manager. Flip every sentence to show the value you bring, not the value you want to receive.' },
  { mistake: 'Copying bullet points straight from your resume', fix: 'A cover letter expands on one or two items from your resume — it does not restate all of them. Use it to tell the story behind the numbers.' },
  { mistake: 'Not addressing the actual requirements of the JD', fix: 'Read the JD three times before writing. If the JD lists "experience with SQL and Tableau", your letter should reference both by name.' },
  { mistake: 'Closing weakly', fix: '"I look forward to hearing from you at your earliest convenience" is passive and forgettable. Close with a specific, warm, confident ask instead.' },
  { mistake: 'Sending a .docx when the company asks for PDF', fix: 'File format is a detail that signals attention to instructions. Always submit PDF unless the portal explicitly requires Word.' },
];

const faqs = [
  {
    q: 'Should I include a cover letter for jobs in India?',
    a: 'It depends on the company type. For product companies, startups, and MNCs, a tailored cover letter is almost always worth writing — many hiring managers do read them, especially for senior or specialist roles. For IT services companies (TCS, Infosys, Wipro) doing volume hiring, cover letters are rarely read and your time is better spent on your resume and assessments. For cold applications — roles without a live job posting — a cover letter is essential, because it is the only pitch you have.',
  },
  {
    q: 'How long should a cover letter be in India?',
    a: '200–300 words is the sweet spot for most roles in India. That is three short paragraphs. Senior leadership roles (Director and above) can push to 350 words if the context genuinely needs it. Never exceed half a page — anything longer signals poor editing skills and risks losing the reader\'s attention. The most common mistake is writing a long letter because you\'re not sure what to cut. Cut everything that doesn\'t directly address the role or prove a result.',
  },
  {
    q: 'What should I say in the first line of a cover letter?',
    a: 'Your strongest, most relevant result — with just enough context to make it meaningful. Avoid "I am writing to apply for…" (obvious) and "I have X years of experience…" (generic). Instead, open with something that creates immediate relevance: a metric, a product connection, or a specific company insight. For example: "The fraud detection system I rebuilt at Paytm reduced false positives by 41% — and your JD description of \'high-precision ML pipelines\' sounds like the exact next chapter." The hiring manager\'s first instinct should be "tell me more," not "okay, another applicant."',
  },
  {
    q: 'Should freshers write a cover letter in India?',
    a: 'Yes — and it can be a genuine advantage. As a fresher, your resume is thin on work experience by definition. A focused cover letter lets you explain the story behind your projects, your motivations, and why this specific company aligns with what you have built or studied. Freshers who submit a tailored letter stand out precisely because most don\'t bother. Lead with your best project result, connect it to the company\'s work, and keep it under 200 words. Avoid hollow phrases like "I am eager to learn" — show it with a specific example instead.',
  },
  {
    q: 'What is the ideal cover letter format in India?',
    a: 'The ideal format in India is: (1) a single-line subject header if submitted by email (e.g., "Application — Senior Product Manager, Bangalore | Priya Sharma"); (2) a personalised salutation using the hiring manager\'s name if known; (3) three paragraphs using the Hook → Proof → Why-Them → Ask structure; (4) a professional sign-off. Match your resume\'s font and visual style if submitting as a PDF attachment. If submitting through a portal (Naukri, LinkedIn, Greenhouse), paste the text directly — avoid tables and text boxes, as many systems cannot parse them correctly.',
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
    { '@type': 'ListItem', position: 3, name: 'Cover Letter Tips', item: 'https://cv-prime.in/resume-tips/cover-letter-tips' },
  ],
};

export default function CoverLetterTipsPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/resume-tips" className="hover:text-white">Resume Tips</Link><span>/</span>
            <span className="text-white">Cover Letter Tips</span>
          </nav>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Cover letter tips India 2026 — how to write a cover letter that actually gets read
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Most Indian job seekers either skip the cover letter or send a generic template. Both are missed opportunities. This guide gives you the exact structure, opening lines, dos and don&apos;ts, and real examples to write a cover letter that moves you to the interview pile.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong transition">
            Write my cover letter with AI <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 4-Part Formula */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">The 4-part cover letter formula</h2>
          <p className="mt-3 text-slate-400">Four sentences. That&apos;s all you need. Every additional sentence should earn its place or be cut.</p>
          <div className="mt-8 space-y-4">
            {formulaParts.map((part) => (
              <div key={part.step} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 font-display text-sm font-bold text-brand">{part.step}</div>
                <div>
                  <p className="font-display font-bold text-white">{part.label}</p>
                  <p className="mt-1 text-sm text-slate-400">{part.desc}</p>
                  <p className="mt-2 text-sm italic text-slate-300">{part.example}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-brand/20 bg-brand/5 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-brand">Why this works</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">Hiring managers decide within the first two sentences whether to keep reading. The formula front-loads the two things that matter most — proof that you can do the job, and evidence that you chose this company deliberately. Everything else is secondary.</p>
          </div>
        </div>
      </section>

      {/* Dos and Don'ts */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Cover letter dos and don&apos;ts for India</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Dos */}
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-green-700">8 things to do</p>
              <div className="space-y-3">
                {dos.map((item) => (
                  <div key={item.tip} className="rounded-2xl border border-green-100 bg-green-50 p-4">
                    <p className="text-sm font-semibold text-green-900">✅ {item.tip}</p>
                    <p className="mt-1 text-sm text-green-800">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Don'ts */}
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-red-600">8 things to avoid</p>
              <div className="space-y-3">
                {donts.map((item) => (
                  <div key={item.mistake} className="rounded-2xl border border-red-100 bg-red-50 p-4">
                    <p className="text-sm font-semibold text-red-900">❌ {item.mistake}</p>
                    <p className="mt-1 text-sm text-red-800">{item.fix}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Letter Length */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Cover letter length for India</h2>
          <p className="mt-3 text-slate-400">
            The single most common mistake in Indian cover letters is length. Hiring managers at companies like Swiggy, Groww, or Deloitte India are reviewing dozens of applications a day — brevity is respect for their time.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th className="px-5 py-3 text-left font-semibold">Aspect</th>
                  <th className="px-5 py-3 text-left font-semibold">Recommendation for India</th>
                </tr>
              </thead>
              <tbody>
                {lengthGuide.map((row, i) => (
                  <tr key={row.aspect} className={i % 2 === 0 ? 'bg-white/[0.06]' : 'bg-white/[0.03]'}>
                    <td className="px-5 py-3.5 font-medium text-white">{row.aspect}</td>
                    <td className="px-5 py-3.5 text-slate-300">{row.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When Cover Letters Matter in India */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">When cover letters matter in India</h2>
          <p className="mt-3 text-slate-400">Not all companies treat cover letters equally. Know where to invest your effort.</p>
          <div className="mt-8 space-y-4">
            {whenItMatters.map((item) => (
              <div key={item.context} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-sm">
                <div className="flex-1">
                  <p className="font-display font-bold text-white">{item.context}</p>
                  <p className="mt-1 text-sm font-semibold text-brand">{item.verdict}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Lines */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Opening lines that work — weak vs strong</h2>
          <p className="mt-3 text-slate-400">Your first sentence determines whether the hiring manager reads the second. Here is the difference between forgettable and compelling.</p>
          <div className="mt-8 space-y-5">
            {openingLines.map((item, i) => (
              <div key={i} className="rounded-2xl bg-white/[0.04] p-5 shadow-sm border border-white/10">
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wide text-red-600">❌ Weak opening</p>
                    <p className="text-sm text-red-800">&ldquo;{item.weak}&rdquo;</p>
                  </div>
                  <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wide text-green-700">✅ Strong opening</p>
                    <p className="text-sm font-medium text-green-900">&ldquo;{item.strong}&rdquo;</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-400 italic">{item.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">7 common cover letter mistakes to fix today</h2>
          <div className="mt-8 space-y-4">
            {commonMistakes.map((item, i) => (
              <div key={item.mistake} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 font-display text-sm font-bold text-red-600">{i + 1}</span>
                <div>
                  <p className="font-semibold text-white">❌ {item.mistake}</p>
                  <p className="mt-1 text-sm text-slate-300">✅ Fix: {item.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Cover letter tips — FAQ</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white/[0.04] p-5 shadow-sm border border-white/10">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="border-t border-white/10 px-5 py-12">
        <div className="mx-auto max-w-5xl flex flex-wrap gap-3">
          {[
            { href: '/resume-tips', label: '← All resume tips' },
            { href: '/cover-letter-generator', label: 'Cover letter builder' },
            { href: '/cover-letter-examples', label: 'Cover letter examples' },
            { href: '/resume-builder', label: 'AI resume builder' },
            { href: '/ats-checker', label: 'ATS checker' },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 hover:border-brand hover:text-brand transition">{l.label}</Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">AI writes your cover letter — tailored to every JD</h2>
          <p className="mt-4 text-slate-300">Paste your resume and the job description. CV Prime&apos;s AI drafts a punchy, personalised cover letter using the 4-part formula above — in under 60 seconds. Free to start.</p>
          <Link href="/signup?next=/ai-cv" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Write my cover letter free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <RelatedResumeTips
        items={[
          { href: '/cover-letter-generator', label: 'AI Cover Letter Generator', desc: 'Generate a tailored cover letter in 60 seconds' },
          { href: '/cover-letter-examples', label: 'Cover Letter Examples', desc: '30+ examples by role and industry' },
          { href: '/resume-tips/resume-summary', label: 'Resume Summary Guide', desc: 'Keep your resume summary and cover letter aligned' },
          { href: '/resume-tips/action-verbs', label: 'Resume Action Verbs', desc: '150+ strong verbs for stronger cover letter openers' },
        ]}
      />
      <StickyCTA label="Write my cover letter free" message="AI drafts a personalised cover letter using the 4-part formula — in 60 seconds" />
    </main>
  );
}
