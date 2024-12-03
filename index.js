function sum(a, b) {
    console.log(arguments);

    return a + b;
}

const sumWithFive = sum.bind(null, 5);

console.log(sumWithFive(8, 3));

const sumWithFifty = sum.bind(null, 50);

console.log(sumWithFifty(8));

const oneHundredFifty = sum.bind(null, 50, 100);

console.log(oneHundredFifty(1, 2, 3, 4, 5));