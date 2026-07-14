# AGENTS.md - Project Desk Proof

This repository is a curated public-proof artifact for Project Desk and
Atlier. It is not the production repository and must not become a runnable
clone.

## Rules

- Do not copy source code from the private Atlier / Project Desk production
  repo.
- Do not add command/event storage internals, database schema, token or
  session mechanics, or billing/webhook implementation detail.
- Do not add real URLs, resource names, workflow files, secrets, or
  environment files. `https://atlier.ai` (the live public product) is the
  one exception.
- Do not add company strategy, roadmap, pricing detail, or go-to-market
  material.
- Keep this repo docs-first and platform-level. Small sanitized
  platform-level code excerpts are allowed only when they avoid production
  internals.
- Preserve the proof-repo shape in `PROOF_REPO_STANDARD.md`: entry path,
  what-this-proves argument, architecture, ADRs, operating model, code
  excerpts, and explicit public/private boundary.
- If adding proof, add evaluator clarity before adding volume.

## Purpose

Show engineering judgment:

- platform architecture and the Atlier / Project Desk relationship
- in-house OAuth 2.1 authorization-server design
- tenant-isolation thinking
- command/event architecture discipline
- adversarial-review discipline on money and auth code
- cross-vendor MCP protocol interoperability engineering
- agentic operating model
- reflective-layer strategic direction

Private Project Desk / Atlier remains the implementation source of truth.
