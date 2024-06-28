const input = document.querySelector('input')
const form = document.querySelector('form')
const span = document.querySelector('span')
const ul = document.querySelector('ul')
const liList = document.getElementsByClassName('task')

const inputSearch = document.createElement('input')
inputSearch.style.marginLeft = '50px' 
document.body.appendChild(inputSearch)


const toDoList = []


function deleteTask (e) {
e.target.parentNode.remove();
span.textContent = liList.length

//dla tablicy
const index = e.target.parentNode.dataset.key;
toDoList.splice(index,1);

renderToDoList();
}

function addTasks (e) {

    e.preventDefault();
    const text = input.value;


    if (text === "") return
    console.log(text)
    const task = document.createElement('li');
    task.className = "task"
    task.innerHTML = text + "    <button> USUŃ </button>"
    
    toDoList.push(task);
    renderToDoList();

    ul.appendChild(task);
    input.value = ""
    span.textContent = liList.length
    task.querySelector('button').addEventListener('click', deleteTask)
}

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


inputSearch.addEventListener('input', search)
form.addEventListener('submit', addTasks)

