import { expect, test, vi } from "vitest";
import { _generateMinesweeperMatrix } from "./server.js";


test("generates a matrix of size 5x5 with 1 mine, set at random", () => {
  expect(_generateMinesweeperMatrix(1, 1, 1)).toStrictEqual([[-1]]);
});

test("generates a matrix of size 5x5 with 1 mine", () => {
  vi.spyOn(Math, "random").mockReturnValue(0.1); // Mock random to control mine placement
  expect(_generateMinesweeperMatrix(5, 5, 1)).toStrictEqual([
    [-1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);
});

test("generates a matrix of size 5x5 with 2 mines", () => {
  vi.spyOn(Math, "random")
    // 1st bomb at (0, 0)
    .mockReturnValueOnce(0.1)
    .mockReturnValueOnce(0.1)
    // 2nd bomb at (1, 1)
    .mockReturnValueOnce(0.2)
    .mockReturnValueOnce(0.2);
  expect(_generateMinesweeperMatrix(5, 5, 2)).toStrictEqual([
    [-1, 2, 1, 0, 0],
    [2, -1, 1, 0, 0],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);
});

test("generates a matrix of size 5x5 with 3 mines", () => {
  vi.spyOn(Math, "random")
    // 1st bomb at (0, 0)
    .mockReturnValueOnce(0.1)
    .mockReturnValueOnce(0.1)
    // 2nd bomb at (1, 1)
    .mockReturnValueOnce(0.2)
    .mockReturnValueOnce(0.2)
    // 2nd bomb at (2, 2)
    .mockReturnValueOnce(0.4)
    .mockReturnValueOnce(0.4);
  expect(_generateMinesweeperMatrix(5, 5, 3)).toStrictEqual([
    [-1, 2, 1, 0, 0],
    [2, -1, 2, 1, 0],
    [1, 2, -1, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ]);
});
