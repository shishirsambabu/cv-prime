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

export default function AiBulletRewriterPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Rewrite weak bullets into"
      highlight="impact"
      path="/tools/ai-bullet-rewriter"
      subtitle="Paste your bullets, one per line. The AI rewrites each into a stronger, outcome-led line — action verb first, metrics where implied, ATS-friendly, and under 22 words."
    >
      <BulletRewriterAI />
    </AiToolLayout>
  );
}
