let counter = document.getElementById("button");
let display = document.getElementById("counter");

button.addEventListener("click", function(){

    let currentValue = display.innerText; //Ask about innerText vs textContent//

    let newValue = parseInt(currentValue) + 1;

    display.innerText = newValue;

})

let counter2 = document.getElementById("button2");
let display2 = document.getElementById("counter2");

let value = 0;

button2.addEventListener("click", function(){

    value = value + 1;

    display2.innerText = value;
})

//Using onClick in html
function plusOne() {
    let display = document.getElementById("counter3");
    let currentValue = display.innerText;
    let newValue = parseInt(currentValue) + 1;
    display.innerText = newValue;
}



