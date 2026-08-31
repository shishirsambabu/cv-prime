import { fireEvent, render, screen } from '@testing-library/react';
import { EducationSection } from '@/components/editor/sections/EducationSection';
import { useCVStore } from '@/store/cvStore';
import { createDefaultCVData, createEmptyEducation } from '@/lib/cv';

// Regression coverage for the keystroke-glitch/store-echo-reset bug (fixed in
// 3d6d143), applied to the Education section.

function typeCharsInto(element: HTMLInputElement, text: string) {
  let value = element.value;
  for (const char of text) {
    value += char;
    fireEvent.change(element, { target: { value } });
  }
}

describe('EducationSection typing', () => {
  beforeEach(() => {
    useCVStore.setState({
      data: { ...createDefaultCVData(), education: [createEmptyEducation()] },
      isDirty: false,
    });
  });

  it('keeps every keystroke in the institution field without resetting or losing focus', () => {
    render(<EducationSection />);

    const institution = screen.getByLabelText('Institution') as HTMLInputElement;
    institution.focus();
    typeCharsInto(institution, 'Indian Institute of Technology');

    expect(institution.value).toBe('Indian Institute of Technology');
    expect(document.activeElement).toBe(institution);
  });

  it('does not crash or drop fields when typing rapidly across a whole entry', () => {
    render(<EducationSection />);

    const degree = screen.getByLabelText('Degree') as HTMLInputElement;
    const field = screen.getByLabelText('Field') as HTMLInputElement;
    const gpa = screen.getByLabelText('GPA') as HTMLInputElement;

    typeCharsInto(degree, 'B.Tech');
    typeCharsInto(field, 'Computer Science');
    typeCharsInto(gpa, '8.7');

    expect(degree.value).toBe('B.Tech');
    expect(field.value).toBe('Computer Science');
    expect(gpa.value).toBe('8.7');
  });
});
