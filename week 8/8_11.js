let numbers = [1, 2, 3, 4]

let doubledNumbers = numbers.map(element => element * 2);

console.log(doubledNumbers);

//Use forEach() when you just want to perform an action on each item.
//Use map() when you want to transform each item and create a new list with the results.

let greaterThanTwo = numbers.filter(element => {
    if (element > 2) {
        return true;
    }
});

let alternative = numbers.filter(element => element > 2);

console.log(greaterThanTwo);
console.log(alternative);

let even = numbers.filter(element => {
    if (element % 2 == 0) {
        return true;
    }
});

let evenSquared = even.map(element => element * element);

console.log(even)
console.log(evenSquared)
