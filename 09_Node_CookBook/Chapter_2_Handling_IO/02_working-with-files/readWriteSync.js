//02-Managing files with the fs module 
//Syncronously reading files and updating them with the Node File System fs module
const path = require("path");
const fs   = require("fs");

const filePath = path.join(process.cwd(), "hello.txt");

//Synchronous reading 
const contents = fs.readFileSync(filePath, "utf-8");
console.log("File contents: ", contents);

//Syncronous writing
const updatedContents = contents.toUpperCase();
fs.writeFileSync(filePath, updatedContents);
console.log("File updated!")
console.log("File contents: ", updatedContents);