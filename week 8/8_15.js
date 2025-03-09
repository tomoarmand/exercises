const arr = [5, 8, 12, 20, 1, 0, 4];

let foundNumber = arr.find(element => {
    return element > 10;
})

let foundNumber2 = arr.find(element => element > 10);

console.log (foundNumber);
console.log (foundNumber2);

let reverse = arr.reverse();
console.log(reverse);

let sort = arr.sort((a, b) => {
    return a - b;
})
console.log(sort);

let sortDescending = arr.sort((a, b) => {
    return b - a;
})
console.log(sortDescending);

let allPositive = arr.every(element => {
    return element > 0;
})
console.log(allPositive);

let array1 = [1, 2];
let array2 = [3, 4];

let mergedArray = array1.concat(array2);

console.log(mergedArray);

