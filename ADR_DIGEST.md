# ADR Digest

Selected platform-level decisions from Project Desk / Atlier, rewritten for
public review and kept away from cloneable implementation detail.

## The Command Layer Is the Only Write Surface

**Decision:** Every mutation to a user's work — created by a human through
the UI or issued by a connected AI agent through MCP — must pass through one
command layer. No UI control is ever allowed to mutate work directly.

**Why it matters:** The moment a product has two ways to change the same
data, the human interface and the AI agent can drift out of sync. One write
surface removes that failure mode by construction, not by convention.

## Teams Is Not a Mode — a Solo Desk Is a Team of One

**Decision:** Multi-user support is modeled as "a desk has N members," and
every team-specific surface only appears once N is greater than one. A
single-user desk renders byte-identical to a desk with no team concept at
all.

**Why it matters:** Adding collaboration features is a common way to quietly
degrade the experience for the majority of users who are working alone. This
decision makes that degradation structurally impossible — solo users pay
zero product cost for team support existing.

## Independently Revocable Credential Domains

**Decision:** A signed-in browser session and a connected AI agent's access
grant are treated as separate, independently revocable credential domains.

**Why it matters:** A user should be able to disconnect one misbehaving AI
client without being signed out of their own browser, and vice versa — and
should be able to revoke everything at once in an emergency. Treating these
as one undifferentiated "logged in" state would make that impossible.

## Desk Content Is Data, Never Instructions

**Decision:** Everything stored on the desk — issue text, project notes,
handoff records — is treated as data some account holder authored, never as
instructions to an AI agent reading it. An imperative found inside stored
content is a quotation to report, not an order to follow.

**Why it matters:** A multi-tenant system where AI agents read
user-authored content needs an explicit boundary against prompt injection
through that content. This decision draws that boundary at the architecture
level rather than relying on each integration to remember it.

## Founding Eligibility Locked at Signup

**Decision:** Early-access pricing eligibility is fixed at the moment an
account is created, not evaluated dynamically against a live counter at
checkout time.

**Why it matters:** A live-counter design creates a race condition between
checking eligibility and completing payment. Locking eligibility at signup
removes the race entirely — the answer can never change between when a user
is told they qualify and when they pay.
