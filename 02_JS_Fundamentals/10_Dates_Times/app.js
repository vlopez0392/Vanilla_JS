//Dates and Times 

//JS has the date object 
const today = new Date(); //By default returns today's date 
console.log("Type of data: " + typeof today + " Today's date: " + today);

// Declaring Date objects 
let birthday = new Date("03-10-1992");
console.log(birthday);

let preciseBirthday = new Date("03-10-1992 11:00:00");
console.log(preciseBirthday);

let simpleBirthday = new Date("March 10 1992");
console.log(simpleBirthday);

//Some useful getters
let day = today.getDay() + 1; //0-indexed!
console.log(day);

let month = today.getMonth() + 1; //0-indexed!
console.log(month);

let year = today.getFullYear();
console.log(year); //And so on...

//Getting a timestamp - Number of milliseconds elapsed from 01-01-1970 UTC
let time = today.getTime();

//Setting a Date object attributes
birthday.setMonth(4); //May 10 1992
console.log(birthday); 

