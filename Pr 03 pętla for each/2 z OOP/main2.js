
import ResetList from "./resetList.js";

class init {
    
    constructor(liSize, orderElement){
        const restClass = new ResetList();
        this.liSize = liSize;
        this.orderElement = orderElement;

        this.btn = document.createElement('button');
        
        this.btn.textContent = "Dodaj 10 elementw do strony";
        this.ul = document.createElement('ul');
        document.body.appendChild(this.btn);
 
        document.body.appendChild(this.ul);

        this.btn.addEventListener("click", this.createLiElements.bind(this));
            // this.btnReset.addEventListener('click', this.resetList.bind(this));
    }
    createLiElements = () => {
            for (let i = 0; i < 10; i++){
                const li = document.createElement("li");
                document.querySelector('ul').appendChild(li);
                li.textContent = `Element ${this.orderElement++}`;
                li.style.fontSize = `${this.liSize++}px`;
            }
        }
        resetList(){
            document.querySelector('ul').textContent = "";
                    this.liSize = this.liSize;
                    this.orderElement = this.orderElement;
        }
}
const initRun = new init(10, 1);