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
    q: 'How is this different from a generic list of skills for a role?',
    a: 'It compares your actual resume against your target role, so the output is specific to your existing gaps — not a generic skills list every candidate for that role would see.',
  },
  {
    q: 'Does it just list skills, or explain why they matter?',
    a: 'Each skill comes with why it matters for the target role and a concrete way to learn and demonstrate it — so you leave with an action plan, not just a list of buzzwords.',
  },
  {
    q: 'How many skills does it typically suggest?',
    a: 'It focuses on the highest-leverage gaps rather than an exhaustive list, so you can prioritize what to learn next instead of feeling overwhelmed by everything you could theoretically add.',
  },
  {
    q: 'Can I use this to plan a career transition?',
    a: 'Yes — pair this with the AI role-fit finder to first identify a target role, then use the skills gap finder to see exactly what separates your current resume from that role.',
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
      faqs={faqs}
    >
      <SkillsGapAI />
    </AiToolLayout>
  );
}
