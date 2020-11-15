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








