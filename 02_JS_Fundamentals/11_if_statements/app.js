//If statements - Syntax is similar to other PL - Will only consider the JS stuff.
//Using comparison operators
let id = 100;
if(id == 100){
    console.log("Success");
}else {
    console.log("Fail");
} 

// Comparison proceeds normally if the values have the same data type, otherwise return false. 
let id2 = '100';
if(id2 === 100){
    console.log("Success");
}else {
    console.log("Fail");
} 

//Use of template strings, logical and comparison operators example
let age = 28;
let name = "Vick";

//&& AND
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >= 12 && age <= 20){
    console.log(`${name} is a teen`);
} else{
    console.log(`${name} is an adult`);
}

//OR ||

if(age < 16 || age >65){
    console.log(`${name} can not run in race`);
} else{
    console.log(`${name} is registered for the race`);
}

//Ternary operator is similar to that of Java
//Brackets are optional in if statements 