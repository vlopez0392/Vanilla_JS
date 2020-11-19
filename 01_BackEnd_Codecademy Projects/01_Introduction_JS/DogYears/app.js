let myAge = 28; //Vick's age
let earlyYears = 2; //Vick's first to years of life
earlyYears *=10.5;  //Equivalent dog early years

let laterYears = myAge -2 ; //Vick's later years
laterYears *=4 ; //Equivalent dog later years 

//Logging some values to the console 
console.log(`My first 2 years equal ${earlyYears} dog years`);
console.log(`The rest of my ${laterYears/4} years equal ${laterYears} dog years.`)

//My current age to dog years 
myAgeInDogYears = earlyYears + laterYears; 

//My name in lowercase
myName = 'Vick'.toLowerCase();

//Final log 
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)