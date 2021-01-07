/*
    Find my Hat!  
    Programmed by Vick

    Rules: You lost your hat in a field! Find your hat! 
    Just Don't fall in any of the holes or step outside the field. 

*/
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field{
    constructor(field){
        if(Array.isArray(field)){
            this.field = field;
            console.log("Got here!")
        }else{
            console.log("Invalid input field! Generating our own field...")
        }
    }
}
















///Working with user-input 

//1-Using the node built-in process and readline modules:

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // Requires a callback function - Remember node works asynchronously (Lot's of callbacks involved).
// readline.question('Who are you? \n', name => {
//     console.log(`Hey there ${name}`);
//     readline.close();}) //Lots of boiler-plate! See 2

//2-Using prompt-sync module - Easy alternative to 1 

// const prompt = require('prompt-sync'`)({signint:true});
// const name = prompt('What is your name? \n');
// console.log(`Hey there ${name}`);

