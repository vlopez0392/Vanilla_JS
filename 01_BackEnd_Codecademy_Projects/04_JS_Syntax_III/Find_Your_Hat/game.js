const fieldClass = require('./Field.js');

class Game{
    constructor(playerName){
        this.playerName = playerName;
    }

    newGame(){
        const prompt = require('prompt-sync')({sigint: true});
        let decision = prompt(`Would you like to play?  Y/N:`);
        decision = decision.toLowerCase();

        if(decision === 'y'){
            console.log(Game.printGameInstructions());
            console.log(Game.printGameOptions());
            let gameOption = prompt('Choose game mode: ')
            this.playGame(gameOption);

        }else if(decision === 'n'){
            console.log('Hope to see you soon!');
        }else{
            console.log("Invalid option! Please try again");
            this.newGame();
        }
    }

    playGame(gameOption){
        let gameField = [];
        switch(gameOption){
            case '1': //Not really random right now. Add generate field logic later.
                gameField = fieldClass.testField;
                fieldClass.Field.printField(gameField);
                break;
            case '2': //Also add this later.
                gameField = fieldClass.testField;
                break;
            default:
                console.log("Game option not found, please try again");
                Game.pressAnyKey();
                this.newGame();
        }
    }

    //Utility functions 
    static printGameInstructions(){
       return `****************************************************************\nFind my Hat!\nProgrammed by Vick\nRules:\n\n1)You lost your hat in a field! Find your hat! Your hat looks\nlike this '^'.\n2) Be careful and don't fall in any of the holes 'O'\nor step outside the field.\n****************************************************************`;
    }

    static printGameOptions(){
        return `1-Generate map of size 5x5\n2-Generate map of random size\n`
    }

    static pressAnyKey(){
        const prompt = require('prompt-sync')({sigint: true});
        const keyStroke = prompt('Press any key to start a new game' );

        if(keyStroke){
            console.clear();
        }
    }
} 