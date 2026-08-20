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
    q: 'What is the AI ATS score checker?',
    a: 'It is a free tool that reads your resume against a specific job description and returns an AI-generated ATS match score from 0 to 100, the exact keywords you are missing, and concrete fixes — not just a keyword count, but an assessment of format, phrasing, and relevance the way a real applicant tracking system and recruiter would weigh them.',
  },
  {
    q: 'Why does an ATS score matter?',
    a: 'Most mid-size and large employers, including the majority of Indian MNCs and IT services firms, screen resumes with an ATS before a human ever reads them. A resume that scores low on keyword and format match is often rejected automatically, regardless of how qualified the candidate actually is. Knowing your score before you apply lets you fix the gap first.',
  },
  {
    q: 'How does it work?',
    a: 'Paste your resume text and the job description into the tool. It runs on the OpenRouter AI key saved in your free CV Prime account, analyzes both documents together, and returns your score, missing and present keywords, and specific fixes — usually in a few seconds, for a few paise of API cost per run.',
  },
  {
    q: 'How is this different from the free ATS keyword matcher?',
    a: 'The free keyword matcher (no login, no AI key needed) checks raw keyword overlap only. This AI ATS score checker goes further: it reasons about context, seniority match, and phrasing, not just whether a word appears — giving a more realistic score and fixes an AI actually judged, not a simple string match.',
  },
  {
    q: 'What should I do after I get my score?',
    a: 'Use the missing-keyword and fix list to update your resume honestly — never fabricate skills or experience you do not have. Then re-run the check to confirm the improvement, or use CV Prime\'s AI bullet rewriter to turn the fixes into stronger, quantified bullet points before you export your final PDF.',
  },
];

export default function AiAtsScorePage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="AI ATS score"
      highlight="checker"
      subtitle="Paste your resume and the job description. The AI scores your ATS match 0–100, shows the exact keywords you're missing, and gives you concrete fixes — calibrated for the systems Indian employers use."
      path="/tools/ai-ats-score"
      appName="CV Prime AI ATS Score Checker"
      appDescription="Free AI tool that scores a resume against a job description 0-100, lists missing keywords, and gives concrete fixes."
      faqs={faqs}
    >
      <AtsScoreCheckerAI />
    </AiToolLayout>
  );
}
