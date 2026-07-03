import type { Metadata } from 'next';
import { ResumeStrengthAnalyzer } from '@/components/tools/ResumeStrengthAnalyzer';

export const metadata: Metadata = {
  title: 'Resume Strength Analyzer — embeddable widget | CV Prime',
  description: 'Embeddable free resume strength analyzer by CV Prime.',
  alternates: { canonical: 'https://cv-prime.in/tools/resume-strength-analyzer' },
  robots: { index: false, follow: true },
};

export default function EmbedResumeStrengthAnalyzer(): JSX.Element {
  return (
    <div className="min-h-screen bg-white px-3 py-4 text-slate-950">
      <div className="mx-auto max-w-3xl">
        <ResumeStrengthAnalyzer />
        <p className="mt-4 text-center text-xs text-slate-500">
          Free{' '}
          <a href="https://cv-prime.in/tools/resume-strength-analyzer" target="_blank" rel="noopener" className="font-semibold text-brand hover:underline">
            Resume Strength Analyzer
          </a>{' '}
          by{' '}
          <a href="https://cv-prime.in" target="_blank" rel="noopener" className="font-semibold text-brand hover:underline">
            CV Prime
          </a>{' '}
          — AI resume builder &amp; ATS checker for India.
        </p>
      </div>
    </div>
  );
}
