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
    q: 'How does it pick which skills matter most?',
    a: 'It compares your resume against what the target role typically demands and ranks the gaps by leverage — skills that unlock the most opportunities or come up most often in that role\'s job postings, rather than listing every possible thing you could learn.',
  },
  {
    q: 'Does it just name the skill, or tell me how to learn it?',
    a: 'Both. For each gap you get why it matters for this specific role, plus a concrete way to actually learn and demonstrate it — a project, certification, or practical exercise you can point to on your resume.',
  },
  {
    q: 'What should I do once I\'ve closed a gap?',
    a: 'Add it to your resume with real evidence (a project, a result, a credential), then re-run the AI ATS score checker against a target JD to confirm it now shows up as a matched keyword, not just a claim.',
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
      schemaName="CV Prime AI Skills Gap Finder"
      schemaDescription="Find the highest-leverage skills to learn next for your target role, with AI-generated reasons and a concrete way to learn and demonstrate each."
      faqs={faqs}
    >
      <SkillsGapAI />
    </AiToolLayout>
  );
}
