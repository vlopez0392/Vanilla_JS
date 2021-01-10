const fieldClass = require('./Field.js');

class Game{
    constructor(playerName){
        this.playerName = playerName;
    }

    newGame(){
        const promptNewGame = require('prompt-sync')({sigint: true});
        let decision = promptNewGame(`Do you want to play?  `);

        decision = decision.toLowerCase();

        if(decision === 'y'){
            console.log('Let\'s play!');
            if(fieldClass.field !== 'undefined'){
                fieldClass.Field.printField(fieldClass.Field.testField);
            }else{
                fieldClass.Field.printField(fieldClass.Field.field);
            }
        }else if(decision === 'n'){
            console.log('Hope to see you soon!')
        }else{
            console.log("Invalid option! Please try again");
            this.promptUser();
        }
    }
} 