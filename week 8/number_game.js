let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);


let button = document.getElementById("button");
let message = document.getElementById("message");
let input = document.getElementById("input");

let maxGuesses = 10; //Set number of guesses allowed
let remainingGuesses = maxGuesses // Track remaining guesses
let guessCountDisplay = document.getElementById("guess-count");


function checkGuess(input) {
    let text;
    if (input == randomNumber) {
        text = "Congratulations, you're correct!"
    } else if (input > randomNumber) {
        text = "A little lower..."
    } else if (input < randomNumber) {
        text = "A little higher..."
    } else if (isNaN(input)) {
        text = "Please enter a number!"
    }
    return text;
};



function updateGuessCount() {
    guessCountDisplay.innerText = remainingGuesses;
};

button.addEventListener("click", function () {
    let userGuess = parseInt(input.value);  //Gives value from input variable and converts to number
    let result = checkGuess(userGuess);
    message.innerText = result;

    if (remainingGuesses > 0) {
        remainingGuesses--;
        updateGuessCount();
    }
    if (remainingGuesses === 0 && userGuess !== randomNumber) {
        message.innerText = "You Lose!";
    }
});

function showGameOver(){
    document.querySelector(".container").style.display = "none";
    document.getElementById("game-over");
}

//Connect enter button to submit button
input.addEventListener("keyup", function(event) {

    if(event.key === "Enter") {
        event.preventDefault();
       //Prevents the enter button default action, which is to submit to a server
       button.click();
    }
});




//TODO: Play a gif meme when correct