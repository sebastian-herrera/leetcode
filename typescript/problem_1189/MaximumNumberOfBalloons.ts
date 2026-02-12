// %%

export function maxNumberOfBalloons(text: string): number {
  const counts = [0, 0, 0, 0, 0],
    allowLetters: Record<string, number> = { b: 0, a: 1, l: 2, o: 3, n: 4 };

  for (let i = 0; i < text.length; i++) {
    if (allowLetters[text[i]] === undefined) continue;

    const letter = allowLetters[text[i]];

    counts[letter] += 1;
  }

  let i = 0,
    ans = 0;

  while (true) {
    if (i === 5) {
      i = 0;
      ans++;
    }

    counts[i] -= i === 2 || i === 3 ? 2 : 1;
    if (counts[i] < 0) break;

    i++;
  }

  return ans;
}
