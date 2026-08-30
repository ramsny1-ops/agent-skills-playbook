import type { AgentSkill } from "./types.js";

export function routeSkill(skills: AgentSkill[], task: string): AgentSkill[] {
  const normalized = task.toLowerCase();

  return skills.filter((skill) =>
    skill.useWhen.some((trigger) => normalized.includes(trigger.toLowerCase())),
  );
}
