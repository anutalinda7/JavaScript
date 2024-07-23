const word = 'kajak';
const word2 = 'anna';
const word3 = 'coś';

const isTheWordPalindrom = (txt) => {
    // I opcja
    // let arrayText = txt.split('');
    // for(let i = 0; i < arrayText.length/2; i++){
    //     if (arrayText[i] !== arrayText[arrayText.length - 1 -i ]){
    //         return false
    //     }
    // }
    // return true

    // II opcja
    const toLowerCase = txt.toLowerCase();
    const reverseTxt = toLowerCase.split('').reverse().join('');
    return toLowerCase === reverseTxt;
};

console.log(isTheWordPalindrom(word));
console.log(isTheWordPalindrom(word2));
console.log(isTheWordPalindrom(word3));









// 1. Podstawowe Zadania z JavaScript
// 1.1. Funkcje i pętle
// Zadanie: Napisz funkcję, która zwraca sumę wszystkich liczb w tablicy.

const arrayExp = [1, 2, 7, 3, 1, 6, 91, 2, 2, 3, 4, 4, 5]

function sum () {
    return arrayExp.reduce((a, b) => a + b, 0);
}
console.log(sum());

// Zadanie: Znajdź największą liczbę w tablicy.
const numbers = [1, 2, 3, 4, 5];
const max = numbers.reduce((a, b) => Math.max(a, b))
const min = numbers.reduce((a, b) => Math.min(a, b))
const avg1 = numbers.reduce((a, b) => a + b, 0) / numbers.length
const avg2 = numbers.reduce((a, b, _, length) => a + b / length,)
console.log(max); // 5
console.log(min); 
console.log(avg); // 5


// Zadanie: Policz liczbę wystąpień każdego elementu w tablicy.
const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 2, banana: 3, orange: 2 }

const count2 = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) +1;
    return acc;
}, {});

// Zadanie: Pogrupuj osoby według wieku.
const people = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 21 },
    { name: 'Dave', age: 25 }
  ];
  
  const groupedByAge = people.reduce((acc, person) => {
    if (!acc[person.age]) {
      acc[person.age] = [];
    }
    acc[person.age].push(person);
    return acc;
  }, {});
  console.log(groupedByAge);
  // { '21': [ { name: 'Alice', age: 21 }, { name: 'Charlie', age: 21 } ],
  //   '25': [ { name: 'Bob', age: 25 }, { name: 'Dave', age: 25 } ] }

  
//   Zadanie: Konwertuj tablicę par klucz-wartość na obiekt.
const keyValuePairs = [['name', 'Alice'], ['age', 25], ['city', 'Wonderland']];
const obj = keyValuePairs.reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});
console.log(obj); // { name: 'Alice', age: 25, city: 'Wonderland' }

// Zadanie: Spłaszczanie tablicy zagnieżdżonej do jednowymiarowej.
const nestedArray = [[1, 2, 3], [4, 5], [6]];
const flatArray = nestedArray.reduce((acc, val) => acc.concat(val), []);
console.log(flatArray); // [1, 2, 3, 4, 5, 6]


// Zadanie: Ekstrahuj wszystkie nazwy produktów do nowej tablicy.
const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Tablet', price: 300 }
  ];
  
  const productNames = products.reduce((acc, product) => {
    acc.push(product.name);
    return acc;
  }, []);
  console.log(productNames); // ['Laptop', 'Phone', 'Tablet']

  
// Zadanie: Napisz funkcję, która zwraca największą liczbę w tablicy.
function findMax (arr) {
        return Math.max(...arr);
}

function findMin (arr) {
    return Math.min(...arr)
}

console.log(findMax(arrayExp), findMin(arrayExp))

// Zadanie: Napisz funkcję, która odwraca string.

let water = "rodowita";
function reverseString (word) {
    return word.split('').reverse().join('');
    
}
reverseString(water);

// 1.2. Manipulacja tablicami
// Zadanie: Napisz funkcję, która filtruje liczby parzyste z tablicy.

function filterEvenNr () {
    return arrayExp.filter(num => num % 2 === 0)    
}
filterEvenNr()
//na logike
function isPalindrome(str) {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

// Napisz funkcję, która zwraca wartość silni liczby.
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// Napisz funkcję, która zwraca wszystkie liczby Fibonacciego do n-tego elementu.
function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Zadanie: Napisz funkcję, która sortuje tablicę rosnąco.
function sortingArr( arr) {
    return arr.sort((a, b) => a - b);
}
console.log(sortingArr(arrayExp))

// Zadanie: Napisz funkcję, która zwraca unikalne wartości z tablicy.
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
function uniqueValues(arr) {
    return [...new Set(arr)];
}


console.log(uniqueValues(arrayExp)); // [1, 2, 3, 4, 5]

// Zadanie: Napisz funkcję, która zamienia wszystkie litery na małe.
function toLowerCase(word) {
    return word.toUpperCase();
}
console.log(toLowerCase('truSkaWka'))

// Zadanie: Napisz funkcję, która zamienia pierwszą literę każdego słowa na wielką literę.
function toUpperCaseFirstLetter(str) {
    
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


function toUpperCaseFirstLetter2(srt) {
    const arr = srt.split(' ');
    const capitalizaWords = [];

    arr.forEach(element => {
        capitalizaWords.push(element.charAt(0).toUpperCase() + element.slice(1))
    });

    return capitalizaWords.join(' ');
}

function toUpperCaseFirstLetter3(str) {
    const arr = str.split(' ');
    const capitalizaWord = [];

    for(let i = 0; i < arr.length; i++){
        capitalizaWord.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
    }

    return capitalizaWord.join(' ');
}

console.log(toUpperCaseFirstLetter('hello world'));
console.log(toUpperCaseFirstLetter2('hello world'));
console.log(toUpperCaseFirstLetter3('hello world'));


// Zadanie: Napisz funkcję, która zwraca srednią wartość z tablicy.

function calculateAverage(arr) {
    if (arr.length === 0) return 0;
    // if (arr.filter(item => typeof item === 'number' && !isNaN(item))) return 'Zaiwera fhfh';

    const sum = arr.reduce((a, b) => a + b, 0);
    const avr = sum/arr.length
    return avr
}
console.log(calculateAverage([5, 8]));


// Zadanie: Napisz funkcję, która zwraca tylko liczby parzyste z tablicy.
// function findEvenNr(arr){
//     return arr.filter(nr => nr % 2 === 0)
// }
const arrayWords = ['anna', 'tomasz', 'nicole']

function findEvenNr(arr){
    // return [...new Set(arr)].filter(nr => nr % 2 !== 0);
    return arr.filter(wrd => wrd.length > 5)

} 
console.log(findEvenNr(arrayWords))












// 3. Manipulacja obiektami
// Zadanie: Napisz funkcję, która zwraca wartości danego klucza z tablicy obiektów.

const objectsArray = [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}];
function getValues(arr, key) {
    return arr.map(obj => obj[key]);
}

console.log(getValues(objectsArray, 'name')); // ['Alice', 'Bob', 'Charlie']

// // Zadanie: Napisz funkcję, która dodaje nowy klucz i wartość do każdego obiektu w tablicy.

function addKey(arr, key, value) {
    return arr.map(obj => ({...obj, [key]: value}));

}
console.log(addKey(objectsArray, 'age', 30));
// [{name: 'Alice', age: 30}, {name: 'Bob', age: 30}, {name: 'Charlie', age: 30}]




const wordRight = 'kayak';
const wordInvalid = 'dolphin'

const text = 'one two three fo ur';

const result = text.split('o');

console.log(result); // ['one', 'two', 'three']


const csv = 'name,age,city\nAlice,30,New York\nBob,25,Los Angeles';
const lines = csv.split('\n'); // Dzieli CSV na linie
console.log(lines);
// ['name,age,city', 'Alice,30,New York', 'Bob,25,Los Angeles']

const headers = lines[0].split(','); // Dzieli nagłówki na podstawie przecinka
console.log(headers); // ['name', 'age', 'city']

const headers2 = lines.map((el) => el.split(','));
console.log(headers2);

const data = lines.slice(1).map(line => line.split(','));
console.log(data);
[['Alice', '30', 'New York'], ['Bob', '25', 'Los Angeles']]



let num = 12345;
let toStr = num.toString();
let digitsArray = num.toString().split('').map(Number);
console.log(digitsArray); 
console.log(typeof toStr);

let str = "one two three";
let nrStr = '1234'
let arr = str.split(); 
let str2 = arr.join();
let nrFromStr = Number(nrStr)
let nrFromStr2 = parseInt(nrStr)
console.log(nrFromStr)
console.log(nrFromStr2)
console.log(arr); // ["one two three"]
console.log(str2);


let nameStr = 'Matylda'

function distinct (nm) {
    const arr = nm.split('');
    const distinctArr =  [...new Set(nm)]
    return distinctArr[distinctArr.length-1]
}
console.log(distinct(nameStr))