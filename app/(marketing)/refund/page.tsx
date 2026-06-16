import type { Metadata } from 'next';
import { LegalPage, LegalSection, LegalList } from '@/components/marketing/LegalPage';

export const metadata: Metadata = {
  title: 'Refund & cancellation policy — CV Prime',
  description: 'CV Prime Pro payments are non-refundable. How cancellation works and how to report a genuine issue for review.',
};

export default function RefundPage(): JSX.Element {
  return (
    <LegalPage
      badge="Legal"
      title="Refund & cancellation policy"
      subtitle="Pro payments are non-refundable. If something genuinely goes wrong, document it and tell us — we review every report and give it a fair resolution."
      lastUpdated="13 June 2026"
    >
      <LegalSection title="1. Free plan">
        <p>The free plan is available at no cost and does not involve any payment. No refunds are applicable.</p>
      </LegalSection>

      <LegalSection title="2. Pro plan — payments are non-refundable">
        <p>
          All payments for the Pro plan are <strong>final and non-refundable</strong>. Before
          upgrading, you can use the free plan to build CVs, test the AI flow, and download your
          first PDFs, so you know exactly what you are paying for.
        </p>
      </LegalSection>

      <LegalSection title="3. Cancellation">
        <p>You may cancel your Pro subscription at any time from your account Settings page. When you cancel:</p>
        <LegalList items={[
          'You will not be charged again after cancellation.',
          'Your Pro access continues until the end of the current billing period.',
          'Your account then moves to the free plan — your CVs and data are not deleted.',
          'Cancelling stops future renewals; it does not refund the current or any past period.',
        ]} />
      </LegalSection>

      <LegalSection title="4. Something went wrong? Report it and we will review">
        <p>
          We stand behind the product. If you hit a genuine problem with the app — a feature you
          paid for did not work, or you were charged incorrectly — do not worry. Document it and
          send it to us, and we will review it and do right by you.
        </p>
        <p>Email <a href="mailto:support@cv-prime.in" className="font-semibold text-cyan-700 underline-offset-2 hover:underline">support@cv-prime.in</a> with:</p>
        <LegalList items={[
          'Subject line: "Issue report — [your registered email]"',
          'The email address associated with your CV Prime account.',
          'A clear description of what went wrong and the steps you took.',
          'Screenshots (or a screen recording) that show the problem.',
          'Your Cashfree order ID or payment reference, if it relates to a charge.',
        ]} />
        <p>
          We acknowledge every report within 2 business days, investigate it fairly, and resolve
          it appropriately — including a correction or credit where the fault is genuinely on our
          side. Resolutions are at CV Prime&rsquo;s reasonable discretion.
        </p>
      </LegalSection>

      <LegalSection title="5. Payment disputes">
        <p>If you believe you were charged incorrectly, please contact us before initiating a chargeback with your bank or card issuer. Chargebacks bypass our ability to resolve the issue directly and may result in account suspension.</p>
      </LegalSection>

      <LegalSection title="6. Contact">
        <p>
          Billing and issue reports:{' '}
          <a href="mailto:support@cv-prime.in" className="font-semibold text-cyan-700 underline-offset-2 hover:underline">
            support@cv-prime.in
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
