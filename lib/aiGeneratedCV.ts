import type { CVData } from '@/types/cv.types';

interface GeneratedCVAnalysis {
  score: number;
  missingKeywords: string[];
  presentKeywords: string[];
  suggestions: string[];
}

export interface GeneratedCVResult extends GeneratedCVAnalysis {
  cvData: CVData;
  title: string;
}

function safeStringArray(value: string[]): string[] {
  return value.map((item) => item.trim()).filter(Boolean);
}

export function normalizeGeneratedCVResult(result: GeneratedCVResult): GeneratedCVResult {
  return {
    title: result.title.trim() || 'AI tailored CV',
    cvData: {
      ...result.cvData,
      personal: {
        ...result.cvData.personal,
        name: result.cvData.personal.name.trim(),
        title: result.cvData.personal.title.trim(),
        email: result.cvData.personal.email.trim(),
        phone: result.cvData.personal.phone.trim(),
        location: result.cvData.personal.location.trim(),
        linkedin: result.cvData.personal.linkedin.trim(),
        website: result.cvData.personal.website.trim(),
        summary: result.cvData.personal.summary.trim(),
      },
      experience: result.cvData.experience.map((item) => ({
        ...item,
        id: item.id.trim() || crypto.randomUUID(),
        bullets: safeStringArray(item.bullets).slice(0, 6),
      })),
      education: result.cvData.education.map((item) => ({
        ...item,
        id: item.id.trim() || crypto.randomUUID(),
      })),
      skills: {
        technical: safeStringArray(result.cvData.skills.technical),
        soft: safeStringArray(result.cvData.skills.soft),
        languages: safeStringArray(result.cvData.skills.languages),
      },
      projects: result.cvData.projects.map((item) => ({
        ...item,
        id: item.id.trim() || crypto.randomUUID(),
        tech: safeStringArray(item.tech),
      })),
      certifications: safeStringArray(result.cvData.certifications),
      awards: safeStringArray(result.cvData.awards),
    },
    score: Math.round(result.score),
    missingKeywords: safeStringArray(result.missingKeywords).slice(0, 30),
    presentKeywords: safeStringArray(result.presentKeywords).slice(0, 30),
    suggestions: safeStringArray(result.suggestions).slice(0, 12),
  };
}
