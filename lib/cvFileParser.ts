const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;

interface MammothModule {
  default?: {
    extractRawText(input: { buffer: Buffer }): Promise<{ value: string }>;
  };
  extractRawText?(input: { buffer: Buffer }): Promise<{ value: string }>;
}

function normalizeExtractedText(value: string): string {
  return value
    .replace(/\r/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]{2,}/g, ' ')
    .trim();
}

function isDocx(file: File): boolean {
  return (
    file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
    file.name.toLowerCase().endsWith('.docx')
  );
}

function isPdf(file: File): boolean {
  return file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
}

function isPlainText(file: File): boolean {
  return file.type === 'text/plain' || file.name.toLowerCase().endsWith('.txt');
}

async function extractPdfText(buffer: Buffer): Promise<string> {
  // unpdf ships a serverless-safe pdfjs build (no DOM globals required), unlike
  // pdf-parse/pdfjs-dist which break in the Node serverless runtime.
  const { extractText, getDocumentProxy } = await import('unpdf');
  const pdf = await getDocumentProxy(new Uint8Array(buffer));
  const { text } = await extractText(pdf, { mergePages: true });
  return normalizeExtractedText(Array.isArray(text) ? text.join('\n') : text);
}

async function extractDocxText(buffer: Buffer): Promise<string> {
  const mammothModule = (await import('mammoth')) as MammothModule;
  const extractor = mammothModule.default?.extractRawText ?? mammothModule.extractRawText;

  if (!extractor) {
    throw new Error('DOCX parsing is unavailable.');
  }

  const parsed = await extractor({ buffer });
  return normalizeExtractedText(parsed.value);
}

export async function extractCVTextFromFile(file: File): Promise<string> {
  if (file.size > MAX_UPLOAD_BYTES) {
    throw new Error('CV_UPLOAD_TOO_LARGE');
  }

  if (isPlainText(file)) {
    return normalizeExtractedText(await file.text());
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  if (isPdf(file)) {
    return extractPdfText(buffer);
  }

  if (isDocx(file)) {
    return extractDocxText(buffer);
  }

  throw new Error('CV_FILE_UNSUPPORTED');
}
