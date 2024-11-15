import { drawElem } from "./drawTasks.js";
import saveTask from "./saveLocalStorage.js";
import saveRightDone from "./saveRightDone.js";
const { getTask, setTask } = saveTask("arrTask");
const { getTaskRight } = saveRightDone();
let arr = getTask();
const rightArr = getTaskRight();
function updateArr(arrNew) {
  setTask(arrNew);
  drawElem(arrNew);
  updateLenghtArr();
}

function updateLenghtArr() {
  let addedTasks = document.querySelector(".addedTasks");
  addedTasks.textContent = `Tasks: ${arr.length}`;
}

export { rightArr, arr, updateArr, updateLenghtArr };
