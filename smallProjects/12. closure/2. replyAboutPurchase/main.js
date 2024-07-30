class Possibility{
    constructor(age, name) {
        this.age = age;
        this.name = name;

        window.addEventListener('click', this.giveAnswer.bind(this))
        this.activateShowMessage = this.userData();
    }

    userData(){
        return function showMessage(){
            document.body.textContent = `Hi ${this.name}, ${this.age >= 18 ? 'You can buy beer' : `You can't buy beer`}`;
            console.log(1)
        }
    }

    giveAnswer(){
        this.activateShowMessage()
        console.log(2)
    }
}

const possibility = new Possibility( 9, 'Max')


// without OOP 
// const userData = (name = 'aga', age = 6) => {
//     let userName = name;
//     let userAge = age;
//     return function showMessage() {
//         document.body.textContent = `Cześc ${userName}, ${userAge >= 18 ? 'Możesz kupić piswo' : 'Nie możesz kupić piwo'}`;
//     };
//     // return showMessage()
//     //LUB odrazu bez klika w windows poniżej
// };

// const mieszko = userData('Mieszko', 50);
// const mieszko2 = userData('Mieszko2', 5);
// const noName = userData();

// window.addEventListener('click', mieszko);
