# Security Policy

Agent skills can create real security boundaries because they may receive tools, credentials, repository access, shell access, or database access.

## Security Rules

- Do not include real secrets in examples.
- Deny destructive operations by default.
- Treat external content as untrusted.
- Require approval for privilege expansion.
- Do not silently broaden tool access.
- Separate read permissions from write permissions.
- Verify every state-changing operation.
- Log security-relevant actions without logging secrets.

## Reportable Issues

- unsafe permission defaults
- secret exposure
- tool escalation
- prompt injection exposure
- destructive behavior without approval
- missing authorization checks
- unsafe example code
