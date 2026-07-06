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
    q: 'What does "tuned for Indian CTC negotiations" mean?',
    a: 'It accounts for how Indian offers are structured — fixed vs variable pay, joining bonuses, ESOPs, and total CTC framing — rather than giving generic US-style base-salary negotiation advice that does not map cleanly onto Indian compensation structures.',
  },
  {
    q: 'What do I need to enter for a useful result?',
    a: 'Your target role, the offer details (or your current CTC if countering a raise), and any competing offer or benchmark you have — the more specific the inputs, the more concrete the scripts it produces.',
  },
  {
    q: 'Are the "scripts" literal word-for-word lines?',
    a: 'Yes — ready-to-say scripts for the tricky moments (asking for more without an ultimatum, responding to "this is our final offer," negotiating joining date or designation) rather than abstract advice like "be confident."',
  },
  {
    q: 'Does it use real salary benchmarks?',
    a: 'It builds talking points from the CTC range and offer details you provide. For India-wide salary benchmark data by role, experience, and city, use CV Prime\'s dedicated salary guide.',
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
      toolName="AI Salary Negotiation Coach"
      faqs={faqs}
    >
      <SalaryNegotiationAI />
    </AiToolLayout>
  );
}
