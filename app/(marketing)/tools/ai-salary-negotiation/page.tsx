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
    q: 'Is this tuned specifically for Indian salary structures?',
    a: 'Yes — it works in CTC terms (fixed, variable, and benefits split) rather than a flat number, which is how most Indian offers are actually structured, and gives scripts that account for that.',
  },
  {
    q: 'What if I do not know what to ask for?',
    a: 'Enter your role and current offer details and the tool builds evidence-based talking points from that context — you do not need outside market data to start the conversation.',
  },
  {
    q: 'Does it give me an exact script to say?',
    a: 'Yes, ready-to-say scripts for the specific tricky moments in a negotiation — like countering a lowball offer or asking for time to decide — not just generic tips.',
  },
  {
    q: 'Can I use this for a counter-offer at my current company?',
    a: 'Yes, the same talking-points approach applies whether you are negotiating a new offer or a raise/counter-offer at your existing employer — just describe the situation in the details field.',
  },
];

export default function AiSalaryNegotiationPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Negotiate your"
      highlight="offer"
      subtitle="Enter the role and your offer details. The AI builds evidence-based talking points, ready-to-say scripts for the tricky moments, and practical tips — tuned for Indian CTC negotiations."
      slug="ai-salary-negotiation"
      appName="CV Prime AI Salary Negotiation Coach"
      faqs={faqs}
    >
      <SalaryNegotiationAI />
    </AiToolLayout>
  );
}
