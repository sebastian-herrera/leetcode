from problem_0344.reverse_string import Solution


def test_reverseString() -> None:
    """Test reverseString function."""

    solution = Solution()

    s1 = ["h", "e", "l", "l", "o"]
    solution.reverseString(s1)
    assert s1 == ["o", "l", "l", "e", "h"]

    s2 = ["H", "a", "n", "n", "a", "h"]
    solution.reverseString(s2)
    assert s2 == ["h", "a", "n", "n", "a", "H"]
