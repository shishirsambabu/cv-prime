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
    q: 'How is this different from the AI role-fit finder?',
    a: 'The role-fit finder starts from your resume and suggests which roles you already fit. This tool starts from one target role you pick and works backward to the specific skills you are missing for it.',
  },
  {
    q: 'What does "highest-leverage" mean here?',
    a: 'Not every missing skill matters equally. The AI ranks gaps by how much they are actually weighted in job descriptions and hiring bars for that role, so you spend learning time on what moves the needle first.',
  },
  {
    q: 'Does it just list skill names, or explain why they matter?',
    a: 'Each gap comes with why it matters for that specific role and a concrete way to learn and demonstrate it — a course, a project idea, or a certification — not just a bare list of keywords to add to your resume.',
  },
  {
    q: 'What should I do once I close a gap?',
    a: 'Add the new skill or project to your resume with a concrete outcome, then re-run the AI ATS score checker against a real job description in that target role to confirm the improvement.',
  },
];

export default function AiSkillsGapPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Find the skills to"
      highlight="learn next"
      subtitle="Paste your resume and a target role. The AI pinpoints the highest-leverage skills to close the gap — why each matters and a concrete way to learn and demonstrate it."
      slug="ai-skills-gap"
      toolName="AI Skills Gap Finder"
      faqs={faqs}
    >
      <SkillsGapAI />
    </AiToolLayout>
  );
}
