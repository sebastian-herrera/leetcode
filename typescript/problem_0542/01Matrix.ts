import { Queue } from '../common';

export function updateMatrix(mat: number[][]): number[][] {
  const M = mat.length,
    N = mat[0].length;

  const isValid = (r: number, c: number) => {
    const isRowInBounds = r >= 0 && r < M;
    const isColInBounds = c >= 0 && c < N;

    if (isRowInBounds && isColInBounds) return mat[r][c] === 1;
    return false;
  };

  const q = new Queue<number[]>();
  const seen = Array.from({ length: M }, () => new Array(N).fill(false));

  for (let r = 0; r < M; r++) {
    for (let c = 0; c < N; c++) {
      if (mat[r][c] === 0) {
        q.push([r, c]);
        seen[r][c] = true;
      }
    }
  }

  const DIRECTIONS = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  let step = 0;

  while (!q.isEmpty()) {
    step++;
    const currLength = q.size();

    for (let i = 0; i < currLength; i++) {
      const [r, c] = q.pop()!;

      for (const [dx, dy] of DIRECTIONS) {
        const nr = r + dy,
          nc = c + dx;

        if (isValid(nr, nc) && !seen[nr][nc]) {
          seen[nr][nc] = true;
          mat[nr][nc] = step;
          q.push([nr, nc]);
        }
      }
    }
  }

  return mat;
}
