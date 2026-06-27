import type { Metadata } from 'next';
import { AtsKeywordMatcher } from '@/components/tools/AtsKeywordMatcher';

export const metadata: Metadata = {
  title: 'ATS Keyword Matcher — embeddable widget | CV Prime',
  description: 'Embeddable free ATS keyword matcher by CV Prime.',
  alternates: { canonical: 'https://cv-prime.in/tools/ats-keyword-matcher' },
  robots: { index: false, follow: true },
};

export default function EmbedAtsKeywordMatcher(): JSX.Element {
  return (
    <div className="min-h-screen bg-white px-3 py-4 text-slate-950">
      <div className="mx-auto max-w-3xl">
        <AtsKeywordMatcher />
        <p className="mt-4 text-center text-xs text-slate-500">
          Free{' '}
          <a href="https://cv-prime.in/tools/ats-keyword-matcher" target="_blank" rel="noopener" className="font-semibold text-brand hover:underline">
            ATS Keyword Matcher
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
