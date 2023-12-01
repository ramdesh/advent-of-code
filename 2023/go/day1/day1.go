package main

import (
	"fmt"
	"strconv"
	"strings"
	"unicode"

	"rsdeshapriya.com/advent-of-code/aocutil"
)

func main() {
	fmt.Println("Running day 1")
	input := aocutil.ReadAocInput("day1.txt")
	fmt.Printf("Part 1 solution: %d \n", Part1(input))
	fmt.Printf("Part 2 solution: %d", Part2(input))
}

func Part1(input []string) int {
	total := 0
	firstNumFound := false
	firstNumString := "0"
	lastNumString := "0"
	for _, badString := range input {
		for _, character := range badString {
			if unicode.IsNumber(character) {
				if !firstNumFound {
					firstNumString = string(character)
					firstNumFound = true
				}
				lastNumString = string(character)

			}
		}
		numberString := firstNumString + lastNumString
		calibrationValue, err := strconv.Atoi(numberString)
		if err != nil {
			panic(err)
		}
		total += calibrationValue
		firstNumFound = false
	}
	return total
}

func Part2(input []string) int {
	total := 0
	firstNumFound := false
	firstNumString := "0"
	lastNumString := "0"

	for _, badString := range input {
		stringOne := strings.Replace(badString, "one", "o1o", -1)
		stringTwo := strings.Replace(stringOne, "two", "t2t", -1)
		stringThree := strings.Replace(stringTwo, "three", "t3t", -1)
		stringFour := strings.Replace(stringThree, "four", "f4f", -1)
		stringFive := strings.Replace(stringFour, "five", "f5f", -1)
		stringSix := strings.Replace(stringFive, "six", "s6s", -1)
		stringSeven := strings.Replace(stringSix, "seven", "s7", -1)
		stringEight := strings.Replace(stringSeven, "eight", "e8e", -1)
		stringNine := strings.Replace(stringEight, "nine", "n9n", -1)

		for _, character := range stringNine {
			if unicode.IsNumber(character) {
				if !firstNumFound {
					firstNumString = string(character)
					firstNumFound = true
				}
				lastNumString = string(character)

			}
		}
		numberString := firstNumString + lastNumString
		calibrationValue, err := strconv.Atoi(numberString)
		if err != nil {
			panic(err)
		}
		total += calibrationValue
		firstNumFound = false
	}
	return total
}
