

const input = document.querySelector('input')
const ul = document.querySelector('ul')
const liList =document.querySelectorAll('li')

const listToDo = (e) => {
let searchText = e.target.value.toLowerCase();
let list = [...liList]
list = list.filter(li => li.textContent.toLowerCase().includes(searchText))
console.log(list)
ul.textContent = ""
list.forEach(li => ul.appendChild(li))
}


input.addEventListener('input', listToDo)