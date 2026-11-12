/**
 * Published description of how CV Prime's three resume scores are calculated.
 *
 * This file is documentation that ships to the public /ats-score-methodology
 * page, so it must stay in step with the real scoring code:
 *   - app/api/ats-score/route.ts              (AI match score rubric)
 *   - components/tools/AtsKeywordMatcher.tsx  (keyword coverage score)
 *   - components/tools/ResumeStrengthAnalyzer.tsx (writing-quality score)
 * __tests__/atsMethodology.test.ts fails if the numbers here drift from them.
 */

export interface ScoreBand {
  range: string;
  label: string;
  meaning: string;
}

export interface StrengthCheck {
  label: string;
  max: number;
  measures: string;
  fullMarks: string;
}

/** Rubric the AI match score is asked to follow (app/api/ats-score/route.ts). */
export const aiScoreBands: ScoreBand[] = [
  { range: '90-100', label: 'Excellent', meaning: 'Excellent keyword and experience match for this job description.' },
  { range: '70-89', label: 'Good', meaning: 'Good match with minor gaps to close.' },
  { range: '50-69', label: 'Moderate', meaning: 'Moderate match with notable missing keywords.' },
  { range: '30-49', label: 'Weak', meaning: 'Weak match with significant gaps.' },
  { range: '0-29', label: 'Poor', meaning: 'Fundamentally misaligned with the role.' },
];

export const aiScoreFactors: Array<{ title: string; body: string }> = [
  {
    title: 'Keyword overlap',
    body: 'Which of the skills, tools, and terms the job description asks for actually appear in your CV. The result lists up to 30 keywords found and up to 30 missing.',
  },
  {
    title: 'Relevant experience',
    body: 'Whether the work described in your CV is the kind of work the role involves, not just whether the same words appear.',
  },
  {
    title: 'Role seniority',
    body: 'Whether the level of responsibility in your CV fits the level the job description is hiring for.',
  },
];

/** Thresholds used by the free keyword matcher (AtsKeywordMatcher.tsx `band`). */
export const keywordBands: Array<{ min: number; range: string; label: string }> = [
  { min: 80, range: '80-100', label: 'Strong match' },
  { min: 65, range: '65-79', label: 'Decent — close the gaps' },
  { min: 45, range: '45-64', label: 'At risk — tailor it' },
  { min: 0, range: '0-44', label: 'Likely filtered out' },
];

export const KEYWORD_MATCHER_MAX_KEYWORDS = 30;

/** The six checks of the resume strength score (ResumeStrengthAnalyzer.tsx). */
export const strengthChecks: StrengthCheck[] = [
  {
    label: 'Length',
    max: 15,
    measures: 'Total word count.',
    fullMarks: '320 to 950 words. Under 200 words scores lowest; over 950 loses points for running long.',
  },
  {
    label: 'Action verbs',
    max: 20,
    measures: 'Share of bullet points that open with a strong action verb such as Built, Led, or Reduced.',
    fullMarks: 'At least 70% of bullets. Below 40% scores lowest.',
  },
  {
    label: 'Quantified impact',
    max: 20,
    measures: 'Share of bullet points that contain a number, percentage, or currency amount.',
    fullMarks: 'At least 50% of bullets. Below 25% scores lowest.',
  },
  {
    label: 'No filler',
    max: 15,
    measures: 'Count of weak phrases such as "responsible for", "worked on", and "team player".',
    fullMarks: 'Zero filler phrases. Four or more scores lowest.',
  },
  {
    label: 'Standard sections',
    max: 15,
    measures: 'How many of five standard headings are present: summary, experience, education, skills, and projects or certifications.',
    fullMarks: 'Four or five sections found. Fewer than two scores lowest.',
  },
  {
    label: 'Contact info',
    max: 15,
    measures: 'Whether an email address and a phone number appear as plain text.',
    fullMarks: 'Both present. Neither present scores lowest.',
  },
];

export const STRENGTH_SCORE_TOTAL = strengthChecks.reduce((sum, check) => sum + check.max, 0);
