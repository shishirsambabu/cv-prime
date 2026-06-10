# Agent 02 — CV Editor
# Read AGENTS.md first. Then MEMORY.md. Confirm Phase 1 is complete before starting.

---

## YOUR MISSION
Build the two-panel CV editor — the core product experience. This is what users
spend 90% of their time in. It must be fast, intuitive, and reliable.

---

## ARCHITECTURE DECISION

The editor is a Client Component because it needs real-time state. However, the
page shell (app/(dashboard)/editor/[cvId]/page.tsx) is a Server Component that
fetches the CV data and passes it as props.

```
Server Component (page.tsx)
  → fetches CV from Supabase
  → passes data to:
      CVEditor (Client Component — 'use client')
        ├── SectionPanel (left, scrollable)
        └── LivePreview (right, fixed)
```

---

## STEP 1 — Zustand store (store/cvStore.ts)

```typescript
'use client';
import { create } from 'zustand';
import { temporal } from 'zundo'; // undo/redo middleware
import type { CVData, TemplateId } from '@/types/cv.types';

interface CVStore {
  cvId: string | null;
  data: CVData;
  templateId: TemplateId;
  isDirty: boolean;
  lastSaved: Date | null;

  // Actions
  setCVId: (id: string) => void;
  setData: (data: CVData) => void;
  updateField: (path: string, value: unknown) => void;
  setTemplateId: (id: TemplateId) => void;
  markSaved: () => void;
}

export const useCVStore = create<CVStore>()(
  temporal(
    (set) => ({
      cvId: null,
      data: getDefaultCVData(),
      templateId: 'classic',
      isDirty: false,
      lastSaved: null,

      setCVId: (id) => set({ cvId: id }),
      setData: (data) => set({ data, isDirty: true }),
      updateField: (path, value) => set((state) => ({
        data: setNestedValue(state.data, path, value),
        isDirty: true,
      })),
      setTemplateId: (id) => set({ templateId: id, isDirty: true }),
      markSaved: () => set({ isDirty: false, lastSaved: new Date() }),
    }),
    { limit: 20 } // 20 undo steps
  )
);
```

Install zundo: `npm install zundo`

---

## STEP 2 — Auto-save hook (hooks/useAutoSave.ts)

```typescript
'use client';
import { useEffect, useRef } from 'react';
import { useCVStore } from '@/store/cvStore';

export function useAutoSave() {
  const { cvId, data, isDirty, markSaved } = useCVStore();
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!isDirty || !cvId) return;

    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(async () => {
      await fetch(`/api/cvs/${cvId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data }),
      });
      markSaved();
    }, 30_000); // 30s debounce

    return () => clearTimeout(timerRef.current);
  }, [isDirty, data, cvId]);
}
```

---

## STEP 3 — Section Panel

Build each section as a separate sub-component under components/editor/sections/:

- PersonalSection.tsx — 8 fields (name, title, email, phone, location, linkedin, website, summary)
- ExperienceSection.tsx — repeatable, add/remove entries, bullets as textarea (one per line)
- EducationSection.tsx — repeatable, add/remove entries
- SkillsSection.tsx — tag input for each category (technical, soft, languages)
- ProjectsSection.tsx — repeatable, tech as tag input
- CertificationsSection.tsx — simple list
- AwardsSection.tsx — simple list

Each section uses react-hook-form connected to Zustand via useEffect watching form.watch().
Use zod for validation. Show inline errors.

Section drag-and-drop: use @dnd-kit/sortable to allow reordering top-level sections.
Store section order in cvStore alongside CVData.

---

## STEP 4 — Live Preview

LivePreview.tsx subscribes to Zustand and re-renders the template:

```typescript
'use client';
import { useCVStore } from '@/store/cvStore';
import { templateMap } from '@/components/templates';

export function LivePreview() {
  const { data, templateId } = useCVStore();
  const Template = templateMap[templateId];

  return (
    <div className="bg-white shadow-sm" style={{ width: 794, minHeight: 1123 }}>
      <Template data={data} />
    </div>
  );
}
```

The preview pane scrolls independently. On mobile it becomes a tab.

---

## STEP 5 — Template system

All templates share this interface:
```typescript
interface TemplateProps {
  data: CVData;
  forExport?: boolean; // true when rendering for PDF — disables all interactivity
}
```

TemplateClassic rules:
- Single column, serif headings (font-serif from Tailwind)
- Section headers: uppercase, letter-spacing, thin bottom border
- Must render at exactly 794px width
- Font size: 10pt body, 11pt headings (use pt units inside template for PDF accuracy)
- All text must be selectable (no images for text content)
- Zero Tailwind responsive classes — templates are fixed-width documents

Build TemplateModern and TemplateMinimal with the same discipline.
Pro templates are identical in code quality — just gated by plan check in the UI.

---

## STEP 6 — Template switcher

Show a horizontal scroll of thumbnail previews. Free templates are clickable.
Pro templates show a lock icon and open the upgrade modal on click.

Plan check:
```typescript
import { PRO_TEMPLATES } from '@/lib/constants';

const isGated = PRO_TEMPLATES.includes(templateId) && userPlan === 'free';
```

---

## STEP 7 — Editor page (app/(dashboard)/editor/[cvId]/page.tsx)

```typescript
import { createClient } from '@/lib/supabase/server';
import { CVEditor } from '@/components/editor/CVEditor';
import { notFound } from 'next/navigation';

export default async function EditorPage({ params }: { params: { cvId: string } }) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: cv } = await supabase
    .from('cvs')
    .select('*')
    .eq('id', params.cvId)
    .eq('user_id', user!.id) // RLS also enforces this, but be explicit
    .single();

  if (!cv) notFound();

  return <CVEditor initialCV={cv} />;
}
```

---

## STEP 8 — CRUD API route (app/api/cvs/[cvId]/route.ts)

PATCH: update CV data (auto-save calls this)
DELETE: delete CV
GET: fetch single CV (used for public share)

---

## TESTS TO WRITE

- cvStore.test.ts — test updateField, undo, redo, isDirty flag
- useAutoSave.test.ts — test debounce timing and fetch call
- PersonalSection.test.tsx — test form validation, Zustand update
- LivePreview.test.tsx — test that template switches on templateId change

---

## DONE — Update MEMORY.md

Mark Phase 2 complete. Note any schema changes made.
Tick all Phase 2 boxes in CHECKLIST.md.
