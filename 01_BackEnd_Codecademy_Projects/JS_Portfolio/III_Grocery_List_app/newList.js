/*Grocepro Grocery List App V 1.0 */
/*New list form functionality*/ 
const createListForm = document.getElementById("new-list"),
      step1 = document.getElementById("step1"),
      newListInput = document.getElementById("new-list-card"),
      cardContainer = document.querySelector(".card-container")
      windowInnerWidth = window.innerWidth;

/*Add to the list form functionality*/
 const addToListForm = document.getElementById("add-to-list-card")
 const step2 = document.getElementById("step2");

/*Create a new list functionality*/
const createNewList = new Promise((resolve, reject) => {
    createListForm.addEventListener('submit', (e) => { 
        //Store form values 
        const formValues = getFormInputValues(createListForm);

        //Upon form submission slide out of the browser window
        slideX([cardContainer, step1], 'out')
        
        //Remove step and form elements from the DOM after a set time
        setTimeout(deleteChildNodes, 600, newListInput);
        
        /* Resolve form values*/
        resolve(formValues)
        e.preventDefault();
    });
})
.then((formValues) =>{
    setTimeout(()=>{
        addToListForm.style = 'display: block';
        slideX([step2], 'in');
    }, 500);
});

/*Utility functions*/
//Deletes child nodes for a given parent element
function deleteChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

//A slide animation in the X axis with some hard-coded values 
function slideX(elements, direction){
    let timing = {duration: 500, fill: 'forwards'}, animation; 
    
    if(direction == 'out'){
        animation = [{transform: `translateX(${2*windowInnerWidth}px)`}];
    }else{
        animation = [{transform: 'translateX(-1500px)'},
                     {transform: `translateX(0px)`}
    ];
    }
    elements.forEach(element => {
        element.animate(animation, timing);
    })
} 

//Iterate through a from and get input values
function getFormInputValues(formElement){
    const inputValues = {}; 

    if(!formElement.hasChildNodes()){
        return null; 
    }else{
        formElement.childNodes.forEach(node => {
            if(node.nodeName === "INPUT" && node.type !== "submit"){
                inputValues[node.id] = node.value;
            }
        });
        console.log(inputValues);
        return JSON.stringify(inputValues);
    }
}