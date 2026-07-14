import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { BulletRewriterAI } from '@/components/tools/BulletRewriterAI';
import { AiToolFaq, type AiToolFaqItem } from '@/components/tools/ai/AiToolFaq';
import { aiToolSchemas } from '@/lib/aiToolSchemas';

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

const faqs: AiToolFaqItem[] = [
  {
    q: 'What makes a resume bullet "outcome-driven" instead of a duty?',
    a: 'A duty bullet describes what you were responsible for ("Managed social media accounts"). An outcome bullet leads with an action verb and states the result ("Grew Instagram engagement 3x in 6 months by shipping a weekly content calendar"). The AI rewrites your duty language into this outcome-first structure.',
  },
  {
    q: 'Will it invent numbers or metrics I did not give it?',
    a: 'No. The rewriter only adds metrics you provide or that are clearly implied by what you typed — it will not fabricate percentages or figures. If no metric is available, it strengthens the verb and impact language instead of making one up.',
  },
  {
    q: 'How many bullets can I rewrite at once?',
    a: 'Paste as many bullets as you like, one per line — the tool rewrites each independently and returns them in the same order so you can copy them straight back into your resume.',
  },
  {
    q: 'Why is there a 22-word limit on rewritten bullets?',
    a: 'Recruiters and ATS parsers scan bullets in seconds. Keeping each line under roughly 22 words keeps it scannable on one line in most resume templates and forces the AI to lead with the strongest, most concrete detail instead of padding.',
  },
];

export default function AiBulletRewriterPage(): JSX.Element {
  const schemas = aiToolSchemas({
    name: 'CV Prime AI Resume Bullet Rewriter',
    path: '/tools/ai-bullet-rewriter',
    breadcrumbName: 'AI Bullet Rewriter',
    description: 'AI tool that rewrites weak resume bullets into outcome-driven, ATS-friendly impact lines.',
    faqs,
  });
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <AiToolLayout
        eyebrow="AI tool · your key"
        title="Rewrite weak bullets into"
        highlight="impact"
        subtitle="Paste your bullets, one per line. The AI rewrites each into a stronger, outcome-led line — action verb first, metrics where implied, ATS-friendly, and under 22 words."
      >
        <BulletRewriterAI />
        <AiToolFaq faqs={faqs} />
      </AiToolLayout>
    </>
  );
}
