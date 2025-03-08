let person1 = { name: 'John' };
let person2 = { name: 'John' };
console.log(person1 == person2);

//The reason it returns false is that JavaScript compares objects by reference, not by content. 
//When you create two object literals like this, they point to different locations in memory. 
//The == and === operators check if the variables reference the exact same object in memory, not if they contain the same values.
//Two objects are only equal if they're the exact same object instance.
//Having identical properties and values doesn't make objects equal.

console.log(person1.name == person2.name);

console.log(JSON.stringify(person1) == JSON.stringify(person2));

console.log(_.isEqual(person1, person2));

//Ask about Lodash (above) and creating a custom function to compare object properties.