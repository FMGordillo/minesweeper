import { http, HttpResponse } from "msw";

// Helper to generate the minesweeper matrix
export function _generateMinesweeperMatrix(
  width: number,
  height: number,
  mines: number
) {
  // Create empty matrix
  const matrix = Array.from({ length: height }, () => Array(width).fill(0));
  let placed = 0;
  while (placed < mines) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);

    if (matrix[y][x] !== -1) {
      matrix[y][x] = -1; // -1 means mine
      placed++;
      // Increment surrounding tile mine "count"
      for (const i of [-1, 0, 1]) {
        for (const j of [-1, 0, 1]) {
          const newX = x + j;
          const newY = y + i;
          if (
            newX >= 0 &&
            newX < width &&
            newY >= 0 &&
            newY < height &&
            matrix[newY][newX] !== -1
          ) {
            matrix[newY][newX]++;
          }
        }
      }
    }
  }
  return matrix;
}

export const handlers = [
  http.get("https://tech-test.dynatrace.com/api/minesweeper", ({ request }) => {
    const params = new URL(request.url).searchParams;
    const width = Number(params.get("width"));
    const height = Number(params.get("height"));
    const mines = Number(params.get("mines"));

    if (
      isNaN(width) ||
      isNaN(height) ||
      isNaN(mines) ||
      width <= 0 ||
      height <= 0 ||
      mines < 0 ||
      mines > width * height
    ) {
      return HttpResponse.error();
    }

    const board = _generateMinesweeperMatrix(width, height, mines);
    return HttpResponse.json({ width, height, mines, board });
  }),
];
