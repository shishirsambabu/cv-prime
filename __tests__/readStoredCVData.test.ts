import { createDefaultCVData, readStoredCVData } from '@/lib/cv';

// The public /share page used to 404 on any stored row the strict schema
// rejected, while the editor and print page repaired the same row. All three
// now read stored data through readStoredCVData.
describe('readStoredCVData', () => {
  it('returns a schema-valid row unchanged', () => {
    const data = createDefaultCVData();
    data.personal.name = 'Asha Rao';
    expect(readStoredCVData(data)).toEqual(data);
  });

  it('repairs a legacy row with nulls and a short section order instead of rejecting it', () => {
    const repaired = readStoredCVData({
      personal: { name: 'Asha Rao', title: null, phone: 919000000000 },
      experience: [{ id: 'e1', company: 'Paytm', role: null, bullets: ['Built a ledger.'] }],
      sectionOrder: ['personal', 'experience', 'hobbies', 'experience'],
    });
    expect(repaired.personal.name).toBe('Asha Rao');
    expect(repaired.personal.title).toBe('');
    expect(repaired.experience[0]?.bullets).toEqual(['Built a ledger.']);
    expect(new Set(repaired.sectionOrder).size).toBe(repaired.sectionOrder.length);
    expect(repaired.sectionOrder).not.toContain('hobbies');
    expect(JSON.stringify(repaired)).not.toContain('null');
  });

  it('turns a missing or non-object value into an empty CV rather than throwing', () => {
    expect(readStoredCVData(null).personal.name).toBe('');
    expect(readStoredCVData('garbage').experience).toEqual([]);
  });
});
