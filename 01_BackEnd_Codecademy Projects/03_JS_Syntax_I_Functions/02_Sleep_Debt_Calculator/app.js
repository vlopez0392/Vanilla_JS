//Sleep debt calculator
/*In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.
* The program will determine the actual and ideal hours of sleep for each night of the last week.
* Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/ 

//Getting hours of sleep per day 
function getSleepHours(day){
    day = day.toLowerCase();
    switch(day){
      case 'monday':
        return 6;
      case 'tuesday':
        return 9;
      case 'wednesday':
        return 9;
      case 'thursday':
        return 5;
      case 'friday':
        return 9;
      case 'saturday':
        return 9;
      case 'sunday':
        return 9;
      default:
        return 'That\'s not a valid day!'
        break;
    }
  }

//Testing the get hours of sleep function
//console.log(getSleepHours('Monday'));
//console.log(getSleepHours('Sunday'));
//console.log(getSleepHours('Vickday'));

//Get total sleep hours (actual)
function getActualSleepHours(){
    days = ['Monday', 'Tuesday', 'Wednesday',   'Thursday', 'Friday', 'Saturday', 'Sunday'];
    total = 0;
    days.forEach(function(day){
        total += getSleepHours(day);
    })

    return total;
}
//console.log(getActualSleepHours());

//Get total sleep hours (ideal);
function getIdealSleepHours(idealHours = 6){
    return idealHours*7;
}

//console.log(getIdealSleepHours());

//Calculate sleep debt 
function calculateSleepDebt(idealHours = 6){
  actualSleepHours = getActualSleepHours();
  idealSleepHours  = getIdealSleepHours(idealHours);
  overUnderSlept = Math.abs(actualSleepHours-idealSleepHours);

  console.log(`Hours you slept this week: ${actualSleepHours} hours. 
Ideal number of hours of sleep: ${idealSleepHours} hours`)

  if(actualSleepHours === idealSleepHours){
    console.log('Perfect! You have achieved your weekly goal!')
  }else if(actualSleepHours > idealSleepHours){
    console.log(`Hours overslept: ${overUnderSlept}`)  
    console.log('You are sleeping more than needed!')
  }else{
    console.log(`Sleep debt: ${overUnderSlept}`)
    console.log('Aren\'t you tired? You should get more sleep. ')
  }
}

calculateSleepDebt(7);