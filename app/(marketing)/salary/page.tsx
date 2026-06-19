import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { roles } from '@/lib/roleData';

export const metadata: Metadata = {
  title: 'Salary by Job Role India 2026 — Complete Guide | CV Prime',
  description:
    'India salary guide for 35 job roles in 2026. Fresher to leadership pay bands, city-wise breakdowns (Bangalore, Mumbai, Hyderabad), company-type comparisons, and negotiation tips.',
  keywords: [
    'salary guide india 2026',
    'salary by job role india',
    'india salary breakdown by city',
    'fresher salary india 2026',
    'senior engineer salary india',
    'bangalore salary guide',
    'it salary india 2026',
    'what salary to expect india',
  ],
  alternates: { canonical: 'https://cv-prime.in/salary' },
  openGraph: {
    title: 'Salary by Job Role India 2026 — Complete Guide | CV Prime',
    description: 'India salary guide for 35 job roles. Fresher to leadership, city-wise, company-type comparisons.',
    url: 'https://cv-prime.in/salary',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Salary Guide India — CV Prime' }],
  },
};

const industries = Array.from(new Set(roles.map((r) => r.industry))).sort();

export default function SalaryPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-bold text-cyan-300">
            <TrendingUp className="h-4 w-4" />
            India salary guide 2026
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Salary by job role — India 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Research-backed salary ranges for 35 job roles in India. Covers fresher to leadership pay bands, city-wise salary differences, company-type comparisons, and negotiation tactics.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground hover:bg-brand-strong"
            >
              Build my CV free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/cv-examples"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white hover:border-white/40"
            >
              View CV examples
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-slate-100 bg-slate-50 px-5 py-6">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-8 text-center">
          {[
            { stat: '35', label: 'job roles covered' },
            { stat: '7', label: 'major cities: Bangalore, Mumbai, Delhi, Hyderabad, Chennai, Pune, others' },
            { stat: '4', label: 'company types: Startup, Mid-size, MNC, FAANG' },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-display text-2xl font-bold text-slate-950">{item.stat}</p>
              <p className="mt-1 text-sm text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Role grid */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Salary guides by role</h2>
          <p className="mt-3 text-slate-500">
            Select your job role for detailed salary data including experience levels, cities, and company types.
          </p>

          {industries.map((industry) => {
            const industryRoles = roles.filter((r) => r.industry === industry);
            return (
              <div key={industry} className="mt-12">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">{industry}</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {industryRoles.map((role) => (
                    <Link
                      key={role.slug}
                      href={`/salary/${role.slug}`}
                      className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-cyan-300 hover:shadow-sm"
                    >
                      <div>
                        <p className="font-display font-bold text-slate-900 group-hover:text-cyan-700">
                          {role.displayTitle}
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">{role.salaryRange}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 group-hover:text-cyan-500" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Key salary insights */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            India salary landscape — key insights for 2026
          </h2>
          <div className="mt-8 space-y-5">
            {[
              {
                q: 'Bangalore pays 15–25% more than the national average',
                a: 'For technology, product, and engineering roles, Bangalore commands a consistent premium of 15–25% over other metros. This is driven by the concentration of FAANG offices, product unicorns (Swiggy, Zepto, PhonePe, Groww), and deep talent market competition. Hyderabad is a close second for tech roles, particularly for Microsoft, Amazon, and Google engineering centres.',
              },
              {
                q: 'Product company vs IT services: 2–4× salary difference',
                a: 'The most important salary variable in India is product company vs IT services. A software engineer with 3 years of experience earns ₹5L–₹9L at TCS/Infosys vs ₹15L–₹25L at a product startup. This gap exists across almost every technical and analytical role. When optimising your CV for salary, targeting product companies is the single highest-leverage action.',
              },
              {
                q: 'FAANG salaries have normalised post-2023 but remain 3–5× above market',
                a: 'The 2022–23 hiring peak saw inflated offers at FAANG India offices. Post-correction, FAANG India salaries are more stable but still 3–5× above industry average for equivalent experience. Total compensation (base + RSUs + bonus) at Google, Amazon, and Microsoft India ranges from ₹25L–₹1Cr+ depending on level.',
              },
              {
                q: 'Fresher salary gap: campus placement vs open market',
                a: 'Campus hires at top IITs/NITs for product companies earn ₹15L–₹45L. The same role via lateral hiring post-1 year earns ₹6L–₹12L. This gap reflects campus premium and role exclusivity. For professionals without a top-tier campus brand, gaining product company experience early (even at a startup) significantly compresses this gap within 2–3 years.',
              },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-slate-900">{item.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="border-t border-slate-100 bg-slate-50 px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-xl font-bold">Related resources</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { href: '/blog/salary-negotiation-tips-india-2026', title: 'Salary Negotiation Guide', sub: 'How to negotiate a higher offer in India' },
              { href: '/interview-questions', title: 'Interview Questions', sub: 'Model answers for 35 job roles in India' },
              { href: '/cv-examples', title: 'CV Examples', sub: '35 ATS-optimised CV guides by role' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-cyan-300 hover:shadow-sm"
              >
                <p className="font-display font-bold text-slate-900 group-hover:text-cyan-700">{link.title} →</p>
                <p className="mt-1 text-sm text-slate-500">{link.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Know your worth — build a CV that commands it
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Use CV Prime to build an ATS-optimised CV tailored for the salary band you are targeting. Free to start, no credit card required.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Build my CV free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'Salary by Job Role India 2026 — Complete Guide',
              description: 'Research-backed salary ranges for 35 job roles in India. Fresher to leadership, city-wise, company-type comparisons.',
              url: 'https://cv-prime.in/salary',
              publisher: { '@type': 'Organization', name: 'CV Prime', url: 'https://cv-prime.in' },
              breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                  { '@type': 'ListItem', position: 2, name: 'Salary Guide', item: 'https://cv-prime.in/salary' },
                ],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is a good salary in India in 2026?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A good salary depends heavily on city, role, and company type. In Bangalore, ₹12L+ for 2–3 years of experience in technology is considered competitive. In Tier-2 cities, ₹6L–₹10L for the same experience is above average. FAANG and product company salaries (₹20L–₹50L for mid-level) are exceptional benchmarks, not the norm.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Which city pays the highest salaries in India?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Bangalore consistently pays the highest salaries in India for technology, product, and analytics roles — 15–25% above the national average. Hyderabad is a close second for tech roles (home to major Microsoft, Amazon, Google campuses). Mumbai leads for finance and BFSI roles. Delhi/NCR is competitive for MNC corporate functions.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How do I negotiate a higher salary in India?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "The most effective salary negotiation tactics in India: (1) Always negotiate — 80%+ of offers have 10–20% headroom. (2) Use competing offers as leverage honestly. (3) Research market rates on Glassdoor, Levels.fyi, and Blind before negotiating. (4) Negotiate RSUs and joining bonus separately from base. (5) Don't accept immediately — ask for 48 hours to review.",
                  },
                },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
