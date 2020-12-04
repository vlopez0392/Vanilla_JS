/*
GAME RULES: 
    -Players must guess a number between a min and a max
    -Players get a certain amount of guesses
    -Notify the player of guesses remaining
    -Notify the player of the correct answer if he/she looses.
    -Let the player choose to play again
*/

//Game values 

//Using a single let to define game values
let min = 1, 
    max = 10,
    winningNum = 2, //Must be random
    guessesLeft = 3;

//UI elements 
const UIgame = document.querySelector('#game'),
               minNum = document.querySelector('.min-num'), 
               maxNum = document.querySelector('.max-num'), 
               guessBtn = document.querySelector('#guess-btn'), 
               guessInput = document.querySelector('#guess-input'),
               message = document.querySelector('.message');

//Assign UI min and max 
minNum.textContent = min;
maxNum.textContent = max;
     
//Listen for guess 
guessBtn.addEventListener('click', () =>{
    let guess = parseInt(guessInput.value);

    //Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, color = 'red')
    }

    //Check if won
    if(guess === winningNum){

    //Disable input 
    guessInput.disabled = true;
    
    //Change border
    guessInput.style.borderColor = 'green';
    
    //Set message 
    setMessage(`${winningNum} is correct! YOU WIN!`, color = 'green')
    }else{
        
    }
} )




//Set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}
