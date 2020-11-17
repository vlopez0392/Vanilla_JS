// Arrays and array methods

//*************************************ARRAY DEFINITIONS **************************************************** */
// Defining an array directly
const someNumbers = [43, 56, 33, 23, 44, 36, 5]; 

// Defining an array by using the new keyword/ constructor 
const newArray = new Array(43, 56, 33, 23, 44, 36, 5); 

//*************************************ARRAY METHODS AND ATTRIBUTES ***************************************** */
// Array of strings 
const fruit = ['Apple', 'Banana', 'Orange', 'Pear']; 

//An array of many data types
const mixed = [22, 'Hello', true, undefined, null ,{a:1, b:1}, new Date()];
console.log(mixed);

//Array methods and attributes

// Getting the array length 
let len = someNumbers.length;
console.log(len);

// Check if a variable holds an array - Useful when dealing with the DOM - Conversion from compatible types such as nodelists
let is_Array = Array.isArray(someNumbers); //Uses the Array object
console.log(is_Array);

//Get a single value
let val = someNumbers[3]; //Arrays are 0-indexed / based
console.log(val);

//Insert into array 
someNumbers[2] = 100; //Will replace the index specified value 
console.log(someNumbers);

//Find index of an specific value 
let findIdx = someNumbers.indexOf(36);
console.log(findIdx);

//************************************* MUTATING ARRAYS **************************************************** */

let oldNumbers = someNumbers; 

//Appending or pushing into an array's end
someNumbers.push(250); 
console.log(someNumbers);

//Pushing into an array's front
someNumbers.unshift(120);
console.log(someNumbers);

//Popping a value from the end 
someNumbers.pop();
console.log(someNumbers);

//Popping a value from the front 
someNumbers.shift();
console.log(someNumbers);

//Splicing values from the array (start, end) where end value is non-inclusive
someNumbers.splice(1,3) //Remove three values starting from index 1
console.log(someNumbers);

//Reverse values
someNumbers.reverse();
console.log(someNumbers);

//Concatenating arrays
let bigArray = someNumbers.concat(fruit)
console.log(bigArray);

//Sorting string arrays
let sortedFruit = fruit.sort();
console.log(sortedFruit);

//Sorts by first values converting to strings and then sorts in ascending order "5" > "36" - Use a compare function instead
oldNumbers = oldNumbers.sort(function(x,y){ 
    return x-y;
}); 
console.log(oldNumbers);

//Sort in descending order
oldNumbers = oldNumbers.sort(function(x,y){ 
    return y-x;
}); 
console.log(oldNumbers);

//Find a value in an array (e.g finds the first value under 50)

function under50(num){
    return num < 50;
}

let find = someNumbers.find(under50); //44
console.log(find);