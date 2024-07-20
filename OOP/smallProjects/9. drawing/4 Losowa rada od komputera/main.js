const btnAdd = document.querySelector('.add');
const btnClean = document.querySelector('.clean');
const btnShowAdvice = document.querySelector('.showAdvice');
const btnShowOptions = document.querySelector('.showOptions');
const h1 = document.querySelector('h1');

const options = ['walcz', 'przemyś to jeszcze raz'];

const addAdvice = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const newOption = input.value;
    if (input.value.length) {
        for (name of options) {
            if (name === newOption) {
                alert('to już jest');
                input.value = '';
                return;
            }
        }
        options.push(newOption);
        console.log(options);
        input.value = '';
        alert(`Dodałeś ${newOption}!`);
    }
};

const cleanAdviceList = (e) => {
    e.preventDefault();
    options.length = 0;
    console.log(options);
    h1.textContent = '';
};
const showAdvice = () => {
    const index = Math.floor(Math.random() * options.length);
    h1.textContent = options[index];
};
const ShowOptions = () => {
    alert(options.join('-----'));
};

btnAdd.addEventListener('click', addAdvice);
btnClean.addEventListener('click', cleanAdviceList);
btnShowAdvice.addEventListener('click', showAdvice);
btnShowOptions.addEventListener('click', ShowOptions);

//2 rozwiązanie
// const btnAdd = document.querySelector('.add');
// const btnReset = document.querySelector('.clean');
// const btnShowAdvice = document.querySelector('.showAdvice');
// const btnShowOptions = document.querySelector('.showOptions');
// const input = document.querySelector('input');

// const adviceArray = [];

// const addAdvice = (e) => {
//     e.preventDefault();
//     let advice = input.value;
//     console.log(input.value)
//     adviceArray.push(' ' + advice);
//     alert (`Dodałeś ${advice}!`)
//     input.value = "";
//     console.log(adviceArray)

// }
// const resetAdvice = (e) => {
//     e.preventDefault();
//     console.log(adviceArray)
//     adviceArray.length = 0;
//     console.log(adviceArray)
// }

// const showAdvice = (e) => {
//     if (adviceArray.length == 0){
//         alert ('Dodaj nowe możliwości')
//         }
//         else {
//             alert (`Moja rada to ${adviceArray[Math.floor(Math.random()*adviceArray.length)]}`)
//         }
// }

// const showOptions = (e) => {

//     if (adviceArray.length == 0){
//         alert ('Dodaj nowe możliwości')
//         }
//         else {
//             alert(`Dostępne opcje ${adviceArray.join(" ")}!`)
//         }
// }

// btnAdd.addEventListener('click', addAdvice)
// btnReset.addEventListener('click', resetAdvice)
// btnShowAdvice.addEventListener('click', showAdvice)
// btnShowOptions.addEventListener('click', showOptions)
