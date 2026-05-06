import { Queue } from '../common';

export function nearestExit(maze: string[][], entrance: number[]): number {
  const M = maze.length,
    N = maze[0].length,
    [startRow, startCol] = entrance;

  const isValid = (row: number, col: number): boolean => {
    const isRowInBounds = row >= 0 && row < M;
    const isColInBounds = col >= 0 && col < N;

    if (isRowInBounds && isColInBounds) return maze[row][col] === '.';
    return false;
  };

  const DIRECTIONS = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  const seen: boolean[][] = Array.from({ length: M }, () => new Array(N).fill(false));
  seen[startRow][startCol] = true;
  const q = new Queue([[startRow, startCol]]);
  let steps = 0;

  while (!q.isEmpty()) {
    const currLength = q.size();

    for (let i = 0; i < currLength; i++) {
      let [row, col] = q.pop()!;

      for (const [dr, dc] of DIRECTIONS) {
        const nr = row + dr,
          nc = col + dc;

        if (isValid(nr, nc) && !seen[nr][nc]) {
          if (nr === M - 1 || nr === 0 || nc === N - 1 || nc === 0) return steps + 1;

          seen[nr][nc] = true;
          q.push([nr, nc]);
        }
      }
    }

    steps++;
  }

  return -1;
}
