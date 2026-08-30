# Complete Skill Contract

A complete skill contract ties all other sections together. Reviewers should be able to answer who the skill is for, when it runs, what it consumes, what it may access, what it may change, how it proves success, how it fails, and when it stops.

## Example

```text
NAME: production-code-reviewer
PURPOSE: Review code without modification.
ALLOWED: read, search, inspect diff.
DENIED: edit, install, deploy.
VERIFY: all changed files reviewed.
STOP: after findings and merge recommendation.
```
