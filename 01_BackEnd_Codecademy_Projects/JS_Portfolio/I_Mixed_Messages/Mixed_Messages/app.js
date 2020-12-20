/*  Mixed Message Generator 
*
*   Programmed by Vick!
*/ 

/*Constants*/
const question = "How are you feeling today?", 
form = document.getElementById('input-form'),
gallery = document.getElementById('smiley-gallery');


/*Variables*/
let userInput = '' 
par = document.querySelectorAll('p'), 
dispMsg = par[par.length-1]; //Selects the last paragraph


/*Event listeners*/
form.addEventListener("submit", displayUserFeeling); 

gallery.addEventListener('click', function(e){
    let targetId = e.target.id, targetClass = e.target.className;

    if(targetClass=== 'smiley'){
        displayUserFeeling(false, targetId)
    }
})

/*Helper functions*/
function getClickedUserFeeling(targetId){
    return switchFeeling(targetId, targetId);
}

function getTypedUserFeeling(){
    let userInput = document.getElementById('input-feeling').value.toLowerCase(),
    msg = '';
    
    if(userInput !== ''){
         msg = switchFeeling(estimateFeeling(userInput), userInput);
    }
    return msg;
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
    return false;
}

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

function displayUserFeeling(typed = true, targetId = 'none'){
    let msg = '';
    typed? msg = getTypedUserFeeling(): msg = getClickedUserFeeling(targetId);
    console.log(msg);

    if(msg === ''){
        dispMsg.textContent = 'You didn\'t write anything... it\'s ok! Please try again!';
    }else{
        dispMsg.textContent = msg; 
    }
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



