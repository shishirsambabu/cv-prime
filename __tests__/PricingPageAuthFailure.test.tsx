/**
 * Regression coverage: PricingPage (a public marketing page — the site's
 * highest-conversion surface) called `createClient().auth.getUser()`
 * directly and unguarded to decide whether to show the checkout button or a
 * signed-out CTA. `createClient()` throws synchronously whenever the
 * Supabase env vars are missing (this sandbox has none) or, in production,
 * whenever the browser/server env is misconfigured — and that throw was
 * never caught, so it propagated out of the Server Component render and
 * 500'd the *entire* /pricing page for every visitor, logged in or not.
 *
 * This mirrors the middleware fix in a prior round (an outage must not take
 * down the whole authenticated app) but covers a distinct call site the
 * earlier round did not touch: a public page reachable with no session at
 * all.
 *
 * Relative paths, not the `@/...` alias: jest.mock's own resolver doesn't
 * apply this project's tsconfig path mapping (only the SWC/Next transform
 * used for real imports does), so `jest.mock('@/...')` here would silently
 * register an orphaned mock that nothing consumes. See CVEditor.test.tsx.
 */

jest.mock('../lib/supabase/server', () => ({
  createClient: () => {
    throw new Error('Supabase server environment variables are not configured');
  },
}));

jest.mock('next/headers', () => ({
  headers: () => ({ get: () => 'IN' }),
}));

import { render, screen } from '@testing-library/react';
import PricingPage from '../app/(marketing)/pricing/page';

describe('PricingPage Supabase-outage handling', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the page (signed-out) instead of throwing when Supabase is unavailable', async () => {
    const element = await PricingPage();
    render(element);

    // The page rendered at all (no uncaught throw reached the test), and
    // degraded to the signed-out pricing CTA rather than the authenticated
    // checkout flow, since a thrown getUser() can't confirm a session.
    expect(screen.getByText('Lifetime Pro')).toBeInTheDocument();
    expect(screen.getByText('Sign in to unlock')).toBeInTheDocument();
  });
});
