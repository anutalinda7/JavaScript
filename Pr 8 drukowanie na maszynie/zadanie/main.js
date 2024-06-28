// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

// const spnText = document.querySelector(".text");
// const spnCursor = document.querySelector(".cursor");
// const txt = ["Cześć", "Kocham cie", "Jesteś super"];

// const time = 500;
// let activeLetter = -25;
// let activeText = 0;

// // Implementacja
// const addLetter = () => {
//   if(activeLetter >= 0){
//   spnText.textContent += txt[activeText][activeLetter];}
//   activeLetter++;
//   if(activeLetter === txt[activeText].length){

//     activeText++;
//     if(activeText === txt.length) return;

//     return setTimeout(() => {
//       activeLetter = -25;
//       spnText.textContent = "";
//       addLetter();
//     }, 5000)
//   }
//   setTimeout(addLetter, 10);

// };
// addLetter();
// const cursorAnimation = () => {
//   spnCursor.classList.toggle("active");
// };
// setInterval(cursorAnimation, time);






const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']

const time = 500
let activeLetter = -25;
let activeText = 0

 function addLetter () {
    if (activeLetter <= 0){
    spnText.textContent += txt[activeText][activeLetter]
    activeLetter++;
    console.log(activeLetter, activeText)
    }
    if (activeLetter === txt[activeText].length){
    activeText++
        if(activeText === txt.length) return;
        return setTimeout(() => {
            activeLetter = -25;
            spnText.textContent = "";
            addLetter();
          }, 5000)
    }
    setTimeout(addLetter, 10);  
 }




addLetter();


const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, time);