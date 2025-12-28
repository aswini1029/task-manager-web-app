function addTask() {
  const input = document.getElementById("taskInput");
  const list = document.getElementById("taskList");

  if(input.value === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${input.value} <button onclick="this.parentElement.remove()">X</button>`;
  list.appendChild(li);

  input.value = "";
}
