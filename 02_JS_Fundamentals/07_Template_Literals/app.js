//Template literals (strings) - ES6 (Compatible with all of modern browsers)

const name = "John";
const age = 30; 
const job = "Web Developer"; 
const city = "Miami"; 
let html;


// ES5 way of inserting HTML from JS. Using JS to handle dynamic data. 
html = "<ul><li>Name: " + name + "</li><li>Age: " + age + "</li><li>Job: " + job +
    "</li><li>City: " + city +" </li></ul>"; //Messy way to do so 

// ES6: Using template literals/strings (Notice the syntax!):
html = `
    <ul>
        <li>Name: ${name} </li>
        <li>Age:  ${age} </li>
        <li>Job:  ${job} </li>
        <li>City: ${2 + 2} </li> <!---Expressions-->
        <li>City: ${hello()} </li>  <!-- Functions --> 
        <li>City: ${age > 30 ? 'Over 30': 'Under 30'} </li> 
    </ul>
`;

function hello(){
    return 'Hi I\'m Vick!';
}


document.body.innerHTML = html;










