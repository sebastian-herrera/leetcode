import { Queue } from '../common';

export function shortestPath(grid: number[][], k: number): number {
  const M = grid.length,
    N = grid[0].length;

  const isValid = (r: number, c: number) => {
    const isRowInBounds = r >= 0 && r < M,
      isColInBounds = c >= 0 && c < N;

    if (isRowInBounds && isColInBounds) return true;
    return false;
  };

  const q = new Queue([[0, 0, k]]);
  const seen = Array.from({ length: M }, () => new Array(N).fill(-1));
  const DIRECTIONS = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];
  let steps = 0;

  while (!q.isEmpty()) {
    const currLength = q.size();

    for (let i = 0; i < currLength; i++) {
      let [r, c, remain] = q.pop()!;
      if (r === M - 1 && c === N - 1) return steps;

      if (grid[r][c] === 1) {
        if (remain === 0) continue;
        remain--;
      }

      if (seen[r][c] >= remain) continue;
      seen[r][c] = remain;

      for (const [dx, dy] of DIRECTIONS) {
        const nr = r + dy,
          nc = c + dx;

        if (isValid(nr, nc)) q.push([nr, nc, remain]);
      }
    }

    steps++;
  }

  return -1;
}
