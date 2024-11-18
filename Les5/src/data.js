import { deleteElem } from "./delete.js";
import { drawElem } from "./drawTasks.js";
import saveTask from "./saveLocalStorage.js";
import saveRightDone from "./saveRightDone.js";
const { getTask, setTask } = saveTask("leftSection");
const { getTaskRight, setTaskRight } = saveRightDone("rightSection");
let arrays = {
  leftArray: [],
  rightArray: [],
};
function ArrayUpdate(arr) {
  arrays = {
    ...arr,
  };
  console.log(arrays);
}
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

export { arrays, ArrayUpdate, updateLeftArr, updateArrRight, updateLenghtArr };
