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
  { q: 'Is the CV roast actually harsh, or is it a normal review?', a: 'It is intentionally blunt — the AI is prompted to critique like a skeptical recruiter, not to flatter you. You get an honest score, what genuinely works, and every red flag it finds.' },
  { q: 'Does it just criticize, or does it tell me how to fix things?', a: 'Both. Every red flag comes with a concrete, specific fix — not generic advice like "add more detail".' },
  { q: 'Is my resume kept private?', a: 'Yes. Your resume is sent to the AI model only to generate the critique and is not stored or shared.' },
  { q: 'What do I need to use it?', a: 'A free CV Prime account and your own OpenRouter AI key. The roast itself costs a few paise in AI usage.' },
];

export default function AiCvRoastPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Get your CV"
      highlight="roasted"
      subtitle="Paste your resume and get a brutally honest, recruiter-style critique — an honest score, what's genuinely working, and every red flag paired with a concrete fix."
      path="/tools/ai-cv-roast"
      appName="AI CV Roast"
      faqs={faqs}
    >
      <CvRoastAI />
    </AiToolLayout>
  );
}
