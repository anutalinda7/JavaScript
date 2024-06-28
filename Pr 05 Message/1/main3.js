const div = document.querySelector('div');
const input = document.querySelector('input');
const label = document.querySelector('label');

const passwords = ['user', 'inne', 'us']
const messages = ["Prawidłowe hasło", "jesteś blisko, najpopularniejsze hasło ", 'sam us']


const typePassword = (e) =>{
    const text = e.target.value 

passwords.forEach (function(password, index){
    
    if (password.toUpperCase() === text.toUpperCase()){
    div.textContent = messages[index]
    text = '';
    } 
    else {
        div.textContent = "pudło"
    }
})
    console.log('run')
}
const cleanData = (e) => {
    
    div.textContent = "";
    // console.log
    input.value = "";
}

input.addEventListener('focus', (e) => {
    e.target.classList.add('active')
})
input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})

input.addEventListener('input', typePassword)
label.addEventListener('click', cleanData);
input.addEventListener('click', cleanData);