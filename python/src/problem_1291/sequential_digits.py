from collections import deque


class Solution:
    def sequentialDigits(self, low: int, high: int) -> list[int]:
        res = []
        q = deque([1, 2, 3, 4, 5, 6, 7, 8, 9])

        while q:
            num = q.popleft()

            last_d = num % 10
            if last_d == 9:
                continue

            num = num * 10 + (last_d + 1)
            if num >= low and high >= num:
                res.append(num)

            q.append(num)

        return res
