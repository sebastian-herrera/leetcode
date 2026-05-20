import { Queue } from '../common';

export function canReach(arr: number[], start: number): boolean {
  if (arr[start] === 0) return true;

  const q = new Queue([start]),
    seen = new Set();

  while (!q.isEmpty()) {
    const curr = q.pop()!;
    if (arr[curr] === 0) return true;

    const isInBound = curr >= 0 || curr < arr.length;
    if (!seen.has(curr) && isInBound) {
      seen.add(curr);
      q.push(curr + arr[curr]);
      q.push(curr - arr[curr]);
    }
  }

  return false;
}
