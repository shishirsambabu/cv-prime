import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import LoginForm from '@/components/auth/LoginForm';
import { createClient } from '@/lib/supabase/client';

let search = '';
const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push, refresh: jest.fn() }),
  useSearchParams: () => new URLSearchParams(search),
}));

// Relative path: see LoginForm.test.tsx.
jest.mock('../lib/supabase/client', () => ({
  createClient: jest.fn(),
}));

const signInWithOtp = jest.fn();
const updateUser = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
  search = '';
  signInWithOtp.mockResolvedValue({ error: null });
  updateUser.mockResolvedValue({ error: null });
  (createClient as jest.Mock).mockReturnValue({ auth: { signInWithOtp, updateUser } });
});

describe('LoginForm magic link', () => {
  it('sends the link with only an email typed', async () => {
    // Regression: the button validated the whole sign-in form, so it only
    // printed "Enter your password." until a password was typed.
    render(<LoginForm />);
    fireEvent.change(await screen.findByLabelText('Email'), { target: { value: 'asha@example.com' } });

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Send magic link' }));
    });

    await waitFor(() => expect(signInWithOtp).toHaveBeenCalledTimes(1));
    expect(signInWithOtp.mock.calls[0][0].email).toBe('asha@example.com');
    expect(await screen.findByText('Magic link sent. Check your inbox.')).toBeInTheDocument();
    expect(screen.queryByText('Enter your password.')).not.toBeInTheDocument();
  });

  it('asks for the email, and sends nothing, when the email is missing', async () => {
    render(<LoginForm />);
    await screen.findByLabelText('Email');

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Send magic link' }));
    });

    expect(await screen.findByText('Enter a valid email address.')).toBeInTheDocument();
    expect(signInWithOtp).not.toHaveBeenCalled();
  });
});

describe('LoginForm failed email link', () => {
  it('explains a failed link without echoing the error parameter', async () => {
    search = 'error=Call%20%2B1%20555%200100%20to%20unlock%20your%20account';
    render(<LoginForm />);

    const alert = await screen.findByRole('alert');
    expect(alert).toHaveTextContent(/invalid or has expired/i);
    expect(document.body.textContent).not.toContain('555 0100');
  });

  it('shows nothing when there is no error parameter', async () => {
    render(<LoginForm />);
    await screen.findByLabelText('Email');

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});

describe('LoginForm new password', () => {
  it('saves the new password and continues', async () => {
    search = 'mode=new-password&next=%2Fsettings';
    render(<LoginForm />);
    fireEvent.change(await screen.findByLabelText('New password'), {
      target: { value: 'a-brand-new-password' },
    });

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /save new password/i }));
    });

    await waitFor(() => expect(updateUser).toHaveBeenCalledWith({ password: 'a-brand-new-password' }));
    expect(push).toHaveBeenCalledWith('/settings');
  });

  it('tells the user what to do when the recovery session is gone', async () => {
    updateUser.mockResolvedValue({ error: { message: 'Auth session missing!' } });
    search = 'mode=new-password';
    render(<LoginForm />);
    fireEvent.change(await screen.findByLabelText('New password'), {
      target: { value: 'a-brand-new-password' },
    });

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /save new password/i }));
    });

    expect(await screen.findByRole('alert')).toHaveTextContent(/reset link has expired/i);
    expect(push).not.toHaveBeenCalled();
  });
});
