let n = 1;
let word = "";
while (n <= 100) {
    if (n % 3 === 0) {
        word += 'Fizz';
    } else if (n % 5 === 0) {
        word += 'Buzz';
    } else if (n % 7 === 0) {
        word += 'Bang';
    } else if (n % 11 === 0) {
        console.log('Bong');
        break ;
    } else if (n % 13 === 0) {
        if (word.includes('Buzz')) {
            word = word.replace('Buzz', 'FezzBuzz');
            break ;
        } else if (word.includes('Bang')) {
            word = word.replace('Bang', 'FezzBang');
            break ;
        } else {
            word += 'Fezz';
        }
    }
    // } else if (n % 17 === 0) {
    //     word
    // }
    }
    if (n === "") {
        console.log(n);
    } else {
        console.log(word);
    }

    n++;
}
