let correctPassword = "Javascript1";
let message;
let password = prompt("Enter your password", "");


if (password !== null) {
    if (password === correctPassword) {
        message = "Access Granted"
    }
    else {
        message = "Access Denied"
    }

}
else {
    message = "User Cancelled Input"
}

console.log(message);

