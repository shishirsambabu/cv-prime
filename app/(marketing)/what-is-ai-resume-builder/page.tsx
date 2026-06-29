import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, BookOpen, BarChart3, CheckCircle2, Zap, Shield, Brain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'What is an AI Resume Builder? Definition, How It Works & Top Tools 2026 | CV Prime',
  description:
    'An AI resume builder uses artificial intelligence to tailor your resume to specific job descriptions, score ATS match, rewrite weak bullets, and suggest missing keywords. Learn how it works, what to expect, and how it compares to traditional resume builders.',
  keywords: [
    'what is an ai resume builder',
    'how does ai resume builder work',
    'ai resume builder definition',
    'ai resume builder explained',
    'artificial intelligence resume builder',
    'best ai resume builder 2026',
    'how ai helps with resume writing',
    'ai vs traditional resume builder',
    'ai powered resume tool',
    'ai resume writer india',
  ],
  alternates: { canonical: 'https://cv-prime.in/what-is-ai-resume-builder' },
  openGraph: {
    title: 'What is an AI Resume Builder? Definition, How It Works & Top Tools 2026',
    description:
      'Comprehensive guide to AI resume builders: what they are, how they use NLP and LLMs, how they differ from traditional tools, and what to look for when choosing one.',
    url: 'https://cv-prime.in/what-is-ai-resume-builder',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'What is an AI Resume Builder?' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is an AI Resume Builder? Definition & Guide 2026',
    description: 'How AI resume builders work, what differentiates them from traditional tools, and how to choose the best one in 2026.',
    images: ['/og-image.png'],
  },
};

const keyCapabilities = [
  {
    icon: Brain,
    title: 'Natural language understanding',
    desc: 'AI resume builders use large language models (LLMs) to read both your resume and a job description and understand the semantic relationship between what you have done and what the employer is asking for — not just keyword matching.',
  },
  {
    icon: BarChart3,
    title: 'ATS score calculation',
    desc: 'They calculate a quantitative compatibility score (typically 0–100) that indicates how well your resume matches a specific job description — measuring keyword coverage, section completeness, and format compliance.',
  },
  {
    icon: Zap,
    title: 'Automated bullet rewriting',
    desc: 'AI rewrites weak, duty-based bullet points into outcome-focused statements with action verbs, quantified results, and role-relevant language from the target JD.',
  },
  {
    icon: CheckCircle2,
    title: 'Keyword gap identification',
    desc: 'The system identifies specific terms, technologies, and qualifications that appear in the job description but are absent from your resume — and shows you exactly where to add them.',
  },
  {
    icon: Shield,
    title: 'Format and parsing compliance',
    desc: 'AI-powered tools check your resume structure against ATS parsing rules — identifying tables, images, non-standard fonts, and other elements that cause ATS systems to misread or drop your content.',
  },
  {
    icon: BookOpen,
    title: 'Content generation',
    desc: 'More advanced AI resume builders can generate cover letters, professional summaries, and LinkedIn About sections tailored to the specific role — using the job description and your resume as source material.',
  },
];

const comparisonRows = [
  {
    feature: 'Tailoring to a specific job',
    traditional: 'Manual — you do it',
    ai: 'Automated — AI reads the JD and adapts your resume',
  },
  {
    feature: 'ATS keyword scoring',
    traditional: 'Not available',
    ai: 'Built-in — numerical score with specific gaps identified',
  },
  {
    feature: 'Bullet point improvement',
    traditional: 'Manual editing',
    ai: 'AI rewrites bullets with action verbs and quantified outcomes',
  },
  {
    feature: 'Missing keyword identification',
    traditional: 'Manual JD scanning',
    ai: 'Automated — specific list of terms to add with placement suggestions',
  },
  {
    feature: 'Cover letter generation',
    traditional: 'Manual writing',
    ai: 'AI drafts a JD-specific cover letter in seconds',
  },
  {
    feature: 'Format ATS compliance check',
    traditional: 'Not available',
    ai: 'Automated check of tables, columns, images, non-standard fonts',
  },
  {
    feature: 'Template variety',
    traditional: 'Often more (20–100+)',
    ai: 'Usually fewer (5–12), chosen for ATS compatibility',
  },
  {
    feature: 'Learning curve',
    traditional: 'Low — drag and drop',
    ai: 'Low to medium — requires understanding the JD input workflow',
  },
  {
    feature: 'Cost',
    traditional: 'Often free or cheap',
    ai: 'Free tier common; Pro plans vary ($5–$30/mo or one-time options)',
  },
];

const statistics = [
  {
    stat: '75%',
    label: 'of resumes are rejected by ATS before reaching a human recruiter',
    source: 'Jobscan, 2024',
  },
  {
    stat: '98%',
    label: 'of Fortune 500 companies use Applicant Tracking Systems',
    source: 'iCIMS, 2024',
  },
  {
    stat: '40%',
    label: 'average increase in interview callback rate after ATS-optimising a resume',
    source: 'Jobscan internal data, 2024',
  },
  {
    stat: '63%',
    label: 'of hiring managers say keyword relevance is the top shortlisting criterion',
    source: 'LinkedIn Talent Survey, 2024',
  },
  {
    stat: '3×',
    label: 'higher callback rate for resumes that use the JD\'s exact phrase vs synonyms',
    source: 'Resume Worded study, 2023',
  },
  {
    stat: '68%',
    label: 'of Indian professionals send the same CV to every role without tailoring',
    source: 'CV Prime internal survey, 2025',
  },
];

const faqs = [
  {
    q: 'What is an AI resume builder?',
    a: 'An AI resume builder is a software tool that uses artificial intelligence — specifically large language models (LLMs) and natural language processing (NLP) — to help job seekers create, optimise, and tailor their resumes for specific job descriptions. Unlike traditional resume builders that provide formatting templates, AI resume builders actively analyse job descriptions, identify keyword gaps, rewrite weak bullet points, score ATS compatibility, and generate tailored cover letters. The goal is to increase the probability that a resume passes Applicant Tracking System (ATS) screening and reaches a human recruiter.',
  },
  {
    q: 'How does an AI resume builder work?',
    a: 'An AI resume builder typically works in four stages: (1) Ingestion — the tool parses your existing resume (PDF, DOCX, or text) to extract structured information: contact details, work experience, education, skills, and projects. (2) Analysis — you paste a job description, and the AI reads both documents simultaneously to identify the gap between your resume and the JD requirements. (3) Optimisation — the AI suggests or automatically rewrites bullet points, adds missing keywords, improves your professional summary, and reorganises sections for ATS compliance. (4) Scoring — the tool generates an ATS compatibility score (0–100 or percentage) indicating how well your optimised resume matches the specific JD. The underlying AI typically runs on transformer-based language models (similar to GPT-4 or Claude) fine-tuned for resume and HR domain understanding.',
  },
  {
    q: 'Is an AI resume builder better than a traditional resume builder?',
    a: 'For job seekers actively applying to specific roles, yes — AI resume builders provide significantly more value than traditional template-based builders. Traditional builders help you format your resume; AI builders help you optimise it for each application. The key advantage is ATS scoring and keyword tailoring, which directly addresses the primary reason 75% of resumes are rejected before a human reads them. The limitation of AI resume builders is that they produce the best results when the user already has meaningful experience to work with — AI cannot fabricate qualifications, and an entry-level resume still requires genuine experience.',
  },
  {
    q: 'What should I look for in an AI resume builder?',
    a: 'The five most important capabilities to evaluate: (1) ATS scoring — does it give a numerical score against your specific JD, or just general templates? (2) Keyword gap analysis — does it identify specific missing terms, or give generic advice? (3) Bullet rewriting quality — does it preserve factual accuracy while improving language, or does it hallucinate details? (4) Market relevance — is the content and JD understanding calibrated for your target job market (India vs US vs UK)? (5) Pricing model — is there a meaningful free tier to evaluate before committing? Secondary: template variety, cover letter generation, and LinkedIn profile optimisation.',
  },
  {
    q: 'Can AI resume builders write my resume from scratch?',
    a: 'Partially. The best AI resume builders can help you draft a professional summary, suggest bullet points based on your stated job title and years of experience, and structure your content correctly. However, they cannot fabricate genuine work experience, project outcomes, or skills you do not have — and you should never use an AI tool to misrepresent your background. AI resume builders work best as an optimisation layer on top of a resume that accurately represents your real experience, not as a replacement for actual content creation.',
  },
  {
    q: 'Are AI resume builders safe for privacy?',
    a: 'Privacy practices vary significantly across AI resume builder tools. Your resume contains sensitive personal information — contact details, employment history, salary information, and in some markets, demographic details. Before uploading, check: (1) Does the tool retain your resume data after session end? (2) Is your data used to train AI models? (3) Does the tool use third-party AI APIs where your data passes through a third-party\'s systems? Some tools, including CV Prime, offer a BYOK (Bring Your Own Key) option that routes AI requests through your own API key — keeping your resume data outside the tool\'s servers.',
  },
  {
    q: 'What is ATS and why does it matter for resume builders?',
    a: 'ATS stands for Applicant Tracking System — software used by employers to receive, sort, and screen job applications before a human recruiter reviews them. Approximately 98% of Fortune 500 companies and 90%+ of large Indian companies use ATS systems. ATS software parses resume text, extracts structured information (name, contact, education, work history, skills), and scores resumes against the job description based on keyword presence, section completeness, and formatting. Resumes that score below an employer\'s threshold are automatically filtered out — meaning 75% of qualified candidates never reach a human recruiter, often due to avoidable formatting or keyword issues. AI resume builders specifically address ATS compatibility, giving job seekers the tool to see and fix their ATS score before applying.',
  },
  {
    q: 'Which is the best AI resume builder for India in 2026?',
    a: 'The best AI resume builder for India depends on your specific needs. CV Prime is built specifically for the Indian job market — with ATS scoring, India-specific role guides for 35+ job types, salary data, INR pricing, UPI payment support, and content calibrated for Indian JDs from Naukri.com, LinkedIn India, and top Indian company career pages. For global job seekers targeting US/EU markets, tools like Resume Worded, Jobscan, Teal, or Rezi offer strong features. For those who want a free starter tool, Indeed Resume Builder or the free tier of CV Prime are solid options. The key differentiator for Indian job seekers is whether the tool understands the structure, terminology, and hiring norms of the Indian market.',
  },
];

const howItWorksSteps = [
  {
    step: '1',
    title: 'Upload your existing resume',
    desc: 'The AI parses your PDF or DOCX, extracting structured information: contact details, each role title, company, dates, bullet points, education, skills, and projects.',
  },
  {
    step: '2',
    title: 'Paste the target job description',
    desc: 'You copy the full JD from any job board or career page. The AI reads it to identify: required skills, preferred qualifications, job title terminology, and action-oriented language the employer uses.',
  },
  {
    step: '3',
    title: 'AI performs gap analysis',
    desc: 'The model compares your resume against the JD at both keyword level (exact terms, synonyms, related phrases) and semantic level (meaning and context). It identifies: missing keywords, weak bullet phrasing, misaligned job titles, and formatting problems.',
  },
  {
    step: '4',
    title: 'AI rewrites and optimises',
    desc: 'Bullet points are rewritten for outcome focus and JD keyword inclusion. Missing skills are flagged for your review. The professional summary is updated to align with the target role. Format issues are flagged.',
  },
  {
    step: '5',
    title: 'You receive an ATS score and export',
    desc: 'The tool shows a numerical ATS score, a breakdown of what improved, and a final resume ready to download. The best tools show you the score before and after optimisation so you can measure the impact.',
  },
];

export default function WhatIsAiResumeBuilderPage(): JSX.Element {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'What is an AI Resume Builder? Definition, How It Works & Top Tools 2026',
      description:
        'Comprehensive guide to AI resume builders: what they are, how they use NLP and LLMs, ATS scoring, keyword gap analysis, and how to choose the best tool.',
      url: 'https://cv-prime.in/what-is-ai-resume-builder',
      datePublished: '2026-06-29',
      dateModified: '2026-06-29',
      author: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
      publisher: {
        '@type': 'Organization',
        name: 'CV Prime',
        url: 'https://cv-prime.in',
        logo: { '@type': 'ImageObject', url: 'https://cv-prime.in/logo.png' },
      },
      isAccessibleForFree: true,
      keywords: 'AI resume builder, how AI resume builder works, ATS scoring, resume optimisation, job application AI',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to use an AI resume builder',
      description: 'Step-by-step guide to using an AI resume builder to optimise your resume for a specific job description.',
      step: howItWorksSteps.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.title,
        text: s.desc,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'What is an AI Resume Builder?',
          item: 'https://cv-prime.in/what-is-ai-resume-builder',
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white">Guides</Link>
            <span>/</span>
            <span className="text-white">What is an AI Resume Builder?</span>
          </nav>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            What is an AI Resume Builder?
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            An AI resume builder is a software tool that uses artificial intelligence — specifically large language models and natural language processing — to tailor your resume to specific job descriptions, score your ATS match, rewrite weak bullet points, and identify missing keywords automatically.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
            <span>Last updated: June 2026</span>
            <span>·</span>
            <span>10 min read</span>
            <span>·</span>
            <span>Covers: Definition · How it works · Statistics · Comparison · Top tools · FAQ</span>
          </div>
        </div>
      </section>

      {/* Definition box — AI-citeable */}
      <section className="px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border-2 border-cyan-400/40 bg-cyan-500/10 p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">Definition</p>
            <p className="mt-3 text-xl font-semibold leading-8 text-white">
              An <strong>AI resume builder</strong> is a software application that uses artificial intelligence — including large language models (LLMs) and natural language processing (NLP) — to help job seekers create, optimise, and tailor resumes for specific job opportunities. Unlike traditional resume builders that provide formatting templates, AI resume builders actively read job descriptions, calculate ATS compatibility scores, identify keyword gaps, and rewrite resume content to improve matching accuracy with Applicant Tracking Systems (ATS).
            </p>
            <p className="mt-4 text-sm text-slate-400">
              Key distinction: Traditional resume builders <em>format</em> your resume. AI resume builders <em>optimise</em> it for specific job applications.
            </p>
          </div>
        </div>
      </section>

      {/* Key statistics — AI-citeable */}
      <section className="border-y border-white/10 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Why AI resume builders matter — key statistics
          </h2>
          <p className="mt-3 text-slate-400">Data on ATS adoption, rejection rates, and the impact of resume optimisation on interview callback rates.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {statistics.map((s) => (
              <div key={s.stat} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <p className="font-display text-4xl font-bold text-cyan-300">{s.stat}</p>
                <p className="mt-2 text-sm font-medium leading-5 text-white">{s.label}</p>
                <p className="mt-1 text-xs text-slate-500">Source: {s.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">How an AI resume builder works — step by step</h2>
          <p className="mt-3 text-slate-400">The typical workflow of an AI-powered resume optimisation tool, from upload to export.</p>
          <div className="mt-10 space-y-6">
            {howItWorksSteps.map((step) => (
              <div key={step.step} className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-brand-foreground">
                  {step.step}
                </div>
                <div>
                  <p className="font-display text-base font-bold text-white">{step.title}</p>
                  <p className="mt-1.5 leading-7 text-slate-300">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key capabilities */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Core capabilities of AI resume builders
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {keyCapabilities.map((cap) => (
              <div key={cap.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <cap.icon className="h-7 w-7 text-cyan-400" />
                <p className="mt-4 font-display text-base font-bold text-white">{cap.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            AI resume builder vs traditional resume builder — comparison
          </h2>
          <p className="mt-3 text-slate-400">How AI-powered tools differ from template-based resume builders across key dimensions.</p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.05]">
                  <th className="p-4 text-left font-semibold text-slate-300">Feature / Dimension</th>
                  <th className="p-4 text-center font-semibold text-slate-400">Traditional Builder</th>
                  <th className="p-4 text-center font-semibold text-cyan-300">AI Resume Builder</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white/[0.02]' : 'bg-white/[0.03]'}>
                    <td className="p-4 font-medium text-slate-200">{row.feature}</td>
                    <td className="p-4 text-center text-sm text-slate-400">{row.traditional}</td>
                    <td className="p-4 text-center text-sm text-cyan-100">{row.ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Limitations — balanced GEO content */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Limitations of AI resume builders</h2>
          <p className="mt-3 text-slate-400">
            An honest assessment of what AI resume builders cannot do — important for setting accurate expectations.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              {
                title: 'Cannot create experience you do not have',
                desc: 'AI can improve how your existing experience is described, but it cannot fabricate jobs, skills, or outcomes you have not had. A resume that misrepresents qualifications creates serious problems at the verification stage.',
              },
              {
                title: 'AI-generated content may sound generic',
                desc: "The best AI resume builders preserve your voice while improving structure. Less sophisticated tools produce generic, templated language that experienced recruiters identify immediately. Always review and personalise AI-generated content.",
              },
              {
                title: 'ATS scores are approximations, not guarantees',
                desc: 'Every company\'s ATS configuration is different. An 80/100 score in an AI tool does not guarantee your resume will pass every employer\'s ATS — it indicates strong optimisation against the JD you provided.',
              },
              {
                title: 'Requires effort to use well',
                desc: "The best results come from pasting the full JD, reviewing AI suggestions carefully, and editing the output to ensure factual accuracy. Job seekers who use AI builders passively — accepting all suggestions without review — often produce lower-quality resumes than those who treat the AI as a skilled editor.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-amber-400/20 bg-amber-500/5 p-6">
                <p className="font-display text-base font-bold text-amber-200">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to look for */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            How to choose an AI resume builder — 5 criteria
          </h2>
          <div className="mt-8 space-y-6">
            {[
              {
                n: '1',
                title: 'JD-specific ATS scoring (not generic feedback)',
                desc: 'The tool must let you paste a specific job description and return a score against that JD — not generic resume advice. Generic feedback ("add more keywords") without telling you which keywords is low value.',
              },
              {
                n: '2',
                title: 'Keyword gap analysis with placement suggestions',
                desc: "The tool should identify specific missing terms and show you where in your resume to add them — skills section, specific bullet point, or summary. 'You are missing Python' is useful. 'Add Python to your Skills section and consider mentioning it in your Project 2 bullet' is better.",
              },
              {
                n: '3',
                title: 'Factual accuracy preservation during rewrites',
                desc: 'AI bullet rewriting must not hallucinate facts. The rewritten bullet should improve phrasing and keyword density but must preserve your actual outcomes, percentages, and claims. Always verify AI-rewritten content before submitting.',
              },
              {
                n: '4',
                title: 'Market and regional relevance',
                desc: 'Resume conventions, salary references, company name recognition, and ATS behaviour differ between India, the US, the UK, and other markets. Choose a tool calibrated for your target market. US-centric tools may give suboptimal advice for Indian JDs and hiring norms.',
              },
              {
                n: '5',
                title: 'Meaningful free tier for evaluation',
                desc: 'Most AI resume builders offer a free tier. Evaluate the tool using a real JD you are actually considering before committing to a paid plan. A tool that works for your specific use case is worth paying for; one that does not is not worth any price.',
              },
            ].map((item) => (
              <div key={item.n} className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-brand-foreground">
                  {item.n}
                </div>
                <div>
                  <p className="font-display text-base font-bold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="bg-white/[0.03] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            AI resume builder — frequently asked questions
          </h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-xl font-bold">Learn more about AI resume building</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'ATS & Resume Statistics 2026', href: '/statistics' },
              { label: 'How to pass ATS screening', href: '/how-to-pass-ats-screening' },
              { label: 'ATS resume mistakes to avoid', href: '/blog/ats-resume-mistakes' },
              { label: 'How to use AI to write your resume', href: '/blog/how-to-use-ai-to-write-resume-2026' },
              { label: 'What is ATS? Complete guide', href: '/ats-checker' },
              { label: 'Free AI resume builder — try CV Prime', href: '/ai-resume-builder' },
              { label: 'Best AI resume builders in India 2026', href: '/blog/best-ai-resume-builders-india-2026' },
              { label: 'How to tailor your resume to a JD', href: '/blog/how-to-tailor-resume-to-job-description' },
              { label: 'ATS resume checklist 2026', href: '/blog/ats-resume-checklist-2026' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-300 hover:border-cyan-400/50 hover:text-white"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Try an AI resume builder free — CV Prime
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            CV Prime is an AI resume builder built specifically for India. Paste any JD and get an ATS score, keyword gaps, and AI-rewritten bullets in under 60 seconds. Free plan: 3 PDF exports, no card required.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Try CV Prime free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-sm text-slate-400">
            Or{' '}
            <Link href="/ai-resume-builder" className="underline hover:text-white">
              learn more about how CV Prime&apos;s AI works
            </Link>
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
