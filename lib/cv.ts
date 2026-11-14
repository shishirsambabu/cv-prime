import type {
  CVData,
  CVEducation,
  CVExperience,
  CVPersonal,
  CVProject,
  CVSkills,
  SectionId,
} from '@/types/cv.types';

export const DEFAULT_SECTION_ORDER: SectionId[] = [
  'personal',
  'experience',
  'education',
  'skills',
  'projects',
  'certifications',
  'awards',
];

function createId(): string {
  return crypto.randomUUID();
}

export function createEmptyPersonal(): CVPersonal {
  return {
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    website: '',
    summary: '',
  };
}

export function createEmptySkills(): CVSkills {
  return {
    technical: [],
    soft: [],
    languages: [],
  };
}

export function createEmptyExperience(): CVExperience {
  return {
    id: createId(),
    company: '',
    role: '',
    startDate: '',
    endDate: '',
    current: false,
    bullets: [''],
  };
}

export function createEmptyEducation(): CVEducation {
  return {
    id: createId(),
    institution: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: '',
    gpa: '',
  };
}

export function createEmptyProject(): CVProject {
  return {
    id: createId(),
    name: '',
    description: '',
    tech: [],
    url: '',
  };
}

export function getDefaultCVData(): CVData {
  return {
    personal: createEmptyPersonal(),
    experience: [],
    education: [],
    skills: createEmptySkills(),
    projects: [],
    certifications: [],
    awards: [],
    sectionOrder: [...DEFAULT_SECTION_ORDER],
  };
}

export function createDefaultCVData(): CVData {
  return getDefaultCVData();
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function sanitizeStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];
}

/**
 * Copies `defaults`, taking each field from `value` only when it holds the
 * same primitive type. A plain `{ ...defaults, ...value }` backfills a field
 * that is *absent* but lets a wrong-typed one through: a stored `null` or
 * number where a string belongs then reached the template renderers (which
 * call `.trim()` on it and crashed the whole editor) and was sent back by
 * every autosave, which the save route's schema rejected with a 400.
 */
function withTypedFields<T extends object>(defaults: T, value: unknown): T {
  if (!isRecord(value)) {
    return defaults;
  }
  const result: Record<string, unknown> = { ...(defaults as Record<string, unknown>) };
  for (const [key, fallback] of Object.entries(defaults)) {
    const candidate = value[key];
    if (typeof fallback === 'string' && typeof candidate === 'number' && Number.isFinite(candidate)) {
      // A phone number or year stored as a number is still the user's data.
      result[key] = String(candidate);
    } else if (typeof candidate === typeof fallback && !Array.isArray(fallback)) {
      result[key] = candidate;
    }
  }
  return result as T;
}

function sanitizePersonal(value: unknown): CVPersonal {
  return withTypedFields(createEmptyPersonal(), value);
}

function sanitizeSkills(value: unknown): CVSkills {
  const raw = isRecord(value) ? value : {};
  return {
    technical: sanitizeStringArray(raw.technical),
    soft: sanitizeStringArray(raw.soft),
    languages: sanitizeStringArray(raw.languages),
  };
}

function sanitizeExperience(value: unknown): CVExperience[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.map((item) => ({
    ...withTypedFields(createEmptyExperience(), item),
    bullets: sanitizeStringArray(isRecord(item) ? item.bullets : undefined),
  }));
}

function sanitizeEducation(value: unknown): CVEducation[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.map((item) => withTypedFields(createEmptyEducation(), item));
}

function sanitizeProjects(value: unknown): CVProject[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.map((item) => ({
    ...withTypedFields(createEmptyProject(), item),
    tech: sanitizeStringArray(isRecord(item) ? item.tech : undefined),
  }));
}

/**
 * Keeps the stored order, minus anything that is not a section or is listed
 * twice, then appends the sections it left out. The editor renders one card
 * per entry and offers no way to add a section back, so a short list hid
 * those sections for good, an unknown id crashed the section list, and a
 * duplicate rendered two cards with the same React key.
 */
function sanitizeSectionOrder(value: unknown): SectionId[] {
  const known = new Set<string>(DEFAULT_SECTION_ORDER);
  const seen = new Set<string>();
  const order: SectionId[] = [];
  for (const entry of Array.isArray(value) ? value : []) {
    if (typeof entry === 'string' && known.has(entry) && !seen.has(entry)) {
      seen.add(entry);
      order.push(entry as SectionId);
    }
  }
  for (const sectionId of DEFAULT_SECTION_ORDER) {
    if (!seen.has(sectionId)) {
      order.push(sectionId);
    }
  }
  return order;
}

// A stored CV row's `data` JSON is normally written by this app's own
// schema-validated API routes, so it's normally already well-formed. But
// nothing prevents a legacy row (from before a field existed), a row
// touched by a support/admin script, or a future schema addition from
// having a nested field missing or null. app/print/[cvId] and
// app/share/[cvId] both guard against that by refusing to render at all
// (cvDataSchema.safeParse -> notFound()) — a page with no editing surface
// can afford to. The editor cannot: rejecting outright would lock the user
// out of the one place that could fix their own CV. Instead this backfills
// every nested field the template renderers (template-utils.tsx) directly
// call `.trim()`/`.filter()` on, so a partially-broken row degrades to a
// CV with some blank fields instead of a crashed editor. Re-saving from the
// editor writes back a fully schema-shaped row, self-healing it.
export function sanitizeCVData(value: unknown): CVData {
  const raw = isRecord(value) ? value : {};
  return {
    personal: sanitizePersonal(raw.personal),
    experience: sanitizeExperience(raw.experience),
    education: sanitizeEducation(raw.education),
    skills: sanitizeSkills(raw.skills),
    projects: sanitizeProjects(raw.projects),
    certifications: sanitizeStringArray(raw.certifications),
    awards: sanitizeStringArray(raw.awards),
    sectionOrder: sanitizeSectionOrder(raw.sectionOrder),
  };
}

export function setNestedValue<T extends Record<string, unknown>>(
  target: T,
  path: string,
  value: unknown
): T {
  const keys = path.split('.').filter(Boolean);
  if (keys.length === 0) {
    return target;
  }

  const next: Record<string, unknown> = structuredClone(target);
  let cursor: Record<string, unknown> = next;

  for (let index = 0; index < keys.length; index += 1) {
    const key = keys[index];

    if (!key) {
      continue;
    }

    if (index === keys.length - 1) {
      cursor[key] = value;
      break;
    }

    const existing = cursor[key];

    if (
      typeof existing !== 'object' ||
      existing === null ||
      Array.isArray(existing)
    ) {
      cursor[key] = {};
    }

    cursor = cursor[key] as Record<string, unknown>;
  }

  return next as T;
}

export function moveSectionOrder(
  order: SectionId[],
  fromIndex: number,
  toIndex: number
): SectionId[] {
  const next = [...order];
  const [moved] = next.splice(fromIndex, 1);

  if (!moved) {
    return order;
  }

  next.splice(toIndex, 0, moved);
  return next;
}

export function sectionTitle(sectionId: SectionId): string {
  switch (sectionId) {
    case 'personal':
      return 'Personal info';
    case 'experience':
      return 'Work experience';
    case 'education':
      return 'Education';
    case 'skills':
      return 'Skills';
    case 'projects':
      return 'Projects';
    case 'certifications':
      return 'Certifications';
    case 'awards':
      return 'Awards';
  }
}
