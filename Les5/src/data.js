import { drawElem } from "./drawTasks.js";
import saveTask from "./saveLocalStorage.js";

let arr = [];

function updateArr(arrNew) {
  const { getTask, setTask } = saveTask();
  arr = arrNew;
  setTask(arrNew);
  drawElem(getTask());
}

function updateLenghtArr() {
  let addedTasks = document.querySelector(".addedTasks");
  addedTasks.textContent = `Tasks: ${arr.length}`;
}
export { arr, updateArr, updateLenghtArr };
