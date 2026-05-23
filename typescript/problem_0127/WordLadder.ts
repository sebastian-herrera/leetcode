import { Queue } from '../common';

export function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  if (!wordList.includes(endWord) || beginWord === endWord) return 0;

  const getNeighbors = (word: string): string[] => {
    const ans = [];

    for (let i = 0; i < word.length; i++) {
      // for (const letter of 'qwertyuiopasdfghjklzxcvbnm'.split('')) {
      for (let c = 97; c < 123; c++) {
        const letter = String.fromCharCode(c);
        if (word[i] === letter) continue;

        const nextWord = word.substring(0, i) + letter + word.substring(i + 1);
        if (!seen.has(nextWord) && whitelist.has(nextWord)) {
          seen.add(nextWord);
          ans.push(nextWord);
        }
      }
    }

    return ans;
  };

  const q = new Queue([beginWord]),
    seen = new Set([beginWord]),
    whitelist = new Set(wordList);
  let steps = 1;

  while (!q.isEmpty()) {
    const currLength = q.size();

    for (let i = 0; i < currLength; i++) {
      const node = q.pop()!;

      const neighbors = getNeighbors(node);
      for (const neighbor of neighbors) {
        if (neighbor === endWord) return steps + 1;

        q.push(neighbor);
      }
    }

    steps++;
  }

  return 0;
}
