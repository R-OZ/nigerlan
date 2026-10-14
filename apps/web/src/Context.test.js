import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Context, { reducer, ACTIONS, useGlobalState } from './Context';
import { knownDefect } from './testSupport/knownDefect';

const initial = () => ({
  profile: { userName: 'User1960', progress: 0, avatar: 'boy.svg' },
  starRating: { alphabet: 0, vowel: 0, consonant: 0, number: 0, body: 0, grammar: 0 },
  medal: { goldCount: 0, silverCount: 0, bronzeCount: 0 },
});
const progress = (state, id) => reducer(state, { type: ACTIONS.SET_PROGRESS, payload: { id } });
const rating = (state, id, starRating) =>
  reducer(state, {
    type: ACTIONS.STAR_RATING,
    payload: { id, starRating },
  });

test('username update retains other profile fields without mutating its input', () => {
  const state = initial();
  const next = reducer(state, { type: ACTIONS.SET_USERNAME, payload: 'Reginald' });
  expect(next.profile).toEqual({ ...state.profile, userName: 'Reginald' });
  expect(state.profile.userName).toBe('User1960');
  expect(reducer(state, { type: ACTIONS.SET_USERNAME, payload: '' }).profile.userName).toBe(
    'User1960',
  );
});

test('all six distinct completed modules total 100 percent', () => {
  let state = initial();
  for (const id of Object.keys(state.starRating)) {
    state = rating(progress(state, id), id, 5);
  }
  expect(state.profile.progress).toBe(100);
  expect(progress(state, 'vowel').profile.progress).toBe(100);
});

test('a lower subsequent result cannot overwrite a higher rating', () => {
  const best = rating(initial(), 'vowel', 4.5);
  expect(rating(best, 'vowel', 1).starRating.vowel).toBe(4.5);
  expect(rating(best, 'body', 3).starRating).toEqual({ ...best.starRating, body: 3 });
});

test('medal updates are isolated and unknown actions preserve state', () => {
  const state = initial();
  expect(reducer(state, { type: ACTIONS.UPDATE_GOLD }).medal).toEqual({
    ...state.medal,
    goldCount: 1,
  });
  expect(reducer(state, { type: 'unknown' })).toBe(state);
});

knownDefect('NL-003', 'repeated failed attempts must not push progress beyond 100 percent', () => {
  let state = initial();
  for (let attempt = 0; attempt < 6; attempt++)
    state = rating(progress(state, 'vowel'), 'vowel', 0);
  expect(state.profile.progress).toBeLessThanOrEqual(100);
});

function ProfileProbe() {
  const { state, dispatch } = useGlobalState();
  return (
    <>
      <output aria-label="Learner name">{state.profile.userName}</output>
      <button onClick={() => dispatch({ type: ACTIONS.SET_USERNAME, payload: 'Reginald' })}>
        Set learner name
      </button>
    </>
  );
}

knownDefect(
  'NL-004',
  'anonymous learner profile should survive an application remount',
  async () => {
    const user = userEvent.setup();
    const view = render(
      <Context>
        <ProfileProbe />
      </Context>,
    );
    await user.click(screen.getByRole('button', { name: 'Set learner name' }));
    expect(screen.getByLabelText('Learner name')).toHaveTextContent('Reginald');
    view.unmount();
    render(
      <Context>
        <ProfileProbe />
      </Context>,
    );
    expect(screen.getByLabelText('Learner name')).toHaveTextContent('Reginald');
  },
);
