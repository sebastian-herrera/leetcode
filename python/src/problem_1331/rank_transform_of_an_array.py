class Solution:
    def arrayRankTransform(self, arr: list[int]) -> list[int]:
        num_to_indices = {k: [] for k in sorted(set(arr))}

        for i, val in enumerate(arr):
            num_to_indices[val].append(i)

        rank = 1
        for _num, value in num_to_indices.items():
            for i in value:
                arr[i] = rank

            rank += 1

        return arr
