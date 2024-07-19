const spnText = document.querySelector('.text');
const cursor = document.querySelector('.cursor');

let text = 'Lorem ipsum dolor sit amet con optio? KONIEC';
let number = 0;
typeText = () => {
    spnText.textContent += text[number++];
    if (number === text.length) clearInterval(finishTyping);
};
cursorAnimation = () => {
    cursor.classList.toggle('active');
};

const finishTyping = setInterval(typeText, 50);
setInterval(cursorAnimation, 500);
