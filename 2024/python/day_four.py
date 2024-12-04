from typing import List


def read_matrix_from_file(file_path):
    with open(file_path, "r") as file:
        lines = file.readlines()
        matrix = [list(line.strip()) for line in lines]
    return matrix


def day_four_part_one(input_matrix: List[List[str]]):
    rows = len(input_matrix)
    cols = len(input_matrix[0])
    word = "XMAS"
    word_len = len(word)
    directions = [(0, 1), (1, 0), (1, 1), (1, -1), (0, -1), (-1, 0), (-1, -1), (-1, 1)]

    def is_valid(x, y):
        return 0 <= x < rows and 0 <= y < cols

    def search_from(x, y, dx, dy):
        for i in range(word_len):
            nx, ny = x + i * dx, y + i * dy
            if not is_valid(nx, ny) or input_matrix[nx][ny] != word[i]:
                return False
        return True

    count = 0
    for x in range(rows):
        for y in range(cols):
            for dx, dy in directions:
                if search_from(x, y, dx, dy):
                    count += 1
    return count


def day_four_part_two(input_matrix: List[List[str]]):
    return 0


if __name__ == "__main__":
    input_str = read_matrix_from_file("../input/day_four.txt")
    print(day_four_part_one(input_str))
    print(day_four_part_two(input_str))
