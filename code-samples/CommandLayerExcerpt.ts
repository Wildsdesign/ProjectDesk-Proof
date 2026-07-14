type TenantContext = {
  accountId: string;
};

type WorkCommand =
  | { type: "CREATE_ISSUE"; projectId: string; title: string }
  | { type: "MOVE_ISSUE"; projectId: string; issueId: string; status: string }
  | { type: "RECORD_HANDOFF"; projectId: string; issueId: string; note: string };

type CommandResult = {
  ok: boolean;
  version: number;
  changed: { type: string; id: string }[];
};

/**
 * Illustrative shape only. The real command layer additionally enforces
 * tenant isolation, closed-set validation, referential integrity, and an
 * append-only event log — none of which are shown here.
 */
export async function applyWorkCommand(
  context: TenantContext,
  command: WorkCommand,
): Promise<CommandResult> {
  assertTenantContext(context);

  switch (command.type) {
    case "CREATE_ISSUE":
      return createIssue(context, command);
    case "MOVE_ISSUE":
      return moveIssue(context, command);
    case "RECORD_HANDOFF":
      return recordHandoff(context, command);
  }
}

function assertTenantContext(context: TenantContext) {
  if (!context.accountId) {
    throw new Error("A tenant-scoped command requires an account context.");
  }
}

async function createIssue(
  context: TenantContext,
  command: Extract<WorkCommand, { type: "CREATE_ISSUE" }>,
): Promise<CommandResult> {
  // Every write is scoped to context.accountId — there is no path here
  // that can touch another account's data.
  return {
    ok: true,
    version: 0,
    changed: [{ type: "issue", id: "example-id" }],
  };
}

async function moveIssue(
  context: TenantContext,
  command: Extract<WorkCommand, { type: "MOVE_ISSUE" }>,
): Promise<CommandResult> {
  return {
    ok: true,
    version: 0,
    changed: [{ type: "issue", id: command.issueId }],
  };
}

async function recordHandoff(
  context: TenantContext,
  command: Extract<WorkCommand, { type: "RECORD_HANDOFF" }>,
): Promise<CommandResult> {
  // Handoff text is stored as DATA, never treated as instructions to any
  // agent that later reads it back.
  return {
    ok: true,
    version: 0,
    changed: [{ type: "return", id: "example-id" }],
  };
}
