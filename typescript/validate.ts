import type { AgentSkill } from "./types.js";

export function validateSkill(skill: AgentSkill): string[] {
  const errors: string[] = [];

  if (!skill.id.trim()) errors.push("id is required");
  if (!skill.purpose.trim()) errors.push("purpose is required");
  if (skill.useWhen.length === 0) errors.push("useWhen must contain at least one trigger");
  if (skill.process.length === 0) errors.push("process must not be empty");
  if (skill.verification.length === 0) errors.push("verification must not be empty");
  if (skill.stop.length === 0) errors.push("stop must not be empty");

  const hasAllow = skill.permissions.some((p) => p.mode === "allow");
  const hasDeny = skill.permissions.some((p) => p.mode === "deny");

  if (!hasAllow) errors.push("at least one explicit allowed capability is recommended");
  if (!hasDeny) errors.push("at least one explicit denied capability is recommended");

  return errors;
}
