import { z } from 'zod';

const sectionIdSchema = z.enum([
  'personal',
  'experience',
  'education',
  'skills',
  'projects',
  'certifications',
  'awards',
]);

const personalSchema = z.object({
  name: z.string(),
  title: z.string(),
  email: z.string(),
  phone: z.string(),
  location: z.string(),
  linkedin: z.string().optional().default(''),
  website: z.string().optional().default(''),
  summary: z.string(),
});

const experienceSchema = z.object({
  id: z.string(),
  company: z.string(),
  role: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  current: z.boolean(),
  bullets: z.array(z.string()),
});

const educationSchema = z.object({
  id: z.string(),
  institution: z.string(),
  degree: z.string(),
  field: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  gpa: z.string().optional().default(''),
});

const skillsSchema = z.object({
  technical: z.array(z.string()),
  soft: z.array(z.string()),
  languages: z.array(z.string()),
});

const projectSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  tech: z.array(z.string()),
  url: z.string().optional().default(''),
});

export const cvDataSchema = z.object({
  personal: personalSchema,
  experience: z.array(experienceSchema),
  education: z.array(educationSchema),
  skills: skillsSchema,
  projects: z.array(projectSchema),
  certifications: z.array(z.string()),
  awards: z.array(z.string()),
  sectionOrder: z.array(sectionIdSchema),
});

export const cvPatchSchema = z.object({
  data: cvDataSchema.optional(),
  templateId: z
    .enum([
      'classic',
      'modern',
      'minimal',
      'executive',
      'creative',
      'technical',
      'academic',
      'premium',
    ])
    .optional(),
  // Same bounds as create and clone. Without them a rename could store a
  // whitespace-only title (an unnamed, unclickable-looking dashboard card) or
  // one of any length.
  title: z.string().trim().min(1).max(80).optional(),
  isPublic: z.boolean().optional(),
  // The version (lib/cvVersion.ts) of the row the editor's copy is based on.
  // When present, a write of `data`/`templateId` is refused with 409 if the
  // stored row has changed since, instead of overwriting newer edits.
  baseVersion: z.string().min(1).max(128).optional(),
}).refine(
  (value) =>
    value.data !== undefined ||
    value.templateId !== undefined ||
    value.title !== undefined ||
    value.isPublic !== undefined,
  {
    message: 'Provide at least one CV update.',
  }
);
