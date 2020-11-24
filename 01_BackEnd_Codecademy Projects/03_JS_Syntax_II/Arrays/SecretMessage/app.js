/*
Using array methods, transform an array of strings into a secret message! 
*/

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//Popping the last element
secretMessage.pop();
//console.log(secretMessage.length);

//Pushing two strings to our secret Message array
secretMessage.push('to', 'Program');
//console.log(secretMessage.length);

//Changing the word easily to right
const idx = secretMessage.indexOf('easily');
secretMessage[idx] = 'right';
//console.log(secretMessage.indexOf('right'));

//Removing the first element of the array
secretMessage.shift();

//Adding the string 'Programming' to the beginning of ///the array
secretMessage.unshift('Programming');

//Remove the elements: get, right, the, first, time
const indexStart = secretMessage.indexOf('get');
const indices = 5;

secretMessage.splice(indexStart, indices, 'know');

//Loggin the secret message
console.log(secretMessage.join(' '));


