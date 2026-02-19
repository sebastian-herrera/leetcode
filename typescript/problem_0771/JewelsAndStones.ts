// %%

export function numJewelsInStones(jewels: string, stones: string): number {
  const base = new Set(jewels);
  let curr = 0;

  for (const stone of stones) {
    if (base.has(stone)) curr += 1;
  }

  return curr;
}

numJewelsInStones('aA', 'aAAbbbb');
