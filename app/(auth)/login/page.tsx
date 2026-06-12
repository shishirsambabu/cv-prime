import { Suspense } from 'react';
import type { Metadata } from 'next';
import LoginForm from '@/components/auth/LoginForm';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Sign in',
  description: 'Sign in to your CV Prime workspace to build, tailor, and export CVs.',
};

export default function LoginPage(): JSX.Element {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#f6f9fc] px-5 py-12">
          <section className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold text-slate-600">Loading sign in form...</p>
          </section>
        </main>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
