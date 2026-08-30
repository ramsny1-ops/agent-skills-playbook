import type { AgentSkill } from "../types.js";

export const codeReviewer: AgentSkill = {
  id: "production-code-reviewer",
  version: "1.0.0",
  purpose: "Review existing code without modifying repository state.",
  useWhen: ["review code", "review diff", "review pull request"],
  doNotUseWhen: ["implement feature", "modify code"],
  requiredInputs: ["review target"],
  permissions: [
    { capability: "read-files", mode: "allow" },
    { capability: "search-repository", mode: "allow" },
    { capability: "inspect-diff", mode: "allow" },
    { capability: "edit-files", mode: "deny" },
    { capability: "install-packages", mode: "deny" },
    { capability: "deploy", mode: "deny" },
  ],
  process: [
    "validate review target",
    "inspect changed files",
    "inspect direct dependencies when necessary",
    "rank findings",
    "produce merge recommendation",
  ],
  verification: ["all relevant changed files reviewed"],
  failure: ["report missing context without inventing behavior"],
  stop: ["stop after findings and merge recommendation are produced"],
};
