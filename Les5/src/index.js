// import "./index.css";
import { waited } from "./loading.js";
import { updateLeftArr } from "./data.js";
import { checkTask } from "./checkTask.js";
import { deleteElem } from "./delete.js";
import saveTask from "./saveLocalStorage.js";
let { setTask, getTask } = saveTask("leftSection");
window.addEventListener("load", () => {
  waited();

  let add = document.getElementById("add");
  let error = document.getElementById("error");
  add.addEventListener("click", () => {
    let task_text = document.getElementById("task_text");
    let data = {
      text: task_text.value,
    };
    let errorText = checkTask(data.text).trim();
    error.innerText = "";
    if (errorText.length != 0) {
      error.innerText = errorText;
      return;
    }
    let arrLeft = getTask();
    arrLeft.push(data);
    setTask(arrLeft);
    updateLeftArr(arrLeft);
  });
  deleteElem();
});
