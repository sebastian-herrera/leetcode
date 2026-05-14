import { Queue } from '../common';

export function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][],
): number[] {
  const adj = new Map<string, [string, number][]>();

  for (let i = 0; i < equations.length; i++) {
    const [u, v] = equations[i],
      val = values[i];

    if (!adj.has(u)) adj.set(u, []);
    if (!adj.has(v)) adj.set(v, []);

    adj.get(u)!.push([v, val]);
    adj.get(v)!.push([u, 1 / val]);
  }

  const bfs = (start: string, target: string): number => {
    if (!adj.has(start) || !adj.has(target)) return -1;
    if (start === target) return 1;

    const q = new Queue<[string, number]>([[start, 1]]),
      seen = new Set([start]);

    while (!q.isEmpty()) {
      const [currNode, currWeight] = q.pop()!;
      if (currNode === target) return currWeight;

      const neighbors = adj.get(currNode)!;
      for (const [neighbor, edgeWeight] of neighbors) {
        if (!seen.has(neighbor)) {
          seen.add(neighbor);
          q.push([neighbor, currWeight * edgeWeight]);
        }
      }
    }

    return -1;
  };

  return queries.map(([start, target]) => bfs(start, target));
}
