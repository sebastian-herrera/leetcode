import { Queue } from '../common';

export function snakesAndLadders(board: number[][]): number {
  const n = board.length,
    target = n * n;

  const intToPosition = (square: number): [number, number] => {
    square -= 1;

    let row = Math.trunc(square / n),
      col = square % n;

    if (row % 2 === 1) col = n - 1 - col;
    row = n - 1 - row;

    return [row, col];
  };

  const seen = new Set([1]);
  const q = new Queue([[1, 0]]);

  while (!q.isEmpty()) {
    const [currSquare, move] = q.pop()!;

    for (let i = 1; i <= 6; i++) {
      const nextSquare = currSquare + i;
      if (nextSquare > target) break;

      const [row, col] = intToPosition(nextSquare);
      const position = board[row][col] !== -1 ? board[row][col] : nextSquare;

      if (position === target) return move + 1;
      if (!seen.has(position)) {
        seen.add(position);
        q.push([position, move + 1]);
      }
    }
  }

  return -1;
}
