from problem_0001.two_sum import Solution


def test_twoSum() -> None:
    """Test twoSum function."""

    solution = Solution()

    assert set(solution.twoSum([2, 7, 11, 15], 9)) == {0, 1}
    assert set(solution.twoSum([3, 2, 4], 6)) == {1, 2}
    assert set(solution.twoSum([3, 3], 6)) == {0, 1}
