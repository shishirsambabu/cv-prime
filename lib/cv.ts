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
    sectionOrder: DEFAULT_SECTION_ORDER,
  };
}

export function createDefaultCVData(): CVData {
  return getDefaultCVData();
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
