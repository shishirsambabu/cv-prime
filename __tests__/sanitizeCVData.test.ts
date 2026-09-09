// Regression: app/(dashboard)/editor/[cvId]/page.tsx passes a CV row's
// `data` JSON straight into CVEditor -> useCVStore.hydrate() with a raw
// cast, no schema validation — unlike app/print/[cvId] and app/share/[cvId],
// which both run cvDataSchema.safeParse and notFound() on failure. Before
// this fix, hydrate() shallow-merged `{...createDefaultCVData(), ...data}`,
// which only backfills a *missing top-level key*. A row whose `personal`
// object exists but is missing a nested field (e.g. no `linkedin` key at
// all — a legacy row predating that field, or one touched by a support
// script) kept that field `undefined`, and the template renderers
// (template-utils.tsx's hasText/contactLine/BulletList/ChipList) call
// `.trim()`/`.filter()` on it directly with no guard — crashing the entire
// editor and LivePreview with no way for the user to fix their own CV.
import { sanitizeCVData } from '@/lib/cv';

describe('sanitizeCVData', () => {
  it('backfills a missing nested personal field instead of leaving it undefined', () => {
    const result = sanitizeCVData({
      personal: { name: 'Ada Lovelace' }, // linkedin, website, summary, etc. all absent
    });

    expect(result.personal.linkedin).toBe('');
    expect(result.personal.website).toBe('');
    expect(result.personal.summary).toBe('');
    expect(() => result.personal.linkedin.trim()).not.toThrow();
  });

  it('backfills missing fields on each experience/education/project array item', () => {
    const result = sanitizeCVData({
      experience: [{ company: 'Acme' }], // role, bullets, etc. absent
      education: [{ institution: 'MIT' }],
      projects: [{ name: 'Side project' }],
    });

    expect(result.experience[0]?.role).toBe('');
    expect(result.experience[0]?.bullets).toEqual([]);
    expect(result.education[0]?.degree).toBe('');
    expect(result.projects[0]?.tech).toEqual([]);
  });

  it('drops non-string entries from string arrays instead of crashing template rendering', () => {
    const result = sanitizeCVData({
      certifications: ['AWS', null, 42, undefined],
      awards: 'not-an-array',
      skills: { technical: ['React', null] },
    });

    expect(result.certifications).toEqual(['AWS']);
    expect(result.awards).toEqual([]);
    expect(result.skills.technical).toEqual(['React']);
  });

  it('falls back to full defaults for completely missing/malformed input', () => {
    expect(sanitizeCVData(null)).toEqual(sanitizeCVData({}));
    expect(sanitizeCVData(undefined).sectionOrder.length).toBeGreaterThan(0);
    expect(sanitizeCVData('garbage').personal.name).toBe('');
  });

  it('preserves well-formed data unchanged', () => {
    const wellFormed = sanitizeCVData({
      personal: { name: 'Grace Hopper', title: 'Engineer', email: 'g@example.com', phone: '', location: '', linkedin: '', website: '', summary: '' },
    });
    expect(sanitizeCVData(wellFormed)).toEqual(wellFormed);
  });
});
