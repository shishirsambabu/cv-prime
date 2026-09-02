import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ATSScorePanel } from '@/components/editor/ATSScorePanel';
import { useCVStore } from '@/store/cvStore';
import { createDefaultCVData } from '@/lib/cv';

// Regression coverage: "Fix this" used to unconditionally overwrite the whole
// CV with the AI response, even if the user had edited another section while
// the multi-second AI call was in flight — silently discarding those edits.
// It must now detect that the store changed underneath it and refuse to
// apply the stale result instead of clobbering the newer local edit.

// Relative paths, not the `@/...` alias: jest.mock's resolver doesn't apply
// this project's tsconfig path mapping (only the real-import transform
// does), so `jest.mock('@/...')` used to register an orphaned mock that
// nothing consumed — the real ExportPDFButton/clientAnalytics modules were
// rendered/called instead, silently, with no test failure to signal it.
jest.mock('../components/editor/ExportPDFButton', () => ({
  ExportPDFButton: () => <button type="button">Export PDF</button>,
}));

jest.mock('../lib/clientAnalytics', () => ({
  captureClientEvent: jest.fn(),
}));

const JOB_DESCRIPTION =
  'We need a product marketing manager with GTM, lifecycle, positioning, sales enablement, and campaign analytics experience.';

function jsonResponse(payload: unknown, ok = true): Response {
  return { ok, json: async () => payload } as Response;
}

describe('ATSScorePanel handleFix', () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    useCVStore.setState({
      cvId: 'cv-1',
      data: createDefaultCVData(),
      templateId: 'classic',
      isDirty: false,
      lastSaved: null,
    });
  });

  afterEach(() => {
    global.fetch = originalFetch;
    jest.restoreAllMocks();
  });

  async function scoreThenStartFix(fixResolvers: {
    resolve: (value: Response) => void;
  }): Promise<void> {
    const fetchMock = jest.fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>(
      async (input) => {
        const url = String(input);
        if (url.includes('/api/ats-score')) {
          return jsonResponse({
            score: 62,
            missingKeywords: ['Lifecycle'],
            presentKeywords: ['GTM'],
            suggestions: ['Add lifecycle marketing keywords.'],
            history: [],
          });
        }
        if (url.includes('/api/ats-fix')) {
          return new Promise<Response>((resolve) => {
            fixResolvers.resolve = resolve;
          });
        }
        throw new Error(`Unexpected fetch to ${url}`);
      }
    );
    global.fetch = fetchMock;

    render(<ATSScorePanel />);

    fireEvent.change(screen.getByPlaceholderText('Paste the job description here...'), {
      target: { value: JOB_DESCRIPTION },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Check ATS score' }));
    await waitFor(() => screen.getByText('Present keywords'));

    fireEvent.click(screen.getByRole('button', { name: /Fix this/ }));
    await waitFor(() => screen.getByText('Fixing your CV...'));
  }

  it('does not apply a stale AI fix if the CV changed while the request was in flight', async () => {
    const resolvers: { resolve: (value: Response) => void } = { resolve: () => {} };
    await scoreThenStartFix(resolvers);

    // Simulate the user editing a different section while the AI call is
    // still pending: this replaces the store's `data` object identity.
    const editedData = {
      ...useCVStore.getState().data,
      personal: { ...useCVStore.getState().data.personal, name: 'Edited While Fixing' },
    };
    act(() => {
      useCVStore.getState().setData(editedData);
    });

    resolvers.resolve(
      jsonResponse({
        cvData: createDefaultCVData(),
        changes: ['Rewrote summary for ATS keywords.'],
      })
    );

    await waitFor(() =>
      screen.getByText(/didn't overwrite your changes/i)
    );

    // The concurrent edit must survive untouched.
    expect(useCVStore.getState().data.personal.name).toBe('Edited While Fixing');
    expect(screen.queryByText('Before & After comparison')).not.toBeInTheDocument();
  });

  it('applies the AI fix normally when nothing changed while it was in flight', async () => {
    const resolvers: { resolve: (value: Response) => void } = { resolve: () => {} };
    await scoreThenStartFix(resolvers);

    const fixedData = {
      ...createDefaultCVData(),
      personal: { ...createDefaultCVData().personal, name: 'AI Fixed Name' },
    };
    resolvers.resolve(
      jsonResponse({ cvData: fixedData, changes: ['Rewrote summary for ATS keywords.'] })
    );

    await waitFor(() => expect(useCVStore.getState().data.personal.name).toBe('AI Fixed Name'));
    expect(screen.getByText(/Applied 1 change/)).toBeInTheDocument();
  });
});
