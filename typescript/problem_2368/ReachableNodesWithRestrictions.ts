export function reachableNodes(n: number, edges: number[][], restricted: number[]): number {
  const adj: number[][] = Array.from({ length: n }, () => []);

  for (const [x, v] of edges) {
    adj[x].push(v);
    adj[v].push(x);
  }

  const seen = new Array(n).fill(false);
  for (const node of restricted) {
    seen[node] = true;
  }

  const dfs = (node: number): number => {
    seen[node] = true;
    let ans = 1;

    for (const neighbor of adj[node]) {
      if (!seen[neighbor]) ans += dfs(neighbor);
    }

    return ans;
  };

  return dfs(0);
}
