// %%

export function minStartValue(nums: number[]): number {
  let minVal = 1,
    total = 0;

  for (let num of nums) {
    total += num;
    minVal = Math.min(minVal, total);
  }

  return 1 - minVal;
}
