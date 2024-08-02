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
console.log(result)

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
let str = "one two three";
let nrStr = '1234'
let nameStr = 'Matylda'

function distinct (nm) {
    const arr = nm.split('');
    const distinctArr =  [...new Set(nm)]
    return distinctArr[distinctArr.length-1]
}
console.log(distinct(nameStr))

// 3. slice na arr i str 
function methodSlice(){
const newWord = word.slice(0, 4);
const newArr = arr.slice(0, 2);
return {newWord,newArr}
}
console.log(methodSlice())