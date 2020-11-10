// Removing and replacing elements in the DOM 
// Replacing element 

//Create an element 
const h2heading = document.createElement('h2');
h2heading.id = "task-title"

//Create a text node 
h2heading.appendChild(document.createTextNode("My Tasks"));

//Get old heading 
const oldHeading = document.getElementById("task-title");

//Get parent node 
const cardAction = document.querySelector(".card-action")

//Replace element 
cardAction.replaceChild(h2heading,oldHeading);

//Remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul'); 

//1 - Remove list items 
lis[0].remove();

//2 - Remove child element 
list.removeChild(lis[3]);


/// Working with Classes and attributes 
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0]; 

//Classes
let val; 
val = link.classList;
val = link.classList[0];
link.classList.add("test"); //DOM Token List method 
link.classList.remove("test"); //DOM Token List method 
val = link;

//Attributes 
val = link.getAttribute("href");
val = link.setAttribute("href", "http://google.com")
link.setAttribute("title", "Google");
val = link.hasAttribute("title");

link.removeAttribute("title"); 


console.log(val);

