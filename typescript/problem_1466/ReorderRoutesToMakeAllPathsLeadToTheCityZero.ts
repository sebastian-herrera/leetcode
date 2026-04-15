export function minReorder(n: number, connections: number[][]): number {
  const adj: number[][] = Array.from({ length: n }, () => []);

  for (const [u, v] of connections) {
    adj[u].push(v);
    adj[v].push(-u); // mark
  }

  const seen = new Array(adj.length).fill(false);

  const dfs = (node: number): number => {
    let swap = 0;
    seen[node] = true;

    for (const neighborWithSymbol of adj[node]) {
      const neighbor = Math.abs(neighborWithSymbol);

      if (!seen[neighbor]) {
        if (neighborWithSymbol > 0) swap++;
        swap += dfs(neighbor);
      }
    }

    return swap;
  };

  return dfs(0);
}
