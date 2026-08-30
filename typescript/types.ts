export type PermissionMode = "allow" | "deny" | "approval-required";

export interface SkillPermission {
  capability: string;
  mode: PermissionMode;
}

export interface SkillContextContract {
  required: string[];
  freshness?: string[];
  forbiddenAssumptions?: string[];
}

export interface SkillChangeBudget {
  maxChangedFiles?: number;
  maxNewFiles?: number;
  maxNewDependencies?: number;
  destructiveOperations?: boolean;
}

export interface AgentSkill {
  id: string;
  version: `${number}.${number}.${number}`;
  purpose: string;
  useWhen: string[];
  doNotUseWhen?: string[];
  requiredInputs?: string[];
  context?: SkillContextContract;
  permissions: SkillPermission[];
  changeBudget?: SkillChangeBudget;
  process: string[];
  verification: string[];
  failure?: string[];
  stop: string[];
}
