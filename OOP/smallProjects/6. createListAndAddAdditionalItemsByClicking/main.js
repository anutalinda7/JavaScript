import ResetList from './resetList.js';

class CreateLiList {
    constructor(size) {
       
        this.size = size;
        this.order = 1;

        this.btnContainer = document.createElement('div');
        this.btnContainer.classList.add('btn-container');
        document.body.appendChild(this.btnContainer);

        this.addBtn = document.createElement('button');
        this.addBtn.textContent = 'Add Element';
        this.addBtn.classList.add('btn');
        this.btnContainer.appendChild(this.addBtn);

        this.ul = document.createElement('ul');
        document.body.appendChild(this.ul);

        this.resetList = new ResetList(this.btnContainer, this);

        this.addBtn.addEventListener('click', this.addLiList.bind(this));
        
    }

    addLiList() {
        for(let i = 0; i < 10; i++){
            const liElement = document.createElement('li');
            liElement.style.fontSize = `${this.size++}px`;
            liElement.textContent = `Element nr ${this.order++}`;
            this.ul.appendChild(liElement);
        }
    }

    reset() {
        this.size = 12;
        this.order = 1;
        this.ul.textContent = '';
    }
}

const createLiList = new CreateLiList(12);





