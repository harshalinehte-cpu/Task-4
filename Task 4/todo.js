let list = document.getElementById("list");

function addTask() {
  let task = document.getElementById("task").value;
  if (task === "") return;

  let li = document.createElement("li");
  li.innerText = task;
  list.appendChild(li);

  saveData();
  document.getElementById("task").value = "";
}

function saveData() {
  localStorage.setItem("tasks", list.innerHTML);
}

function showData() {
  list.innerHTML = localStorage.getItem("tasks");
}

showData();
