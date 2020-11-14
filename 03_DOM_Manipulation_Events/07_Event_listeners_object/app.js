//Event listeners 

//Event function declared inside the Event Listeners as a parameter
// document.querySelector('.clear-tasks').addEventListener("click", 
// function(e){ //Upon the click event execute the following function
//         console.log("I was clicked!");
//         e.preventDefault();
//     }
// )

//Event function declared outside the Event Listener 

document.querySelector('.clear-tasks').addEventListener("mouseover", onClickEvent);

function onClick(e){
    console.log("I was clicked");
    e.preventDefault();
}

//The event object 
function onClickEvent(e){
    let val;
    val = e;

    //Event target element 
    val = e.target; // We can obtain attributes of our target 
    val = e.target.classList;

    val = e.target.innerText = "I changed"; //Most important element

    //Event type 
    val = e.type;

    //Timestamp 
    val = e.timeStamp;

    //Coords event relative to the window - From the top 
    //e.clientX; -> From the leftmost end
    val = e.clientY;

    //Coords event relative to the element (offsetX)
    val = e.offsetY;

    console.log(val);
    e.preventDefault();
}
