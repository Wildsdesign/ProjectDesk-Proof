# Reflective Layer

Project Desk's strategic direction goes beyond a traditional
project-tracking screen.

The underlying bet is that software built for people directing AI agents
should work differently from traditional software:

```text
a truthful, tenant-isolated substrate
+ a governed AI operating interface over that substrate
+ a human-legible reflection of current state
= a work surface that stays true without demanding manual upkeep
```

## The Shift

Traditional software asks a human to keep a tracking tool up to date by
hand — typing status changes, moving cards, writing summaries — on top of
the actual work.

A reflective work surface instead treats the AI agent doing the work as a
first-class writer of the record: the agent updates the truth as a normal
part of doing the work, and the human reads a reflection of it rather than
maintaining a second, parallel record by hand.

## Why Project Desk Is Positioned For This

Project Desk already treats the command layer as the single, governed path
for any change to a user's work — human or AI-originated. That matters
because a reflective surface can only be trusted if every writer, human or
agent, goes through the same validated, tenant-isolated path.

## What Is Not Claimed Here

This proof repo does not claim every reflective-layer capability is
finished. It documents the direction and the architecture posture that
makes it plausible:

- one governed write surface for every connected client
- per-tenant isolation as a platform-level property, not a per-feature
  concern
- a hosted MCP connector any standard AI client can use
- an operating discipline that treats "the record is truthful" as part of
  done, not an optional extra
