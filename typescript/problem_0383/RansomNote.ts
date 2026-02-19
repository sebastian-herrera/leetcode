// %%

export function canConstruct(ransomNote: string, magazine: string): boolean {
  if (magazine.length < ransomNote.length) return false;

  const count = new Map();

  for (let letter of magazine) {
    count.set(letter, (count.get(letter) || 0) + 1);
  }

  for (let letter of ransomNote) {
    if (!count.has(letter)) return false;

    const curr = count.get(letter);
    if (curr === 0) return false;

    count.set(letter, count.get(letter) - 1);
  }

  return true;
}

canConstruct('aa', 'ab'); // false
canConstruct('aa', 'aab'); // true
