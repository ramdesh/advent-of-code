const AdventOfCodePuzzle = require("AdventOfCodePuzzle");

class DayOne extends AdventOfCodePuzzle {
    constructor() {
        this.day = "1";
    }
    partOne(inputArray) {
        elfIndex = 1;
        largestCalorieElf = 1;
        largestCalorieAmount = 0;
        currentElfTotal = 0;
        for(i = 0; i < inputArray.length; i++) {      
            if(inputArray[i] !== '') {
                currentElfTotal += parseInt(inputArray[i]);
            } else {
                if (currentElfTotal >= largestCalorieAmount) {
                    largestCalorieAmount = currentElfTotal;
                    largestCalorieElf = elfIndex;
                }
                elfIndex++;
                currentElfTotal = 0;
            }
            
        }
        console.log("Elf carrying the most calories: Elf No " + elfIndex);
        console.log("Amount of calories: " + largestCalorieAmount);
    }
    partTwo(inputArray) {
        currentElfTotal = 0;
        elfCalories = [];
        for(i = 0; i < inputArray.length; i++) {      
            if(inputArray[i] !== '') {
                currentElfTotal += parseInt(inputArray[i]);
            } else {
                elfCalories.push(currentElfTotal);
                currentElfTotal = 0;
            }
            
        }   
        elfCalories.sort((a, b)=> {return b-a;});
        totalCalories = elfCalories[0] + elfCalories[1] + elfCalories[2];
        console.log("Total calories carried by top 3 elves: " + totalCalories);
    }
}