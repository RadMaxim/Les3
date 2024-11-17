import checkTask from "./checkTask.js";
import { updateLeftArr } from "./data.js";
import saveTask from "./saveLocalStorage.js";

function addElem() {
  let { setTask, getTask } = saveTask("leftSection");

  let error = document.getElementById("error");
  let add = document.getElementById("add");
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
}
export default addElem;
