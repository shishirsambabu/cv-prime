import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { extractCVTextFromFile } from '@/lib/cvFileParser';

const MAX_BYTES = 5 * 1024 * 1024; // 5 MB

/**
 * Extracts plain text from an uploaded resume (PDF / DOCX / TXT) so the
 * BYOK AI tools can offer file upload instead of paste. Reuses the same
 * parser as the main AI workflow. Requires auth (the tools do anyway);
 * no AI key or tokens involved.
 */
export async function POST(req: Request): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const formData = await req.formData().catch(() => null);
  const file = formData?.get('file');
  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: 'NO_FILE' }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: 'TOO_LARGE' }, { status: 400 });
  }

  try {
    const text = await extractCVTextFromFile(file);
    if (!text || text.trim().length < 20) {
      return NextResponse.json({ error: 'EMPTY', message: 'Could not read enough text from that file.' }, { status: 422 });
    }
    return NextResponse.json({ text });
  } catch {
    return NextResponse.json({ error: 'PARSE_FAILED', message: 'Could not read that file. Try a PDF, DOCX, or paste the text.' }, { status: 500 });
  }
}
