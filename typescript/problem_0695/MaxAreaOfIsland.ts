export function maxAreaOfIsland(grid: number[][]): number {
  const ROWS = grid.length,
    COLS = grid[0].length;

  const seen = Array.from({ length: ROWS }, () => new Array(COLS).fill(false));

  const DIRECTIONS = [
    // x, y
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  const isValid = (row: number, col: number): boolean => {
    const isRowInBounds = row >= 0 && row < ROWS;
    const isColInBounds = col >= 0 && col < COLS;

    if (isRowInBounds && isColInBounds) return grid[row][col] === 1;
    return false;
  };

  const dfs = (row: number, col: number): void => {
    islandSize++;
    seen[row][col] = true;

    for (const [x, y] of DIRECTIONS) {
      const r = row + y;
      const c = col + x;

      if (isValid(r, c) && !seen[r][c]) {
        dfs(r, c);
      }
    }
  };

  let islandSize = 0;
  let ans = 0;

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (grid[row][col] === 1 && !seen[row][col]) {
        dfs(row, col);

        ans = Math.max(islandSize, ans);
        islandSize = 0;
      }
    }
  }

  return ans;
}
