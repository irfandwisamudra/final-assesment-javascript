import { describe, it } from "node:test";
import assert from "node:assert/strict";
import sum from "./index.js";

describe("sum function", () => {
  it("should return the correct sum when both inputs are positive numbers", () => {
    // Arrange
    const a = 7;
    const b = 5;

    // Act
    const result = sum(a, b);

    // Assert
    const expected = 12;
    assert.strictEqual(result, expected);
  });

  it("should return 0 when the first parameter is not a number", () => {
    // Arrange
    const a = "7";
    const b = 5;

    // Act
    const result = sum(a, b);

    // Assert
    const expected = 0;
    assert.strictEqual(result, expected);
  });

  it("should return 0 when the second parameter is not a number", () => {
    // Arrange
    const a = 7;
    const b = "5";

    // Act
    const result = sum(a, b);

    // Assert
    const expected = 0;
    assert.strictEqual(result, expected);
  });

  it("should return 0 when both parameters are not numbers", () => {
    // Arrange
    const a = "a";
    const b = {};

    // Act
    const result = sum(a, b);

    // Assert
    const expected = 0;
    assert.strictEqual(result, expected);
  });

  it("should return 0 when the first parameter is negative", () => {
    // Arrange
    const a = -3;
    const b = 5;

    // Act
    const result = sum(a, b);

    // Assert
    const expected = 0;
    assert.strictEqual(result, expected);
  });

  it("should return 0 when the second parameter is negative", () => {
    // Arrange
    const a = 5;
    const b = -3;

    // Act
    const result = sum(a, b);

    // Assert
    const expected = 0;
    assert.strictEqual(result, expected);
  });

  it("should return 0 when both parameters are negative", () => {
    // Arrange
    const a = -1;
    const b = -2;

    // Act
    const result = sum(a, b);

    // Assert
    const expected = 0;
    assert.strictEqual(result, expected);
  });

  it("should return 0 when both parameters are 0", () => {
    // Arrange
    const a = 0;
    const b = 0;

    // Act
    const result = sum(a, b);

    // Assert
    const expected = 0;
    assert.strictEqual(result, expected);
  });

  it("should return correct sum when first parameter is 0", () => {
    // Arrange
    const a = 0;
    const b = 10;

    // Act
    const result = sum(a, b);

    // Assert
    const expected = 10;
    assert.strictEqual(result, expected);
  });

  it("should return correct sum when second parameter is 0", () => {
    // Arrange
    const a = 25;
    const b = 0;

    // Act
    const result = sum(a, b);

    // Assert
    const expected = 25;
    assert.strictEqual(result, expected);
  });
});
