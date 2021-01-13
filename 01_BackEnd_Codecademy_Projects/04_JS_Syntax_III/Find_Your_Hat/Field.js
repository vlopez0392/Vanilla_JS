const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const testField = [['*','░','░','░','O'],['░','░','░','O','░'],['O','░', '^','░','░'],['░','O','O','O','░'], ['░','O','░','O','░']];

class Field{
    //OK
    constructor(field){
        if(Array.isArray(field) && Field.checkValidFieldDim(field)){
            this.field = field;
        }else{
            console.log("Invalid input field! Generating our own field...")
            this.field = testField;
        }
    }

    //OK
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
    }

    static checkValidFieldDim(field){
        const dim1 = field.length      //Number of subarray elements  
        const dim2 = field[0].length;  //Length of the first subarray and subsequent elements.

        if(dim1 <= 0){ //Handles call with no parameters.
            return false; 
        }else{
            let valid = 1;
            for(let i = 1 ; i < dim1 ;i++){
                if(field[i].length !== dim2){
                    return false
                }
            valid+=1;
            }
            if(valid === dim1){ //All subarrays have the same length and thus the map is fully rectangular. 
                Field.printField(field);
                console.log('Input field has valid dimensions:')
                console.log(`Horizontal length of field:   ${dim2} units \nVertical length of the field: ${dim1} units`);
                return true;
            }
        }
        return false;
    }

    updateField(field){
        Field.printField(field);
        const updatePrompt = require('prompt-sync')({sigint: true});
        let move = updatePrompt('Which way? ');
        let playing = true, numberOfMoves = 0, currPosition = [0,0], updatePosition; //Default position for pathCharacter
        
        while(playing){
            if(numberOfMoves === 0){
                numberOfMoves +=1;
            }else{
                move = updatePrompt('Which way? ');
                move = move.toLowerCase();
                numberOfMoves +=1;
            }
            
            if(move !== 'q'){
                 updatePosition = this.movePathChar(field, move, currPosition);
                 currPosition = updatePosition[0];
                 field = updatePosition[1];
                
                 //console.clear()
                 Field.printField(field);
            }else{
                playing = false;
            }
        }
    }   
    
    movePathChar(field, move, currPosition){
        move = move.toLowerCase();
        let i = currPosition[0], j = currPosition[1];

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
                break;
        };

        if(Field.tryPositionUpdate(i, j, field)){
            field[i][j] = pathCharacter;
            currPosition = [i,j];
        }
        return [currPosition,field];
    }

    static tryPositionUpdate(i,j,field){
        let dim1 = field.length, dim2 = field[0].length; 
        if(i>=0 && i< dim1 && j>=0 && j<dim2){ 
            return true;
        }else{
            console.log("Out of bounds!")
            return false;
        }
    }
}

module.exports = {Field, testField};

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

