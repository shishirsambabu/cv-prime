/**
 * True only for a YYYY-MM-DD string naming a day that exists. `Date.parse`
 * alone is not enough: it accepts 2025-02-31 and rolls it over to 3 March, so
 * the value passed validation and then failed the database's date cast as a
 * 500 carrying the raw Postgres message.
 */
export function isRealCalendarDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}
