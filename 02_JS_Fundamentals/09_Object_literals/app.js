//Object literals 

//Defining an object literal 
const person = {
    firstName: "Steve",
    lastName: "Smith",
    age: 30,
    email: "steve@aol.com",
    hobbies: ['sports', 'music'],
    address : {
        city: 'Miami',
        state: 'FL'
    },

    //Object method 
    getBirthYear: function(){
        return 1990;
    },

    //Using the .this keyword 
    getBirthYearByAge: function(){
        const today = new Date(); 
        return today.getFullYear() - this.age;
    }

};
console.log(person)

//Getting an specific object attribute/property

//Two ways to do so - Yield the same result
// 1 - RECOMMENDED AND MOST COMMON 

let first = person.firstName;
console.log(first);

// 2 - Similar to Python by using []
let second = person['firstName'];
console.log(second);

// Console logging other properties
let val = person.age;
console.log(val);

val = person.hobbies[1];
console.log(val);

val = person.address.city;
console.log("I live in " + val + "!");

val = person.getBirthYear();
console.log(val);

val = person.getBirthYearByAge();
console.log(val);

// Arrays of objects 
const people = [{name: "John", age: 30}, {name: "Mike", age: 28}];

for (let i = 0; i<people.length ; i++){
    console.log(people[i].name)
}
