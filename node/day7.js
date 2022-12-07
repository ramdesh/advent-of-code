const fs = require('fs');

filePath = '../input/day7.txt';

const getTotalOfFilesUnder1000 = (terminalInput) => {
    objectTree = [];
    totalSize = 0;
    currentFolderObject = {name: "", totalSize: 0, children: [], parent: ""};
    childFolderObject = {name: "", totalSize: 0};
    previousFolderObject = {name: "", totalSize: 0, children: [], parent: ""};
    for(let i in terminalInput) {
        if(terminalInput[i].startsWith("$ cd")) {
            if(terminalInput[i].split(" ")[2] !== "..") {
                if(currentFolderObject.name !== "") {
                    objectTree.push(currentFolderObject);
                }
                previousFolderObject = currentFolderObject;
                currentFolderObject = {name: "", totalSize: 0, children: [], parent: ""};
                currentFolderObject["name"] = terminalInput[i].split(" ")[2];
                currentFolderObject["parent"] = previousFolderObject.name;
            } else {
                currentFolderObject = objectTree.find(folderObject => folderObject.name === currentFolderObject.parent);
            }
        } else if(terminalInput[i].startsWith("$ ls")) {
            for(let j = i; j < terminalInput.length; j++) {
                if(terminalInput[j].startsWith("$")) {
                    break;
                }
                outputParts = terminalInput[j].split(" ");
                if(parseInt(outputParts[0]) != NaN) {
                    // this is a file
                    currentFolderObject["totalSize"] += outputParts[0];
                } else if(outputParts[0] === "dir") {
                    // this is a folder
                    childFolderObject = {"name": outputParts[1], "parent": currentFolderObject.name, totalSize: 0}
                    currentFolderObject.children.push(childFolderObject);
                }
            }

        }
    }
    console.log(objectTree);

}

part1 = () => {
    const readableStream = fs.createReadStream(filePath, 'utf8');

    readableStream.on('error', function (error) {
        console.error(`error: ${error.message}`);
    })

    readableStream.on('data', (chunk) => {
        split = chunk.split("\n");
        total = getTotalOfFilesUnder1000(split);
        
    })
}
// console.assert(getTotalOfFilesUnder1000(`$ cd /
// $ ls
// dir a
// 14848514 b.txt
// 8504156 c.dat
// dir d
// $ cd a
// $ ls
// dir e
// 29116 f
// 2557 g
// 62596 h.lst
// $ cd e
// $ ls
// 584 i
// $ cd ..
// $ cd ..
// $ cd d
// $ ls
// 4060174 j
// 8033020 d.log
// 5626152 d.ext
// 7214296 k`.split("\n")) === 95437);
part1();