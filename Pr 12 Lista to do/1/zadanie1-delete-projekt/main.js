


const todoList = document.querySelectorAll('button[data-key]');
function deleteToDo (e) {
    e.target.parentNode.style.textDecoration = "line-through";
    e.target.remove();

}

todoList.forEach(todo => todo.addEventListener('click', deleteToDo))