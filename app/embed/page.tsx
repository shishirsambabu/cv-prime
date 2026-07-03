import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Code2, Gift, RefreshCw, ShieldCheck } from 'lucide-react';
import { EmbedCodeBox } from '@/components/tools/EmbedCodeBox';

export const metadata: Metadata = {
  title: 'Embed a Free ATS Checker Widget on Your Site | CV Prime',
  description:
    'Add CV Prime\'s free ATS keyword matcher or resume strength analyzer to your website, blog, or college placement page in one line of HTML. Free forever, no login for your visitors, always up to date.',
  alternates: { canonical: 'https://cv-prime.in/embed' },
  keywords: [
    'embed ats checker',
    'ats checker widget',
    'free resume tool for website',
    'embeddable resume checker',
    'resume widget for blog',
    'ats keyword tool embed',
    'free career tool widget',
    'add resume checker to website',
  ],
  openGraph: {
    title: 'Embed a Free ATS Checker Widget on Your Site | CV Prime',
    description:
      'Add CV Prime\'s free ATS keyword matcher or resume strength analyzer to any site in one line of HTML. Free, no login for visitors.',
    url: 'https://cv-prime.in/embed',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Embed CV Prime free tools' }],
  },
};

const benefits = [
  { icon: Gift, title: 'Free for your visitors', body: 'No login, no paywall, no credit card. Your readers get instant value, and your page becomes more useful.' },
  { icon: RefreshCw, title: 'Always up to date', body: 'The widget is hosted by CV Prime — improvements and fixes appear automatically with no work from you.' },
  { icon: ShieldCheck, title: 'Private and lightweight', body: 'Everything runs in the visitor\'s browser. Nothing they type is uploaded or stored, and it loads lazily.' },
  { icon: Code2, title: 'One line of HTML', body: 'Paste a single iframe snippet into any site — WordPress, Webflow, Notion, Ghost, or hand-coded HTML.' },
];

const useCases = [
  'Career and job-search blogs adding an interactive ATS checker to articles',
  'College and university placement cells helping students self-check resumes',
  'Coding bootcamps and training institutes embedding a resume tool for cohorts',
  'HR / recruiting newsletters and resource pages offering a free reader tool',
];

const faqs = [
  {
    q: 'Is the embeddable widget free to use on my website?',
    a: 'Yes, completely free with no catch. You can embed CV Prime\'s ATS keyword matcher or resume strength analyzer on any website, blog, or placement page at no cost. The only requirement is keeping the short attribution link, which also helps your visitors find the full tool.',
  },
  {
    q: 'Do my visitors need to sign up to use the embedded tool?',
    a: 'No. The embedded tools run entirely in the visitor\'s browser with no login, no account, and no credit card. Nothing they paste is uploaded or stored. They get an instant result, which makes your page more useful and engaging.',
  },
  {
    q: 'How do I add the widget to my site?',
    a: 'Pick a widget above, click "Copy code", and paste the snippet into your site wherever you want it to appear — a WordPress custom-HTML block, a Webflow embed element, a Notion embed, or directly in your HTML. It is a standard iframe plus a small attribution line, so it works almost everywhere.',
  },
  {
    q: 'Will the widget slow down my page?',
    a: 'No. The iframe loads lazily (only when scrolled into view) and the tools are lightweight, browser-only utilities with no heavy assets. They will not meaningfully affect your page speed or Core Web Vitals.',
  },
  {
    q: 'Can I customise the widget size?',
    a: 'Yes. The snippet uses width 100% with a sensible max width and a default height; you can adjust the height and max-width in the iframe style to fit your layout. The tool itself is responsive and adapts to the width you give it.',
  },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
const appSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'CV Prime Embeddable Resume Tools', url: 'https://cv-prime.in/embed', applicationCategory: 'BusinessApplication', operatingSystem: 'Web', description: 'Free embeddable ATS keyword matcher and resume strength analyzer widgets for any website. No login for visitors.', offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' } };
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
  { '@type': 'ListItem', position: 2, name: 'Embed', item: 'https://cv-prime.in/embed' },
] };

export default function EmbedLandingPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand">
            <Code2 className="h-4 w-4" /> Free embeddable widgets
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Add a free ATS checker to your website
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Give your readers an instant, no-login resume tool. Paste one line of HTML to embed CV Prime&apos;s ATS keyword matcher or resume strength analyzer — free forever, always up to date.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="#get-code" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
              Get the embed code <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/tools" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-bold text-white transition hover:border-white/40">
              See the tools
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand"><Icon className="h-5 w-5" /></div>
                  <h2 className="mt-4 font-display text-base font-bold text-slate-950">{b.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{b.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Code box */}
      <section id="get-code" className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">Grab your embed code</h2>
          <p className="mt-3 text-center text-slate-500">Pick a widget, copy the snippet, paste it on your site. That&apos;s it.</p>
          <div className="mt-8"><EmbedCodeBox /></div>
        </div>
      </section>

      {/* Use cases */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">Who embeds these tools</h2>
          <div className="mt-8 space-y-3">
            {useCases.map((u) => (
              <div key={u} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <p className="text-sm leading-6 text-slate-700">{u}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">Embed widget — FAQ</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-slate-950">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">Want the full toolkit?</h2>
          <p className="mt-4 text-slate-300">CV Prime is a free AI resume builder and ATS checker for India. Build, tailor, and score your resume — free to start.</p>
          <Link href="/signup?next=/ai-cv" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-brand-foreground transition hover:bg-brand-strong">
            Try CV Prime free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
