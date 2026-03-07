export function longestSubarray(nums: number[], limit: number): number {
  const decreasing: number[] = [], // 📉
    increasing: number[] = []; // 📈
  let l = 0,
    ans = 0;

  for (let r = 0; r < nums.length; r++) {
    const num = nums[r];

    // monotonic
    while (decreasing.length && num > nums[decreasing[decreasing.length - 1]]) {
      decreasing.pop();
    }
    while (increasing.length && num < nums[increasing[increasing.length - 1]]) {
      increasing.pop();
    }

    decreasing.push(r);
    increasing.push(r);

    // absolute difference
    while (nums[decreasing[0]] - nums[increasing[0]] > limit) {
      if (l === decreasing[0]) decreasing.shift();
      if (l === increasing[0]) increasing.shift();
      l++;
    }

    ans = Math.max(ans, r - l + 1);
  }

  return ans;
}
