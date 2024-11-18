import checkTask from "./checkTask.js";
import { ArrayUpdate } from "./data.js";
import { deleteElem } from "./delete.js";
import dragAndDropEvent from "./dragAndDrop.js";

function addElem() {
  let error = document.getElementById("error");
  let add = document.getElementById("add");
  add.addEventListener("click", () => {
    let task_text = document.getElementById("task_text")?.value;

    let errorText = checkTask(task_text).trim();
    error.innerText = "";
    if (errorText.length != 0) {
      error.innerText = errorText;
      return;
    }

    ArrayUpdate(task_text, "");
    deleteElem();
  });
}
export default addElem;
