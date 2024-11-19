import checkBox from "./choiceButton.js";
import dragAndDropEvent from "./dragAndDrop.js";

function drawElem(arr, find) {
  let tasks = document.querySelector(find);
  if (find == "#tasks") {
    tasks.innerHTML = chiceID(true, arr);
  }
  if (find == "#mainTasks") {
    tasks.innerHTML = chiceID(false, arr);
  }

  if (find == "#tasks") {
    dragAndDropEvent();
  }
  checkBox();
}
export { drawElem };
function chiceID(state, arr) {
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
                <div class="choice_section">
      <input ${state ? "" : "checked"} class="li" id="s2${index}" name="s${index}1" type="checkbox">
       <label id="l1" for="s2${index}">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>      
</label>
      <label id="l2" for="s2${index}"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></label>

                </div>
            </li>`;
  }
  return li;
}
