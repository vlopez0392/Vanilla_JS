//Mouse Events
const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

//Click 
//clearBtn.addEventListener("click", runEvent);

//Double Click 
//clearBtn.addEventListener("dblclick", runEvent);

//Mouse down 
//clearBtn.addEventListener("mousedown", runEvent);

//Mouse up 
//clearBtn.addEventListener("mouseup", runEvent);

//Mouse enter  Listens to the event if you mouse enter the card element.
//card.addEventListener("mouseenter", runEvent);

//Mouse leave 
//card.addEventListener("mouseleave", runEvent);

//Mouse over -  Listens to the event if you mouse over any element within the card element and the card element itself.
//card.addEventListener("mouseover", runEvent);

//Mouse out 
//card.addEventListener("mouseout", runEvent);

//Mouse move - Useful for interactive applications!
card.addEventListener("mousemove", runEvent);

//Event Handler 
function runEvent(e){
    console.log(`Event type:  ${e.type}`);

    heading.textContent = `Mouse X: ${e.offsetX} Mouse Y: ${e.offsetY} `
    document.body.style.backgroundColor = `rgb(0, ${e.offsetX}, ${e.offsetY})`;


    e.preventDefault();
}