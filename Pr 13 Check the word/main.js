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
