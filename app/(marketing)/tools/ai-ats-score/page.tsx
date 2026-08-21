import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { AiToolSchema } from '@/components/tools/ai/AiToolSchema';
import { AiToolFaq } from '@/components/tools/ai/AiToolFaq';
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
    q: 'What does the AI ATS score checker do?',
    a: 'It compares your resume against a specific job description and returns a 0–100 ATS match score, the exact keywords you are missing, and concrete fixes — tuned for the applicant tracking systems Indian employers commonly use.',
  },
  {
    q: 'Is the AI ATS score checker really free?',
    a: 'There is no CV Prime subscription cost to use it. You do need a free CV Prime account and your own OpenRouter API key (BYOK), which typically costs a few paise per check, and you can delete the key from your account after use.',
  },
  {
    q: 'How is this different from the free keyword matcher?',
    a: 'The no-login ATS keyword matcher checks keyword overlap only. This AI version understands context rather than just string matching, and explains why each fix matters instead of only listing which words are missing.',
  },
];

export default function AiAtsScorePage(): JSX.Element {
  return (
    <>
      <AiToolSchema
        name="CV Prime AI ATS Score Checker"
        path="/tools/ai-ats-score"
        description="AI tool that scores your resume against a job description (0-100), lists missing keywords, and gives concrete fixes. Runs on your own AI key."
        breadcrumbLabel="AI ATS Score Checker"
        faqs={faqs}
      />
      <AiToolLayout
        eyebrow="AI tool · your key"
        title="AI ATS score"
        highlight="checker"
        subtitle="Paste your resume and the job description. The AI scores your ATS match 0–100, shows the exact keywords you're missing, and gives you concrete fixes — calibrated for the systems Indian employers use."
      >
        <AtsScoreCheckerAI />
        <AiToolFaq heading="AI ATS score checker — FAQ" faqs={faqs} />
      </AiToolLayout>
    </>
  );
}
