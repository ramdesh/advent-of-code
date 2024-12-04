from ..day_two import day_two_part_one


def test_day_two_part_one():
    with open("../input/day_two_test_input.txt", "r") as file:
        reports = [list(map(int, line.split())) for line in file.readlines()]
    expected_output = 2
    actual_output = day_two_part_one(reports)
    assert expected_output == actual_output


def test_day_two_part_two():
    pass
