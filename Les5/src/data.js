import { drawElem } from "./drawTasks.js";
import saveTask from "./saveLocalStorage.js";
const { getTask, setTask } = saveTask("arrTask");
let arr = getTask();
function updateArr(arrNew) {
  setTask(arrNew);
  drawElem(arrNew);
  updateLenghtArr();
}

function updateLenghtArr() {
  let addedTasks = document.querySelector(".addedTasks");
  addedTasks.textContent = `Tasks: ${arr.length}`;
}
export { arr, updateArr, updateLenghtArr };
