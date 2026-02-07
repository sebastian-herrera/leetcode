// %%

export function missingNumber(nums: number[]): number {
  let n = nums.length;

  // XOR approach

  // for (const [i, num] of nums.entries()) {
  //   n = n ^ i ^ num;
  // }
  //
  // return n;

  // Gauss approach

  const expectedSum = (n * (n + 1)) / 2;
  let sum = 0;

  for (let num of nums) {
    sum += num;
  }

  return expectedSum - sum;
}

missingNumber([3, 0, 1]); // 2
