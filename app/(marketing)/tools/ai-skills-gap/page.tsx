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
    q: 'How does it decide which skills matter most?',
    a: 'It compares your resume against what the target role typically demands and ranks the gaps by leverage — prioritizing skills that unlock the role over ones that are merely nice-to-have.',
  },
  {
    q: 'Does it just list skill names?',
    a: 'No — each gap comes with why it matters for that specific role and a concrete way to learn and demonstrate it, so you have an action plan, not just a list.',
  },
  {
    q: 'Can I use this to plan a career change?',
    a: 'Yes — enter your current resume and the role you are targeting, and it highlights exactly what is missing so you can plan learning before you start applying.',
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
      name="AI Skills Gap Finder"
      description="Free AI tool that finds the highest-leverage skills to learn next for a target role, based on your resume."
      faqs={faqs}
      relatedLinks={[
        { href: '/tools/ai-role-fit', label: 'AI role-fit finder' },
        { href: '/in-demand-skills-india-2026', label: 'In-demand skills 2026' },
        { href: '/career-change-resume', label: 'Career change resume guide' },
        { href: '/tools', label: 'All free tools' },
      ]}
    >
      <SkillsGapAI />
    </AiToolLayout>
  );
}
