'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { FieldErrors, Resolver } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { z } from 'zod';
import { createClient } from '@/lib/supabase/client';
import { getAuthCallbackUrl, getSafeNextPath } from '@/lib/auth';

const loginSchema = z.object({
  email: z.string().email('Enter a valid email address.'),
  password: z.string().min(1, 'Enter your password.'),
});

const resetSchema = z.object({
  email: z.string().email('Enter a valid email address.'),
});

type LoginValues = z.infer<typeof loginSchema>;
type ResetValues = z.infer<typeof resetSchema>;

const authBenefits = [
  'Create and edit CVs in a private workspace',
  'Switch between free and premium template systems',
  'Prepare for ATS scoring, rewrites, and exports',
];

function createZodResolver<TValues extends Record<string, unknown>>(
  schema: z.ZodType<TValues>
): Resolver<TValues> {
  return async (values) => {
    const result = schema.safeParse(values);

    if (result.success) {
      return { values: result.data, errors: {} };
    }

    const fieldErrors = result.error.flatten().fieldErrors;
    const errors: Record<
      string,
      {
        type: 'manual';
        message: string;
      }
    > = {};

    for (const fieldName of Object.keys(fieldErrors)) {
      const messages =
        fieldErrors[fieldName as keyof typeof fieldErrors] as string[] | undefined;

      if (!messages || messages.length === 0) {
        continue;
      }

      errors[fieldName] = {
        type: 'manual',
        message: messages[0] ?? 'Invalid value.',
      };
    }

    return { values: {}, errors: errors as FieldErrors<TValues> };
  };
}

function AuthProofPanel(): JSX.Element {
  return (
    <aside className="hidden overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20 lg:block">
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300 font-display text-sm font-bold text-slate-950">
            CV
          </span>
          <span className="font-display text-xl font-bold">CV Prime</span>
        </div>
        <div className="mt-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-sm font-bold text-cyan-100">
            <Sparkles className="h-4 w-4" />
            Job search command center
          </div>
          <h2 className="mt-6 font-display text-5xl font-bold leading-[0.98] tracking-[-0.05em]">
            Sign in to keep every CV version under control.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            One workspace for building, tailoring, and preparing CVs before they go to recruiters.
          </p>
        </div>
        <div className="mt-auto space-y-3">
          {authBenefits.map((benefit) => (
            <div key={benefit} className="flex items-start gap-3 rounded-2xl bg-white/[0.07] p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
              <p className="text-sm font-semibold leading-6 text-slate-200">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default function LoginForm(): JSX.Element {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode');
  const nextPath = getSafeNextPath(searchParams.get('next'), '/dashboard');
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);
  const [loadingAction, setLoadingAction] = useState<
    'password' | 'google' | 'magic' | 'reset' | null
  >(null);
  const [supabase, setSupabase] = useState<ReturnType<typeof createClient> | null>(
    null
  );

  const loginForm = useForm<LoginValues>({
    resolver: createZodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const resetForm = useForm<ResetValues>({
    resolver: createZodResolver(resetSchema),
    defaultValues: {
      email: '',
    },
  });

  useEffect(() => {
    setGeneralError(null);
    setInfoMessage(null);
  }, [mode]);

  useEffect(() => {
    setSupabase(createClient());
  }, []);

  if (!supabase) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f6f9fc] px-5 py-12">
        <section className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold text-slate-600">Loading sign in form...</p>
        </section>
      </main>
    );
  }

  async function handleGoogleSignIn(): Promise<void> {
    if (!supabase) {
      return;
    }

    setGeneralError(null);
    setLoadingAction('google');

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: getAuthCallbackUrl(nextPath, window.location.origin),
      },
    });

    if (error) {
      setGeneralError(error.message);
      setLoadingAction(null);
    }
  }

  async function handlePasswordLogin(values: LoginValues): Promise<void> {
    if (!supabase) {
      return;
    }

    setGeneralError(null);
    setLoadingAction('password');

    const { error } = await supabase.auth.signInWithPassword(values);

    if (error) {
      setGeneralError(error.message);
      setLoadingAction(null);
      return;
    }

    router.push(nextPath);
    router.refresh();
  }

  async function handleMagicLink(values: LoginValues): Promise<void> {
    if (!supabase) {
      return;
    }

    setGeneralError(null);
    setInfoMessage(null);
    setLoadingAction('magic');

    const { error } = await supabase.auth.signInWithOtp({
      email: values.email,
      options: {
        emailRedirectTo: getAuthCallbackUrl(nextPath, window.location.origin),
      },
    });

    if (error) {
      setGeneralError(error.message);
      setLoadingAction(null);
      return;
    }

    setInfoMessage('Magic link sent. Check your inbox.');
    setLoadingAction(null);
  }

  async function handlePasswordReset(values: ResetValues): Promise<void> {
    if (!supabase) {
      return;
    }

    setGeneralError(null);
    setInfoMessage(null);
    setLoadingAction('reset');

    const { error } = await supabase.auth.resetPasswordForEmail(values.email, {
      redirectTo: getAuthCallbackUrl('/login?mode=new-password', window.location.origin),
    });

    if (error) {
      setGeneralError(error.message);
      setLoadingAction(null);
      return;
    }

    setInfoMessage('Password reset email sent.');
    setLoadingAction(null);
  }

  const isResetMode = mode === 'reset';

  return (
    <main className="min-h-screen bg-[#f6f9fc] px-5 py-8">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <AuthProofPanel />

        <section className="flex items-center justify-center">
          <div className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/8 sm:p-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-700">
                Welcome back
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em] text-slate-950">
                {isResetMode ? 'Reset your password' : 'Sign in to CV Prime'}
              </h1>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {isResetMode
                  ? 'We will send a password reset link to your email.'
                  : 'Use your email, a magic link, or Google to continue.'}
              </p>
            </div>

            {generalError ? (
              <p className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                {generalError}
              </p>
            ) : null}

            {infoMessage ? (
              <p className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                {infoMessage}
              </p>
            ) : null}

            {isResetMode ? (
              <form
                className="mt-6 space-y-4"
                onSubmit={resetForm.handleSubmit(handlePasswordReset)}
              >
                <div className="space-y-2">
                  <label htmlFor="reset-email" className="text-sm font-bold">
                    Email
                  </label>
                  <input
                    id="reset-email"
                    type="email"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-0 transition focus:border-cyan-500"
                    {...resetForm.register('email')}
                  />
                  {resetForm.formState.errors.email ? (
                    <p className="text-sm font-semibold text-red-600">
                      {resetForm.formState.errors.email.message}
                    </p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  disabled={loadingAction === 'reset'}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loadingAction === 'reset' ? 'Sending reset email...' : 'Send reset link'}
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={() => router.push('/login')}
                  className="w-full text-sm font-bold text-slate-600 underline-offset-4 hover:underline"
                >
                  Back to sign in
                </button>
              </form>
            ) : (
              <>
                <form
                  className="mt-6 space-y-4"
                  onSubmit={loginForm.handleSubmit(handlePasswordLogin)}
                >
                  <div className="space-y-2">
                    <label htmlFor="login-email" className="text-sm font-bold">
                      Email
                    </label>
                    <input
                      id="login-email"
                      type="email"
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-0 transition focus:border-cyan-500"
                      {...loginForm.register('email')}
                    />
                    {loginForm.formState.errors.email ? (
                      <p className="text-sm font-semibold text-red-600">
                        {loginForm.formState.errors.email.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="login-password" className="text-sm font-bold">
                      Password
                    </label>
                    <input
                      id="login-password"
                      type="password"
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-0 transition focus:border-cyan-500"
                      {...loginForm.register('password')}
                    />
                    {loginForm.formState.errors.password ? (
                      <p className="text-sm font-semibold text-red-600">
                        {loginForm.formState.errors.password.message}
                      </p>
                    ) : null}
                  </div>

                  <button
                    type="submit"
                    disabled={loadingAction === 'password'}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loadingAction === 'password' ? 'Signing in...' : 'Sign in'}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>

                <div className="mt-4 flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    disabled={loadingAction === 'google'}
                    className="w-full rounded-full border border-slate-300 px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loadingAction === 'google' ? 'Opening Google...' : 'Continue with Google'}
                  </button>
                  <button
                    type="button"
                    onClick={loginForm.handleSubmit(handleMagicLink)}
                    disabled={loadingAction === 'magic'}
                    className="w-full rounded-full border border-slate-300 px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loadingAction === 'magic' ? 'Sending magic link...' : 'Send magic link'}
                  </button>
                </div>

                <div className="mt-6 flex flex-col gap-2 text-sm text-slate-600">
                  <button
                    type="button"
                    onClick={() => router.push(`/login?mode=reset&next=${encodeURIComponent(nextPath)}`)}
                    className="w-fit font-semibold underline-offset-4 hover:underline"
                  >
                    Forgot password?
                  </button>
                  <p>
                    New here?{' '}
                    <button
                      type="button"
                      onClick={() => router.push(`/signup?next=${encodeURIComponent(nextPath)}`)}
                      className="font-bold text-slate-950 underline-offset-4 hover:underline"
                    >
                      Create an account
                    </button>
                  </p>
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
