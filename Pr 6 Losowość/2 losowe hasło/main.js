const chars = 'ABCDEFGIJK0123456789';

const btn = document.querySelector('button');
const section = document.querySelector('section');

const codesNumber = 20;
let charsNumber = 10;

const codesGeneretor = () => {
  
    for (let i = 0; i < codesNumber; i++){
      let password = '';
        for ( let i = 0; i < charsNumber; i++){
          
           const index = Math.floor(Math.random()*chars.length);
           password  += chars[index];
           
              }
              const div = document.createElement('div');
              div.textContent = password;
              section.appendChild(div);
      }
      
     }

btn.addEventListener('click', codesGeneretor)
