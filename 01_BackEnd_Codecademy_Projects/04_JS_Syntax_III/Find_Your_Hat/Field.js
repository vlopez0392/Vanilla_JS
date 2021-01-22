let fieldElements = {
    hat:'^',
    hole:'O',
    fieldCharacter:'░',
    pathCharacter:'*',
}

const testField = [['*','░','░','░','O'],['░','░','░','O','░'],['O','░', '^','░','░'],['░','O','O','O','░'], ['░','O','░','O','░']];
class Field{
    constructor(field){
        if(Array.isArray(field) && Field.isValidFieldDim(field)){
            this.field = field;
        }else{
            console.log("Invalid input field! Generating our own field...")
            this.field = testField;
        }
    }

    updateField(field){
        Field.printField(field);
        const updatePrompt = require('prompt-sync')({sigint: true});
        let move = updatePrompt('Which way? ');
        let playing = true, numberOfMoves = 0, currPosition = [0,0], positionUpdate; //Default position for pathCharacter [0,0]
        
        while(playing){
            if(numberOfMoves === 0){
                numberOfMoves +=1;
            }else{
                console.log('Press W to go up, A to go left, S to go down and D to go right')
                move = updatePrompt('Which way? ');
                move = move.toLowerCase();
                numberOfMoves +=1;
            }
            
            if(move !== 'q'){
                 positionUpdate = this.movePathChar(move, currPosition);
                 
                 if(Field.tryPositionUpdate(positionUpdate, field)){ //Check if position update is within bounds
                    if(Field.checkPositionUpdate(currPosition,positionUpdate)){ //Check if valid move has happened
                        
                        field = this.drawThisBoard(field, positionUpdate, fieldElements.pathCharacter);
                        currPosition = positionUpdate;
                    }
                    console.clear()
                    Field.printField(field);
                 }
                 else{
                     console.log("Out of bounds! You lost!");
                     playing = false;
                 }
            }else{
                playing = false;
            }
        }
    };

    movePathChar(move, currPosition){
        move = move.toLowerCase();
        let [i,j] = currPosition, flagValidMove = true;

        switch(move){
            case 'w': //Move path character up
                i-=1;
                break;
            case 's': //Move path character down
                i+=1;
                break;
            case 'd': //Move path character right
                j+=1;
                break;
            case 'a': //Move path character left
                j-=1;
                break;
            default:
                console.log('This is not a valid move, please try again.');
                flagValidMove = false;
                break;
        };

        if(flagValidMove){ //If valid move, update position
            currPosition = [i,j];
        }
        return currPosition 
    };


    drawThisBoard(field, positionUpdate, character){
        let [i,j] = positionUpdate;
        field[i][j] = character;
        return field;
    }

    determineOutcome(positionUpdate, field){
        let [i,j] = positionUpdate, fieldPosition = field[i][j];

        if(Field.tryPositionUpdate(i, j, field)){                     // Move within field bounds
            if(fieldPosition === fieldElements.fieldCharacter){       // Moved to unexplored position
                return 'newPosition';
            }else if(fieldPosition === fieldElements.pathCharacter) { // Backtracked to previous position '*'
                return 'backtrack'; 
            }else if(fieldPosition === fieldElements.hat){            // Found the hat '^'
                return 'win'; 
            }else{
                return 'lost';                                        // Found a hole 'O'
            }
        }
        return 'lost'; //Out of bounds
    };

    //Utility functions
    static printField(field){
        const fieldDim1 = field.length;
        let fieldLine = '';

        for(let i=0; i < fieldDim1; i++){            
            field[i].forEach(fieldChar => {
                fieldLine += fieldChar;
            });
            console.log(fieldLine);
            fieldLine = '';
        }
    };

    static isValidFieldDim(field){
        const dim1 = field.length      //Number of subarray elements  
        const dim2 = field[0].length;  //Length of the first subarray and subsequent elements.

        if(dim1 <= 0){ //Handles call with no parameters.
            return false; 
        }else{
            for(let i = 1 ; i < dim1 ;i++){
                if(field[i].length !== dim2){
                    return false
                }
            }
            return true;
        }
    };

    //Checks if an update in position has happened.
    static checkPositionUpdate(currPosition, positionUpdate){
        let [i,j] = currPosition, [new_i,new_j] = positionUpdate

        if(i === new_i && j === new_j){
            return false; //No update in position
        }
        return true;
    }

    //Checks if new position is within field bounds.
    static tryPositionUpdate(positionUpdate,field){
        const dim1 = field.length, dim2 = field[0].length, [i,j] = positionUpdate; 
        if(i>=0 && i< dim1 && j>=0 && j<dim2){ 
            return true;
        }else{
            return false;
        }
    };
}

module.exports = {Field, testField, fieldElements};

///Working with user-input 

//1-Using the node built-in process and readline modules:

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // Requires a callback function - Remember node works asynchronously (Lot's of callbacks involved).
// readline.question('Who are you? \n', name => {
//     console.log(`Hey there ${name}`);
//     readline.close();}) //Lots of boiler-plate! See 2

//2-Using prompt-sync module - Easy alternative to 1 

// const prompt = require('prompt-sync')({signint:true});
// const name = prompt('What is your name? \n');
// console.log(`Hey there ${name}`);

