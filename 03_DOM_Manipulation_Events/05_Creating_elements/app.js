// Creating elements in the DOM 

const li = document.createElement('li'); //Creating the element as a const - Will not be reassigned
li.className = "collection-item"; //Adding a class to the element 
li.id = "new-item"; //Add an id
li.setAttribute('title', 'New Item'); // Add attribute 

//Creating a text node and appending 
li.appendChild(document.createTextNode("Hello World"))

//Appending a li as a child of ul 
document.querySelector("ul.collection").appendChild(li);

console.log(li);

//Adding the link element to the li 
const link = document.createElement("a"); 
link.className = "delete-item secondary-content";

//Add icon html 
link.innerHTML = '<i class="fa fa-remove"></i>';

//Append link into li 
li.appendChild(link);