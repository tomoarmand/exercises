let numbers = [1, 2, 3];
let total = 0;

numbers.forEach(function(element) {
    console.log(element);
})
//numbers.forEach(element => {
    //console.log(element);
//})

//numbers.forEach(function(element) {
    //total = element + total;
//})
numbers.forEach(element => {
    total = element + total;
})

console.log(total);


