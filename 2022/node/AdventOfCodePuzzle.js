const fs = require('fs').promises;

class AdventOfCodePuzzle {
    day = 0;
    constructor() {
        this.day = 0;
    }
    async openFile() {
        const data = await fs.readFile("../input/day" + this.day + ".txt", 'utf8');
        split = data.split("\n");
        return split;
    }
    partOne(inputArray) {}
    partTwo(inputArrray) {}

    async run() {
        const inputArray = await this.openFile();
        console.log("Running day " + self.day + " part 1");
        this.partOne(inputArray);
        console.log("Running day " + self.day + " part 2");
        this.partTwo(inputArray);
    }
}