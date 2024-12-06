def separate_sections(file_path):
    with open(file_path, "r") as file:
        lines = file.readlines()

    pipe_delimited = []
    comma_separated = []
    for line in lines:
        if "|" in line:
            pipe_delimited.append(line.strip().split("|"))
        elif "," in line:
            comma_separated.append(line.strip().split(","))

    return pipe_delimited, comma_separated


def day_five_part_one(file_path: str):
    rules, print_orders = separate_sections(file_path)
    bad_manual = False
    center_total = 0
    for manual in print_orders:
        for i in range(len(manual)):
            for j in range(i + 1, len(manual)):
                bad_manual = (
                    len([True for x in rules if x[1] == manual[i] and x[0] == manual[j]]) > 0
                )
                if bad_manual:
                    break

            if bad_manual:
                break
        if not bad_manual:
            center_total += int(manual[len(manual) // 2])
    return center_total


if __name__ == "__main__":
    print(day_five_part_one("../input/day_five.txt"))
