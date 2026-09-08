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
  { q: 'How does the AI bullet rewriter differ from the free bullet analyzer?', a: 'The free bullet analyzer scores your bullets and tells you what is weak, with no AI and no login. This tool goes further and actually rewrites each weak bullet into a stronger, outcome-led line using your own AI key.' },
  { q: 'Will the AI invent numbers or facts I did not give it?', a: 'No. It rewrites structure and phrasing — leading with a strong action verb, tightening the language, and surfacing metrics only if you already implied them. It will not fabricate achievements or figures.' },
  { q: 'What makes a bullet "weak" in the first place?', a: 'Weak bullets start with filler like "responsible for", describe duties instead of outcomes, run too long, or bury the one number that would prove impact. The rewriter targets exactly these patterns.' },
  { q: 'Is there a limit to how many bullets I can rewrite?', a: 'No hard limit — you pay only for the AI usage on your own OpenRouter key, typically a few paise per batch of bullets.' },
];

export default function AiBulletRewriterPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Rewrite weak bullets into"
      highlight="impact"
      subtitle="Paste your bullets, one per line. The AI rewrites each into a stronger, outcome-led line — action verb first, metrics where implied, ATS-friendly, and under 22 words."
      path="/tools/ai-bullet-rewriter"
      appName="AI Resume Bullet Rewriter"
      faqs={faqs}
    >
      <BulletRewriterAI />
    </AiToolLayout>
  );
}
