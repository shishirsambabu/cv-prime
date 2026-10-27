import { readFileSync } from 'fs';
import { join } from 'path';

describe('root layout script loading', () => {
  it('does not eagerly load the Cashfree payment SDK on every page', () => {
    // Regression test: app/layout.tsx used to preload sdk.cashfree.com via
    // next/script on every single route — all ~800 marketing/SEO pages,
    // /blog, /terms, /privacy, /tools/* included — even though only the
    // checkout buttons (SubscriptionCheckoutButton, LTDCheckoutButton) need
    // it, and both already lazy-load the script themselves on demand. The
    // preload also defeated publicProviderReferences.test.ts's intent of
    // keeping the payment provider name out of public page network activity.
    const source = readFileSync(join(process.cwd(), 'app/layout.tsx'), 'utf8');
    expect(source).not.toMatch(/sdk\.cashfree\.com/);
  });
});
