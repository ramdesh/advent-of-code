package main

import (
	"fmt"
	"strconv"
	"strings"

	"rsdeshapriya.com/advent-of-code/aocutil"
)

func main() {
	fmt.Println("Running day 5")
	input := aocutil.ReadAocInput("day5.txt")
	fmt.Printf("Part 1 solution: %d \n", Part1(input))
	fmt.Printf("Part 2 solution: %d", Part2(input))
}

func Part1(input []string) int {
	seedToSoilMap := map[int]int{}
	soilToFertilizerMap := map[int]int{}
	fertilizerToWaterMap := map[int]int{}
	waterToLightMap := map[int]int{}
	lightToTemperatureMap := map[int]int{}
	temperatureToHumidityMap := map[int]int{}
	humidityToLocationMap := map[int]int{}
	for index, line := range input {
		if strings.Contains(line, "seeds:") {
			seedsList := strings.Split(strings.Split(line, ":")[1], " ")
		} else if strings.Contains(line, "seed-to-soil map:") {
			seedToSoilLines := SplitMapLines(index, input)

		}

	}
	return 0
}

func Part2(input []string) int {
	return 0
}

func SplitMapLines(index int, lines []string) []string {
	outputLines := []string{}
	// go to the next line to start building map
	i := index + 1
	for lines[i] != "" {
		outputLines = append(outputLines, lines[i])
		i++
	}
	return outputLines
}

func BuildAlmanacMap(inputList []string) map[int]int {
	almanacMap := map[int]int{}
	for _, almanacLine := range inputList {
		source, target, diff := 0, 0, 0
		lineStrings := strings.Split(almanacLine, " ")
		for strIndex, str := range lineStrings {

			almanacNum, err := strconv.Atoi(str)
			if err != nil {
				panic(err)
			}
			if str == "" {
				panic("Found empty string")
			}
			if strIndex == 0 {
				target = almanacNum
			} else if strIndex == 1 {
				source = almanacNum
			} else if strIndex == 2 {
				diff = almanacNum
			}

		}

	}
	return almanacMap
}
