from ..day_three import day_three_part_one
from ..day_three import day_three_part_two


def test_day_one_part_one():
    raw_input = open("../input/day_three_part_one_test_input.txt").read()
    expected_output = 161
    actual_output = day_three_part_one(raw_input)
    assert expected_output == actual_output


def test_day_one_part_two():
    raw_input = open("../input/day_three_part_two_test_input.txt").read()
    expected_output = 0
    actual_output = day_three_part_two(raw_input)
    assert expected_output == actual_output
