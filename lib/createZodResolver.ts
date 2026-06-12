import type { FieldErrors, Resolver } from 'react-hook-form';
import type { z } from 'zod';

export function createZodResolver<TValues extends Record<string, unknown>>(
  schema: z.ZodType<TValues>
): Resolver<TValues> {
  return async (values) => {
    const result = schema.safeParse(values);

    if (result.success) {
      return { values: result.data, errors: {} };
    }

    const fieldErrors = result.error.flatten().fieldErrors;
    const errors: Record<
      string,
      {
        type: 'manual';
        message: string;
      }
    > = {};

    for (const fieldName of Object.keys(fieldErrors)) {
      const messages =
        fieldErrors[fieldName as keyof typeof fieldErrors] as string[] | undefined;

      if (!messages || messages.length === 0) {
        continue;
      }

      errors[fieldName] = {
        type: 'manual',
        message: messages[0] ?? 'Invalid value.',
      };
    }

    return { values: {}, errors: errors as FieldErrors<TValues> };
  };
}
