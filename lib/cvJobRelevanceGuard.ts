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

// Scores below this hard floor are always blocked, regardless of the model's label.
const BLOCK_THRESHOLD = 30;
// Scores this high override a model "not relevant" label (model was too strict).
const FORCE_PASS_THRESHOLD = 70;

const SYSTEM_PROMPT = `You are a career-domain relevance guardian for an AI CV tailoring product.

Your ONLY job is to decide whether a candidate's CV is from a compatible career domain for the job description they have submitted. You are not checking seniority, skills match, or quality — only whether the career domains are compatible enough for meaningful AI tailoring.

Rules:
- A doctor applying to a medical-software or healthcare-tech role = RELEVANT (transferable domain).
- A doctor applying to a software-engineering role = NOT RELEVANT. Score: 10-20.
- A nurse applying to a nursing-home administrator role = RELEVANT.
- A fresh graduate with a general CV and a junior role = RELEVANT (assume career start). Score: 50-65.
- Career changers with bridging evidence in the CV = RELEVANT (give benefit of the doubt). Score: 45-65.
- Completely unrelated domains with no bridging signals = NOT RELEVANT. Score: 0-25.
- If genuinely uncertain, lean toward RELEVANT.

Scoring calibration (domainMatchScore):
- 90-100: Same career domain, near-perfect fit.
- 70-89: Adjacent domain, clear transferable relevance.
- 45-69: Some overlap or bridging signals — borderline, lean relevant.
- 30-44: Weak overlap — model decides; default to relevant if any signal exists.
- 0-29: Fundamentally different domains, no meaningful bridging — block.

IMPORTANT: A score below 30 will automatically block generation. A score of 70+ will automatically pass regardless of your relevant field. Score honestly so the thresholds work correctly.

Respond with ONLY valid JSON (no markdown, no prose):
{
  "relevant": true | false,
  "domainMatchScore": 0-100,
  "cvDomain": "detected domain of the CV",
  "jdDomain": "domain required by the job description",
  "reason": "One clear sentence explaining the decision for the user."
}`;

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
    temperature: 0.1, // Deterministic classification — low temperature.
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
    // Default 0 (not 50) so a garbage/empty JSON response fails-safe rather than auto-passing.
    domainMatchScore: typeof parsed.domainMatchScore === 'number' ? parsed.domainMatchScore : 0,
    cvDomain: parsed.cvDomain ?? 'Unknown',
    jdDomain: parsed.jdDomain ?? 'Unknown',
    reason: parsed.reason ?? 'Could not determine relevance.',
  };

  // Hard block: score below floor always blocks, no matter what the model said.
  if (result.domainMatchScore < BLOCK_THRESHOLD) {
    result.relevant = false;
  }

  // Hard pass: very high score overrides an overly-strict model label.
  if (result.domainMatchScore >= FORCE_PASS_THRESHOLD) {
    result.relevant = true;
  }

  return result;
}
