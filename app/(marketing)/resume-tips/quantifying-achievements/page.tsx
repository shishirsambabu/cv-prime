import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { RelatedResumeTips } from '@/components/marketing/RelatedResumeTips';
import { StickyCTA } from '@/components/marketing/StickyCTA';

export const metadata: Metadata = {
  title: 'Quantifying Achievements on a Resume — Formula + Examples 2026 | CV Prime',
  description:
    'How to add numbers and metrics to your resume. The exact formula for quantifying every achievement, plus 30+ examples across tech, finance, marketing, sales, and HR roles.',
  alternates: { canonical: 'https://cv-prime.in/resume-tips/quantifying-achievements' },
  keywords: [
    'quantifying achievements on resume',
    'how to quantify achievements on resume',
    'adding numbers to resume',
    'resume achievements examples',
    'quantify resume bullets',
    'metrics on resume',
    'numbers on resume',
    'achievements resume examples india',
    'how to write achievements on cv',
    'resume impact statements',
  ],
  openGraph: {
    title: 'Quantifying Resume Achievements — Formula + 30 Examples | CV Prime',
    description: 'Add real numbers to every resume bullet. The formula, what to do when you don\'t have exact data, and 30+ examples across roles.',
    url: 'https://cv-prime.in/resume-tips/quantifying-achievements',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Quantifying Resume Achievements — CV Prime' }],
  },
};

const metricTypes = [
  { type: 'Revenue / business impact', examples: ['Generated ₹4.2Cr in new ARR', 'Contributed ₹12Cr to pipeline', 'Grew revenue by 34% YoY', 'Increased LTV by ₹1,800 per user'], color: 'border-emerald-400/20 bg-emerald-500/10 text-emerald-200' },
  { type: 'Cost reduction / savings', examples: ['Reduced infrastructure costs by ₹18L/year', 'Cut reporting time from 8 days to 2 days', 'Saved 200 analyst-hours/month through automation', 'Reduced cost-per-hire by 18%'], color: 'border-rose-400/20 bg-rose-500/10 text-rose-200' },
  { type: 'Performance / speed', examples: ['Reduced API latency from 1.2s to 180ms', 'Improved page load by 2.3 seconds', 'Cut deployment time from 45 min to 8 min', 'Reduced time-to-hire from 45 to 22 days'], color: 'border-cyan-400/30 bg-cyan-500/10 text-cyan-200' },
  { type: 'Growth / scale', examples: ['Grew organic traffic 4x in 12 months', 'Scaled from 10k to 200k MAU', 'Increased email open rate from 18% to 31%', 'Grew LinkedIn followers from 2k to 18k'], color: 'border-violet-400/20 bg-violet-500/10 text-violet-800' },
  { type: 'Quality / accuracy', examples: ['Achieved 99.97% uptime for 18 months', 'Reduced defect rate from 8% to 1.2%', 'Zero P1 incidents post-launch', 'Improved NPS from 42 to 68'], color: 'border-amber-400/20 bg-amber-500/10 text-amber-200' },
  { type: 'Volume / scale', examples: ['Managed a portfolio of ₹50Cr AUM', 'Recruited 120+ hires across 3 BUs', 'Processed 2M+ transactions/day', 'Served 80,000+ SMB merchants'], color: 'border-white/10 bg-white/[0.03] text-slate-200' },
];

const noNumberFixes = [
  {
    situation: 'You improved something but don\'t have the exact %',
    solution: 'Use an estimate with a qualifier: "~30% faster", "approximately ₹5L in savings", "estimated 200+ users impacted"',
    example: '"Streamlined onboarding process, reducing average setup time by approximately 40%"',
  },
  {
    situation: 'You built something but never measured impact',
    solution: 'Quantify the scale or adoption: how many users, how many teams, how often it runs, what data it processes',
    example: '"Built internal reporting tool used daily by 35 analysts across Finance and Ops"',
  },
  {
    situation: 'You led a team but don\'t know the exact outcome',
    solution: 'Quantify the team size, timeline, and scope instead',
    example: '"Led a team of 6 engineers to deliver a payment module 3 weeks ahead of schedule, under a ₹15L budget"',
  },
  {
    situation: 'You\'re in HR or operations and metrics are hard to find',
    solution: 'Use process metrics: time saved, volume handled, compliance rate, or NPS',
    example: '"Reduced average time-to-hire from 35 to 18 days; maintained 94% offer acceptance rate across 80 hires"',
  },
  {
    situation: 'You\'re a fresher with no work experience',
    solution: 'Quantify project scope, dataset size, accuracy rates, or user testing feedback',
    example: '"Built ML model on 500k-row dataset achieving 87% prediction accuracy; presented to panel of 8 professors"',
  },
];

const examples30 = [
  { role: 'Software Engineer', before: 'Worked on backend API development', after: 'Developed RESTful APIs serving 5M+ daily requests at 99.9% uptime; reduced p95 latency by 45% through query optimisation.' },
  { role: 'Product Manager', before: 'Improved user retention', after: 'Shipped 4 retention experiments that increased Month-3 retention from 28% to 41%, adding ₹2.8Cr in predictable annual recurring revenue.' },
  { role: 'Data Analyst', before: 'Analysed customer data', after: 'Modelled customer churn on 3M-row dataset; identified 12,000 at-risk accounts, enabling targeted campaign with 19% re-engagement rate.' },
  { role: 'Marketing Manager', before: 'Managed ad campaigns', after: 'Managed ₹1.2Cr/month paid media budget across Google and Meta; achieved 3.4x blended ROAS while scaling spend 150% YoY.' },
  { role: 'Sales Executive', before: 'Hit sales targets', after: 'Closed ₹3.6Cr in new ARR in FY24, exceeding quota by 128%; largest deal was ₹54L with a top-5 FMCG client.' },
  { role: 'HR Manager', before: 'Handled recruitment', after: 'Led hiring for 90+ roles in H1 FY25 with 19-day average TTH and 91% offer acceptance rate, at ₹38k average cost-per-hire.' },
  { role: 'Finance Analyst', before: 'Prepared financial reports', after: 'Built automated P&L reporting model reducing close cycle from 10 to 3 days; saved ₹12L in external consultant fees annually.' },
  { role: 'DevOps Engineer', before: 'Maintained CI/CD pipelines', after: 'Migrated 40+ microservices to Kubernetes; reduced deployment frequency from weekly to daily with 60% fewer production incidents.' },
  { role: 'Business Analyst', before: 'Gathered requirements', after: 'Elicited and documented 180+ requirements for ₹80Cr ERP migration; resolved 35 cross-functional conflicts, delivering on schedule.' },
  { role: 'UX Designer', before: 'Redesigned app screens', after: 'Redesigned checkout flow based on 120 user interviews; reduced drop-off from 64% to 38%, increasing conversions by 68%.' },
];

const faqs = [
  {
    q: 'Why do you need numbers on a resume?',
    a: 'Numbers do three things: (1) They make your achievements concrete and verifiable rather than vague claims. "Improved performance" means nothing; "reduced load time by 2.3 seconds" is specific. (2) They differentiate you — most candidates don\'t quantify, so those who do immediately stand out. (3) They improve ATS scoring — quantified bullets contain more keyword-adjacent terms that ATS parsers weight positively.',
  },
  {
    q: 'What if I don\'t know the exact number?',
    a: 'Use an estimate. "~30%" or "approximately 200 users" or "₹5L+" is always better than no number at all. If you worked on a project and results were never formally measured, quantify scope instead: team size, dataset size, budget managed, or how many people use the output.',
  },
  {
    q: 'Can I use numbers I am not 100% sure of?',
    a: 'Yes, with a qualifier. "Contributed to a campaign that generated approximately ₹2Cr in pipeline" is honest. "Generated ₹2Cr in pipeline" when you were one of ten people in a team is a common over-claim. Be truthful about your specific contribution vs the team outcome.',
  },
  {
    q: 'Do all resume bullets need a number?',
    a: 'Aim for 70–80% of bullets to have a metric. Some achievements — like "introduced the first code review process in the team" or "promoted after 8 months" — are impactful without needing a number. But if you can add a number and are not, that is a missed opportunity.',
  },
  {
    q: 'What numbers are most impressive to Indian recruiters?',
    a: 'Business impact first: revenue generated, cost saved, growth achieved. Technical scale second: users served, transactions processed, uptime maintained. Speed third: time-to-hire reduced, cycle time cut, deployment frequency increased. For freshers, accuracy rates, dataset size, and project scope are appropriate alternatives.',
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
    { '@type': 'ListItem', position: 3, name: 'Quantifying Achievements', item: 'https://cv-prime.in/resume-tips/quantifying-achievements' },
  ],
};

export default function QuantifyingAchievementsPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white/[0.04] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/resume-tips" className="hover:text-white">Resume Tips</Link><span>/</span>
            <span className="text-white">Quantifying Achievements</span>
          </nav>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            How to quantify achievements on your resume — with 30+ examples
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Numbers are the fastest way to stand out on a resume. Learn the exact formula for adding metrics to every bullet — including what to do when you don&apos;t have exact data — with examples across 10 roles.
          </p>
          <Link href="/signup?next=/ai-cv" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand-strong transition">
            Add metrics to my resume with AI <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 6 types of metrics */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">6 types of metrics to use on your resume</h2>
          <p className="mt-3 text-slate-400">Every role has data — you just need to know where to look</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metricTypes.map((type) => (
              <div key={type.type} className={`rounded-2xl border p-5 ${type.color}`}>
                <p className="font-display font-bold">{type.type}</p>
                <ul className="mt-3 space-y-1.5">
                  {type.examples.map((ex) => (
                    <li key={ex} className="text-sm italic">&quot;{ex}&quot;</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No number fixes */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">What to do when you don&apos;t have exact numbers</h2>
          <div className="mt-8 space-y-5">
            {noNumberFixes.map((item) => (
              <div key={item.situation} className="rounded-2xl bg-white/[0.04] p-6 shadow-sm">
                <p className="font-semibold text-white">Situation: {item.situation}</p>
                <p className="mt-2 text-sm text-slate-300"><span className="font-semibold">Fix:</span> {item.solution}</p>
                <div className="mt-3 rounded-xl bg-white/[0.03] p-3">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Example</p>
                  <p className="mt-1 text-sm italic text-slate-300">{item.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30 examples */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">30 before & after examples across 10 roles</h2>
          <p className="mt-3 text-slate-400">3 examples from each role — showing how to add metrics to every type of achievement</p>
          <div className="mt-8 space-y-4">
            {examples30.map((item) => (
              <div key={item.before} className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-brand mb-3">{item.role}</p>
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="rounded-xl border border-red-200 bg-red-50 p-3">
                    <p className="text-xs font-bold text-red-600 mb-1">❌ Without metrics</p>
                    <p className="text-sm text-red-800">{item.before}</p>
                  </div>
                  <div className="rounded-xl border border-green-200 bg-green-50 p-3">
                    <p className="text-xs font-bold text-green-700 mb-1">✅ With metrics</p>
                    <p className="text-sm font-medium text-green-900">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/[0.03] px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Quantifying achievements — FAQ</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white/[0.04] p-5 shadow-sm">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-12">
        <div className="mx-auto max-w-5xl flex flex-wrap gap-3">
          {[
            { href: '/resume-tips', label: '← All resume tips' },
            { href: '/resume-tips/resume-bullet-points', label: 'Bullet writing guide' },
            { href: '/resume-tips/action-verbs', label: 'Action verbs list' },
            { href: '/resume-tips/work-experience', label: 'Work experience guide' },
            { href: '/resume-builder', label: 'AI resume builder' },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 hover:border-brand hover:text-brand transition">{l.label}</Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">AI adds outcomes and metrics to your bullets — free</h2>
          <p className="mt-4 text-slate-300">CV Prime&apos;s AI rewrites vague bullets into quantified achievement statements. Paste your resume and JD — done in 2 minutes.</p>
          <Link href="/signup?next=/ai-cv" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground hover:bg-brand-strong transition">
            Add metrics to my resume free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <RelatedResumeTips
        items={[
          { href: '/resume-tips/resume-bullet-points', label: 'Resume Bullet Points', desc: 'The formula for outcome-driven bullets' },
          { href: '/resume-tips/action-verbs', label: 'Resume Action Verbs', desc: '150+ strong verbs by category' },
          { href: '/resume-tips/work-experience', label: 'Work Experience Guide', desc: 'Structure your whole experience section' },
          { href: '/resume-tips/resume-summary', label: 'Resume Summary Guide', desc: 'Lead with your strongest quantified win' },
        ]}
      />
      <StickyCTA label="Add metrics to my resume" message="AI adds quantified outcomes to every weak bullet — free" />
    </main>
  );
}
