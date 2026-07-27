import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { SkillsGapAI } from '@/components/tools/SkillsGapAI';

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

const faqs = [
  {
    q: 'How does the AI decide which skills matter most?',
    a: 'It compares your current resume against the typical requirements of your target role and ranks the gaps by how much they would move your competitiveness — not just any skill you lack.',
  },
  {
    q: 'Does it just list skills, or how to actually learn them?',
    a: 'Both. Each gap comes with why it matters for that role and a concrete way to learn and demonstrate it — a project, certification, or specific practice — not just a bare skill name.',
  },
  {
    q: 'Can I use this for a role I have never worked in?',
    a: 'Yes — this is one of the most useful cases. Paste your current resume and the target role, even if it is a career change, and the AI maps the realistic path between the two.',
  },
];

export default function AiSkillsGapPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Find the skills to"
      highlight="learn next"
      subtitle="Paste your resume and a target role. The AI pinpoints the highest-leverage skills to close the gap — why each matters and a concrete way to learn and demonstrate it."
      path="/tools/ai-skills-gap"
      schemaName="CV Prime AI Skills Gap Finder"
      schemaDescription="AI tool that identifies the highest-leverage skills a candidate should learn next for a target role, with reasoning and a way to demonstrate each. Runs on the user's own AI key."
      faqs={faqs}
    >
      <SkillsGapAI />
    </AiToolLayout>
  );
}
