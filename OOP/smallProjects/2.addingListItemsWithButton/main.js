class AddElement {
    constructor(selector, startNumber, step){
        this.btn = document.querySelector(selector);
        this.ul = document.querySelector('ul');
        this.startNumber = startNumber;
        this.step = step;
        this.btn.addEventListener('click', this.addElement.bind(this));
    }
    addElement(){
        const li = document.createElement('li');
        li.textContent = this.startNumber;
        this.ul.appendChild(li);
        if(this.startNumber%3 === 0){
            li.classList.add('big');
        }
        this.startNumber += this.step;
    }
}

const addElement = new AddElement('button', 1, 2);