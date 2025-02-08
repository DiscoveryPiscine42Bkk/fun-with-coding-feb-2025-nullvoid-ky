const todoList = document.getElementById("todoList");
const addTaskButton = document.getElementById("addTaskButton");

function getCookies(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return JSON.parse(decodeURIComponent(value));
  }
  return [];
}

function setCookies(name, value) {
  document.cookie = `${name}=${encodeURIComponent(
    JSON.stringify(value)
  )}; path=/`;
}

function loadTodos() {
  const todos = getCookies("todos");
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo;
    li.addEventListener("click", () => removeTodo(index));
    todoList.appendChild(li);
  });
}

function addTodo() {
  const task = prompt("Enter a task:");
  if (task && task.trim() !== "") {
    const todos = getCookies("todos");
    todos.push(task);
    setCookies("todos", todos);
    loadTodos();
  }
}

function removeTodo(index) {
  const todos = getCookies("todos");
  todos.splice(index, 1);
  setCookies("todos", todos);
  loadTodos();
}

addTaskButton.addEventListener("click", addTodo);

window.addEventListener("load", loadTodos);
