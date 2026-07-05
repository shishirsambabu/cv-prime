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
    a: 'Weak bullets describe a duty ("Responsible for managing a team") instead of an outcome ("Led a 6-person team to ship 3 releases a quarter, cutting bug backlog 40%"). The rewriter looks for passive duty-language and rebuilds each line around the result you drove.',
  },
  {
    q: 'Will the AI invent numbers or achievements I did not have?',
    a: 'No — it is instructed to only sharpen language and surface metrics you already implied, never to fabricate figures. If a bullet has no measurable result, it strengthens the verb and specificity instead of making up a number.',
  },
  {
    q: 'How many bullets can I rewrite at once?',
    a: 'Paste as many as you like, one per line. Each is rewritten independently so you can mix and match the versions you prefer straight into your resume.',
  },
  {
    q: 'Does this work for freshers with limited work experience?',
    a: 'Yes. It works just as well on project, internship, and coursework bullets — turning "Worked on a college project" into a specific, outcome-led line recruiters can actually evaluate.',
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
      appName="CV Prime AI Resume Bullet Rewriter"
      faqs={faqs}
    >
      <BulletRewriterAI />
    </AiToolLayout>
  );
}
