const arr = [1, 2, 3, 4];

console.log(...arr);

const obj = {
    *[Symbol.iterator]() {
        for (let i = 0; i < 3; ++i) {
            yield i + 50;
        }
    }
}

console.log(...obj);

for (const num of obj) {
    console.log(num);
}