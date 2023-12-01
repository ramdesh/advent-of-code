package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestPart1(t *testing.T) {
	input := []string{
		"1abc2",
		"pqr3stu8vwx",
		"a1b2c3d4e5f",
		"treb7uchet",
	}

	expected := 142
	actual := Part1(input)
	assert.Equal(t, expected, actual, "Part 1 input should generate the desired output")

}

func TestPart2(t *testing.T) {
	input := []string{
		"two1nine",
		"eightwothree",
		"abcone2threexyz",
		"xtwone3four",
		"4nineeightseven2",
		"zoneight234",
		"7pqrstsixteen",
	}

	expected := 281
	actual := Part2(input)
	assert.Equal(t, expected, actual, "Part 2 input should generate the desired output")
}
