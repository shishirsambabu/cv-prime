import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'How CV Prime handles account data, CV content, OpenRouter keys, payments, and analytics.',
};

const sections = [
  {
    title: 'What we collect',
    body: 'CV Prime collects account details, CV content you create or upload, job descriptions you paste, billing events from Razorpay, and product analytics only after consent.',
  },
  {
    title: 'AI keys',
    body: 'Saved OpenRouter keys are encrypted before storage. CV Prime never stores plaintext API keys and never exposes server secrets to the browser.',
  },
  {
    title: 'AI processing',
    body: 'When you use AI features, your CV text and job description are sent to OpenRouter using the key connected to your account. Do not upload information you do not want processed for this purpose.',
  },
  {
    title: 'Payments',
    body: 'Razorpay handles checkout and payment processing. CV Prime stores payment status and order identifiers needed to unlock Pro features.',
  },
  {
    title: 'Analytics',
    body: 'Product analytics are optional and consent-based. We do not intentionally capture CV text, job descriptions, API keys, or payment secrets in analytics events.',
  },
  {
    title: 'Your controls',
    body: 'You can delete your OpenRouter key from CV Prime, revoke it in OpenRouter, cancel the test-mode Pro plan in settings, and request data deletion by contacting support.',
  },
];

export default function PrivacyPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-[#f6f9fc] px-5 py-8 text-slate-950">
      <section className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <Link href="/" className="font-display text-lg font-bold">
          CV Prime
        </Link>
        <p className="mt-10 text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">
          Privacy
        </p>
        <h1 className="mt-4 font-display text-5xl font-bold tracking-[-0.05em]">
          Privacy policy
        </h1>
        <p className="mt-5 text-sm leading-7 text-slate-600">
          Last updated: June 12, 2026. This policy is written for the current test-mode product and should be reviewed by counsel before public launch.
        </p>
        <div className="mt-10 grid gap-4">
          {sections.map((section) => (
            <article key={section.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <h2 className="font-display text-xl font-bold">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
