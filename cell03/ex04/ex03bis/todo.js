$(document).ready(() => {
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
    $("#todoList").empty();
    todos.forEach((todo, index) => {
      const li = $("<li>").text(todo);
      li.click(() => removeTodo(index));
      $("#todoList").append(li);
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

  $("#addTaskButton").click(addTodo);

  loadTodos();
});
