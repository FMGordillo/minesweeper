import { expect, test, vi } from "vitest";
import { _generateMinesweeperMatrix } from "./server.js";

test("generates a matrix of size 1 with one mine", () => {
  expect(_generateMinesweeperMatrix(1, 1, 1)).toStrictEqual([[1]]);
});

test("generates a matrix of size 5x5 with 1 mine, set at random", () => {
  vi.spyOn(Math, "random").mockReturnValue(0.1); // Mock random to control mine placement
  expect(_generateMinesweeperMatrix(5, 5, 1)).toStrictEqual([
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);
});
