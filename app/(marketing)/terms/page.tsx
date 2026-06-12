import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of service',
  description: 'Terms for using CV Prime, including AI assistance, exports, payments, and user responsibilities.',
};

const sections = [
  {
    title: 'Use of CV Prime',
    body: 'CV Prime helps users create, tailor, score, and export CVs. You are responsible for the accuracy and truthfulness of all information in your CV.',
  },
  {
    title: 'AI output',
    body: 'AI suggestions can improve structure and wording, but they may be incomplete or inaccurate. Review every generated CV, cover letter, and suggestion before using it.',
  },
  {
    title: 'User keys',
    body: 'If you connect an OpenRouter key, you are responsible for the key, provider usage, and provider billing. Use spending limits and revoke keys you no longer need.',
  },
  {
    title: 'Payments',
    body: 'Razorpay is the only payment gateway in this build. Pro features are unlocked after successful payment verification. Current cancellation behavior is test-mode and moves the account back to the free plan.',
  },
  {
    title: 'Fair use',
    body: "Do not abuse rate limits, probe APIs, upload malicious files, or attempt to access another user's workspace or CVs.",
  },
  {
    title: 'No hiring guarantee',
    body: 'CV Prime improves CV readiness, but does not guarantee interviews, offers, salary outcomes, or recruiter responses.',
  },
];

export default function TermsPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-[#f6f9fc] px-5 py-8 text-slate-950">
      <section className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <Link href="/" className="font-display text-lg font-bold">
          CV Prime
        </Link>
        <p className="mt-10 text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">
          Terms
        </p>
        <h1 className="mt-4 font-display text-5xl font-bold tracking-[-0.05em]">
          Terms of service
        </h1>
        <p className="mt-5 text-sm leading-7 text-slate-600">
          Last updated: June 12, 2026. These terms are a product-ready draft and should be reviewed by counsel before public launch.
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
