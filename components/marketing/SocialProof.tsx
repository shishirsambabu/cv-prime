'use client';

import { Quote, Star, TrendingUp } from 'lucide-react';
import { CountUp } from '@/components/marketing/CountUp';
import { Reveal } from '@/components/marketing/Reveal';

/**
 * NOTE FOR THE OWNER: figures and testimonials are realistic placeholders.
 * Swap them for verified numbers and real member quotes before launch.
 */

const stats: Array<{
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  detail: string;
}> = [
  { value: 1000, suffix: '+', label: 'CVs built', detail: 'and counting' },
  { value: 12400, suffix: '+', label: 'Bullets rewritten', detail: 'into outcomes' },
  { value: 24, prefix: '+', label: 'Avg readiness lift', detail: 'points before export' },
  { value: 4.8, decimals: 1, suffix: '/5', label: 'Member rating', detail: 'across reviews' },
];

const targetCompanies = [
  'Google', 'Amazon', 'Microsoft', 'Flipkart', 'Groww',
  'Swiggy', 'Zoho', 'Stripe', 'Infosys', 'Wipro', 'HCL', 'Meesho',
];

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initial: string;
  color: string; // tailwind bg class for the avatar
}

const testimonials: Testimonial[] = [
  {
    quote: 'I had been applying for two months with nothing. CV Prime showed me exactly why - vague bullets, no numbers. Three interviews in the next ten days.',
    name: 'Ananya R.',
    role: 'Product Marketing',
    initial: 'A',
    color: 'bg-cyan-100 text-cyan-700',
  },
  {
    quote: 'The rewrite tool turned "responsible for backend" into something a hiring manager actually stops on. My readiness score went from 54 to 91.',
    name: 'Karthik V.',
    role: 'Backend Engineer',
    initial: 'K',
    color: 'bg-violet-100 text-violet-700',
  },
  {
    quote: 'Finally a builder that tells you what\'s wrong instead of just giving you a prettier template. Worth every rupee before a senior application.',
    name: 'Priya S.',
    role: 'Engineering Manager',
    initial: 'P',
    color: 'bg-rose-100 text-rose-700',
  },
  {
    quote: 'Pasted the JD, uploaded my old CV, and the AI created a version that read like it was written by a senior recruiter. I finally knew what to fix before applying.',
    name: 'Rahul M.',
    role: 'Software Engineer',
    initial: 'R',
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    quote: 'I was skeptical about AI CVs but the ATS score went from 61 to 88 after the fix. The keywords it added were exactly what was in the JD.',
    name: 'Sneha T.',
    role: 'Data Analyst',
    initial: 'S',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    quote: 'The before and after comparison in the editor blew my mind. I could see exactly which bullets were rewritten - every single one was an upgrade.',
    name: 'Aditya N.',
    role: 'Product Manager',
    initial: 'A',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    quote: 'I had three different CVs for three different roles. CV Prime let me tailor each one in under 10 minutes. Landed two final rounds the same week.',
    name: 'Divya K.',
    role: 'Business Analyst',
    initial: 'D',
    color: 'bg-pink-100 text-pink-700',
  },
  {
    quote: 'The job tracker alone is worth it. I used to lose track of where I applied - now everything is in one place with status updates.',
    name: 'Vijay P.',
    role: 'Operations Manager',
    initial: 'V',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    quote: 'My recruiter actually commented that my CV was "very well structured." I gave full credit to CV Prime - it caught gaps I couldn\'t see myself.',
    name: 'Meera L.',
    role: 'HR Business Partner',
    initial: 'M',
    color: 'bg-orange-100 text-orange-700',
  },
  {
    quote: 'Went from no callbacks to 4 in two weeks after rebuilding with the Modern template and running the ATS check. The keyword gap analysis is gold.',
    name: 'Arjun S.',
    role: 'Cloud Architect',
    initial: 'A',
    color: 'bg-indigo-100 text-indigo-700',
  },
];

function TestimonialCard({ item }: { item: Testimonial }): JSX.Element {
  return (
    <article className="flex w-[340px] shrink-0 flex-col rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
      <Quote className="h-6 w-6 text-slate-300" />
      <p className="mt-3 flex-1 text-[15px] leading-7 text-slate-700">{item.quote}</p>
      <div className="mt-5 flex items-center gap-3">
        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold ${item.color}`}>
          {item.initial}
        </span>
        <div>
          <div className="text-sm font-semibold text-slate-900">{item.name}</div>
          <div className="text-xs text-slate-500">{item.role}</div>
        </div>
        <div className="ml-auto flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>
    </article>
  );
}

// Infinite marquee duplicates the list so it loops seamlessly.
function Marquee({ items, reverse = false }: { items: Testimonial[]; reverse?: boolean }): JSX.Element {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex gap-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ width: 'max-content' }}
      >
        {doubled.map((item, i) => (
          <TestimonialCard key={`${item.name}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export function SocialProof(): JSX.Element {
  const firstRow = testimonials.slice(0, 5);
  const secondRow = testimonials.slice(5);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
            Trusted by job seekers
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl">
            Over 1,000 CVs rebuilt into interview-ready applications.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            The proof is in the outcomes, not the template gallery. Here is what the product has done for people in the middle of a real job search.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              as="article"
              delayMs={index * 70}
              className="rounded-card border border-slate-200 bg-slate-50/60 p-6 text-center"
            >
              <div className="font-display text-4xl font-bold tracking-[-0.03em] text-slate-950 sm:text-5xl">
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                />
              </div>
              <div className="mt-3 text-sm font-semibold text-slate-800">{stat.label}</div>
              <div className="mt-1 text-xs text-slate-500">{stat.detail}</div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Built for applicants targeting
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {targetCompanies.map((company) => (
              <span
                key={company}
                className="font-display text-xl font-semibold text-slate-400 transition hover:text-slate-700"
              >
                {company}
              </span>
            ))}
          </div>
        </Reveal>

        {/* ── Infinite-scroll testimonial rows ── */}
        <div className="mt-16 space-y-4">
          <Marquee items={firstRow} />
          <Marquee items={secondRow} reverse />
        </div>

        <Reveal className="mt-12 overflow-hidden rounded-panel border border-slate-200 bg-slate-950 p-6 text-white sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-card bg-emerald-400/15 text-emerald-300">
                <TrendingUp className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-medium text-slate-300">
                  Average member readiness, before vs after
                </p>
                <p className="mt-1 font-display text-2xl font-bold tracking-[-0.02em]">
                  Most CVs move out of the rejection zone in one session.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 font-display text-4xl font-bold tabular-nums">
              <span className="text-rose-300">
                <CountUp value={58} />
              </span>
              <span className="text-slate-600">-&gt;</span>
              <span className="text-emerald-300">
                <CountUp value={86} />
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
