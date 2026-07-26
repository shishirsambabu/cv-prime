import Link from 'next/link';
import { BrandLogo } from '@/components/BrandLogo';
import { Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact us — CV Prime',
  description: 'Get in touch with CV Prime for support, billing queries, feedback, or partnership enquiries.',
  alternates: {
    canonical: 'https://cv-prime.in/contact',
  },
};

const topics = [
  {
    icon: '🐛',
    title: 'Bug or technical issue',
    detail: 'Something broken? Tell us what happened and we\'ll investigate.',
    subject: 'Bug report',
  },
  {
    icon: '💳',
    title: 'Billing or subscription',
    detail: 'Questions about your Pro plan, payment, or refund.',
    subject: 'Billing query',
  },
  {
    icon: '💡',
    title: 'Feature request',
    detail: 'Have an idea that would make CV Prime more useful? We read everything.',
    subject: 'Feature request',
  },
  {
    icon: '🤝',
    title: 'Partnership or press',
    detail: 'Integrations, collaborations, or media enquiries.',
    subject: 'Partnership enquiry',
  },
];

export default function ContactPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-transparent px-5 py-10 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cv-prime.in' },
            { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://cv-prime.in/contact' },
          ],
        }) }}
      />
      <div className="mx-auto max-w-3xl">
        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white">
          <BrandLogo className="h-11" />
        </Link>

        {/* Header */}
        <div className="mt-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Support</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Contact us</h1>
          <p className="mt-3 text-base leading-7 text-slate-300">
            We&apos;re a small team and we read every message. Expect a reply within 1–2 business days.
          </p>
        </div>

        {/* Contact details */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-sm">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Email</p>
              <a
                href="mailto:support@cv-prime.in"
                className="mt-1 block text-sm font-semibold text-white underline-offset-2 hover:underline"
              >
                support@cv-prime.in
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-sm">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Response time</p>
              <p className="mt-1 text-sm font-semibold text-white">1–2 business days</p>
              <p className="mt-0.5 text-xs text-slate-400">Mon – Fri, IST</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-sm">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Based in</p>
              <p className="mt-1 text-sm font-semibold text-white">Ernakulam, Kerala</p>
              <p className="mt-0.5 text-xs text-slate-400">India</p>
            </div>
          </div>
        </div>

        {/* Topic picker */}
        <div className="mt-10">
          <h2 className="font-display text-xl font-bold">What can we help with?</h2>
          <p className="mt-2 text-sm text-slate-400">Click a topic to open a pre-filled email.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {topics.map((topic) => (
              <a
                key={topic.title}
                href={`mailto:support@cv-prime.in?subject=${encodeURIComponent(topic.subject)}`}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md"
              >
                <span className="text-2xl">{topic.icon}</span>
                <div>
                  <p className="font-display font-bold text-white">{topic.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{topic.detail}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Direct email CTA */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-slate-950 p-6 text-white sm:p-8">
          <div className="flex items-center gap-3">
            <MessageCircle className="h-6 w-6 text-cyan-300" />
            <h2 className="font-display text-xl font-bold">Send us a direct email</h2>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            For anything else — or if you&apos;d prefer to write freely — email us directly. Include
            your registered email address and a description of your issue so we can look it up quickly.
          </p>
          <a
            href="mailto:support@cv-prime.in"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-5 py-3 text-sm font-bold text-white transition hover:bg-cyan-500/10"
          >
            <Mail className="h-4 w-4" />
            support@cv-prime.in
          </a>
          <p className="mt-4 text-xs leading-6 text-slate-400">
            Support is the fastest way to get help. If you specifically want to reach the founder,
            you can write to{' '}
            <a
              href="mailto:mr.shishirbabu@gmail.com"
              className="font-semibold text-cyan-200 underline-offset-2 hover:underline"
            >
              mr.shishirbabu@gmail.com
            </a>
            .
          </p>
        </div>

        {/* Legal links */}
        <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-sm font-medium text-slate-400">
          <Link className="hover:text-white" href="/terms">Terms of service</Link>
          <Link className="hover:text-white" href="/privacy">Privacy policy</Link>
          <Link className="hover:text-white" href="/refund">Refund policy</Link>
          <Link className="hover:text-white" href="/cookies">Cookie policy</Link>
          <Link className="hover:text-white" href="/">Home</Link>
        </nav>
      </div>
    </main>
  );
}
