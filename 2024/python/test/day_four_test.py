from ..day_four import day_four_part_one
from ..day_four import day_four_part_two
from ..day_four import read_matrix_from_file


def test_day_four_part_one():
    raw_input = read_matrix_from_file("../input/day_four_test_input.txt")
    expected_output = 18
    actual_output = day_four_part_one(raw_input)
    assert expected_output == actual_output


def test_day_four_part_two():
    raw_input = read_matrix_from_file("../input/day_four_test_input.txt")
    expected_output = 0
    actual_output = day_four_part_two(raw_input)
    assert expected_output == actual_output
