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
    q: 'How is a "roast" different from a normal ATS score?',
    a: 'The ATS score checks keyword and format match against a specific job. The CV roast is a broader, recruiter-style critique of the resume on its own — tone, clarity, red flags, and what a hiring manager would actually notice in the first 10 seconds.',
  },
  {
    q: 'Is the feedback actually useful, or just harsh for effect?',
    a: 'Every criticism comes paired with a concrete fix, not just a callout. It\'s direct rather than diplomatic, but the goal is a resume that\'s stronger after you apply the fixes, not a one-liner roast.',
  },
  {
    q: 'What do I need to run it?',
    a: 'A free CV Prime account and your own OpenRouter API key connected in settings — free to obtain, encrypted at rest. You pay only the small per-run token cost directly to OpenRouter.',
  },
  {
    q: 'Does it work for any resume format?',
    a: 'Paste the text of your resume in directly. It works for any role or industry — the critique adapts to what your content and structure actually say, rather than a fixed template.',
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
      appDescription="AI tool that gives a blunt, recruiter-style critique of a resume with an honest score and concrete fixes for every red flag. Runs on the user's own AI key."
      faqs={faqs}
    >
      <CvRoastAI />
    </AiToolLayout>
  );
}
