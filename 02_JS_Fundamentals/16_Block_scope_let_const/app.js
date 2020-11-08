//Global scope 
var a = 1; 
let b = 2;
const c = 3; 

function test(){ //Function scope - You may declare previously named variables in a new scope. 
                 //var re-declared variables will not interfere with var declared varaibales in the global scope.
    var a = 4; 
    let b = 5;
    const c = 6; 
    console.log("Function scope: " ,a,b,c);
}
test();

//Block Scope - If, for, while blocks of code

if(true){
    var a = 4; 
    let b = 5;
    const c = 6; 
    console.log("If scope: ",a, b, c);
}

console.log("Global scope: " ,a,b,c); //Within a block scope variables re-declared with var can change their values.
                                      //This may cause some security risks. 
                                      
                                      
for(var a = 0; a < 10; a++){ //Also affects any variables declared in the global scope. 
    console.log( `Loop: ${a}`);
}

console.log("Global scope: " ,a,b,c); 