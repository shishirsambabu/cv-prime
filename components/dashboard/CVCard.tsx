'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  ArrowUpRight,
  Briefcase,
  Check,
  Clock3,
  Copy,
  GaugeCircle,
  Lock,
  Pencil,
  Share2,
  Trash2,
} from 'lucide-react';
import type { Plan, TemplateId } from '@/types/cv.types';
import { TailorForRoleModal } from '@/components/dashboard/TailorForRoleModal';
import { UpgradeModal } from '@/components/payments/UpgradeModal';

interface CVCardProps {
  id: string;
  title: string;
  templateId: TemplateId;
  lastEdited: string | null;
  atsScore: number | null;
  isPublic: boolean;
  plan: Plan;
}

const templateMeta: Record<
  TemplateId,
  {
    label: string;
    surfaceClassName: string;
    accentClassName: string;
    sidebarClassName: string;
  }
> = {
  classic: {
    label: 'Classic',
    surfaceClassName: 'bg-[#fbfaf7] text-[#2f281f] border-[#cabca8]',
    accentClassName: 'bg-[#b9a992]',
    sidebarClassName: 'bg-[#efe6d8]',
  },
  modern: {
    label: 'Modern',
    surfaceClassName: 'bg-white text-slate-950 border-cyan-200',
    accentClassName: 'bg-cyan-500',
    sidebarClassName: 'bg-slate-950',
  },
  minimal: {
    label: 'Minimal',
    surfaceClassName: 'bg-white text-slate-950 border-slate-200',
    accentClassName: 'bg-slate-400',
    sidebarClassName: 'bg-slate-100',
  },
  executive: {
    label: 'Executive',
    surfaceClassName: 'bg-[#fbfbfa] text-[#15120f] border-[#b99a55]',
    accentClassName: 'bg-amber-500',
    sidebarClassName: 'bg-[#f0e6cc]',
  },
  creative: {
    label: 'Creative',
    surfaceClassName: 'bg-rose-50 text-rose-950 border-rose-200',
    accentClassName: 'bg-rose-500',
    sidebarClassName: 'bg-rose-600',
  },
  technical: {
    label: 'Technical',
    surfaceClassName: 'bg-emerald-50 text-emerald-950 border-emerald-200',
    accentClassName: 'bg-emerald-500',
    sidebarClassName: 'bg-emerald-950',
  },
  academic: {
    label: 'Academic',
    surfaceClassName: 'bg-stone-50 text-stone-950 border-stone-200',
    accentClassName: 'bg-stone-500',
    sidebarClassName: 'bg-stone-200',
  },
  premium: {
    label: 'Premium',
    surfaceClassName: 'bg-slate-950 text-white border-amber-300',
    accentClassName: 'bg-amber-300',
    sidebarClassName: 'bg-amber-300',
  },
};

function formatRelativeTime(value: string | null): string {
  if (!value) {
    return 'Just created';
  }

  const editedAt = new Date(value);
  const diffInSeconds = Math.floor((Date.now() - editedAt.getTime()) / 1000);
  const absDiff = Math.abs(diffInSeconds);

  if (absDiff < 60) {
    return 'just now';
  }

  const minutes = Math.floor(absDiff / 60);
  if (minutes < 60) {
    return `${minutes}m ago`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours}h ago`;
  }

  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function scoreClassName(score: number | null): string {
  if (score === null) {
    return 'border-slate-200 bg-slate-50 text-slate-500';
  }

  if (score >= 80) {
    return 'border-emerald-200 bg-emerald-50 text-emerald-700';
  }

  if (score >= 60) {
    return 'border-amber-200 bg-amber-50 text-amber-700';
  }

  return 'border-rose-200 bg-rose-50 text-rose-700';
}

function UpgradeGate({ onClose }: { onClose: () => void }): JSX.Element {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-xl rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          className="absolute right-5 top-5 rounded-full border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-50"
          onClick={onClose}
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        </button>
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-amber-800">
          <Lock className="h-3.5 w-3.5" />
          Pro feature
        </div>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.04em]">
          Role-specific CV versions
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Clone any CV and tailor it for a specific role and company. Keep your master CV
          clean while applying with targeted versions. Upgrade to Pro to unlock this.
        </p>
        <div className="mt-6">
          <UpgradeModal triggerLabel="Upgrade to Pro — unlock role versions" />
        </div>
      </div>
    </div>
  );
}

export function CVCard({
  id,
  title,
  templateId,
  lastEdited,
  atsScore,
  isPublic,
  plan,
}: CVCardProps): JSX.Element {
  const router = useRouter();
  const template = templateMeta[templateId];
  const [draftTitle, setDraftTitle] = useState(title);
  const [editingTitle, setEditingTitle] = useState(false);
  const [publicEnabled, setPublicEnabled] = useState(isPublic);
  const [pendingAction, setPendingAction] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [tailorOpen, setTailorOpen] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);

  async function updateCV(payload: { title?: string; isPublic?: boolean }): Promise<boolean> {
    setError(null);
    const response = await fetch(`/api/cvs/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      setError('Could not update this CV.');
      return false;
    }

    router.refresh();
    return true;
  }

  async function handleRename(): Promise<void> {
    const cleanedTitle = draftTitle.trim();
    if (!cleanedTitle) {
      setError('Add a title before saving.');
      return;
    }

    setPendingAction('rename');
    const updated = await updateCV({ title: cleanedTitle });
    setPendingAction(null);

    if (updated) {
      setEditingTitle(false);
      setMessage('CV renamed.');
    }
  }

  async function handleClone(): Promise<void> {
    setPendingAction('clone');
    setError(null);
    const response = await fetch(`/api/cvs/${id}/clone`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });
    setPendingAction(null);

    if (!response.ok) {
      const payload = (await response.json().catch(() => ({}))) as { error?: string; message?: string };
      if (payload.error === 'PLAN_GATE') {
        setShowUpgrade(true);
      }
      setError(payload.message ?? 'Could not clone this CV.');
      return;
    }

    setMessage('CV cloned.');
    router.refresh();
  }

  async function handleShareToggle(): Promise<void> {
    const nextValue = !publicEnabled;
    setPublicEnabled(nextValue);
    setPendingAction('share');
    const updated = await updateCV({ isPublic: nextValue });
    setPendingAction(null);

    if (!updated) {
      setPublicEnabled(!nextValue);
      return;
    }

    setMessage(nextValue ? 'Share link enabled.' : 'Share link disabled.');
  }

  async function handleCopyShareLink(): Promise<void> {
    const shareUrl = `${window.location.origin}/share/${id}`;
    await navigator.clipboard.writeText(shareUrl);
    setMessage('Share link copied.');
  }

  async function handleDelete(): Promise<void> {
    const confirmed = window.confirm('Delete this CV? This cannot be undone.');
    if (!confirmed) {
      return;
    }

    setPendingAction('delete');
    setError(null);
    const response = await fetch(`/api/cvs/${id}`, {
      method: 'DELETE',
    });
    setPendingAction(null);

    if (!response.ok) {
      setError('Could not delete this CV.');
      return;
    }

    router.refresh();
  }

  return (<>
    <article className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/10">
      <div className="bg-[#e9eef5] p-4">
        <div className={`mx-auto h-72 max-w-[210px] overflow-hidden rounded-sm border p-4 shadow-2xl shadow-slate-950/15 ${template.surfaceClassName}`}>
          <div className="grid h-full grid-cols-[0.38fr_1fr] gap-4">
            <div className={`rounded-sm ${template.sidebarClassName}`} />
            <div>
              <div className={`h-3 w-24 rounded-full ${template.accentClassName}`} />
              <div className="mt-3 h-2 w-20 rounded-full bg-current opacity-35" />
              <div className="mt-8 space-y-2">
                <div className="h-2 w-full rounded-full bg-current opacity-20" />
                <div className="h-2 w-5/6 rounded-full bg-current opacity-20" />
                <div className="h-2 w-3/4 rounded-full bg-current opacity-20" />
              </div>
              <div className="mt-8 h-px bg-current opacity-20" />
              <div className="mt-5 space-y-2">
                <div className="h-2 w-24 rounded-full bg-current opacity-65" />
                <div className="h-2 w-full rounded-full bg-current opacity-20" />
                <div className="h-2 w-4/5 rounded-full bg-current opacity-20" />
                <div className="h-2 w-5/6 rounded-full bg-current opacity-20" />
              </div>
              <div className="mt-8 grid grid-cols-3 gap-1">
                <div className="h-2 rounded-full bg-current opacity-20" />
                <div className="h-2 rounded-full bg-current opacity-20" />
                <div className="h-2 rounded-full bg-current opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              {template.label}
            </p>
            {editingTitle ? (
              <div className="mt-2 flex items-center gap-2">
                <input
                  aria-label="CV title"
                  className="min-w-0 rounded-xl border border-slate-200 bg-white px-3 py-2 font-display text-lg font-bold text-slate-950 outline-none focus:border-slate-950"
                  value={draftTitle}
                  onChange={(event) => setDraftTitle(event.target.value)}
                />
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-white"
                  onClick={handleRename}
                  disabled={pendingAction === 'rename'}
                  aria-label="Save CV title"
                >
                  <Check className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="mt-2 block text-left font-display text-2xl font-bold tracking-[-0.03em] text-slate-950"
                onClick={() => setEditingTitle(true)}
              >
                {draftTitle}
              </button>
            )}
          </div>
          <span
            className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-bold ${scoreClassName(atsScore)}`}
          >
            <GaugeCircle className="h-3.5 w-3.5" />
            {atsScore === null ? 'Pending' : `${atsScore}/100`}
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <Clock3 className="h-4 w-4" />
            Edited {formatRelativeTime(lastEdited)}
          </div>
          <Link
            href={`/editor/${id}`}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-bold text-brand-foreground transition hover:bg-brand-strong"
          >
            Edit
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            onClick={() => setEditingTitle(true)}
          >
            <Pencil className="h-3.5 w-3.5" />
            Rename
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            onClick={handleClone}
            disabled={pendingAction === 'clone'}
          >
            <Copy className="h-3.5 w-3.5" />
            Clone
          </button>
          <button
            type="button"
            className={`inline-flex items-center justify-center gap-2 rounded-full border px-3 py-2 text-xs font-bold transition ${
              publicEnabled
                ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                : 'border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
            }`}
            onClick={handleShareToggle}
            disabled={pendingAction === 'share'}
          >
            <Share2 className="h-3.5 w-3.5" />
            {publicEnabled ? 'Public' : 'Share'}
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-rose-200 px-3 py-2 text-xs font-bold text-rose-700 transition hover:bg-rose-50"
            onClick={handleDelete}
            disabled={pendingAction === 'delete'}
          >
            <Trash2 className="h-3.5 w-3.5" />
            Delete
          </button>
        </div>

        <button
          type="button"
          className={`mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border px-3 py-2 text-xs font-bold transition ${
            plan === 'pro'
              ? 'border-cyan-200 bg-cyan-50 text-cyan-800 hover:bg-cyan-100'
              : 'border-slate-200 text-slate-500 hover:bg-slate-50'
          }`}
          onClick={() => {
            if (plan === 'pro') {
              setTailorOpen(true);
            } else {
              setShowUpgrade(true);
            }
          }}
        >
          {plan === 'pro' ? (
            <Briefcase className="h-3.5 w-3.5" />
          ) : (
            <Lock className="h-3.5 w-3.5" />
          )}
          Tailor for role
          {plan === 'free' ? (
            <span className="ml-1 rounded-full bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold text-amber-700">
              Pro
            </span>
          ) : null}
        </button>

        {publicEnabled ? (
          <button
            type="button"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-50 px-3 py-2 text-xs font-bold text-cyan-800 transition hover:bg-cyan-100"
            onClick={handleCopyShareLink}
          >
            Copy public share link
          </button>
        ) : null}

        {message ? <p className="mt-3 text-xs font-semibold text-emerald-700">{message}</p> : null}
        {error ? <p className="mt-3 text-xs font-semibold text-rose-700">{error}</p> : null}
      </div>
    </article>

    {tailorOpen ? (
      <TailorForRoleModal cvId={id} cvTitle={draftTitle} onClose={() => setTailorOpen(false)} />
    ) : null}
    {showUpgrade ? (
      <UpgradeGate onClose={() => setShowUpgrade(false)} />
    ) : null}
  </>);
}
