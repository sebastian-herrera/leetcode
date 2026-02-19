// %%

export function lengthOfLongestSubstring(s: string): number {
  const count = new Map();
  let left = 0,
    ans = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    if (count.has(char)) left = Math.max(count.get(char) + 1, left);

    count.set(char, right);

    const currL = right - left + 1;
    if (currL > ans) ans = currL;
  }

  return ans;
}
