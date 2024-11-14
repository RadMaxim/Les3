// import "./index.css";
import { waited } from "./loading.js";
import { drawElem } from "./drawTasks.js";
import { updateArr, arr, updateLenghtArr } from "./data.js";
import { checkTask } from "./checkTask.js";

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
    arr.push(data);
    updateArr(arr);
    updateLenghtArr();
  });
});
