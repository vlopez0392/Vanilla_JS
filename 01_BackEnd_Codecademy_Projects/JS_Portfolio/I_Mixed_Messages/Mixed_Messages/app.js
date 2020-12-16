/*  Message generator 
*
*   Programmed by Vick!
*/ 

/*Input variables*/
const question = "How are you feeling today?", form = document.getElementById('input-form'); 
let par = document.querySelectorAll('p'), disp = par[par.length-1];

/* Data */
/*Output some data to the console*/
form.addEventListener("submit", displayUserFeeling); 

/*Temporary helper function*/
function getUserFeeling(){
    let userInput = document.getElementById('feeling').value.toLowerCase(), dispMessage = ''
    if(userInput !== ''){
        switch(userInput){
            case 'happy':
                dispMessage = 'I\'m glad you are feeling happy!';
                break;
            case 'ok':
                dispMessage = 'Care for a joke? Or would you like to be cheered up?';
                break;
            case 'sad':
                dispMessage = 'Here goes a cheerful message: Never give up on your dreams, be courageous!';    
                break;
            default:
                dispMessage = 'Sorry I can\'t relate to that one now :(';
        }
    }


    return dispMessage;
}

function displayUserFeeling(e){
    const dispMsg = getUserFeeling();
    console.log(dispMsg);
    if(dispMsg === ''){
        disp.textContent = 'Please write something... it\'s ok! Please try again!'
    }else{
        disp.textContent = dispMsg;
    }
    e.preventDefault();
}




