class Meter{
    constructor(start = 0) {
        this.number = start;
        window.addEventListener('click', this.countForm.bind(this));
        this.runCounter = this.counter();
    }

    counter(){
        return function runCounter(){
            if(this.number <=0){
                this.number++;
            }
            document.body.textContent = `The current counter value is ${this.number}`
            this.number++;
        }
    }

    countForm() {
        this.runCounter();
    }

}

const meter = new Meter(0);

// without OOP 
// function counter(start = 0) {
//     let number = start;
//     return function runCounter() {
//         number++;
//         document.body.textContent = `The current counter value is ${number}`;
//     };
// }

// // const countFrom0 = counter();
// const countFrom5 = counter(5);

// // window.addEventListener("click", countFrom0)
// window.addEventListener('click', countFrom5);
