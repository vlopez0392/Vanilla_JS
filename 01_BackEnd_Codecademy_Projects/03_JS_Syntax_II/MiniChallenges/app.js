/*
Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0

*/

function subLength(str, char){
    if(str.includes(char)){
      let charCount = 0;
      for(let i = 0; i < str.length; i++){
        if(str[i] === char){
          charCount ++;
        }
      }
  
      if(charCount != 2){
        return 0;
      }
      return str.lastIndexOf(char) - str.indexOf(char) + 1;

    }else{
      return 0;
    }
  }

console.log(subLength('abismal','a')); // returns 6
console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0

/*
Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

Examples:

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'

*/

let myGroceries = [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}];

const groceries = (groceryArray) => {
  if(groceryArray.length === 1){
    return groceryArray[0].item;
  }else{
    let output = '';
    
    groceryArray.forEach((grocery, idx) => {
      if(idx === 0){
        output = groceryArray[idx].item; 
      }else{
        if((idx+1) != groceryArray.length){
          output = output.concat(`, ${groceryArray[idx].item}`);
        }else{
          output = output.concat(` and ${groceryArray[idx].item}`);
        }
      }
  })
    return output;
  }
}

console.log(groceries(myGroceries))

myGroceries = [{item: 'Cheese Balls'}];
console.log(groceries(myGroceries));


