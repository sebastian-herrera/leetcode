export function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number,
): boolean {
  const adj: number[][] = Array.from({ length: n }, () => []);

  for (const [x, y] of edges) {
    adj[x].push(y);
    adj[y].push(x);
  }

  const seen: boolean[] = new Array(n).fill(false);

  const dfs = (node: number): boolean => {
    if (node === destination) return true;
    seen[node] = true;

    for (const neighbor of adj[node]) {
      if (!seen[neighbor]) {
        if (dfs(neighbor)) return true;
      }
    }

    return false;
  };

  return dfs(source);
}
