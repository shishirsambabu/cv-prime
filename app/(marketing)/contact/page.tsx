import Link from 'next/link';
import { Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact us — CV Prime',
  description: 'Get in touch with CV Prime for support, billing queries, feedback, or partnership enquiries.',
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
    <main className="min-h-screen bg-[#f6f9fc] px-5 py-10 text-slate-950">
      <div className="mx-auto max-w-3xl">
        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-950">
          <span className="flex h-8 w-8 items-center justify-center rounded-inner bg-slate-950 font-display text-xs font-bold text-white">CV</span>
          CV Prime
        </Link>

        {/* Header */}
        <div className="mt-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">Support</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Contact us</h1>
          <p className="mt-3 text-base leading-7 text-slate-600">
            We&apos;re a small team and we read every message. Expect a reply within 1–2 business days.
          </p>
        </div>

        {/* Contact details */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Email</p>
              <a
                href="mailto:mr.shishirbabu@gmail.com"
                className="mt-1 block text-sm font-semibold text-slate-900 underline-offset-2 hover:underline"
              >
                mr.shishirbabu@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Response time</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">1–2 business days</p>
              <p className="mt-0.5 text-xs text-slate-500">Mon – Fri, IST</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Based in</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">Ernakulam, Kerala</p>
              <p className="mt-0.5 text-xs text-slate-500">India</p>
            </div>
          </div>
        </div>

        {/* Topic picker */}
        <div className="mt-10">
          <h2 className="font-display text-xl font-bold">What can we help with?</h2>
          <p className="mt-2 text-sm text-slate-500">Click a topic to open a pre-filled email.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {topics.map((topic) => (
              <a
                key={topic.title}
                href={`mailto:mr.shishirbabu@gmail.com?subject=${encodeURIComponent(topic.subject)}`}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md"
              >
                <span className="text-2xl">{topic.icon}</span>
                <div>
                  <p className="font-display font-bold text-slate-900">{topic.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{topic.detail}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Direct email CTA */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white sm:p-8">
          <div className="flex items-center gap-3">
            <MessageCircle className="h-6 w-6 text-cyan-300" />
            <h2 className="font-display text-xl font-bold">Send us a direct email</h2>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            For anything else — or if you&apos;d prefer to write freely — email us directly. Include
            your registered email address and a description of your issue so we can look it up quickly.
          </p>
          <a
            href="mailto:mr.shishirbabu@gmail.com"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-50"
          >
            <Mail className="h-4 w-4" />
            mr.shishirbabu@gmail.com
          </a>
        </div>

        {/* Legal links */}
        <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-200 pt-6 text-sm font-medium text-slate-500">
          <Link className="hover:text-slate-950" href="/terms">Terms of service</Link>
          <Link className="hover:text-slate-950" href="/privacy">Privacy policy</Link>
          <Link className="hover:text-slate-950" href="/refund">Refund policy</Link>
          <Link className="hover:text-slate-950" href="/cookies">Cookie policy</Link>
          <Link className="hover:text-slate-950" href="/">Home</Link>
        </nav>
      </div>
    </main>
  );
}
