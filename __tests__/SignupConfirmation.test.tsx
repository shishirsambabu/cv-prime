import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import SignupPage from '@/app/(auth)/signup/page';
import { createClient } from '@/lib/supabase/client';

const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push, refresh: jest.fn() }),
}));

jest.mock('../lib/clientAnalytics', () => ({ captureClientEvent: jest.fn() }));

// Relative path: see SignupPage.test.tsx.
jest.mock('../lib/supabase/client', () => ({
  createClient: jest.fn(),
}));

const signUp = jest.fn();

async function submitSignup(): Promise<void> {
  render(<SignupPage />);
  fireEvent.change(await screen.findByLabelText('Full name'), { target: { value: 'Asha Rao' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'asha@example.com' } });
  fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'a-long-password' } });

  await act(async () => {
    fireEvent.click(screen.getByRole('button', { name: /create account/i }));
  });
  await waitFor(() => expect(signUp).toHaveBeenCalledTimes(1));
}

beforeEach(() => {
  jest.clearAllMocks();
  (createClient as jest.Mock).mockReturnValue({ auth: { signUp } });
});

describe('SignupPage after signUp succeeds', () => {
  it('tells the user to confirm their email when no session comes back', async () => {
    // Regression: with email confirmation on, signUp succeeds without a
    // session. The page navigated to the workspace anyway and the middleware
    // sent the new user to the sign-in screen with no explanation.
    signUp.mockResolvedValue({ data: { user: { id: 'u1' }, session: null }, error: null });

    await submitSignup();

    expect(await screen.findByRole('status')).toHaveTextContent(/check your inbox/i);
    expect(screen.getByRole('status')).toHaveTextContent('asha@example.com');
    expect(push).not.toHaveBeenCalled();
    expect(screen.getByRole('button', { name: /create account/i })).toBeEnabled();
  });

  it('goes into the workspace when a session comes back', async () => {
    signUp.mockResolvedValue({
      data: { user: { id: 'u1' }, session: { access_token: 't' } },
      error: null,
    });

    await submitSignup();

    await waitFor(() => expect(push).toHaveBeenCalledWith('/dashboard'));
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('shows the error and does not navigate when signUp fails', async () => {
    signUp.mockResolvedValue({
      data: { user: null, session: null },
      error: { message: 'Password is too weak' },
    });

    await submitSignup();

    expect(await screen.findByRole('alert')).toHaveTextContent('Password is too weak');
    expect(push).not.toHaveBeenCalled();
  });
});
