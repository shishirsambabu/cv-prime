'use client';

import {
  DndContext,
  type DragEndEvent,
  closestCenter,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
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
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
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
