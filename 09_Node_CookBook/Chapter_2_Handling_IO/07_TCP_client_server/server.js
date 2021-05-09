//Setting a server using the .net module 
const net  = require("net");
const HOSTNAME = "localhost";
const PORT = 3000;

//Make the server listen 
net.
    createServer(socket => {
        console.log("Client connected.");
        socket.on("data", name => {
            socket.write(`Hello ${name}!`);
        });
    })
    .listen(PORT, HOSTNAME);
