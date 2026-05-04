import { Queue } from '../common';

export function shortestAlternatingPaths(
  n: number,
  redEdges: number[][],
  blueEdges: number[][],
): number[] {
  const RED = 0,
    BLUE = 1;

  const adj: number[][][] = [
    Array.from({ length: n }, () => []),
    Array.from({ length: n }, () => []),
  ];

  for (const [u, v] of redEdges) adj[RED][u].push(v);
  for (const [u, v] of blueEdges) adj[BLUE][u].push(v);

  const ans: number[] = new Array(n).fill(Infinity);
  const q = new Queue([
    [0, RED, 0],
    [0, BLUE, 0],
  ]);

  const seen = Array.from({ length: n }, () => new Array(2).fill(false));

  while (!q.isEmpty()) {
    const [node, color, steps] = q.pop()!;

    ans[node] = Math.min(ans[node], steps);
    const nextColor = 1 - color;

    for (const neighbor of adj[nextColor][node]) {
      if (!seen[neighbor][nextColor]) {
        seen[neighbor][nextColor] = true;
        q.push([neighbor, nextColor, steps + 1]);
      }
    }
  }

  return ans.map(val => (val !== Infinity ? val : -1));
}
