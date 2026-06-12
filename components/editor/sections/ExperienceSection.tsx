'use client';

import { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { createZodResolver } from '@/lib/createZodResolver';
import { createEmptyExperience } from '@/lib/cv';
import { useCVStore } from '@/store/cvStore';
import type { CVExperience } from '@/types/cv.types';

const experienceSchema = z.object({
  experience: z.array(
    z.object({
      id: z.string(),
      company: z.string().min(1, 'Enter a company.'),
      role: z.string().min(1, 'Enter a role.'),
      startDate: z.string().min(1, 'Enter a start date.'),
      endDate: z.string(),
      current: z.boolean(),
      bullets: z.array(z.string()).min(1, 'Add at least one bullet.'),
    })
  ),
});

interface ExperienceFormValues {
  experience: CVExperience[];
}

function normalizeExperience(item: Partial<CVExperience>): CVExperience {
  return {
    id: item.id ?? crypto.randomUUID(),
    company: item.company ?? '',
    role: item.role ?? '',
    startDate: item.startDate ?? '',
    endDate: item.endDate ?? '',
    current: item.current ?? false,
    bullets: (item.bullets ?? []).map((bullet) => bullet.trim()).filter(Boolean),
  };
}

export function ExperienceSection(): JSX.Element {
  const experience = useCVStore((state) => state.data.experience);
  const setData = useCVStore((state) => state.setData);
  const form = useForm<ExperienceFormValues>({
    resolver: createZodResolver(experienceSchema),
    defaultValues: { experience },
    mode: 'onChange',
  });
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'experience',
  });

  useEffect(() => {
    form.reset({ experience });
  }, [experience, form]);

  useEffect(() => {
    const subscription = form.watch((values) => {
      const nextExperience = (values.experience ?? []).map((item) =>
        normalizeExperience(item)
      );
      if (JSON.stringify(nextExperience) === JSON.stringify(experience)) {
        return;
      }

      setData({
        ...useCVStore.getState().data,
        experience: nextExperience,
      });
    });

    return () => subscription.unsubscribe();
  }, [experience, form, setData]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-600">
          Add roles in reverse-chronological order.
        </p>
        <Button
          type="button"
          variant="secondary"
          onClick={() => append(createEmptyExperience())}
        >
          Add role
        </Button>
      </div>

      {fields.length === 0 ? (
        <p className="text-sm text-slate-500">No work experience added yet.</p>
      ) : null}

      <div className="space-y-4">
        {fields.map((field, index) => {
          const bullets = form.watch(`experience.${index}.bullets`) ?? [];

          return (
            <div key={field.id} className="rounded-xl border border-slate-200 p-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-slate-900">
                  Role {index + 1}
                </h3>
                <Button type="button" variant="ghost" onClick={() => remove(index)}>
                  Remove
                </Button>
              </div>
              <div className="mt-4 grid gap-4">
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label>Company</Label>
                    <Input {...form.register(`experience.${index}.company`)} />
                  </div>
                  <div className="grid gap-2">
                    <Label>Role</Label>
                    <Input {...form.register(`experience.${index}.role`)} />
                  </div>
                </div>
                <div className="grid gap-2 sm:grid-cols-3">
                  <div className="grid gap-2">
                    <Label>Start date</Label>
                    <Input {...form.register(`experience.${index}.startDate`)} />
                  </div>
                  <div className="grid gap-2">
                    <Label>End date</Label>
                    <Input {...form.register(`experience.${index}.endDate`)} />
                  </div>
                  <label className="flex items-center gap-2 self-end text-sm text-slate-700">
                    <input type="checkbox" {...form.register(`experience.${index}.current`)} />
                    Current role
                  </label>
                </div>
                <div className="grid gap-2">
                  <Label>Bullets</Label>
                  <Textarea
                    rows={5}
                    value={bullets.join('\n')}
                    onChange={(event) =>
                      form.setValue(
                        `experience.${index}.bullets`,
                        event.target.value
                          .split('\n')
                          .map((item) => item.trim())
                          .filter(Boolean)
                      )
                    }
                  />
                  <p className="text-xs text-slate-500">
                    One bullet per line. Keep each line action-oriented.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
