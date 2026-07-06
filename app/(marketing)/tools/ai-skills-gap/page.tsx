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
    q: 'What is an AI skills gap finder?',
    a: 'It is a tool that compares your resume against a target role and identifies the highest-leverage skills you are missing — explaining why each one matters for that role and giving a concrete way to learn it and show it on your resume.',
  },
  {
    q: 'Why focus on the "highest-leverage" skills instead of a full list?',
    a: 'Most skill gaps have a long tail of nice-to-haves. Closing the two or three skills that actually gate hiring decisions for a role moves you from "not competitive" to "competitive" far faster than spreading effort across everything the JD mentions.',
  },
  {
    q: 'How does the skills gap finder work?',
    a: 'Paste your resume and name your target role. The AI compares what you already demonstrate against what that role typically requires, then returns a prioritized list of gaps — each with why it matters and a concrete way to learn it and demonstrate it (a project, certification, or specific resume language).',
  },
  {
    q: 'What if I already have the skill but it is not on my resume?',
    a: 'That is one of the most common findings — a real gap in how you present yourself rather than in your actual ability. In that case the fix is adding the skill to your resume with evidence, not learning something new.',
  },
  {
    q: 'How long does it take to close a typical skills gap?',
    a: 'It depends on the skill — some (a certification, a specific tool) can be demonstrable within weeks, while deeper ones (a new domain or leadership scope) take longer. The tool gives you a concrete starting action for each gap so you are not guessing where to begin.',
  },
];

export default function AiSkillsGapPage(): JSX.Element {
  return (
    <AiToolLayout
      slug="ai-skills-gap"
      name="AI Skills Gap Finder"
      eyebrow="AI tool · your key"
      title="Find the skills to"
      highlight="learn next"
      subtitle="Paste your resume and a target role. The AI pinpoints the highest-leverage skills to close the gap — why each matters and a concrete way to learn and demonstrate it."
      faqs={faqs}
    >
      <SkillsGapAI />
    </AiToolLayout>
  );
}
