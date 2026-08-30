import assert from "node:assert/strict";
import test from "node:test";

import { canExecute } from "../permission.js";
import { codeReviewer } from "../examples/codeReviewer.js";

test("reviewer can read but cannot edit", () => {
  assert.equal(canExecute(codeReviewer, "read-files"), true);
  assert.equal(canExecute(codeReviewer, "edit-files"), false);
});
