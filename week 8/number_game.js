let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);


let button = document.getElementById("button");
let message = document.getElementById("message");



function checkGuess(input) {
    let text;
    if(input == randomNumber) {
        text = "Congratulations, you're correct!"
    } else if (input > randomNumber) {
        text = "A little lower..."
    } else if (input < randomNumber) {
        text = "A little higher..."
    }
    return text;
}

button.addEventListener ("click", function() {
    let input = document.getElementById("input");
    let userGuess = parseInt(input.value);  //Gives value from input variable and converts to number
    let result = checkGuess(userGuess); 
    message.innerText = result;
}) 
