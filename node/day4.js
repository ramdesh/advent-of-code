const fs = require('fs');

filePath = '../input/day4.txt';

calculateOverlappingPairs = (pairsArray) => {
    overlapCount = 0;
    for(let i = 0; i < pairsArray.length; i++) {
        splitPairs = pairsArray[i].split(",");
        firstAssignmentSplit = splitPairs[0].split("-");
        secondAssignmentSplit = splitPairs[1].split("-");
        firstAssignmentArray = [];
        secondAssignmentArray = [];
        for(let fasi = parseInt(firstAssignmentSplit[0]); fasi <= parseInt(firstAssignmentSplit[1]); fasi++) {
            firstAssignmentArray.push(fasi);
        }
        for(let sasi = parseInt(secondAssignmentSplit[0]); sasi <= parseInt(secondAssignmentSplit[1]); sasi++) {
            secondAssignmentArray.push(sasi);
        }
        if(firstAssignmentArray.every(assignment => {
            return secondAssignmentArray.includes(assignment);
        })) overlapCount++;
        else if (secondAssignmentArray.every(assignment => {
            return firstAssignmentArray.includes(assignment);
        })) overlapCount++;
    }
    return overlapCount;
}

calculateSingleOverlap = (pairsArray) => {
    overlapCount = 0;
    for(let i = 0; i < pairsArray.length; i++) {
        splitPairs = pairsArray[i].split(",");
        firstAssignmentSplit = splitPairs[0].split("-");
        secondAssignmentSplit = splitPairs[1].split("-");
        firstAssignmentArray = [];
        secondAssignmentArray = [];
        for(let fasi = parseInt(firstAssignmentSplit[0]); fasi <= parseInt(firstAssignmentSplit[1]); fasi++) {
            firstAssignmentArray.push(fasi);
        }
        for(let sasi = parseInt(secondAssignmentSplit[0]); sasi <= parseInt(secondAssignmentSplit[1]); sasi++) {
            secondAssignmentArray.push(sasi);
        }
        if(firstAssignmentArray.some(assignment => {
            return secondAssignmentArray.includes(assignment);
        })) overlapCount++;
        else if (secondAssignmentArray.some(assignment => {
            return firstAssignmentArray.includes(assignment);
        })) overlapCount++;
    }
    return overlapCount;
}

part1 = () => {
    const readableStream = fs.createReadStream(filePath, 'utf8');

    readableStream.on('error', function (error) {
        console.error(`error: ${error.message}`);
    })

    readableStream.on('data', (chunk) => {
        split = chunk.split("\n");
        overlappingPairsCount = calculateOverlappingPairs(split);
        console.log("Number of overlapping pairs: " + overlappingPairsCount);
        
    })
}

part2 = () => {
    const readableStream = fs.createReadStream(filePath, 'utf8');

    readableStream.on('error', function (error) {
        console.error(`error: ${error.message}`);
    })

    readableStream.on('data', (chunk) => {
        split = chunk.split("\n");
        overlappingPairsCount = calculateSingleOverlap(split);
        console.log("Number of overlapping pairs: " + overlappingPairsCount);
        
    })
}
