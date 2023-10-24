import Task from "./Task.js";


const listElements = []
let todolist = document.querySelector("#result")
let sortedTasks = []


const addTask = document.querySelector("#addTask")
let taskCounter = 0;


addTask.addEventListener('submit', (event) => {
    event.preventDefault()
    let newTask = new Task(
        document.querySelector("input#whatToDo").value,
        document.querySelector("input#deadline").value
    )
    listElements.push(newTask)
    taskCounter++;
    
    //for (const task of listElements){
    //    console.log(listElements)
    //}


    //do date
    sortedTasks = listElements.sort((a, b) =>{
        return a.deadline - b.deadline
    })
    console.log(sortedTasks);

    



    


    sortedTasks.map(task  => { 
        const newTr = document.createElement("tr")
        const liWhatToDo = document.createElement("td")
        liWhatToDo.textContent = task.whatToDo
        const liDeadline = document.createElement("td")
        liDeadline.textContent = task.deadline 
        newTr.appendChild(liWhatToDo);
        newTr.appendChild(liDeadline);
        return newTr
    }).forEach(trElement => {

        let elem  = document.getElementById("addTask")
        if (elem !== null) {
            elem.remove
        }
        
        //trElement = !null ?? trElement.remove
        document.querySelector("#result").appendChild(trElement)
    })
})





    
    
    



