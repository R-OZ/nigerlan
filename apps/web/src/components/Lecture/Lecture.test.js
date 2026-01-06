import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Context, { useGlobalState } from '../../Context';
import { knownDefect } from '../../testSupport/knownDefect';
import Lecture from './Lecture';

// Minimal valid lesson, intentionally independent of the backend randomizer.
const lesson = {
  lecTxt: 'Fixture vowel lesson',
  progyColor: '#53a3ec',
  isTest: true,
  lecBody: [{ capital: 'A', pronounce: 'ah', image: '/a.png', example: 'ja', sound: '/a.mp3' }],
  test1Text: 'Choose a vowel',
  test2Text: 'Listen and choose',
  test1: [{ question: ['A', 'B', 'D', 'F'] }],
  test2: [{ question: ['Ẹ', 'B', 'D', 'F'], sound: '/e.mp3' }],
  answers: ['A'],
};

function StateProbe() {
  const { state } = useGlobalState();
  return (
    <output aria-label="Learning state">
      {JSON.stringify({
        progress: state.profile.progress,
        rating: state.starRating.vowel,
        medals: state.medal,
      })}
    </output>
  );
}
function Wrapper({ children }) {
  return (
    <MemoryRouter>
      <Context>
        {children}
        <StateProbe />
      </Context>
    </MemoryRouter>
  );
}
function mockLesson() {
  global.fetch = jest.fn().mockResolvedValue({ ok: true, status: 200, json: async () => lesson });
}
beforeEach(() => {
  mockLesson();
  // Legacy success logging is unrelated to assertions. Unexpected console
  // errors are left visible; error tests spy only on their expected message.
  jest.spyOn(console, 'log').mockImplementation(() => {});
});
afterEach(() => {
  delete global.fetch;
});

test('loading transitions to the fetched lesson and previous stops at the first slide', async () => {
  let resolve;
  global.fetch = jest.fn().mockReturnValue(
    new Promise((done) => {
      resolve = done;
    }),
  );
  const user = userEvent.setup();
  render(<Lecture id="vowel" />, { wrapper: Wrapper });
  expect(screen.queryByText('Fixture vowel lesson')).not.toBeInTheDocument();
  resolve({ ok: true, json: async () => lesson });
  expect(await screen.findByText('Fixture vowel lesson')).toBeInTheDocument();
  await user.click(screen.getByRole('button', { name: 'Previous' }));
  expect(screen.getByText('Fixture vowel lesson')).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(/\/lecture\/vowel$/));
});

test.each([
  ['correct answers', 'A', 'Ẹ', 2, 5, 1],
  ['incorrect answers', 'B', 'B', 0, 0, 0],
])(
  'quiz evaluates %s, locks each answer, and records the result',
  async (_, first, second, score, rating, gold) => {
    const user = userEvent.setup();
    render(<Lecture id="vowel" />, { wrapper: Wrapper });
    await screen.findByText('Fixture vowel lesson');
    await user.click(screen.getByRole('button', { name: 'Next Slide' }));
    await user.click(screen.getByRole('button', { name: 'Finish' }));
    expect(screen.getByRole('button', { name: /^Next/ })).toBeDisabled();
    await user.click(screen.getByRole('button', { name: first, exact: true }));
    expect(screen.getByRole('button', { name: first, exact: true })).toBeDisabled();
    expect(
      screen.getAllByText(score ? 'CORRECT!!!' : 'INCORRECT, the correct answer is A'),
    ).toHaveLength(2);
    await user.click(screen.getByRole('button', { name: /^Next/ }));
    expect(screen.getByRole('button', { name: /^Next/ })).toBeDisabled();
    await user.click(screen.getByRole('button', { name: second, exact: true }));
    await user.click(screen.getByRole('button', { name: /^Next/ }));
    expect(screen.getByText(`You scored: ${score} out of 2`)).toBeInTheDocument();
    const state = JSON.parse(screen.getByLabelText('Learning state').textContent);
    expect(state.rating).toBe(rating);
    expect(state.medals.goldCount).toBe(gold);
    // Progress calculations are covered by Context.test.js, including NL-003.
  },
);

test.each(['network unavailable', 'invalid JSON'])(
  'a %s failure is shown to the learner',
  async (message) => {
    const error = new Error(message);
    if (message === 'invalid JSON')
      global.fetch.mockResolvedValue({
        json: async () => {
          throw error;
        },
      });
    else global.fetch.mockRejectedValue(error);
    const log = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(<Lecture id="vowel" />, { wrapper: Wrapper });
    expect(await screen.findByRole('heading', { name: message })).toBeInTheDocument();
    expect(log).toHaveBeenCalledWith(message);
  },
);

knownDefect('NL-005', 'changing the lesson id should fetch the next curriculum', async () => {
  const view = render(<Lecture id="vowel" />, { wrapper: Wrapper });
  await screen.findByText('Fixture vowel lesson');
  view.rerender(<Lecture id="consonant" />);
  await waitFor(() =>
    expect(global.fetch).toHaveBeenCalledWith(expect.stringMatching(/\/lecture\/consonant$/)),
  );
});
