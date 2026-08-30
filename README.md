# Agent Skills Playbook

A rigorous, implementation-oriented playbook for designing reusable AI agent capabilities that are scoped, permission-bounded, testable, observable, recoverable, and safe to compose.

The central idea is simple:

> A skill is not just a prompt. It is a capability contract.

A production-grade skill should define:

```text
IDENTITY
PURPOSE
TRIGGERS
INPUT CONTRACT
CONTEXT CONTRACT
PERMISSION CONTRACT
CHANGE BUDGET
EXECUTION PROCESS
OUTPUT CONTRACT
VERIFICATION CONTRACT
FAILURE CONTRACT
STOP CONTRACT
```

## Skill Safety Invariant

```text
A skill must never gain more authority merely because completing
the task would be easier with additional authority.

If execution requires capabilities outside its contract,
the correct behavior is escalation, not silent privilege expansion.
```

## What This Repository Teaches

- Skill vs prompt vs agent vs tool
- Single-responsibility capability design
- Trigger and routing rules
- Inputs and outputs
- Context requirements
- Minimum-privilege tool access
- Read-only vs scoped-write skills
- Approval gates
- Change budgets
- Stop conditions
- No-op behavior
- Verification contracts
- Recovery and rollback
- Skill composition
- Conflict resolution
- Skill testing
- Adversarial testing
- Skill versioning
- Observability
- TypeScript interfaces
- JSON Schema validation
- Reusable `SKILL.md` templates
- Production-grade examples

## Skill Lifecycle

```text
Discover
→ Match
→ Validate Input
→ Validate Context
→ Authorize
→ Plan
→ Execute
→ Verify
→ Report
→ Stop
```

## Maturity Model

| Level | Capability |
|---|---|
| 0 | Prompt only |
| 1 | Structured output |
| 2 | Inputs and constraints |
| 3 | Tool-aware |
| 4 | Permission-controlled |
| 5 | Verification-controlled |
| 6 | Failure-aware and recoverable |
| 7 | Composable with dependency rules |
| 8 | Tested and versioned |
| 9 | Observable production-grade |
| 10 | Portable, secure, deterministic, testable, permission-bounded, recoverable |

## Repository Map

```text
01-fundamentals/
02-skill-anatomy/
03-skill-design/
04-permissions/
05-execution/
06-context/
07-composition/
08-skill-patterns/
09-testing/
10-evaluation/
11-security/
12-versioning/
13-observability/
templates/
examples/
schemas/
typescript/
resources/
```

## Fast Start

Start with:

1. `01-fundamentals/what-is-a-skill.md`
2. `02-skill-anatomy/skill-contract.md`
3. `03-skill-design/single-responsibility.md`
4. `04-permissions/minimum-privilege.md`
5. `05-execution/inspect-plan-execute-verify.md`
6. `09-testing/contract-tests.md`
7. `templates/production/SKILL.md`

## Design Rule

A skill should be understandable before it is executable.

If a reviewer cannot determine what the skill may do, what it must not do, how it proves success, and when it stops, the skill contract is incomplete.

## License

MIT License.
