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
    q: 'Is the AI CV Roast actually honest, or does it just flatter my resume?',
    a: 'It is built to be blunt. The AI is prompted to critique like a skeptical recruiter, not to reassure you — it calls out weak bullets, missing metrics, and format issues directly, and pairs every criticism with a specific fix rather than vague advice.',
  },
  {
    q: 'What does the roast actually score?',
    a: 'You get an overall honesty score plus a breakdown of what is genuinely working, the red flags a recruiter would notice in the first 10 seconds, and concrete rewrites for the weakest sections.',
  },
  {
    q: 'Do I need my own AI key to use this?',
    a: 'Yes — like all of CV Prime\'s AI tools, this runs on your own OpenRouter key inside your free account, which costs a few paise per run and keeps the tool free to offer with no subscription markup.',
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
      name="AI CV Roast"
      description="Free AI tool that gives a blunt, recruiter-style critique of your resume — an honest score, what is working, and every red flag with a concrete fix."
      faqs={faqs}
      relatedLinks={[
        { href: '/tools/ai-ats-score', label: 'AI ATS score checker' },
        { href: '/tools/ai-bullet-rewriter', label: 'AI bullet rewriter' },
        { href: '/tools/ai-role-fit', label: 'AI role-fit finder' },
        { href: '/how-to-pass-ats-screening', label: 'How to pass ATS screening' },
        { href: '/tools', label: 'All free tools' },
      ]}
    >
      <CvRoastAI />
    </AiToolLayout>
  );
}
