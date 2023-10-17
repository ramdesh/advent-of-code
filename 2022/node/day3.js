const fs = require('fs');

filePath = '../input/day3.txt';

priorities = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function calculatePriorities(itemsArray) {
    prioritySum = 0;
    for(i = 0; i < itemsArray.length; i++) {
        firstHalf = itemsArray[i].substring(0, itemsArray[i].length / 2);
        secondHalf = itemsArray[i].substring(itemsArray[i].length / 2, itemsArray[i].length);
        foundIt = false;
        for(fhi = 0; fhi < firstHalf.length; fhi++) {
            for(shi = 0; shi < secondHalf.length; shi++) {
                if(firstHalf[fhi] == secondHalf[shi]) {
                    if(!foundIt) {
                        prioritySum += (priorities.indexOf(secondHalf[shi]) + 1)
                    }
                    foundIt = true;                    
                }
            }
        }
    }
    return prioritySum;
}

function calculatePriorities2(itemsArray) {
    prioritySum = 0;
    for(i = 0; i < itemsArray.length; i = i + 3) {
        foundIt = false;
        for(j in itemsArray[i]) {
            if(itemsArray[i + 1].includes(itemsArray[i][j]) && itemsArray[i + 2].includes(itemsArray[i][j])) {
                if(!foundIt) {
                    prioritySum += (priorities.indexOf(itemsArray[i][j]) + 1);
                }
                foundIt = true;
            }
        }
    }
    return prioritySum;
}

function part1() {
    const readableStream = fs.createReadStream(filePath, 'utf8');

    readableStream.on('error', function (error) {
        console.log(`error: ${error.message}`);
    })

    readableStream.on('data', (chunk) => {
        split = chunk.split("\n");
        score = calculatePriorities(split);
        console.log("Sum of priorities: " + score);
        
    })
}

function part2() {
    const readableStream = fs.createReadStream(filePath, 'utf8');

    readableStream.on('error', function (error) {
        console.log(`error: ${error.message}`);
    })

    readableStream.on('data', (chunk) => {
        split = chunk.split("\n");
        score = calculatePriorities2(split);
        console.log("Sum of priorities: " + score);
        
    })
}
