

//wspólna część 
const input = document.querySelector('input');
const label = document.querySelector('label');
const div = document.querySelector('div');
const passwords = ['jedEN', 'DwA', 'trzY'];
const messages = ['to the first', 'to the second', ' to the third'];


// 1. z forEach i switchem
// const showMessage = (e) => {
//     div.textContent = ''
//     passwords.forEach(function (password, i){
//         switch (password.toLowerCase()){
//         case e.target.value.toLowerCase():
//             div.textContent = messages[i]
//             input.value = '';
//             break;
//         }
        
//     })
// }

// 2. z forEach i ifem

//     const showMessage = (e) => {
//         div.textContent = 'probuj'
//         const text = e.target.value;

//         passwords.forEach((password, i) => {
//             if(password.toLowerCase() === text.toLowerCase()){
//                 console.log ('jest ')
//                 div.textContent = messages[i]
//                 e.target.value = '';
//             } 
//         }
//         )}




// 3. inaczej forEach i if-em najpierw zmieniamy na lowercase całą tablice 
//a potem porównujemy

// passwords.forEach((password, i) => {
//     passwords[i] = password.toLocaleLowerCase();

// })
// const showMessage = (e) => {
//             div.textContent = 'probuj'
//             const text = e.target.value.toLowerCase();
    
//             passwords.forEach((password, i) => {
//                 if(password === text){
//                     console.log ('jest ')
//                     div.textContent = messages[i]
//                     e.target.value = '';
//                 } 
//             }
//             )}




            //4. z map i pętlą for 
// const newPasswords = passwords.map(password => password.toLocaleLowerCase())

// const showMessage = (e) => {
//     div.textContent = 'próbuj'
//     for (i = 0; i <= newPasswords.length; i++){
//         if (newPasswords[i] === e.target.value.toLocaleLowerCase()){
//             div.textContent = messages[i];
//             e.target.value = '';
//         }
//     }
// }
//wspólna część
const clearInput = (e) => {
    div.textContent = ''
//    e.target.value = '';
   input.value = '';
    console.log(e)
}

input.addEventListener('click', clearInput);
label.addEventListener('click', clearInput);
input.addEventListener('input', showMessage);



  
  