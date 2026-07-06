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
    q: 'What makes a resume bullet "weak" in the first place?',
    a: 'Weak bullets describe a duty ("responsible for managing a team") instead of an outcome ("led a 6-person team to cut sprint delays by 30%"). They also bury the action verb, run past 22 words, or leave out any metric — even an estimated one — that shows the result of the work.',
  },
  {
    q: 'Will the AI make up numbers I did not give it?',
    a: 'No. It never fabricates metrics or facts you have not provided. If you give it a real number, it foregrounds it. If you have no metric, it rewrites the bullet to be outcome-led and specific in scope and impact without inventing a percentage or figure.',
  },
  {
    q: 'How many bullets can I rewrite at once?',
    a: 'Paste your bullets one per line to rewrite a whole section — work experience, projects, or leadership — in one run, instead of one bullet at a time.',
  },
  {
    q: 'Is this the same rewriter used inside the CV editor?',
    a: 'Yes — this free page runs the same AI bullet-rewrite logic used inside the authenticated CV editor, so you can test it here first, then use the full editor to apply it directly to a CV you can export as a PDF.',
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
      toolName="AI Resume Bullet Rewriter"
      faqs={faqs}
    >
      <BulletRewriterAI />
    </AiToolLayout>
  );
}
