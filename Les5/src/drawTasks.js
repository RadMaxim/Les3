import { deleteElem } from "./delete.js";

function drawElem(arr, find) {
  let tasks = document.querySelector(find);

  let li = "";
  for (let index = 0; index < arr.length; index++) {
    li += `<li draggable="true" class="task_li">
                <p class="numberTask">${arr[index].num}</p>
                <input type="checkbox" name="" id="">
                <p class="task">${arr[index].text}</p>
                
                <button class="btnDelete">Delete</button>
            </li>`;
  }
  tasks.innerHTML = li;
  if (find == "#tasks") {
    deleteElem();
  }
}
export { drawElem };
