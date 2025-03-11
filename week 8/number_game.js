let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);


let button = document.getElementById("button");
let message = document.getElementById("message");

 //Gives value from input variable and converts to number



function checkGuess(input) {
    let text;
    if(input == randomNumber) {
        text = "Congratualtions, you're correct!"
    } else if (input > randomNumber) {
        text = "A little lower..."
    } else if (input < randomNumber) {
        text = "A little higher..."
    }
    return text;
}

button.addEventListener ("click", function() {
    let input = document.getElementById("input");
    let userGuess = parseInt(input.value);
    let result = checkGuess(userGuess); 
    message.innerText = result;
}) 
