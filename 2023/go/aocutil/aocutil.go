package aocutil

import (
	"fmt"
	"os"
	"strings"
)

func check(err error) {
	if err != nil {
		panic(err)
	}
}

func ReadAocInput(fileName string) []string {
	data, err := os.ReadFile(fmt.Sprintf("../../input/%s", fileName))
	check(err)
	return strings.Split(strings.TrimSpace(string(data)), "\n")
}
