import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { SalaryNegotiationAI } from '@/components/tools/SalaryNegotiationAI';

export const metadata: Metadata = {
  title: 'AI Salary Negotiation Coach — Scripts & Talking Points (India) | CV Prime',
  description:
    'Enter your role and offer details and get evidence-based talking points, ready-to-say scripts for tricky moments, and practical do/don\'t tips — tuned for Indian CTC negotiations. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-salary-negotiation' },
  openGraph: {
    title: 'AI Salary Negotiation Coach',
    description: 'Talking points and ready-to-say scripts for Indian salary negotiations.',
    url: 'https://cv-prime.in/tools/ai-salary-negotiation',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Salary Negotiation Coach — CV Prime' }],
  },
};

const faqs = [
  {
    q: 'What is the AI salary negotiation coach?',
    a: 'A free tool that takes your role and offer details and builds evidence-based talking points, ready-to-say scripts for the tricky moments in a negotiation, and practical do/don\'t tips — tuned specifically for how compensation (CTC) is structured and negotiated in India.',
  },
  {
    q: 'Why does negotiating an offer matter?',
    a: 'Most candidates accept the first offer without negotiating, even though most employers build some room into their initial number. A short, well-prepared negotiation conversation can meaningfully raise your total compensation for the entire time you hold the role, for a few minutes of preparation.',
  },
  {
    q: 'How does it work?',
    a: 'Enter your role, experience level, and offer details (or target range). Using your saved OpenRouter key, the AI generates talking points grounded in your specific situation plus scripts for common tricky moments — like being asked for your current CTC or a counter-offer pushback.',
  },
  {
    q: 'Why is this tuned for India specifically?',
    a: 'Indian offers are typically expressed as CTC (cost to company), which bundles fixed pay, variable pay, and benefits in ways that differ from a simple base-salary negotiation elsewhere. The scripts and tips account for that structure rather than giving generic Western negotiation advice.',
  },
  {
    q: 'Should I use the scripts word for word?',
    a: 'Use them as a foundation and adapt the language to your own voice and the specific conversation — a script read too rigidly can sound rehearsed. The goal is to walk in with clear numbers and talking points, not a memorized speech.',
  },
];

export default function AiSalaryNegotiationPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Negotiate your"
      highlight="offer"
      subtitle="Enter the role and your offer details. The AI builds evidence-based talking points, ready-to-say scripts for the tricky moments, and practical tips — tuned for Indian CTC negotiations."
      path="/tools/ai-salary-negotiation"
      appName="CV Prime AI Salary Negotiation Coach"
      appDescription="Free AI tool that generates talking points and scripts for Indian salary (CTC) negotiations."
      faqs={faqs}
    >
      <SalaryNegotiationAI />
    </AiToolLayout>
  );
}
