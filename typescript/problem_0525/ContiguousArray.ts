export function findMaxLength(nums: number[]): number {
  const counts = new Map([[0, -1]]);
  let curr = 0,
    ans = 0;

  for (let i = 0; i < nums.length; i++) {
    const balance = nums[i] ? 1 : -1;
    curr += balance;

    if (counts.has(curr)) {
      const prevI = counts.get(curr)!,
        currLength = i - prevI;

      if (currLength > ans) ans = currLength;
      continue;
    }

    counts.set(curr, i);
  }

  return ans;
}
