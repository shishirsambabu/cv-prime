'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { captureClientEvent } from '@/lib/clientAnalytics';
import { UpgradeModal } from '@/components/payments/UpgradeModal';

interface CreateCVButtonProps {
  disabled?: boolean;
  disabledMessage?: string;
}

export function CreateCVButton({
  disabled = false,
  disabledMessage,
}: CreateCVButtonProps): JSX.Element {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showUpgrade, setShowUpgrade] = useState(false);

  const handleCreate = async (): Promise<void> => {
    setError(null);
    setIsPending(true);

    try {
      const response = await fetch('/api/cvs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      const payload = (await response.json()) as
        | { cv?: { id: string } }
        | { error?: string; message?: string };

      if (!response.ok) {
        if ('error' in payload && payload.error === 'PLAN_GATE') {
          setShowUpgrade(true);
        }
        setError(
          'message' in payload && payload.message
            ? payload.message
            : 'Could not create a new CV right now.'
        );
        return;
      }

      if (!('cv' in payload) || !payload.cv?.id) {
        setError('Could not create a new CV right now.');
        return;
      }

      captureClientEvent('cv_created', { templateId: 'modern' });
      router.push(`/editor/${payload.cv.id}`);
      router.refresh();
    } catch {
      setError('Could not create a new CV right now.');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="space-y-2">
      <Button type="button" onClick={handleCreate} disabled={disabled || isPending}>
        <Plus className="mr-2 h-4 w-4" />
        {isPending ? 'Creating CV...' : 'Create CV'}
      </Button>
      {error ? <p className="text-sm text-rose-600">{error}</p> : null}
      {!error && disabledMessage ? (
        <p className="text-sm text-slate-500">{disabledMessage}</p>
      ) : null}
      {showUpgrade || disabled ? (
        <UpgradeModal
          triggerLabel="Upgrade for unlimited resumes"
          triggerClassName="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-xs font-bold text-white transition hover:bg-black"
        />
      ) : null}
    </div>
  );
}
