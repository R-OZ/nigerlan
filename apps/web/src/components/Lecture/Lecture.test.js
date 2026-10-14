import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Context, { useGlobalState } from '../../Context';
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
  expect(global.fetch.mock.calls[0][0]).toMatch(/\/lecture\/vowel$/);
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

test('NL-005: changing the lesson id fetches new content and resets the quiz', async () => {
  const user = userEvent.setup();
  const view = render(<Lecture id="vowel" />, { wrapper: Wrapper });
  await screen.findByText('Fixture vowel lesson');
  await user.click(screen.getByRole('button', { name: 'Next Slide' }));
  await user.click(screen.getByRole('button', { name: 'Finish' }));
  await user.click(screen.getByRole('button', { name: 'A', exact: true }));
  expect(screen.getByRole('button', { name: 'A', exact: true })).toBeDisabled();
  global.fetch.mockResolvedValue({ json: async () => ({ ...lesson, lecTxt: 'New lesson' }) });
  view.rerender(<Lecture id="consonant" />);
  expect(await screen.findByText('New lesson')).toBeInTheDocument();
  expect(global.fetch.mock.calls[1][0]).toMatch(/\/lecture\/consonant$/);
  expect(screen.queryByText('CORRECT!!!')).not.toBeInTheDocument();
  await user.click(screen.getByRole('button', { name: 'Next Slide' }));
  await user.click(screen.getByRole('button', { name: 'Finish' }));
  expect(screen.getByRole('button', { name: 'A', exact: true })).toBeEnabled();
  expect(screen.getByRole('button', { name: /^Next/ })).toBeDisabled();
  await user.click(screen.getByRole('button', { name: 'B', exact: true }));
  await user.click(screen.getByRole('button', { name: /^Next/ }));
  await user.click(screen.getByRole('button', { name: 'B', exact: true }));
  await user.click(screen.getByRole('button', { name: /^Next/ }));
  expect(screen.getByText('You scored: 0 out of 2')).toBeInTheDocument();
});

test.each(['success', 'failure'])(
  'a stale request %s cannot replace the current lesson or finish its loading state',
  async (outcome) => {
    let resolveOld;
    let rejectOld;
    let resolveCurrent;
    global.fetch
      .mockImplementationOnce(
        () =>
          new Promise((resolve, reject) => {
            resolveOld = resolve;
            rejectOld = reject;
          }),
      )
      .mockImplementationOnce(
        () =>
          new Promise((resolve) => {
            resolveCurrent = resolve;
          }),
      );
    const log = jest.spyOn(console, 'error').mockImplementation(() => {});
    const view = render(<Lecture id="vowel" />, { wrapper: Wrapper });
    const oldSignal = global.fetch.mock.calls[0][1]?.signal;
    view.rerender(<Lecture id="consonant" />);
    await act(async () => {
      if (outcome === 'success') resolveOld({ json: async () => lesson });
      else rejectOld(new Error('Old request failed'));
    });
    expect(screen.queryByText('Fixture vowel lesson')).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Next Slide' })).not.toBeInTheDocument();
    expect(log).not.toHaveBeenCalledWith('Old request failed');
    expect(oldSignal?.aborted).toBe(true);
    await act(async () => {
      resolveCurrent({ json: async () => ({ ...lesson, lecTxt: 'Current lesson' }) });
    });
    expect(screen.getByText('Current lesson')).toBeInTheDocument();
  },
);

test('changing the lesson clears a previous request error', async () => {
  global.fetch.mockRejectedValueOnce(new Error('First lesson unavailable'));
  jest.spyOn(console, 'error').mockImplementation(() => {});
  const view = render(<Lecture id="vowel" />, { wrapper: Wrapper });
  await screen.findByRole('heading', { name: 'First lesson unavailable' });
  view.rerender(<Lecture id="consonant" />);
  expect(await screen.findByText('Fixture vowel lesson')).toBeInTheDocument();
  expect(
    screen.queryByRole('heading', { name: 'First lesson unavailable' }),
  ).not.toBeInTheDocument();
});

test('rerendering the same lesson preserves the current slide without refetching', async () => {
  const user = userEvent.setup();
  const view = render(<Lecture id="vowel" />, { wrapper: Wrapper });
  await screen.findByText('Fixture vowel lesson');
  await user.click(screen.getByRole('button', { name: 'Next Slide' }));
  view.rerender(<Lecture id="vowel" />);
  expect(screen.getByText('*Next will be an assessment*')).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
});

test('unmounting aborts the active lesson request', async () => {
  global.fetch.mockImplementation(() => new Promise(() => {}));
  const view = render(<Lecture id="vowel" />, { wrapper: Wrapper });
  const signal = global.fetch.mock.calls[0][1]?.signal;
  view.unmount();
  await waitFor(() => expect(signal?.aborted).toBe(true));
});
