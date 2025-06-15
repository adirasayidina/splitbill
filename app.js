let todos = [];

function renderTodos() {
    const list = document.getElementById("todoList");
    if (!list) return;

    list.innerHTML = "";

    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
      <span>${todo.text}</span>
      <button onclick="removeTodo(${index})">🗑</button>
    `;
        list.appendChild(li);
    });
}

function addTodo() {
    const input = document.getElementById("todoInput");
    const value = input.value.trim();
    if (value) {
        todos.push({ text: value });
        input.value = "";
        renderTodos();
    }
}

function removeTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function initTodo() {
    const addBtn = document.getElementById("addBtn");
    if (addBtn) {
        addBtn.addEventListener("click", addTodo);
    }

    const input = document.getElementById("todoInput");
    if (input) {
        input.addEventListener("keypress", function (e) {
            if (e.key === "Enter") addTodo();
        });
    }

    renderTodos();
}
