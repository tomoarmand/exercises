let textField = document.getElementById("textField");
let wordDisplay = document.getElementById("wordDisplay");
let charDisplay = document.getElementById("charDisplay");







textField.addEventListener("input", () => {
    let content = textField.value;
    let words = content.split(" ").filter(word => word !== "");
    // Filter out empty strings
    let chars = content.split("");
    let wordCount = words.length;
    let charCount = chars.length;

    wordDisplay.textContent = `Total words: ${wordCount}`;
    charDisplay.textContent = `Total characters: ${charCount}`;

    console.log(wordCount)
})

