//Keyboard & Input events 
const form = document.querySelector("form");
const taskInput = document.getElementById("task")
const heading = document.querySelector("h5");
const select = document.querySelector("select");

//Clearing a default input value in a form 
taskInput.value = "";

//------------Keyboard Events 

//Submit
//form.addEventListener("submit", runEvent);

//Keydown 
//form.addEventListener("keydown", runEvent);

//Keyup
//form.addEventListener("keyup", runEvent);

//Keypress - Generalized key event
//form.addEventListener("keypress", runEvent);

//Focus - Makes an input go into the focus mode 
//form.addEventListener("focus", runEvent);

//Blur - Makes an input go into the blur mode - The opposite of focus 
//form.addEventListener("blur", runEvent);

//Cut and paste
//form.addEventListener("cut", runEvent);

//form.addEventListener("paste", runEvent);

//------------  Input event 
form.addEventListener("input", runEvent); //Any input will be listened 

//------------  Change event 
//form.addEventListener("change", runEvent);


function runEvent(e){
    console.log(`Event type: ${e.type}`);

    //Get input
    //console.log(taskInput.value);
    //console.log(e.target.value);

    //heading.textContent = e.target.value;
    //e.preventDefault();
}


