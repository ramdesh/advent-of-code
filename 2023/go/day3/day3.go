package main

import (
	"fmt"
	"strconv"
	"strings"

	"rsdeshapriya.com/advent-of-code/aocutil"
)

func main() {
	fmt.Println("Running day 3")
	input := aocutil.ReadAocInput("day3.txt")
	fmt.Printf("Part 1 solution: %d \n", Part1(input))
	fmt.Printf("Part 2 solution: %d", Part2(input))
}

func Part1(input []string) int {
	partsTotal := 0
	for lineIndex, line := range input {
		lineItems := strings.Split(line, ".")
		for itemIndex, item := range lineItems {
			if lineIndex == 0 {
				// first line we only check the second line for bottom or diagonal adjacent
				if partNumber, err := strconv.Atoi(item); err != nil {
					nextLine := input[lineIndex+1]
					nextLineItems := strings.Split(nextLine, ".")
					if checkNextToAdjacent(itemIndex, lineItems) {
						partsTotal += partNumber
						break
					}
					if checkTopOrBottomAdjacent(itemIndex, []string{}, nextLineItems) {
						partsTotal += partNumber
						break
					}
					if checkDiagonalAdjacent(itemIndex, []string{}, nextLineItems) {
						partsTotal += partNumber
						break
					}
				}

			} else if lineIndex+1 == len(input) {
				// last line we only check the previous line for top or diagonal adjacent
				if partNumber, err := strconv.Atoi(item); err != nil {
					previousLine := input[lineIndex-1]
					previousLineItems := strings.Split(previousLine, ".")
					if checkNextToAdjacent(itemIndex, lineItems) {
						partsTotal += partNumber
						break
					}
					if checkTopOrBottomAdjacent(itemIndex, previousLineItems, []string{}) {
						partsTotal += partNumber
						break
					}
					if checkDiagonalAdjacent(itemIndex, previousLineItems, []string{}) {
						partsTotal += partNumber
						break
					}
				}
			} else {
				if partNumber, err := strconv.Atoi(item); err != nil {
					previousLine := input[lineIndex-1]
					previousLineItems := strings.Split(previousLine, ".")
					nextLine := input[lineIndex+1]
					nextLineItems := strings.Split(nextLine, ".")
					if checkNextToAdjacent(itemIndex, lineItems) {
						partsTotal += partNumber
						break
					}
					if checkTopOrBottomAdjacent(itemIndex, previousLineItems, nextLineItems) {
						partsTotal += partNumber
						break
					}
					if checkDiagonalAdjacent(itemIndex, previousLineItems, nextLineItems) {
						partsTotal += partNumber
						break
					}
					if checkDiagonalAdjacent(itemIndex, previousLineItems, []string{}) {
						partsTotal += partNumber
						break
					}
				}
			}
		}
	}
	return partsTotal
}

func Part2(input []string) int {
	return 0
}

func checkTopOrBottomAdjacent(thisItemIndex int, previousLine []string, nextLine []string) bool {
	if len(previousLine) > 0 {
		if _, err := strconv.Atoi(previousLine[thisItemIndex]); err == nil {
			return true
		}
	}
	if len(nextLine) > 0 {
		if _, err := strconv.Atoi(nextLine[thisItemIndex]); err == nil {
			return true
		}
	}
	return false
}
func checkDiagonalAdjacent(thisItemIndex int, previousLine []string, nextLine []string) bool {
	if len(previousLine) > 0 {
		if _, err := strconv.Atoi(previousLine[thisItemIndex+1]); err == nil {
			return true
		}
		if _, err := strconv.Atoi(previousLine[thisItemIndex-1]); err == nil {
			return true
		}
	}
	if len(nextLine) > 0 {
		if _, err := strconv.Atoi(nextLine[thisItemIndex+1]); err == nil {
			return true
		}
		if _, err := strconv.Atoi(nextLine[thisItemIndex-1]); err == nil {
			return true
		}
	}
	return false
}
func checkNextToAdjacent(thisItemIndex int, thisLineItems []string) bool {
	if thisItemIndex == 0 {
		if _, err := strconv.Atoi(thisLineItems[thisItemIndex+1]); err != nil {
			// next item is a symbol
			return true
		}
	} else if thisItemIndex+1 == len(thisLineItems) {
		if _, err := strconv.Atoi(thisLineItems[thisItemIndex-1]); err != nil {
			// last item is a symbol
			return true
		}
	} else {
		if _, err := strconv.Atoi(thisLineItems[thisItemIndex+1]); err != nil {
			// next item is a symbol
			return true
		}
		if _, err := strconv.Atoi(thisLineItems[thisItemIndex-1]); err != nil {
			// last item is a symbol
			return true
		}
	}
	return false
}
