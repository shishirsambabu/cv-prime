import type { CVData } from '@/types/cv.types';

export interface CompletenessCheck {
  label: string;
  done: boolean;
}

export interface CompletenessResult {
  score: number;
  checks: CompletenessCheck[];
  nextStep: string | null;
}

const filled = (value: string | undefined): boolean => Boolean(value && value.trim().length > 0);

/**
 * Derives a live "how complete is this CV" score (0-100) purely from the
 * editor data. It is a structural readiness signal — not the AI ATS score —
 * so it can update instantly as the user types, with no network call.
 */
export function computeCompleteness(data: CVData): CompletenessResult {
  const experienceBullets = data.experience.reduce(
    (total, item) => total + item.bullets.filter(filled).length,
    0
  );
  const skillCount =
    data.skills.technical.filter(filled).length +
    data.skills.soft.filter(filled).length +
    data.skills.languages.filter(filled).length;

  const hasSolidExperience = data.experience.some(
    (item) => filled(item.role) && filled(item.company) && item.bullets.some(filled)
  );
  const hasEducation = data.education.some(
    (item) => filled(item.degree) && filled(item.institution)
  );
  const hasExtraProof =
    data.projects.some((p) => filled(p.name)) ||
    data.certifications.some(filled) ||
    data.awards.some(filled);

  const checks: CompletenessCheck[] = [
    { label: 'Add your name and target role', done: filled(data.personal.name) && filled(data.personal.title) },
    { label: 'Add contact details', done: filled(data.personal.email) && (filled(data.personal.phone) || filled(data.personal.location)) },
    { label: 'Write a focused summary', done: data.personal.summary.trim().length >= 80 },
    { label: 'Add a complete work experience', done: hasSolidExperience },
    { label: 'Add at least 3 experience bullets', done: experienceBullets >= 3 },
    { label: 'Add your education', done: hasEducation },
    { label: 'List at least 4 skills', done: skillCount >= 4 },
    { label: 'Add a project, certification, or award', done: hasExtraProof },
  ];

  const doneCount = checks.filter((c) => c.done).length;
  const score = Math.round((doneCount / checks.length) * 100);
  const nextStep = checks.find((c) => !c.done)?.label ?? null;

  return { score, checks, nextStep };
}
