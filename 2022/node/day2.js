const fs = require('fs');

filePath = '../input/day2.txt';
ops = {
    "X": {
        beats: "C",
        beatenBy: "B",
        drawnBy: "A",
        score: 1
    },
    "Y": {
        beats: "A",
        beatenBy: "C",
        drawnBy: "B",
        score: 2
    },
    "Z": {
        beats: "B",
        beatenBy: "A",
        drawnBy: "C",
        score: 3
    }
}

ops2 = {
    "A": {
        "X": 3,
        "Y": 4,
        "Z": 8
    },
    "B": {
        "X": 1,
        "Y": 5,
        "Z": 9
    },
    "C": {
        "X": 2,
        "Y": 6,
        "Z": 7
    }
}

function calculateScore(choicesArray) {
    score = 0;
    for(i = 0; i < choicesArray.length; i++) {      
        choices = choicesArray[i].split(" ");
        myChoice = choices[1];
        theirChoice = choices[0];
        if(ops[myChoice].beats === theirChoice) {
            score += ops[myChoice].score + 6;
        } else if(ops[myChoice].drawnBy === theirChoice) {
            score += ops[myChoice].score + 3;
        } else if(ops[myChoice].beatenBy === theirChoice) {
            score += ops[myChoice].score;
        }     
    }
    return score;
}

function calculateScore2(choicesArray) {
    score = 0;
    for(i = 0; i < choicesArray.length; i++) {      
        choices = choicesArray[i].split(" ");
        myChoice = choices[1];
        theirChoice = choices[0];
        score += ops2[theirChoice][myChoice]    
    }
    return score;
}

function part1() {
    const readableStream = fs.createReadStream(filePath, 'utf8');

    readableStream.on('error', function (error) {
        console.log(`error: ${error.message}`);
    })

    readableStream.on('data', (chunk) => {
        split = chunk.split("\n");
        score = calculateScore(split);
        console.log("Total Score: " + score);
        
    })
}

function part2() {
    const readableStream = fs.createReadStream(filePath, 'utf8');

    readableStream.on('error', function (error) {
        console.log(`error: ${error.message}`);
    })

    readableStream.on('data', (chunk) => {
        split = chunk.split("\n");
        score = calculateScore2(split);
        console.log("Total Score: " + score);
        
    })
}