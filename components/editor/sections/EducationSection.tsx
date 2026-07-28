'use client';

import { useEffect, useRef } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createZodResolver } from '@/lib/createZodResolver';
import { createEmptyEducation } from '@/lib/cv';
import { useCVStore } from '@/store/cvStore';
import type { CVEducation } from '@/types/cv.types';

const educationSchema = z.object({
  education: z.array(
    z.object({
      id: z.string(),
      institution: z.string().min(1, 'Enter an institution.'),
      degree: z.string().min(1, 'Enter a degree.'),
      field: z.string().min(1, 'Enter a field.'),
      startDate: z.string(),
      endDate: z.string(),
      gpa: z.string(),
    })
  ),
});

interface EducationFormValues {
  education: CVEducation[];
}

function normalizeEducation(item: Partial<CVEducation>): CVEducation {
  return {
    id: item.id ?? crypto.randomUUID(),
    institution: item.institution ?? '',
    degree: item.degree ?? '',
    field: item.field ?? '',
    startDate: item.startDate ?? '',
    endDate: item.endDate ?? '',
    gpa: item.gpa ?? '',
  };
}

export function EducationSection(): JSX.Element {
  const education = useCVStore((state) => state.data.education);
  const setData = useCVStore((state) => state.setData);
  const form = useForm<EducationFormValues>({
    resolver: createZodResolver(educationSchema),
    defaultValues: { education },
    mode: 'onChange',
  });
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'education',
  });

  // Guards store<->form sync so a user edit echoing back through the store
  // never triggers form.reset() mid-type.
  const lastSyncedRef = useRef<string>(JSON.stringify(education));

  useEffect(() => {
    const incoming = JSON.stringify(education);
    if (incoming === lastSyncedRef.current) {
      return;
    }
    lastSyncedRef.current = incoming;
    form.reset({ education });
  }, [education, form]);

  useEffect(() => {
    const subscription = form.watch((values) => {
      const nextEducation = (values.education ?? []).map((item) =>
        normalizeEducation(item)
      );
      const serialized = JSON.stringify(nextEducation);
      if (serialized === lastSyncedRef.current) {
        return;
      }
      lastSyncedRef.current = serialized;

      setData({
        ...useCVStore.getState().data,
        education: nextEducation,
      });
    });

    return () => subscription.unsubscribe();
  }, [form, setData]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-600">List your education in reverse order.</p>
        <Button type="button" variant="secondary" onClick={() => append(createEmptyEducation())}>
          Add education
        </Button>
      </div>

      {fields.length === 0 ? (
        <p className="text-sm text-slate-500">No education added yet.</p>
      ) : null}

      <div className="space-y-4">
        {fields.map((field, index) => (
          <div key={field.id} className="rounded-xl border border-slate-200 p-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-slate-900">
                Education {index + 1}
              </h3>
              <Button type="button" variant="ghost" onClick={() => remove(index)}>
                Remove
              </Button>
            </div>
            <div className="mt-4 grid gap-4">
              <div className="grid gap-2">
                <Label>Institution</Label>
                <Input {...form.register(`education.${index}.institution`)} />
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label>Degree</Label>
                  <Input {...form.register(`education.${index}.degree`)} />
                </div>
                <div className="grid gap-2">
                  <Label>Field</Label>
                  <Input {...form.register(`education.${index}.field`)} />
                </div>
              </div>
              <div className="grid gap-2 sm:grid-cols-3">
                <div className="grid gap-2">
                  <Label>Start date</Label>
                  <Input {...form.register(`education.${index}.startDate`)} />
                </div>
                <div className="grid gap-2">
                  <Label>End date</Label>
                  <Input {...form.register(`education.${index}.endDate`)} />
                </div>
                <div className="grid gap-2">
                  <Label>GPA</Label>
                  <Input {...form.register(`education.${index}.gpa`)} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
