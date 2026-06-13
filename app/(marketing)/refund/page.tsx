import type { Metadata } from 'next';
import { LegalPage, LegalSection, LegalList } from '@/components/marketing/LegalPage';

export const metadata: Metadata = {
  title: 'Refund & cancellation policy — CV Prime',
  description: 'CV Prime refund and cancellation policy for Pro subscriptions processed via Razorpay.',
};

export default function RefundPage(): JSX.Element {
  return (
    <LegalPage
      badge="Legal"
      title="Refund & cancellation policy"
      subtitle="We want you to be happy with CV Prime. If something is not working as expected, we will do our best to make it right."
      lastUpdated="13 June 2026"
    >
      <LegalSection title="1. Free plan">
        <p>The free plan is available at no cost and does not involve any payment. No refunds are applicable.</p>
      </LegalSection>

      <LegalSection title="2. Pro plan — cancellation">
        <p>You may cancel your Pro subscription at any time from your account Settings page. When you cancel:</p>
        <LegalList items={[
          'Your Pro access continues until the end of the current billing period (monthly or annual).',
          'You will not be charged again after cancellation.',
          'Your account moves to the free plan at the end of the paid period.',
          'Your CVs and data are not deleted when you downgrade.',
        ]} />
      </LegalSection>

      <LegalSection title="3. Refund eligibility">
        <p>We offer a <strong>7-day money-back guarantee</strong> for first-time Pro subscribers. If you are not satisfied within the first 7 days of your first Pro subscription, email us and we will issue a full refund — no questions asked.</p>
        <p>Refund requests made after 7 days are evaluated on a case-by-case basis. We may issue a pro-rated refund if:</p>
        <LegalList items={[
          'A technical fault on our side prevented you from using Pro features you paid for.',
          'You were charged twice due to a payment processing error.',
          'We discontinued the Pro plan or materially reduced its features without adequate notice.',
        ]} />
        <p>We do not issue refunds for:</p>
        <LegalList items={[
          'Change of mind after 7 days.',
          'Dissatisfaction with AI output quality (AI is inherently probabilistic and results vary).',
          'Partial months — subscriptions are not pro-rated except as described above.',
          'Annual plans beyond the 7-day window, except in the circumstances listed above.',
        ]} />
      </LegalSection>

      <LegalSection title="4. How to request a refund">
        <p>Email <a href="mailto:mr.shishirbabu@gmail.com" className="font-semibold text-cyan-700 underline-offset-2 hover:underline">mr.shishirbabu@gmail.com</a> with:</p>
        <LegalList items={[
          'Subject line: "Refund request — [your registered email]"',
          'The email address associated with your CV Prime account.',
          'Your Razorpay order ID or payment reference (available in your email receipt).',
          'A brief reason for the request.',
        ]} />
        <p>We will acknowledge your request within 2 business days and process eligible refunds within 7–10 business days. Refunds are credited to the original payment method via Razorpay.</p>
      </LegalSection>

      <LegalSection title="5. Payment disputes">
        <p>If you believe you were charged incorrectly, please contact us before initiating a chargeback with your bank or card issuer. Chargebacks bypass our ability to resolve the issue directly and may result in account suspension.</p>
      </LegalSection>

      <LegalSection title="6. Contact">
        <p>
          Refund and cancellation queries:{' '}
          <a href="mailto:mr.shishirbabu@gmail.com" className="font-semibold text-cyan-700 underline-offset-2 hover:underline">
            mr.shishirbabu@gmail.com
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
