// `shift()` forces full-array re-indexing. Use a sentinel-linked list for efficiency

export function maxSlidingWindow(nums: number[], k: number): number[] {
  const q: number[] = [],
    ans: number[] = [];
  let l = 0;

  for (let r = 0; r < nums.length; r++) {
    if (q[0] < l) q.shift();

    const num = nums[r];

    while (q.length && num >= nums[q[q.length - 1]]) {
      q.pop();
    }

    q.push(r);

    if (r >= k - 1) {
      ans.push(nums[q[0]]);
      l++;
    }
  }

  return ans;
}
