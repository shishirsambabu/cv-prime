import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { CvRoastAI } from '@/components/tools/CvRoastAI';

export const metadata: Metadata = {
  title: 'AI CV Roast — Brutally Honest Resume Critique (Free) | CV Prime',
  description:
    'Get a brutally honest, recruiter-style critique of your CV: an honest score, what is working, and every red flag with a concrete fix. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-cv-roast' },
  openGraph: {
    title: 'AI CV Roast — Honest Resume Critique',
    description: 'A blunt, constructive recruiter-style critique of your resume with fixes.',
    url: 'https://cv-prime.in/tools/ai-cv-roast',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI CV Roast — CV Prime' }],
  },
};

const faqs = [
  {
    q: 'Is the CV roast actually harsh, or just polite feedback?',
    a: 'It is direct and specific by design — the point is to surface the same red flags a real recruiter would silently notice, not soften them into vague encouragement.',
  },
  {
    q: 'What does the roast actually cover?',
    a: 'An honest overall score, what is genuinely working in your resume, and every red flag — weak bullets, formatting issues, unclear impact — each paired with a concrete fix.',
  },
  {
    q: 'Should I use this before or after the AI ATS score checker?',
    a: 'Use the roast first to fix structural and content issues, then run the AI ATS score checker against a specific job description to close any remaining keyword gaps.',
  },
];

export default function AiCvRoastPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Get your CV"
      highlight="roasted"
      subtitle="Paste your resume and get a brutally honest, recruiter-style critique — an honest score, what's genuinely working, and every red flag paired with a concrete fix."
      path="/tools/ai-cv-roast"
      schemaName="CV Prime AI CV Roast"
      schemaDescription="AI tool that gives a blunt, recruiter-style critique of a resume with an honest score and concrete fixes for every red flag. Runs on the user's own AI key."
      faqs={faqs}
    >
      <CvRoastAI />
    </AiToolLayout>
  );
}
