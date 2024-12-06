from ..day_five import day_five_part_one


def test_day_five_part_one():
    expected_output = 143
    actual_output = day_five_part_one("../input/day_five_test_input.txt")
    assert expected_output == actual_output
