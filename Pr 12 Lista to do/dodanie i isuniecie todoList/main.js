const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const toDoListLength = document.getElementsByClassName('task');
const input = document.querySelector('input');
const toDoList = [];

function deleteLiElement(e) {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    taskNumber.textContent = toDoListLength.length;

    renderList();
}

function addTask(e) {
    e.preventDefault();
    const liTask = input.value;
    if (liTask === '') return;
    const liElement = document.createElement('li');
    liElement.className = 'task';
    liElement.innerHTML = liTask + '<button>Coś</button>';
    toDoList.push(liElement);
    renderList();

    ul.appendChild(liElement);
    input.value = '';
    taskNumber.textContent = toDoListLength.length;
    liElement
        .querySelector('button')
        .addEventListener('click', deleteLiElement);
}

const renderList = () => {
    ul.textContent = '';
    toDoList.forEach((todoElement, key) => {
        todoElement.dataset.key = key;
        ul.appendChild(todoElement);
    });
};

form.addEventListener('submit', addTask);
