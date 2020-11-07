//----------------------------------------- For-loop syntax -----------------------------------------
for(let i = 0; i<10 ; i++){
    if(i === 2){
        console.log(`${i} is my favorite number`);
        continue;
    }

    if(i === 5){
        console.log(`I hate number ${i}, breaking out!`);
        break;
    }

    console.log(`Iteration number : ${i}`);
}

//----------------------------------------- While loop ---------------------------------------------
let flag = true;
let count = 1;

while(flag){

    console.log(`I'm in a while loop : ${count}` );
    if(count == 3){
        flag = false;
    }
    count++;
}   

//----------------------------------------- do-while loop ------------------------------------------
let x = 1;

do {
    console.log("The do while loop executes at least once " + x);
    x++;
} while(x < 5)

//----------------------------------------- Looping through arrays--------------------------------- 
const cars = ["Ford", "Chevy", "Honda", "Toyota"];

//Arrays have specific method to be looped through. We can still use other loops though.
for(let i = 0; i < cars.length; i++){ 
    console.log(cars[i]);
}

//For-each array loop - Uses an anonymous function who's main control parameter is an iterator. Index and array are 
//other possible control parameters.
cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array);
});

// Maps - Are used to map the contents of an array to another array. 
const users = [
    {id:1, name:"John"},
    {id:2, name:"Karen"},
    {id:3, name:"Sara"},
    {id:4, name:"Vick"},
];


const ids = users.map(function(user){
    return user.id;
})

console.log(ids);


//----------------------------------------- For in loops--------------------------------- 

const user = {
    firstName: "John",
    lastName : "Appleseed",
    age: 40
};

for(let x in user){ //k,v pairs
    console.log(`${x} : ${user[x]}`);
}   


