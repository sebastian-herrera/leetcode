class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        prev = {}

        for i, num in enumerate(nums):
            diff = target - num

            if diff in prev:
                return [i, prev[diff]]
            prev[num] = i

        return []
