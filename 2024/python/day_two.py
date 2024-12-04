from typing import List


def is_safe_report(report):
    increasing = all(1 <= report[i + 1] - report[i] <= 3 for i in range(len(report) - 1))
    decreasing = all(1 <= report[i] - report[i + 1] <= 3 for i in range(len(report) - 1))
    return increasing or decreasing


def day_two_part_one(reports: List):
    safe_count = 0
    for report in reports:
        if is_safe_report(report):
            safe_count += 1
    return safe_count


def day_two_part_two(raw_input: str):
    pass


if __name__ == "__main__":
    with open("../input/day_two.txt", "r") as file:
        reports = [list(map(int, line.split())) for line in file.readlines()]

    safe_reports_count = day_two_part_one(reports)
    print(safe_reports_count)
