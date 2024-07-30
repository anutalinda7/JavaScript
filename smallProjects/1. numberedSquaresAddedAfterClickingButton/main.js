class AddSquare {
    constructor(selector, startNumber, step) {
        this.btn = document.querySelector(selector);
        this.startNumber = startNumber;
        this.step = step;
        this.btn.addEventListener('click', this.addSquare.bind(this));
    }
    addSquare() {
        const div = document.createElement('div');
        div.textContent = this.startNumber;
        document.body.appendChild(div);
        if (this.startNumber % 5 === 0) {
            div.classList.add('circle');
        }
        this.startNumber += this.step;
    }
}

const addSquare = new AddSquare('button', 1, 1);
