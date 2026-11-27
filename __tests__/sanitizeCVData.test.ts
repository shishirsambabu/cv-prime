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
import { cvDataSchema } from '@/lib/cv.schema';

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

  // A null (or number) where a string belongs is not a missing key, so the
  // spread-based backfill kept it: the editor crashed in computeCompleteness
  // and the templates (`value.trim is not a function`), and every autosave
  // sent the null back to a route whose schema answers 400.
  it('replaces wrong-typed fields with defaults instead of passing them through', () => {
    const result = sanitizeCVData({
      personal: { name: 'Asha Rao', title: null, phone: 919000000000, linkedin: null, summary: 42 },
      experience: [{ id: 'e1', company: 'Paytm', role: null, endDate: null, current: null, bullets: ['x'] }],
      education: [{ id: 'd1', institution: 'IIT', field: null, gpa: 8.7 }],
      projects: [{ id: 'p1', name: 'Ledger', description: null, url: null, tech: ['Go'] }],
    });

    expect(result.personal).toMatchObject({ name: 'Asha Rao', title: '', phone: '919000000000', linkedin: '', summary: '42' });
    expect(result.experience[0]).toMatchObject({ id: 'e1', company: 'Paytm', role: '', endDate: '', current: false, bullets: ['x'] });
    expect(result.education[0]).toMatchObject({ institution: 'IIT', field: '', gpa: '8.7' });
    expect(result.projects[0]).toMatchObject({ name: 'Ledger', description: '', url: '', tech: ['Go'] });
  });

  it('produces data the save route accepts, whatever was stored', () => {
    const result = sanitizeCVData({
      personal: { name: null, email: null },
      experience: [null, { company: null, bullets: 'nope' }],
      education: [{ gpa: null }],
      skills: null,
      projects: [{ tech: null, url: null }],
      certifications: null,
      sectionOrder: ['experience', 'hobbies'],
    });

    expect(cvDataSchema.safeParse(result).success).toBe(true);
  });

  it('repairs a section order that is short, repeats itself or names unknown sections', () => {
    expect(sanitizeCVData({ sectionOrder: ['skills', 'hobbies', 'skills', 'personal'] }).sectionOrder).toEqual([
      'skills',
      'personal',
      'experience',
      'education',
      'projects',
      'certifications',
      'awards',
    ]);
  });

  it('keeps a complete custom section order as stored', () => {
    const order = ['personal', 'skills', 'experience', 'projects', 'education', 'awards', 'certifications'];
    expect(sanitizeCVData({ sectionOrder: order }).sectionOrder).toEqual(order);
  });
});
