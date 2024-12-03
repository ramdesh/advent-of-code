import re


def find_closest_do_before_mul(mul_match, input_str: str):
    mul_start = mul_match.start()

    # Find the closest "do()" to the left of the current "mul(num,num)"
    do_pattern = r"do\(\)"
    do_matches = list(re.finditer(do_pattern, input_str[:mul_start]))

    # Find the closest "don't()" to the left of the current "mul(num,num)"
    dont_pattern = r"don't\(\)"
    dont_matches = list(re.finditer(dont_pattern, input_str[:mul_start]))

    closest_do = do_matches[-1].start() if do_matches else float("-inf")
    closest_dont = dont_matches[-1].start() if dont_matches else float("-inf")

    if closest_do > closest_dont:
        return True

    return False


def day_three_part_one(input_str: str):
    pattern = r"mul\((\d+),(\d+)\)"
    matches = re.findall(pattern, input_str)
    return sum([int(x) * int(y) for x, y in matches])


def day_three_part_two(input_str: str):
    mul_pattern = r"mul\(\d+,\d+\)"
    num_pattern = r"mul\((\d+),(\d+)\)"
    total = 0
    mul_matches = list(re.finditer(mul_pattern, input_str))
    for mul_match in mul_matches:
        if find_closest_do_before_mul(mul_match, input_str):
            mul_match = re.search(num_pattern, mul_match.string)
            x, y = mul_match.groups()
            print(x, y)
            total += int(x) * int(y)

    # Define the pattern to capture text before "do()" or "don't()"
    before_do_or_dont_pattern = r"(.*?)(?=do\(\)|don't\(\))"
    # Find all matches in the input string
    before_do_or_dont_first_match = re.findall(before_do_or_dont_pattern, input_str)[0]

    total += sum(
        [int(x) * int(y) for x, y in re.findall(num_pattern, before_do_or_dont_first_match)]
    )
    print(total)
    print(list(mul_matches))
    print(before_do_or_dont_first_match)
    return total


if __name__ == "__main__":
    raw_input = open("../input/day_three_part_two_test_input.txt").read()
    print(day_three_part_one(raw_input))
    print(day_three_part_two(raw_input))
