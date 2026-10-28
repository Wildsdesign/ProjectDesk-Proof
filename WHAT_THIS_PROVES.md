# What This Proves

This repo exists for a technical evaluator who wants to understand the
engineering behind Project Desk / Atlier without receiving the private
production source.

## The Short Version

Project Desk demonstrates a real, live, hosted multi-tenant SaaS product,
built and operated end to end:

- an in-house OAuth 2.1 authorization server, not just a consumer of one
- a command/event architecture enforcing a single write surface across every
  client (human UI and connected AI agents alike)
- per-account tenant isolation as a first-class platform concern
- cross-vendor protocol interoperability engineering — real defects found
  and fixed across independently-built AI clients
- AI-assisted execution without losing human product judgment
- public proof discipline that protects private implementation value

## What To Look For

### 1. Product Judgment

Project Desk is not a generic project-management app. It is built around a
specific bet: a builder directing multiple AI agents across multiple
projects does not need another place to type tasks. They need a truthful
reflection of work already in motion, and a clear signal for what needs
their attention now.

### 2. Architecture Judgment

The platform enforces one command layer as the only write surface for work —
every mutation, whether typed by a human or issued by a connected AI agent,
goes through the same path. That discipline is what keeps a human UI and an
AI agent from ever disagreeing about what is true.

### 3. Security Judgment

The public docs center per-account tenant isolation, an in-house OAuth 2.1
authorization server, independently revocable credential domains, and a
mandatory adversarial-review pass for any change touching money or auth. The
point is not to publish exploitable implementation detail. The point is to
show the security shape and the review discipline behind it.

### 4. Delivery Judgment

The operating model connects product direction, AI-assisted implementation,
adversarial review, deployment, and live production validation into one
loop. That loop — and evidence that it catches real bugs before they ship —
is part of the proof.

### 5. Boundary Judgment

This repo shows enough to evaluate the work while excluding production
source, storage internals, token/session mechanics, billing internals, and
company strategy.

## What This Does Not Prove

This repo does not prove every private implementation detail of Project Desk
or Atlier. It is not a runnable clone and should not become one.

For deeper evaluation, use this repo as a public architecture and operating
artifact.
