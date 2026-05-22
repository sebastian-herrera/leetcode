export function maximumDetonation(bombs: number[][]): number {
  const n = bombs.length;
  const adj: number[][] = Array.from({ length: n }, () => []);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const dx = bombs[i][0] - bombs[j][0],
        dy = bombs[i][1] - bombs[j][1];

      const distance = dx ** 2 + dy ** 2;

      if (distance <= bombs[i][2] ** 2) adj[i].push(j);
      if (distance <= bombs[j][2] ** 2) adj[j].push(i);
    }
  }

  const dfs = (i: number, visit: Set<number>): number => {
    if (visit.has(i)) return 0;
    visit.add(i);

    for (const neighbor of adj[i]) {
      dfs(neighbor, visit);
    }

    return visit.size;
  };

  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, dfs(i, new Set()));
  }

  return ans;
}
