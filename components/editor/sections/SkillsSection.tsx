'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createZodResolver } from '@/lib/createZodResolver';
import { useCVStore } from '@/store/cvStore';
import type { CVSkills } from '@/types/cv.types';

const skillsSchema = z.object({
  technical: z.string(),
  soft: z.string(),
  languages: z.string(),
});

interface SkillsFormValues {
  technical: string;
  soft: string;
  languages: string;
}

function toCsv(values: string[]): string {
  return values.join(', ');
}

function fromCsv(value: string): string[] {
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

export function SkillsSection(): JSX.Element {
  const skills = useCVStore((state) => state.data.skills);
  const setData = useCVStore((state) => state.setData);
  const form = useForm<SkillsFormValues>({
    resolver: createZodResolver(skillsSchema),
    defaultValues: {
      technical: toCsv(skills.technical),
      soft: toCsv(skills.soft),
      languages: toCsv(skills.languages),
    },
    mode: 'onChange',
  });

  useEffect(() => {
    form.reset({
      technical: toCsv(skills.technical),
      soft: toCsv(skills.soft),
      languages: toCsv(skills.languages),
    });
  }, [form, skills]);

  useEffect(() => {
    const subscription = form.watch((values) => {
      const nextSkills: CVSkills = {
        technical: fromCsv(values.technical ?? ''),
        soft: fromCsv(values.soft ?? ''),
        languages: fromCsv(values.languages ?? ''),
      };

      if (JSON.stringify(nextSkills) === JSON.stringify(skills)) {
        return;
      }

      setData({
        ...useCVStore.getState().data,
        skills: nextSkills,
      });
    });

    return () => subscription.unsubscribe();
  }, [form, setData, skills]);

  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label>Technical skills</Label>
        <Input {...form.register('technical')} />
        <p className="text-xs text-slate-500">Separate skills with commas.</p>
      </div>
      <div className="grid gap-2">
        <Label>Soft skills</Label>
        <Input {...form.register('soft')} />
      </div>
      <div className="grid gap-2">
        <Label>Languages</Label>
        <Input {...form.register('languages')} />
      </div>
    </div>
  );
}
