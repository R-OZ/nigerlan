import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Context from './Context';

test('home renders all six learning links with the required context', () => {
  window.history.replaceState({}, '', '/');
  render(<Context><App /></Context>);
  for (const href of ['/Alphabetslec', '/Vowelslec', '/Consonantslec', '/Numberslec', '/Bodylec', '/Grammarlec']) {
    expect(screen.getAllByRole('link').some((link) => link.getAttribute('href') === href)).toBe(true);
  }
  expect(screen.getByText('Cumulative Progress')).toBeInTheDocument();
});

test('settings name input updates the anonymous profile', async () => {
  window.history.replaceState({}, '', '/');
  const user = userEvent.setup();
  render(<Context><App /></Context>);
  await user.type(screen.getByPlaceholderText('User1960'), 'Reginald');
  expect(screen.getByText('Reginald')).toBeInTheDocument();
});
