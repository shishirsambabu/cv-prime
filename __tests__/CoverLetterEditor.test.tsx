import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { CoverLetterEditor } from '@/components/cover-letter/CoverLetterEditor';

const LETTER_ID = '44444444-4444-4444-8444-444444444444';
const fetchMock = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
  global.fetch = fetchMock as unknown as typeof fetch;
  fetchMock.mockResolvedValue({ ok: true, status: 200 });
});

function renderEditor(): HTMLTextAreaElement {
  render(<CoverLetterEditor coverLetterId={LETTER_ID} initialContent="Dear team," />);
  return screen.getByLabelText('Editable draft') as HTMLTextAreaElement;
}

describe('CoverLetterEditor', () => {
  it('has nothing to save until the draft is edited', () => {
    renderEditor();

    expect(screen.getByRole('button', { name: /save changes/i })).toBeDisabled();
  });

  it('saves the edited draft', async () => {
    // Regression: the page rendered an uncontrolled textarea with no save at
    // all, so every edit to the "Editable draft" was silently discarded.
    const textarea = renderEditor();
    fireEvent.change(textarea, { target: { value: 'Dear team, I would love to join.' } });
    expect(screen.getByRole('status')).toHaveTextContent('Unsaved changes');

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /save changes/i }));
    });

    expect(fetchMock).toHaveBeenCalledWith(
      `/api/cover-letter/${LETTER_ID}`,
      expect.objectContaining({
        method: 'PATCH',
        body: JSON.stringify({ content: 'Dear team, I would love to join.' }),
      }),
    );
    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('Saved'));
    expect(screen.getByRole('button', { name: /save changes/i })).toBeDisabled();
  });

  it('keeps text typed while a save is in flight marked as unsaved', async () => {
    let resolveSave: (value: { ok: boolean; status: number }) => void = () => undefined;
    fetchMock.mockReturnValue(new Promise((resolve) => (resolveSave = resolve)));
    const textarea = renderEditor();
    fireEvent.change(textarea, { target: { value: 'first' } });
    fireEvent.click(screen.getByRole('button', { name: /save changes/i }));
    fireEvent.change(textarea, { target: { value: 'first, then more' } });

    await act(async () => {
      resolveSave({ ok: true, status: 200 });
    });

    expect(textarea.value).toBe('first, then more');
    expect(screen.getByRole('status')).toHaveTextContent('Unsaved changes');
    expect(screen.getByRole('button', { name: /save changes/i })).toBeEnabled();
  });

  it.each([
    [500, /could not save/i],
    [401, /session has expired/i],
    [404, /no longer exists/i],
  ])('keeps the text and explains a %i response', async (status, message) => {
    fetchMock.mockResolvedValue({ ok: false, status });
    const textarea = renderEditor();
    fireEvent.change(textarea, { target: { value: 'edited' } });

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /save changes/i }));
    });

    expect(await screen.findByRole('alert')).toHaveTextContent(message);
    expect(textarea.value).toBe('edited');
    expect(screen.getByRole('button', { name: /save changes/i })).toBeEnabled();
  });

  it('survives a network failure', async () => {
    fetchMock.mockRejectedValue(new TypeError('Failed to fetch'));
    const textarea = renderEditor();
    fireEvent.change(textarea, { target: { value: 'edited' } });

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /save changes/i }));
    });

    expect(await screen.findByRole('alert')).toHaveTextContent(/could not save/i);
    expect(textarea.value).toBe('edited');
  });

  it('copies the current text', async () => {
    const writeText = jest.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });
    const textarea = renderEditor();
    fireEvent.change(textarea, { target: { value: 'copy me' } });

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /copy text/i }));
    });

    expect(writeText).toHaveBeenCalledWith('copy me');
    expect(screen.getByRole('button', { name: /copied/i })).toBeInTheDocument();
  });
});
