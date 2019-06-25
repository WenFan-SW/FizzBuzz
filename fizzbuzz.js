function reverse(word) {
    let reversed = '';
    for (let i = 0; i < word.length; i += 4) {
        reversed += word.substr(-(i + 4), 4);
    }
    return reversed;
}

function fezzAdd(word) {
    let firstB = word.indexOf('B');
    word = word.slice(0, firstB) + 'Fezz' + word.slice(firstB);
    return word;
}

function printFizzBuzz(n) {
    let word = '';
    if (n % 3 === 0) {
        word += 'Fizz';
    }
    if (n % 5 === 0) {
        word += 'Buzz';
    }
    if (n % 7 === 0) {
        word += 'Bang';
    }
    if (n % 13 === 0) {
        word = fezzAdd(word);
    }
    if (n % 17 === 0) {
        word = reverse(word);
    }
    if (n % 11 === 0) {
        word = 'Bong';
    }

    if (word === "") {
        console.log(n);
    } else {
        console.log(word);
    }
}

let n = 1;
// const n = require('Enter a number');
while (n <= 255) {
    printFizzBuzz(n);
    n++;
}
