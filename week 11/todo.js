const toDoSection = document.getElementById("todo-section");
const inputField = document.getElementById("task-input");

const addButton = document.getElementById("add-button");


const toDoStorage = []


addButton.addEventListener("click", function() {
    addToDo()
})

function toPage(current) {
    const item = document.createElement("div");
    item.className = "todo-item";
// Creates new div with a class
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.className = "radio";
    radio.checked = current.completed;

    item.appendChild(radio);
// Creates a radio button and append it to the div
    item.appendChild(document.createTextNode(" " + current.title));
// Adds title text from object
    toDoSection.appendChild(item);
// Appends item to toDoSection
};

function renderToDos() {
    toDoSection.replaceChildren();
// Updates todo list without repetition by removing old version of list

    toDoStorage.forEach(function(todo) {
        toPage(todo);
    })// Adds latest todo list to page, including latest addition
};

console.log(toDoStorage)

document.addEventListener('DOMContentLoaded', function() {
    renderToDos();
})

function addToDo() {
    const toDoText = inputField.value;
    const newToDo = {
        title: toDoText,
        completed: false
    };

    toDoStorage.push(newToDo);

    inputField.value = "";

    renderToDos()
};



