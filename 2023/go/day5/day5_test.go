package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
	"rsdeshapriya.com/advent-of-code/aocutil"
)

func TestPart1(t *testing.T) {
	input := aocutil.ReadAocInput("day5_test.txt")
	expected := 35
	actual := Part1(input)
	assert.Equal(t, expected, actual, "Part 1 input should generate the desired output")
}

// func TestPart2(t *testing.T) {
// 	input := aocutil.ReadAocInput("day5_test.txt")

// 	expected := 30
// 	actual := Part2(input)
// 	assert.Equal(t, expected, actual, "Part 2 input should generate the desired output")
// }
