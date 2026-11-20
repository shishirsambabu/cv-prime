import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import LoginForm from '@/components/auth/LoginForm';
import { createClient } from '@/lib/supabase/client';

// Regression coverage: `resetPasswordForEmail` sent users to
// `/login?mode=new-password` (via /auth/callback, which exchanges the
// recovery code for a session first), but nothing in this component ever
// checked for `mode=new-password` — only `mode=reset` (the "email me a
// reset link" form) was handled. A user who requested a password reset,
// received the email, and clicked the link landed on an ordinary sign-in
// screen with no field to type a new password into and no call anywhere to
// `auth.updateUser()`. The reset flow looked complete (email sent, link
// opened the app) but a user could never actually finish it.

const push = jest.fn();
const refresh = jest.fn();
let searchParams = new URLSearchParams();

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push, refresh }),
  useSearchParams: () => searchParams,
}));

// Relative path, not the `@/...` alias: jest.mock's resolver doesn't apply
// this project's tsconfig path mapping. See LoginForm.test.tsx.
jest.mock('../lib/supabase/client', () => ({
  createClient: jest.fn(),
}));

describe('LoginForm — mode=new-password', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    searchParams = new URLSearchParams('mode=new-password');
  });

  it('renders a field to set a new password instead of the ordinary sign-in form', async () => {
    (createClient as jest.Mock).mockReturnValue({
      auth: { updateUser: jest.fn() },
    });

    render(<LoginForm />);

    await waitFor(() => {
      expect(screen.getByLabelText('New password')).toBeInTheDocument();
    });
    expect(screen.queryByLabelText('Email')).not.toBeInTheDocument();
  });

  it('calls auth.updateUser with the typed password and redirects on success', async () => {
    const updateUser = jest.fn().mockResolvedValue({ error: null });
    (createClient as jest.Mock).mockReturnValue({ auth: { updateUser } });

    render(<LoginForm />);

    const input = await screen.findByLabelText('New password');
    fireEvent.change(input, { target: { value: 'a-new-password-1' } });
    fireEvent.click(screen.getByRole('button', { name: /save new password/i }));

    await waitFor(() => {
      expect(updateUser).toHaveBeenCalledWith({ password: 'a-new-password-1' });
    });
    await waitFor(() => {
      expect(push).toHaveBeenCalledWith('/dashboard');
    });
    expect(refresh).toHaveBeenCalled();
  });

  it('shows the returned error instead of redirecting when updateUser fails', async () => {
    const updateUser = jest.fn().mockResolvedValue({ error: { message: 'Session expired.' } });
    (createClient as jest.Mock).mockReturnValue({ auth: { updateUser } });

    render(<LoginForm />);

    const input = await screen.findByLabelText('New password');
    fireEvent.change(input, { target: { value: 'a-new-password-1' } });
    fireEvent.click(screen.getByRole('button', { name: /save new password/i }));

    await waitFor(() => {
      expect(screen.getByText('Session expired.')).toBeInTheDocument();
    });
    expect(push).not.toHaveBeenCalled();
  });
});
