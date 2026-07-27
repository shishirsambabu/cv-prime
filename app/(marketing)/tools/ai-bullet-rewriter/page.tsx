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
    q: 'Will the rewriter invent numbers I did not give it?',
    a: 'No. It reframes your bullet around the outcome and adds a metric only when you have provided one or clearly implied it — it does not fabricate figures.',
  },
  {
    q: 'How many bullets can I rewrite at once?',
    a: 'Paste as many as you like, one per line. Each is rewritten independently so you can mix and match the results into your resume.',
  },
  {
    q: 'Why does the rewriter cap bullets at 22 words?',
    a: 'Recruiters and ATS parsers scan bullets fast. A tight, action-verb-first line under roughly 22 words reads cleanly on one line in most resume templates and holds attention better than a long sentence.',
  },
];

export default function AiBulletRewriterPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Rewrite weak bullets into"
      highlight="impact"
      subtitle="Paste your bullets, one per line. The AI rewrites each into a stronger, outcome-led line — action verb first, metrics where implied, ATS-friendly, and under 22 words."
      path="/tools/ai-bullet-rewriter"
      schemaName="CV Prime AI Resume Bullet Rewriter"
      schemaDescription="AI tool that rewrites weak resume bullets into outcome-driven, ATS-friendly impact lines under 22 words. Runs on the user's own AI key."
      faqs={faqs}
    >
      <BulletRewriterAI />
    </AiToolLayout>
  );
}
