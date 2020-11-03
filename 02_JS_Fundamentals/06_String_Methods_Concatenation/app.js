// String methods and concatenation 
const firstName = "Vick";
const lastName  = "Lopez";
const age = 28;

let stringVal; 

//Concatenation with two string variables 
console.log(firstName + lastName);


//Concatenation with a string literal 
console.log(firstName + " " + lastName); 

//Appending 
stringVal = "Vick"
stringVal += " Lopez";

console.log("Hello my name is " + firstName + " and I am " + age); //Easier done with template literals ... later

//Escaping
// This is wrong: stringVal = 'That's awesome I can't wait';

// Use double quotes instead
stringVal = "That's awesome, I can't wait";
console.log(stringVal);

//Or use the escape character \
stringVal = 'That\'s awesome, I can\'t wait'
console.log(stringVal);

//String properties and methods 

//length property
stringVal = firstName.length; //Returns the length of the string, or the number of characters in it.
console.log(stringVal);

//.concat() method
stringVal = firstName.concat(' ', lastName); //Achieves the same as the concatenation examples above
console.log(stringVal);

//Changing case
stringVal = firstName.toUpperCase();
console.log(stringVal);
stringVal = lastName.toLowerCase();
console.log(stringVal);


//Indexing a string - Treats them as read only arrays
stringVal = firstName.concat(' ', lastName);
console.log(stringVal); 
let index;
index = stringVal[0];
console.log(index);

//Finding a value based on an index
val = stringVal.lastIndexOf("z"); ////Returns the index of the rightmost occurrence of "n": 0
console.log(val); 

//charAt() - Returns the character at the specified index
val = stringVal.charAt(0); // "V"
console.log(val); 

//Get last char 
let lastChar; 
lastChar = stringVal.charAt(stringVal.length - 1); //Common way to do so in JS, remember that strings are 0-indexed so we need to subtract 1

//Slicing strings .substring() / .slice();
let slice;
slice = stringVal.substring(0,4);
console.log(slice); 

slice = stringVal.slice(-10,-5);
console.log(slice); //Accepts negative index values

//Split - Splits a string into an array based on a separator character 
let str;
str = "Hello my name is " + firstName + " and I am " + age;
str = str.split(" "); //Make a split when a space is found 
console.log(str);

//Website form: Separating a CSV tags for futher use  
let tags = "web design, programming, web development"
csv = tags.split(",");
console.log(csv);


//Replace - Replaces a value on a string
stringVal = stringVal.replace("Vick", "Victor")
console.log(stringVal);

//Includes - Returns true/false if a substring is found in a string - case sensitive!
let included ; 
included = stringVal.includes("victor") 
console.log(included); // true