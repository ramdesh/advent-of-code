import pandas as pd


def day_one_part_one(df_data: pd.DataFrame):
    location_1_list = sorted(df_data["location1"].tolist())
    location_2_list = sorted(df_data["location2"].tolist())
    return sum([abs(x - y) for x, y in zip(location_1_list, location_2_list)])


def day_one_part_two(df_data: pd.DataFrame):
    location_1_list = sorted(df_data["location1"].tolist())
    location_2_list = sorted(df_data["location2"].tolist())
    return sum([(x * location_2_list.count(x)) for x in location_1_list])


if __name__ == "__main__":
    df_input = pd.read_csv("../input/day_one.txt", sep="  ", names=["location1", "location2"])
    print(day_one_part_one(df_input))
    print(day_one_part_two(df_input))
