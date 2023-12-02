package main

import (
	"fmt"
	"strconv"
	"strings"

	"rsdeshapriya.com/advent-of-code/aocutil"
)

func main() {
	fmt.Println("Running day 2")
	input := aocutil.ReadAocInput("day2.txt")
	fmt.Printf("Part 1 solution: %d \n", Part1(input))
	fmt.Printf("Part 2 solution: %d", Part2(input))
}

func Part1(input []string) int {
	constraints := map[string]int{
		"red":   12,
		"green": 13,
		"blue":  14,
	}
	thisGameStillCounts := false
	validGameTotal := 0
	for _, line := range input {
		splitGame := strings.Split(line, ":")
		gameNo, err := strconv.Atoi(strings.Split(splitGame[0], " ")[1])
		if err != nil {
			panic(err)
		}

		sets := strings.Split(splitGame[1], ";")
		for _, gameset := range sets {
			draws := strings.Split(gameset, ",")
			for _, draw := range draws {
				components := strings.Split(draw, " ")
				count, err := strconv.Atoi(components[1])
				if err != nil {
					panic(err)
				}
				if count <= constraints[components[2]] {
					thisGameStillCounts = true
				} else {
					thisGameStillCounts = false
					break
				}
			}
			if !thisGameStillCounts {
				break
			}
		}
		// All the draws are good
		if thisGameStillCounts {
			validGameTotal += gameNo
		}
	}
	return validGameTotal
}

func Part2(input []string) int {
	sumOfPowerSets := 0

	for _, line := range input {
		splitGame := strings.Split(line, ":")
		maxBlue := 0
		maxRed := 0
		maxGreen := 0

		sets := strings.Split(splitGame[1], ";")
		for _, gameset := range sets {
			draws := strings.Split(gameset, ",")
			for _, draw := range draws {
				components := strings.Split(draw, " ")
				count, err := strconv.Atoi(components[1])
				if err != nil {
					panic(err)
				}
				color := components[2]
				if color == "red" && count > maxRed {
					maxRed = count
				}
				if color == "blue" && count > maxBlue {
					maxBlue = count
				}
				if color == "green" && count > maxGreen {
					maxGreen = count
				}
			}
		}
		sumOfPowerSets += (maxRed * maxBlue * maxGreen)
	}
	return sumOfPowerSets
}
