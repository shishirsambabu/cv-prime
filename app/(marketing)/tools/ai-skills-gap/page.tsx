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
  { q: 'How is this different from a generic "skills to learn" list?', a: 'It compares your actual resume against a specific target role and ranks the gaps by leverage — the few skills that would most move the needle for that role, not a generic list for the job title.' },
  { q: 'Does it just name skills, or explain why they matter?', a: 'For each gap it explains why that skill matters for the target role and gives a concrete way to learn and demonstrate it — a project, certification, or way to reframe existing experience.' },
  { q: 'Do I need a specific job description, or just a role title?', a: 'A role title is enough to get started; pasting a real JD sharpens the gaps to that exact employer\'s expectations.' },
  { q: 'Is it free to use?', a: 'It needs a free CV Prime account and your own OpenRouter AI key. Running it costs a few paise in AI usage.' },
];

export default function AiSkillsGapPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Find the skills to"
      highlight="learn next"
      subtitle="Paste your resume and a target role. The AI pinpoints the highest-leverage skills to close the gap — why each matters and a concrete way to learn and demonstrate it."
      path="/tools/ai-skills-gap"
      appName="AI Skills Gap Finder"
      faqs={faqs}
    >
      <SkillsGapAI />
    </AiToolLayout>
  );
}
