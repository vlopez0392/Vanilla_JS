//Today's Forecast in Kelvin
const kelvin = 273+25;

//Today's Forecast in Celsius
let celsius = kelvin - 273;

//Today's Forecast in Farenheit  
let farenheit = Math.floor(celsius*(9/5) + 32);
console.log(`The temperature is ${farenheit} degrees Farenheit`);

//The Newton Scale
let newton = Math.floor(celsius*(33/100));
console.log(newton);
