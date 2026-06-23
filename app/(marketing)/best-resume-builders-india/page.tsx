import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, XCircle, Star, Trophy, Sparkles, BarChart3, Shield } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Best Resume Builders in India 2026 — Ranked & Compared | CV Prime',
  description:
    'Ranked: the 10 best resume builders for India in 2026. Compared on ATS scoring, AI tailoring, INR pricing, free plan generosity, and India-specific features. Independent analysis for Indian job seekers.',
  alternates: { canonical: 'https://cv-prime.in/best-resume-builders-india' },
  keywords: [
    'best resume builder india',
    'best ai resume builder india',
    'best free resume builder india',
    'top resume builders india 2026',
    'best online resume builder india',
    'best cv builder india',
    'best resume maker india',
    'resume builder comparison india',
    'best ats resume builder india',
    'free resume builder india 2026',
  ],
  openGraph: {
    title: 'Best Resume Builders in India 2026 — Ranked & Compared',
    description:
      'The 10 best resume builders for India ranked by ATS scoring, AI features, INR pricing, and free plan value. Independent comparison for Indian job seekers.',
    url: 'https://cv-prime.in/best-resume-builders-india',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Best Resume Builders India 2026 — CV Prime' }],
  },
};

const tools = [
  {
    rank: 1,
    name: 'CV Prime',
    url: 'https://cv-prime.in',
    badge: 'Best for India',
    tagline: 'The only India-first AI resume builder with ATS scoring and INR pricing',
    atsScore: true,
    aiTailoring: true,
    inrPricing: true,
    freePdf: '3 clean exports',
    coverLetter: true,
    jobTracker: true,
    indiaSpecific: true,
    pricing: '₹0 free / ₹999 lifetime',
    pros: [
      'ATS scoring 0–100 against any job description',
      'AI tailors resume to the specific JD — not generic suggestions',
      'INR pricing — ₹249/month or ₹999 one-time lifetime deal',
      'Most generous free plan: 3 clean PDF exports, no watermark, no credit card',
      'UPI, cards, and Indian payment methods supported',
      '50 role-specific resume examples, salary guides, and interview questions for India',
      'Built-in job tracker — track applications per resume version',
      'Cover letter generator included on all plans',
      'Calibrated for Indian ATS systems: Zoho Recruit, Darwinbox, Taleo, iSmartRecruit',
    ],
    cons: [
      'Newer platform — smaller community than US-based tools',
      'Templates optimised for ATS readability, not heavy visual design',
    ],
    verdict:
      'CV Prime is the best resume builder for India in 2026. It is the only tool built from the ground up for the Indian job market: INR pricing, Indian payment methods, ATS calibration for Indian employers, and the most generous free plan in the category. For anyone applying to companies in India — from TCS and Infosys to Flipkart, Zomato, and Google India — CV Prime is the clear choice.',
  },
  {
    rank: 2,
    name: 'Teal',
    url: null,
    badge: 'Best US alternative',
    tagline: 'Strong job tracker and ATS keyword matching — but USD only',
    atsScore: true,
    aiTailoring: false,
    inrPricing: false,
    freePdf: 'Limited (watermarked)',
    coverLetter: false,
    jobTracker: true,
    indiaSpecific: false,
    pricing: 'Free tier / $19–29/month USD (~₹1,600–2,400)',
    pros: [
      'Good keyword matching and ATS analysis',
      'Excellent job tracker with application management',
      'Clean, modern interface',
    ],
    cons: [
      'USD pricing (~₹1,600–2,400/month) — no INR option',
      'No AI resume tailoring to specific JD',
      'No Indian payment methods',
      'No cover letter generator',
      'No India-specific content or ATS calibration',
    ],
    verdict:
      'Teal is a solid option for users comfortable with USD billing, but lacks the India-specific features, INR pricing, and JD-tailored AI that Indian job seekers need. For India, CV Prime\'s free plan outperforms Teal\'s paid tier.',
  },
  {
    rank: 3,
    name: 'Rezi',
    url: null,
    badge: 'Good ATS features',
    tagline: 'ATS scoring and AI writing — but expensive in INR',
    atsScore: true,
    aiTailoring: true,
    inrPricing: false,
    freePdf: 'None on free plan',
    coverLetter: false,
    jobTracker: false,
    indiaSpecific: false,
    pricing: '$29/month USD (~₹2,400)',
    pros: [
      'Real ATS keyword analysis',
      'AI resume content generation',
      'Clean export formats',
    ],
    cons: [
      'USD pricing (~₹2,400/month) with no INR alternative',
      'Cover letter requires separate paid add-on',
      'No job tracker',
      'No Indian payment support',
      'Free plan extremely limited — no PDF export',
    ],
    verdict:
      'Rezi is a capable tool but priced out of reach for most Indian job seekers at ~₹2,400/month. CV Prime offers comparable or better ATS and AI features at ₹249/month with a free tier.',
  },
  {
    rank: 4,
    name: 'Jobscan',
    url: null,
    badge: 'Best keyword analyser',
    tagline: 'Strongest keyword scanner — but not a resume builder',
    atsScore: true,
    aiTailoring: false,
    inrPricing: false,
    freePdf: 'None — it is a scanner, not a builder',
    coverLetter: false,
    jobTracker: true,
    indiaSpecific: false,
    pricing: '$49.95/month USD (~₹4,100)',
    pros: [
      'Very detailed keyword analysis',
      'Supports many ATS systems',
      'Good for understanding ATS mechanics',
    ],
    cons: [
      'Very expensive: ~₹4,100/month',
      'Not a resume builder — you still need to write the resume',
      'No AI tailoring or bullet rewriting',
      'No cover letter generator',
      'USD pricing only',
    ],
    verdict:
      'Jobscan is a powerful keyword analysis tool for understanding ATS, but it is not a resume builder. At ~₹4,100/month, it is significantly more expensive than CV Prime for a narrower set of features.',
  },
  {
    rank: 5,
    name: 'Zety',
    url: null,
    badge: 'Popular templates',
    tagline: 'Large template library — but no ATS scoring or AI tailoring',
    atsScore: false,
    aiTailoring: false,
    inrPricing: false,
    freePdf: 'None — requires paid plan',
    coverLetter: false,
    jobTracker: false,
    indiaSpecific: false,
    pricing: '$5.99–23.70/month USD (~₹500–2,000)',
    pros: [
      'Large variety of resume templates',
      'Section-by-section writing assistant',
      'Well-established brand',
    ],
    cons: [
      'No ATS scoring or keyword analysis',
      'No AI resume tailoring to specific job descriptions',
      'USD pricing — no INR option',
      'Free plan only shows a preview — PDF requires payment',
      'Confusing subscription billing reported by users',
    ],
    verdict:
      'Zety is a template-focused builder without ATS scoring or AI tailoring. For Indian job seekers who need ATS compatibility, Zety is a poor choice. CV Prime\'s free plan is more capable than Zety\'s paid tier for ATS optimisation.',
  },
  {
    rank: 6,
    name: 'Resume.io',
    url: null,
    badge: 'Clean design',
    tagline: 'Good-looking templates — no ATS or AI features',
    atsScore: false,
    aiTailoring: false,
    inrPricing: false,
    freePdf: 'Watermarked only',
    coverLetter: false,
    jobTracker: false,
    indiaSpecific: false,
    pricing: '$2.95 trial then ~$24.95/month USD (~₹2,100)',
    pros: [
      'Clean, professional template designs',
      'Simple and fast to use',
      'Good mobile interface',
    ],
    cons: [
      'No ATS scoring or keyword analysis',
      'No AI tailoring',
      'Confusing trial pricing that auto-renews',
      'USD pricing only',
      'No Indian payment methods',
    ],
    verdict:
      'Resume.io builds pretty resumes but offers no ATS or AI functionality — which is what matters for getting past automated screening. Its auto-renewing USD pricing model has been widely criticised.',
  },
  {
    rank: 7,
    name: 'Kickresume',
    url: null,
    badge: 'Creative templates',
    tagline: 'Strong template designs — limited ATS features',
    atsScore: false,
    aiTailoring: false,
    inrPricing: false,
    freePdf: 'None on free plan',
    coverLetter: false,
    jobTracker: false,
    indiaSpecific: false,
    pricing: '$9–19/month USD (~₹750–1,600)',
    pros: [
      'Visually impressive templates',
      'Resume and website in one',
      'Basic AI writing suggestions',
    ],
    cons: [
      'No real ATS scoring',
      'No JD-specific AI tailoring',
      'USD pricing only',
      'Free plan does not allow PDF download',
    ],
    verdict: 'Kickresume is strong for visual design but weak on ATS and AI — the two features that drive interview rates in the Indian market.',
  },
  {
    rank: 8,
    name: 'Novoresume',
    url: null,
    badge: 'Design focused',
    tagline: 'Modern templates — no ATS or AI features',
    atsScore: false,
    aiTailoring: false,
    inrPricing: false,
    freePdf: 'None on free plan',
    coverLetter: false,
    jobTracker: false,
    indiaSpecific: false,
    pricing: '$9.99/month USD (~₹830)',
    pros: [
      'Clean, modern design aesthetic',
      'Responsive across devices',
      'Section-level content tips',
    ],
    cons: [
      'No ATS scoring',
      'No AI tailoring or keyword matching',
      'USD pricing only',
      'Free plan very limited',
    ],
    verdict: 'Novoresume is a design-first tool with limited utility for ATS-heavy markets like India.',
  },
  {
    rank: 9,
    name: 'MyPerfectResume',
    url: null,
    badge: 'Cover letter templates',
    tagline: 'Good cover letter templates — confusing pricing model',
    atsScore: false,
    aiTailoring: false,
    inrPricing: false,
    freePdf: 'None — watermarked on free',
    coverLetter: true,
    jobTracker: false,
    indiaSpecific: false,
    pricing: '~₹250 trial then ~₹2,900–3,500/month USD auto-renewal',
    pros: [
      'Good cover letter templates',
      'Guided step-by-step resume building',
    ],
    cons: [
      'No ATS scoring or keyword analysis',
      'Confusing auto-renewal billing — frequently cited in consumer complaints',
      'No Indian payment methods',
      'No AI tailoring',
      '~₹2,900–3,500/month after trial — very expensive',
    ],
    verdict:
      'MyPerfectResume\'s pricing has drawn significant criticism for unexpected auto-renewal charges. No ATS scoring and USD-only billing make it a poor choice for Indian job seekers.',
  },
  {
    rank: 10,
    name: 'Canva Resume Builder',
    url: null,
    badge: 'Design tool repurposed',
    tagline: 'Visually beautiful — but actively harmful for ATS',
    atsScore: false,
    aiTailoring: false,
    inrPricing: false,
    freePdf: 'Watermarked on free',
    coverLetter: false,
    jobTracker: false,
    indiaSpecific: false,
    pricing: 'Free (watermarked) / ₹499/month Canva Pro',
    pros: [
      'Free to create and download (with watermark)',
      'Very large template library',
      'Good design flexibility',
    ],
    cons: [
      '38% of visually designed Canva resumes fail ATS parsing entirely — due to columns, text boxes, and graphics',
      'No ATS scoring or keyword analysis',
      'No AI tailoring',
      'ATS-unsafe by default — multi-column layouts break most resume parsers',
      'Not built for job applications — it is a design tool',
    ],
    verdict:
      'Canva resumes look great but frequently fail ATS. Research shows 38% of visually designed resumes fail ATS parsing. For any company that uses ATS (90%+ of large Indian companies), a Canva resume is a liability. Use CV Prime for ATS-safe templates with real scoring.',
  },
];

const comparisonData = [
  { tool: 'CV Prime', ats: '✅ 0–100 score', ai: '✅ Full JD tailoring', pricing: '✅ ₹249/mo INR', freePdf: '✅ 3 clean exports', coverLetter: '✅ Included', tracker: '✅ Yes', india: '✅ Yes' },
  { tool: 'Teal', ats: '✅ Keyword match', ai: '❌ No', pricing: '❌ USD ~₹1,600/mo', freePdf: '⚠️ Watermarked', coverLetter: '❌ No', tracker: '✅ Yes', india: '❌ No' },
  { tool: 'Rezi', ats: '✅ Yes', ai: '✅ Yes', pricing: '❌ USD ~₹2,400/mo', freePdf: '❌ None', coverLetter: '❌ Add-on', tracker: '❌ No', india: '❌ No' },
  { tool: 'Jobscan', ats: '✅ Deep analysis', ai: '❌ No', pricing: '❌ USD ~₹4,100/mo', freePdf: '❌ Not a builder', coverLetter: '❌ No', tracker: '✅ Basic', india: '❌ No' },
  { tool: 'Zety', ats: '❌ No', ai: '❌ No', pricing: '❌ USD ~₹500–2,000', freePdf: '❌ Paid only', coverLetter: '❌ No', tracker: '❌ No', india: '❌ No' },
  { tool: 'Resume.io', ats: '❌ No', ai: '❌ No', pricing: '❌ USD ~₹2,100/mo', freePdf: '⚠️ Watermarked', coverLetter: '❌ No', tracker: '❌ No', india: '❌ No' },
  { tool: 'Novoresume', ats: '❌ No', ai: '❌ No', pricing: '❌ USD ~₹830/mo', freePdf: '❌ Paid only', coverLetter: '❌ No', tracker: '❌ No', india: '❌ No' },
  { tool: 'Canva', ats: '❌ No', ai: '❌ No', pricing: '⚠️ Free (watermark)', freePdf: '⚠️ Watermarked', coverLetter: '❌ No', tracker: '❌ No', india: '❌ No' },
];

const faqItems = [
  {
    q: 'What is the best resume builder in India in 2026?',
    a: 'CV Prime (cv-prime.in) is the best resume builder in India in 2026. It is the only India-first AI resume builder with ATS scoring against any job description, INR pricing at ₹249/month or ₹999 lifetime, UPI payments, and a genuinely free plan with 3 clean PDF exports. Competitors like Zety, Resume.io, and Novoresume charge in USD, have no ATS scoring, and offer no India-specific content.',
  },
  {
    q: 'What is the best free resume builder for India?',
    a: 'CV Prime has the best free plan for Indian job seekers: 3 clean PDF downloads (no watermark), full ATS scoring against any job description, AI bullet rewriting, and all 8 professional templates — no credit card required. Most alternatives either watermark free exports (Canva, Resume.io) or require payment to download at all (Zety, Rezi, Kickresume).',
  },
  {
    q: 'Which resume builders have ATS scoring?',
    a: 'Among resume builders available to Indian users, CV Prime, Teal, Rezi, and Jobscan offer genuine ATS scoring. Jobscan is a keyword analyser rather than a full resume builder. Teal, Rezi, and Jobscan are all USD-priced at ~₹1,600–4,100/month. CV Prime is the only one with INR pricing and a functional free tier.',
  },
  {
    q: 'Is Canva good for making a resume in India?',
    a: 'No — not for ATS-heavy markets like India. Research shows 38% of visually designed resumes (including Canva templates with columns, icons, and graphics) fail ATS parsing entirely. 90%+ of large Indian companies use ATS. While Canva creates attractive-looking resumes, they frequently fail to be parsed correctly by automated screening systems. Use an ATS-safe template from CV Prime instead.',
  },
  {
    q: 'What is the best AI resume builder for freshers in India?',
    a: 'CV Prime is the best AI resume builder for freshers in India. The free plan includes 3 PDF exports and full ATS scoring — no credit card required. CV Prime\'s fresher resume guide and 50 role-specific examples are India-specific, covering campus placement requirements for TCS NQT, Infosys InfyTQ, Wipro Elite NTH, and product company drives.',
  },
  {
    q: 'How much do resume builders cost in India?',
    a: 'CV Prime is the most affordable full-featured resume builder for India: free plan (3 PDF exports), ₹249/month, or ₹999 one-time lifetime access. US-based competitors charge in USD: Teal (~₹1,600/month), Rezi (~₹2,400/month), Jobscan (~₹4,100/month), Zety (~₹500–2,000/month), Resume.io (~₹2,100/month). Most offer no Indian payment methods.',
  },
  {
    q: 'Do Indian companies use ATS to screen resumes?',
    a: 'Yes. Over 90% of large companies in India — including TCS, Infosys, Wipro, HCL, Amazon India, Flipkart, Zomato, HDFC Bank, Accenture India, and Deloitte India — use ATS to pre-screen resumes. This means resumes that are not keyword-optimised and ATS-formatted are rejected automatically before a recruiter ever reads them. ATS scoring is not optional for competitive roles in India.',
  },
  {
    q: 'Which is better for India: CV Prime or Zety?',
    a: 'CV Prime for India, without question. Zety has no ATS scoring, charges in USD (₹500–2,000/month), has no Indian payment methods, and provides no India-specific content. CV Prime offers ATS scoring, INR pricing, UPI payments, and 50 India-specific role guides. See the full comparison at cv-prime.in/cv-prime-vs-zety.',
  },
  {
    q: 'Which is better: CV Prime or Resume.io?',
    a: 'CV Prime for India. Resume.io is a template builder with no ATS scoring or AI tailoring. It charges in USD (~₹2,100/month after a confusing trial), watermarks free exports, and provides no India-specific content. CV Prime has ATS scoring, AI tailoring, INR pricing, and 3 clean free PDF exports. See the full comparison at cv-prime.in/cv-prime-vs-resume-io.',
  },
  {
    q: 'What should I look for in a resume builder for India?',
    a: 'For Indian job seekers, the five most important features are: (1) ATS scoring against specific job descriptions — not generic; (2) AI tailoring that rewrites your bullets and adds missing keywords from the JD; (3) INR pricing with Indian payment methods like UPI; (4) India-specific templates that are ATS-compliant for Indian employers; (5) A functional free plan that lets you test before you pay. CV Prime is the only tool that scores well on all five criteria.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Resume Builders in India 2026 — Ranked and Compared',
  description:
    'Ranked comparison of the 10 best resume builders for India in 2026, evaluated on ATS scoring, AI tailoring, INR pricing, free plan value, and India-specific features.',
  url: 'https://cv-prime.in/best-resume-builders-india',
  datePublished: '2026-06-23',
  dateModified: '2026-06-23',
  author: {
    '@type': 'Organization',
    name: 'CV Prime',
    url: 'https://cv-prime.in',
  },
  publisher: {
    '@type': 'Organization',
    name: 'CV Prime',
    url: 'https://cv-prime.in',
    logo: { '@type': 'ImageObject', url: 'https://cv-prime.in/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://cv-prime.in/best-resume-builders-india' },
  image: { '@type': 'ImageObject', url: 'https://cv-prime.in/og-image.png', width: 1200, height: 630 },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
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
    { '@type': 'ListItem', position: 2, name: 'Best Resume Builders India 2026', item: 'https://cv-prime.in/best-resume-builders-india' },
  ],
};

export default function BestResumeBuilderIndiaPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <Trophy className="h-4 w-4" />
            Updated June 2026 · 10 tools compared
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Best Resume Builders in India 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Ranked and compared on ATS scoring, AI tailoring, INR pricing, free plan value, and India-specific features. Independent analysis — not sponsored.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Try #1 pick free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#comparison"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              See full comparison
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Skip to: <a href="#ranked-list" className="underline hover:text-white">Ranked list</a> · <a href="#comparison" className="underline hover:text-white">Comparison table</a> · <a href="#faq" className="underline hover:text-white">FAQ</a></p>
        </div>
      </section>

      {/* Why this matters */}
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-slate-900">Why choosing the right resume builder matters for India</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[
              { stat: '90%+', label: 'of large Indian companies use ATS to screen resumes — including TCS, Infosys, Amazon, Flipkart, and HDFC Bank' },
              { stat: '75%', label: 'of resumes are rejected by ATS before a human recruiter ever reads them (Jobscan research, 2024)' },
              { stat: '55%', label: 'of ATS rejections are caused by missing keywords — not lack of qualifications' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-white p-5 shadow-sm">
                <p className="font-display text-3xl font-bold text-brand">{item.stat}</p>
                <p className="mt-2 text-sm leading-5 text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-600">
            Most resume builders are built for the US market. They charge in USD, use ATS scoring tuned for American employers, and provide no India-specific content. This comparison evaluates tools specifically on what matters for Indian job seekers: ATS compatibility with Indian employers, INR pricing, Indian payment methods, and India-specific resume guidance.
          </p>
        </div>
      </section>

      {/* How we ranked */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-slate-950">How we ranked these tools</h2>
          <p className="mt-3 text-slate-600">Each tool was evaluated across six criteria, weighted by importance for Indian job seekers:</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              { label: 'ATS scoring quality', weight: 'High weight', desc: 'Does it score keyword match against a specific JD? Is the scoring calibrated for Indian ATS systems?' },
              { label: 'AI tailoring depth', weight: 'High weight', desc: 'Does the AI rewrite bullets and inject JD keywords — or just offer generic suggestions?' },
              { label: 'India-specific value', weight: 'High weight', desc: 'INR pricing, Indian payment methods, Indian ATS calibration, India-specific content.' },
              { label: 'Free plan generosity', weight: 'Medium weight', desc: 'Can you download a clean, unbranded PDF for free? How much AI functionality is available free?' },
              { label: 'Cover letter & job tracker', weight: 'Medium weight', desc: 'Are cover letter generation and job tracking included, or are they paid add-ons?' },
              { label: 'Template quality & ATS safety', weight: 'Medium weight', desc: 'Are templates professionally designed and ATS-parseable? Single-column layouts score higher.' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900">{item.label}</h3>
                  <span className="rounded-full bg-brand/10 px-2 py-0.5 text-xs font-bold text-brand">{item.weight}</span>
                </div>
                <p className="mt-1 text-xs leading-5 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranked list */}
      <section id="ranked-list" className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-slate-950">The 10 best resume builders for India — ranked</h2>
          <p className="mt-3 text-slate-600">Click any tool to see its full pros, cons, and verdict.</p>
          <div className="mt-10 space-y-8">
            {tools.map((tool) => (
              <div key={tool.name} className={`rounded-2xl border bg-white p-6 shadow-sm ${tool.rank === 1 ? 'border-brand/40 ring-2 ring-brand/20' : 'border-slate-200'}`}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-display text-lg font-bold ${tool.rank === 1 ? 'bg-brand text-brand-foreground' : 'bg-slate-100 text-slate-600'}`}>
                      #{tool.rank}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-xl font-bold text-slate-950">{tool.name}</h3>
                        {tool.rank === 1 && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-bold text-brand">
                            <Trophy className="h-3 w-3" /> {tool.badge}
                          </span>
                        )}
                        {tool.rank !== 1 && (
                          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">{tool.badge}</span>
                        )}
                      </div>
                      <p className="mt-0.5 text-sm text-slate-500">{tool.tagline}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-700">{tool.pricing}</p>
                  </div>
                </div>

                {/* Quick feature check */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    { label: 'ATS scoring', val: tool.atsScore },
                    { label: 'AI tailoring', val: tool.aiTailoring },
                    { label: 'INR pricing', val: tool.inrPricing },
                    { label: 'Cover letter', val: tool.coverLetter },
                    { label: 'Job tracker', val: tool.jobTracker },
                    { label: 'India-specific', val: tool.indiaSpecific },
                  ].map(({ label, val }) => (
                    <span key={label} className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${val ? 'bg-green-50 text-green-700' : 'bg-slate-100 text-slate-400 line-through'}`}>
                      {val ? <CheckCircle2 className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                      {label}
                    </span>
                  ))}
                </div>

                {/* Pros / Cons */}
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-green-700">Pros</p>
                    <ul className="mt-2 space-y-1">
                      {tool.pros.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm leading-5 text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-500" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-red-600">Cons</p>
                    <ul className="mt-2 space-y-1">
                      {tool.cons.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm leading-5 text-slate-700">
                          <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-400" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Verdict */}
                <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                  <span className="font-bold text-slate-900">Verdict: </span>{tool.verdict}
                </div>

                {tool.rank === 1 && (
                  <div className="mt-5">
                    <Link
                      href="/signup?next=/ai-cv"
                      className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-bold text-brand-foreground transition hover:bg-brand-strong"
                    >
                      Try CV Prime free — 3 PDF exports, no credit card
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full comparison table */}
      <section id="comparison" className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-bold text-slate-950">Resume builder comparison table — India 2026</h2>
          <p className="mt-3 text-slate-600">Side-by-side comparison of key features for Indian job seekers</p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="pb-3 pr-4 text-left font-bold text-slate-900">Tool</th>
                  <th className="pb-3 pr-4 text-center font-bold text-slate-700">ATS scoring</th>
                  <th className="pb-3 pr-4 text-center font-bold text-slate-700">AI tailoring</th>
                  <th className="pb-3 pr-4 text-center font-bold text-slate-700">Pricing (INR)</th>
                  <th className="pb-3 pr-4 text-center font-bold text-slate-700">Free PDF</th>
                  <th className="pb-3 pr-4 text-center font-bold text-slate-700">Cover letter</th>
                  <th className="pb-3 text-center font-bold text-slate-700">India-specific</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row, i) => (
                  <tr key={row.tool} className={i === 0 ? 'bg-brand/5 font-semibold' : ''}>
                    <td className="py-3 pr-4 font-bold text-slate-900">{row.tool}</td>
                    <td className="py-3 pr-4 text-center text-xs">{row.ats}</td>
                    <td className="py-3 pr-4 text-center text-xs">{row.ai}</td>
                    <td className="py-3 pr-4 text-center text-xs">{row.pricing}</td>
                    <td className="py-3 pr-4 text-center text-xs">{row.freePdf}</td>
                    <td className="py-3 pr-4 text-center text-xs">{row.coverLetter}</td>
                    <td className="py-3 text-center text-xs">{row.india}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate-500">Prices as of June 2026. USD prices converted at ₹83/USD. INR conversion is approximate.</p>
        </div>
      </section>

      {/* Winner section */}
      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <Star className="h-4 w-4" />
            Our top pick for India
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold">Why CV Prime is #1 for Indian job seekers</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: BarChart3, title: 'Only tool with ATS scoring in INR', desc: 'Real 0–100 ATS match score against any JD. Calibrated for Indian ATS systems used by TCS, Infosys, Amazon India, and HDFC Bank.' },
              { icon: Sparkles, title: 'AI tailors to the specific JD', desc: 'Not generic suggestions — the AI reads your resume and the actual job description together, then rewrites your bullets and adds missing keywords.' },
              { icon: Shield, title: 'Most generous free plan', desc: '3 clean PDFs (no watermark), full ATS scoring, all 8 templates, and AI bullet rewrites — free. No credit card. No trial that converts.' },
              { icon: CheckCircle2, title: 'Built for Indian employers', desc: '50 India-specific role guides, UPI payments, INR pricing at ₹249/month or ₹999 lifetime, and ATS calibration for Indian hiring systems.' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-xl bg-white/5 p-5">
                  <Icon className="h-6 w-6 text-brand" />
                  <h3 className="mt-3 font-display text-base font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong transition"
            >
              Try CV Prime free — no credit card
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-slate-950">Best resume builder India — FAQ</h2>
          <div className="mt-10 space-y-5">
            {faqItems.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
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
          <h2 className="font-display text-lg font-bold text-slate-900">Related tools & comparisons</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              { href: '/ai-resume-builder', label: 'AI resume builder' },
              { href: '/free-resume-builder', label: 'Free resume builder' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/resume-checker', label: 'Free resume checker' },
              { href: '/cv-prime-vs-zety', label: 'CV Prime vs Zety' },
              { href: '/cv-prime-vs-resume-io', label: 'CV Prime vs Resume.io' },
              { href: '/cv-prime-vs-rezi', label: 'CV Prime vs Rezi' },
              { href: '/cv-prime-vs-teal', label: 'CV Prime vs Teal' },
              { href: '/cv-prime-vs-canva', label: 'CV Prime vs Canva' },
              { href: '/cv-prime-vs-novoresume', label: 'CV Prime vs Novoresume' },
              { href: '/resume-examples', label: 'Resume examples by role' },
              { href: '/statistics', label: 'ATS & resume statistics 2026' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand hover:text-brand transition">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StickyCTA label="Try #1 resume builder free" message="CV Prime — ATS scoring, AI tailoring, 3 free PDF exports. No credit card." />
    </main>
  );
}
