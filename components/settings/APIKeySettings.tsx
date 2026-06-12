'use client';

import { useState } from 'react';
import type { FieldErrors, Resolver } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { CheckCircle2, KeyRound, Trash2 } from 'lucide-react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface APIKeySettingsProps {
  initialHint: string | null;
}

const apiKeySchema = z.object({
  apiKey: z.string().trim().min(20, 'Enter a complete OpenRouter API key.'),
});

type APIKeyFormValues = z.infer<typeof apiKeySchema>;

interface SaveKeyResponse {
  success?: boolean;
  hint?: string;
  error?: string;
}

function responseMessage(payload: SaveKeyResponse): string {
  if (payload.error === 'KEY_INVALID') {
    return 'OpenRouter rejected this key. Check that it is active and has credit or a limit set.';
  }

  if (payload.error === 'RATE_LIMITED') {
    return 'Too many attempts. Try again in an hour.';
  }

  if (payload.error === 'VALIDATION_UNAVAILABLE') {
    return 'Could not reach OpenRouter to validate the key. Check your network and try again.';
  }

  if (payload.error === 'ENCRYPTION_ERROR') {
    return 'Server configuration error — the key could not be saved securely. Contact support.';
  }

  if (payload.error === 'NOT_PERSISTED') {
    return 'The key passed validation but was not saved to your profile. This usually means your profile row or its database permissions are missing. Please contact support.';
  }

  if (payload.error) {
    return `Could not save this key: ${payload.error}`;
  }

  return 'Could not save this key. Please try again.';
}

function createZodResolver<TValues extends Record<string, unknown>>(
  schema: z.ZodType<TValues>
): Resolver<TValues> {
  return async (values) => {
    const result = schema.safeParse(values);

    if (result.success) {
      return { values: result.data, errors: {} };
    }

    const fieldErrors = result.error.flatten().fieldErrors;
    const errors: Record<string, { type: 'manual'; message: string }> = {};

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

export function APIKeySettings({ initialHint }: APIKeySettingsProps): JSX.Element {
  const [hint, setHint] = useState<string | null>(initialHint);
  const [error, setError] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [guideOpen, setGuideOpen] = useState(true);
  const form = useForm<APIKeyFormValues>({
    resolver: createZodResolver(apiKeySchema),
    defaultValues: {
      apiKey: '',
    },
  });

  async function handleSave(values: APIKeyFormValues): Promise<void> {
    setError(null);

    const response = await fetch('/api/keys/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    const payload = (await response.json().catch(() => ({}))) as SaveKeyResponse;

    if (!response.ok || !payload.success || !payload.hint) {
      setError(responseMessage(payload));
      return;
    }

    setHint(payload.hint);
    window.location.href = '/ai-cv';
  }

  async function handleDelete(): Promise<void> {
    const confirmed = window.confirm('Remove your saved OpenRouter key from CV Prime?');
    if (!confirmed) {
      return;
    }

    setDeleting(true);
    setError(null);

    const response = await fetch('/api/keys/delete', {
      method: 'DELETE',
    });

    setDeleting(false);

    if (!response.ok) {
      setError('Could not delete the key. Please try again.');
      return;
    }

    setHint(null);
  }

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-800">
            <KeyRound className="h-5 w-5" />
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.03em] text-slate-950">
            OpenRouter API key
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
            CV Prime uses your own OpenRouter key for AI features. The key is encrypted before storage and only the saved hint is shown here.
          </p>
        </div>
        {hint ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-800">
            Connected {hint}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-600">
            No key connected
          </div>
        )}
      </div>

      {error ? (
        <p className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error}
        </p>
      ) : null}

      <form className="mt-6 grid gap-4 md:grid-cols-[1fr_auto]" onSubmit={form.handleSubmit(handleSave)}>
        <div className="space-y-2">
          <Label htmlFor="openrouter-key">New OpenRouter key</Label>
          <Input
            id="openrouter-key"
            type="password"
            autoComplete="off"
            placeholder="sk-or-v1-..."
            {...form.register('apiKey')}
          />
          {form.formState.errors.apiKey ? (
            <p className="text-sm font-semibold text-red-600">
              {form.formState.errors.apiKey.message}
            </p>
          ) : null}
        </div>
        <div className="flex items-end gap-2">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? 'Checking...' : 'Save key'}
          </Button>
          {hint ? (
            <Button
              type="button"
              variant="outline"
              disabled={deleting}
              onClick={handleDelete}
              aria-label="Delete OpenRouter key"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          ) : null}
        </div>
      </form>

      <div className="mt-7 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
        <button
          type="button"
          className="flex w-full items-center justify-between text-left font-display text-lg font-bold text-slate-950"
          onClick={() => setGuideOpen((current) => !current)}
        >
          How to get a safe OpenRouter key
          <span className="text-sm font-semibold text-slate-500">
            {guideOpen ? 'Hide' : 'Show'}
          </span>
        </button>
        {guideOpen ? (
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              'Create or open your OpenRouter account.',
              'Go to Keys and create a new API key for CV Prime.',
              'Set a small credit limit before using AI features.',
              'Paste the key here. CV Prime stores only an encrypted version.',
              'Delete the key from OpenRouter after you finish if you only needed it once.',
            ].map((step) => (
              <div key={step} className="flex items-start gap-3 rounded-2xl bg-white p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-sm leading-6 text-slate-600">{step}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4 text-sm leading-6 text-cyan-900 md:col-span-2">
              Typical usage is low cost with the default model, but a key limit is still the safest habit. You can delete the key in OpenRouter after downloading your tailored CV.
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
