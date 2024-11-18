import { deleteElem } from "./delete.js";
import dragAndDropEvent from "./dragAndDrop.js";
import { drawElem } from "./drawTasks.js";
import saveTask from "./saveLocalStorage.js";
import saveRightDone from "./saveRightDone.js";
const { getTask, setTask } = saveTask("leftSection");
const { getTaskRight, setTaskRight } = saveRightDone("rightSection");
let arrays = {
  setRight: new Set([...getTaskRight()]),
  setLeft: new Set([...getTask()]),
};

function ArrayUpdate(left, right) {
  if (left != "") {
    arrays.setLeft.add(left);
    arrays.setRight.delete(left);
  }
  if (right != "") {
    arrays.setRight.add(right);
    arrays.setLeft.delete(right);
  }
  setTask(Array.from(arrays.setLeft));
  setTaskRight(Array.from(arrays.setRight));
  updateLenghtArr();
}

function updateLenghtArr() {
  let arrLeft = getTask();
  const arrRight = getTaskRight();
  drawElem(arrLeft, "#tasks");
  drawElem(arrRight, "#mainTasks");
  deleteElem();

  let addedTasks = document.querySelector(".addedTasks");
  addedTasks.textContent = `All tasks: ${arrays.setLeft.size + arrays.setRight.size}`;
}

export { arrays, ArrayUpdate, updateLenghtArr };
