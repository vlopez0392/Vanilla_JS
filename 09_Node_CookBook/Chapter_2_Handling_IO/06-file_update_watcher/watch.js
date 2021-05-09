//06-Watching file updates 
const fs = require('fs');
const file = "./file.txt";
const moment = require('moment'); 


fs.watchFile(file, (current, previous)=>{
    const time = moment().format("MMMM Do YYYY h:mm:ss a");
    return console.log(`${file} updated ${time}`);
});
