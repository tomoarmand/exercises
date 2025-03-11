let numbers = [1, 2, 3]

//numbers.reduce(function(accumulator, currentValue){

    //let squared = currentValue * currentValue;

    //let newTotal = squared + accumulator;

    //return newTotal;

//}, 0);

let newTotal = numbers.reduce(function(accumulator, currentValue){

    let squared = currentValue * currentValue;

    return squared + accumulator;

}, 0);

console.log(newTotal)




//0 is the initial value for the accumulator

