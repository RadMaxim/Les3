import { deleteElem } from "./delete.js";

function drawElem(arr) {
  let tasks = document.getElementById("tasks");
  let mainTasks = document.getElementById("mainTasks");
  let li = ``;
  for (let index = 0; index < arr.length; index++) {
    li += `<li draggable="true" class="task_li">
                <p class="numberTask">${index + 1}</p>
                <input type="checkbox" name="" id="">
                <p class="task">${arr[index].text}</p>
                
                <button class="btnDelete">Delete</button>
            </li>`;
  }
  tasks.innerHTML = li;

  deleteElem();
}
export { drawElem };
