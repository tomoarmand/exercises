// 1. Sorting and searching

const numbers = [1, 9000, 15, 80, 17, 500, 0]


// function sortArray(array) {
//     return array.sort(function(a, b) {
//         return a - b;
//     })
// } 

const sortArray = (array) => {
    array.sort((a, b) => a - b);
    return array;
}

//.sort() doesn't sort numbers in numerical order without compareFunction, because
//it treats array elements as strings, and compares them based
//on their character codes.

// compareFunction
// a - b: If a is less than b, a - b will be negative, telling sort() to put a before b.
// a - b: If a is greater than b, a - b will be positive, telling sort() to put a after b.
// a - b: if a and b are equal, a - b will be zero.
// Therefore, the array is sorted in ascending order.

console.log(sortArray(numbers));

const sorted = ["anise", "bayleaves", "cardamom", "dill", "elderflower"];
const targetElement = "dill";

function binarySearch(sortedArray, target) {
    let low = 0;
    let high = sortedArray.length - 1;

    while (low <= high) {// Continue searching as long as the interval is valid
        const mid = Math.floor((low + high) / 2);
        // Calculate the middle index
        //Math.floor used to ensure the result is an integer
        if (sortedArray[mid] === target) {
            return mid; // Target found, return its index
        } else if (sortedArray[mid] < target) {
            low = mid + 1; // Target is in the right half, adjust lower bound
        } else if (sortedArray[mid] > target) {
            high = mid - 1; // Target is in the left half, adjust upper bound
        }
    }
    return -1; // Target not found, return -1
}

console.log(binarySearch(sorted, targetElement));

// 2. Higher-Order Functions

const numbers1 = [1, 2, 3, 4, 5]

// function squareNumbers(array) {
//     return array.map(function(num) {
//       return num * num
//     });
// }

// function squareNumbers(array) {
//     return array.map((num) => num * num)
// }

const squareNumbers = (array) => array.map((num) => num * num);

console.log(squareNumbers(numbers1));

const numbers2 = [1, 18, 33, 97, 100, 52, 46, 3, 62];

// function filterEvens(array) {
//     return array.filter(function(number) {
//         return number % 2 === 0;
//     })
// }

const filterEvens = (array) => array.filter((number) => number % 2 === 0);

console.log(filterEvens(numbers2));

// function sumArray(array) {
//     return array.reduce(function (accumulator, currentValue) {
//         return accumulator + currentValue;
//     }, 0)//Initial value
// };

const sumArray = (array) => array.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sumArray(numbers1));

// 3. Manipulating NodeLists

function logNodeListText() {
    let nodeList = document.querySelectorAll(".example");
    let elementsArray = Array.from(nodeList);
    //Converts nodeList to an array

    elementsArray.forEach(function(el) {
        console.log(el.textContent);
    })
}

logNodeListText()

function productOfArguments() {
    let total = 1; //1, not 0, as 0 * anything will always be 0
    for(let i = 0; i < arguments.length; i++) {
        total = total * arguments[i];
    }
    return total;
}
//Ask about rest operators

console.log(productOfArguments(1, 2, 3));

const wineVarieties = ["Chardonnay", "Shiraz", "Merlot", "Cabernet Sauvignon", "Pinot Gris"]
const person = {
    name: "Derrick",
    age: 25,
    occupation: "Surveyor",
    city: "Addis Ababa",
    vehicle: "Lada"
} 

function extractValues(array, object) {
    let [first, , , , fifth] = array;
    let {name, city, vehicle} = object;
    return {
        first,
        fifth,
        name,
        city,
        vehicle
    };
}

function extractValues2(array, object) {
    let [ , second, third] = array;
    let {age, occupation} = object;
    return [second, third, age, occupation];
}

console.log(extractValues(wineVarieties, person));
console.log(extractValues2(wineVarieties, person));

const firstHalf = ["One", "Two", "Three"];
const secondHalf = ["Four", "Five", "Six"];

function combineArrays (first, second) {
    let combinedArray = [...first, ...second];
    // ...array1: The spread operator unpacks array1 into 1, 2, 3.
    // ...array2: The spread operator unpacks array2 into 4, 5, 6.
    return combinedArray;
}

console.log(combineArrays(firstHalf, secondHalf));

function averageOfArguments(...numbers) {
    let sum = numbers.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    return sum / numbers.length;
} //Practise different ways to write the above

console.log(averageOfArguments(1, 2, 3))
