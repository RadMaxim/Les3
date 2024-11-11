import {waited} from "./loading.js"
import {drawElem} from "./drawTasks.js"
import {updateArr, arr,updateLenghtArr} from "./data.js"


window.addEventListener("load", () => {
  waited();
  let addedTasks = document.querySelector(".addedTasks");
  let add = document.getElementById("add");
  
  add.addEventListener("click", () => {
    let task_text = document.getElementById("task_text");
    let data = {
      text: task_text.value,
    };
    arr.push(data);
    updateArr(arr);
    updateLenghtArr();
    drawElem(arr);
    
  });
});
