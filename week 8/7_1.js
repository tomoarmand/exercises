book = {
    name: "A Perfect Balance",
    yearPublished: 1993,
    score: "4.5 out of 5",
}
book["yearPublished"] = 1992;
book.name = "Jumanji";

car = {
    make: "Toyota",
    model: "Carolla",
    transmission: "Manual",
    year: 2008,
}
car["model"] = "Hilux";
car.year = 2009;

student = {
    firstName: "James",
    lastName: "Wells",
    age: 32,
    location: "Melbourne", 
}
student["firstName"] = "Michael";
student.location = "Pakistan";

console.dir(book);
console.dir(car);
console.dir(student);
