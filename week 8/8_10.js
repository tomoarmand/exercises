let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

myArray.forEach(function(element, index, array){
    console.log(element);
})

for (let element of myArray){
    console.log(element);
}

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

let i = 0;
while (i < myArray.length) {
    console.log(myArray[i]);
    i++;
}

let p = 0;
do {
    console.log(myArray[p]);
    p++;
} while (p < myArray.length);


