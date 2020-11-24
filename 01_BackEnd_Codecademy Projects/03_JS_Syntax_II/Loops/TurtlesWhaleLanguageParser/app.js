/*
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

    There are no consonants. Only vowels excluding “y”.
    The u‘s and e‘s are extra long, so we must double them in our program.

Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean. 
*/

//let input = 'turtles and whales both live in the blue sea';

let input =  'turpentine and turtles';
const vowels = ['a','e','i','o','u'];
let resultsArray = [];

for(let i = 0 ; i < input.length ; i++){
  for(let vowel = 0 ; vowel < vowels.length ; vowel++){
    let isWhaleTalk = input[i]===vowels[vowel]?true:false;
    if(isWhaleTalk){
      resultsArray.push(input[i]);  
    }
  }

  if(input[i] === 'e' || input[i] ==='u'){
    resultsArray.push(input[i]);
  }
}
console.log(input);
console.log(resultsArray.join('').toUpperCase());

