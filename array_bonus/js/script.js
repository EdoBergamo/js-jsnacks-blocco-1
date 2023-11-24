let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [7, 8, 9];

const diff = array1.length - array2.length

if (diff > 0) {
    for (let i = 0; i < diff; i++) {
        array2.push(Math.floor(Math.random() * 100 + 1))
    }
} else if (diff < 0) {
    for (let i = 0; i < Math.abs(diff); i++) {
        array1.push(Math.floor(Math.random() * 100 + 1));
    }
}

console.log(array1)
console.log(array2)