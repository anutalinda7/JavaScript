// version with Using a map to directly associate passwords with messages.
// And Seting the default "Ooops!" message once and only update it when a match is found.


class GetMessage {
    constructor(a, b, c) {
        this.passwords = [a, b, c].map(password => password.toUpperCase());
        this.textMessages = ['You are right!', 'Hi Admin', 'Hi user123'];
        this.passwordMessageMap = this.createPasswordMessageMap();

        this.input = document.querySelector('input');
        this.message = document.querySelector('div');
        this.label = document.querySelector('label');

        this.input.addEventListener('input', this.enterPassword.bind(this));
        this.input.addEventListener('focus', this.focusInput.bind(this));
        this.input.addEventListener('blur', this.blurInput.bind(this));
        this.label.addEventListener('click', this.clearMessage.bind(this));

    }

    createPasswordMessageMap() {
        const map = new Map();
        this.passwords.forEach((password, index) => {
            map.set(password, this.textMessages[index])
        })
        return map;
    }

    enterPassword(e) {
        let text = e.target.value.toUpperCase();
        const message = this.passwordMessageMap.get(text) || 'Oooops!'
        this.message.textContent = message;
    }

    focusInput(e) {
        e.target.classList.add('active');
    }

    blurInput(e) {
        e.target.classList.remove('active');
    }

    clearMessage() {
        this.input.value = '';
        this.message.textContent = '';
    }
}

const getMessage = new GetMessage('Marcin1', 'Admin1', 'User123');


// 2. with if
// class GetMessage {
//     constructor(a, b, c) {
//         this.passwords = [a, b, c].map(password => password.toUpperCase());
//         this.textMessages = ['You are right!', 'Hi Admin', 'Hi user123'];
//         this.input = document.querySelector('input');
//         this.message = document.querySelector('div');
//         this.label = document.querySelector('label');

//         this.input.addEventListener('input', this.enterPassword.bind(this));
//         this.input.addEventListener('focus', this.focusInput.bind(this));
//         this.input.addEventListener('blur', this.blurInput.bind(this));
//         this.label.addEventListener('click', this.clearMessage.bind(this));

//     }

//     enterPassword(e) {
//         let text = e.target.value.toUpperCase();
//         let found = false;
//         this.passwords.forEach((password, index) => {
//             if(password === text){
//                 this.message.textContent = this.textMessages[index];
//                 found = true;
//             }  
//         });
//         if (!found) {this.message.textContent = 'Ooops!!!' }
//     }

//     focusInput(e) {
//         e.target.classList.add('active');
//     }

//     blurInput(e) {
//         e.target.classList.remove('active');
//     }

//     clearMessage() {
//         this.input.value = '';
//         this.message.textContent = '';
//     }
// }

// const getMessage = new GetMessage('Marcin1', 'Admin1', 'User123');



// 3. z forEach i switchem
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









