# Known defects and verification boundaries

These are requirements still failing in the inherited application, not desired
behavior. Normal tests run each desired assertion through a named known-defect
check: only an assertion failure is accepted. An unexpected exception, new
regression, or unexpectedly passing assertion fails the suite and requires review.
After a fix, remove the marker and retain the assertion as an ordinary regression.

`npm run test:known-defects` executes the desired assertions without the markers.
It intentionally exits nonzero until every documented assertion is satisfied.
Never describe a green baseline run as evidence these defects have been fixed.

| ID     | Observed defect                                                                             | Desired assertion / location                                         | Later work                                                       |
| ------ | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------- |
| NL-001 | Four body audio references return 404: longlongtongue, longlongneck, longlongshoulder, butt | Each referenced MP3 returns 200; `apps/api/test/curriculum.test.cjs` | Curriculum/media correction; obtain a licensed missing recording |
| NL-002 | The butt recording question selects back as its answer                                      | Recording name and correct answer agree; API tests                   | Explicit question/answer schema and content review               |
| NL-003 | Six failed vowel attempts produce 120% state progress                                       | Progress stays within 0–100; `apps/web/src/Context.test.js`          | Idempotent completion and score semantics                        |
| NL-004 | Learner profile resets on provider remount/refresh                                          | Chosen name survives remount; Context tests                          | Anonymous local persistence, with progress and medals            |

## Resolved during build-failure follow-up (14 October 2026)

NL-005 is now an ordinary regression: changing the lesson ID fetches its curriculum
and resets slide/quiz state. The request is cancelled on cleanup, and late success
or failure cannot update the active session. Tests also cover recovery from an
old lesson error, preserving a session when its ID is unchanged, and unmounting.
The grammar caption effect was unused; the lecture caption now renders at its
existing settled size without an effect. All three hook warnings are resolved.

The baseline now has 40 cases: 33 ordinary regressions and seven known-defect
checks. Direct desired assertions still fail for NL-001 through NL-004 above.

## Additional audited risks, not yet executable regressions

- Fetch still ignores HTTP status, has no timeout, and can expose raw errors.
  Cancellation and stale-response handling are now covered by regression tests.
- Audio is constructed during rendering and played from reducer side effects.
  jsdom stubs verify interactions, not real decoding or browser autoplay behavior.
- Browser smoke confirms the legacy React root, invalid `exact` attributes, and
  Lottie lifecycle warnings remain; these belong to later React/animation work.
- Accessibility, responsive rendering, curriculum accuracy, and asset permissions
  need browser/device, language-specialist, and owner review respectively.
- No database, login, teacher workflow, or external-service credentials are needed
  for the current regression suite. Hosted integration has not been deployed/tested.

Tests cover representative quiz evaluation with a deterministic fixture and every
real backend curriculum response. They do not certify every question's linguistic
correctness or the quality of each recording.
