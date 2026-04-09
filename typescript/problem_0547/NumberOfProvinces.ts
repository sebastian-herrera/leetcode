export function findCircleNum(isConnected: number[][]): number {
  const n = isConnected.length;
  const graph = new Map<number, number[]>();

  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j]) {
        graph.get(i)?.push(j);
        graph.get(j)?.push(i);
      }
    }
  }

  const seen = new Array(n).fill(false);
  let provinces = 0;

  const dfs = (node: number) => {
    for (const neighbor of graph.get(node)!) {
      if (!seen[neighbor]) {
        seen[neighbor] = true;
        dfs(neighbor);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!seen[i]) {
      provinces++;
      seen[i] = true;
      dfs(i);
    }
  }

  return provinces;
}
