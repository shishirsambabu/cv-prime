'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Label } from '@/components/ui/label';
import { createZodResolver } from '@/lib/createZodResolver';
import { useCVStore } from '@/store/cvStore';

const certificationsSchema = z.object({
  certificationsText: z.string(),
});

interface CertificationsFormValues {
  certificationsText: string;
}

export function CertificationsSection(): JSX.Element {
  const certifications = useCVStore((state) => state.data.certifications);
  const setData = useCVStore((state) => state.setData);
  const form = useForm<CertificationsFormValues>({
    resolver: createZodResolver(certificationsSchema),
    defaultValues: { certificationsText: certifications.join('\n') },
    mode: 'onChange',
  });

  useEffect(() => {
    form.reset({ certificationsText: certifications.join('\n') });
  }, [certifications, form]);

  useEffect(() => {
    const subscription = form.watch((values) => {
      const next = (values.certificationsText ?? '')
        .split('\n')
        .map((item) => item.trim())
        .filter(Boolean);
      if (JSON.stringify(next) === JSON.stringify(certifications)) {
        return;
      }

      setData({
        ...useCVStore.getState().data,
        certifications: next,
      });
    });

    return () => subscription.unsubscribe();
  }, [certifications, form, setData]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-600">Add certifications as short entries.</p>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="certifications-text">Certifications</Label>
        <textarea
          id="certifications-text"
          rows={4}
          className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
          {...form.register('certificationsText')}
        />
        <p className="text-xs text-slate-500">One certification per line.</p>
      </div>
    </div>
  );
}
