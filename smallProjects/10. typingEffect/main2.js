class Typing {
    constructor(time) {
        this.time = time
        this.text = 'Lorem ipsum dolor sit amet con optio? KONIEC ;)';
        this.nr = 0
        this.spnText = document.querySelector('.text');
        this.cursor = document.querySelector('.cursor')

        this.startTyping();
        this.cursorAnimation();
    }

    startTyping() {
        this.intervalId = setInterval(this.typeText.bind(this), this.time-300)
    }

    typeText() {
        this.spnText.textContent += this.text[this.nr++];
        if (this.nr === this.text.length) clearInterval(this.intervalId)
    }

    cursorAnimation(){
        setInterval(() => {
            this.cursor.classList.toggle('active')
        }, this.time)
        
    }

}

const typing = new Typing(500);
