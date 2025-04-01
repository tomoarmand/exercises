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

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.className = "radio";
    radio.checked = current.completed;

    item.appendChild(radio);

    item.appendChild(document.createTextNode(" " + current.title));

    toDoSection.appendChild(item);
    
};

function renderToDos() {
    toDoSection.replaceChildren();

    toDoStorage.forEach(function(todo) {
        toPage(todo);
    })
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



