// Local and Session Storage 

/* - Data stored by Local storage will remain until it is manually cleared out.
   - Data stored by session storage will be deleted until the browser is closed or the session ends
   - API is the same for both cases
*/

// Set local storage item 
localStorage.setItem('name', 'John');
localStorage.setItem('age',  '30');

//Set session storage item 
sessionStorage.setItem('name', 'Beth'); 

//Remove from storage 
//localStorage.removeItem('name');

//Get from storage 
let name = localStorage.getItem('name');
let age  = localStorage.getItem('age');
console.log(name, age); //John, 30

//Clear storage 
//localStorage.clear();
//name = localStorage.getItem('name');
//age  = localStorage.getItem('age');
//console.log(name, age); //null,null


//Adding a task to our form and saving to local storage 
document.querySelector('form').addEventListener('submit', 
   function(e) {
      const task = document.getElementById('task').value;

      //Storing each task in an Array
      let tasks; 
      if(localStorage.getItem('tasks') === null){
         tasks = [];
      }else{
         tasks = JSON.parse(localStorage.getItem('tasks'));
      }

      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      alert('Task saved! ');

      e.preventDefault();
   }
)

const tasks = JSON.parse(localStorage.getItem("tasks"));
tasks.forEach(function(task){
   console.log(task);
});
