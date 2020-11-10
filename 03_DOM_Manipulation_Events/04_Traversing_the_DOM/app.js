//Traversing the DOM 

let val; 
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

val = list;
val = listItem;

//Properties/nodes attached to DOM elements - child and parent nodes 

//Child nodes 
val =list.childNodes; //Returns every child node as a nodeList
val =list.childNodes[0];
val =list.childNodes[0].nodeName; // #text
val =list.childNodes[0].nodeType; //Returns 3

val =list.childNodes[3].nodeName; // #comment
val =list.childNodes[3].nodeType; //Returns 8

//Node types 
//1 - Element 
//2 - Attribute (depecrated) 
//3 - Text node 
//8 - Comment 
//5 - Document itself
//10 - Doctype 


//-------------------------------------------------Traversing the DOM -----------------------------------------------------
//---------Children
//Get children 
val = list.children; //Returns an HTML collection of child elements - Used more often 
val = list.children[1];
list.children[1].textContent = "Hello";

//Get children of children 
val = list.children[3].children[0];
list.children[3].children[0].id = "test-link"

//Getting specific children 
//First child
val = list.firstChild; //Returns the first node
val = list.firstElementChild; //Returns the first HTML element 

val = list.lastChild; //Returns the last node
val = list.lastElementChild; //Returns the first last element 

//Count child elements 
val = list.childElementCount;


//---------Parent 
val = listItem.parentNode     //Returns the parent node
val = listItem.parentElement; //Returns the parent HTML element

val = listItem.parentNode.parentNode; //Parent node of the parent node 


//---------Sibling 
//Get next sibling 
val = listItem.nextSibling; // Deals in nodes 
val = listItem.nextElementSibling; // Deals in HTML elements as seen before

//Get previous sibling 
val = listItem.previousSibling; // Deals in nodes 
val = listItem.previousElementSibling; // Deals in HTML elements as seen before - Returns null 
                                       //No previous sibling 

console.log(val);