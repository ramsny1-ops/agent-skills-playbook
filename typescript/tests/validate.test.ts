import assert from "node:assert/strict";
import test from "node:test";

import { validateSkill } from "../validate.js";
import { codeReviewer } from "../examples/codeReviewer.js";

test("valid skill has no validation errors", () => {
  assert.deepEqual(validateSkill(codeReviewer), []);
});
