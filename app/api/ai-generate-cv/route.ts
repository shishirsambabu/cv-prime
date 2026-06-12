import { NextResponse } from 'next/server';
import { z } from 'zod';
import { normalizeGeneratedCVResult } from '@/lib/aiGeneratedCV';
import { callOpenRouter } from '@/lib/openrouter';
import { cvDataSchema } from '@/lib/cv.schema';
import { extractCVTextFromFile } from '@/lib/cvFileParser';
import { getUserOpenRouterKey } from '@/lib/getUserOpenRouterKey';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';
import type { Database, Json } from '@/types/database.types';

export const runtime = 'nodejs';

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
  jobDescription: z.string().trim().min(50, 'Paste the job description first.'),
  templateId: templateIdSchema,
  cvText: z.string().trim().optional(),
});

const generatedCVResultSchema = z.object({
  title: z.string().min(1).max(100),
  cvData: cvDataSchema,
  score: z.number().int().min(0).max(100),
  missingKeywords: z.array(z.string()).max(30),
  presentKeywords: z.array(z.string()).max(30),
  suggestions: z.array(z.string()).max(12),
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

function parseJsonFromModel(content: string): unknown {
  const cleaned = content
    .trim()
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim();

  return JSON.parse(cleaned) as unknown;
}

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

  const apiKey = await getUserOpenRouterKey(user.id);
  if (!apiKey) {
    return NextResponse.json({ error: 'NO_KEY' }, { status: 400 });
  }

  const file = getUploadedFile(formData);
  let sourceCVText = body.data.cvText?.trim() ?? '';

  if (file) {
    try {
      sourceCVText = await extractCVTextFromFile(file);
    } catch (error) {
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

  if (sourceCVText.length < 80) {
    return NextResponse.json(
      { error: 'CV_TEXT_TOO_SHORT', message: 'Upload a readable CV or paste more CV text.' },
      { status: 400 }
    );
  }

  try {
    const content = await callOpenRouter({
      apiKey,
      jsonMode: true,
      maxTokens: 2600,
      messages: [
        {
          role: 'system',
          content:
            'You are an expert CV optimisation specialist. Extract the candidate data from their current CV, then rewrite it for the provided job description. Return only valid JSON with this shape: { "title": "Role-targeted title", "cvData": { "personal": { "name": "", "title": "", "email": "", "phone": "", "location": "", "linkedin": "", "website": "", "summary": "" }, "experience": [{ "id": "stable-id", "company": "", "role": "", "startDate": "", "endDate": "", "current": false, "bullets": [] }], "education": [{ "id": "stable-id", "institution": "", "degree": "", "field": "", "startDate": "", "endDate": "", "gpa": "" }], "skills": { "technical": [], "soft": [], "languages": [] }, "projects": [{ "id": "stable-id", "name": "", "description": "", "tech": [], "url": "" }], "certifications": [], "awards": [], "sectionOrder": ["personal", "experience", "education", "skills", "projects", "certifications", "awards"] }, "score": 0, "missingKeywords": [], "presentKeywords": [], "suggestions": [] }. Keep every rewrite truthful to the source CV. Do not invent employers, schools, dates, certifications, metrics, or skills that are not supported by the source. Improve phrasing, structure, keyword alignment, and ATS readability.',
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

    return NextResponse.json(
      { error: 'AI_FAILED', message: 'Could not generate the tailored CV.' },
      { status: 500 }
    );
  }
}
