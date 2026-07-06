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
    q: 'What is an AI resume bullet rewriter?',
    a: 'It is a tool that takes duty-focused resume lines — the kind that describe what your job was rather than what you achieved — and rewrites each into an outcome-led bullet: action verb first, a result or metric where one is genuinely implied, and under 22 words.',
  },
  {
    q: 'Why do resume bullets need rewriting?',
    a: 'Recruiters and ATS systems both reward bullets that show impact ("Cut deployment time 40% by automating CI checks") over bullets that describe duties ("Responsible for CI pipeline maintenance"). Most resumes are full of the latter, which reads as generic and under-sells real work.',
  },
  {
    q: 'How does the bullet rewriter work?',
    a: 'Paste your bullets one per line. The AI rewrites each into a stronger, outcome-driven version — leading with a strong verb, keeping it ATS-friendly and under 22 words, and surfacing metrics only where they are honestly implied by what you wrote, never invented.',
  },
  {
    q: 'Will the AI make up numbers I did not provide?',
    a: 'No. It rewrites for structure and clarity and highlights where a metric would strengthen the bullet, but it does not fabricate figures. If you have a real number (team size, percentage, time saved), add it to your input bullet so the rewrite can use it accurately.',
  },
  {
    q: 'What is a good example of a rewritten bullet?',
    a: '"Responsible for managing client onboarding" becomes something like "Onboarded 30+ enterprise clients, cutting average setup time from 2 weeks to 4 days." The rewrite keeps the same facts but leads with the verb and the result instead of the job duty.',
  },
];

export default function AiBulletRewriterPage(): JSX.Element {
  return (
    <AiToolLayout
      slug="ai-bullet-rewriter"
      name="AI Resume Bullet Rewriter"
      eyebrow="AI tool · your key"
      title="Rewrite weak bullets into"
      highlight="impact"
      subtitle="Paste your bullets, one per line. The AI rewrites each into a stronger, outcome-led line — action verb first, metrics where implied, ATS-friendly, and under 22 words."
      faqs={faqs}
    >
      <BulletRewriterAI />
    </AiToolLayout>
  );
}
