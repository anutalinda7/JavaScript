const word = 'word123'
const word2 = '123word'
const string = '1234567';
const arr = ['Anna', 'Tomasz', 33, 4, 5]
const nr = 12345;
//0 palindrom
const kayak = 'kayak'

//I
function palindrom(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
   const reverseWord = cleanedStr.split('').reverse().join('');
   return reverseWord === cleanedStr
}

console.log(palindrom(kayak));
console.log(palindrom('marmolada'));
console.log(palindrom('1kayak1 *'));

//II
function palindrom2(word){
    const wordArr = word.split('');
    for(let i = 0; i < word.length/2; i++ ){
        if(wordArr[i] !== wordArr[wordArr.length -1 -i]) return false
    }
    return true
}

console.log(palindrom2(kayak));
console.log(palindrom2('marmolada'));

// 1. srt -> arr
const wordArr = word.split(' ');
 console.log(wordArr)

//  2. arr => str 
function str() {
    return arr.join(' ');
}

console.log(str())

// 3. slice na arr i str 
function methodSlice(){
    const arrSlice = arr.slice(2);  //33, 4, 5
    const arrSlice2 = arr.slice(2, 4); //33, 4
    const strSlice = word.slice(4); //123
    const strSlice2 = word.slice(4, 6) //12
    return {arrSlice, arrSlice2, strSlice, strSlice2}
}
console.log(methodSlice())

//4. nr => str

const strFromNr = nr.toString()
console.log(typeof strFromNr);

// 4.1 nr => str
const strFromNr2 = String(nr)
console.log(strFromNr2, typeof strFromNr2)

// 5. nr => arr

const arrFromNr = nr.toString().split('').map(Number);
console.log(arrFromNr);

//6. str => nr

const nrFromStr = Number(string)
console.log(typeof nrFromStr)
console.log(nrFromStr)

//7 str => nr 
const nrFromStrParseFloat = parseFloat(string);
const nrFromStrParseFloat2 = parseFloat(word.replace('word', ''));
console.log(nrFromStrParseFloat, typeof nrFromStrParseFloat, nrFromStrParseFloat2, typeof nrFromStrParseFloat2);

// 8. str => nr 
const nrFormStrParseInt = parseInt(word);
const nrFormStrParseInt2 = parseInt(word2);
const nrFormStrParseInt3 = parseInt(string);
console.log(nrFormStrParseInt, nrFormStrParseInt2, nrFormStrParseInt3)


const binaryString = '1010';
const binaryToDecimal = parseInt(binaryString, 2);
console.log(binaryToDecimal); // 10


// 9. str => nr 
const nrFromStrNumber = Number(word2);
const nrFromStrNumber2 = Number(string);
console.log(nrFromStrNumber, nrFromStrNumber2);


//10 Number manipulations
const num = 1123.546
const fixedNr = num.toFixed(2);
console.log(fixedNr);

//11. Math.floor(); Math.cail(); Math.round
const mathFloor = Math.floor(num);
const mathCeil = Math.ceil(num);
const mathRound = Math.round(num)
console.log(mathFloor, mathCeil, mathRound)




// Array Manipulations
// -----------------------------------------------------------------------------------------------
//10. arr manipulations doubles every item in array with map
const doubles = nr.toString().split('').map(num => num * 2);
console.log(doubles);

// 11. Filter example filter only string or only nr from ARR
const filterSrting = arr.filter(item => typeof item === 'string');
const filterNr = arr.filter(item => typeof item === 'number');
console.log(filterSrting, filterNr);

//11.a filter the item with length > 2
const filterArrForLength = arr.filter((item) => item.length > 2);
console.log( filterArrForLength);

//11.b filter odd even numbers 
const filterEvenNumbers = string.split('').filter(nr => nr%2 === 0);

console.log(filterEvenNumbers);


function oddNumbers() {
   let emptyArr = [];
    const filterOddNr = string.split('');
    filterOddNr.forEach((nr) => {
            if(nr%2 !== 0) 
            emptyArr.push(nr)
    })
    return emptyArr;
}
console.log(oddNumbers());


function evenNumber(){
    const evenNr = string.replace(/[13579]/g, '');
    return evenArr = evenNr.split('');
}
const fromEvenNumber = evenNumber();
console.log(fromEvenNumber);


// 12.a reduce .reduce((acc, num) => acc + num, 0);
const sum = string.split('').map(Number).reduce((acc, num) => acc + num, 0);
const sum2 = arr.filter((item) => typeof item === 'number').reduce((acc, num) => acc + num, 0);
console.log(sum, sum2)

//12.b Zadanie: Znajdź największą liczbę w tablicy. Math.min/ Math.max
const findMaxMin = [1,4,3,65,223,22,0]
const findMax = Math.max(...findMaxMin);
const findMin = Math.min(...findMaxMin);
console.log(findMax, findMin, 'to tu maxi min')

const max = string.split('').map(Number).reduce((acc, num) => Math.max(acc, num));
const min = arr.filter((item) => typeof item === 'number').reduce((acc, num) => Math.min(acc, num));
console.log(max, min);

//12.c  Zadanie: Znajdź średną average liczbę w tablicy.
//I
const avg1 = string.split('').map(Number)
console.log(avg1.reduce((acc, nr) => acc + nr, 0) /avg1.length);

//II
const string2 = '1234567';
const avg2 = string2.split('').map(Number);
function average() {
    if(avg2.length === 0) return 0;
    if(avg2.some(isNaN)) return 'Zawiera inne niż nr'; 
    return avg2.reduce((acc, nr) => acc + nr, 0) /avg2.length
}
console.log(average())


//12.d Zadanie: Policz liczbę wystąpień każdego elementu w tablicy.
const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc
}, {})
console.log(count)

// 12.e Zadanie: Pogrupuj osoby według wieku.
const people = [
    {name: 'Alice', age: 5},
    {name:'Tom', age: 12},
    {name: 'Max', age: 23}
  ];

  const groupByAge = people.reduce((acc, person) => {
    if(!acc[person.age]){
        acc[person.age] = [];
    }
    acc[person.age].push(person);
    return acc;
  }, {})

  console.log(groupByAge)

  // 12.f Zadanie: Konwertuj tablicę par klucz-wartość na obiekt.
  const keyValuePairs = [['name', 'Alice'], ['age', 25], ['city', 'Wonderland'], ['name', 'Ali'], ['age', 2], ['city', 'Wonand']];
  const obj = keyValuePairs.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc; 
  }, {})
  console.log(obj); 

// 12.g  Zadanie: Spłaszczanie tablicy zagnieżdżonej do jednowymiarowej.
const nestedArray = [[1, 2, 3], [4, 5], [6]];
const flatArray = nestedArray.reduce((acc, val) => acc.concat(val), [])
console.log(flatArray)

//12 h Zadanie: Ekstrahuj wszystkie nazwy produktów do nowej tablicy.
const products = [
    {id: 1, name: 'laptop', price: 200},
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Tablet', price: 300 }
]

const nameOfProducts = products.reduce((acc, product) => {
    acc.push(product.name);
    return acc
}, [])
console.log(nameOfProducts)


//13. find znajdż element w tablicy 
const arrayForFind = ['Tomasz', 'Anna', 'Agnieszka']
const foundItem = arrayForFind.find((item) => typeof item === 'string' && item.startsWith('A'))
console.log(foundItem, typeof foundItem); 

const filterItem = arrayForFind.filter((item) => typeof item === 'string' && item.startsWith('A'));
console.log(filterItem)

//14. sort
const arrForSort = [1,4,3,65,-4, 223,22, 0.7 ,0];
const arrWithWordForSort = ['Anna', 'Margarita', 'calejdo', 'Swimming pool']
function sortingASC(arr){
    return [...arr].sort((a,b) => a -b)
}
function sortingDESC(arr){
    return [...arr].sort((a,b) => b - a)
}

function sortAZ(arr){
    return [...arr].sort()
}
function sortZA(arr){
    return [...arr].sort().reverse()
}
console.log(sortingASC(arrForSort), sortingDESC(arrForSort), sortAZ(arrWithWordForSort), sortZA(arrWithWordForSort))
//*
function sortAZFirstLetter1(arr){
    //1 sposób bez map 
    const toLower = [...arr].join(' ').toLowerCase().split(' ').sort();
    //2 sposób
    // const toLower = arr.map(word => word.toLowerCase()).sort()

    return toLower.map(word => word.charAt(0).toUpperCase() + word.slice(1)); 
}
console.log(sortAZFirstLetter1(arrWithWordForSort))

//*
function sortAZFirstLetter2(arr) {
    const wordObject = [...arr].map(word => ({
        original: word,
        lowerCase: word.toUpperCase()
    }))

    wordObject.sort((a, b) => a.lowerCase.localeCompare(b.lowerCase));
    const sortedArray = wordObject.map(obj => obj.original)

    return sortedArray;
}

console.log(sortAZFirstLetter2(arrWithWordForSort));


// // STRING manipulations
// --------------------------------------------------------------------------------------------
// 1.1 method replace() + wyrażenia regularne / /
const text = 'Hello World'
const textReplt = text.replace(/World/, 'Anna');
console.log(textReplt);

// 1.2 method replace() + wyrażenia regularne /[0-9]/g
const text2 = 'a1df4345';
const textReplace2 = text2.replace(/[0-9]/g, '');
const textReplace2a = text2.replace(/[a-z]/g, '');
const textReplace2b = text2.replace(/[13579]/g, '')
console.log(textReplace2, textReplace2a, textReplace2b)

// 1.3 method replace() + wyrażenia regularne Zamiana wielokrotnych spacji na pojedyncze  (/\s+/g, ' ')
const text3 = "This  is   a    test";
const textReplace3 = text3.replace(/\s+/g, ' ');
console.log(textReplace3)

//1.4. method replace() + wyrażenia regularne Zamiana liter na duże (/[a-z]/g, (char) => char.toUpperCase())
const textRepl1 = text.replace(/[a-z]/g, (char) => char.toUpperCase());
const textRepl2 = text.replace(/[A-Z]/g, (char) => char.toLowerCase());
console.log(textRepl1, textRepl2)

// 1.5. Jeśli chcesz zamienić format daty z "YYYY-MM-DD" na "DD-MM-YYYY":
const date = "2024-07-22";
const result = date.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3-$2-$1');
console.log(result); // "22-07-2024"

//2. includes 

const includesA = word.includes('wo')
console.log(includesA);

//3. toUpperCase toLowerCase 
const upper = word.toUpperCase();
const lower = word.toLowerCase();
console.log(upper); // 'WORD123'
console.log(lower); // 'word123'

// 4. replace 
const replaceNr = word.replace('123', '');
console.log(replaceNr);

// 5. startsWith // endsWith
const startsEndsWith = ['Anna', 'Agnieszka', 'Tomasz']
const startsWithA = startsEndsWith.map(word => word.startsWith('A'));
const endsWithA = startsEndsWith.map(word => word.endsWith('a'));

function startsWithT() {
    let arr = []
    startsEndsWith.map((word) => {
        if(word.startsWith('T')){
            arr.push(word)
        };
       
});
    return arr
}
console.log(startsWithA, endsWithA, startsWithT());

//Data manipulations
//1. Date()

const now = new Date()
console.log(now);

//formating *
// const dateNow = new Date(2024, 6, 22); // July 22, 2024
// const formattedDate = date.toDateString();
// console.log(formattedDate); // 'Mon Jul 22 2024'

// JSON Manipulations
// 1. Object to JSON:
const someObject = {name: 'Anna', age: 25}
const toJson = JSON.stringify(someObject);
console.log(toJson);


//2. JSON to Object:
const someJson = '{"name": "Anna", "age": 25}';
const toObj = JSON.parse(someJson)
console.log(toObj)

