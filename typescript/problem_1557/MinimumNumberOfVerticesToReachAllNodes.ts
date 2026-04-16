export function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
  const indegree: number[] = new Array(n).fill(0);

  for (const [_x, y] of edges) {
    indegree[y]++;
  }

  const ans = [];
  for (let i = 0; i < n; i++) {
    if (!indegree[i]) ans.push(i);
  }

  return ans;
}
