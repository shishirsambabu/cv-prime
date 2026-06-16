import type { Metadata } from 'next';
import { LegalPage, LegalSection } from '@/components/marketing/LegalPage';

export const metadata: Metadata = {
  title: 'Cookie policy — CV Prime',
  description: 'How CV Prime uses cookies and similar technologies, and how to control them.',
};

const cookieTable = [
  {
    name: 'sb-*',
    provider: 'Supabase',
    purpose: 'Authentication session — keeps you logged in across page loads.',
    type: 'Strictly necessary',
    expiry: 'Session / 7 days',
  },
  {
    name: 'cv-prime-analytics-consent',
    provider: 'CV Prime',
    purpose: 'Stores your analytics consent preference (accepted or declined).',
    type: 'Preference',
    expiry: 'Persistent (localStorage)',
  },
  {
    name: 'ph_*',
    provider: 'PostHog',
    purpose: 'Product analytics — tracks feature usage to help us improve the product. Only set after consent.',
    type: 'Analytics (opt-in)',
    expiry: '1 year',
  },
  {
    name: '__rzp_*',
    provider: 'Cashfree',
    purpose: 'Payment session integrity during checkout. Only present during a payment flow.',
    type: 'Strictly necessary (payment)',
    expiry: 'Session',
  },
];

export default function CookiesPage(): JSX.Element {
  return (
    <LegalPage
      badge="Legal"
      title="Cookie policy"
      subtitle="This policy explains what cookies and similar technologies CV Prime uses, why, and how you can control them."
      lastUpdated="13 June 2026"
    >
      <LegalSection title="1. What are cookies?">
        <p>Cookies are small text files stored on your device by a website. They are widely used to make websites work, remember your preferences, and provide information to site owners. CV Prime also uses browser localStorage for some preferences.</p>
      </LegalSection>

      <LegalSection title="2. Cookies we use">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200">
                {['Cookie / key', 'Provider', 'Purpose', 'Type', 'Expiry'].map((h) => (
                  <th key={h} className="pb-2 pr-4 font-bold text-slate-900">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {cookieTable.map((row) => (
                <tr key={row.name}>
                  <td className="py-2.5 pr-4 font-mono font-semibold text-slate-800">{row.name}</td>
                  <td className="py-2.5 pr-4 text-slate-600">{row.provider}</td>
                  <td className="py-2.5 pr-4 text-slate-600">{row.purpose}</td>
                  <td className="py-2.5 pr-4">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      row.type.startsWith('Strictly') ? 'bg-slate-100 text-slate-700' :
                      row.type.startsWith('Analytics') ? 'bg-amber-100 text-amber-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {row.type}
                    </span>
                  </td>
                  <td className="py-2.5 text-slate-600">{row.expiry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection title="3. Strictly necessary cookies">
        <p>Authentication cookies set by Supabase are required for you to log in and use CV Prime. They cannot be disabled without breaking the service. We do not need your consent to set these as they are essential to the service you have requested.</p>
      </LegalSection>

      <LegalSection title="4. Analytics cookies">
        <p>We use PostHog to understand how people use CV Prime so we can improve it. These cookies are only set after you explicitly accept analytics in the consent banner. They track events like which features you use — never the content of your CV or any personal identifiers beyond a pseudonymous PostHog ID.</p>
        <p>You can withdraw consent at any time by clicking the cookie settings link in the footer or by clearing your browser&apos;s localStorage.</p>
      </LegalSection>

      <LegalSection title="5. Third-party cookies">
        <p>Cashfree may set a session cookie during the payment checkout process to maintain payment state and prevent fraud. This cookie is deleted when the payment session ends.</p>
        <p>We do not use any advertising, tracking, or social media cookies.</p>
      </LegalSection>

      <LegalSection title="6. How to control cookies">
        <p>You can control cookies through several mechanisms:</p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
          <li><strong>Consent banner</strong> — decline analytics when prompted on first visit.</li>
          <li><strong>Browser settings</strong> — all major browsers allow you to block or delete cookies. Note: blocking strictly necessary cookies will prevent login.</li>
          <li><strong>PostHog opt-out</strong> — visit <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer" className="font-semibold text-cyan-700 underline-offset-2 hover:underline">posthog.com/privacy</a> for PostHog-specific opt-out options.</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Changes to this policy">
        <p>We may update this cookie policy when we add or remove technologies. The &quot;Last updated&quot; date at the top reflects the most recent revision.</p>
      </LegalSection>

      <LegalSection title="8. Contact">
        <p>Questions about our use of cookies? Email <a href="mailto:support@cv-prime.in" className="font-semibold text-cyan-700 underline-offset-2 hover:underline">support@cv-prime.in</a>.</p>
      </LegalSection>
    </LegalPage>
  );
}
