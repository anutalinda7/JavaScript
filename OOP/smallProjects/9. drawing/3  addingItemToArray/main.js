class ShowAdvice {
    constructor() {
        this.advices = [];
        this.h1 = document.querySelector('h1');

        document.querySelector('.add').addEventListener('click', this.addAdvice.bind(this));
        document.querySelector('.clean').addEventListener('click', this.resetAdvice.bind(this));
        document.querySelector('.showAdvice').addEventListener('click', this.showAdvice.bind(this));
        document.querySelector('.showOptions').addEventListener('click', this.showOptions.bind(this));
    }

    addAdvice(e) {
        e.preventDefault();
        const input = document.querySelector('input');
        this.advices.push(input.value);
        input.value = '';
        console.log(this.advices);
    }

    resetAdvice(e) {
        e.preventDefault();
        this.advices.length = 0;
    }

    showAdvice() {
        if (this.advices.length >= 1){
            this.h1.textContent = `My advice: ${this.advices[Math.floor(Math.random() * this.advices.length)]}`;
        } else this.h1.textContent = 'Add advice before draw'
        
    }

    showOptions() {
        this.h1.textContent = this.advices;
    }
}

const showAdvice = new ShowAdvice();
