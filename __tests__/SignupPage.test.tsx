import { render, screen, waitFor } from '@testing-library/react';
import SignupPage from '@/app/(auth)/signup/page';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn(), refresh: jest.fn() }),
}));

jest.mock('@/lib/clientAnalytics', () => ({ captureClientEvent: jest.fn() }), {
  virtual: true,
});

// Relative path, not the `@/...` alias: jest.mock's resolver doesn't apply
// this project's tsconfig path mapping (only the real-import transform
// does), so `jest.mock('@/...')` here would register an orphaned mock that
// SignupPage's real `@/lib/supabase/client` import never resolves to.
jest.mock('../lib/supabase/client', () => ({
  createClient: jest.fn(),
}));

import { createClient } from '@/lib/supabase/client';

describe('SignupPage Supabase init failure', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('shows a retry message instead of hanging on the loading skeleton forever', async () => {
    // Regression test: same failure class as LoginForm — createClient() threw
    // unguarded inside the mount effect, so an env/config problem left the
    // entire signup page (the whole product's acquisition funnel) stuck on
    // the skeleton loader forever with no visible error and no recovery.
    (createClient as jest.Mock).mockImplementation(() => {
      throw new Error('Supabase browser environment variables are not configured');
    });

    render(<SignupPage />);

    await waitFor(() => {
      expect(
        screen.getByText(/sign-up is temporarily unavailable/i)
      ).toBeInTheDocument();
    });
    expect(screen.getByRole('button', { name: /retry/i })).toBeInTheDocument();
  });

  it('renders the real signup form once Supabase initializes normally', async () => {
    (createClient as jest.Mock).mockReturnValue({});

    render(<SignupPage />);

    await waitFor(() => {
      expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    });
  });
});
