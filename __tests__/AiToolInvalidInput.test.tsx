import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { JdDecoderAI } from '../components/tools/JdDecoderAI';
import { CoverLetterPanel } from '../components/editor/CoverLetterPanel';

jest.mock('next/navigation', () => ({ useRouter: () => ({ push: jest.fn() }) }));
jest.mock('../lib/clientAnalytics', () => ({ captureClientEvent: jest.fn() }));

// Regression: an input the route refused (a paste over the length limit) was
// shown as "Something went wrong. Please try again.", which no retry could
// fix because nothing said which box was the problem.

const MESSAGE = 'The job description is too long. Keep it under 15,000 characters.';

function mockRefusal(): void {
  global.fetch = jest.fn().mockResolvedValue({
    ok: false,
    status: 400,
    json: async () => ({ error: { formErrors: [], fieldErrors: {} }, message: MESSAGE }),
  }) as unknown as typeof fetch;
}

const JD = 'We are hiring a backend engineer to build payment systems in Go. '.repeat(2);

describe('AI inputs the server refuses', () => {
  it('a standalone AI tool says what to change', async () => {
    mockRefusal();
    render(<JdDecoderAI />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: JD } });
    fireEvent.click(screen.getByRole('button', { name: /decode/i }));

    expect(await screen.findByText(MESSAGE)).toBeInTheDocument();
    expect(screen.queryByText('Something went wrong')).not.toBeInTheDocument();
  });

  it('the editor cover letter panel says what to change and caps the paste', async () => {
    mockRefusal();
    render(<CoverLetterPanel />);

    const box = screen.getByLabelText('Job description for the cover letter');
    expect(box).toHaveAttribute('maxLength', '15000');
    fireEvent.change(box, { target: { value: JD } });
    fireEvent.click(screen.getByRole('button', { name: 'Generate cover letter' }));

    await waitFor(() => expect(screen.getByText(MESSAGE)).toBeInTheDocument());
  });
});
