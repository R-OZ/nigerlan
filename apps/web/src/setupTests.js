import '@testing-library/jest-dom';

// jsdom cannot decode audio or render Lottie's canvas. Keep calls observable;
// actual playback and animation rendering remain browser/manual checks.
jest.mock('react-lottie', () => () => null);
beforeEach(() => {
  window.Audio = jest.fn().mockImplementation((src) => ({
    src,
    play: jest.fn().mockResolvedValue(undefined),
    pause: jest.fn(),
    loop: false,
  }));
});

afterEach(() => {
  jest.restoreAllMocks();
  window.localStorage.clear();
});
