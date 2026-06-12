import { Quote, Star, TrendingUp } from 'lucide-react';
import { CountUp } from '@/components/marketing/CountUp';
import { Reveal } from '@/components/marketing/Reveal';

/**
 * NOTE FOR THE OWNER: the figures and testimonials below are realistic
 * placeholders. Swap them for verified numbers and real member quotes
 * before launch — believable proof only works if it is true.
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
  'Google',
  'Amazon',
  'Microsoft',
  'Flipkart',
  'Razorpay',
  'Swiggy',
  'Zoho',
  'Stripe',
];

const testimonials: Array<{
  quote: string;
  name: string;
  role: string;
  initial: string;
}> = [
  {
    quote:
      'I had been applying for two months with nothing. CV Prime showed me exactly why — vague bullets, no numbers. Three interviews in the next ten days.',
    name: 'Ananya R.',
    role: 'Product Marketing',
    initial: 'A',
  },
  {
    quote:
      'The rewrite tool turned “responsible for backend” into something a hiring manager actually stops on. My readiness score went from 54 to 91.',
    name: 'Karthik V.',
    role: 'Backend Engineer',
    initial: 'K',
  },
  {
    quote:
      'Finally a builder that tells you what’s wrong instead of just giving you a prettier template. Worth every rupee before a senior application.',
    name: 'Priya S.',
    role: 'Engineering Manager',
    initial: 'P',
  },
];

export function SocialProof(): JSX.Element {
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
            The proof is in the outcomes, not the template gallery. Here is what the
            product has done for people in the middle of a real job search.
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
            Members are interviewing at
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

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.name}
              as="article"
              delayMs={index * 90}
              className="flex flex-col rounded-card border border-slate-200 bg-white p-6 shadow-sm"
            >
              <Quote className="h-7 w-7 text-brand/30" />
              <p className="mt-4 flex-1 text-base leading-7 text-slate-700">{item.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-pill bg-brand/10 font-display text-base font-bold text-brand">
                  {item.initial}
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{item.name}</div>
                  <div className="text-xs text-slate-500">{item.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
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
              <span className="text-slate-600">→</span>
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
