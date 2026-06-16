export interface CVPersonal {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website: string;
  summary: string;
}

export interface CVExperience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  current: boolean;
  bullets: string[];
}

export interface CVEducation {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa: string;
}

export interface CVSkills {
  technical: string[];
  soft: string[];
  languages: string[];
}

export interface CVProject {
  id: string;
  name: string;
  description: string;
  tech: string[];
  url: string;
}

export type SectionId =
  | 'personal'
  | 'experience'
  | 'education'
  | 'skills'
  | 'projects'
  | 'certifications'
  | 'awards';

export interface CVData {
  personal: CVPersonal;
  experience: CVExperience[];
  education: CVEducation[];
  skills: CVSkills;
  projects: CVProject[];
  certifications: string[];
  awards: string[];
  sectionOrder: SectionId[];
}

export type Plan = 'free' | 'pro';

export type TemplateId =
  | 'classic'
  | 'modern'
  | 'minimal'
  | 'executive'
  | 'creative'
  | 'technical'
  | 'academic'
  | 'premium';

export interface SupabaseProfile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  plan: Plan;
  linkedin_url: string | null;
  openrouter_key_enc: string | null;
  openrouter_key_hint: string | null;
  pdf_exports_used: number;
  cv_creations_used: number;
  billing_subscription_id: string | null;
  billing_subscription_status: string | null;
  billing_authorization_status: string | null;
  billing_current_period_end: string | null;
  billing_cancel_at: string | null;
  created_at: string | null;
}
