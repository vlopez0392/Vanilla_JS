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
let min = 15, 
    max = 16,
    winningNum = getRandomNum(min,max), //Must be random
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

//Play again event listener 
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})
     
//Listen for guess 
guessBtn.addEventListener('click', () =>{
    let guess = parseInt(guessInput.value);

    //Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, color = 'red')
    }

    //Check if won
    if(guess === winningNum){
    //Game over, won
        gameOver(true, `${winningNum} is correct! YOU WIN!`)

    }else{
        guessesLeft -= 1;
        if(guessesLeft === 0){
            //Game over, lost
            gameOver(false, `Game Over! YOU LOST! The correct number was ${winningNum}`)
            
        }else{
            //Game continues - answer wrong 
            guessInput.style.borderColor = 'red';
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, color = 'red')
        }
    }
} )

//Helper functions 
//Game over 
function gameOver(won, msg){

    let color; 
    won? color = 'green': color ='red'

    //Disable input 
    guessInput.disabled = true;

    //Change border
    guessInput.style.borderColor = color;
    
    //Set message 
    setMessage(msg, color)

    //Play again functionality 
    guessBtn.value = 'Play Again'; 
    guessBtn.className += 'play-again';
}

function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

//Set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}
