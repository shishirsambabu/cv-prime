import type { TemplateId } from '@/types/cv.types';

export const TEMPLATE_IDS: readonly TemplateId[] = [
  'classic',
  'modern',
  'minimal',
  'executive',
  'creative',
  'technical',
  'academic',
  'premium',
];

/**
 * The template a CV is shown in when its stored `template_id` is not one this
 * build knows: null, blank, a template that has since been removed, or a value
 * written by hand. It is a free template, so the fallback can never put a CV
 * behind the Pro gate.
 */
export const FALLBACK_TEMPLATE_ID: TemplateId = 'modern';

/**
 * `cvs.template_id` is free text in the database, so a row can carry a value
 * no template exists for. Every surface that picks a template from a row must
 * go through this: indexing a template map with the raw value yields
 * `undefined`, which crashed the dashboard (for every CV, not just the bad
 * one) and the editor. One fallback everywhere also keeps the editor preview,
 * the share page and the exported PDF on the same template.
 */
export function normalizeTemplateId(value: unknown): TemplateId {
  return typeof value === 'string' && (TEMPLATE_IDS as readonly string[]).includes(value)
    ? (value as TemplateId)
    : FALLBACK_TEMPLATE_ID;
}
