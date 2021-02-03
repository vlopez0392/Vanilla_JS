// Object Oriented JS 

// constructor and this keyword -> Fundamental in OO programming 
// ES5 and ES6 syntax will be explained in this section. 

//Object literal -> Fine for dealing with single instances 
const brad = {
    name: 'Brad',
    age: 30
}

console.log(brad);
console.log(brad.age);

//Object constructor -> Better for dealing with multiple
//instances of a certain type of object. 

//Person constructor 
function Person(name, age){
    this.name = name;
    this.age = age;
}

//Instantiating mutiple Person objects with the new keyword
const brady = new Person("Brady",36);
console.log(brady);

const john = new Person("John",30);
console.log(john);

//this keyword -> Refers to the current instance of the object 
//this refers to the instance on the current scope.
console.log(this) //Global scope - this refers to the window object
//this.alert("Hello!")

//Another type of person constructor
function Citizen(name, dob){
    this.name = name;
    this.birthday = new Date(dob);

    //Calculate birthday method - Very precise
    this.getAge = function(){
        const diff = Date.now() - this.birthday.getTime(); //Time in milliseconds from your birthday to now
        const ageDate = new Date(diff); //With the above timestamp calculate the number of millesconds from 1970 to the diff value (1998)
        
        return Math.abs(ageDate.getUTCFullYear() - 1970); //Returns 28 :)
    } 
}

const vick = new Citizen('Vick', '1992-3-10');
console.log(vick.getAge());