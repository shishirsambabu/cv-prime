import type { CVData, CVExperience, CVProject } from '@/types/cv.types';

function nonBlank(values: string[]): string[] {
  return values.map((value) => value.trim()).filter(Boolean);
}

function matchById<T extends { id: string }>(original: T[], rewritten: T[], index: number): T | undefined {
  const item = original[index];
  if (!item) return undefined;
  const byId = rewritten.find((candidate) => candidate.id === item.id);
  if (byId) return byId;
  // Models sometimes renumber ids. Position is only trusted when nothing was
  // added or dropped, so an entry can never inherit another entry's text.
  return rewritten.length === original.length ? rewritten[index] : undefined;
}

/**
 * Applies an AI "fix" on top of the CV it was asked to improve, taking only
 * the parts the fix is allowed to rewrite: the summary, experience bullets,
 * project descriptions and skill lists.
 *
 * The model is asked to return the whole CV, and its answer used to replace
 * the user's CV wholesale after nothing more than a shape check. A shape
 * check passes `"projects": []`, a missing job, a changed employer or an
 * emptied education list, and the before/after view only compares bullets and
 * the summary, so such a loss was written to the CV and autosaved without
 * anything on screen showing it. Building the result from the original makes
 * that impossible: every entry, name, employer, school and date is the
 * user's own, and a rewrite that comes back empty leaves the original text.
 */
export function mergeAtsFix(original: CVData, rewritten: CVData): CVData {
  const experience: CVExperience[] = original.experience.map((item, index) => {
    const bullets = nonBlank(matchById(original.experience, rewritten.experience, index)?.bullets ?? []);
    return bullets.length > 0 ? { ...item, bullets } : item;
  });

  const projects: CVProject[] = original.projects.map((item, index) => {
    const description = matchById(original.projects, rewritten.projects, index)?.description.trim() ?? '';
    return description ? { ...item, description } : item;
  });

  const technical = nonBlank(rewritten.skills.technical);
  const soft = nonBlank(rewritten.skills.soft);
  const languages = nonBlank(rewritten.skills.languages);

  return {
    ...original,
    personal: {
      ...original.personal,
      summary: rewritten.personal.summary.trim() || original.personal.summary,
    },
    experience,
    projects,
    skills: {
      technical: technical.length > 0 ? technical : original.skills.technical,
      soft: soft.length > 0 ? soft : original.skills.soft,
      languages: languages.length > 0 ? languages : original.skills.languages,
    },
  };
}
