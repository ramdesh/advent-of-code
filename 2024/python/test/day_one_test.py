import pandas as pd

from ..day_one import day_1_part_1


def test_day_one_part_one():
    df_test_input = pd.read_csv(
        "../input/day_one_part_one_test_input.txt", sep="  ", names=["location1", "location2"]
    )
    expected_output = 11
    actual_output = day_1_part_1(df_test_input)
    assert expected_output == actual_output
