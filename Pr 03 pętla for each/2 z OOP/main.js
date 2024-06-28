let liSize = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button"); 
    const btnReset = document.createElement("button");
    btn.textContent = 'przycisk';
    btnReset.textContent = 'Wyczyść';
    btn.style.fontSize = '28px';
    btnReset.style.fontSize = '28px';
    document.body.appendChild(btn); 
    document.body.appendChild(btnReset);

    const ul = document.createElement("ul");
    document.body.appendChild(ul);
    ul.style.fontSize = '22px';
    ul.style.listStyle = "none";

    btn.addEventListener('click', createLiElements);
    btnReset.addEventListener('click', cleanList);
}

const createLiElements = () => {
    for(let i = 0; i < 10; i++){
        const li = document.createElement('li');
        li.style.fontSize = `${liSize++}px`;
        li.textContent = `Element nr ${orderElement++}`;
        document.querySelector('ul').appendChild(li);
    }
}

const cleanList = () => {
    document.querySelector('ul').textContent = "";
    liSize = 10;
    orderElement = 1;
}

init()