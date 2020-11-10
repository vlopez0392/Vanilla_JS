//DOM selectors for single elements  
/**DOM selectors: DOM methods that allows to extract elecments from the DOM. No JQuery required nowadays. 
   JQuery can be used for specific actions or quick plugins. However, it adds unnecessary bloat to our source
   if used to select elements from the DOM / DOM manipulation **/ 

// Single element selectors - Allow you to select element either by id or class. Only stores a single element. 

// 1 - document.getElementById() - Selects an element by id 
console.log(document.getElementById('task-title'));

// Get other properties from the element 
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);


const taskTitle = document.getElementById('task-title')
//Styling - This is for dynamic functionality only like event listeners, not to style the elements (Use CSS).  
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = "5px";

//taskTitle.style.display = 'none'; //Gets rid of the element

//ChangING text content 
taskTitle.textContent = "Task List";
taskTitle.innerText = "My Tasks";

//Modifying HTML 
taskTitle.innerHTML = '<span style = "color:red"> Task List </span>';

// 2 - document.querySelector() -- Superior to getELementById() -> querySelector is much more flexible. Allows selection based on other properties. 
console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5")); //Returns the first h5 in the page 

// Selecting other nodes (Other than the first)
document.querySelector('li').style.color = "red";
document.querySelector('ul li').style.color = "blue";

document.querySelector('li:last-child').style.color = "red";   //Use CSS pseudo selectors 
document.querySelector('li:nth-child(3)').style.color = "teal"; //Use CSS pseudo selectors 

//Note that other CSS pseudo selectors such nth-child(even) will only taget the first element since we are still dealing with single element selectors. 
document.querySelector('li:nth-child(even)').style.color = "green";


