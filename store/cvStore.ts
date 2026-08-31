'use client';

import { create } from 'zustand';
import { temporal } from 'zundo';
import type { CVData, SectionId, TemplateId } from '@/types/cv.types';
import {
  createDefaultCVData,
  moveSectionOrder,
  setNestedValue,
} from '@/lib/cv';

interface CVStore {
  cvId: string | null;
  data: CVData;
  templateId: TemplateId;
  isDirty: boolean;
  lastSaved: Date | null;

  setCVId: (id: string) => void;
  hydrate: (payload: { cvId: string; data: CVData; templateId: TemplateId }) => void;
  setData: (data: CVData) => void;
  updateField: (path: string, value: unknown) => void;
  updateArrayField: (path: string, value: string[]) => void;
  setTemplateId: (id: TemplateId) => void;
  setSectionOrder: (order: SectionId[]) => void;
  moveSection: (fromIndex: number, toIndex: number) => void;
  markSaved: () => void;
  clearDirty: () => void;
  undo: () => void;
  redo: () => void;
  clearHistory: () => void;
}

export const useCVStore = create<CVStore>()(
  temporal(
    (set) => ({
      cvId: null,
      data: createDefaultCVData(),
      templateId: 'classic',
      isDirty: false,
      lastSaved: null,

      setCVId: (id) => set({ cvId: id }),
      hydrate: ({ cvId, data, templateId }) =>
        set({
          cvId,
          data: {
            ...createDefaultCVData(),
            ...data,
            sectionOrder: data.sectionOrder ?? createDefaultCVData().sectionOrder,
          },
          templateId,
          isDirty: false,
          lastSaved: new Date(),
        }),
      setData: (data) => set({ data, isDirty: true }),
      updateField: (path, value) =>
        set((state) => ({
          data: setNestedValue(
            state.data as unknown as Record<string, unknown>,
            path,
            value
          ) as unknown as CVData,
          isDirty: true,
        })),
      updateArrayField: (path, value) =>
        set((state) => ({
          data: setNestedValue(
            state.data as unknown as Record<string, unknown>,
            path,
            value
          ) as unknown as CVData,
          isDirty: true,
        })),
      setTemplateId: (id) => set({ templateId: id, isDirty: true }),
      setSectionOrder: (order) =>
        set((state) => ({
          data: { ...state.data, sectionOrder: order },
          isDirty: true,
        })),
      moveSection: (fromIndex, toIndex) =>
        set((state) => ({
          data: {
            ...state.data,
            sectionOrder: moveSectionOrder(state.data.sectionOrder, fromIndex, toIndex),
          },
          isDirty: true,
        })),
      markSaved: () => set({ isDirty: false, lastSaved: new Date() }),
      clearDirty: () => set({ isDirty: false }),
      undo: () => {
        const temporalState = useCVStore.temporal.getState();
        temporalState.undo();
        // zundo restores {cvId, data, templateId} directly and never touches
        // isDirty, so without this an undo/redo could leave state that
        // diverges from what's on the server while the UI still shows
        // "saved" and autosave has nothing to persist it.
        set({ isDirty: true });
      },
      redo: () => {
        const temporalState = useCVStore.temporal.getState();
        temporalState.redo();
        set({ isDirty: true });
      },
      clearHistory: () => {
        const temporalState = useCVStore.temporal.getState();
        temporalState.clear();
      },
    }),
    {
      limit: 20,
      partialize: (state) => ({
        cvId: state.cvId,
        data: state.data,
        templateId: state.templateId,
      }),
    }
  )
);

export function getCVState(): CVStore {
  return useCVStore.getState();
}
