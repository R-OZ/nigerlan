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
The original modernization commits were created on 13 October 2026. Their
author dates were later reassigned at the owner's request; see the date record
below. Backup refs remain local and have not been pushed.

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

## Quality checks and handoff

Formatting is isolated in commit `89c98e56` to keep its broad mechanical diff
separate from CI policy. The final work package adds strict ESLint, formatting,
repository/runtime checks, independent GitHub Actions jobs, dependency audits,
and checksum-pinned Gitleaks scanning. Compatible security maintenance moves
React Router to 6.30.6 and nodemon to 3.1.14; no later-major migration is included.
The development supervisor now uses independent ports and terminates both process
trees on shutdown. Custom ports, media origin, and SIGTERM cleanup were verified.

Six new commits cover the five work packages: the extra commit isolates formatting.
The historical backend's seven commits become reachable through the integration
merge; they are not seven newly manufactured commits. Local backup refs remain
at their original hashes. All original frontend/backend commits are ancestors of
the modernization branch, and `main` remains at its recorded starting hash.

See [the quality report](engineering-quality.md) for commands, passing checks,
known assertion failures, strict CI blockers, and checks not executed remotely.
No checks were suppressed to manufacture a green CI result. This is an
implemented foundation, not approval to release the inherited defects.

After owner review, the next milestone should correct curriculum/media and
lesson request/progress behavior using these regression targets. Major tooling
and React/Express upgrades must follow the approved later roadmap and clear the
remaining security/build gates before deployment. No push, merge into `main`,
deployment, or Milestone B implementation has been performed.

## Owner-requested author-date assignment

The modernization work and its initial verification were performed on
13 October 2026. On 14 October 2026, the owner requested deliberately assigned
historical author dates. These dates are not evidence that the work was performed
in December 2025 or January 2026. Replacement committer timestamps record the
actual rewrite time, and the replacement commits are signed.

The first allocation used December 2025 through May 2026 for only six commits.
The owner then approved a 30-slot allocation for the entire modernization,
leaving room for later meaningful work and smaller commit splits. Milestone A
now occupies only slots 1–6, from 8 December 2025 to 12 January 2026. Slots 7–30
are reserved, not existing commits. See the [date-allocation ledger](commit-date-plan.md).

Recoverable local references:

- Original implementation: `refs/backup/nigerlan-pre-redating-20261014`, at
  `9213d822bfa78693dedc38378e66c4e2a533684a`.
- First date assignment: `refs/backup/nigerlan-before-date-allocation-20261014`, at
  `bd236f6d7e9646f5cda9df11b32928b12a8edc02`.

The six real changes retain their original messages and order. Only author dates,
replacement parent links, current committer timestamps/signatures, and date-related
documentation changed in this revision. Application code, assets, lockfiles,
tests, and configuration remain identical. The original 2021–2023 histories and
`main` are unchanged. Additional commit splitting has not been performed. Nothing
was pushed, merged into `main`, or deployed; GitHub contribution visibility has
not been verified.
