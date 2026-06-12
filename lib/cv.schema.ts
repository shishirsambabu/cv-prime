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
  linkedin: z.string(),
  website: z.string(),
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
  gpa: z.string(),
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
  url: z.string(),
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
  title: z.string().min(1).optional(),
  isPublic: z.boolean().optional(),
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
