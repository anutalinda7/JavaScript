class Typing {
    constructor(time, wordNumber = 0, letterNumber = 0){
        this.time = time;
        this.wordNumber = wordNumber;
        this.letterNumber = letterNumber
        this.text = ['tekst1', 'tekst2', 'tekst3', 'text4']
        this.textWithSpace = this.text.map(item => item + ' ');
        
        this.spnText = document.querySelector('.text');
        this.spnCursor = document.querySelector('.cursor');
        this.cursorAnimation();
        this.startTyping();
        window.addEventListener('click', this.startTyping.bind(this));
       
    }

    cursorAnimation(){
        setInterval(() => {
            this.spnCursor.classList.toggle('active')
        }, this.time)
    }

    startTyping() {
        this.intervalId = setInterval(this.showText.bind(this), this.time)
    } 
    showText() {
     
        if (this.wordNumber < this.textWithSpace.length){

            if(this.letterNumber < this.textWithSpace[this.wordNumber].length){
            this.spnText.textContent += this.textWithSpace[this.wordNumber][this.letterNumber];
            this.letterNumber++
            } else {
                this.wordNumber++;
               this.letterNumber = 0;
               this.spnText.textContent = ''
            }
            
        }else {
            clearInterval(this.intervalId);
        } 

    }
}

const typing = new Typing(500)


//Using setTimeout()

// class Typing {
//     constructor(time, wordNumber = 0, letterNumber = -20){
//         this.time = time;
//         this.wordNumber = wordNumber;
//         this.letterNumber = letterNumber
//         this.text = ['tekst1', 'tekst2', 'tekst3', 'text4'].map(item => item + '  ')
        
//         this.spnText = document.querySelector('.text');
//         this.spnCursor = document.querySelector('.cursor');

//         this.startTyping();
//         this.cursorAnimation();
//     }

//     startTyping(){
//         this.showText()
//     }

//     showText() {
     
//         if (this.letterNumber >= 0) {
//             this.spnText.textContent += this.text[this.wordNumber][this.letterNumber];
//         }
//         this.letterNumber++;
//         if (this.letterNumber === this.text[this.wordNumber].length) {
//             this.wordNumber++;
//             if (this.wordNumber === this.text.length) return;

//             setTimeout(() => {
//                 this.letterNumber = -20;
//                 this.spnText.textContent = '';
//                 this.showText();
//             }, 50);
//         } else {
//             setTimeout(this.showText.bind(this), this.time);
//         }
//     }

//     cursorAnimation(){
//         setInterval(() => {
//             this.spnCursor.classList.toggle('active')
//         }, this.time+300
//     )}
   
// }

// const typing = new Typing(200)





