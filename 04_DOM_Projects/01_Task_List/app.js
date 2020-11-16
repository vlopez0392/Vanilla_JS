//Define UI variables 
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//Load all event listeners 
loadEventListeners();

function loadEventListeners(){
    //Add task event
    form.addEventListener("submit", addTask)
    
    //Remove task event
    taskList.addEventListener("click", removeTask)

    //Clear task events 
    clearBtn.addEventListener("click", clearTasks)

    //Filter task
    filter.addEventListener("keyup", filterTasks);

    //DOM Load event
    document.addEventListener("DOMContentLoaded", getTasks); 
} 

//Add task 
function addTask(e){
    if(taskInput.value == ""){
        alert("Please add a task")
    }else{
        //Create li element 
        const li = document.createElement("li");

        //Add class
        li.className = "collection-item"; 

        //Create text node and append to li
        li.appendChild(document.createTextNode(taskInput.value));

        //Create new link element 
        const link = document.createElement("a");
        link.className = "delete-item secondary-content"; //Secondary content class -> Places the delete icon to the right
        link.innerHTML = "<i class = 'fa fa-remove'></i>";
        li.appendChild(link);
        
        //Append li to ui 
        taskList.appendChild(li);

        //Store in local storage
        storeTaskLocalStorage(taskInput.value);

        //Clear input 
        taskInput.value = "";
    }
    e.preventDefault();
}

//Remove task 
function removeTask(e){
    if(e.target.parentElement.classList.contains("delete-item")){
        if(confirm("Are you sure you want to delete this task?")){
            e.target.parentElement.parentElement.remove();
        
        //Remove tasks from local storage 
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
    e.preventDefault();
}

//Clear Tasks
function clearTasks(){
    //Two paths 

    //First Path - Suboptimal
    //taskList.innerHTML = "";

    //Second Path - Optimal
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }


    clearTasksFromLocalStorage();
}

//Filter tasks 
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll(".collection-item").forEach( //Remember that querySelectorAll returns a Nodelist which may be looped
        function(task){
            const item = task.firstChild.textContent;

            if(item.toLocaleLowerCase().indexOf(text) !== -1){
                task.style.display = "block";
            }else{
                task.style.display = "none";
            }
        }
    );
}

//Persist to local storage 
//Store Task 
function storeTaskLocalStorage(task){
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Get tasks from local storage
function getTasks(){
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }

    tasks.forEach(function(task){
        //Create li element 
        const li = document.createElement("li");

        //Add class
        li.className = "collection-item"; 

        //Create text node and append to li
        li.appendChild(document.createTextNode(task));

        //Create new link element 
        const link = document.createElement("a");
        link.className = "delete-item secondary-content"; //Secondary content class -> Places the delete icon to the right
        link.innerHTML = "<i class = 'fa fa-remove'></i>";
        li.appendChild(link);
        
        //Append li to ui 
        taskList.appendChild(li);  

    });
}

//Remove task from local storage 
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }

    tasks.forEach(
        function(task, index){
            if(taskItem.textContent === task){
                    tasks.splice(index, 1);
            }
        }
    )

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Clear tasks from local storage 
function clearTasksFromLocalStorage(){
    localStorage.clear();
}



















