import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, MapPin, Briefcase, TrendingUp, Users } from 'lucide-react';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'AI Resume Builder for Bangalore — Free CV Maker for Tech & Startup Jobs | CV Prime',
  description:
    'Build an ATS-optimised resume for Bangalore jobs. CV Prime\'s AI resume builder is tailored for Bangalore\'s tech, startup, and IT sectors. Free to start — used by engineers at Amazon, Flipkart, Swiggy, and CRED.',
  alternates: { canonical: 'https://cv-prime.in/resume-builder-bangalore' },
  keywords: [
    'resume builder bangalore',
    'ai resume builder bangalore',
    'cv maker bangalore',
    'resume for bangalore jobs',
    'it resume builder bangalore',
    'bangalore job resume',
    'resume builder tech jobs bangalore',
    'free resume builder bangalore',
    'software engineer resume bangalore',
    'bangalore startup resume',
  ],
  openGraph: {
    title: 'AI Resume Builder for Bangalore — Free CV Maker for Tech & Startup Jobs | CV Prime',
    description:
      'Build an ATS-optimised resume for Bangalore jobs. AI tailors your resume for Bangalore\'s tech, startup, and IT sectors. Free to start.',
    url: 'https://cv-prime.in/resume-builder-bangalore',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Resume Builder for Bangalore — CV Prime' }],
  },
};

const bangaloreCompanies = [
  { name: 'Amazon', sector: 'E-commerce / Cloud' },
  { name: 'Google', sector: 'Technology' },
  { name: 'Microsoft', sector: 'Technology' },
  { name: 'Flipkart', sector: 'E-commerce' },
  { name: 'Swiggy', sector: 'FoodTech' },
  { name: 'Zomato', sector: 'FoodTech' },
  { name: 'PhonePe', sector: 'Fintech' },
  { name: 'CRED', sector: 'Fintech' },
  { name: 'Razorpay', sector: 'Payments' },
  { name: 'Infosys', sector: 'IT Services' },
  { name: 'Wipro', sector: 'IT Services' },
  { name: 'Freshworks', sector: 'SaaS' },
  { name: 'Unacademy', sector: 'EdTech' },
  { name: 'Ola', sector: 'MobilityTech' },
];

const inDemandRoles = [
  { role: 'Software Engineer', salaryRange: '₹6L – ₹80L+', growth: 'Very High', slug: 'software-engineer' },
  { role: 'Data Scientist', salaryRange: '₹8L – ₹60L+', growth: 'Very High', slug: 'data-scientist' },
  { role: 'Product Manager', salaryRange: '₹15L – ₹70L+', growth: 'High', slug: 'product-manager' },
  { role: 'DevOps Engineer', salaryRange: '₹7L – ₹45L+', growth: 'Very High', slug: 'devops-engineer' },
  { role: 'Frontend Developer', salaryRange: '₹5L – ₹50L+', growth: 'High', slug: 'frontend-developer' },
  { role: 'Data Analyst', salaryRange: '₹4L – ₹30L+', growth: 'High', slug: 'data-analyst' },
];

const jobHubs = [
  { area: 'Whitefield', known: 'SEZ, MNC tech campuses' },
  { area: 'Electronic City', known: 'Infosys, Wipro, TCS campuses' },
  { area: 'Koramangala', known: 'Startups, D2C brands, fintech' },
  { area: 'HSR Layout', known: 'Unicorn HQs, VC-backed startups' },
  { area: 'Bellandur / Sarjapur', known: 'Product companies, e-commerce' },
  { area: 'ITPL / Marathahalli', known: 'IT parks, consulting firms' },
];

const atsKeywords = [
  'Full Stack Development', 'System Design', 'Microservices', 'AWS / GCP / Azure',
  'React / Node.js', 'Python / Java', 'SQL / NoSQL', 'Agile / Scrum',
  'CI/CD', 'Kubernetes / Docker', 'Machine Learning', 'Data Pipelines',
];

const faqs = [
  {
    q: 'Which resume format works best for Bangalore tech companies?',
    a: 'For Bangalore product companies and startups (Amazon, Flipkart, Swiggy, CRED), a reverse-chronological format with a strong technical skills section and metric-driven bullets is standard. Avoid multi-column layouts — most Bangalore companies use ATS software that cannot parse them correctly. For IT services companies (Infosys, Wipro, TCS), a single-column format with a clear skills matrix and project summary works best.',
  },
  {
    q: 'What keywords should my resume include for Bangalore IT jobs?',
    a: 'Bangalore IT job descriptions typically screen for: programming languages (Python, Java, JavaScript, Go), cloud platforms (AWS, GCP, Azure), frameworks (React, Spring Boot, Django, Node.js), DevOps tools (Kubernetes, Docker, Jenkins), and methodologies (Agile, Scrum). Mirror the exact terminology from the JD — if the JD says "Node.js", do not write "NodeJS".',
  },
  {
    q: 'Is a one-page resume expected for Bangalore jobs?',
    a: 'For Bangalore product companies and FAANG-adjacent roles: yes, one page is strongly preferred regardless of experience. For senior tech roles (7+ years) and IT services: two pages is acceptable. Recruiters at high-scale Bangalore startups receive 500–1,000 applications per open position and spend under 10 seconds on the first scan — keep it tight.',
  },
  {
    q: 'Should I include my GitHub profile on a Bangalore tech resume?',
    a: 'Absolutely. For software engineers, data scientists, and DevOps engineers applying to Bangalore companies, a GitHub profile with active contributions is expected. Include your GitHub URL in the contact section and reference specific repositories in your projects or experience bullets. Companies like Razorpay, CRED, and Freshworks actively review GitHub profiles before interviews.',
  },
  {
    q: 'How do I tailor my resume for Bangalore startup vs MNC applications?',
    a: 'For Bangalore startups: emphasise ownership, speed, cross-functional impact, and scale achieved with lean teams. Use metrics like "launched product to 1M users in 3 months" or "reduced infra cost by 40%". For MNCs (Amazon, Google, Microsoft): emphasise system design, large-scale systems, team collaboration, and impact measured in millions of users or revenue. CV Prime\'s AI tailors your resume automatically based on the job description you paste.',
  },
  {
    q: 'What is the average salary for software engineers in Bangalore?',
    a: 'Bangalore software engineer salaries in 2026: Fresher / 0–1 year: ₹4L–₹12L. Mid-level / 2–5 years: ₹12L–₹35L. Senior / 5–8 years: ₹25L–₹60L. Staff / principal engineers: ₹50L–₹1.2Cr+. FAANG-equivalent companies (Amazon, Google, Microsoft, Flipkart) pay at the top of the range with significant stock components.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
    { '@type': 'ListItem', position: 2, name: 'Resume Builder', item: 'https://cv-prime.in/resume-builder' },
    { '@type': 'ListItem', position: 3, name: 'Resume Builder Bangalore', item: 'https://cv-prime.in/resume-builder-bangalore' },
  ],
};

export default function ResumeBuilderBangalorePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl">
          <nav className="mb-5 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/resume-builder" className="hover:text-white">Resume Builder</Link>
            <span>/</span>
            <span className="text-slate-300">Bangalore</span>
          </nav>
          <div className="flex items-center gap-2 text-sm font-bold text-brand mb-4">
            <MapPin className="h-4 w-4" />
            <span>Bangalore · India&apos;s Silicon Valley</span>
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            AI resume builder for<br />Bangalore job seekers
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Build an ATS-optimised resume for Bangalore&apos;s tech, startup, and IT sectors. CV Prime&apos;s AI tailors your resume for every JD — from Amazon and Google to CRED and Razorpay.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/signup?next=/ai-cv"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
            >
              Build my Bangalore resume free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/resume-builder/software-engineer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              Software Engineer resume
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">Free plan · 3 PDF exports · No credit card · ATS scoring included</p>
        </div>
      </section>

      {/* Bangalore job market stats */}
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 text-center">
          {[
            { stat: '6,000+', label: 'tech companies headquartered in Bangalore' },
            { stat: '15+', label: 'unicorn startups based in Bangalore' },
            { stat: '₹12L+', label: 'average software engineer salary' },
            { stat: '75%', label: 'of resumes rejected by ATS before a human reads them' },
          ].map((item) => (
            <div key={item.label} className="min-w-[140px]">
              <p className="font-display text-3xl font-bold text-brand">{item.stat}</p>
              <p className="mt-1 max-w-[160px] text-xs leading-5 text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top hiring companies */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Top companies hiring in Bangalore</h2>
          <p className="mt-3 text-slate-500">CV Prime&apos;s AI knows the ATS formats and keyword patterns used by these companies.</p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {bangaloreCompanies.map((c) => (
              <div key={c.name} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
                <p className="font-display text-sm font-bold text-slate-950">{c.name}</p>
                <p className="mt-0.5 text-xs text-slate-500">{c.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-demand roles */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Most in-demand roles in Bangalore — 2026</h2>
          <p className="mt-3 text-slate-500">Build a role-specific resume tailored to Bangalore&apos;s job market in one click.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inDemandRoles.map((r) => (
              <Link
                key={r.slug}
                href={`/resume-builder/${r.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <p className="font-display text-base font-bold text-slate-950 group-hover:text-brand">{r.role}</p>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${r.growth === 'Very High' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                    {r.growth} demand
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-500">{r.salaryRange}</p>
                <p className="mt-3 flex items-center gap-1 text-xs font-semibold text-brand">
                  Build this resume <ArrowRight className="h-3 w-3" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key ATS keywords */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">ATS keywords Bangalore recruiters screen for</h2>
          <p className="mt-3 text-slate-500">Bangalore tech JDs consistently include these keywords. CV Prime checks your resume against them automatically.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {atsKeywords.map((kw) => (
              <span key={kw} className="rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-sm font-semibold text-brand">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Job hubs */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Bangalore job hubs — where your resume lands</h2>
          <p className="mt-3 text-slate-500">Different areas of Bangalore have distinct industry concentrations. Target your resume accordingly.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {jobHubs.map((h) => (
              <div key={h.area} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <div>
                  <p className="font-display text-sm font-bold text-slate-950">{h.area}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{h.known}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CV Prime for Bangalore */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Why Bangalore job seekers use CV Prime</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: TrendingUp, title: 'ATS-optimised for Bangalore tech stacks', body: 'CV Prime knows the tech keywords, frameworks, and tools screened by Bangalore ATS systems — React, Python, AWS, Kubernetes, and 200+ others.' },
              { icon: Briefcase, title: 'Startup + MNC resume modes', body: 'Switch between startup-style (ownership, speed, impact) and MNC-style (scale, process, team size) framing with one AI prompt.' },
              { icon: Users, title: 'Tailored for every Bangalore JD', body: 'Paste any job description from Naukri, LinkedIn, or a company careers page and AI rewrites your resume to match the exact role in minutes.' },
              { icon: CheckCircle2, title: 'Benchmark against Bangalore salary data', body: 'CV Prime includes 2026 salary benchmarks for 30 Bangalore roles so you know if your experience matches the comp expectations of your target company.' },
              { icon: ArrowRight, title: 'Built for Indian formats', body: 'INR pricing (₹999 one-time), India-specific ATS scoring, and templates used by Bangalore professionals — not generic US-style resume formats.' },
              { icon: CheckCircle2, title: 'CGPA and certification handling', body: 'CV Prime understands Indian academic credentials — CGPA, BE/B.Tech, IIT/NIT backgrounds — and knows when to include or omit them based on your experience level.' },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <f.icon className="h-6 w-6 text-brand" />
                <h3 className="mt-3 font-display text-base font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Resume builder Bangalore — FAQ</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-display text-base font-bold">{faq.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-slate-100 px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">Related resources</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/resume-builder', label: 'AI resume builder' },
              { href: '/resume-builder/software-engineer', label: 'Software engineer resume' },
              { href: '/resume-builder/data-scientist', label: 'Data scientist resume' },
              { href: '/resume-builder/product-manager', label: 'Product manager resume' },
              { href: '/resume-builder/devops-engineer', label: 'DevOps engineer resume' },
              { href: '/cv-examples/software-engineer', label: 'Software engineer CV examples' },
              { href: '/salary/software-engineer', label: 'Software engineer salary India' },
              { href: '/ats-checker', label: 'Free ATS checker' },
              { href: '/resume-tips/how-to-write-a-resume', label: 'How to write a resume' },
              { href: '/cv-builder-india', label: 'CV builder for India' },
              { href: '/resume-builder-mumbai', label: 'Resume builder Mumbai' },
              { href: '/resume-builder-hyderabad', label: 'Resume builder Hyderabad' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">Land your next Bangalore role</h2>
          <p className="mt-4 text-slate-300">
            CV Prime&apos;s AI builds ATS-optimised resumes for Bangalore&apos;s tech and startup job market. Free to start — no credit card required.
          </p>
          <Link
            href="/signup?next=/ai-cv"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong"
          >
            Build my resume free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyCTA label="Build my Bangalore resume free" message="AI resume builder for Bangalore tech & startup jobs" />
    </main>
  );
}
