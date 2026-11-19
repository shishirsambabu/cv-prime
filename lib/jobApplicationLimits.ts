/**
 * Field limits for a tracked job. Shared by the job-applications API routes
 * (which enforce them) and the job tracker form (which shows them), so the
 * form can never accept text the server will refuse.
 */
export const JOB_COMPANY_MAX = 120;
export const JOB_ROLE_MAX = 120;
export const JOB_NOTES_MAX = 1000;
