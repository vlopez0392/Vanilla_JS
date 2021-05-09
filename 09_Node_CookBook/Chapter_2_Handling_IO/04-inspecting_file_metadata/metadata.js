//04-Inspecting file metadata 
//Creates a small program that returns information about a file, using functions provided by the 
//fs module.
const fs = require('fs');
const path = require('path');
const file = process.argv[2];
const filePath =path.join(process.cwd(), file);

console.log(file);

const printMetadata = file => {
    try{    
        const fileStats = fs.statSync(file);
        console.log(fileStats);
    }catch(err){
        console.log("Error reading file: ", file)
    }
}

printMetadata(file);

//Checking file access 
function checkFileAccess(file){
    const accessFile = fs.access(filePath, fs.constants.R_OK, (err)=>{
        if(err){
            console.log(`File ${file} can't be accessed`)
        }else{
            console.log(`File ${file} can be accessed`)
        }
    });
}
checkFileAccess(file);

//Changing permissions for a file
fs.chmodSync(file, 0o000);
checkFileAccess(file);
