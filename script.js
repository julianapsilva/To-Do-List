const form = document.getElementById("form");
const newTask = document.getElementById("newTask");
const body = document.getElementsByTagName("body");
const delButton = document.getElementsByClassName("delete");
let index = 0;

form.addEventListener("submit", addTask);

function addTask(e) {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "divTask");
  newDiv.innerHTML = ` <input type="checkbox" name="newToDo" id="newToDo">`;
  newDiv.innerHTML += `<label for = "newToDo">${newTask.value}</ label> `;
  newDiv.innerHTML += `<button id='task${index++}' class='delete'>Deletar</button>`;
  e.preventDefault();
  body[0].appendChild(newDiv);
}

document.body.onclick = function (e) {
  if (~Array.from(e.target.classList).indexOf("delete")) {
    removeTask(e.target.id);
  }
};

function removeTask(taskID) {
  const task = document.getElementById(taskID);
  const div = task.parentNode;
  document.body.removeChild(div);
}
