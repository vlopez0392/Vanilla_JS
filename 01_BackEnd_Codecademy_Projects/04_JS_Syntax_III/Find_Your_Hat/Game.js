const fieldClass = require('./Field.js');

class Game{
    constructor(playerName){
        this.playerName = playerName;
    }
    
    newGame(){
        console.clear();
        Game.printGameInstructions();
        const prompt = require('prompt-sync')({sigint: true});
        let decision = prompt(`Would you like to play?  Y/N: `);
        decision = decision.toLowerCase();

        if(decision === 'y'){
            Game.printGameOptions();
            let gameOption = prompt('Choose game mode: ')
            this.playGame(gameOption);

        }else if(decision === 'n'){
            console.clear();
            console.log('Hope to see you soon!');
        }else{
            console.log("Invalid option! Please try again");
            if(Game.validKeyPress()){
                this.newGame();
            }
        }
    }

    playGame(gameOption){
        let gameField;
        switch(gameOption){
            case '1': //Not really random right now. Add generate field logic later.
                gameField = fieldClass.testField;
                break;
            case '2': //Also add this later.
                gameField = fieldClass.testField;
                break;
            default:
                console.log("Game option not found! Please try again");
                if(Game.validKeyPress()){
                    this.newGame();
                }
        }
    }

    //Utility functions 
    static printGameInstructions(){
       console.log(`\n****************************************************************\nFind my Hat!\nProgrammed by Vick\nRules:\n\n1)You lost your hat in a field! Find your hat! Your hat looks\nlike this '^'.\n2) Be careful and don't fall in any of the holes 'O'\nor step outside the field.\n****************************************************************`);
    }

    static printGameOptions(){
        console.log(`\n1-Generate map of size 5x5\n2-Generate map of random size\n`);
    }

    static validKeyPress(){
        const prompt = require('prompt-sync')({sigint: true});
        const keyStroke = prompt('Press any key to start a new game... ' );

        if(keyStroke || !keyStroke){
            return true;
        }
        return false;
    }
} 