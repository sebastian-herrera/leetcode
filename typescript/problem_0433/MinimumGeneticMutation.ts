import { Queue } from '../common';

export function minMutation(startGene: string, endGene: string, bank: string[]): number {
  if (startGene === endGene) return 0;
  if (!bank.includes(endGene)) return -1;

  const q = new Queue<string>([startGene]),
    seen = new Set([startGene]),
    whileList = new Set(bank);
  let steps = 0;

  const getNeighbors = (gene: string): string[] => {
    const ans = [];

    for (let i = 0; i < gene.length; i++) {
      const char = gene[i];
      for (const move of ['A', 'C', 'G', 'T']) {
        if (char === move) continue;

        const newGene = gene.substring(0, i) + move + gene.substring(i + 1);
        if (!seen.has(newGene) && whileList.has(newGene)) ans.push(newGene);
      }
    }

    return ans;
  };

  while (!q.isEmpty()) {
    const currLength = q.size();

    for (let i = 0; i < currLength; i++) {
      const currGene = q.pop()!;

      for (const neighbor of getNeighbors(currGene)) {
        if (neighbor === endGene) return steps + 1;

        seen.add(neighbor);
        q.push(neighbor);
      }
    }

    steps++;
  }

  return -1;
}
