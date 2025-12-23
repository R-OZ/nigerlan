# Milestone A implementation record

## Starting state

- Clean checkout on `main`; no staged or unstaged application changes.
- Frontend: `ee3e2ef00b820403c0c373cc3685289789c6db47`.
- Backend: `9ccb6f96e5c003bcb4b34604ce0df6ce4fb9f1f1` (`origin/backend`).
- The two histories have no common ancestor.
- Implementation branch: `codex/nigerlan-modernization`.
- Local author: Reginald Ojeba `<reginaldojeba@gmail.com>`.
- Backup references: `refs/backup/nigerlan-pre-modernization-main` and
  `refs/backup/nigerlan-pre-modernization-backend`.

These local references retain the original tips. Inspect them with
`git show-ref`; recover into a new branch with `git branch <recovery-name> <ref>`.
Do not reset or force-push published branches.

## Boundaries

This milestone adds repository structure, reproducible tooling, tests, and quality
checks. React 19, Vite, Express 5, accounts, database storage, and behavioral fixes
remain outside scope. Known defects must be documented and tested as outstanding
requirements, never asserted as the desired behavior.

No push, merge into `main`, or deployment is authorized by this milestone.

## History integration

The integration commit has the modernization branch and original backend tip as
parents. The frontend is moved beneath `apps/web/`; the complete backend tip is
imported beneath `apps/api/`, excluding five tracked `.DS_Store` files. The merge
uses an explicit tree import after selecting the frontend tree as its starting
point, avoiding unrelated root-file collisions. Both application trees are
checked byte-for-byte against their historical originals before the merge is
committed. This is not an empty ancestry-only merge or a squash import.

The backend's seven original commit objects, authors, and timestamps are retained.
New integration work receives its actual commit date. Backup refs remain local;
they have not been pushed.

## Reproducible environment

Node 24.21.0 and its bundled npm 11.19.0 are pinned. The local runtime was
downloaded from nodejs.org and checked against the release SHA256 manifest.
One npm workspace lock replaces the frontend npm/Yarn and backend npm locks.
React 18.2 and CRA 5 remain; react-lottie 1.2.10 accepts React 18 without the old
peer override. Express 4.22.3 and cors 2.8.6 stay within their existing majors.

Import searches found no application use of `@google-cloud/translate`,
`translate`, `dotenv`, `lottie`, `react-icons`, `@svgr/core`, or `@svgr/webpack`.
Their direct declarations were removed; CRA still owns its transitive SVG
tooling. Unused Vercel CLI and the obsolete gh-pages deployment script/package
were removed; the original gh-pages history remains intact.

The API exports its Express app independently of the listener, serves media
relative to its own directory, and accepts a public asset-origin override. The
frontend accepts a build-time API-origin override. Hosted defaults are retained.

`npm ci` succeeded without forced peer resolution. npm 11.19 blocks unapproved
dependency install scripts. The core-js donation-banner scripts are explicitly
denied, as is fsevents' unnecessary install hook (its package ships a prebuilt
macOS binary). New script-bearing dependencies require review. No project
checks or application startup scripts are disabled by this policy.

The production build succeeded with three pre-existing effect-dependency
warnings. These remain visible; behavioral hook changes belong to later work.

## Regression foundation

The React tests use the real context, router, reducer, and lesson component with
a deterministic API fixture. Audio and Lottie rendering are stubbed only because
jsdom cannot play/decode media or draw its canvas. Backend tests start the real
Express app on an ephemeral loopback port and exercise all curriculum routes.

Verified baseline: 21 API cases (16 ordinary passes, five known-defect checks)
and 14 React cases (11 ordinary passes, three known-defect checks). The separate
raw-defect command reproduced exactly five API and three React assertion failures.
It returned nonzero, as intended. No tests were skipped. See
[known defects](known-defects.md) for the unresolved requirements and limitations.

The only production change needed by these tests is exporting the existing
reducer; its behavior is unchanged. Test-library updates support React 18's root
API. ESLint 8 (compatible with CRA 5) and Prettier 3 are pinned for the next quality
configuration step; ESLint 8's upstream end-of-support is a deferred CRA/Vite
migration concern, not a claim of a fully modern toolchain.
