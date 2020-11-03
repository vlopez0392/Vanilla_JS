// Number operations - Similar to other programming languages

const num1 = 100;
const num2 = 60; 
let val; 

//Simple math with numbers 
val = num1 + num2;
console.log(val);

val = num1 - num2;
console.log(val); 

val = num1*num2;
console.log(val);

val = num1/num2;
console.log(val); 

val = num1%num2;
console.log(val)

// Math Object

//Properties (Attributes) of the Math Object 
val = Math.PI; 
console.log(val); 

let euler = Math.E;
console.log(euler);

//Useful functions (Methods) of the Math Object
let rnd = Math.round(2.4)
console.log(rnd);

let ceiling = Math.ceil(2.4);
console.log(ceiling);

let floored = Math.floor(2.4)
console.log(floored);

let sr = Math.sqrt(64)
console.log(sr);

let absolute = Math.abs(-35);
console.log(absolute);

let powers = Math.pow(sr, 2);
console.log(powers);

let min = Math.min(1,2,0, -100);
console.log(min);

let max = Math.max(1, 10, 100 ,1000);
console.log(max); 


//RNG 
let upper = 10;
anotherInt = Math.floor(Math.random()*upper +1);
console.log(anotherInt)