'use client';

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  type DragEndEvent,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import type { ComponentType } from 'react';
import { useCVStore } from '@/store/cvStore';
import { sectionTitle } from '@/lib/cv';
import type { SectionId } from '@/types/cv.types';
import { SortableSectionCard } from '@/components/editor/SortableSectionCard';
import { PersonalSection } from '@/components/editor/sections/PersonalSection';
import { ExperienceSection } from '@/components/editor/sections/ExperienceSection';
import { EducationSection } from '@/components/editor/sections/EducationSection';
import { SkillsSection } from '@/components/editor/sections/SkillsSection';
import { ProjectsSection } from '@/components/editor/sections/ProjectsSection';
import { CertificationsSection } from '@/components/editor/sections/CertificationsSection';
import { AwardsSection } from '@/components/editor/sections/AwardsSection';

const sectionComponentMap: Record<SectionId, ComponentType<{ id?: string }>> = {
  personal: PersonalSection,
  experience: ExperienceSection,
  education: EducationSection,
  skills: SkillsSection,
  projects: ProjectsSection,
  certifications: CertificationsSection,
  awards: AwardsSection,
};

export function SectionPanel(): JSX.Element {
  const sectionOrder = useCVStore((state) => state.data.sectionOrder);
  const setSectionOrder = useCVStore((state) => state.setSectionOrder);

  // Explicit sensors, for two reasons:
  //
  // 1. KeyboardSensor needs `sortableKeyboardCoordinates`. dnd-kit's default
  //    keyboard coordinate getter translates the dragged node by a fixed 25px
  //    per arrow press, which has nothing to do with how tall a section card
  //    is — one ArrowDown could drop a section two or three slots away, or
  //    nowhere at all. The sortable coordinate getter moves selection
  //    item-by-item instead, so one press = one position.
  // 2. PointerSensor needs a small activation distance so a plain click on the
  //    grip handle does not register as a zero-length drag.
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  function handleDragEnd(event: DragEndEvent): void {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      return;
    }

    const oldIndex = sectionOrder.findIndex((section) => section === active.id);
    const newIndex = sectionOrder.findIndex((section) => section === over.id);

    if (oldIndex === -1 || newIndex === -1) {
      return;
    }

    const nextOrder = arrayMove(sectionOrder, oldIndex, newIndex);
    setSectionOrder(nextOrder);
  }

  return (
    <DndContext
      // Without an explicit id, dnd-kit derives its aria-describedby id from a
      // module-level counter that starts over on the client, so the server
      // rendered `DndDescribedBy-0` while the browser expected
      // `DndDescribedBy-1` — a React hydration mismatch on every editor load.
      id="cv-section-order"
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      // dnd-kit otherwise force-returns focus to the grip handle after a
      // keyboard drag ends, even when the user has since clicked into a text
      // field. Combined with the blur-cancel in SortableSectionCard that would
      // still steal the caret out of the field the user is typing in.
      accessibility={{ restoreFocus: false }}
    >
      <SortableContext items={sectionOrder} strategy={verticalListSortingStrategy}>
        <div className="space-y-4">
          {sectionOrder.map((sectionId) => {
            const SectionComponent = sectionComponentMap[sectionId];

            return (
              <SortableSectionCard
                key={sectionId}
                id={sectionId}
                title={sectionTitle(sectionId)}
              >
                <SectionComponent id={sectionId} />
              </SortableSectionCard>
            );
          })}
        </div>
      </SortableContext>
    </DndContext>
  );
}
