class Solution:
    def longestOnes(self, nums: list[int], k: int) -> int:
        res = 0

        zeros = 1 - nums[0]
        left, right = 0, 0

        while True:
            while zeros > k:
                if nums[left] == 0:
                    zeros -= 1
                left += 1

            res = max(res, right - left + 1)
            if right is len(nums) - 1:
                break

            right += 1
            if nums[right] == 0:
                zeros += 1

        return res
