from problem_1291.sequential_digits import Solution


def test_sequentialDigits() -> None:
    """Test sequentialDigits function."""
    solution = Solution()

    assert solution.sequentialDigits(100, 300) == [123, 234]
    assert solution.sequentialDigits(1000, 13000) == [1234, 2345, 3456, 4567, 5678, 6789, 12345]
