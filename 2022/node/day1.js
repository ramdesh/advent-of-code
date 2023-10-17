const fs = require('fs');

filePath = '../input/day1.txt';

function part1() {
    const readableStream = fs.createReadStream(filePath, 'utf8');

    readableStream.on('error', function (error) {
        console.log(`error: ${error.message}`);
    })

    readableStream.on('data', (chunk) => {
        split = chunk.split("\n");
        elfIndex = 1;
        largestCalorieElf = 1;
        largestCalorieAmount = 0;
        currentElfTotal = 0;
        for(i = 0; i < split.length; i++) {      
            if(split[i] !== '') {
                currentElfTotal += parseInt(split[i]);
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
    })
}

function part2() {
    const readableStream = fs.createReadStream(filePath, 'utf8');

    readableStream.on('error', function (error) {
        console.log(`error: ${error.message}`);
    })

    readableStream.on('data', (chunk) => {
        split = chunk.split("\n");
        currentElfTotal = 0;
        elfCalories = [];
        for(i = 0; i < split.length; i++) {      
            if(split[i] !== '') {
                currentElfTotal += parseInt(split[i]);
            } else {
                elfCalories.push(currentElfTotal);
                currentElfTotal = 0;
            }
            
        }   
        elfCalories.sort((a, b)=> {return b-a;});
        totalCalories = elfCalories[0] + elfCalories[1] + elfCalories[2];
        console.log("Total calories carried by top 3 elves: " + totalCalories);
    })
}
