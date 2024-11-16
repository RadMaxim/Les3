import { deleteElem } from "./delete.js";
import { drawElem } from "./drawTasks.js";
import saveTask from "./saveLocalStorage.js";
import saveRightDone from "./saveRightDone.js";
const { getTask, setTask } = saveTask("leftSection");
const { getTaskRight, setTaskRight } = saveRightDone("rightSection");

function updateLeftArr(arrNew) {
  updateLenghtArr();
}
function updateArrRight(arrNew) {
  setTaskRight(arrNew);
  updateLenghtArr();
}
function updateLenghtArr() {
  let arrLeft = getTask();
  const arrRight = getTaskRight();
  drawElem(arrLeft, "#tasks");
  drawElem(arrRight, "#mainTasks");
  deleteElem();
  let addedTasks = document.querySelector(".addedTasks");
  addedTasks.textContent = `Tasks: ${arrLeft.length}`;
}

export { updateLeftArr, updateArrRight, updateLenghtArr };
