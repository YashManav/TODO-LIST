const taskInput = document.getElementById("todo-input");
const addBtn = document.getElementById("submit");

addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (!taskText) {
        return;
    }

    const taskBox = document.createElement("div");
    taskBox.className = "todo-item";

    const textWrapper = document.createElement("div");
    const taskField = document.createElement("input");
    taskField.type = "text";
    taskField.value = taskText;
    taskField.className = "text";
    taskField.readOnly = true;

    textWrapper.appendChild(taskField);
    taskBox.appendChild(textWrapper);

    const buttons = document.createElement("div");
    buttons.className = "action-items";

    const markDone = document.createElement("i");
    markDone.className = "fa-solid fa-check";

    const editBtn = document.createElement("i");
    editBtn.className = "fa-solid fa-pen-to-square edit";

    const trash = document.createElement("i");
    trash.className = "fa-solid fa-trash";

    buttons.append(markDone, editBtn, trash);
    taskBox.appendChild(buttons);

    document.querySelector(".task-list").appendChild(taskBox);
    taskInput.value = "";

    markDone.addEventListener("click", () => {
        taskField.classList.toggle("done");
    });

    editBtn.addEventListener("click", () => {
        if (taskField.hasAttribute("readonly")) {
            taskField.removeAttribute("readonly");
            taskField.focus();
            editBtn.classList.replace("fa-pen-to-square", "fa-save");
        } else {
            taskField.setAttribute("readonly", true);
            editBtn.classList.replace("fa-save", "fa-pen-to-square");
        }
    });

    trash.addEventListener("click", () => {
        taskBox.remove();
    });
});
