function loose(example) {
    let message;
    if (example == true ) {
        message = "Correct";
    }
    else {
        message = "Incorrect";
    }
    return message;
}

console.log(loose(1));

function strict(example) {
    let message;
    if (example === false ) {
        message = "Correct";
    }
    else {
        message = "Incorrect";
    }
    return message;
}

console.log(strict("0"));

console.log("20" > 30);