import dragAndDropEvent from "./dragAndDrop.js";

function drawElem(arr, find) {
  let tasks = document.querySelector(find);

  let li = "";
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == null) {
      continue;
    }
    li += `<li draggable="true" class="task_li">
                <p class="numberTask">${index + 1}</p>
                <input type="checkbox" name="" id="">
                <p class="task">${arr[index]}</p>
                
                <button class="btnDelete">Delete</button>
            </li>`;
  }
  tasks.innerHTML = li;
  if (find == "#tasks") {
    dragAndDropEvent();
  }
}
export { drawElem };
