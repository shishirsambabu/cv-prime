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
    q: 'What is an AI salary negotiation coach?',
    a: 'It is a tool that takes your role and offer details and generates evidence-based talking points, ready-to-say scripts for tricky moments (like a lowball offer or a "this is our final number" line), and practical do/don\'t tips — tuned specifically for Indian CTC-structured negotiations.',
  },
  {
    q: 'Why is negotiating an Indian CTC offer different?',
    a: 'Indian offers are usually expressed as total CTC (cost-to-company), which bundles base, variable pay, and benefits in ways that make like-for-like comparison hard and can obscure how much of the number is actually guaranteed take-home. Negotiating well means knowing which components are movable and which language to use for each.',
  },
  {
    q: 'How does the salary negotiation coach work?',
    a: 'Enter your role, experience level, and offer details (or the range you are targeting). The AI returns talking points backed by market context, word-for-word scripts for the specific moments negotiations get tricky, and tips on what to do and avoid — all tuned to Indian compensation structures.',
  },
  {
    q: 'Is it safe to negotiate every offer?',
    a: 'In most cases, yes — a reasonable, well-evidenced counter rarely costs you the offer, and employers generally expect some negotiation. The scripts here are built to be firm but collaborative, so you can push back professionally without souring the relationship before you start.',
  },
  {
    q: 'What if the recruiter says the offer is final?',
    a: 'The coach includes scripts specifically for this moment — ones that either ask for non-salary levers (joining bonus, review timeline, designation) or make one final, well-justified ask, so you are not left improvising under pressure.',
  },
];

export default function AiSalaryNegotiationPage(): JSX.Element {
  return (
    <AiToolLayout
      slug="ai-salary-negotiation"
      name="AI Salary Negotiation Coach"
      eyebrow="AI tool · your key"
      title="Negotiate your"
      highlight="offer"
      subtitle="Enter the role and your offer details. The AI builds evidence-based talking points, ready-to-say scripts for the tricky moments, and practical tips — tuned for Indian CTC negotiations."
      faqs={faqs}
    >
      <SalaryNegotiationAI />
    </AiToolLayout>
  );
}
