let todoList = [];

function elementAdder() {
    const input = document.querySelector(".inputElement");
    const dateInput = document.querySelector(".dateInput");

    const value = input.value.trim();
    let date = dateInput.value;

    if (!date) {
        date = new Date().toLocaleDateString();
    }

    if (value) {
        todoList.push({
            text: value,
            date: date
        });

        input.value = "";
        dateInput.value = "";
        renderList();
    }
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    renderList();
}

function renderList() {
    const list = document.getElementById("todo-container");
    list.innerHTML = "";

    todoList.forEach((todo, index) => {
        const item = document.createElement("li");
        item.className = "todo-item";

        const content = document.createElement("div");
        content.className = "todo-content";

        const textSpan = document.createElement("span");
        textSpan.className = "todo-text";
        textSpan.textContent = todo.text;

        const dateSpan = document.createElement("span");
        dateSpan.className = "todo-date";
        dateSpan.textContent = todo.date;

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteTodo(index);

        content.appendChild(textSpan);
        content.appendChild(dateSpan);

        item.appendChild(content);
        item.appendChild(deleteBtn);

        list.appendChild(item);
    });
}
