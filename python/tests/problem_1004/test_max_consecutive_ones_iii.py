from problem_1004.max_consecutive_ones_iii import Solution


def test_longestOnes() -> None:
    """Test longestOnes function."""
    solution = Solution()

    assert solution.longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2) == 6
    assert solution.longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3) == 10
    assert solution.longestOnes([0, 0, 0, 1], 4) == 4
