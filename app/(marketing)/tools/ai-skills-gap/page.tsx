import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { SkillsGapAI } from '@/components/tools/SkillsGapAI';
import { AiToolFaq, type AiToolFaqItem } from '@/components/tools/ai/AiToolFaq';
import { aiToolSchemas } from '@/lib/aiToolSchemas';

export const metadata: Metadata = {
  title: 'AI Skills Gap Finder — What to Learn Next for Your Target Role | CV Prime',
  description:
    'Paste your resume and a target role and the AI finds the highest-leverage skills to learn next — why each matters and a concrete way to learn and show it. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-skills-gap' },
  openGraph: {
    title: 'AI Skills Gap Finder',
    description: 'The highest-leverage skills to learn next for your target role.',
    url: 'https://cv-prime.in/tools/ai-skills-gap',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Skills Gap Finder — CV Prime' }],
  },
};

const faqs: AiToolFaqItem[] = [
  {
    q: 'How is "highest-leverage" decided?',
    a: 'The AI weighs how often a skill appears as a requirement for your target role, how far you currently are from it, and how demonstrable it is in a short time — so you get skills worth learning next, not just a generic list of everything the role could ever need.',
  },
  {
    q: 'Does it tell me how to actually learn each skill?',
    a: 'Yes — each gap comes with a concrete way to learn and demonstrate it, such as a specific type of project, certification, or way to practice, not just the skill name on its own.',
  },
  {
    q: 'What if I am changing careers entirely?',
    a: 'This is one of the strongest use cases — paste your current resume and the target role in a different field, and the tool identifies which of your existing skills already transfer and which net-new ones matter most to close the gap.',
  },
  {
    q: 'How specific should the "target role" be?',
    a: 'More specific is better — "Senior Product Manager, fintech" gives sharper, more useful gaps than just "Product Manager." If you have a real job posting in mind, paste key details from it for the closest match.',
  },
];

export default function AiSkillsGapPage(): JSX.Element {
  const schemas = aiToolSchemas({
    name: 'CV Prime AI Skills Gap Finder',
    path: '/tools/ai-skills-gap',
    breadcrumbName: 'AI Skills Gap Finder',
    description: 'AI tool that finds the highest-leverage skills to learn next for a target role, with a way to learn and demonstrate each.',
    faqs,
  });
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <AiToolLayout
        eyebrow="AI tool · your key"
        title="Find the skills to"
        highlight="learn next"
        subtitle="Paste your resume and a target role. The AI pinpoints the highest-leverage skills to close the gap — why each matters and a concrete way to learn and demonstrate it."
      >
        <SkillsGapAI />
        <AiToolFaq faqs={faqs} />
      </AiToolLayout>
    </>
  );
}
