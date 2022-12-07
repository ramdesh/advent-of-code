const fs = require('fs');

filePath = '../input/day6.txt';

getEndOfPacket = (message) => {
    let endOfPacket = 0;
    for(let i in message) {
        let packageSet = new Set();
        for(let j = parseInt(i); j < parseInt(i) + 4; j++) {
            packageSet.add(message[j]);
            if(packageSet.size === 4) {
                endOfPacket = parseInt(j) + 1;
            }
            if(endOfPacket > 0) break;
        }
        if(endOfPacket > 0) break;
    }
    return endOfPacket;
}

getEndOfMessage = (message) => {
    let endOfMessage = 0;
    for(let i in message) {
        let packageSet = new Set();
        for(let j = parseInt(i); j < parseInt(i) + 14; j++) {
            packageSet.add(message[j]);
            if(packageSet.size === 14) {
                endOfMessage = parseInt(j) + 1;
            }
            if(endOfMessage > 0) break;
        }
        if(endOfMessage > 0) break;
    }
    return endOfMessage;
}


part1 = () => {
    const readableStream = fs.createReadStream(filePath, 'utf8');

    readableStream.on('error', function (error) {
        console.error(`error: ${error.message}`);
    })

    readableStream.on('data', (chunk) => {
        startOfPacketPosition = getEndOfPacket(chunk);
        console.log("Start of packet position: " + startOfPacketPosition);
        
    })
}

part2 = () => {
    const readableStream = fs.createReadStream(filePath, 'utf8');

    readableStream.on('error', function (error) {
        console.error(`error: ${error.message}`);
    })

    readableStream.on('data', (chunk) => {
        startOfPacketPosition = getEndOfMessage(chunk);
        console.log("Start of message position: " + startOfPacketPosition);
        
    })
}

console.log(getEndOfMessage("mjqjpqmgbljsphdztnvjfqwrcgsmlb"));
console.log(getEndOfMessage("bvwbjplbgvbhsrlpgdmjqwftvncz"));
console.log(getEndOfMessage("nppdvjthqldpwncqszvftbrmjlhg"));
console.log(getEndOfMessage("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"));
part2();