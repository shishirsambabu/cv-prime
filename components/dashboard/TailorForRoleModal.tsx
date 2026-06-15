'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Briefcase, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TailorForRoleModalProps {
  cvId: string;
  cvTitle: string;
  onClose: () => void;
}

export function TailorForRoleModal({ cvId, cvTitle, onClose }: TailorForRoleModalProps): JSX.Element {
  const router = useRouter();
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    const trimmedRole = role.trim();
    const trimmedCompany = company.trim();
    if (!trimmedRole) {
      setError('Enter a target role.');
      return;
    }

    const title = trimmedCompany
      ? `${trimmedRole} at ${trimmedCompany}`
      : trimmedRole;

    setLoading(true);
    setError(null);

    const res = await fetch(`/api/cvs/${cvId}/clone`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });

    setLoading(false);

    if (!res.ok) {
      setError('Could not create role version. Try again.');
      return;
    }

    const { cv } = (await res.json()) as { cv: { id: string } };
    router.push(`/editor/${cv.id}`);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="tailor-title"
        className="relative w-full max-w-md overflow-hidden rounded-[2rem] bg-white p-6 shadow-2xl shadow-slate-950/30 sm:p-8"
      >
        <button
          type="button"
          className="absolute right-5 top-5 rounded-full border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-50"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-800">
          <Briefcase className="h-3.5 w-3.5" />
          Role version
        </div>

        <h2 id="tailor-title" className="mt-4 font-display text-3xl font-bold tracking-[-0.04em]">
          Tailor for a role
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Creates a copy of <span className="font-semibold text-slate-700">{cvTitle}</span> named
          for the target role. Edit it independently without touching your master CV.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="tailor-role" className="mb-1.5 block text-sm font-bold text-slate-700">
              Target role <span className="text-rose-500">*</span>
            </label>
            <input
              id="tailor-role"
              type="text"
              placeholder="e.g. Software Engineer"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none transition focus:border-cyan-500 focus:bg-white"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              maxLength={60}
              required
            />
          </div>
          <div>
            <label htmlFor="tailor-company" className="mb-1.5 block text-sm font-bold text-slate-700">
              Company <span className="text-slate-400 font-normal">(optional)</span>
            </label>
            <input
              id="tailor-company"
              type="text"
              placeholder="e.g. Google"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none transition focus:border-cyan-500 focus:bg-white"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              maxLength={60}
            />
          </div>

          {role.trim() ? (
            <p className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600">
              Will create:{' '}
              <span className="text-slate-950">
                {company.trim() ? `${role.trim()} at ${company.trim()}` : role.trim()}
              </span>
            </p>
          ) : null}

          {error ? (
            <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">
              {error}
            </p>
          ) : null}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Creating...' : 'Create role version'}
          </Button>
        </form>
      </section>
    </div>
  );
}
