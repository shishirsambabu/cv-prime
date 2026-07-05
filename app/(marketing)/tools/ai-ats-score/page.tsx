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
    q: 'How is the AI ATS score different from the free keyword matcher?',
    a: 'The free keyword matcher only checks term overlap and runs instantly with no account. This AI ATS score checker uses your own AI key to also judge format, section structure, and phrasing quality, then explains each gap in plain language with a fix — a deeper, more accurate read of how you would actually score.',
  },
  {
    q: 'Do I need my own AI key to use this?',
    a: 'Yes. CV Prime is BYOK (bring your own key): you connect a free or low-cost OpenRouter key in your account, and each run costs a few paise. This keeps the tool honest and unmetered by us — no hidden per-scan fees.',
  },
  {
    q: 'What counts as a good ATS score?',
    a: 'Aim for 80+ before you apply to a role you care about. Below 65 usually means missing keywords or a structural issue an ATS cannot parse. The checker lists exactly which keywords are missing and which sections need fixing.',
  },
  {
    q: 'Will this fix my resume for me?',
    a: 'It scores and explains the gaps rather than silently editing your file. For automatic rewrites, use CV Prime\'s full AI CV workflow, which tailors bullets to the job description and lets you export a clean PDF afterward.',
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
      faqs={faqs}
    >
      <AtsScoreCheckerAI />
    </AiToolLayout>
  );
}
