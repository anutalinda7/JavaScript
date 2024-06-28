export default class ResetList {
    constructor(){
        this.btnReset = document.createElement("button");
        this.btnReset.textContent = "Reset";
        document.body.appendChild(this.btnReset);
        this.btnReset.addEventListener('click', this.resetList.bind(this));
    }
    resetList(){
        document.querySelector('ul').textContent = "";
                this.liSize = 10;
                this.orderElement = 1;
    }
}