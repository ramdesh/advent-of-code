package main

import (
	"fmt"
	"strings"

	"rsdeshapriya.com/advent-of-code/aocutil"
)

func main() {
	fmt.Println("Running day 4")
	input := aocutil.ReadAocInput("day4.txt")
	fmt.Printf("Part 1 solution: %d \n", Part1(input))
	fmt.Printf("Part 2 solution: %d", Part2(input))
}

func Part1(input []string) int {
	pointsTotal := 0
	for _, line := range input {
		thisGamePoints := 0
		scratchCardSegments := strings.Split(line, ":")[1]
		winningNumbersStr := strings.Split(strings.Split(scratchCardSegments, "|")[0], " ")
		cardNumbersStr := strings.Split(strings.Split(scratchCardSegments, "|")[1], " ")
		for _, cardNum := range cardNumbersStr {
			if cardNum != "" {
				if isInArray(winningNumbersStr, cardNum) {
					if thisGamePoints == 0 {
						thisGamePoints = 1
					} else {
						thisGamePoints *= 2
					}
				}
			}

		}
		pointsTotal += thisGamePoints
	}
	return pointsTotal
}

func Part2(input []string) int {
	cardCounts := map[int]int{}
	for i := 1; i <= len(input); i++ {
		cardCounts[i] = 1
	}
	totalCards := 0
	for gameNoMinusOne, line := range input {
		matchCount := 0
		scratchCardSegments := strings.Split(line, ":")[1]
		winningNumbersStr := strings.Split(strings.Split(scratchCardSegments, "|")[0], " ")
		cardNumbersStr := strings.Split(strings.Split(scratchCardSegments, "|")[1], " ")
		for _, cardNum := range cardNumbersStr {
			if cardNum != "" {
				if isInArray(winningNumbersStr, cardNum) {
					if cardNum != "" {
						matchCount += 1

					}
				}
			}

		}
		for j := 0; j < cardCounts[gameNoMinusOne+1]; j++ {
			for i := (gameNoMinusOne + 2); i <= (gameNoMinusOne+1+matchCount) && i <= len(input); i++ {
				// fmt.Println(fmt.Sprintf("game no minus one: %d", gameNoMinusOne))
				// fmt.Println(fmt.Sprintf("index: %d", i))
				cardCounts[i] += 1
			}
		}

	}
	for _, cardCount := range cardCounts {
		totalCards += cardCount
	}
	//fmt.Println(cardCounts)
	return totalCards
}

func isInArray(checkArray []string, checkValue string) bool {
	itsThere := false
	for _, arrayVal := range checkArray {
		if checkValue == arrayVal {
			itsThere = true
			break
		}
	}
	return itsThere
}
