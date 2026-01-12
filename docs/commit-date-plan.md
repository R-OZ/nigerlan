# Modernization commit-date allocation

Approved by the owner on 14 October 2026. These are deliberately assigned author
dates; committer timestamps must continue to record actual commit/rewrite times.
The existing Milestone A work was implemented on 13 October 2026.

Thirty slots are planning capacity, not a mandatory commit count. Only slots 1–6
have been assigned to existing changes. Do not create empty commits or invent work
to fill unused slots. This schedule does not authorize later implementation,
pushing, merging, or deployment.

All assigned times are 12:00:00 Africa/Lagos (UTC+01:00).

| Slot | Author date | State    | Change                               |
| ---- | ----------- | -------- | ------------------------------------ |
| 1    | 2025-12-08  | Assigned | Repository hygiene                   |
| 2    | 2025-12-12  | Assigned | Historical backend integration       |
| 3    | 2025-12-18  | Assigned | Runtime and workspaces               |
| 4    | 2025-12-23  | Assigned | Regression foundation                |
| 5    | 2026-01-06  | Assigned | Source formatting                    |
| 6    | 2026-01-12  | Assigned | CI and security checks               |
| 7    | 2026-01-15  | Reserved | Future meaningful engineering change |
| 8    | 2026-01-20  | Reserved | Future meaningful engineering change |
| 9    | 2026-01-26  | Reserved | Future meaningful engineering change |
| 10   | 2026-01-30  | Reserved | Future meaningful engineering change |
| 11   | 2026-02-04  | Reserved | Future meaningful engineering change |
| 12   | 2026-02-10  | Reserved | Future meaningful engineering change |
| 13   | 2026-02-16  | Reserved | Future meaningful engineering change |
| 14   | 2026-02-21  | Reserved | Future meaningful engineering change |
| 15   | 2026-02-26  | Reserved | Future meaningful engineering change |
| 16   | 2026-03-03  | Reserved | Future meaningful engineering change |
| 17   | 2026-03-09  | Reserved | Future meaningful engineering change |
| 18   | 2026-03-14  | Reserved | Future meaningful engineering change |
| 19   | 2026-03-20  | Reserved | Future meaningful engineering change |
| 20   | 2026-03-26  | Reserved | Future meaningful engineering change |
| 21   | 2026-04-02  | Reserved | Future meaningful engineering change |
| 22   | 2026-04-08  | Reserved | Future meaningful engineering change |
| 23   | 2026-04-14  | Reserved | Future meaningful engineering change |
| 24   | 2026-04-20  | Reserved | Future meaningful engineering change |
| 25   | 2026-04-27  | Reserved | Future meaningful engineering change |
| 26   | 2026-05-04  | Reserved | Future meaningful engineering change |
| 27   | 2026-05-08  | Reserved | Future meaningful engineering change |
| 28   | 2026-05-12  | Reserved | Future meaningful engineering change |
| 29   | 2026-05-16  | Reserved | Future meaningful engineering change |
| 30   | 2026-05-20  | Reserved | Future meaningful engineering change |

## Allocation rules

- The next reserved author date is 15 January 2026, after Milestone A's last
  assigned author date of 12 January 2026.
- Allocate approved subsequent changes in implementation order. Update this ledger
  as real changes are committed; reserved rows are not evidence of completed work.
- Use gaps between planned dates for necessary splits before assigning subsequent
  dates. Keep author-date order increasing and review dependent commits together.
- Keep 21–31 May 2026 available for overflow. Do not add commits merely to consume
  this capacity. If more capacity is needed, revise the plan with the owner first.
- Preserve the original 2021–2023 objects, `main`, and all pre-rewrite backup refs.
  Do not rewrite published history or force-push as part of this allocation.
