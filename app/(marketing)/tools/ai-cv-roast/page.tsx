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
    q: 'Is the "roast" actually useful, or just harsh for the sake of it?',
    a: 'It is blunt by design but constructive: every criticism is paired with a concrete fix, not just a callout. The goal is to show you what a skeptical recruiter would silently think in the first 10 seconds of reading your resume.',
  },
  {
    q: 'What does the CV roast actually check?',
    a: 'It looks at your summary, bullet quality, quantification, formatting red flags, and overall first impression, then gives an honest score plus a ranked list of what to fix first.',
  },
  {
    q: 'Is my resume stored anywhere after I paste it?',
    a: 'The AI call runs through your own connected key for this single request; CV Prime does not use your resume text for training and you control what you save inside your account.',
  },
  {
    q: 'How is this different from the AI ATS score checker?',
    a: 'The ATS score checker is calibrated against a specific job description and keyword match. The CV roast is a general, recruiter-style first-impression critique of the resume on its own — use both for a complete picture.',
  },
];

export default function AiCvRoastPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Get your CV"
      highlight="roasted"
      subtitle="Paste your resume and get a brutally honest, recruiter-style critique — an honest score, what's genuinely working, and every red flag paired with a concrete fix."
      slug="ai-cv-roast"
      appName="CV Prime AI CV Roast"
      faqs={faqs}
    >
      <CvRoastAI />
    </AiToolLayout>
  );
}
