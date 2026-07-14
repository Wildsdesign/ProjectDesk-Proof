# Security and Tenancy

Project Desk's public proof boundary focuses on posture and discipline, not
implementation.

## Tenant Boundary

Every account's work is isolated at the platform layer. Reads and writes
are always scoped to the authenticated account; there is no code path that
crosses tenants by mistake — a bug in one account's request can only ever
affect that one account's data.

## Auth Posture

At a public level, the platform demonstrates:

- an in-house OAuth 2.1 authorization server (not a consumer of a
  third-party identity product) supporting dynamic client registration, so
  any standard MCP client can connect
- sign-in via major identity providers, verified server-side
- independently revocable credential domains — a browser session and a
  connected AI agent's access grant can each be revoked without touching
  the other, with an emergency "revoke everything" path
- short-lived access tokens with atomic, replay-resistant refresh rotation

The private production repo contains the implementation details. They are
not included here.

## Data Posture

This proof repo does not include schema details or endpoint maps. The
important public claim is architectural:

> Every connected surface — the web UI and every AI agent connected through
> MCP — reads and writes through the same tenant-scoped command layer.
> There is no second path that could see or change another account's data.

## Operational Security

The platform is built with:

- private source control
- cloud-hosted managed services
- environment-based configuration
- no secrets in source
- a mandatory adversarial-review pass for any change touching money, auth,
  or tenant isolation, before it ships
- deployment automation gated on an automated verification pass

## What We Avoid Publishing

- token and session internals
- route and endpoint maps
- database schema and storage-layer detail
- rate-limit thresholds and other tuning parameters
- real account, tenant, or transaction data
- deployment resource names
