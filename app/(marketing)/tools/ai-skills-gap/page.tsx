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
    q: 'What is the AI skills gap finder?',
    a: 'A free tool that compares your resume against a target role and identifies the highest-leverage skills you are missing — explaining why each one matters for that role and giving a concrete way to learn and demonstrate it.',
  },
  {
    q: 'Why focus on "highest-leverage" skills specifically?',
    a: 'Most skill gap advice lists everything a job posting mentions, which can feel overwhelming and unfocused. This tool prioritizes the few skills that would move the needle most for that specific role, so you know exactly where to spend limited learning time instead of trying to learn everything at once.',
  },
  {
    q: 'How does it work?',
    a: 'Paste your resume and name your target role (or paste a job description for more precision). Using your saved OpenRouter key, the AI compares the two and returns a prioritized list of skills to close the gap, each with the reasoning and a practical way to build and show it.',
  },
  {
    q: 'How should I "demonstrate" a new skill on my resume?',
    a: 'Listing a skill alone is weak evidence. The tool\'s suggestions typically point toward a project, certification, or specific experience you can add — real proof is far more convincing to both an ATS and a human reviewer than a bare keyword.',
  },
  {
    q: 'What should I do after identifying my gaps?',
    a: 'Start with the top one or two highest-leverage skills rather than all of them at once. Once you have built genuine evidence for a skill, add it to your resume and re-run the AI ATS score checker against your target job description to confirm the improvement.',
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
      appName="CV Prime AI Skills Gap Finder"
      appDescription="Free AI tool that identifies the highest-leverage skills to learn next for a target role."
      faqs={faqs}
    >
      <SkillsGapAI />
    </AiToolLayout>
  );
}
