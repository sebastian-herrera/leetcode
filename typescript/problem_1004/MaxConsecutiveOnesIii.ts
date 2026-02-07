// %% Cell 1

/*
 * [1004] Max Consecutive Ones III
 *
 * Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.


Example 1:


Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

Example 2:


Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.



Constraints:


	1 <= nums.length <= 105
	nums[i] is either 0 or 1.
	0 <= k <= nums.length
 *
 * Difficulty: Medium
 */

export function longestOnes(nums: number[], k: number): number {
  let left = 0;
  let curr = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) curr++;

    if (curr > k) {
      if (nums[left] === 0) curr--;
      left++;
    }

    console.log(`left: ${left} | right: ${right} | length: ${nums.length - left}`);
  }

  return nums.length - left;
}

longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2); // 6
// longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3); // 10
// longestOnes([0, 0, 1, 1, 0, 0, 0], 2); // 10
