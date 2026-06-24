import { callOpenRouter } from '@/lib/openrouter';

export interface RelevanceResult {
  relevant: boolean;
  /** 0–100 — how closely the CV career domain matches the JD career domain */
  domainMatchScore: number;
  /** The career domain the AI detected in the CV (e.g. "Medical / Healthcare") */
  cvDomain: string;
  /** The career domain required by the JD (e.g. "Software Engineering") */
  jdDomain: string;
  /** Human-readable reason surfaced to the user on rejection */
  reason: string;
}

const SYSTEM_PROMPT = `You are a career-domain relevance guardian for an AI CV tailoring product.

Your ONLY job is to decide whether a candidate's CV is from a compatible career domain for the job description they have submitted. You are not checking seniority, skills match, or quality — only whether the career domains are compatible enough for meaningful AI tailoring.

Rules:
- A doctor applying to a medical-software or healthcare-tech role = RELEVANT (transferable domain).
- A doctor applying to a software-engineering role = NOT RELEVANT.
- A fresh graduate with a general CV and a junior role = RELEVANT (assume career start).
- Career changers with bridging evidence in the CV = RELEVANT (give benefit of the doubt).
- Completely unrelated domains with no bridging signals = NOT RELEVANT.
- If genuinely uncertain, lean toward RELEVANT — false negatives hurt real users.

Respond with ONLY valid JSON (no markdown, no prose):
{
  "relevant": true | false,
  "domainMatchScore": 0-100,
  "cvDomain": "detected domain of the CV",
  "jdDomain": "domain required by the job description",
  "reason": "One clear sentence explaining the decision for the user."
}`;

const RELEVANCE_THRESHOLD = 30;

export async function checkCVJobRelevance(
  apiKey: string,
  jobDescription: string,
  cvText: string
): Promise<RelevanceResult> {
  // Truncate heavily — we only need domain signals, not full content.
  const jdSnippet = jobDescription.slice(0, 800);
  const cvSnippet = cvText.slice(0, 800);

  const raw = await callOpenRouter({
    apiKey,
    model: 'openai/gpt-4o-mini',
    jsonMode: true,
    maxTokens: 220,
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      {
        role: 'user',
        content: `Job description (first 800 chars):\n${jdSnippet}\n\nCV (first 800 chars):\n${cvSnippet}`,
      },
    ],
  });

  const parsed = JSON.parse(raw) as Partial<RelevanceResult>;

  const result: RelevanceResult = {
    relevant: parsed.relevant ?? true,
    domainMatchScore: typeof parsed.domainMatchScore === 'number' ? parsed.domainMatchScore : 50,
    cvDomain: parsed.cvDomain ?? 'Unknown',
    jdDomain: parsed.jdDomain ?? 'Unknown',
    reason: parsed.reason ?? 'Could not determine relevance.',
  };

  // Safety override: if score is above threshold but model said not relevant, trust score.
  if (result.domainMatchScore >= RELEVANCE_THRESHOLD) {
    result.relevant = true;
  }

  return result;
}
