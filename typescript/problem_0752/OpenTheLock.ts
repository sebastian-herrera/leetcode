import { Queue } from '../common';

export function openLock(deadends: string[], target: string): number {
  const wheels = target.length,
    start = '0'.repeat(wheels),
    seen = new Set(deadends);

  if (target === start) return 0;
  if (seen.has(start) || seen.has(target)) return -1;

  seen.add(start);
  const q = new Queue([start]);
  let steps = 0;

  const getNeighbors = (state: string): string[] => {
    const ans: string[] = [];

    for (let i = 0; i < wheels; i++) {
      for (const pos of [-1, 1]) {
        const digit = +state[i];

        const slot = (digit + pos + 10) % 10;
        const newState = state.substring(0, i) + slot + state.substring(i + 1);

        if (!seen.has(newState)) ans.push(newState);
      }
    }

    return ans;
  };

  while (!q.isEmpty()) {
    const currLength = q.size();

    for (let i = 0; i < currLength; i++) {
      const node = q.pop()!;

      for (const neighbor of getNeighbors(node)) {
        if (neighbor === target) return steps + 1;

        seen.add(neighbor);
        q.push(neighbor);
      }
    }

    steps++;
  }

  return -1;
}
