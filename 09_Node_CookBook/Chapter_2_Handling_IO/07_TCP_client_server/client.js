//Setting the client using the .net module
const net  = require("net");
const HOSTNAME = "localhost";
const PORT = 3000;

const socket = net.connect(PORT, HOSTNAME);

console.log("Please enter any name: ");
process.stdin.on("data", (data)=>{
    const name = data.toString().trim();
    writeName(name); 
});

function writeName(name){
    if(name){
        socket.write(name);
        socket.on("data", (data)=>{
            console.log(data.toString());
        });
    }else{
        console.log("Please enter a valid name and try again!")
    }
}



