
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const testField = [['*','░','░','░','░'],['░','O','░','^','░'],['░','░', '^','░','░']];

class Field{
    constructor(field){
        if(Array.isArray(field) && checkValidFieldDim(field)){
            this.field = field;
        }else{
            console.log("Invalid input field! Generating our own field...")
            this.field = testField;
        }
    }

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
        const dim1  = field.length     //Number of subarray elements  
        const dim2 = field[0].length;  //Length of the first subarray element

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

    static updateField(field){ //Develop this logic later!
        Field.printField(field);

        const updatePrompt = require('prompt-sync')({sigint: true});
        let decision = updatePrompt('Which way? ');
        decision = decision.toLowerCase();
        
        let lineField = field[0];
        let deciding = true;
        let numberOfMoves
        let i = 0, j =0;
        
        while(deciding){
            if(numberOfMoves === 0){
                numberOfMoves +=1;
            }else{
                decision = updatePrompt('Which way? ');
                console.log(decision);
                decision = decision.toLowerCase();
                numberOfMoves +=1;
            }

            if(decision === 'l'){
                j = j+1;
                field[i][j] = pathCharacter;
                
            }else if( decision === 'q' || decision === 'quit'){
                deciding = false;
            }

            console.clear()
            Field.printField(field);
            console.log(decision);
        }///Going left for now only
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

