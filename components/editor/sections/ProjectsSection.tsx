'use client';

import { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { createZodResolver } from '@/lib/createZodResolver';
import { createEmptyProject } from '@/lib/cv';
import { useCVStore } from '@/store/cvStore';
import type { CVProject } from '@/types/cv.types';

const projectSchema = z.object({
  projects: z.array(
    z.object({
      id: z.string(),
      name: z.string().min(1, 'Enter a project name.'),
      description: z.string().min(1, 'Enter a description.'),
      tech: z.array(z.string()),
      url: z.string(),
    })
  ),
});

interface ProjectsFormValues {
  projects: CVProject[];
}

function normalizeProject(item: Partial<CVProject>): CVProject {
  return {
    id: item.id ?? crypto.randomUUID(),
    name: item.name ?? '',
    description: item.description ?? '',
    tech: (item.tech ?? []).map((tech) => tech.trim()).filter(Boolean),
    url: item.url ?? '',
  };
}

export function ProjectsSection(): JSX.Element {
  const projects = useCVStore((state) => state.data.projects);
  const setData = useCVStore((state) => state.setData);
  const form = useForm<ProjectsFormValues>({
    resolver: createZodResolver(projectSchema),
    defaultValues: { projects },
    mode: 'onChange',
  });
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'projects',
  });

  useEffect(() => {
    form.reset({ projects });
  }, [form, projects]);

  useEffect(() => {
    const subscription = form.watch((values) => {
      const nextProjects = (values.projects ?? []).map((item) =>
        normalizeProject(item)
      );
      if (JSON.stringify(nextProjects) === JSON.stringify(projects)) {
        return;
      }

      setData({
        ...useCVStore.getState().data,
        projects: nextProjects,
      });
    });

    return () => subscription.unsubscribe();
  }, [form, projects, setData]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-600">Showcase projects that prove impact.</p>
        <Button type="button" variant="secondary" onClick={() => append(createEmptyProject())}>
          Add project
        </Button>
      </div>

      {fields.length === 0 ? (
        <p className="text-sm text-slate-500">No projects added yet.</p>
      ) : null}

      <div className="space-y-4">
        {fields.map((field, index) => (
          <div key={field.id} className="rounded-xl border border-slate-200 p-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-slate-900">
                Project {index + 1}
              </h3>
              <Button type="button" variant="ghost" onClick={() => remove(index)}>
                Remove
              </Button>
            </div>
            <div className="mt-4 grid gap-4">
              <div className="grid gap-2">
                <Label>Name</Label>
                <Input {...form.register(`projects.${index}.name`)} />
              </div>
              <div className="grid gap-2">
                <Label>Description</Label>
                <Textarea rows={4} {...form.register(`projects.${index}.description`)} />
              </div>
              <div className="grid gap-2">
                <Label>Tech stack</Label>
                <Input
                  value={(form.watch(`projects.${index}.tech`) ?? []).join(', ')}
                  onChange={(event) =>
                    form.setValue(
                      `projects.${index}.tech`,
                      event.target.value
                        .split(',')
                        .map((item) => item.trim())
                        .filter(Boolean)
                    )
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label>URL</Label>
                <Input {...form.register(`projects.${index}.url`)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
