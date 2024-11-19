import { deleteElem } from "./delete.js";
import dragAndDropEvent from "./dragAndDrop.js";
import { drawElem } from "./drawTasks.js";
import saveTask from "./saveLocalStorage.js";
import saveRightDone from "./saveRightDone.js";
import saveStore from "./saveStore.js";
const { getTask, setTask } = saveTask("leftSection");
const { getTaskRight, setTaskRight } = saveRightDone("rightSection");
let { getTaskStore, setTaskStore } = saveStore("choice");

let arrays = {
  setRight: new Set([...getTaskRight()]),
  setLeft: new Set([...getTask()]),
};
let saveArr = getTaskStore();
let map = new Map([...saveArr]);
function updateStore(text, state) {
  map.set(text, state);
  setTaskStore([...map]);
}
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

export { map, arrays, ArrayUpdate, updateLenghtArr };
