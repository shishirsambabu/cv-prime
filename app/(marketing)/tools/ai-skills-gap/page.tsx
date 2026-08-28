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
    a: 'Role-fit works from your resume alone and suggests roles you already fit. This tool takes a target role you name and works backward: it finds the specific skills gap between where you are and that role, ranked by leverage.',
  },
  {
    q: 'What does "highest-leverage" mean here?',
    a: 'Not every missing skill matters equally. The AI prioritizes the few skills that would most improve your competitiveness for the target role, rather than listing everything you don\'t know.',
  },
  {
    q: 'Does it just list skills, or tell me how to learn them?',
    a: 'Each skill comes with why it matters for that specific role and a concrete way to learn and demonstrate it — a project, certification, or portfolio piece you could realistically point to.',
  },
  {
    q: 'What do I need to use it?',
    a: 'A free CV Prime account and your own OpenRouter API key connected in settings (free to obtain). You pay only the tiny per-run token cost to OpenRouter directly.',
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
      appName="CV Prime AI Skills Gap Finder"
      appDescription="AI tool that finds the highest-leverage skills to learn next for a target role, with rationale and a concrete way to learn and demonstrate each. Runs on the user's own AI key."
      faqs={faqs}
    >
      <SkillsGapAI />
    </AiToolLayout>
  );
}
