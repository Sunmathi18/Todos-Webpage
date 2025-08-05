// Get the input box and the list container from the HTML
var unorderedlist = document.getElementById("listcontainer");
var input = document.getElementById("input");

// This function runs when you click the "Add" button
function additem() {
    // If the input is empty or just spaces, don't do anything
    if (input.value.trim() === "") return;

    // Create a new list item (li)
    var listitem = document.createElement("li");

    // Create a <span> to hold the task text
    var taskSpan = document.createElement("span");
    taskSpan.textContent = input.value; // Set the text to what the user typed

    // Create a Delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";     // Button text
    deleteBtn.className = "btn";          // Apply the "btn" style
    deleteBtn.onclick = deleteitem;       // Set what happens when clicked

    // Create a checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";           // Make it a checkbox
    checkbox.className = "check";         // Apply the "check" style

    // Create an Edit button
    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";         // Button starts as "Edit"
    editBtn.className = "edit";           // Apply the "edit" style
    editBtn.onclick = toggleEdit;         // Set what happens when clicked

    // Add everything (text, buttons, checkbox) to the list item
    listitem.appendChild(taskSpan);
    listitem.appendChild(deleteBtn);
    listitem.appendChild(checkbox);
    listitem.appendChild(editBtn);

    // Add the list item to the main list on the page
    unorderedlist.appendChild(listitem);

    // Clear the input box for the next task
    input.value = "";
}

// This function deletes a task when the Delete button is clicked
function deleteitem(event) {
    // Remove the entire list item (the task)
    event.target.parentElement.remove();
}

// This function lets you edit and save the task
function toggleEdit(event) {
    // Get the list item and the button that was clicked
    const li = event.target.parentElement;
    const btn = event.target;

    // If the button says "Edit"
    if (btn.textContent === "Edit") {
        // Get the current text from the <span>
        const span = li.querySelector("span");
        const currentText = span.textContent;

        // Create an input box with the current task text
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.value = currentText;

        // Optional: make the input take up more space
        inputField.style.flex = "1";

        // Replace the <span> with the input box
        li.insertBefore(inputField, span);
        li.removeChild(span);

        // Change the button to "Save"
        btn.textContent = "Save";
    } 
    // If the button says "Save"
    else {
        // Get the input box and its text
        const inputField = li.querySelector("input[type='text']");
        const newText = inputField.value.trim();

        // If the input is empty, don't save
        if (newText === "") return;

        // Create a new <span> with the updated text
        const newSpan = document.createElement("span");
        newSpan.textContent = newText;

        // Replace the input with the new <span>
        li.insertBefore(newSpan, inputField);
        li.removeChild(inputField);

        // Change the button back to "Edit"
        btn.textContent = "Edit";
    }
}
inputField.focus();
inputField.style.flex = "1";
