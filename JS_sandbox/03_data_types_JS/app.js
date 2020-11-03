// 6 primitive data types" Strings, Number (int, float, byte, etc..), Boolean, Null, Undefined, Symbols(ES6)
// Reference Data types / Objects : Arrays, Objects, Functions, Dates, etc... 
// JS is a Dynamically Typed Language - No need to declare the variable type, e.g. int a = 3; 

//PRIMITIVE TYPES

// Strings 
const name = "John Doe";
console.log(typeof name)

// Number 
const age = 45; 
console.log(typeof age)

//Boolean
const hasKids = true;
console.log(typeof hasKids);

//null -  Original JS implementation null was represented as an object - bogus type - It is a primitive type
const car = null;
console.log(typeof car)

//Undefined 
let test; 
console.log(typeof test);

//Symbol 
const sym = Symbol();
console.log(typeof sym)

// REFERENCE TYPES

//Array
const hobbies = ['movies', 'music'];
console.log(typeof hobbies); 

//Object literals
const address = {
    city: "Boston",
    state: "MA"
}
console.log(typeof address);

//Dates
const today = new Date();
console.log(today);
console.log(typeof today);































