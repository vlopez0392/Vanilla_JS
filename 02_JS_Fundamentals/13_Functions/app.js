//Functions in JS 



//-------------------------------------------------Function declarations---------------------------------------------- 
function greet(){
    console.log("Hello");
}
greet();

// The return keyword 
function greeting(){
    return "Hi, my name is Vick and I am a programmer"
}

let helloFunction = greeting();
console.log(helloFunction);

//Functions with parameters and defa
function cheers(firstName, lastName){ 
    return `Hi I'm ${firstName} ${lastName} and I am learning the JS syntax`;
}

console.log(cheers("Vick", "Lopez"));

//Default parameters in ES5
function uglyGreet(firstName, lastName){
    //Do a type check here and assign a default parameter
    if(typeof firstName === 'undefined'){firstName = "John"}
    if(typeof lastName  === 'undefined'){lastName  = "Otherseed"}

    return `Hi I'm ${firstName} ${lastName} and I am learning the JS syntax`;
}

console.log(uglyGreet());

//Default parameters in ES6 -> Similar to Python 
function defaultGreet(firstName = "John", lastName = "Appleseed"){ 
    return `Hi I'm ${firstName} ${lastName} and I am learning the JS syntax`;
}

console.log(defaultGreet());

//---------------------Function Expressions: Assigning a function to a variable. --------------------------------------

const square = function(x = 3 ){ //Function is usually anonymous, although you are free to name it.
    return Math.pow(x,2)
}

console.log(square()); // 9
console.log(square(8)); // 64



//Immediately invocable function expression (IIFEs): A function you declare and run at the same time.------------------

//IIFE example 1
(function(){
    console.log("I ran");
})(); //Syntax is a bit cumbersome but they are useful in many cases (Design patterns such as module pattern).

//IIFE example 2 

(function(){
    console.log("Hello" + name);
})('Vick'); 

//-------------------------------------------- Object methods ----------------------------------------------------------
const todo = {
    add: function(){
        console.log("Add todo...");
    },

    edit: function(id){
        console.log(`Edit to do ${id}`);
    }
}

todo.add();
todo.edit(22);

//Object methods can also be defined outside the object literal using function expressions
todo.delete = function(){
    console.log("Delete todo");
}

todo.delete();