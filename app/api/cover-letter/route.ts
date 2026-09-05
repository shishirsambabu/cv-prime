import { NextResponse } from 'next/server';
import { z } from 'zod';
import { callOpenRouter } from '@/lib/openrouter';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';
import { cvDataSchema } from '@/lib/cv.schema';
import { cvDataToPlainText } from '@/lib/cvText';
import { getUserOpenRouterKey } from '@/lib/getUserOpenRouterKey';
import type { Database } from '@/types/database.types';

type CoverLetterInsertResult = Pick<
  Database['public']['Tables']['cover_letters']['Row'],
  'id'
>;

const coverLetterSchema = z.object({
  cvId: z.string().uuid().optional(),
  cvData: cvDataSchema,
  jobDescription: z.string().min(50),
  tone: z.enum(['professional', 'friendly', 'executive']),
});

const toneInstruction: Record<z.infer<typeof coverLetterSchema>['tone'], string> = {
  professional: 'Use a clear, polished, professional tone.',
  friendly: 'Use a warm, confident, approachable tone.',
  executive: 'Use a concise, senior, commercially focused tone.',
};

export async function POST(req: Request): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const limited = await rateLimit(user.id, 'cover-letter', 20, '1h');
  if (limited) {
    return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });
  }

  const body = coverLetterSchema.safeParse(await req.json().catch(() => ({})));
  if (!body.success) {
    return NextResponse.json({ error: body.error.flatten() }, { status: 400 });
  }

  const apiKey = await getUserOpenRouterKey(user.id);
  if (!apiKey) {
    return NextResponse.json({ error: 'NO_KEY' }, { status: 400 });
  }

  // A cvId is only ever used to link this cover letter back to one of the
  // caller's own CVs — drop it rather than trusting it outright if it
  // doesn't resolve to a CV this user owns, instead of tagging the new
  // cover letter with someone else's cv_id.
  let ownedCvId: string | null = null;
  if (body.data.cvId) {
    const { data: ownedCv } = await supabase
      .from('cvs')
      .select('id')
      .eq('id', body.data.cvId)
      .eq('user_id', user.id)
      .maybeSingle();
    ownedCvId = (ownedCv as { id: string } | null)?.id ?? null;
  }

  try {
    const content = await callOpenRouter({
      apiKey,
      maxTokens: 850,
      messages: [
        {
          role: 'system',
          content: `You write tailored cover letters for job seekers. Keep it under 350 words. ${toneInstruction[body.data.tone]} Do not invent experience that is not present in the CV.`,
        },
        {
          role: 'user',
          content: `CV:\n${cvDataToPlainText(body.data.cvData)}\n\nJob description:\n${body.data.jobDescription}`,
        },
      ],
    });

    const payload: Database['public']['Tables']['cover_letters']['Insert'] = {
      user_id: user.id,
      cv_id: ownedCvId,
      title: `Cover letter - ${new Date().toLocaleDateString('en-IN')}`,
      content,
      job_description: body.data.jobDescription,
    };

    const { data: rawData, error } = await supabase
      .from('cover_letters')
      .insert([payload] as never)
      .select('id')
      .single();
    const data = rawData as CoverLetterInsertResult | null;

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ content, id: data?.id ?? null });
  } catch (error) {
    if (error instanceof Error && error.message === 'KEY_INVALID') {
      return NextResponse.json({ error: 'KEY_INVALID' }, { status: 401 });
    }

    return NextResponse.json(
      { error: 'AI_FAILED', message: 'Could not generate the cover letter.' },
      { status: 500 }
    );
  }
}
