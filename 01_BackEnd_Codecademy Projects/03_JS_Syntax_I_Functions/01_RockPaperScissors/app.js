//Rock paper scissors 
//Get user input 
const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper'){
        return userInput;
    }
    return 'I can\'t play with that!';
}

//Testing multiple valid inputs and capitalizations
//console.log(getUserChoice('rock')); 
//console.log(getUserChoice('PaPer'));
//console.log(getUserChoice('SCISSORS'));

//Wrong input
//console.log(getUserChoice('spock'));

//Get computer input 

function getComputerChoice(){
    const decision = Math.floor(Math.random()*3);
    switch(decision){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            break;
    }
};

//Testing computer choice
//console.log(getComputerChoice());

//Declaring a winner
function declareWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
        return 'tie';
    }
    
    //There are better ways to do this!
    if(userChoice === 'paper'){
        if(computerChoice === 'rock'){
            return 'Player Wins!';
        }else{
            return 'You lose! Computer wins!'
        }
    }

    if(userChoice === 'rock'){
        if(computerChoice === 'scissors'){
            return 'Player Wins!';
        }else{
            return 'You lose! Computer wins!'
        }
    }

    if(userChoice === 'scissors'){
        if(computerChoice === 'paper'){
            return 'Player Wins!';
        }else{
            return 'You lose! Computer wins!'
        }
    }
}

//Play the game!
function playGame(){
    const userChoice = getUserChoice('Paper');
    const computerChoice = getComputerChoice();
    const winner = declareWinner(userChoice,computerChoice)

    console.log(`User's choice: ${userChoice} , Computer's choice: ${computerChoice}, WINNER: ${winner}`);
}

playGame();
