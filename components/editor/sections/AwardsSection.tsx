'use client';

import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Label } from '@/components/ui/label';
import { createZodResolver } from '@/lib/createZodResolver';
import { useCVStore } from '@/store/cvStore';

const awardsSchema = z.object({
  awardsText: z.string(),
});

interface AwardsFormValues {
  awardsText: string;
}

export function AwardsSection(): JSX.Element {
  const awards = useCVStore((state) => state.data.awards);
  const setData = useCVStore((state) => state.setData);
  const form = useForm<AwardsFormValues>({
    resolver: createZodResolver(awardsSchema),
    defaultValues: { awardsText: awards.join('\n') },
    mode: 'onChange',
  });

  // Guards store<->form sync so a user edit echoing back through the store
  // never triggers form.reset() mid-type (which re-joined the trimmed list and
  // blocked typing spaces or blank lines).
  const lastSyncedRef = useRef<string>(JSON.stringify(awards));

  useEffect(() => {
    const incoming = JSON.stringify(awards);
    if (incoming === lastSyncedRef.current) {
      return;
    }
    lastSyncedRef.current = incoming;
    form.reset({ awardsText: awards.join('\n') });
  }, [awards, form]);

  useEffect(() => {
    const subscription = form.watch((values) => {
      const next = (values.awardsText ?? '')
        .split('\n')
        .map((item) => item.trim())
        .filter(Boolean);
      const serialized = JSON.stringify(next);
      if (serialized === lastSyncedRef.current) {
        return;
      }
      lastSyncedRef.current = serialized;

      setData({
        ...useCVStore.getState().data,
        awards: next,
      });
    });

    return () => subscription.unsubscribe();
  }, [form, setData]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-600">List awards and recognition briefly.</p>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="awards-text">Awards</Label>
        <textarea
          id="awards-text"
          rows={4}
          className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
          {...form.register('awardsText')}
        />
        <p className="text-xs text-slate-500">One award per line.</p>
      </div>
    </div>
  );
}
