/*Grocepro Grocery List App V 1.0 */

/*New list form functionality*/ 
const createListForm = document.getElementById("new-list");
const step = document.querySelector(".step");

/*Upon form submission slide out of the browser window*/
createListForm.addEventListener('submit', (e) => { 
    const windowInnerWidth = window.innerWidth;
    const keyFrame = document.styleSheets[2].cssRules[2]; 

    keyFrame.appendRule(`to{transform: translateX(${windowInnerWidth}px)}`);  

    createListForm.style.animation = "slideOut 1s forwards";
    step.style.animation = "slideOut 1s forwards";
    e.preventDefault();
});


