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
    q: 'Will the AI make up numbers I didn\'t give it?',
    a: 'No. It rewrites for structure and clarity — action verb first, outcome emphasised, filler cut — but it only adds a metric if your original bullet already implies one. It will never invent a percentage, dollar figure, or team size you didn\'t provide.',
  },
  {
    q: 'How many bullets can I rewrite at once?',
    a: 'Paste as many as you like, one per line. Each gets its own rewrite so you can compare the before and after side by side and keep only the versions you want in your resume.',
  },
  {
    q: 'Why keep bullets under 22 words?',
    a: 'Recruiters and ATS parsers both favour scannable lines. A bullet under roughly 22 words fits on one or two lines in most templates and forces the strongest, most specific verb and outcome to the front — the parts that actually get read.',
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
      schemaName="CV Prime AI Resume Bullet Rewriter"
      schemaDescription="Turn weak, duty-listing resume bullets into outcome-driven, ATS-friendly impact lines with AI."
      faqs={faqs}
    >
      <BulletRewriterAI />
    </AiToolLayout>
  );
}
