// DOM selector for multiple elements - Return HTML Collections or node lists 
// Can be easily converted to arrays such that we can use array methods on them. 

//1-document.getELementByClassName()
const items = document.getElementsByClassName('collection-item');
console.log(items); 
console.log(items[0])

//We may access the elements of the HTML collection as if they were in an array
items[0].style.color = "green";
items[3].textContent = "Hello";

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

//2-document.getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis); 
console.log(lis[0])

//We may access the elements of the HTML collection as if they were in an array
lis[0].style.color = "green";
lis[3].textContent = "Hello";

//Converting HTML collections to Array
lis = Array.from(lis);
lis.reverse();
console.log(lis);

lis.forEach(function(li, index){
    li.textContent = `Hello ${index}` ;
})

//3-document.querySelectorAll() - Similar to 1 and 2, however returns a nodeList and does not require conversion to Array to use its methods. 
const all = document.querySelectorAll("ul.collection li.collection-item")
console.log(all);

all.forEach(function(item, index){
    item.textContent = `Hello ${index+1}` ;
})

//A nice example!
const liOdd = document.querySelectorAll("li:nth-child(odd)")
const liEven = document.querySelectorAll("li:nth-child(even)")
liOdd.forEach(function(li, index){
    li.style.background = "#ccc";
})

for(let i = 0; i <liEven.length; i++){
    liEven[i].style.background = "#f4f4f4";
};




