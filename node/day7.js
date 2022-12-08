const fs = require('fs');

filePath = '../input/day7.txt';

class Folder{
    constructor(name, parentName) {
        this.name = name;
        this.parent = parentName;
        this.totalSize = 0;
        this.childNames = [];
    }
    addToTotalSize(size) {
        this.totalSize += size;
    }
    getParentName() {
        return this.parentName;
    }
    getName() {
        return this.name;
    }
    addChildName(childName) {
        this.childNames.push(childName);
    }
}

const getTotalOfFilesUnder100000 = (terminalInput) => {
    objectTree = [];
    totalSize = 0;
    currentFSObject = undefined;
    for(let i in terminalInput) {
        if(terminalInput[i].startsWith("$ cd")) {
            if(terminalInput[i].split(" ")[2] !== "..") {
                currentFolderName = "";
                if(currentFSObject !== undefined) {
                    objectTree.push(currentFSObject);
                    currentFolderName = currentFSObject.getName();
                }           
                currentFSObject = new Folder(terminalInput[i].split(" ")[2], currentFolderName);
            } else {
                currentFSObject = objectTree.find(folder => folder.getName() === currentFSObject.getParentName());
            }
        } else if(terminalInput[i].startsWith("$ ls")) {
            for(let j = i; j < terminalInput.length; j++) {
                if(terminalInput[j].startsWith("$")) {
                    break;
                }
                outputParts = terminalInput[j].split(" ");
                if(parseInt(outputParts[0]) != NaN) {
                    // this is a file
                    currentFSObject.addToTotalSize(outputParts[0]);
                } else if(outputParts[0] === "dir") {
                    // this is a folder
                    currentFSObject.addChildName(outputParts[1]);
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
        total = getTotalOfFilesUnder100000(split);
        
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