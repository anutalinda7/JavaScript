import RenderToDoList from "./renderToDoList.js";
import AddTask from "./addTask.js";
import DeleteTask from "./deteleTask.js";




class Game {
    constructor() {
    // // this.render = new RenderToDoList();
    // // this.add = new AddTask();
    // // this.deleteTsk = new DeleteTask(); 
    // console.log('cos')
    // console.log(this.render, this.add, this.deleteTsk)

    this.input = document.querySelector('input')
    this.form = document.querySelector('form')
    this.span = document.querySelector('span')
    this.ul = document.querySelector('ul')
    this.liList = document.getElementsByClassName('task')

    this.toDoList = []
    this.deleteTask()
    this.add()
    this.render

    inputSearch.addEventListener('input', search)
    form.addEventListener('submit', addTasks)
    

    }
    deleteTask (e) {
        e.target.parentNode.remove();
        span.textContent = liList.length
    
    //dla tabeli
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index,1);
    
    renderToDoList();
}
addTasks (e) {
    
    e.preventDefault();
    const text = input.value;


    if (text === "") return
    console.log(text)
    const task = document.createElement('li');
    task.className = "task"
    task.innerHTML = text + "    <button> USUŃ </button>"
       //tworzenie tabeli
    toDoList.push(task);
    renderToDoList();

    ul.appendChild(task);
    input.value = ""
    span.textContent = liList.length
    task.querySelector('button').addEventListener('click', deleteTask)
}

renderToDoList () {
    ul.textContent = "";
    toDoList.forEach((taskToDo, keyElement) => { 
        taskToDo.dataset.key = keyElement;
        ul.appendChild(taskToDo)
    })
}

const  search = (e) => {
   
    let searchText = e.target.value;
    let filteredList = [...toDoList]
    filteredList = filteredList.filter(li => li.textContent.includes(searchText));
    ul.textContent = ""
    filteredList.forEach(li => ul.appendChild(li));
    
    }
}



    
    function 
    
    function   renderToDoList () {
        ul.textContent = "";
        toDoList.forEach((taskToDo, keyElement) => { 
            taskToDo.dataset.key = keyElement;
            ul.appendChild(taskToDo)
        })
    }
    
    const  search = (e) => {
       
        let searchText = e.target.value;
        let filteredList = [...toDoList]
        filteredList = filteredList.filter(li => li.textContent.includes(searchText));
        ul.textContent = ""
        filteredList.forEach(li => ul.appendChild(li));
        
        }
    
    
    
    