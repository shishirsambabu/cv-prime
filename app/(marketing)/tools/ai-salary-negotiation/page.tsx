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
    q: 'Is this tuned for Indian CTC-style offers specifically?',
    a: 'Yes — the talking points and scripts account for how Indian offers are typically structured (fixed vs variable, base vs CTC), not just a flat US-style salary number.',
  },
  {
    q: 'What exactly do I get from this tool?',
    a: 'Evidence-based talking points for why you deserve more, ready-to-say scripts for the awkward moments (a lowball offer, a counter-question, a deadline push), and practical do/don\'t negotiation tips.',
  },
  {
    q: 'Will it tell me what number to ask for?',
    a: 'It helps you build the case and the words to say it, based on what you enter about the role and offer — it does not have live market salary data, so pair it with CV Prime\'s salary guide for the role.',
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
      schemaName="CV Prime AI Salary Negotiation Coach"
      schemaDescription="AI tool that generates evidence-based talking points and negotiation scripts for Indian CTC-style job offers. Runs on the user's own AI key."
      faqs={faqs}
    >
      <SalaryNegotiationAI />
    </AiToolLayout>
  );
}
