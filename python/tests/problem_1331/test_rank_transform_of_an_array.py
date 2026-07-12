from problem_1331.rank_transform_of_an_array import Solution


def test_arrayRankTransform() -> None:
    """Test arrayRankTransform function."""
    solution = Solution()

    assert solution.arrayRankTransform([40, 10, 20, 30]) == [4, 1, 2, 3]
    assert solution.arrayRankTransform([100, 100, 100]) == [1, 1, 1]
    assert solution.arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]) == [
        5,
        3,
        4,
        2,
        8,
        6,
        7,
        1,
        3,
    ]
