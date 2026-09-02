import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ProjectsSection } from '@/components/editor/sections/ProjectsSection';
import { useCVStore } from '@/store/cvStore';
import { createDefaultCVData, createEmptyProject } from '@/lib/cv';

// Regression coverage: ProjectsSection uses the same store<->form echo-guard
// pattern that fixed the keystroke-glitch/tab-crash bug in ExperienceSection
// (3d6d143), but had no dedicated typing test of its own. The "tech stack"
// field is structurally the same raw-text-until-sync case as ExperienceSection's
// bullets textarea (comma-separated instead of newline-separated).

function seedOneProject() {
  const project = createEmptyProject();
  useCVStore.setState({
    data: { ...createDefaultCVData(), projects: [project] },
    isDirty: false,
  });
}

function typeCharsInto(element: HTMLInputElement | HTMLTextAreaElement, text: string) {
  let value = element.value;
  for (const char of text) {
    value += char;
    fireEvent.change(element, { target: { value } });
  }
}

describe('ProjectsSection typing', () => {
  beforeEach(() => {
    seedOneProject();
  });

  it('keeps every keystroke in the name and description fields without resetting', () => {
    render(<ProjectsSection />);

    const name = screen.getByLabelText('Name') as HTMLInputElement;
    name.focus();
    typeCharsInto(name, 'Resume Builder');
    expect(name.value).toBe('Resume Builder');
    expect(document.activeElement).toBe(name);

    const description = screen.getByLabelText('Description') as HTMLTextAreaElement;
    typeCharsInto(description, 'Built an ATS-friendly resume editor.');
    expect(description.value).toBe('Built an ATS-friendly resume editor.');
  });

  it('does not eat a trailing comma+space while typing the tech stack', () => {
    render(<ProjectsSection />);

    const tech = screen.getByLabelText('Tech stack') as HTMLInputElement;
    typeCharsInto(tech, 'React, ');

    // The exact class of regression from ExperienceSection's bullets field:
    // trimming/filtering on every keystroke would eat the space right after
    // the comma, so the visible value would silently revert to "React,".
    expect(tech.value).toBe('React, ');

    typeCharsInto(tech, 'TypeScript');
    expect(tech.value).toBe('React, TypeScript');
  });

  it('normalizes tech stack in the store only after sync, never mid-keystroke', async () => {
    render(<ProjectsSection />);

    const tech = screen.getByLabelText('Tech stack') as HTMLInputElement;
    typeCharsInto(tech, 'React, ');

    expect(tech.value).toBe('React, ');

    await waitFor(() => {
      expect(useCVStore.getState().data.projects[0]?.tech).toEqual(['React']);
    });

    // The store round-trip must not blow away what's still on screen or
    // steal focus while the user keeps typing.
    expect(tech.value).toBe('React, ');
  });
});
