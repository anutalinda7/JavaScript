const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = [
    'Jagienka',
    'Dobrawa (Dobrusia)',
    'Daria',
    'Asia',
    'Kira',
    'Marysia',
    'Anastazja',
    'Kasia',
];

const prefixs = [
    'Wydaje mi się',
    'Mam wrażenie',
    'Szczerze powiedziawszy, myślę',
    'Szczerze uważam',
    'Na 100% twierdzę',
    'Jestem pewien',
];

// const nameGenerator = () => {
//  div.textContent = `${prefixs[Math.floor(Math.random() * prefixs.length)]}, że najlepsze będzie imię to ${names[Math.floor(Math.random() * names.length)] }`;
// }

const nameGenerator = () => {
    const indexName = Math.floor(Math.random() * names.length);
    const indexPrefix = Math.floor(Math.random() * prefixs.length);
    div.textContent = `${prefixs[indexPrefix]}, ${names[indexName]}`;
};

btn.addEventListener('click', nameGenerator);
