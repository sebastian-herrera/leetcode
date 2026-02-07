// %%

// console.log(Number.MAX_SAFE_INTEGER);

export function getAverages(nums: number[], k: number): number[] {
  if (k === 0) return nums;

  const n = nums.length,
    windowSize = k * 2 + 1,
    avgs = new Array(n).fill(-1);

  if (windowSize > n) return avgs;

  let sum = 0;

  for (let i = 0; i < windowSize; i++) {
    sum += nums[i];
  }
  avgs[k] = Math.trunc(sum / windowSize);

  for (let i = windowSize; i < n; i++) {
    sum = sum - nums[i - windowSize] + nums[i];

    avgs[i - k] = Math.trunc(sum / windowSize);
  }

  return avgs;
}

getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3); // [-1, -1, -1, 5, 4, 4, -1, -1, -1]
