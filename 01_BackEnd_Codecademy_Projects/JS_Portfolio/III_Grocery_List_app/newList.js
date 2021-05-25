/*Grocepro Grocery List App V 1.0 */

/*New list form functionality*/ 
const createListForm = document.getElementById("new-list");
const step1 = document.querySelector(".step1");
const newListInput = document.getElementById("new-list-area");
const windowInnerWidth = window.innerWidth;

const success = valueReceived => {console.log(valueReceived)};

/*Create a new list functionality*/
const createNewList = new Promise((resolve, reject) => {
    createListForm.addEventListener('submit', (e) => { 
        
        //Upon form submission slide out of the browser window
        const keyFrameRules = document.styleSheets[2].cssRules[2]; 
        keyFrameRules.appendRule(`to{transform: translateX(${2*windowInnerWidth}px)}`);  
        
        createListForm.style.animation = "slideOut 0.5s forwards";
        step1.style.animation = "slideOut 0.5s forwards";
        
        //Remove step and form elements from the DOM after 2 seconds
        setTimeout(deleteChildNodes, 2000, newListInput);
        
        e.preventDefault();
    });

    resolve('List Created!')
}).then(success);

/*Utility functions*/
//Deletes child nodes for a given parent element
function deleteChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

