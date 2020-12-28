/*  Mixed Message Generator 
*
*   Programmed by Vick!
*/ 

/*Constants*/
const question = "How are you feeling today?", 
form = document.getElementById('input-form'),
gallery = document.getElementById('smiley-gallery'),
inputFeeling = document.getElementById('input-feeling');

/*Variables*/
let userInput = '' 
par = document.querySelectorAll('p'), 
dispMsg = par[par.length-1]; //Selects the last paragraph


/*Event listeners*/
form.addEventListener("submit", displayUserFeeling); 
//inputFeeling.addEventListener('click', focusInput)


gallery.addEventListener('click', function(e){
    let targetId = e.target.id, targetClass = e.target.className;

    if(targetClass=== 'smiley'){
        displayUserFeeling(false, targetId)
    }
})

/*Helper functions*/
/*Returns the message associated with the smiley the user clicked*/ 
function getClickedUserFeeling(targetId){
    return switchFeeling(targetId, targetId);
}

/*Returns the message associated with the feeling input by the user*/
function getTypedUserFeeling(){
    let userInput = document.getElementById('input-feeling').value.toLowerCase(),
    msg = '';
    
    if(userInput !== ''){
         msg = switchFeeling(estimateFeeling(userInput), userInput);
    }
    return msg;
}

/*Estimates the current feeling of the user based on their input*/
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
    return false;
}

/*Returns a message to be displayed according to the feeling argument, also uses the input of the user to enhance interactivity*/
function switchFeeling(feeling, userInput){
    let dispMessage = '';

    switch(feeling){
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
            dispMessage = 'Seems you are not in the mood right now, will be here if you need me!'
            break;
        default:
            dispMessage = 'Sorry I don\'t understand that! :( Please try again!';
    }
    
    return dispMessage;
}

/*Displays a message based on the user's choice*/
function displayUserFeeling(typed = true, targetId = 'none'){
    let msg = '';
    typed? msg = getTypedUserFeeling(): msg = getClickedUserFeeling(targetId);

    if(msg === ''){
        dispMsg.textContent = 'You didn\'t write anything... it\'s ok! Please try again!';
    }else{
        dispMsg.textContent = msg; 
    }
}

/*Listens for selection*/
function playWithDisplay(element,onOff){
    const displayElement = document.getElementById(element);

    if(onOff){
        displayElement.style.display = 'block';
    }else{
        displayElement.style.display = 'none';
    }
}



