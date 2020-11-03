//let, var and const -> Define a variable 

// VAR - Since the beggining of JS 
///// Naming conventions: Can include letters, numbers, _ or $. May not start with numbers.
var name = "John Doe";
console.log(name)
name = "Steve Smith"; //Reassigning our variables
console.log(name); 

var greeting ; //Initializes the greeting variable as undefined
console.log(greeting);
greeting = "Hello"; 
console.log(greeting);

////// Multiword variables - Use camelCase
var firstName = "Vick";
var first_name = "Sara"; //Underscore - Used in php
var FirstName = "Tom";   //Pascal case - Used also in JS constructors
var firstname;

// LET - Advantage over var when it comes to scope 
//// Similar to var (Identical on the global scope) - Superior in the 
let lastName; 
lastName = "Lopez"
console.log(lastName);

// CONST - Introduced in ES2015 / ES6 
// const or constants can not be reassigned, e.g.
const a = "hello";
console.log(a);
// a = "No"; // Not allowed - Throws SyntaxError
 
// const b; // Constants must also be initialized when declared - Throws SyntaxError

// Example of an object literal 
const person = {
    name: "John",
    age:30 }

console.log(person)
    
// Object literals are mutable, e.g. 
person.name = "Vick";
console.log(person)


//Example of an array in JS
const numbers = [1,2,3,4,5];
console.log(numbers);
numbers.push(6); 
console.log(numbers);