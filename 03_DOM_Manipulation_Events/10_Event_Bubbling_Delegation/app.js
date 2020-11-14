//Event Bubbling and delegation

/* Event bubbling  
 * Bubbling up of events in the DOM. If an event happens in an element it is said that it bubbles 
 * to its parent element */

 /**Event delegation
  * Its the opposite of event bubbling. The event is listened in a parent node and through logic we
  * can target the child element we want acted upon. 
  */

  //Event bubbling example
//   document.querySelector(".card-title").addEventListener("click", 
//     function(){
//         console.log("Card title");
//     }
//   )

//   document.querySelector(".card-content").addEventListener("click", 
//     function(){
//         console.log("Card content");
//     }
//   )
//   document.querySelector(".card").addEventListener("click", 
//     function(){
//         console.log("Card");
//     }
//   )   

//   document.querySelector(".col").addEventListener("click", 
//   function(){
//       console.log("col");
//   }
//   ) 
  
  //Event delegation 
//   const deleteItem = document.querySelector(".delete-item");
  
//   deleteItem.addEventListener("click", delItem);

document.body.addEventListener("click", delItemGd);

function delItemUgly(e){
    if(e.target.parentElement.className === "delete-item secondary-content"){ //Not ideal 
        console.log("delete-item");
    }
  }

  function delItemGd(e){
    if(e.target.parentElement.classList.contains("delete-item")){ //Much better  
        
        e.target.parentElement.parentElement.remove();
        console.log("delete-item");
    }
  }






















