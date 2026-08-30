import { fireEvent, render, screen, waitFor } from '@testing-library/react';

jest.mock('@/components/templates/TemplatePreview', () => ({
  TemplatePreview: () => <div data-testid="template-preview" />,
}), { virtual: true });

jest.mock('@/components/editor/ExportPDFButton', () => ({
  ExportPDFButton: ({ templateId }: { templateId?: string }) => (
    <button type="button">Export PDF {templateId}</button>
  ),
}), { virtual: true });

jest.mock('@/lib/clientAnalytics', () => ({
  captureClientEvent: jest.fn(),
}), { virtual: true });

import { AIJobCVWizard } from '@/components/tailor/AIJobCVWizard';

describe('AIJobCVWizard', () => {
  const originalFetch = global.fetch;

  function jsonResponse(payload: unknown, ok = true): Response {
    return {
      ok,
      json: async () => payload,
    } as Response;
  }

  afterEach(() => {
    global.fetch = originalFetch;
    jest.restoreAllMocks();
  });

  it('asks users to connect OpenRouter before generating', () => {
    render(<AIJobCVWizard hasOpenRouterKey={false} plan="free" pdfExportsUsed={0} />);

    expect(screen.getByText('Connect your OpenRouter key')).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: 'Generate tailored CV' })[0]).toBeDisabled();
  });

  it('generates a tailored CV from pasted JD and CV text', async () => {
    const fetchMock = jest.fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>(
      async () =>
        jsonResponse({
          cvId: '11111111-1111-4111-8111-111111111111',
          title: 'Product marketing manager CV',
          score: 87,
          suggestions: ['Add more lifecycle marketing keywords.'],
          missingKeywords: ['Lifecycle'],
          presentKeywords: ['GTM'],
        })
    );
    global.fetch = fetchMock;

    render(<AIJobCVWizard hasOpenRouterKey plan="free" pdfExportsUsed={1} />);

    fireEvent.change(screen.getByLabelText('Paste the job description'), {
      target: {
        value:
          'We need a product marketing manager with GTM, lifecycle, positioning, sales enablement, and campaign analytics experience.',
      },
    });
    fireEvent.change(screen.getByPlaceholderText('Optional fallback: paste CV text here...'), {
      target: {
        value:
          'Product marketer with experience launching B2B campaigns, supporting sales teams, creating positioning, and improving conversion across funnel experiments.',
      },
    });
    fireEvent.click(screen.getAllByRole('button', { name: 'Generate tailored CV' })[0]!);

    await waitFor(() => {
      expect(screen.getByText('87/100')).toBeInTheDocument();
    });
    expect(screen.getByText('Product marketing manager CV')).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledWith('/api/ai-generate-cv', expect.objectContaining({
      method: 'POST',
    }));
  });

  it('saves a new template choice on an already generated CV', async () => {
    const cvId = '11111111-1111-4111-8111-111111111111';
    const fetchMock = jest
      .fn<Promise<Response>, [RequestInfo | URL, RequestInit?]>()
      .mockResolvedValueOnce(jsonResponse({ cvId, title: 'Tailored CV', score: 84 }))
      .mockResolvedValueOnce(jsonResponse({ ok: true }));
    global.fetch = fetchMock;

    render(<AIJobCVWizard hasOpenRouterKey plan="free" pdfExportsUsed={0} />);

    fireEvent.change(screen.getByLabelText('Paste the job description'), {
      target: {
        value:
          'We need a product manager with customer research, roadmap ownership, stakeholder management, analytics, and launch experience.',
      },
    });
    fireEvent.change(screen.getByPlaceholderText('Optional fallback: paste CV text here...'), {
      target: {
        value:
          'Product manager with extensive experience running customer interviews, prioritising roadmaps, analysing adoption, and leading cross-functional product launches.',
      },
    });
    fireEvent.click(screen.getAllByRole('button', { name: 'Generate tailored CV' })[0]!);

    await screen.findByText('Modern template applied');
    fireEvent.click(screen.getByRole('button', { name: 'Minimal template' }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenNthCalledWith(
        2,
        `/api/cvs/${cvId}`,
        expect.objectContaining({
          method: 'PATCH',
          body: JSON.stringify({ templateId: 'minimal' }),
        }),
      );
    });
    expect(await screen.findByText('Minimal template applied')).toBeInTheDocument();
  });

  it('does not select a Pro template on the free plan', () => {
    render(<AIJobCVWizard hasOpenRouterKey plan="free" pdfExportsUsed={0} />);

    const technicalCard = screen.getByRole('button', { name: 'Technical template - Pro' });
    const modernCard = screen.getByRole('button', { name: 'Modern template' });
    expect(modernCard).toHaveAttribute('aria-pressed', 'true');

    fireEvent.click(technicalCard);

    expect(modernCard).toHaveAttribute('aria-pressed', 'true');
    expect(technicalCard).toHaveAttribute('aria-pressed', 'false');
    expect(screen.getAllByText('Upgrade for unlimited resumes').length).toBeGreaterThan(0);
  });
});
