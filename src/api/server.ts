import { http, HttpResponse } from "msw";

// Helper to generate the minesweeper matrix
export function _generateMinesweeperMatrix(
  width: number,
  height: number,
  bombs: number
) {
  // Create empty matrix
  const matrix = Array.from({ length: height }, () => Array(width).fill(0));
  let placed = 0;
  while (placed < bombs) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    if (matrix[y][x] === 0) {
      matrix[y][x] = 1; // 1 means bomb
      placed++;
    }
  }
  return matrix;
}

export const handlers = [
  http.get("https://tech-test.dynatrace.com/api/minesweeper", ({ request }) => {
    const params = new URL(request.url).searchParams;
    const width = Number(params.get("width"));
    const height = Number(params.get("height"));
    const bombs = Number(params.get("bombs"));

    if (
      isNaN(width) ||
      isNaN(height) ||
      isNaN(bombs) ||
      width <= 0 ||
      height <= 0 ||
      bombs < 0 ||
      bombs > width * height
    ) {
      return HttpResponse.error();
    }

    const board = _generateMinesweeperMatrix(width, height, bombs);
    return HttpResponse.json({ width, height, bombs, board });
  }),
];
