// class DrawingName {
//     constructor() {
//         this.names = [ 
//             'Jagienka',
//             'Dobrawa (Dobrusia)',
//             'Daria',
//             'Asia',
//             'Kira',
//             'Marysia',
//             'Anastazja',
//             'Kasia'
//         ];
        
//         this.prefixes = [
//             'It seems to me', 
//             'I have the impression',  
//             'Honestly, I think',
//             'Honestly, I believe',  
//             'I am 100% certain',  
//             'I am sure'
//         ];

//         this.btn = document.querySelector('button');
//         this.div = document.querySelector('div');

//         this.btn.addEventListener('click', this.nameGenerator.bind(this));
//     }

//     nameGenerator() {
//         const prefixerNr = Math.floor(Math.random() * this.prefixes.length);
//         const nameNr = Math.floor(Math.random() * this.names.length);
//         this.div.textContent = `${this.prefixes[prefixerNr]}, ${this.names[nameNr]}`;
//     }
// }

// const drawindName = new DrawingName();

