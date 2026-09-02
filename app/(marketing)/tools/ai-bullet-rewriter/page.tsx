import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { BulletRewriterAI } from '@/components/tools/BulletRewriterAI';

export const metadata: Metadata = {
  title: 'AI Resume Bullet Rewriter — Turn Duties into Impact | CV Prime',
  description:
    'Paste your weak resume bullets and get stronger, outcome-driven rewrites — action verb first, metrics where implied, ATS-friendly, under 22 words. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-bullet-rewriter' },
  openGraph: {
    title: 'AI Resume Bullet Rewriter',
    description: 'Turn responsibility bullets into outcome-driven, ATS-friendly impact lines.',
    url: 'https://cv-prime.in/tools/ai-bullet-rewriter',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Resume Bullet Rewriter — CV Prime' }],
  },
};

const faqs = [
  {
    q: 'Will the rewriter invent numbers I do not have?',
    a: 'No. It only implies metrics that are reasonably inferable from what you wrote and flags where you should add a real number — it never fabricates results or figures.',
  },
  {
    q: 'How many bullets can I rewrite at once?',
    a: 'Paste as many as you like, one per line — the AI processes each independently and returns a stronger, outcome-led version of every line.',
  },
  {
    q: 'What makes a bullet "outcome-led"?',
    a: 'It leads with a strong action verb, states the result or impact rather than just the duty, and stays under 22 words so it reads cleanly in an ATS and to a human recruiter.',
  },
];

export default function AiBulletRewriterPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Rewrite weak bullets into"
      highlight="impact"
      subtitle="Paste your bullets, one per line. The AI rewrites each into a stronger, outcome-led line — action verb first, metrics where implied, ATS-friendly, and under 22 words."
      slug="ai-bullet-rewriter"
      name="AI Resume Bullet Rewriter"
      description="Free AI tool that rewrites weak resume bullets into stronger, outcome-driven, ATS-friendly lines."
      faqs={faqs}
      relatedLinks={[
        { href: '/tools/ai-ats-score', label: 'AI ATS score checker' },
        { href: '/tools/ai-cv-roast', label: 'AI CV roast' },
        { href: '/resume-tips/resume-bullet-points', label: 'Resume bullet points guide' },
        { href: '/resume-tips/quantifying-achievements', label: 'Quantifying achievements' },
        { href: '/tools', label: 'All free tools' },
      ]}
    >
      <BulletRewriterAI />
    </AiToolLayout>
  );
}
