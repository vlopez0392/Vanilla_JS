// Examining the document object 
// window object - Global object of the browser environment 
// The document object is a property of the window object. 

let val;
val = document; //Returns the whole document 

//Obtaining an HTML collection of the whole document
val = document.all; //Deprecated, will be used for demo purpose only
val = document.all[0];
val = document.all[2];
val = document.all.length;

//We can select other html elements too
val = document.head;
val = document.body;
val = document.doctype;

//Other properties
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

//Forms on the document
val = document.forms;
val = document.forms[0];
//val = document.forms[1]; // undefined
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

//Document links 
val = document.links; 
val = document.links[0];  
val = document.links[0].id;  
val = document.links[0].className;  
val = document.links[0].classList;  

//Images 
val = document.images; //NO images, so this returns an empty HMTL collection 

//Scripts 
val = document.scripts;
val = document.scripts[2].getAttribute('src');

//Converting HTML collections into arrays 

let scripts = Array.from(document.scripts) 

scripts.forEach(function(script){
    console.log(script).getAttribute('src');
})

console.log(val); 
