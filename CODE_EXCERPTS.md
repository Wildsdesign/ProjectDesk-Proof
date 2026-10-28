# Code Excerpts

These excerpts are intentionally small, sanitized, and non-runnable. Their
job is to show implementation style without exposing production source,
endpoint maps, schemas, credentials, resource names, or sensitive internals.

| File | Purpose |
| --- | --- |
| `code-samples/CommandLayerExcerpt.ts` | Illustrative, tenant-scoped command dispatch shape, showing the single-write-surface pattern without production mechanics |

## Boundary

Project Desk proof stays platform-level. This repo does not include token,
session, storage, or billing implementation detail.

Before adding a new excerpt, check `PROOF_REPO_STANDARD.md`. The excerpt
should help a reader evaluate design judgment without exposing production
mechanics.
