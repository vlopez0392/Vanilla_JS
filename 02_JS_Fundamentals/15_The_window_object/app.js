//The window object 
//In client side JS, the window or the browser is the global environment. 

//Window methods objects and properties 

//window.console.log(123) //Fully specified name of the console.log method() 

//Alert - A pop-up 
// window.alert("Hello World"); 

//Prompt - Similar to alert but takes an input 
// const input = prompt(); 
// alert(input);

//Confirm - Used often when deleting something - Makes sure that a corret decision is made
// if(confirm("Are you sure?")){
//     console.log('Yes');
// }else{
//     console.log('No');
// }

let val; 

//Outer height and width 
val = window.outerWidth;
val = window.outerHeight;

//Inner height and width 
val = window.innerWidth;
val = window.innerHeight;

//Scroll points - Indicates your position from the viewport's origin
let scr  = window.scrollY;
//console.log(scr);

//Location object

val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;

//Redirect 
//window.location.href = 'http://google.com'

//Reload
//window.location.reload();

//History object 
//window.history.go(0);

val = window.history.length;

//Navigator object - Data related to the navigator (browser)
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val); 