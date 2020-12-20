/*  Message generator 
*
*   Programmed by Vick!
*/ 

/*Relevant constants*/
const question = "How are you feeling today?", form = document.getElementById('input-form');

/*Input variables*/
let par = document.querySelectorAll('p'), disp = par[par.length-1];

/* Data */
/*Output some data to the console*/
form.addEventListener("submit", displayUserFeeling); 

/*Helper functions*/
function getUserFeeling(){
    let userInput = document.getElementById('input-feeling').value.toLowerCase(), dispMessage = ''
    if(userInput !== ''){
        switch(estimateFeeling(userInput)){
            case 'happy':
                dispMessage = `I\'m glad you are feeling ${userInput}.`;
                break;
            case 'ok':
                dispMessage = 'Care for a joke? Or would you like to be cheered up?';
                break;
            case 'sad':
                dispMessage = 'Here goes a cheerful message: Never give up on your dreams, be courageous!';    
                break;
            case 'angry':
                dispMessage = 'Seems you are not in the mood right now, will still be here if you need me!'
                break;
            default:
                dispMessage = 'Sorry I don\'t understand that! :( Please try again!';
        }
    }
    return dispMessage;
}

function estimateFeeling(userInput){
    const feelings = {
        ok: ['ok', 'fine','well', 'all right', 'just fine', 'good'],
        sad: ['sad','depressed', 'down','unhappy','miserable', 'upset'],
        angry: ['angry', 'furious', 'annoyed', 'irate', 'displeased'],
        happy: ['happy','content','great','excellent', 'joyful'],
    }

    for(let feeling in feelings){
        if(feelings[feeling].includes(userInput)){
            return feeling;
        }
    }
    return false;;
}

function displayUserFeeling(e){
    const dispMsg = getUserFeeling();
    if(dispMsg === ''){
        disp.textContent = 'You didn\'t write anything... it\'s ok! Please try again!'
    }else{
        disp.textContent = dispMsg;
    }
    e.preventDefault();
}

/*Listen for selection*/
function playWithDisplay(element,onOff){
    const displayElement = document.getElementById(element);

    if(onOff){
        displayElement.style.display = 'block';
    }else{
        displayElement.style.display = 'none';
    }
}



