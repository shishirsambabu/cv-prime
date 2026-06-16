import type { Metadata } from 'next';
import { LegalPage, LegalSection, LegalList } from '@/components/marketing/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of service — CV Prime',
  description: 'Terms and conditions governing your use of CV Prime, including AI assistance, subscriptions, payments, and user responsibilities.',
};

export default function TermsPage(): JSX.Element {
  return (
    <LegalPage
      badge="Legal"
      title="Terms of service"
      subtitle="Please read these terms carefully before using CV Prime. By creating an account or using any feature you agree to be bound by these terms."
      lastUpdated="13 June 2026"
    >
      <LegalSection title="1. Who we are">
        <p>
          CV Prime (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is an AI-assisted CV building and tailoring service
          operated by Shishir Babu, an individual based in Ernakulam, Kerala, India. The service
          is available at <strong>www.cv-prime.in</strong> and related sub-domains.
        </p>
        <p>
          For any queries relating to these terms, contact us at{' '}
          <a href="mailto:support@cv-prime.in" className="font-semibold text-cyan-700 underline-offset-2 hover:underline">
            support@cv-prime.in
          </a>.
        </p>
      </LegalSection>

      <LegalSection title="2. Eligibility">
        <p>You must be at least 18 years old and legally capable of entering into a binding contract to use CV Prime. By using the service you represent that you meet these requirements.</p>
        <p>If you are using CV Prime on behalf of an organisation, you represent that you have authority to bind that organisation to these terms.</p>
      </LegalSection>

      <LegalSection title="3. Account registration and security">
        <p>You must create an account to access most features. You agree to:</p>
        <LegalList items={[
          'Provide accurate and complete registration information.',
          'Keep your password and account credentials secure and confidential.',
          'Notify us immediately at support@cv-prime.in if you suspect any unauthorised access.',
          'Accept responsibility for all activity that occurs under your account.',
        ]} />
        <p>We reserve the right to suspend or terminate accounts that violate these terms or that we believe have been compromised.</p>
      </LegalSection>

      <LegalSection title="4. Permitted use">
        <p>CV Prime grants you a limited, non-exclusive, non-transferable licence to use the service for your personal, non-commercial job-seeking purposes. You may:</p>
        <LegalList items={[
          'Create, store, edit, and export your own CVs.',
          'Paste job descriptions to generate tailored CV variants.',
          'Use AI features to rewrite bullets and score ATS match.',
          'Download PDFs within your plan limits.',
        ]} />
      </LegalSection>

      <LegalSection title="5. Prohibited conduct">
        <p>You must not:</p>
        <LegalList items={[
          'Upload content that is false, misleading, defamatory, obscene, or infringes any third-party rights.',
          'Attempt to circumvent plan limits, rate limits, payment gates, or access controls.',
          'Use automated scripts, bots, or scrapers against the service.',
          'Probe, scan, or test the vulnerability of the platform or its infrastructure.',
          'Attempt to access another user\'s account, workspace, or CVs.',
          'Reverse-engineer, decompile, or disassemble any part of the service.',
          'Resell, sublicense, or offer the service to third parties without written permission.',
          'Use the service to create CVs containing fabricated qualifications, experience, or credentials.',
        ]} />
      </LegalSection>

      <LegalSection title="6. AI-generated content">
        <p>CV Prime uses large language models (via OpenRouter) to generate and rewrite CV content. You acknowledge that:</p>
        <LegalList items={[
          'AI suggestions may be inaccurate, incomplete, or contextually wrong.',
          'You must review all AI-generated content before including it in a CV you submit to an employer.',
          'You are solely responsible for the accuracy and truthfulness of the CV you submit.',
          'CV Prime does not guarantee that AI-tailored CVs will result in interviews, job offers, or any particular employment outcome.',
          'AI output does not constitute professional career or legal advice.',
        ]} />
      </LegalSection>

      <LegalSection title="7. OpenRouter API keys">
        <p>Certain AI features require you to connect an OpenRouter API key. When you do so:</p>
        <LegalList items={[
          'Your key is encrypted before storage. We never store or transmit plaintext keys.',
          'You are responsible for all usage and charges incurred on your OpenRouter account.',
          'We recommend using a key with a strict spending limit and revoking it after use.',
          'We are not liable for any charges, overages, or data processed by OpenRouter or its underlying AI providers.',
        ]} />
      </LegalSection>

      <LegalSection title="8. Subscriptions and payments">
        <p>CV Prime offers a free tier and a paid Pro plan. Payments are processed by <strong>our billing partner</strong> in Indian Rupees (INR).</p>
        <LegalList items={[
          'Free plan: includes 3 PDF exports, limited AI features, and all standard templates.',
          'Pro plan: billed monthly at the price shown on the pricing page at the time of purchase.',
          'Prices are inclusive of applicable taxes unless stated otherwise.',
          'Subscriptions auto-renew unless cancelled before the renewal date.',
          'You can cancel at any time from your account settings. Access continues until the end of the paid period.',
          'We reserve the right to change pricing with 30 days\' notice. Existing subscribers are not affected mid-billing-cycle.',
        ]} />
        <p>For refunds, see our <a href="/refund" className="font-semibold text-cyan-700 underline-offset-2 hover:underline">Refund policy</a>.</p>
      </LegalSection>

      <LegalSection title="9. Intellectual property">
        <p>CV Prime and its underlying technology, design, and branding are owned by or licensed to us. You retain full ownership of the CV content you create.</p>
        <p>By using the service you grant us a limited, worldwide licence to store, process, and display your content solely to provide the service to you. We do not use your CV content to train AI models.</p>
      </LegalSection>

      <LegalSection title="10. Data and privacy">
        <p>Our collection and use of your personal data is governed by our <a href="/privacy" className="font-semibold text-cyan-700 underline-offset-2 hover:underline">Privacy policy</a>, which is incorporated into these terms by reference.</p>
      </LegalSection>

      <LegalSection title="11. Disclaimers">
        <p>The service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
        <p>We do not warrant that:</p>
        <LegalList items={[
          'The service will be uninterrupted, error-free, or secure.',
          'AI output will be accurate, complete, or suitable for any particular role.',
          'PDFs generated will be parsed correctly by any specific ATS system.',
          'Use of CV Prime will result in any employment outcome.',
        ]} />
      </LegalSection>

      <LegalSection title="12. Limitation of liability">
        <p>To the maximum extent permitted by applicable law, CV Prime and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the service.</p>
        <p>Our total aggregate liability for any claim relating to the service shall not exceed the amount you paid us in the 3 months preceding the event giving rise to the claim, or ₹500, whichever is greater.</p>
      </LegalSection>

      <LegalSection title="13. Indemnification">
        <p>You agree to indemnify, defend, and hold harmless CV Prime, its operator, and affiliates from any claims, damages, losses, and expenses (including reasonable legal fees) arising from:</p>
        <LegalList items={[
          'Your violation of these terms.',
          'Content you upload, create, or submit through the service.',
          'Your violation of any law or third-party rights.',
        ]} />
      </LegalSection>

      <LegalSection title="14. Termination">
        <p>We may suspend or terminate your account at any time for violation of these terms, non-payment, or for any other reason with reasonable notice where practicable.</p>
        <p>You may delete your account at any time from settings. On deletion, your CVs and personal data are removed from active storage within 30 days, subject to legal retention requirements.</p>
      </LegalSection>

      <LegalSection title="15. Governing law and disputes">
        <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Ernakulam, Kerala, India.</p>
        <p>Before initiating any legal proceedings, parties agree to attempt in good faith to resolve disputes informally by contacting <a href="mailto:support@cv-prime.in" className="font-semibold text-cyan-700 underline-offset-2 hover:underline">support@cv-prime.in</a> with a written description of the issue.</p>
      </LegalSection>

      <LegalSection title="16. Changes to these terms">
        <p>We may update these terms from time to time. If we make material changes we will notify you by email or by a prominent notice in the product at least 14 days before the changes take effect. Continued use after that date constitutes acceptance of the updated terms.</p>
      </LegalSection>

      <LegalSection title="17. Contact">
        <p>
          Questions about these terms? Email us at{' '}
          <a href="mailto:support@cv-prime.in" className="font-semibold text-cyan-700 underline-offset-2 hover:underline">
            support@cv-prime.in
          </a>{' '}
          or visit our <a href="/contact" className="font-semibold text-cyan-700 underline-offset-2 hover:underline">Contact page</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
