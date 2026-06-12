'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { FieldErrors, Resolver } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { z } from 'zod';
import { createClient } from '@/lib/supabase/client';
import { getAuthCallbackUrl, getSafeNextPath } from '@/lib/auth';
import { captureClientEvent } from '@/lib/clientAnalytics';

export const dynamic = 'force-dynamic';

const signupSchema = z.object({
  fullName: z.string().min(2, 'Enter your full name.'),
  email: z.string().email('Enter a valid email address.'),
  password: z.string().min(8, 'Use at least 8 characters.'),
});

type SignupValues = z.infer<typeof signupSchema>;

const starterSteps = [
  'Create a secure workspace',
  'Build the first master CV',
  'Choose a template and start tailoring',
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

function SignupProofPanel(): JSX.Element {
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
            Start with a real workflow
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.98] tracking-[-0.05em]">
            Build a CV that explains why it should get shortlisted.
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Create the workspace first. Then build, preview, tailor, and prepare the CV for export.
          </p>
        </div>
        <div className="mt-auto space-y-3">
          {starterSteps.map((step) => (
            <div key={step} className="flex items-start gap-3 rounded-2xl bg-white/[0.07] p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
              <p className="text-sm font-semibold leading-6 text-slate-200">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default function SignupPage(): JSX.Element {
  const router = useRouter();
  const [nextPath, setNextPath] = useState('/ai-cv');
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [supabase, setSupabase] = useState<ReturnType<typeof createClient> | null>(
    null
  );

  const form = useForm<SignupValues>({
    resolver: createZodResolver(signupSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    setSupabase(createClient());
    setNextPath(getSafeNextPath(new URLSearchParams(window.location.search).get('next'), '/ai-cv'));
  }, []);

  if (!supabase) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f6f9fc] px-5 py-12">
        <section className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold text-slate-600">Loading sign up form...</p>
        </section>
      </main>
    );
  }

  async function handleSignup(values: SignupValues): Promise<void> {
    if (!supabase) {
      return;
    }

    setGeneralError(null);
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          full_name: values.fullName,
        },
        emailRedirectTo: getAuthCallbackUrl(nextPath),
      },
    });

    if (error) {
      setGeneralError(error.message);
      setLoading(false);
      return;
    }

    captureClientEvent('user_signed_up', { plan: 'free', source: 'email' });
    router.push(nextPath);
    router.refresh();
  }

  async function handleGoogleSignIn(): Promise<void> {
    if (!supabase) {
      return;
    }

    setGeneralError(null);
    setLoading(true);

    captureClientEvent('user_signed_up', { plan: 'free', source: 'google' });
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: getAuthCallbackUrl(nextPath),
      },
    });

    if (error) {
      setGeneralError(error.message);
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f6f9fc] px-5 py-8">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <SignupProofPanel />

        <section className="flex items-center justify-center">
          <div className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/8 sm:p-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-700">
                Get started
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em] text-slate-950">
                Create your CV Prime account
              </h1>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Set up your workspace first. Then continue straight into the AI CV flow.
              </p>
            </div>

            {generalError ? (
              <p className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                {generalError}
              </p>
            ) : null}

            <form
              className="mt-6 space-y-4"
              onSubmit={form.handleSubmit(handleSignup)}
            >
              <div className="space-y-2">
                <label htmlFor="full-name" className="text-sm font-bold">
                  Full name
                </label>
                <input
                  id="full-name"
                  type="text"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-0 transition focus:border-cyan-500"
                  {...form.register('fullName')}
                />
                {form.formState.errors.fullName ? (
                  <p className="text-sm font-semibold text-red-600">
                    {form.formState.errors.fullName.message}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2">
                <label htmlFor="signup-email" className="text-sm font-bold">
                  Email
                </label>
                <input
                  id="signup-email"
                  type="email"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-0 transition focus:border-cyan-500"
                  {...form.register('email')}
                />
                {form.formState.errors.email ? (
                  <p className="text-sm font-semibold text-red-600">
                    {form.formState.errors.email.message}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2">
                <label htmlFor="signup-password" className="text-sm font-bold">
                  Password
                </label>
                <input
                  id="signup-password"
                  type="password"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-0 transition focus:border-cyan-500"
                  {...form.register('password')}
                />
                {form.formState.errors.password ? (
                  <p className="text-sm font-semibold text-red-600">
                    {form.formState.errors.password.message}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? 'Creating account...' : 'Create account'}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-4">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full rounded-full border border-slate-300 px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Continue with Google
              </button>
            </div>

            <p className="mt-6 text-sm text-slate-600">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => router.push(`/login?next=${encodeURIComponent(nextPath)}`)}
                className="font-bold text-slate-950 underline-offset-4 hover:underline"
              >
                Sign in
              </button>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
