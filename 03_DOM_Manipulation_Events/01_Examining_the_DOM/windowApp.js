let innerWidth, innerHeight, 
form = document.getElementById("form");

//Get window inner dimensions
form.addEventListener('submit', function(e){
    
    switch(e.submitter.className){
        case "windowDim":
            innerWidth = document.querySelector(".innerWidth p").textContent = window.innerWidth;
            innerHeight = document.querySelector(".innerHeight p").textContent = window.innerHeight;
            break;
        case "alert":
            window.alert("You have pressed the alert button!")
    }

    // if(e.submitter.className == "windowDim"){
    // innerWidth = document.querySelector(".innerWidth p").textContent = window.innerWidth;
    // innerHeight = document.querySelector(".innerHeight p").textContent = window.innerHeight;
    // }
    // else if(e.submitter.className == "alert"){
    //     window.alert("You have pressed the alert button!")
    // }
})

