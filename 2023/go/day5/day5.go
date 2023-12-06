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
	closestLocation := -1
	seedsList := []string{}
	seedToSoilMap := map[int]int{}
	soilToFertilizerMap := map[int]int{}
	fertilizerToWaterMap := map[int]int{}
	waterToLightMap := map[int]int{}
	lightToTemperatureMap := map[int]int{}
	temperatureToHumidityMap := map[int]int{}
	humidityToLocationMap := map[int]int{}
	inputSize := len(input)
	for index, line := range input {
		if strings.Contains(line, "seeds:") {
			seedsList = strings.Split(strings.Split(line, ":")[1], " ")
		} else if strings.Contains(line, "seed-to-soil map:") {
			seedToSoilLines := SplitMapLines(index, input, inputSize)
			seedToSoilMap = BuildAlmanacMap(seedToSoilLines)
		} else if strings.Contains(line, "soil-to-fertilizer map:") {
			soilToFertilizerLines := SplitMapLines(index, input, inputSize)
			soilToFertilizerMap = BuildAlmanacMap(soilToFertilizerLines)
		} else if strings.Contains(line, "fertilizer-to-water map:") {
			fertilizerToWaterLines := SplitMapLines(index, input, inputSize)
			fertilizerToWaterMap = BuildAlmanacMap(fertilizerToWaterLines)
		} else if strings.Contains(line, "water-to-light map:") {
			waterToLightLines := SplitMapLines(index, input, inputSize)
			waterToLightMap = BuildAlmanacMap(waterToLightLines)
		} else if strings.Contains(line, "light-to-temperature map:") {
			lightToTemperatureLines := SplitMapLines(index, input, inputSize)
			lightToTemperatureMap = BuildAlmanacMap(lightToTemperatureLines)
		} else if strings.Contains(line, "light-to-temperature map:") {
			lightToTemperatureLines := SplitMapLines(index, input, inputSize)
			lightToTemperatureMap = BuildAlmanacMap(lightToTemperatureLines)
		} else if strings.Contains(line, "temperature-to-humidity map:") {
			temperatureToHumidityLines := SplitMapLines(index, input, inputSize)
			temperatureToHumidityMap = BuildAlmanacMap(temperatureToHumidityLines)
		} else if strings.Contains(line, "humidity-to-location map:") {
			humidityToLocationLines := SplitMapLines(index, input, inputSize)
			humidityToLocationMap = BuildAlmanacMap(humidityToLocationLines)
		}

	}
	for _, seedStr := range seedsList {
		if seedStr != "" {
			seed, err := strconv.Atoi(seedStr)
			if err != nil {
				panic(err)
			}
			soil := CheckAndGetMapping(seed, seedToSoilMap)
			fertilizer := CheckAndGetMapping(soil, soilToFertilizerMap)
			water := CheckAndGetMapping(fertilizer, fertilizerToWaterMap)
			light := CheckAndGetMapping(water, waterToLightMap)
			temperature := CheckAndGetMapping(light, lightToTemperatureMap)
			humidity := CheckAndGetMapping(temperature, temperatureToHumidityMap)
			location := CheckAndGetMapping(humidity, humidityToLocationMap)

			if closestLocation == -1 {
				closestLocation = location
			} else if location < closestLocation {
				closestLocation = location
			}
		}
	}
	return closestLocation
}

func Part2(input []string) int {
	return 0
}

func CheckAndGetMapping(key int, almanacMap map[int]int) int {
	mappedVal := 0
	if value, itsThere := almanacMap[key]; itsThere {
		mappedVal = value
	} else {
		mappedVal = key
	}
	return mappedVal
}

func SplitMapLines(index int, lines []string, size int) []string {
	outputLines := []string{}
	// go to the next line to start building map
	i := index + 1
	for i < size && lines[i] != "" {
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
			for i := 0; i < diff; i++ {
				almanacMap[source+i] = target + i
			}

		}

	}
	return almanacMap
}
