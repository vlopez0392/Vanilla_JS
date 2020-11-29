//Runner registration app - Early registered adults (>18) race at 9:30 am. Other adults race at 11:00 am.
//                        - Youngsters at 12:30 pm. 18yr olds must go to the registration desk. 
let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 27;

const yesNo = registeredEarly? 'Yes':'No';
console.log(`Runner age: ${runnerAge} Registered early? ${yesNo}`);

if(runnerAge>18 && registeredEarly){
  raceNumber += 1000;
}

if(raceNumber>1000){
  console.log(`Race number: ${raceNumber} || Race time: 9:30 am.`);
}else if(runnerAge > 18){
    console.log(`Race number: ${raceNumber} || Race time: 11:00 am.`);
}else if(runnerAge === 18){
  console.log('Please go to the registration desk.');
}
  else{console.log(`Race number: ${raceNumber} || Race time: 12:30 pm.`);
}

