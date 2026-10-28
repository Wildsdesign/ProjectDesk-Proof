# Public Boundary

This proof repo is
intentionally strategic and architectural rather than cloneable.

## Safe To Show

- platform map and product relationship (Atlier → Project Desk → MCP
  connector → connected clients)
- OAuth 2.1 authorization-server posture (without token/session internals)
- tenant-isolation principle
- ADR discipline
- AI-assisted operating model, including the adversarial-review discipline
- reflective-layer strategic direction
- small platform-level code excerpts that do not expose implementation
  internals
- the live product URL: https://atlier.ai

## Not Safe To Show Here

- production source code
- command/event storage internals and schema
- token, session, and refresh-rotation mechanics
- billing and webhook implementation detail
- full endpoint maps
- deployment files and real resource names
- account, tenant, or transaction data
- company strategy, roadmap, or go-to-market detail

## Companion Proof Repos

Deeper, product-specific proof for other Wilds products lives in separate
artifacts:

- MindServe-Proof: a connected suite of cafeteria-operations surfaces —
  suite architecture, facility-scoped tenancy, and the same operating
  model.

Project Desk proof stays at the platform level.
