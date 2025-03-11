let num1 = 2342;
let num1String = num1.toString();
console.log(num1String);
console.log(typeof num1String);

let num2 = "2342";
let num2Int = Number(num2);
console.log(num2Int);
console.log(typeof num2Int);

let num3 = "23.42";
let num3Int = Number(num3);
console.log(num3Int);
console.log(typeof num3Int);
//Number() can return floating-point numbers or NaN
//parseInt always returns an integer or NaN
//In essence, Number() is for type conversion to a number, 
//while parseInt() is for parsing an integer from a string. 

let num4 = 23.4599;
let num4Int = num4.toFixed(2)
console.log(num4Int);
console.log(typeof num4Int);
