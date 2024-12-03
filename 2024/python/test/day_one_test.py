import pandas as pd

from ..day_one import day_one_part_one
from ..day_one import day_one_part_two


def test_day_one_part_one():
    df_test_input = pd.read_csv(
        "../input/day_one_test_input.txt", sep="  ", names=["location1", "location2"]
    )
    expected_output = 11
    actual_output = day_one_part_one(df_test_input)
    assert expected_output == actual_output


def test_day_one_part_two():
    df_test_input = pd.read_csv(
        "../input/day_one_test_input.txt", sep="  ", names=["location1", "location2"]
    )
    expected_output = 31
    actual_output = day_one_part_two(df_test_input)
    assert expected_output == actual_output
