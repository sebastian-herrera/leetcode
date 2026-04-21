import { Queue } from '../common';

export function shortestPathBinaryMatrix(grid: number[][]): number {
  const N = grid.length;
  if (grid[0][0] === 1 || grid[N - 1][N - 1] === 1) return -1;

  const DIRECTIONS = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];

  const isValid = (r: number, c: number) => {
    const isRowInBounds = r >= 0 && r < N;
    const isColInBounds = c >= 0 && c < N;

    if (isRowInBounds && isColInBounds) return grid[r][c] === 0;
    return false;
  };

  const seen = Array.from({ length: N }, () => new Array(N).fill(false));

  const q = new Queue([[0, 0, 1]]);
  seen[0][0] = true;

  while (!q.isEmpty()) {
    const [r, c, length] = q.pop()!;
    if (r === N - 1 && c === N - 1) return length;

    for (const [dr, dc] of DIRECTIONS) {
      const nr = r + dr,
        nc = c + dc;

      if (isValid(nr, nc) && !seen[nr][nc]) {
        q.push([nr, nc, length + 1]);
        seen[nr][nc] = true;
      }
    }
  }

  return -1;
}
