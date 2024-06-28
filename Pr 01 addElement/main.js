class NumberAdd {
    constructor(selector, startNumber, step) {
        this.btn = document.querySelector(selector);
        this.startNumber = startNumber;
        this.step = step;
        this.btn.addEventListener('click', this.addCos.bind(this)); 
    }
    addCos(){
        const div = document.createElement('div');
        div.textContent = this.startNumber;
        this.startNumber += this.step;
        document.body.appendChild(div)
    }
}
const numberAdd = new NumberAdd('button', 1, 1);

