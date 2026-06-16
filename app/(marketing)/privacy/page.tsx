import type { Metadata } from 'next';
import { LegalPage, LegalSection, LegalList } from '@/components/marketing/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy policy — CV Prime',
  description: 'How CV Prime collects, uses, stores, and protects your personal data, CV content, API keys, and payment information.',
};

export default function PrivacyPage(): JSX.Element {
  return (
    <LegalPage
      badge="Legal"
      title="Privacy policy"
      subtitle="We believe in transparency. This policy explains exactly what data CV Prime collects, why we collect it, and what control you have over it."
      lastUpdated="13 June 2026"
    >
      <LegalSection title="1. Who is responsible for your data">
        <p>
          CV Prime is operated by Shishir Babu, Ernakulam, Kerala, India. For any privacy-related
          queries, contact us at{' '}
          <a href="mailto:support@cv-prime.in" className="font-semibold text-cyan-700 underline-offset-2 hover:underline">
            support@cv-prime.in
          </a>.
        </p>
      </LegalSection>

      <LegalSection title="2. Data we collect">
        <p><strong>Account data</strong> — name, email address, and authentication tokens collected when you sign up via email or Google OAuth (managed by Supabase Auth).</p>
        <p><strong>CV content</strong> — the CV text, job descriptions, bullets, and personal details you enter or upload when building CVs. This is stored in our Supabase database and is tied to your account.</p>
        <p><strong>Uploaded files</strong> — PDF, DOCX, or TXT files you upload for CV parsing. These are processed in memory and not stored permanently on our servers.</p>
        <p><strong>Usage data</strong> — which features you use, ATS scores generated, exports downloaded, and plan status. Used to operate the service and prevent abuse.</p>
        <p><strong>Payment data</strong> — payment status, Cashfree order IDs, and subscription tier. We do not store card numbers, bank details, or UPI credentials; Cashfree handles all payment processing.</p>
        <p><strong>Analytics data</strong> — product events (e.g. &quot;cv_created&quot;, &quot;pdf_exported&quot;) tracked via PostHog only after you explicitly consent. CV text and API keys are never sent to analytics.</p>
        <p><strong>Log data</strong> — IP addresses, browser type, and request logs retained briefly by our infrastructure providers (Vercel, Supabase) for security and debugging.</p>
      </LegalSection>

      <LegalSection title="3. How we use your data">
        <LegalList items={[
          'To provide, operate, and improve the CV Prime service.',
          'To authenticate your account and maintain your session.',
          'To store and retrieve your CVs and preferences.',
          'To enforce subscription limits and process payments.',
          'To send transactional emails (account confirmation, payment receipts).',
          'To detect and prevent fraud, abuse, and security incidents.',
          'To analyse aggregate product usage and improve features (only with consent).',
        ]} />
        <p>We do not sell your personal data to third parties. We do not use your CV content for advertising targeting.</p>
      </LegalSection>

      <LegalSection title="4. OpenRouter API keys">
        <p>When you save an OpenRouter API key to CV Prime:</p>
        <LegalList items={[
          'The key is encrypted using AES-256 before being stored in our database.',
          'The plaintext key is never logged, never sent to analytics, and never exposed to the browser after saving.',
          'When you use an AI feature, we decrypt the key server-side and forward your request to OpenRouter. Your CV text and job description are included in that request.',
          'OpenRouter processes your content under its own privacy policy.',
          'You can delete your key from CV Prime at any time in Settings. Deleting it from CV Prime does not revoke it from OpenRouter — you must do that in your OpenRouter dashboard.',
        ]} />
      </LegalSection>

      <LegalSection title="5. AI processing and third-party providers">
        <p>When you use AI features (ATS scoring, CV generation, bullet rewriting), your CV text and job description are sent to OpenRouter and routed to an underlying AI model provider (such as Anthropic, OpenAI, or Mistral depending on the model selected). These providers process your data subject to their own terms and privacy policies.</p>
        <p>We recommend you:</p>
        <LegalList items={[
          'Avoid including sensitive personal information (national ID numbers, financial account details, medical history) in your CV or job description inputs.',
          'Use a dedicated low-credit OpenRouter key and revoke it after use.',
        ]} />
        <p>CV Prime does not use your CV content to train any AI model.</p>
      </LegalSection>

      <LegalSection title="6. Cookies and tracking">
        <p>We use the following cookies and similar technologies:</p>
        <LegalList items={[
          'Authentication cookies — set by Supabase to maintain your logged-in session. Required for the service to function.',
          'Preference cookies — remember your consent choices.',
          'Analytics cookies — set by PostHog only if you accept analytics. You can withdraw consent at any time.',
        ]} />
        <p>See our <a href="/cookies" className="font-semibold text-cyan-700 underline-offset-2 hover:underline">Cookie policy</a> for full details.</p>
      </LegalSection>

      <LegalSection title="7. Data sharing">
        <p>We share your data only with the following categories of recipients and only to the extent necessary:</p>
        <LegalList items={[
          'Supabase — database and authentication hosting (EU/US infrastructure).',
          'Vercel — web hosting and edge functions (US infrastructure).',
          'Cashfree — payment processing (India). Subject to Cashfree\'s Privacy Policy.',
          'OpenRouter and its underlying model providers — AI feature processing.',
          'PostHog — product analytics, with consent only.',
          'Law enforcement or regulators — if required by applicable law or legal process.',
        ]} />
      </LegalSection>

      <LegalSection title="8. Data retention">
        <LegalList items={[
          'Account data is retained while your account is active.',
          'CV content is retained until you delete the CV or your account.',
          'On account deletion, your data is removed from active storage within 30 days.',
          'Anonymised aggregate analytics may be retained indefinitely.',
          'Payment records are retained for 7 years as required by Indian accounting regulations.',
          'Uploaded files (PDF/DOCX) are processed in memory and not stored beyond the request.',
        ]} />
      </LegalSection>

      <LegalSection title="9. Your rights">
        <p>Under applicable Indian law (Information Technology Act 2000, IT Amendment Act 2008, and the Digital Personal Data Protection Act 2023) and, where applicable, GDPR, you have the right to:</p>
        <LegalList items={[
          'Access the personal data we hold about you.',
          'Correct inaccurate or incomplete data.',
          'Request deletion of your account and associated data.',
          'Withdraw consent for analytics at any time.',
          'Object to processing where we rely on legitimate interests.',
          'Receive a copy of your data in a portable format.',
        ]} />
        <p>To exercise any of these rights, email <a href="mailto:support@cv-prime.in" className="font-semibold text-cyan-700 underline-offset-2 hover:underline">support@cv-prime.in</a>. We will respond within 30 days.</p>
      </LegalSection>

      <LegalSection title="10. Children's privacy">
        <p>CV Prime is not directed at children under 18. We do not knowingly collect personal data from anyone under 18. If you believe a child has provided us with data, contact us immediately and we will delete it.</p>
      </LegalSection>

      <LegalSection title="11. Security">
        <p>We take reasonable technical and organisational measures to protect your data, including encryption of API keys, HTTPS for all data in transit, and row-level security policies in our database. No internet transmission is 100% secure. In the event of a data breach affecting your rights, we will notify you without undue delay.</p>
      </LegalSection>

      <LegalSection title="12. Changes to this policy">
        <p>We may update this policy. If we make material changes, we will notify you by email or via a notice in the product at least 14 days before the changes take effect.</p>
      </LegalSection>

      <LegalSection title="13. Contact and grievance officer">
        <p>For privacy queries or to exercise your rights, contact:</p>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
          <p className="font-semibold text-slate-900">Shishir Babu — Grievance Officer, CV Prime</p>
          <p className="mt-1">Ernakulam, Kerala, India</p>
          <p className="mt-1">
            Email:{' '}
            <a href="mailto:support@cv-prime.in" className="font-semibold text-cyan-700 underline-offset-2 hover:underline">
              support@cv-prime.in
            </a>
          </p>
          <p className="mt-1">Response time: within 30 days of receiving a written complaint.</p>
        </div>
      </LegalSection>
    </LegalPage>
  );
}
