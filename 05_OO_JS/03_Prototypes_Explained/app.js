//ES5 prototypes 

//Each object in JS has a prototype and a prototype is an object itself.
//All objects inherit their methods and properties from their prototypes.

//Object literals - Inherit from Object prototype 
//Object constructors - Inherit from the lowest object in the prototype chain.
//e.g. A person object inherits from Person.prototype which itself inherits from 
//Object.prototype

//From lesson 1 consider the following Citizen constructor
function Citizen(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);

    //Calculate birthday method - Precise to milliseconds
    // this.getAge = function(){
    //     const diff = Date.now() - this.birthday.getTime(); 
    //     const ageDate = new Date(diff); 
    //     return Math.abs(ageDate.getUTCFullYear() - 1970); 
    // }
}

//Adding the getAge function to the Citizen prototype
Citizen.prototype.getAge = function(){
    const diff = Date.now() - this.birthday.getTime(); 
    const ageDate = new Date(diff); 
    return Math.abs(ageDate.getUTCFullYear() - 1970); 
}
//Adding one more prototype method 
Citizen.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

//Gets married - Updates the object's data 
Citizen.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}

const john = new Citizen("John", "Doe", "8-12-1990");
const mary = new Citizen("Mary", "Johnson", "March 20 1978");

console.log(mary);
console.log(john);

console.log(john.getAge());
console.log(mary.getFullName());
console.log(mary.getsMarried("Doe"));
console.log(mary.getFullName());

//Object.prototype methods and properties 
//hasOwnProperty
console.log(mary.hasOwnProperty("firstName"));
console.log(mary.hasOwnProperty("getFullName"));