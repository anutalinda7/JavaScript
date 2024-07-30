class DrowPasswords {
    constructor(chars, numberOfPasswords, passwordLength) {
        this.chars = chars;
        this.numberOfPasswords = numberOfPasswords;
        this.passwordLength = passwordLength

        this.btn = document.querySelector('button');
        this.section = document.querySelector('section');
        
        this.btn.addEventListener('click', this.drawPassword.bind(this));
    }

    drawPassword(){
        for(let i = 0; i <= this.numberOfPasswords; i++){
            let password = '';
            for(let i = 0; i <= this.passwordLength; i++){
                const item = this.chars[Math.floor(Math.random() * this.chars.length)];
                password += item;
            }
            const div = document.createElement('div');
            div.textContent = password;
            this.section.appendChild(div);
        }
      
    }
}

const drowPasswords = new DrowPasswords('ABCDEFGIJK0123456789', 2, 5)

// const chars = 'ABCDEFGIJK0123456789';

// const btn = document.querySelector('button');
// const section = document.querySelector('section');

// const codesNumber = 3;
// let charsNumber = 10;

// const codesGeneretor = () => {
//     for (let i = 0; i < codesNumber; i++) {
//         let password = '';
//         for (let i = 0; i < charsNumber; i++) {
//             const index = Math.floor(Math.random() * chars.length);
//             password += chars[index];
//         }
//         const div = document.createElement('div');
//         div.textContent = password;
//         section.appendChild(div);
//     }
// };

// btn.addEventListener('click', codesGeneretor);


