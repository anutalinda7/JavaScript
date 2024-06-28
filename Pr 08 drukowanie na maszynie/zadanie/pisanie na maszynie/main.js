

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']

const time = 500;
let wordNumber = 0;
let letterNumber = -20;

const showText = () => {
        if(letterNumber >= 0){
            spnText.textContent += txt[wordNumber][letterNumber]}
        letterNumber++
        if(letterNumber === txt[wordNumber].length){
             wordNumber++
             if(wordNumber === txt.length) return

                return setTimeout(() => {
                    letterNumber = -20
                spnText.textContent = ""
                showText()
        }, 50)
    }
    setTimeout(showText, 500)
    }



showText()


 const cursorAnimation = () => {
   spnCursor.classList.toggle("active");
 };
 setInterval(cursorAnimation, time);
 


