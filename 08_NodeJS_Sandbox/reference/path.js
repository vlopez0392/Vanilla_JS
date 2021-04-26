//Path module: Used to work with files and directory paths 
//Node Documentation -> Great reference to the path module 
const path = require('path'); 

//Basename: Returns the basefile name 
console.log(path.basename(__filename));

//Directory name 
console.log(path.dirname(__filename));

//File Extension 
console.log(path.extname(__filename));

//Create path object 
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

//Concatenate paths 
console.log(path.join(__dirname, 'test', 'hello.html'));