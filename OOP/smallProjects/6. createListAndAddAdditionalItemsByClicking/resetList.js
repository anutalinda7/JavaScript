export default class ResetList {
    constructor(btnContainer, createLiList) {
        this.createLiList = createLiList;

        this.resetBtn = document.createElement('button');
        this.resetBtn.textContent = 'Reset';
        this.resetBtn.classList.add('btn');
        btnContainer.appendChild(this.resetBtn);
        this.resetBtn.addEventListener('click', this.resetLiList.bind(this));
        
    }

    resetLiList() {
        this.createLiList.reset();
    }
}


