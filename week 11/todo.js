const toDoSection = document.getElementById("todo-section");
const inputField = document.getElementById("task-input");
const addButton = document.getElementById("add-button");

let toDoStorage = [];

addButton.addEventListener("click", function() {
    addToDo();
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
    // if current.completed is false, checkbox will be unchecked

    if (checkbox.checked) {
        item.classList.add("completed");
    }// Apply the completed class if checked

    item.appendChild(checkbox);

    checkbox.addEventListener("change", function (event) {

        current.completed = checkbox.checked;
        saveToDos();
        if (checkbox.checked) {
            item.classList.add("completed");
        } else {
            item.classList.remove("completed");
        }
    })

    const taskText = document.createElement("span");
    taskText.className = "task-text"
    taskText.textContent = current.title;
    item.appendChild(taskText);
    
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.textContent = "X";
    item.appendChild(deleteButton);
    
    toDoSection.appendChild(item);
    // Appends item to toDoSection

    deleteButton.addEventListener("click", function () {
        toDoStorage.splice(index, 1);
    // Uses index created in renderToDos
        saveToDos();
        renderToDos();
        console.log(index);
        console.log(item);
        console.log(toDoStorage);
    })
};



function renderToDos() {
    toDoSection.replaceChildren();
    // Clears the current content of toDoSection

    let index = 0;
    toDoStorage.forEach(function (object) {
        toPage(object, index);
        // Pass both the to-do object data 
        // and the position of the object in the array to toPage function
        index++;
        // Gets the index for each element of toDoStorage
        // We need this index to delete from toDoStorage using the splice method

    })
    // When this function finishes, 
    // all to-do items are freshly displayed on the page
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



