import re


def day_three_part_one(input_str: str):
    pattern = r"mul\((\d+),(\d+)\)"
    matches = re.findall(pattern, input_str)
    return sum([int(x) * int(y) for x, y in matches])


def day_three_part_two(input_str: str):
    return 0


if __name__ == "__main__":
    raw_input = open("../input/day_three.txt").read()
    print(day_three_part_one(raw_input))
    print(day_three_part_two(raw_input))
