import { sum } from "./index.js";
import assert from "node:assert";
import { test } from "node:test";

test("should sum of two numbers correctly", () => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(-1, 1), 0);
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(-5, -3), -8);
});
