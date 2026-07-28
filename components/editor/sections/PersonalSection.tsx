'use client';

import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { createZodResolver } from '@/lib/createZodResolver';
import { useCVStore } from '@/store/cvStore';
import type { CVPersonal } from '@/types/cv.types';

const personalSchema = z.object({
  name: z.string().min(1, 'Enter a name.'),
  title: z.string().min(1, 'Enter a title.'),
  email: z.string().email('Enter a valid email address.'),
  phone: z.string().min(1, 'Enter a phone number.'),
  location: z.string().min(1, 'Enter a location.'),
  linkedin: z.string().url('Enter a valid LinkedIn URL.').or(z.literal('')),
  website: z.string().url('Enter a valid website URL.').or(z.literal('')),
  summary: z.string().min(20, 'Write a stronger summary.'),
});

export function PersonalSection(): JSX.Element {
  const personal = useCVStore((state) => state.data.personal);
  const updateField = useCVStore((state) => state.updateField);
  const form = useForm<CVPersonal>({
    resolver: createZodResolver(personalSchema),
    defaultValues: personal,
    mode: 'onChange',
  });

  // Guards store<->form sync so a user edit echoing back through the store
  // never triggers form.reset() mid-type (which stole focus and re-rendered
  // the whole form on every keystroke).
  const lastSyncedRef = useRef<string>(JSON.stringify(personal));

  useEffect(() => {
    const incoming = JSON.stringify(personal);
    if (incoming === lastSyncedRef.current) {
      return;
    }
    lastSyncedRef.current = incoming;
    form.reset(personal);
  }, [form, personal]);

  useEffect(() => {
    const subscription = form.watch((values) => {
      const serialized = JSON.stringify(values);
      if (serialized === lastSyncedRef.current) {
        return;
      }
      lastSyncedRef.current = serialized;

      Object.entries(values).forEach(([key, value]) => {
        updateField(`personal.${key}`, value);
      });
    });

    return () => subscription.unsubscribe();
  }, [form, updateField]);

  const errors = form.formState.errors;

  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="personal-name">Name</Label>
        <Input id="personal-name" {...form.register('name')} />
        {errors.name ? (
          <p className="text-sm text-red-600">{errors.name.message}</p>
        ) : null}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="personal-title">Title</Label>
        <Input id="personal-title" {...form.register('title')} />
        {errors.title ? (
          <p className="text-sm text-red-600">{errors.title.message}</p>
        ) : null}
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="personal-email">Email</Label>
          <Input id="personal-email" type="email" {...form.register('email')} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="personal-phone">Phone</Label>
          <Input id="personal-phone" {...form.register('phone')} />
        </div>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="personal-location">Location</Label>
          <Input id="personal-location" {...form.register('location')} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="personal-linkedin">LinkedIn</Label>
          <Input id="personal-linkedin" {...form.register('linkedin')} />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="personal-website">Website</Label>
        <Input id="personal-website" {...form.register('website')} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="personal-summary">Summary</Label>
        <Textarea id="personal-summary" rows={5} {...form.register('summary')} />
        {errors.summary ? (
          <p className="text-sm text-red-600">{errors.summary.message}</p>
        ) : null}
      </div>
    </div>
  );
}
