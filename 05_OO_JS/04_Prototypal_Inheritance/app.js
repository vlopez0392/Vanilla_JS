//Prototypal inheritance 

//What if we want an object type inherit from another? 
//In this example the Customer Object will inherit from the Person Object 

//Person constructor
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName  = lastName;
}

Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}!`;
}

const person1 = new Person("John", "Doe");
console.log(person1.greeting());

//Customer constructor
function Customer(firstName, lastName, phone, membership){
    //Call is a function that allows us to call another function from somewhere else in the current context
    Person.call(this, firstName, lastName); 
    
    this.phone = phone;
    this.membership = membership;
}

//Inherit the Person prototype methods 
Customer.prototype = Object.create(Person.prototype);

//Make customer.prototype return Customer
Customer.prototype.constructor = Customer;

//Create customer 
const customer1 = new Customer("Tom", "Smith", "555-555-5555", 'Standard');
console.log(customer1);
console.log(customer1.greeting());


//Customer greeting that overrides person greeting
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}! Welcome to our company`;
}

console.log(customer1.greeting());