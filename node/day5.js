const fs = require('fs');

filePath = '../input/day5.txt';

reorgStack = (instructionsArray, stack) => {
    for(i = 0; i < instructionsArray.length; i++) {       
        move = 0;
        if(parseInt(instructionsArray[i].charAt(instructionsArray[i].indexOf("move") + 6)) !== NaN) {
            move = parseInt((instructionsArray[i].charAt(instructionsArray[i].indexOf("move") + 5) + (instructionsArray[i].charAt(instructionsArray[i].indexOf("move") + 6))));
        } else {
            move = parseInt(instructionsArray[i].charAt(instructionsArray[i].indexOf("move") + 5));
        }
        //move = parseInt(instructionsArray[i].charAt(instructionsArray[i].indexOf("move") + 5));
        from = parseInt(instructionsArray[i].charAt(instructionsArray[i].indexOf("from") + 5));
        to = parseInt(instructionsArray[i].charAt(instructionsArray[i].indexOf("to") + 3));
        for(mi = 0; mi < move; mi++) {
            poppedValue = stack[from - 1].pop();
            stack[to - 1].push(poppedValue);            
        }
    }
    return stack;
}

reorgStack9001 = (instructionsArray, stack) => {
    for(i = 0; i < instructionsArray.length; i++) {       
        move = 0;
        if(parseInt(instructionsArray[i].charAt(instructionsArray[i].indexOf("move") + 6)) !== NaN) {
            move = parseInt((instructionsArray[i].charAt(instructionsArray[i].indexOf("move") + 5) + (instructionsArray[i].charAt(instructionsArray[i].indexOf("move") + 6))));
        } else {
            move = parseInt(instructionsArray[i].charAt(instructionsArray[i].indexOf("move") + 5));
        }
        //move = parseInt(instructionsArray[i].charAt(instructionsArray[i].indexOf("move") + 5));
        from = parseInt(instructionsArray[i].charAt(instructionsArray[i].indexOf("from") + 5));
        to = parseInt(instructionsArray[i].charAt(instructionsArray[i].indexOf("to") + 3));
        poppedArray = [];
        for(mi = 0; mi < move; mi++) {
            poppedValue = stack[from - 1].pop();
            poppedArray.push(poppedValue);                    
        }
        poppedArray.reverse().forEach(element => {
            stack[to - 1].push(element);
        }) 
    }
    return stack;

}

part1 = () => {
    const readableStream = fs.createReadStream(filePath, 'utf8');

    readableStream.on('error', function (error) {
        console.error(`error: ${error.message}`);
    })

    readableStream.on('data', (chunk) => {
        split = chunk.split("\n");
        // split the stack input from movement instructions
        crateStackStrings = [];
        instructionsArray = [];
        for(i = 0; i < split.length; i++) {
            if(split[i].includes("[")) {
                crateStackStrings.push(split[i]);
            } else if(split[i].includes("move")) {
                instructionsArray.push(split[i]);
            }
        }
        crateStackStrings = crateStackStrings.reverse();
        stack = [[], [], [], [], [], [], [], [], []];
        for(i = 1; i <= stack.length; i++) {
            crateStackStrings.forEach(element => {
                pushedChar = element.charAt(4 * (i - 1) + 1);
                if(pushedChar != " ") {
                    stack[i - 1].push(pushedChar);
                }
                
            });
        }
        console.log(reorgStack(instructionsArray, stack));
        
    })
}

part2 = () => {
    const readableStream = fs.createReadStream(filePath, 'utf8');

    readableStream.on('error', function (error) {
        console.error(`error: ${error.message}`);
    })

    readableStream.on('data', (chunk) => {
        split = chunk.split("\n");
        // split the stack input from movement instructions
        crateStackStrings = [];
        instructionsArray = [];
        for(i = 0; i < split.length; i++) {
            if(split[i].includes("[")) {
                crateStackStrings.push(split[i]);
            } else if(split[i].includes("move")) {
                instructionsArray.push(split[i]);
            }
        }
        crateStackStrings = crateStackStrings.reverse();
        stack = [[], [], [], [], [], [], [], [], []];
        for(i = 1; i <= stack.length; i++) {
            crateStackStrings.forEach(element => {
                pushedChar = element.charAt(4 * (i - 1) + 1);
                if(pushedChar != " ") {
                    stack[i - 1].push(pushedChar);
                }
                
            });
        }
        console.log(reorgStack9001(instructionsArray, stack));
        
    })
}

part2();