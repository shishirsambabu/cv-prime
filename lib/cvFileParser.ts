const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;

interface PdfParseResult {
  text?: string;
}

type PdfParser = (buffer: Buffer) => Promise<PdfParseResult>;

interface PdfParseModule {
  default?: PdfParser;
}

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
  const pdfParseModule = (await import('pdf-parse')) as PdfParseModule;
  const parsePdf = pdfParseModule.default;

  if (!parsePdf) {
    throw new Error('PDF parsing is unavailable.');
  }

  const parsed = await parsePdf(buffer);
  return normalizeExtractedText(parsed.text ?? '');
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
