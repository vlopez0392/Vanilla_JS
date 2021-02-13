// Object.create -> Another way to create objects 
// First we will creata parent object with several prototype methods and properties 
const personPrototype = {
    greeting: function(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    },

    getsMarried: function(newLastName){
        this.lastName = newLastName;
    }
}

//Object.create takes a prototype as a parameter
const mary = Object.create(personPrototype);

//We may add properties to our object
mary.firstName = "Mary";
mary.lastName  = "Williams"; 
mary.age = 30;
console.log(mary.greeting());
mary.getsMarried("Thompson");
console.log(mary.greeting());


//Alternative syntax to create an object using Object.create
const vick = Object.create(personPrototype, {
    firstName: {value: "Vick"}, //Properties has objects as values, which themselves have the a value property.
    lastName : {value: "Lopez"},
    age: {value: 28}
});

console.log(vick);
console.log(vick.greeting());