import Link from 'next/link';
import { StickyCTA } from '@/components/marketing/StickyCTA';
import type { Metadata } from 'next';
import { ArrowRight, MapPin, IndianRupee, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CV Builder India — Free Professional CV Maker for Indian Job Market | CV Prime',
  description:
    'The best CV builder for India. Built for Indian formats, INR pricing, and Indian job portals like Naukri and LinkedIn. Free to start. ATS-optimised for MNCs and startups.',
  alternates: {
    canonical: 'https://cv-prime.in/cv-builder-india',
  },
  keywords: [
    'cv builder india',
    'resume builder india',
    'cv maker india free',
    'indian cv format',
    'naukri resume builder',
    'cv builder for indian jobs',
    'free cv maker india',
    'professional cv india',
    'resume builder for freshers india',
  ],
  openGraph: {
    title: 'CV Builder India — CV Prime',
    description:
      'Free CV builder made for India. Indian formats, INR pricing, ATS-optimised for Naukri, LinkedIn & Indian recruiters.',
    url: 'https://cv-prime.in/cv-builder-india',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CV Builder India — CV Prime' }],
  },
};

const indiaFeatures = [
  {
    icon: MapPin,
    title: 'Built for Indian job seekers',
    body: 'CV Prime understands Indian career patterns — service gaps, multiple degrees, pan-India relocations, and the Indian CV convention of including date of birth and nationality where expected.',
  },
  {
    icon: IndianRupee,
    title: 'India-first pricing',
    body: 'Lifetime Pro at ₹999 one-time — not $15/month converted at ₹1,200. We price for India because we serve India. 3 free downloads to start, no credit card required.',
  },
  {
    icon: Users,
    title: 'Works on Indian job portals',
    body: 'CVs exported from CV Prime are text-selectable and ATS-safe — they parse correctly on Naukri, LinkedIn, Instahyre, Cutshort, and every major Indian job portal.',
  },
];

const industries = [
  'Software Engineering & IT',
  'Banking & Finance (BFSI)',
  'Consulting & Strategy',
  'Sales & Business Development',
  'Marketing & Digital',
  'Operations & Supply Chain',
  'Human Resources',
  'Healthcare & Pharma',
  'Manufacturing & Engineering',
  'Education & EdTech',
];

const faqs = [
  {
    q: 'Is CV Prime built specifically for India?',
    a: 'Yes. CV Prime was built with Indian job seekers in mind — Indian date formats, INR pricing, and understanding of Indian HR conventions. Our ATS optimisation covers Indian companies (TCS, Infosys, Wipro, HCL, Accenture India) and MNCs hiring in India.',
  },
  {
    q: 'Can freshers (0 experience) use CV Prime?',
    a: 'Absolutely. CV Prime works great for freshers — you can highlight your academic projects, internships, certifications, and skills. Our AI helps convert thin experience into compelling bullets even for entry-level applications.',
  },
  {
    q: 'Will my CV work on Naukri and LinkedIn?',
    a: 'Yes. Our PDF exports use standard text encoding that Naukri, LinkedIn, and other Indian portals can parse. We also recommend keeping a separate .docx copy for portals that require it — you can export one from CV Prime.',
  },
  {
    q: 'What is the Indian CV format?',
    a: 'Indian CVs typically include: Name + contact + city, Professional Summary, Work Experience (reverse chronological), Education, Skills, Certifications. Unlike US resumes, Indian CVs can be 2 pages. Some roles still expect Date of Birth and Nationality. CV Prime handles all of this.',
  },
  {
    q: 'Is CV Prime free for Indian users?',
    a: 'Yes — build your CV, preview templates, and download 3 PDFs completely free. No credit card, no trial period. Lifetime Pro is ₹999 one-time and removes the download limit.',
  },
];

const testimonials = [
  { name: 'Rahul M.', city: 'Bengaluru', role: 'Software Engineer', text: 'Got my Infosys interview within a week of updating my CV on CV Prime. The ATS score feature is genuinely useful.' },
  { name: 'Priya K.', city: 'Mumbai', role: 'Marketing Manager', text: 'The AI rewrote my experience bullets so much better than I could. From 3 callbacks in 2 months to 3 in one week.' },
  { name: 'Ankit S.', city: 'Delhi', role: 'Finance Analyst', text: 'Fresher trying to break into BFSI. CV Prime helped me frame my internship and projects like a professional. Got placed at a Big 4.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is CV Prime built specifically for India?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. CV Prime was built with Indian job seekers in mind — Indian date formats, INR pricing, and understanding of Indian HR conventions. Our ATS optimisation covers Indian companies (TCS, Infosys, Wipro, HCL, Accenture India) and MNCs hiring in India.' },
    },
    {
      '@type': 'Question',
      name: 'Can freshers (0 experience) use CV Prime?',
      acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. CV Prime works great for freshers — you can highlight your academic projects, internships, certifications, and skills. Our AI helps convert thin experience into compelling bullets even for entry-level applications.' },
    },
    {
      '@type': 'Question',
      name: 'Will my CV work on Naukri and LinkedIn?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our PDF exports use standard text encoding that Naukri, LinkedIn, and other Indian portals can parse. We also recommend keeping a separate .docx copy for portals that require it — you can export one from CV Prime.' },
    },
    {
      '@type': 'Question',
      name: 'What is the Indian CV format?',
      acceptedAnswer: { '@type': 'Answer', text: 'Indian CVs typically include: Name + contact + city, Professional Summary, Work Experience (reverse chronological), Education, Skills, Certifications. Unlike US resumes, Indian CVs can be 2 pages. Some roles still expect Date of Birth and Nationality. CV Prime handles all of this.' },
    },
    {
      '@type': 'Question',
      name: 'Is CV Prime free for Indian users?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — build your CV, preview templates, and download 3 PDFs completely free. No credit card, no trial period. Lifetime Pro is ₹999 one-time and removes the download limit.' },
    },
  ],
};

export default function CVBuilderIndiaPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-green-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5 text-sm font-bold text-orange-300">
            <MapPin className="h-4 w-4" />
            Made for India
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            India&apos;s free CV builder — built for Indian jobs, Indian formats, Indian prices
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            CV Prime is the only CV builder designed from the ground up for Indian job seekers. ATS-optimised for Naukri, LinkedIn, and Indian MNCs. Lifetime Pro at ₹999 one-time — not ₹1,500/month.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-orange-400 px-8 py-3.5 text-base font-bold text-slate-950 transition hover:bg-orange-300"
            >
              Build my CV free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40"
            >
              See India pricing
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">3 free PDF downloads · No credit card · ₹999 one-time Lifetime Pro</p>
        </div>
      </section>

      {/* India Features */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
            Why Indian job seekers choose CV Prime
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {indiaFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-[1.5rem] border border-slate-100 p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-orange-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{f.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-bold">
            Works for every Indian industry
          </h2>
          <p className="mt-4 text-slate-500">
            From IT and BFSI to manufacturing and EdTech — CV Prime templates and AI are tailored for all major Indian sectors.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
              >
                {ind}
              </span>
            ))}
          </div>
          <Link href="/signup" className="mt-10 inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3 text-sm font-bold text-white hover:bg-slate-800">
            Get started free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold">
            What Indian job seekers say
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <p className="text-sm leading-7 text-slate-600">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4 border-t border-slate-100 pt-4">
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role} · {t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City-specific links */}
      <section className="border-t border-slate-100 px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Resume builders by city</h2>
          <p className="mt-3 text-slate-500">Get a resume tailored to your city&apos;s job market, top employers, and in-demand roles.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { city: 'Bangalore', desc: 'Tech, startups, unicorns — Amazon, Flipkart, CRED', href: '/resume-builder-bangalore' },
              { city: 'Mumbai', desc: 'Finance, FMCG, media — HDFC, Goldman Sachs, HUL', href: '/resume-builder-mumbai' },
              { city: 'Delhi NCR', desc: 'IT, consulting, FMCG — HCL, EY, Airtel, OYO', href: '/resume-builder-delhi' },
              { city: 'Hyderabad', desc: 'IT, pharma, analytics — Microsoft, Dr. Reddy\'s', href: '/resume-builder-hyderabad' },
              { city: 'Chennai', desc: 'IT services, automotive — Zoho, Cognizant, Hyundai', href: '/resume-builder-chennai' },
              { city: 'Pune', desc: 'IT, banking, manufacturing — Infosys, HSBC, Bajaj', href: '/resume-builder-pune' },
            ].map((c) => (
              <Link
                key={c.city}
                href={c.href}
                className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-orange-400 hover:shadow-sm"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                <div>
                  <p className="font-display text-sm font-bold text-slate-950 group-hover:text-orange-600">{c.city}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold">
            India CV builder — common questions
          </h2>
          <div className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-display text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            India&apos;s smartest CV builder — free to start
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Trusted by job seekers across Bengaluru, Mumbai, Delhi, Hyderabad, and Pune. Build yours in 15 minutes.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-bold text-brand-foreground hover:bg-brand-strong"
          >
            Start building free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'CV Builder India — CV Prime',
            description: 'Free CV builder for Indian job seekers. Indian formats, INR pricing, ATS-optimised for Naukri and LinkedIn.',
            url: 'https://cv-prime.in/cv-builder-india',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
                { '@type': 'ListItem', position: 2, name: 'CV Builder India', item: 'https://cv-prime.in/cv-builder-india' },
              ],
            },
          }),
        }}
      />
      <StickyCTA />
    </main>
  );
}
