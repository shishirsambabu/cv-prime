import { NextResponse } from 'next/server';
import { z } from 'zod';
import { normalizeGeneratedCVResult } from '@/lib/aiGeneratedCV';
import { lenientCVData, lenientScore, lenientStringArray } from '@/lib/aiResultSchemas';
import { callOpenRouter, parseJsonFromModel } from '@/lib/openrouter';
import { checkCVJobRelevance, RELEVANCE_TIMEOUT_MS } from '@/lib/cvJobRelevanceGuard';
import { extractCVTextFromFile } from '@/lib/cvFileParser';
import { getUserOpenRouterKey } from '@/lib/getUserOpenRouterKey';
import { PRO_TEMPLATES } from '@/lib/constants';
import { getUserPlan } from '@/lib/plan';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';
import type { Database, Json } from '@/types/database.types';

export const runtime = 'nodejs';
// Without this Vercel Hobby kills the function at 10 s — well below the
// 15-25 s an OpenRouter generation call typically takes for a full CV.
export const maxDuration = 60;

const MIN_CV_TEXT_LENGTH = 80;

/**
 * Everything this route does must finish inside `maxDuration` (60 s), or
 * Vercel kills it and the wizard gets an HTML 504 instead of a JSON error it
 * can show. The relevance guard (up to 28 s) and generation (55 s) each used
 * their own budget, so together they could run to ~85 s, plus file parsing.
 * Both now draw from one deadline measured from the start of the request.
 */
const ROUTE_BUDGET_MS = 55_000;
/** Generation gets at least this much; the guard is skipped rather than eat into it. */
const MIN_GENERATION_BUDGET_MS = 40_000;
/** Below this there is no realistic chance of a full CV coming back. */
const MIN_USEFUL_GENERATION_MS = 15_000;
/** The guard is not worth starting with less time than this. */
const MIN_GUARD_BUDGET_MS = 3_000;
const MAX_CV_TEXT_LENGTH = 25_000;

const templateIdSchema = z.enum([
  'classic',
  'modern',
  'minimal',
  'executive',
  'creative',
  'technical',
  'academic',
  'premium',
]);

const aiGenerateFormSchema = z.object({
  jobDescription: z.string().trim().min(50, 'Paste the job description first.').max(15_000),
  templateId: templateIdSchema,
  cvText: z.string().trim().max(MAX_CV_TEXT_LENGTH).optional(),
});

const generatedCVResultSchema = z.object({
  // A missing, non-string or over-long title is not a reason to discard a
  // finished CV; normalizeGeneratedCVResult falls back to a default title.
  title: z
    .unknown()
    .transform((value) => (typeof value === 'string' ? value.trim().slice(0, 200) : '')),
  // Repaired, not strictly validated: see lenientCVData.
  cvData: lenientCVData,
  // Accepts 74.5 or "74"; a missing score shows as 0 rather than losing the CV.
  score: lenientScore.catch(0),
  // No .max() upper-bounds: exceeding them threw and hit the generic
  // "Could not generate" catch. We truncate in normalizeGeneratedCVResult.
  missingKeywords: lenientStringArray,
  presentKeywords: lenientStringArray,
  suggestions: lenientStringArray,
});

function getFormString(formData: FormData, key: string): string | undefined {
  const value = formData.get(key);
  return typeof value === 'string' ? value : undefined;
}

function getUploadedFile(formData: FormData): File | null {
  const value = formData.get('cvFile');

  if (value instanceof File && value.size > 0) {
    return value;
  }

  return null;
}

const GENERATE_SYSTEM_PROMPT =
  'You are an expert CV optimisation specialist. Extract the candidate data from their current CV, then rewrite it for the provided job description. Return only valid JSON with this shape: { "title": "Role-targeted title", "cvData": { "personal": { "name": "", "title": "", "email": "", "phone": "", "location": "", "linkedin": "", "website": "", "summary": "" }, "experience": [{ "id": "stable-id", "company": "", "role": "", "startDate": "", "endDate": "", "current": false, "bullets": [] }], "education": [{ "id": "stable-id", "institution": "", "degree": "", "field": "", "startDate": "", "endDate": "", "gpa": "" }], "skills": { "technical": [], "soft": [], "languages": [] }, "projects": [{ "id": "stable-id", "name": "", "description": "", "tech": [], "url": "" }], "certifications": [], "awards": [], "sectionOrder": ["personal", "experience", "education", "skills", "projects", "certifications", "awards"] }, "score": 0, "missingKeywords": [], "presentKeywords": [], "suggestions": [] }. The shapes above show placeholder values ONLY — you must replace every placeholder with real content extracted from the source CV. Rules: (1) Never invent employers, schools, dates, certifications, metrics, or skills not supported by the source. (2) Rewrite every experience bullet to start with a strong action verb and, where the source supports it, add a quantified result — never fabricate specific numbers not implied by the source. (3) Weave in important JD keywords wherever truthful. (4) Tighten the professional summary to 3-4 lines aligned to the target role. (5) For "score": compute an honest integer 0-100 reflecting how well the tailored CV matches the JD — factor in keyword coverage, relevant experience, and seniority; never leave it at 0. (6) "presentKeywords": JD keywords genuinely covered; "missingKeywords": important ones still absent. (7) "suggestions": 3-6 concrete, actionable improvements under 15 words each.';

function fileErrorResponse(error: unknown): NextResponse | null {
  if (!(error instanceof Error)) {
    return null;
  }

  if (error.message === 'CV_UPLOAD_TOO_LARGE') {
    return NextResponse.json(
      { error: 'CV_UPLOAD_TOO_LARGE', message: 'Upload a CV smaller than 5 MB.' },
      { status: 400 }
    );
  }

  if (error.message === 'CV_FILE_UNSUPPORTED') {
    return NextResponse.json(
      { error: 'CV_FILE_UNSUPPORTED', message: 'Upload a PDF, DOCX, or TXT CV.' },
      { status: 400 }
    );
  }

  return null;
}

export async function POST(req: Request): Promise<NextResponse> {
  const deadline = Date.now() + ROUTE_BUDGET_MS;
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const limited = await rateLimit(user.id, 'ai-generate-cv', 20, '1h');
  if (limited) {
    return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });
  }

  const formData = await req.formData().catch(() => null);
  if (!formData) {
    return NextResponse.json({ error: 'Invalid form upload' }, { status: 400 });
  }

  const body = aiGenerateFormSchema.safeParse({
    jobDescription: getFormString(formData, 'jobDescription'),
    templateId: getFormString(formData, 'templateId') ?? 'modern',
    cvText: getFormString(formData, 'cvText'),
  });
  if (!body.success) {
    return NextResponse.json({ error: body.error.flatten() }, { status: 400 });
  }

  const plan = await getUserPlan(user.id);
  if (plan === 'free' && PRO_TEMPLATES.includes(body.data.templateId)) {
    return NextResponse.json(
      { error: 'PLAN_GATE', message: 'Upgrade to Pro to use this template.' },
      { status: 403 }
    );
  }

  const apiKey = await getUserOpenRouterKey(user.id);
  if (!apiKey) {
    return NextResponse.json({ error: 'NO_KEY' }, { status: 400 });
  }

  const file = getUploadedFile(formData);
  let sourceCVText = body.data.cvText?.trim() ?? '';

  // The file is the preferred source, but pasted text is the fallback the UI
  // itself tells people to use when a file cannot be read (a scanned PDF has
  // no text layer). The file used to replace the pasted text unconditionally,
  // so following that advice changed nothing: the same error came back on
  // every attempt for as long as the file stayed selected.
  const pastedCVText = sourceCVText;
  if (file) {
    try {
      const fileText = (await extractCVTextFromFile(file)).trim();
      if (fileText.length >= MIN_CV_TEXT_LENGTH || pastedCVText.length < MIN_CV_TEXT_LENGTH) {
        sourceCVText = fileText;
      }
    } catch (error) {
      if (pastedCVText.length < MIN_CV_TEXT_LENGTH) {
        const response = fileErrorResponse(error);
        if (response) {
          return response;
        }

        return NextResponse.json(
          { error: 'CV_PARSE_FAILED', message: 'Could not read this CV. Try a text copy.' },
          { status: 400 }
        );
      }
    }
  }

  // Pasted text is capped by the input schema; text extracted from a file was
  // not, so a long document went to the model whole, twice, on the user's key.
  sourceCVText = sourceCVText.slice(0, MAX_CV_TEXT_LENGTH);

  if (sourceCVText.length < MIN_CV_TEXT_LENGTH) {
    return NextResponse.json(
      { error: 'CV_TEXT_TOO_SHORT', message: 'Upload a readable CV or paste more CV text.' },
      { status: 400 }
    );
  }

  // QC Guardrail: fast domain-relevance check before the expensive generation call.
  // Uses the same user OpenRouter key, minimal tokens (~220), cheap model.
  const guardBudget = Math.min(
    RELEVANCE_TIMEOUT_MS,
    deadline - Date.now() - MIN_GENERATION_BUDGET_MS
  );
  try {
    // A guard skipped for lack of time lets generation through, exactly as a
    // guard that fails does.
    const relevance =
      guardBudget >= MIN_GUARD_BUDGET_MS
        ? await checkCVJobRelevance(apiKey, body.data.jobDescription, sourceCVText, guardBudget)
        : null;
    if (relevance && !relevance.relevant) {
      return NextResponse.json(
        {
          error: 'JOB_CV_MISMATCH',
          message: relevance.reason,
          cvDomain: relevance.cvDomain,
          jdDomain: relevance.jdDomain,
          domainMatchScore: relevance.domainMatchScore,
        },
        { status: 422 }
      );
    }
  } catch {
    // Guardrail failure is non-fatal — proceed with generation rather than blocking the user.
  }

  const generationBudget = deadline - Date.now();
  if (generationBudget < MIN_USEFUL_GENERATION_MS) {
    return NextResponse.json(
      {
        error: 'AI_FAILED',
        message: 'Reading your CV took too long to also generate it. Try again, or paste the CV text instead of uploading a file.',
      },
      { status: 503 }
    );
  }

  try {
    const content = await callOpenRouter({
      apiKey,
      jsonMode: true,
      // 2600 tokens was not enough for senior / 3-page CVs — the model output
      // was silently truncated mid-JSON, causing JSON.parse to throw and the
      // entire generation to return "Could not generate the tailored CV."
      // 4096 covers even dense executive CVs with many experience entries.
      maxTokens: 4096,
      // Whatever is left of the route's budget (at most 55 s, leaving 5 s of
      // the 60 s limit to save the CV and answer).
      timeoutMs: generationBudget,
      messages: [
        {
          role: 'system',
          content: GENERATE_SYSTEM_PROMPT,
        },
        {
          role: 'user',
          content: `Job description:\n${body.data.jobDescription}\n\nSource CV:\n${sourceCVText}`,
        },
      ],
    });
    const parsed = generatedCVResultSchema.parse(parseJsonFromModel(content));
    const result = normalizeGeneratedCVResult(parsed);
    const createdAt = new Date().toISOString();
    const payload: Database['public']['Tables']['cvs']['Insert'] = {
      user_id: user.id,
      title: result.title,
      template_id: body.data.templateId,
      data: result.cvData as unknown as Json,
      ats_score: result.score,
      ats_score_history: [{ score: result.score, createdAt }] as unknown as Json,
      last_edited: createdAt,
    };

    const { data: cv, error } = await supabase
      .from('cvs')
      .insert([payload] as never)
      .select('id')
      .single();

    if (error || !cv) {
      return NextResponse.json(
        { error: error?.message ?? 'Could not save the generated CV.' },
        { status: 500 }
      );
    }

    const savedCv = cv as Pick<Database['public']['Tables']['cvs']['Row'], 'id'>;

    return NextResponse.json(
      {
        cvId: savedCv.id,
        title: result.title,
        score: result.score,
        missingKeywords: result.missingKeywords,
        presentKeywords: result.presentKeywords,
        suggestions: result.suggestions,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error && error.message === 'KEY_INVALID') {
      return NextResponse.json({ error: 'KEY_INVALID' }, { status: 401 });
    }

    // Log the real error so we can diagnose truncated JSON / schema mismatches.
    console.error('[ai-generate-cv] generation failed:', error instanceof Error ? error.message : error);

    const isParseError = error instanceof SyntaxError || (error instanceof Error && error.name === 'ZodError');
    return NextResponse.json(
      {
        error: 'AI_FAILED',
        message: isParseError
          ? 'The AI returned an incomplete response. Please try again — this usually succeeds on a second attempt.'
          : 'Could not generate the tailored CV. Please try again.',
      },
      { status: 500 }
    );
  }
}
