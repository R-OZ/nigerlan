# Engineering quality and Milestone A verification

## Original Milestone A commands and CI policy

The workflow runs on pull requests, pushes to `main`, and manual dispatch.
Feature-branch pushes are checked through their open pull request, avoiding a
duplicate full run for the same update. A branch without a pull request can use
manual dispatch; it does not receive an automatic push run. Each check is an independent matrix job with `fail-fast:
false`; one failure cannot prevent the other jobs from reporting. Actions are
pinned to verified upstream commit SHAs, repository permissions are read-only,
checkout credentials are not persisted, and complete Git history is available.
No job pushes, deploys, publishes, or requests repository secrets.

Every quality job starts with the pinned Node/npm runtime and a clean `npm ci`.
The secrets job needs no npm dependencies: its checksum-pinned Gitleaks binary
scans a snapshot of current non-ignored files and all reachable Git refs. It uses
redacted output and no project-specific allowlist. Default scanner rules and
allowlists still apply; scanning cannot prove absence of all secrets or PII.

The following table records the original 13 October baseline; the follow-up below
supersedes the lint, build, test counts, and hosted-workflow status.

| Command/check                        | Observed local result        | Interpretation                                                                          |
| ------------------------------------ | ---------------------------- | --------------------------------------------------------------------------------------- |
| `npm ci --no-fund --no-audit`        | Passed                       | Single root lockfile; no forced peer resolution                                         |
| `npm run check:repo`                 | Passed                       | Runtime, tracked local-file hygiene, single lock, original history ancestry             |
| `npm run format:check`               | Passed                       | First-party source formatted; third-party art/animation data excluded                   |
| `npm run lint`                       | Failed: 0 errors, 3 warnings | Strict zero-warning gate retains the inherited hook defects                             |
| `npm test`                           | 35 baseline cases passed     | 27 ordinary regressions plus 8 named known-defect checks; no skips                      |
| `npm run test:known-defects`         | Failed: 8 assertions         | 4 missing recordings, answer mismatch, progress overflow, profile loss, stale lesson id |
| `npm run build` without `CI=true`    | Passed with 3 warnings       | CRA creates production assets; not evidence of a passing strict CI build                |
| `CI=true npm run build`              | Failed                       | CRA treats the same inherited hook warnings as errors                                   |
| `npm run security:api`               | Passed: 0 vulnerabilities    | Deployed API workspace's production dependency subset only                              |
| `npm run security:dependencies`      | Failed                       | Full workspace includes vulnerable retained CRA/development dependencies                |
| `npm run security:secrets`           | Passed: no leaks found       | Current files and reachable history scanned using Gitleaks 8.30.1                       |
| Combined local development command   | Passed                       | Web 3000, API 4000, lesson JSON and MP3 returned 200                                    |
| Alternate ports and SIGTERM shutdown | Passed on macOS ARM64        | Independent API/web ports, local media URLs, both listeners stopped                     |
| Browser smoke                        | Passed for inspected flow    | Home, API-backed vowel lesson, all seven slides, animated completion                    |
| GitHub-hosted workflow               | Not executed                 | No push authorized; workflow parsed locally and component commands executed             |
| Vercel/Render deployment             | Not executed                 | Host dashboard settings and deployed integration need later approval                    |

The initial frontend test run exposed an Audio mock being reset by CRA; the
fixture was corrected and both ordinary quiz scenarios then passed. Local API
listeners required execution outside the filesystem/network sandbox. That
environment restriction was resolved; no test remains blocked by credentials.

## Dependency security findings

The post-update full audit reported **102 affected package entries: 64 high,
35 moderate, 3 low, 0 critical**. These are npm's graph counts, not 102 distinct
exploitable application vulnerabilities. Audit results can change as advisories
are published. `npm audit` provides the current advisory IDs, paths, and available
fixes; failures to contact the registry remain failures, not clean results.

React Router was updated within major 6 to 6.30.6, addressing the available
in-major high-severity fixes; remaining moderate router findings propose a major
7 migration. Nodemon was updated within major 3 to 3.1.14, but its transitive
watcher finding remains. CRA 5's transitive toolchain still accounts for substantial
debt. Do not accept npm's proposed `react-scripts@0.0.0` replacement or nodemon
downgrade as a meaningful security fix. No `npm audit fix --force`, overrides,
ignored advisories, or warning suppression were introduced.

The audit gate fails at high severity and prints all severities. The separate API
production gate helps distinguish deployment exposure from the full development
graph; it does not certify the browser bundle. Evaluate actual advisory paths and
perform the approved later tooling migrations before claiming release readiness.

## Remaining browser/manual checks

Browser smoke still logs the inherited legacy `ReactDOM.render`, `exact` DOM
attribute, and Lottie lifecycle warnings. The compatible router update also emits
its future-version opt-in notices; no future flags were enabled to change behavior.
Real audio decoding/autoplay on Safari/mobile, full responsive/accessibility
verification, every quiz's language accuracy, Google feedback-form ownership,
and asset licensing remain unverified by this milestone.

## Review and rollback

Review the formatting commit separately from behavior/tooling changes. Its
JavaScript changes were compared through parsed/JSX-compiled syntax trees; the
remaining production differences were whitespace in JSX text and equivalent
`&&` grouping. Regression suites, builds, and browser smoke followed formatting.
Use `git blame --ignore-rev 89c98e5683ea2bfd647d48ce48f6439328da53f2` when tracing
older behavior through that mechanical change.

`main` and the original backend objects remain unchanged. To abandon this work,
switch back to `main` from a clean checkout. To inspect an original application,
create a separately named branch/worktree from the corresponding backup ref.
Do not reset shared branches or force-push. Any later merge/push/deployment requires
owner approval, and the strict checks must be resolved before treating the branch
as release-ready.

For the later owner-requested author-date changes, see the
[date-assignment record](milestone-a.md#owner-requested-author-date-assignment).
The results above describe verification performed on 13 October 2026, not the
assigned historical author dates. The current allocation is recorded in the
[date-allocation ledger](commit-date-plan.md).

## Build-failure follow-up — 14 October 2026

The pushed `3e3b696e` revision failed GitHub lint and build because of the three
known React effect dependency warnings. Local `CI=true npm run build` reproduced
the exact screenshot error. Five targeted regression assertions also failed on
the old implementation before the fix.

The follow-up removes unused grammar caption state, preserves the lecture
caption's settled appearance without an effect, and gives each lesson ID a fresh
session. Fetch follows the ID with abort/cleanup handling so old requests cannot
change the new session. NL-005 is now a normal passing regression. No lint rules,
CI failure conditions, security gates, or dependency versions were relaxed.

Verification after the fix:

- `npm run lint`: passed with zero errors/warnings.
- `CI=true npm run build`: passed. CRA's inherited Node `fs.F_OK` deprecation
  notice remains nonfatal.
- `CI=true npm test`: 40 baseline cases passed (33 ordinary, seven known-defect
  checks). API listeners initially hit sandbox restrictions; the successful rerun
  had local loopback access. Existing React Router/DOM notices remain visible.
- `npm run test:known-defects`: failed on the seven remaining desired assertions
  (four missing recordings, one answer mismatch, progress overflow, profile loss).

GitHub's checks for the previous revision confirm repository hygiene, formatting,
tests, API dependency security, and secret scanning passed; lint, build, and the
full dependency audit failed. The dependency audit remains a separate blocker
requiring the planned dependency/tooling work, not warning suppression.

Vercel's previous preview failed with build exit code 1. Its detailed logs require
an authenticated dashboard session unavailable in the inspection browser; the
same cause as GitHub is plausible but unverified. Additional Netlify checks for
`peaceful-otter-ce11ee` report only “Deploy failed,” not specific redirect/header
errors. Neither hosted build is claimed fixed by local verification. No hosting
configuration or production deployment was changed by this follow-up.

## Vercel output-directory follow-up — 14 October 2026

The owner's subsequent Vercel error for `3de4cd44` confirms compilation completed,
but the platform expected root-level `build`. The npm workspace actually emits
`apps/web/build`. This identifies the preview failure separately from the resolved
React hook warnings.

Root `vercel.json` now declares `npm ci`, `npm run build`, and output directory
`apps/web/build`. Vercel documents that this property overrides the dashboard's
output setting: [outputDirectory reference](https://vercel.com/docs/project-configuration/vercel-json#outputdirectory).
The project Root Directory must remain the repository root. No routing rules,
application code, dependency versions, or Render settings changed.

Local verification: `CI=true npm run build` passed; root `build` was absent;
`apps/web/build/index.html` and `asset-manifest.json` were nonempty; all 46 manifest
assets existed. The new GitHub build-step output verification was parsed from the
workflow and executed successfully locally. Formatting and repository checks
passed. Application tests were not repeated for this configuration-only change.
Vercel's hosted preview still needs to rerun against the new configuration; local
verification does not certify deployment, SPA routing, or hosted API availability.
The separate dependency-security blocker remains unresolved.

## Duplicate-check cleanup — 14 October 2026

Removed the modernization branch from the push trigger. Pull requests still run
all eight checks, and `main` pushes and manual dispatch retain the same checks.
The matrix, severity thresholds, secret scan, permissions, and failure behavior
are unchanged. Existing historical runs remain visible in the PR timeline.
