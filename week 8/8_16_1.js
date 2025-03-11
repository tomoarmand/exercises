let numbers = [1, 2, 3];

const squaredSum = numbers.reduce((accumulator, currentValue) => {
    let newTotal = currentValue * currentValue;
    let endTotal = newTotal + accumulator;

    return endTotal;
    
})

console.log(squaredSum)