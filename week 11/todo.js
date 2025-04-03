const toDoSection = document.getElementById("todo-section");
const inputField = document.getElementById("task-input");

const addButton = document.getElementById("add-button");


let toDoStorage = [];


addButton.addEventListener("click", function () {
    addToDo()
})

function toPage(current, index) {
    const item = document.createElement("div");
    item.className = "todo-item";
    // Creates new div with a class
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";

    checkbox.checked = current.completed;
    // .checked is a property of checkbox inputs that determines if they
    // appear checked or unchecked
    // current.completed is a boolean: 
    // if current.completed is false, chickbox will be unchecked

    if (checkbox.checked) {
        item.classList.add("completed");
    }// Apply the completed class if the task is already completed

    checkbox.addEventListener("change", function (event) {

        current.completed = checkbox.checked;
        saveToDos();
        if (checkbox.checked) {
            item.classList.add("completed");
        } else {
            item.classList.remove("completed");
        }
    })

    item.appendChild(checkbox);
    // Creates a checkbox and append it to the div
    item.appendChild(document.createTextNode(" " + current.title));
    // Adds title text from object
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    item.appendChild(deleteButton);
    toDoSection.appendChild(item);
    // Appends item to toDoSection

    deleteButton.addEventListener("click", function () {
        toDoStorage.splice(index, 1);
        saveToDos();
        renderToDos();
        console.log(index);
        console.log(item);
        console.log(toDoStorage);
    })
};



function renderToDos() {
    toDoSection.replaceChildren();
    // Insert comment!!!

    let index = 0;
    toDoStorage.forEach(function (todo) {
        console.log(index)
        toPage(todo, index);
        index++;
        // Gets the index for each element of toDoStorage
        // Pass index as a parameter to toPage function 
        // We need this index to delete from toDoStorage using the splice method

    })// Adds latest todo list to page, including latest addition
};


document.addEventListener('DOMContentLoaded', function () {
    toDoStorage = loadToDos();
    renderToDos();

});

function addToDo() {
    const toDoText = inputField.value;
    const newToDo = {
        title: toDoText,
        completed: false
    };

    toDoStorage.push(newToDo);

    saveToDos();

    inputField.value = "";

    renderToDos()
};

function saveToDos() {
    localStorage.setItem("toDoStorage", JSON.stringify(toDoStorage));
};

function loadToDos() {
    const savedToDos = localStorage.getItem("toDoStorage");
    if (savedToDos) {
        return JSON.parse(savedToDos);
    }
    return [];
}



