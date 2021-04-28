//02-Managing files with the fs module 
//Syncronously reading files and updating them with the Node File System fs module
const path = require("path");
const fs   = require("fs");
const fsp  = require("fs").promises;

const filePath = path.join(process.cwd(), "hello.txt");
const mode = process.argv[2].toLowerCase();

switch(mode){
    case "callback":
        fs.readFile(filePath, "utf-8", (err,contents)=>{
            if(err){
                return console.log(err);
            }
            console.log("File contents: ", contents);
            const updateContents = contents.toUpperCase();
            
            setTimeout(() => 
            updateFile(filePath, updateContents), 10); //Define this function to avoid callback hell. Better to use the promise API.
        });



        break;
    case "promises":
        //Using only the promises API
        fsp.readFile(filePath, "utf-8")
        .then((contents) =>{
            console.log(`File contents: ${contents}`); 
        });
        break;    
    case "asawait":
        //Using the async/await syntax
        async function run(){
            try{
                contents = await fsp.readFile(filePath, "utf-8");
                console.log(`File contents: ${contents}`);
            }catch(error){
                console.log(error);
            }
        }
        run();
        break;
    default:
        console.log(`Invalid option: ${mode}, please try either callback or promises`);
    }

setInterval(()=>{
    process.stdout.write("**** \n");
}).unref();

function updateFile(filepath, contents){
    fs.writeFile(filepath, contents, err=>{
        if(err){
            throw err; 
        }
        console.log("File updated");
        console.log(contents);
    })
}