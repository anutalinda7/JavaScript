let size = 10;
const btn =  document.querySelector('button');
const liList = document.querySelectorAll('ul>li');

const showList = function(){
    size++;
    liList.forEach(function(liItem){
        if(liItem.style.display === ""){
            liItem.style.display = "block";
        }
        liItem.style.fontSize = `${size++}px`;
    })
}
btn.addEventListener('click', showList);