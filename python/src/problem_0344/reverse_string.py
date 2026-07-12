class Solution:
    def reverseString(self, s: list[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """

        right, left = 0, len(s) - 1

        while left > right:
            s[left], s[right] = s[right], s[left]

            right += 1
            left -= 1
