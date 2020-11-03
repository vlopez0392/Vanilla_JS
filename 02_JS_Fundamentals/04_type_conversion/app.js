// Type conversion - Useful when dealing with forms and applying calculations to it. String to Number conversion etc..
let val; 

// Number to string 
val = 5; 

console.log(val) //Value
console.log(typeof val); // Returns the type of data 
console.log(val.length) //Undefined - .length() is a string attribute

val = String(val); 
console.log(val)
console.log(typeof val); 
console.log(val.length); 

//Bool to String 
val = true;
console.log(typeof val);
console.log(val)
val = val.toString();
console.log(typeof val);
console.log(val)
console.log(val.length); 

//String to number
newVal = "5"; 
newVal = Number(newVal);

//Boolean to Number 
val = Number(true);  //returns 1
val = Number(false); //returns 0
val = Number(null);  //returns 0

//NaN 
notNumber = Number("WHAT?") // returns NaN when we try to parse an Int using the Number() method 

//Use the parseInt to parse a String into an int and parseFloat to parse a String into a Float;
anInt = parseInt('100')
console.log(anInt);

aFloat = parseFloat('3.14');
console.log(aFloat); 


//Type coercion - Automatic type conversion by JS 
const val1 = 5;
const val2 = 6;
const sum  = val1 + val2;

console.log(sum);
console.log(typeof sum);

// "Adding" a String and a Number; 
const val3 = 5;
const val4 = String(6); 
const sum2  = val3 + val4; //String coercion (concatenation) takes precedence over Number coercion (math operations)

console.log(sum2);
console.log(typeof sum2);











