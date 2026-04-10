export function numIslands(grid: string[][]): number {
  if (!grid) return 0;

  const M = grid.length;
  const N = grid[0].length;
  const seen = Array.from({ length: M }, () => new Array(N).fill(false));
  let count = 0;

  const DIRECTIONS = [
    // [r, c]
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];

  const isValid = (r: number, c: number) => {
    const isRowInBounds = r >= 0 && r < M;
    const isColInBounds = c >= 0 && c < N;

    if (isRowInBounds && isColInBounds) return grid[r][c] === '1';
    return false;
  };

  const dfs = (r: number, c: number) => {
    for (const [dy, dx] of DIRECTIONS) {
      const nextR = dy + r;
      const nextC = dx + c;

      if (isValid(nextR, nextC) && !seen[nextR][nextC]) {
        seen[nextR][nextC] = true;
        dfs(nextR, nextC);
      }
    }
  };

  for (let r = 0; r < M; r++) {
    for (let c = 0; c < N; c++) {
      if (grid[r][c] === '1' && !seen[r][c]) {
        count++;
        seen[r][c] = true;
        dfs(r, c);
      }
    }
  }

  return count;
}
