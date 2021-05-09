//Regular expressions - Used to describe a pattern of characters - Pattern matching, pattern searching, validation, searching things in a body of characters. 

//Evaluation of RE in JS 
let re = /hello/; //Literal characters - RE pattern 
console.log(re);

console.log(re.source); //Returns the actual expression

/////exec() - Returns result in array if there is a match or null if none
let result = re.exec('Vick hello world');
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

/////test() - Returns true or flase if there is match (or isn't) 
result = re.test('hello');
console.log(result); //Prints true 

result = re.test('Hello');
console.log(result); //Prints false

//i flag - toggles case sensistivity 
re = /hello/i;
result = re.test('Hello');
console.log(result); //Prints true  

//g flag - Global search for all instances of the pattern (e.g. seach in  a paragraph)
//re = /hello/g;

//////match() - Returns result array or null (Similar to exec() but takes the RE as an input - Its a string method) 
re = /hello/i;
let str = 'Vick, Hello there';
result = str.match(re);
console.log(result);

//////search() - Returns index of first match if not found returns -1 
result = str.search(re);
console.log(result);

//////replace() - Returns new string with some or all matches of a pattern 
result = str.replace(re, 'Hi');
console.log(result);

