import { render, screen, waitFor } from '@testing-library/react';
import LoginForm from '@/components/auth/LoginForm';
import { createClient } from '@/lib/supabase/client';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn(), refresh: jest.fn() }),
  useSearchParams: () => new URLSearchParams(),
}));

// Relative path, not the `@/...` alias: jest.mock's resolver doesn't apply
// this project's tsconfig path mapping (only the real-import transform
// does), so `jest.mock('@/...')` here would register an orphaned mock that
// LoginForm's real `@/lib/supabase/client` import never resolves to.
jest.mock('../lib/supabase/client', () => ({
  createClient: jest.fn(),
}));

describe('LoginForm Supabase init failure', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('shows a retry message instead of hanging on the loading skeleton forever', async () => {
    // Regression test: createClient() throws when Supabase env vars are
    // missing/invalid. The mount effect used to call it unguarded, so the
    // throw was uncaught and `supabase` state never left null — the whole
    // sign-in page (the product's entire re-entry path) stayed on the
    // skeleton loader forever with no visible error and no way to recover.
    (createClient as jest.Mock).mockImplementation(() => {
      throw new Error('Supabase browser environment variables are not configured');
    });

    render(<LoginForm />);

    await waitFor(() => {
      expect(
        screen.getByText(/sign-in is temporarily unavailable/i)
      ).toBeInTheDocument();
    });
    expect(screen.getByRole('button', { name: /retry/i })).toBeInTheDocument();
  });

  it('renders the real sign-in form once Supabase initializes normally', async () => {
    (createClient as jest.Mock).mockReturnValue({});

    render(<LoginForm />);

    await waitFor(() => {
      expect(screen.getByLabelText('Email')).toBeInTheDocument();
    });
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });
});
