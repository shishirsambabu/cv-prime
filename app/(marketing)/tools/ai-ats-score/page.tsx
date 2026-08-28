import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { AtsScoreCheckerAI } from '@/components/tools/AtsScoreCheckerAI';

export const metadata: Metadata = {
  title: 'AI ATS Score Checker — Score Your Resume vs a Job (Free) | CV Prime',
  description:
    'Paste your resume and a job description and get an AI ATS match score (0–100), the exact keywords you are missing, and concrete fixes. Runs on your own AI key — free to use.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-ats-score' },
  openGraph: {
    title: 'AI ATS Score Checker — Free, India-Ready',
    description: 'Get an AI ATS match score, missing keywords, and fixes for any job description.',
    url: 'https://cv-prime.in/tools/ai-ats-score',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI ATS Score Checker — CV Prime' }],
  },
};

const faqs = [
  {
    q: 'Is the AI ATS score checker free?',
    a: 'Yes. Create a free CV Prime account and connect your own OpenRouter API key (also free to get) in settings. You only pay OpenRouter\'s tiny token cost per run — usually a few paise.',
  },
  {
    q: 'How is this different from the free keyword matcher?',
    a: 'The free keyword matcher (no login) checks raw keyword overlap only. This AI version reads your resume and the JD with an LLM to score format and section gaps too, then explains the missing keywords and gives concrete fixes rather than just a list.',
  },
  {
    q: 'Is my resume or the job description stored anywhere?',
    a: 'Your text is sent only to your own connected AI model for this one request; CV Prime does not store your resume text or the job description. Your OpenRouter key itself is encrypted at rest and never shown back in the browser.',
  },
  {
    q: 'Why do I need my own AI key instead of CV Prime paying for it?',
    a: 'BYOK (bring your own key) keeps every AI tool on this page free to use, with no subscription and no hidden token markup — you pay OpenRouter directly for the tiny amount of usage each run costs.',
  },
];

export default function AiAtsScorePage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="AI ATS score"
      highlight="checker"
      subtitle="Paste your resume and the job description. The AI scores your ATS match 0–100, shows the exact keywords you're missing, and gives you concrete fixes — calibrated for the systems Indian employers use."
      slug="ai-ats-score"
      appName="CV Prime AI ATS Score Checker"
      appDescription="AI tool that scores a resume against a job description 0-100, lists missing keywords, and gives concrete fixes. Runs on the user's own AI key."
      faqs={faqs}
    >
      <AtsScoreCheckerAI />
    </AiToolLayout>
  );
}
