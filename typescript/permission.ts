import type { AgentSkill, PermissionMode } from "./types.js";

export function permissionFor(skill: AgentSkill, capability: string): PermissionMode {
  const exact = skill.permissions.find((permission) => permission.capability === capability);
  return exact?.mode ?? "deny";
}

export function canExecute(skill: AgentSkill, capability: string): boolean {
  return permissionFor(skill, capability) === "allow";
}
