let n = 1;
while (n <= 255) {
    let word = "";
    if (n % 3 === 0) {
        word += 'Fizz';
    } if (n % 5 === 0) {
        word += 'Buzz';
    } if (n % 7 === 0) {
        word += 'Bang';
    } if (n % 13 === 0) {
        if (word.includes('Buzz')) {
            word = word.replace('Buzz', 'FezzBuzz');
        } else if (word.includes('Bang')) {
            word = word.replace('Bang', 'FezzBang');
        } else {
            word += 'Fezz';
        }
    }
    if (n % 17 === 0) {
        let word1 = "";
        for (i = 0; i < word.length; i += 4) {
            word1 += word.substr(-(i+4), 4);
        }
        word = word1;
    }
    if (n % 11 === 0) {
        word = 'Bong';
    }

    if (word === "") {
        console.log(n);
    } else {
        console.log(word);
    }
    n++;
}
