With HTML, create a framework with an input field, button and display section.
Add IDs and classes to the HTML elements.
With JS, get each element by ID and store the reference in a variable.
Declare an empty storage array "storageArray".
Create a function "addToStorage", which creates an object with the key "title" with the value being the text from the input field, and another key "completed" with the value "false".  The function should push this object to "storageArray".
Create a function "displayOnPage" which takes a parameter "object", creates a div and adds a class "task".  Appended to this div should be a checkbox, and a span containing the value of title from the current object.  The checkbox should have the .checked property, and have a boolean assigned to it - the value from the completed key of current object.  The checkbox should also have a "change" eventListener, which applies or removes a class "completed".
Create a function renderToDos, which deletes the content of "storageArray" .replaceChildren().  This function should also pass each object in "storageArray" as a parameter to "displayOnPage" using forEach.().